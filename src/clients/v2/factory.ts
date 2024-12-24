import type { Client } from 'openapi-fetch'
import type { AccessType, FilteredScopeNames } from '../../lib/type-utils'
import type { HighLevelClientConfig } from './base'
import { HighLevelClient } from './base'
import {
	HighLevelIntegrationClient,
	type PrivateIntegrationConfig,
} from './integration-client'
import type { HighLevelOauthConfig } from './oauth-client'
import { HighLevelClientWithOAuth } from './oauth-client'
import type { BaseOauthClient } from './oauth/oauth-impl'

type SubAccountScopeNames = FilteredScopeNames<'Sub-Account'>
type SubAccountClientMap = {
	[K in SubAccountScopeNames]: Client<Record<string, unknown>>
}

type AgencyScopeNames = FilteredScopeNames<'Agency'>
type AgencyClientMap = {
	[K in AgencyScopeNames]: Client<Record<string, unknown>>
}

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
	? HighLevelClient<T, BaseOauthClient, undefined>
	: TType extends 'oauth'
		? HighLevelClientWithOAuth<T>
		: HighLevelIntegrationClient<T>

function isOauthConfig<T extends AccessType>(
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	config: AuthConfig<T, any>,
): config is HighLevelOauthConfig<T> {
	return 'clientId' in config && 'clientSecret' in config
}

function isIntegrationConfig<T extends AccessType>(
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	config: AuthConfig<T, any>,
): config is PrivateIntegrationConfig<T> {
	return 'privateToken' in config
}

class HighLevelSDKError extends Error {
	constructor(message: string, options: ErrorOptions) {
		super(message, options)
		this.name = 'HighLevelSDKError'
	}
}

/**
 * Creates a default HighLevel client with typed endpoints.
 *
 * @example
 * ```ts
 * // basic client
 * const client = createHighLevelClient()
 * ```
 */
export function createHighLevelClient<T extends AccessType>(): HighLevelClient<
	T,
	BaseOauthClient,
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
): HighLevelClient<T, BaseOauthClient, undefined>

/**
 * Creates a HighLevel client with support for OAuth.
 *
 * @example
 * ```ts
 * // client with OAuth
 * const client = createHighLevelClient({}, 'oauth', {
 *   clientId: 'your-client-id',
 *   clientSecret: 'your-client-secret',
 *   redirectUri: 'http://localhost:3000/callback',
 *   accessType: 'Sub-Account',
 *   scopes: ['contacts.readonly']
 * })
 *
 * // client with Private Integration
 * const client = createHighLevelClient({}, 'integration', {
 *   privateToken: 'your-token',
 *   accessType: 'Agency',
 *   scopes: ['saas/company.write']
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
	TClient extends AuthClient<T, TType>,
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
): TClient {
	if (!authType || !authConfig) {
		return new HighLevelClient<T, BaseOauthClient, undefined>(
			clientConfig,
		) as TClient
	}
	if (authType === 'oauth' && isOauthConfig(authConfig)) {
		return new HighLevelClientWithOAuth<T>(authConfig, clientConfig) as TClient
	}
	if (authType === 'integration' && isIntegrationConfig(authConfig)) {
		return new HighLevelIntegrationClient<T>(
			authConfig,
			clientConfig,
		) as TClient
	}

	throw new HighLevelSDKError(
		'Invalid authentication type in createHighLevelClient',
		{
			cause: {
				authConfig,
				clientConfig,
			},
		},
	)
}
