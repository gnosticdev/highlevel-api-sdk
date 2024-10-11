import { objectEntries } from 'src/lib/utils'
import { ScopesSchema } from '../generated/other/scopes'
import type { AccessType, ScopeLiterals } from '../lib/scopes-types'
import type { HighLevelConfig } from './main'

export class ScopesBuilder<T extends AccessType> {
	/** the access level for your app. Sub-Account is same as Location. Agency same as Company. */
	accessType: T
	/** a Set containing the scopes that have been added so far */
	collection = new Set<ScopeLiterals<T>>()

	/**
	 * @constructor
	 * @param accessType - the type of app access needed. 'Sub-Account' is same as 'Location' and 'Agency' is same as Agency
	 */
	constructor(config: Pick<HighLevelConfig<T>, 'accessType'>) {
		this.accessType = config.accessType
	}

	/** add a scope from the available scopes for this access type */
	add(scopes: ScopeLiterals<T> | ScopeLiterals<T>[]): this {
		if (Array.isArray(scopes)) {
			this.collection = new Set([...this.collection, ...scopes])
		} else {
			this.collection.add(scopes)
		}
		return this
	}

	/**
	 * Get all available scopes for the given access type
	 * @returns an array of all scopes available to the given accessType
	 */
	private getAllScopes(): ScopeLiterals<T>[] {
		const literals = new Set<ScopeLiterals<T>>()

		for (const [scopeName, scopeValue] of objectEntries(ScopesSchema)) {
			for (const [access, endpoints] of Object.entries(scopeValue)) {
				for (const endpoint of endpoints) {
					if (
						Array.isArray(endpoint.accessType) &&
						endpoint.accessType.includes(this.accessType)
					) {
						literals.add(`${scopeName}.${access}` as ScopeLiterals<T>)
					}
				}
			}
		}

		return Array.from(literals) as ScopeLiterals<T>[]
	}

	/**
	 * Get all available scopes for the given access type as a string
	 * @returns a string of all scopes available to the given accessType
	 */
	allAvailable(): ScopeLiterals<T> {
		return this.getAllScopes().join(' ') as ScopeLiterals<T>
	}

	/**
	 * Returns a string of all scopes added to the builder so far.\
	 * For use in the authorization redirect uri
	 * @returns a string of the scopes joined by a space
	 * @example
	 * ```ts
	 * client.scopes.add("businesses.read")
	 * client.scopes.add("businesses.write")
	 * client.scopes.get() // "businesses.read businesses.write"
	 * ```
	 */
	get(): string {
		return Array.from(this.collection).join(' ')
	}

	has(scopes?: ScopeLiterals<T> | ScopeLiterals<T>[]): boolean {
		if (!scopes) {
			return this.collection.size > 0
		}
		if (Array.isArray(scopes)) {
			return scopes.every((scope) => this.collection.has(scope))
		}
		return this.collection.has(scopes)
	}
}
