import { HighLevelSDKError } from '../lib/errors'
import type { AccessType } from '../lib/type-utils'
import type { HighLevelClientConfig } from './client/default'
import { HighLevelClient } from './client/default'
import {
	HighLevelIntegrationClient,
	type PrivateIntegrationConfig,
} from './client/with-integration'
import type { HighLevelOauthConfig } from './client/with-oauth'
import { HighLevelClientWithOAuth } from './client/with-oauth'
import type { DefaultOauthClient } from './oauth/impl'

export type { HighLevelClientConfig } from './client/default'
// Export client classes and types for direct import
export { HighLevelClient } from './client/default'
export type { HighLevelClientInterface } from './client/interface'
export type {
	AuthHeaders,
	ClientWithAuth,
} from './client/types'
export { createClientWithAuth } from './client/types'
export type { PrivateIntegrationConfig } from './client/with-integration'
export { HighLevelIntegrationClient } from './client/with-integration'
export type { HighLevelOauthConfig } from './client/with-oauth'
export { HighLevelClientWithOAuth } from './client/with-oauth'

// TODO: use this to limit the endpoints available to sub-account and agency clients
// type SubAccountScopeNames = FilteredScopeNames<'Sub-Account'>
// type SubAccountClientMap = {
// 	[K in SubAccountScopeNames]: Client<Record<string, unknown>>
// }

// type AgencyScopeNames = FilteredScopeNames<'Agency'>
// type AgencyClientMap = {
// 	[K in AgencyScopeNames]: Client<Record<string, unknown>>
// }

type AuthConfig<
	T extends AccessType,
	TType extends 'oauth' | 'integration',
> = TType extends 'oauth'
	? HighLevelOauthConfig<T>
	: PrivateIntegrationConfig<T>

type AuthClient<
	T extends AccessType,
	TType extends 'oauth' | 'integration' = never,
> = TType extends never
	? HighLevelClient<T, DefaultOauthClient, undefined>
	: TType extends 'oauth'
		? HighLevelClientWithOAuth<T>
		: HighLevelIntegrationClient<T>

/**
 * Creates a HighLevel client with typed endpoints.
 *
 * @param clientConfig - the client configuration that will be used on each request.
 * @param authType - the type of authentication to use.
 * @param authConfig - the authentication configuration for either OAuth or Private Integration.
 *
 * @example
 * ```ts
 * // basic client
 * const client = createHighLevelClient()
 * const contacts = client.contacts.GET('/contacts/', {
 *   params: {
 *     header: {
 *       Authorization: 'Bearer 1234567890',
 *       Version: '2021-07-28',
 *     },
 *     query: {
 *       locationId: '1234567890',
 *       query: 'John Doe',
 *     },
 *   },
 * })
 * ```
 */
export function createHighLevelClient<T extends AccessType>(): HighLevelClient<
	T,
	DefaultOauthClient,
	undefined
>
/**
 * Creates a default HighLevel client with typed endpoints.
 *
 * @example
 * ```ts
 * // pass in client config
 * const client = createHighLevelClient({ baseUrl: 'https://custom-url.com' })
 * ```
 */
export function createHighLevelClient<T extends AccessType>(
	clientConfig?: HighLevelClientConfig,
): HighLevelClient<T, DefaultOauthClient, undefined>

/**
 * Creates a HighLevel client with support for OAuth.
 *
 * @example
 * ```ts
 * // client with OAuth
 * const client = createHighLevelClient({}, 'oauth', {
 *	clientId: 'your-client-id',
 *	clientSecret: 'your-client-secret',
 *	redirectUri: 'http://localhost:3000/callback',
 *	accessType: 'Sub-Account',
 *	scopes: ['contacts.readonly'],
 *	storageFunction: async (tokenData) => {
 *		await db.set('tokenData', tokenData)
 *		return tokenData
 *	}
 * })
 * const authUrl = client.oauth.getAuthorizationUrl()
 * // redirect to authUrl, get the code from your callback route.
 * app.get('/auth/callback', async (c) => {
 * 	const code = c.req.query('code')
 * 		if (!code) {
 * 		throw new Error('No code found in callback')
 * 	}
 * 	const token = await client.oauth.getAccessToken(code)
 * 	const contacts = client.contacts.GET('/contacts/', {
 * 		params: {
 * 			query: {
 * 				locationId: '1234567890',
 * 				query: 'John Doe',
 * 			},
 * 			header: {
 * 				Authorization: `Bearer ${token}`,
 * 				Version: '2021-07-28',
 * 			},
 * 		},
 * 	})
 * return c.json(contacts)
 * })
 * ```
 */
export function createHighLevelClient<
	T extends AccessType,
	TType extends 'oauth' | 'integration' = 'oauth',
>(
	clientConfig?: HighLevelClientConfig,
	authType?: TType,
	authConfig?: AuthConfig<T, TType>,
): AuthClient<T, TType>
/**
 * Creates a HighLevel client with support for Private Integration.
 *
 * @example
 * ```ts
 * const client = createHighLevelClient({}, 'integration', {
 *   privateToken: 'your-token',
 *   accessType: 'Agency',
 *   scopes: ['saas/company.write']
 * })
 * ```
 */
export function createHighLevelClient<
	T extends AccessType,
	TType extends 'oauth' | 'integration' = 'integration',
>(
	clientConfig?: HighLevelClientConfig,
	authType?: TType,
	authConfig?: AuthConfig<T, TType>,
): AuthClient<T, TType>

export function createHighLevelClient<
	T extends AccessType,
	TType extends 'oauth' | 'integration',
>(
	/**
	 * The `openapi-fetch` client configuration for the HighLevel API client.
	 * @default undefined
	 *
	 * @link https://openapi-ts.dev/openapi-fetch/
	 */
	clientConfig?: HighLevelClientConfig,
	/**
	 * The type of authentication to use. If undefined, the basic client is returned with typed endpoints but without built-in authentication.
	 * @default undefined
	 */
	authType?: TType,
	/**
	 * The authentication configuration for either OAuth or Private Integration.
	 */
	authConfig?: AuthConfig<T, TType>,
): AuthClient<T, TType> {
	if (!authType || !authConfig) {
		return new HighLevelClient<T, DefaultOauthClient, undefined>(
			clientConfig,
		) as AuthClient<T, TType>
	}
	if (authType === 'oauth' && 'clientId' in authConfig) {
		return new HighLevelClientWithOAuth<T>(
			authConfig,
			clientConfig,
		) as AuthClient<T, TType>
	}
	if (authType === 'integration' && 'privateToken' in authConfig) {
		return new HighLevelIntegrationClient<T>(
			authConfig,
			clientConfig,
		) as AuthClient<T, TType>
	}

	throw new HighLevelSDKError('INVALID_AUTH_TYPE')
}
