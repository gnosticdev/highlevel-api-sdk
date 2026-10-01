import type { DefaultOauthClient } from '../oauth/impl'
import type { AccessType, Scopes } from '../scopes/scope-types'
import { BaseHighLevelClient } from './base'
import type { HighLevelClientConfig } from './default'
import type { AUTH_HEADERS } from './types'

export type PrivateIntegrationConfig<T extends AccessType> = {
	/**
	 * The access type for the integration. Decides what scopes are available.
	 */
	accessType: T
	/**
	 * The private integration token.
	 *
	 * @see https://marketplace.gohighlevel.com/docs/Authorization/PrivateIntegrationsToken
	 */
	privateToken: string
}

/**
 * HighLevel API client using private integration token for authentication.
 * To create an instance, use the `createHighLevelClient` function from the main client.
 *
 * @see {@link createHighLevelClient}
 *
 * @example
 * ```ts
 * const client = createHighLevelClient({}, 'integration', {
 *   privateToken: process.env.HIGHLEVEL_PRIVATE_TOKEN!,
 *   accessType: 'Sub-Account',
 * })
 * ```
 * @internal
 */
export class HighLevelIntegrationClient<
	T extends AccessType,
> extends BaseHighLevelClient<T, DefaultOauthClient, true> {
	/**
	 * The private token for the integration
	 *
	 * @see https://marketplace.gohighlevel.com/docs/Authorization/PrivateIntegrationsToken
	 */
	privateToken: string
	/**
	 * @deprecated Private Integration scopes are selected in HighLevel. This property is not used.
	 */
	scopes?: Scopes<T>[]

	constructor(
		/**
		 * HighLevel selects the token's scopes. The SDK uses the token to add auth headers to the client.
		 */
		integrationConfig: PrivateIntegrationConfig<T>,
		/**
		 * The `openapi-fetch` client config.
		 *
		 * @default { baseUrl: `https://services.leadconnectorhq.com` }
		 *
		 * @see https://openapi-ts.dev/openapi-fetch
		 */
		clientConfig?: HighLevelClientConfig,
	) {
		const authHeaders: AUTH_HEADERS = {
			Authorization: `Bearer ${integrationConfig.privateToken}`,
			Version: '2021-07-28',
		}
		super(clientConfig, authHeaders)
		this.privateToken = integrationConfig.privateToken
	}
}
