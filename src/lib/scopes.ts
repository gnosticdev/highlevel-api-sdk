import { objectEntries } from '../lib/utils'
import { ScopesSchema } from '../v2/types/custom/scopes'
import type { AccessType, HighLevelScopes, ScopeLiterals } from './type-utils'

/**
 * Helper for building app scopes based on the access type.
 */
export class ScopesBuilder<T extends AccessType> {
	/** the access level for your app. Sub-Account is same as Location. Agency same as Company. */
	readonly #accessType: T
	/** a Set containing the scopes that have been added so far */
	protected collection = new Set<ScopeLiterals<T> | (string & {})>()

	/**
	 * @constructor
	 * @param accessType - the type of app access needed. 'Sub-Account' is same as 'Location' and 'Agency' is same as Agency
	 */
	constructor(config: { accessType: T }) {
		this.#accessType = config.accessType
	}

	/** add a scope or an array of scopes from the available scopes for this access type */
	add(scopes: HighLevelScopes<T>): this {
		if (Array.isArray(scopes)) {
			this.collection = new Set([...this.collection, ...scopes])
		} else {
			this.collection.add(scopes)
		}
		return this
	}

	/**
	 * Get **ALL** available scopes for the given access type
	 *
	 * @returns an array of all scopes available to the given accessType
	 */
	all(): ScopeLiterals<T>[] {
		const literals = new Set<ScopeLiterals<T>>()

		for (const [scopeName, scopeValue] of objectEntries(ScopesSchema)) {
			for (const [access, endpoints] of Object.entries(scopeValue)) {
				for (const endpoint of endpoints) {
					if (
						Array.isArray(endpoint.accessType) &&
						endpoint.accessType.includes(this.#accessType)
					) {
						literals.add(
							`${scopeName.toString()}.${access}` as ScopeLiterals<T>,
						)
					}
				}
			}
		}

		return Array.from<ScopeLiterals<T>>(literals)
	}

	/**
	 * Returns a string of all scopes added to the builder so far.
	 *
	 * For use in the authorization redirect uri
	 * @returns a string of the scopes joined by a space
	 * @example
	 * ```ts
	 * client.scopes.add('businesses.read')
	 * client.scopes.add(['calendars.write', 'workflows.readonly'])
	 * client.scopes.get() // "businesses.read calendars.write workflows.readonly"
	 * ```
	 */
	get(): string {
		return Array.from(this.collection).join(' ')
	}

	/**
	 * Check if the builder has a scope or an array of scopes
	 * @param scopes - a single scope or an array of scopes
	 * @returns true if the builder has the scope or scopes, false otherwise
	 */
	has(scopes: HighLevelScopes<T>): boolean {
		if (Array.isArray(scopes)) {
			return scopes.every((scope) => this.collection.has(scope))
		}
		return this.collection.has(scopes)
	}
}
