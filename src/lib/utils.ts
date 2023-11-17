import type { number } from 'zod'
import {
    scopesSchema,
    type EndpointGroup,
    type AccessType,
    type Endpoint,
    type ScopesSchema
} from '../client/scopes-schema'
import type { PickDeep, Paths, ConditionalPickDeep, Entries } from 'type-fest'

// export type ScopesSchema = typeof scopesSchema

type Deeper<A extends AccessType, T extends keyof ScopesSchema<A>> = PickDeep<
    ScopesSchema<A>[T],
    Paths<ScopesSchema<A>[T]>
>

type DeeperStill<
    N extends keyof ScopesSchema<A>,
    A extends AccessType
> = ConditionalPickDeep<
    EndpointGroup<A>[keyof Endpoint<A>],
    A,
    { condition: 'extends' }
>

const deep: DeeperStill<'businesses', 'Company'> = ''

type WriteEndoints<A extends AccessType> = {
    [K in keyof ScopesSchema<A>]: Deeper<A, K>
}

type ReadEndpoints<A extends AccessType> = {
    [K in keyof ScopesSchema<A>]: DeeperStill<K, ScopesSchema<A>[K], A>
}

const writeEndpoints: WriteEndoints<'Sub-Account'> = { campaigns: { readonly } }

export function objectKeys<T extends { [K in keyof T]: T[K] }>(
    obj: T
): (keyof T)[] {
    return Object.keys(obj) as (keyof T)[]
}
export function objectEntries<
    TOuter extends { [K in keyof TOuter]: TOuter[K] },
    TInner extends keyof TOuter
>(obj: TOuter): [keyof TOuter, TOuter[keyof TOuter]][] {
    return Object.entries(obj) as [keyof TOuter, TOuter[keyof TOuter]][]
}
