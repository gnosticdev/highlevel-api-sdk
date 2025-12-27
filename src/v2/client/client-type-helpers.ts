import createClient, { type Client } from 'openapi-fetch/src/index.js'
import { HighLevelSDKError } from '../../lib/errors'
import type { HighLevelClientConfig } from './default'
import type { AUTH_HEADERS, ClientWithAuth } from './types'

/**
 * Creates a client with or without authentication based on the presence of auth headers.
 * @param authHeaders - the authentication headers to use for the client.
 * @param options - the options to use for the client.
 * @returns a client with or without authentication based on the presence of auth headers.
 * @example
 * ```ts
 * const client = createClientMaybeAuth({Authorization: 'Bearer 1234567890', Version: '2021-07-28'}, {baseUrl: 'https://services.leadconnectorhq.com'})
 * ```
 */
export function createClientMaybeAuth<
	TPaths extends {},
	THeaders extends AUTH_HEADERS | undefined = undefined,
>(
	authHeaders?: THeaders,
	options: HighLevelClientConfig = {},
): THeaders extends undefined ? Client<TPaths> : ClientWithAuth<TPaths> {
	if (authHeaders) {
		options.headers = {
			...options.headers,
			...authHeaders,
		}
		return createClientWithAuth<TPaths>(authHeaders, options) as any
	}

	return createClient<TPaths>({
		...options,
	}) as any
}

/**
 * Creates an `openapi-fetch` client, and adds the Authentication headers to each request.
 *
 * For use with clients that have the Authentication headers pre-configured.
 *
 * @param options - the client options with required authentication headers.
 * @returns An `openapi-fetch` client with the Authentication headers added to each request.
 */
export function createClientWithAuth<TPaths extends {}>(
	authHeaders: AUTH_HEADERS,
	options: HighLevelClientConfig = {},
): ClientWithAuth<TPaths> {
	if (!authHeaders.Authorization.startsWith('Bearer ')) {
		throw new HighLevelSDKError('INVALID_AUTH_HEADER')
	}
	const merged = {
		...options.headers,
		...authHeaders,
	}
	return createClient<TPaths>({
		...options,
		headers: merged,
	}) as ClientWithAuth<TPaths>
}

// /**
//  * Creates an `openapi-fetch` client, and adds the Authentication headers to each request.
//  *
//  * For use with clients that have the Authentication headers pre-configured.
//  *
//  * @param authHeaders - The Authentication headers to add to each request.
//  * @param options - the `openapi-fetch` client options.
//  * @returns An `openapi-fetch` client with the Authentication headers added to each request.
//  */
// export function createClientWithAuth<TPaths extends {}>(
// 	authHeaders: AuthHeaders,
// 	options?: defaultClient.HighLevelClientConfig,
// ): ClientWithAuth<TPaths> {
// 	if (!authHeaders.Authorization.startsWith('Bearer ')) {
// 		throw new HighLevelSDKError('INVALID_AUTH_HEADER')
// 	}
// 	const config = {
// 		...options,
// 		headers: {
// 			...options?.headers,
// 			...authHeaders,
// 		},
// 	}
// 	return createClient<TPaths>({
// 		...config,
// 	}) as ClientWithAuth<TPaths>
// }
