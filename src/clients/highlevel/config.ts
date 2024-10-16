import type { AccessType, ScopeLiterals } from '../../lib/scopes-types'
import type { OauthClient } from '../oauth'
import type { TokenData } from '../oauth/config'
/**
 * The configuration for the HighLevel API client with OAuth.
 *
 * - Typed endpoints for the HighLevel API
 * - OAuth2 fields and methods to make getting started easier.
 */
export type HighLevelOauthConfig<T extends AccessType> = {
	/**
	 * client_id from app settings in marketplace.
	 *
	 * **Important:** Your client_id and client_secret must have been created after your scopes were added to your app.
	 * @see https://marketplace.gohighlevel.com/apps
	 */
	readonly clientId: string
	/**
	 * client_secret from app settings in marketplace.
	 *
	 * **Important:** Your client_id and client_secret must have been created after your scopes were added to your app.
	 * @see https://marketplace.gohighlevel.com/apps
	 */
	readonly clientSecret: string
	/**
	 * The access level of your app as defined in the ghl marketplace.
	 *
	 * - `Sub-Account` is same as **Location**.
	 * - `Company` is same as **Agency**
	 * @default 'Sub-Account'
	 */
	readonly accessType: T
	/**
	 * the url to redirect to after the user has authorized the app
	 * - use `client.getAuthorizationUrl()` to generate the the full auth url including your redirectUri, clientId, and scopes
	 */
	readonly redirectUri: string
	/**
	 * base url for the api. no need to change unless you are proxying requests.
	 * @see {@link DEFAULT_BASE_URL}
	 * @default 'https://services.leadconnectorhq.com'
	 */
	readonly baseUrl?: string
	/**
	 * Scopes needed for your app. These must be added to your app in the marketplace.
	 * - available scopes will change depending on your app type.
	 * - can also use either `client.scopes.all()` to use all available scopes for the access type.
	 * - or use `client.scopes.add()` method to add individual scopes after initialization.
	 * @see https://marketplace.gohighlevel.com/apps
	 * @default []
	 */
	readonly scopes?: ScopeLiterals<T>[]
	/**
	 * base url used by the Oauth client to build the redirect uri. no need to change unless you are proxying requests.
	 * @default 'https://marketplace.gohighlevel.com/oauth/chooselocation
	 */
	readonly baseAuthUrl?: string
	/**
	 * the auth code from the redirect uri
	 * - use `client.getAuthCode()` to get the auth code from the query params
	 * @see https://highlevel.stoplight.io/docs/integrations/
	 */
	readonly authCode?: string
	/**
	 * Store the token data in your database or cache
	 * @param fn - The function to use for storing the token data
	 * @default stores the token data in memory on the oauth client
	 *
	 */
	storageFunction?: (tokenData: TokenData) => Promise<TokenData>
	/**
	 * Can pass in a custom oauth client - must implement `OauthClientInterface`.
	 *
	 * @example
	 * ```ts
	 * const customOauthClient = new OauthClient({...})
	 * const client = createHighLevelClient({
	 * 	authCode: '1234567890',
	 * 	oauthClient: new CustomOauthClient(config)
	 * })
	 */
	oauthClient?: OauthClient<T>
}

export type BaseHighLevelConfig = {
	/**
	 * base url for each API endpoint. no need to change unless you are proxying requests.
	 * @default 'https://services.leadconnectorhq.com'
	 */
	baseUrl?: string
}
