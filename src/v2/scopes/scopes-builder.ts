import type { AccessType, Scopes } from './scope-types'
import { ScopesCollection } from './types/scopes'

export type {
	AccessType,
	AgencyScopes,
	Scopes,
	SubAccountScopes,
} from './scope-types'

/**
 * Helper for building app scopes based on the access type.
 */
export class ScopesBuilder<T extends AccessType> {
	/** a Set containing the scopes that have been added so far */
	collection = new Set<Scopes<T>>()
	/** All valid scopes for this access type */
	private readonly validScopes: readonly Scopes<T>[]

	/**
	 * @constructor
	 * @param accessType - the type of app access needed. 'Sub-Account' is same as 'Location' and 'Agency' is same as Agency
	 */
	constructor(accessType: T) {
		this.validScopes = ScopesCollection[accessType] as readonly Scopes<T>[]
	}

	/** add a scope or an array of scopes from the available scopes for this access type */
	add(scopes: Scopes<T>[]): this {
		this.collection = new Set<Scopes<T>>([...this.collection, ...scopes])
		return this
	}

	/**
	 * Get **ALL** available scopes for the given access type
	 *
	 * @returns an array of all scopes available to the given accessType
	 */
	getAllValid(): readonly Scopes<T>[] {
		return this.validScopes
	}

	/**
	 * Returns a string of all scopes added to the builder so far.
	 *
	 * For use in the authorization redirect uri
	 * @returns a string of the scopes joined by a space
	 * @example
	 * ```ts
	 * client.scopes.add(['calendars.write', 'workflows.readonly'])
	 * client.scopes.get() // "businesses.read calendars.write workflows.readonly"
	 * ```
	 */
	asString(): string {
		return Array.from(this.collection).join(' ')
	}
}

export function createScopes<T extends AccessType>(
	accessType: T,
	scopes: Scopes<T>[],
) {
	const builder = new ScopesBuilder(accessType)
	return builder.add(scopes).asString()
}
