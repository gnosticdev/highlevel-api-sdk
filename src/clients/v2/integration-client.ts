import type { AccessType, ScopeLiterals } from '../../lib/type-utils'
import type { AuthHeaders } from './client-types'
import type { HighLevelClientConfig } from './default-client'
import { HighLevelClient } from './default-client'
import type { BaseOauthClient } from './oauth/impl'

export type PrivateIntegrationConfig<T extends AccessType> = {
	accessType: T
	privateToken: string
	scopes: ScopeLiterals<T>[] | (ScopeLiterals<T> | (string & {}))
}

/**
 * HighLevel API client using private integration token for authentication.
 * To create an instance, use the `createAuth` function from the main client.
 *
 * @example
 * ```ts
 * const client = createAuth('integration', {
 *   privateToken: 'your-token',
 *   accessType: 'Sub-Account',
 *   scopes: ['contacts.readonly']
 * })
 * ```
 * @internal
 */
export class HighLevelIntegrationClient<
	T extends AccessType,
> extends HighLevelClient<T, BaseOauthClient, AuthHeaders> {
	/**
	 * The private token for the integration
	 *
	 * @see https://help.leadconnectorhq.com/support/solutions/articles/155000002774-private-integrations-everything-you-need-to-know
	 */
	privateToken!: string
	/**
	 * The scopes for the integration.
	 *
	 * _NOTE_: in a private integration, we never send off the scopes like we do in Oauth2, but leaving this here for potential future use.
	 */
	scopes!: ScopeLiterals<T>[] | (ScopeLiterals<T> | (string & {}))

	constructor(
		/**
		 * The integration config uses your private token and scopes to add the appropriate headers to the client.
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
		const authHeaders: AuthHeaders = {
			Authorization: `Bearer ${integrationConfig.privateToken}`,
			Version: '2021-07-28',
		}
		super(clientConfig, authHeaders)
		Object.assign(this, integrationConfig)
	}
}
