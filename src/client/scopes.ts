import { objectEntries } from '../lib/utils'
import { scopesSchema } from '../schema/types/scopes'
import type {
	AccessType,
	FilteredScopeNames,
	ReadWrite,
	ScopeLiterals,
} from './scopes.types'
import type { HighLevelConfig } from './sdk'

export class ScopesBuilder<T extends AccessType> {
	/** the access level for your app. Sub-Account is same as Location. Company same as Agency. */
	public accessType: T
	/** a Set containing the scopes that have been added so far */
	public collection = new Set<ScopeLiterals<T>>()

	/**
	 * @constructor
	 * @param accessType - the type of app access needed. 'Sub-Account' is same as 'Location' and 'Company' is same as Agency
	 */
	constructor(config: Pick<HighLevelConfig<T>, 'accessType'>) {
		this.accessType = config.accessType
	}

	/** add a scope from the available scopes for this access type */
	public add(scopes: ScopeLiterals<T> | ScopeLiterals<T>[]): this {
		if (Array.isArray(scopes)) {
			this.collection = new Set([...this.collection, ...scopes])
		} else {
			this.collection.add(scopes)
		}
		return this
	}

	/** Utility method to get all available scopes broken down by the scope portion
	 * `businesses.readonly` => name: `businesses`, readwrite: `readonly`
	 * @paramm type - the scope part to return
	 * @param {boolean} array - return the scopes as an array instead of a string
	 * - `names` - return the scope names only (e.g. `businesses` from `businesses.readonly`)
	 * - `readWrite` - return only the `readonly` or `write` from a scope
	 * - `literals` - (used by `all()` method) returns all scopes available to the given accessType in the format required by the authorization redirect uri. e.g. "businesses.read businesses.write locations.read..."
	 */
	public _allAvailable(
		type: 'names' | 'readWrite' | 'literals' = 'literals',
		array?: boolean,
	) {
		const names = new Set<FilteredScopeNames<T>>()
		const readWrite = new Set<ReadWrite<FilteredScopeNames<T>>>()
		const literals = new Set<ScopeLiterals<T>>()
		for (const [scopeName, scopeValue] of objectEntries(scopesSchema)) {
			for (const [access, endpoints] of objectEntries(scopeValue)) {
				for (const endpoint of endpoints) {
					if (
						(endpoint.accessType as readonly AccessType[]).includes(
							this.accessType,
						)
					) {
						readWrite.add(access as ReadWrite<FilteredScopeNames<T>>)
						literals.add(`${scopeName}.${access}` as ScopeLiterals<T>)
						names.add(scopeName.replace('/', ' ') as FilteredScopeNames<T>)
					}
				}
			}
		}

		switch (type) {
			case 'names':
				return array ? [...names] : names
			case 'readWrite':
				return array ? [...readWrite] : readWrite
			case 'literals':
				return array ? [...literals] : [...literals].join(' ')
		}
	}

	/**
	 * Get a string of all scopes added to the builder so far.\
	 * For use in the authorization redirect uri
	 * @returns a string of the scopes joined by a space
	 * @example
	 * ```ts
	 * client.scopes.add("businesses.read")
	 * client.scopes.add("businesses.write")
	 * client.scopes.get() // "businesses.read businesses.write"
	 * ```
	 */
	public get() {
		return [...this.collection].join(' ')
	}

	public has(scopes?: ScopeLiterals<T> | ScopeLiterals<T>[]) {
		if (!scopes) {
			return this.collection.size > 0
		}
		if (Array.isArray(scopes)) {
			return scopes.every((scope) => this.collection.has(scope))
		}
		return this.collection.has(scopes)
	}

	/** Get all scopes for the given access type
	 * - returns scopes as a string for use in the authorization redirect uri
	 */
	public all() {
		return this._allAvailable('literals', true) as ScopeLiterals<T>[]
	}
}
