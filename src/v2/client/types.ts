import createClient, { type Client } from 'openapi-fetch/src/index.js'
import { HighLevelSDKError } from '../../lib/errors'
import type * as defaultClient from './default'
import type * as withIntegration from './with-integration'

type HTTPMethod =
	| 'get'
	| 'post'
	| 'put'
	| 'delete'
	| 'patch'
	| 'head'
	| 'options'
	| 'trace'

type RemoveAuthHeaders<T> = T extends {
	parameters: {
		header: infer H
	}
}
	? H extends {
			Authorization: string
			Version: string
		}
		? {
				parameters: {
					header?: Partial<Pick<H, 'Authorization' | 'Version'>> &
						Omit<H, 'Authorization' | 'Version'>
				} & Omit<T['parameters'], 'header'>
			} & Omit<T, 'parameters'>
		: T
	: never

/**
 * An `openapi-fetch` client with optional Authentication headers.
 *
 * @see {@link createClientWithAuth}
 */
type OptionalAuthParamsClient<T> = T extends Client<infer Paths>
	? Client<{
			[P in keyof Paths]: {
				[M in keyof Paths[P]]: M extends 'parameters'
					? Paths[P][M]
					: M extends HTTPMethod
						? RemoveAuthHeaders<Paths[P][M]>
						: Paths[P][M]
			}
		}>
	: never

export interface ClientWithAuth<TPaths extends {}>
	extends OptionalAuthParamsClient<Client<TPaths>> {}

/**
 * Authentication headers for the HighLevel v2 API.
 */
export type AuthHeaders = {
	/**
	 * The token to use for authentication.
	 *
	 * @example `Bearer 1234567890`
	 */
	Authorization: string
	/**
	 * The version of the API to use.
	 *
	 * @default '2021-07-28'
	 */
	Version: '2021-07-28'
}

/**
 * Creates an `openapi-fetch` client, and adds the Authentication headers to each request.
 *
 * For use with clients that have the Authentication headers pre-configured.
 *
 * @param authHeaders - The Authentication headers to add to each request.
 * @param options - the `openapi-fetch` client options.
 * @returns An `openapi-fetch` client with the Authentication headers added to each request.
 */
export function createClientWithAuth<TPaths extends {}>(
	authHeaders: AuthHeaders,
	options?: defaultClient.HighLevelClientConfig,
): ClientWithAuth<TPaths> {
	if (!authHeaders.Authorization.startsWith('Bearer ')) {
		throw new HighLevelSDKError('INVALID_AUTH_HEADER')
	}
	const config = {
		...options,
		headers: {
			...options?.headers,
			...authHeaders,
		},
	}
	return createClient<TPaths>({
		...config,
	}) as ClientWithAuth<TPaths>
}

export type HighLevelClient = typeof defaultClient.HighLevelClient
export type HighLevelIntegrationClient =
	typeof withIntegration.HighLevelIntegrationClient
