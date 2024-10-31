import type { ScopesSchema } from '../generated/v2/custom/scopes'
/*
 * This file is used to generate the types for the scopes schema.
 * By changing the accessType to 'Sub-Account' or 'Agency' autocomplete will update with the available types for that accessType.
 *
 * the `Private` accessType refers to the Private Integrations for a sub-account that allows access to the V2 api without oauth.
 *
 * _NOTE: The scopes schema are not OpenAPI schemas, which is why they are separated._
 */
export type AccessType = 'Sub-Account' | 'Agency' | 'Private'

type Scopes = typeof ScopesSchema

/**
 * An endpoint with permission levels for a given access type.
 */
type Endpoint<TAccessType extends AccessType> = {
	methodAndEndpoint: string
	webhookEvents: string
	accessType: readonly TAccessType[]
}

/**
 * A permission level for a scope name. Pass in a scope name to get the available permissions.
 * @example
 * ```ts
 * type T = Permission<'businesses'>
 * ```
 */
export type Permission<TScopes extends keyof Scopes> = keyof Scopes[TScopes] &
	string

/**
 * A scope with permission level for a given access type.
 * @example `businesses.readonly`, `locations.write`
 */
export type ScopeLiterals<TAccessType extends AccessType> = {
	[K in FilteredScopeNames<TAccessType>]: `${K}.${Permission<K>}`
}[FilteredScopeNames<TAccessType>]

/**
 * The first part of a scope name.
 * @example `BaseScopeNames<'Sub-Account'>` produces `businesses`, `locations`, etc...
 */
export type BaseScopeNames<T extends AccessType> =
	ScopeLiterals<T> extends `${infer S}.${string}` ? S : never
/**
 * The access type available for a given scope name and permission level.
 */
export type ScopeAccess<
	TScopes extends keyof Scopes,
	TPermission extends Permission<TScopes>,
> = TPermission extends keyof Scopes[TScopes]
	? Scopes[TScopes][TPermission] extends Endpoint<infer TAccess>[]
		? TAccess
		: never
	: never

/**
 * A scope name for a given access type.
 * @example `businesses`, `locations`
 */
export type FilteredScopeNames<T extends AccessType> = {
	[K in keyof Scopes]: ScopeAccess<K, Permission<K>> extends infer TAccess
		? TAccess extends T
			? K
			: TAccess extends readonly T[]
				? K
				: never
		: never
}[keyof Scopes]

/**
 * A scope with permission level for a given access type.
 * @example `FilteredScopes<'Sub-Account'>` produces `businesses.readonly`, `locations.write`, etc...
 */
export type FilteredScopes<T extends AccessType> = {
	[K in FilteredScopeNames<T>]: {
		[R in Permission<K>]: Scopes[K][R] extends Endpoint<infer A>[]
			? A extends T
				? Endpoint<A>[]
				: never
			: never
	}
}

/**
 * Utility to make a key optional in a nested object.
 */
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export type DeepPartialAt<T, K extends any[]> = K extends [
	infer First,
	...infer Rest,
]
	? First extends keyof T
		? {
				[P in keyof T]: P extends First
					? Rest extends []
						? Partial<T[P]> // Make the final property optional
						: DeepPartialAt<T[P], Rest> // Recursively traverse
					: T[P] //
			}
		: T
	: T
