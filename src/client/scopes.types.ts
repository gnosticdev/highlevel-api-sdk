import { scopesSchema } from "../schema/types/scopes"
/**
 * This file is used to generate the types for the scopes schema.
 * By changing the accessType to 'Sub-Account' or 'Company' autocomplete will update with the available types for that accessType.
 */

export type AccessType = "Sub-Account" | "Company"
type ScopesSchema = typeof scopesSchema

type Endpoint<A extends AccessType> = {
	methodAndEndpoint: string
	webhookEvents: string
	accessType: readonly A[]
}

type KeysOfUnion<ObjectType> = ObjectType extends unknown
	? keyof ObjectType
	: never

export type ReadWrite<N extends keyof ScopesSchema> = KeysOfUnion<
	ScopesSchema[N]
>

export type ScopeLiterals<A extends AccessType> = A extends ScopeAccess<
	infer Name,
	infer RW
>
	? Name extends FilteredScopeNames<A>
		? RW extends ReadWrite<Name>
			? `${Name}.${RW}`
			: never
		: never
	: never

export type ScopeAccess<
	N extends keyof ScopesSchema,
	R extends ReadWrite<N>,
> = R extends keyof ScopesSchema[N]
	? ScopesSchema[N][R] extends Endpoint<infer A>[]
		? A
		: never
	: never

// Test out the autocomplete
const access: ScopeAccess<"businesses", "readonly"> = "Sub-Account"

export type FilteredScopeNames<T extends AccessType> = {
	[K in keyof ScopesSchema]: ScopeAccess<
		K,
		ReadWrite<K>
	> extends infer Accessible
		? Accessible extends T
			? K
			: Accessible extends readonly T[]
			  ? K
			  : never
		: never
}[keyof ScopesSchema]

export type FilteredScopesSchema<T extends AccessType> = {
	[K in FilteredScopeNames<T>]: {
		[R in ReadWrite<K>]: ScopesSchema[K][R] extends Endpoint<infer A>[]
			? A extends T
				? Endpoint<A>[]
				: never
			: never
	}
}

// Test out the autocomplete
const tester: ScopeAccess<"campaigns", "readonly"> = "Sub-Account"
