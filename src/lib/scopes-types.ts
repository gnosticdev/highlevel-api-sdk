import type { ScopesSchema } from '../generated/other/scopes'
/*
 * This file is used to generate the types for the scopes schema.
 * By changing the accessType to 'Sub-Account' or 'Agency' autocomplete will update with the available types for that accessType.
 *
 * _NOTE: The scopes schema are not OpenAPI schemas, which is why they are separated._
 */
export type AccessType = 'Sub-Account' | 'Agency'
type Scopes = typeof ScopesSchema

/**
 * An endpoint with permission levels for a given access type.
 */
type Endpoint<TAccessType extends AccessType> = {
	methodAndEndpoint: string
	webhookEvents: string
	accessType: readonly TAccessType[]
}

type KeysOfUnion<ObjectType> = ObjectType extends unknown
	? keyof ObjectType
	: never

/**
 * A permission level for a scope name. Pass in a scope name to get the available permissions.
 * @example `readonly`, `write`
 */
export type Permission<TScopes extends keyof Scopes> = KeysOfUnion<
	Scopes[TScopes]
>

/**
 * A scope with permission level for a given access type.
 * @example `businesses.readonly`, `locations.write`
 */
export type ScopeLiterals<TAccessType extends AccessType> = {
	[K in FilteredScopeNames<TAccessType>]: `${K}.${Permission<K>}`
}[FilteredScopeNames<TAccessType>]

/**
 * The access type available for a given scope name and permission level.
 */
export type ScopeAccess<
	N extends keyof Scopes,
	R extends Permission<N>,
> = R extends keyof Scopes[N]
	? Scopes[N][R] extends Endpoint<infer A>[]
		? A
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

export type FilteredScopes<T extends AccessType> = {
	[K in FilteredScopeNames<T>]: {
		[R in Permission<K>]: Scopes[K][R] extends Endpoint<infer A>[]
			? A extends T
				? Endpoint<A>[]
				: never
			: never
	}
}
