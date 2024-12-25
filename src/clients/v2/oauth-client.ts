import type { AccessType, HighLevelScopes } from '../../lib/type-utils'
import type { HighLevelClientConfig } from './base'
import { DEFAULT_BASE_URL, HighLevelClient } from './base'
import { OauthClientImpl } from './oauth/oauth-impl'
import type { TokenData } from './oauth/oauth-types'

export const DEFAULT_BASE_AUTH_URL =
	'https://marketplace.leadconnectorhq.com/oauth/chooselocation'

/**
 * HighLevelClient with built in OAuth methods.
 *
 * To create an instance, use the `createHighLevelClient` function from the main client.
 *
 * @see {@link createHighLevelClient}
 * @example
 * ```ts
 * const client = createAuth('oauth', {
 *   clientId: 'your-client-id',
 *   clientSecret: 'your-client-secret',
 *   redirectUri: 'http://localhost:3000/callback',
 *   accessType: 'Sub-Account',
 *   scopes: ['contacts.readonly']
 * })
 * ```
 * @internal
 */
export class HighLevelClientWithOAuth<
	T extends AccessType,
> extends HighLevelClient<T, OauthClientImpl<T>, undefined> {
	oauth: OauthClientImpl<T>

	constructor(
		oauthConfig: HighLevelOauthConfig<T>,
		clientConfig?: HighLevelClientConfig,
	) {
		super(clientConfig)
		const baseUrl =
			clientConfig?.baseUrl ?? oauthConfig.baseUrl ?? DEFAULT_BASE_URL
		const _oauthConfig: HighLevelOauthConfig<T> = {
			...oauthConfig,
			baseUrl: baseUrl,
			baseAuthUrl: oauthConfig?.baseAuthUrl ?? DEFAULT_BASE_AUTH_URL,
			scopes: oauthConfig.scopes ?? [],
		}
		this.oauth = new OauthClientImpl(_oauthConfig)
	}
}

/**
 * The configuration for the HighLevel API client with OAuth.
 */
export type HighLevelOauthConfig<T extends AccessType> = {
	/**
	 * base url for each API endpoint. no need to change unless you are proxying requests.
	 * @default 'https://services.leadconnectorhq.com'
	 */
	baseUrl?: string
	/**
	 * client_id from app settings in marketplace.
	 *
	 * **Important:** Your client_id and client_secret must have been created after your scopes were added to your app.
	 * @default process.env.HIGHLEVEL_CLIENT_ID
	 * @see https://marketplace.gohighlevel.com/apps
	 */
	clientId: string
	/**
	 * client_secret from app settings in marketplace.
	 *
	 * **Important:** Your client_id and client_secret must have been created after your scopes were added to your app.
	 * @default process.env.HIGHLEVEL_CLIENT_SECRET
	 * @see https://marketplace.gohighlevel.com/apps
	 */
	clientSecret: string
	/**
	 * The access level of your app as defined in the ghl marketplace.
	 *
	 * - `Sub-Account` is same as **Location**.
	 * - `Company` is same as **Agency**
	 */
	accessType: T
	/**
	 * the url to redirect to after the user has authorized the app
	 * - use `client.getAuthorizationUrl()` to generate the the full auth url including your redirectUri, clientId, and scopes
	 */
	redirectUri: string
	/**
	 * Scopes needed for your app. These must be added to your app in the marketplace.
	 *
	 * Available scopes will change depending on your app type.
	 * @see https://marketplace.gohighlevel.com/apps
	 */
	scopes: HighLevelScopes<T>
	/**
	 * base url used by the Oauth client to build the redirect uri. no need to change unless you are proxying requests.
	 * @default `https://marketplace.leadconnectorhq.com/oauth/chooselocation`
	 */
	baseAuthUrl?: string
	/**
	 * the auth code from the redirect uri
	 *
	 * use `client.getAuthCode()` to get the auth code from the query params
	 * @see https://highlevel.stoplight.io/docs/integrations/
	 */
	authCode?: string
	/**
	 * Store the token data in your database or cache
	 * @default `(tokenData) => Promise.resolve(tokenData)`
	 */
	storageFunction?: (tokenData: TokenData) => Promise<TokenData>
}
