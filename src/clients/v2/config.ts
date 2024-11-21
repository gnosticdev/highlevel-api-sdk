import type { ClientOptions } from 'openapi-fetch'
import type { AccessType, ScopeLiterals } from '../../lib/type-utils'
import type { TokenData } from '../oauth/config'

export type BaseHighLevelConfig = {
	/**
	 * base url for each API endpoint. no need to change unless you are proxying requests.
	 * @default 'https://services.leadconnectorhq.com'
	 */
	baseUrl?: string
}

export type HighLevelClientConfig = BaseHighLevelConfig &
	Omit<ClientOptions, 'baseUrl'>

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
	scopes: ScopeLiterals<T>[] | (ScopeLiterals<T> | (string & {}))
	/**
	 * base url used by the Oauth client to build the redirect uri. no need to change unless you are proxying requests.
	 * @default https://marketplace.leadconnectorhq.com/oauth/chooselocation
	 */
	baseAuthUrl?: string
	/**
	 * the auth code from the redirect uri
	 * - use `client.getAuthCode()` to get the auth code from the query params
	 * @see https://highlevel.stoplight.io/docs/integrations/
	 */
	authCode?: string
	/**
	 * Store the token data in your database or cache
	 * @param fn - The function to use for storing the token data
	 * @default stores the token data in memory on the oauth client
	 *
	 */
	storageFunction?: (tokenData: TokenData) => Promise<TokenData>
}

export type PrivateIntegrationConfig<T extends AccessType> =
	BaseHighLevelConfig & {
		privateToken: string
		scopes: ScopeLiterals<T>[]
		accessType: T
	}
