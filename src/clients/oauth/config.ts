import type * as Oauth from '../../generated/v2/openapi/oauth'
import type { AccessType, ScopeLiterals } from '../../lib/type-utils'

type AccessTokenRequest =
	Oauth.operations['get-access-token']['requestBody']['content']['application/x-www-form-urlencoded'] & {
		grant_type: 'authorization_code'
	}

type RefreshTokenRequest =
	Oauth.operations['get-access-token']['requestBody']['content']['application/x-www-form-urlencoded']

/**
 * Search Params appended to the auth url
 * @see https://highlevel.stoplight.io/docs/integrations/a04191c0fabf9-authorization
 */
export type AuthUrlParams = {
	response_type: 'code'
	redirect_uri: string
	client_id: string
	scope: string
}

/**
 * The params used to generate a new access token, or refresh an existing one
 */
export type TokenParams = AuthCodeParams | RefreshTokenRequest

/**
 * The params used to generate a new access token
 */
export type AuthCodeParams<
	TGrantType extends AccessTokenRequest['grant_type'] = 'authorization_code',
> = {
	[K in keyof Pick<
		AccessTokenRequest,
		'client_id' | 'client_secret' | 'refresh_token'
	>]: AccessTokenRequest[K]
} & {
	grant_type: TGrantType
	user_type: 'Company' | 'Location'
}

/**
 * The params used to generate a new location access token
 */
export type LocationTokenParams =
	Oauth.components['schemas']['GetLocationAccessCodeBodyDto']

/**
 * The response from the server when generating a new location access token
 */
export type LocationTokenResponse =
	Oauth.components['schemas']['GetLocationAccessTokenSuccessfulResponseDto']

/**
 * The params used to search for installed locations
 */
export type SearchInstalledLocationParams = {
	query: Oauth.operations['get-installed-location']['parameters']['query']
}

/**
 * The response from the server when generating a new access token
 */
export type AccessTokenResponse = Required<
	Oauth.components['schemas']['GetAccessCodeSuccessfulResponseDto']
>

/**
 * The data stored in the token response.
 * **NOTE** `expiresAt` is a calculated value based on the `expires_in` value from the token response.
 */
export type TokenData = AccessTokenResponse & {
	expiresAt: number
}

/**
 * If providing your own auth provider, you can implement this interface and pass it into the `createHighLevelClient` function.
 */
export interface OAuthClientInterface<T extends AccessType> {
	/**
	 * The time (in seconds) when the access token expires. Default expiry is 24 hours from the time it was generated.
	 */
	expiresAt: number | undefined
	/**
     * Auto generates the authorization url for your app.
     * @see https://highlevel.stoplight.io/docs/integrations/a04191c0fabf9-authorization
     * @example
     * ```ts
        https://marketplace.gohighlevel.com/oauth/chooselocation?response_type=code&redirect_uri=https://myapp.com/oauth/callback/gohighlevel&client_id=CLIENT_ID&scope=conversations/message.readonly conversations/message.write
     * ```
	 */
	getAuthorizationURL(): string
	/**
	 * The token response from the server.
	 */
	tokenData: TokenData | undefined
	/**
	 * The scopes needed for your app. These must be added to your app in the marketplace.
	 */
	readonly scopes: ScopeLiterals<T> | ScopeLiterals<T>[] | (string & {})

	/**
	 * Gets the current access token, or generates a new one if needed.
	 * @param authCode - The authorization code received from the OAuth provider.
	 * @returns The access token.
	 */
	getAccessToken(authCode?: string): Promise<string | null>
	/**
	 * Get all locations under your agency that have installed your app
	 * @param query - search for installed locations using any of these properties
	 * @returns
	 *  */
	getInstalledLocations(
		query: SearchInstalledLocationParams['query'],
	): Promise<
		Oauth.operations['get-installed-location']['responses']['200']['content']['application/json']
	>
	/**
	 * generate a location AccessToken from Agency AccessToken
	 * @param companyId - your agency id
	 * @param locationId - The locationId is the locationId of the location you want to get a token for
	 */
	generateLocationToken(
		params: LocationTokenParams,
	): Promise<LocationTokenResponse>
	/**
	 * Generates a new access token using the provided authorization code.
	 * @param authCode - Parameters required to generate a new token.
	 * @returns The token response from the server.
	 * */
	exchangeToken(authCode: string): Promise<AccessTokenResponse>
	/**
	 * Refreshes the current access token.
	 * @returns The token response from the server.
	 */
	refreshAccessToken(): Promise<AccessTokenResponse>
}

export const DEFAULT_BASE_AUTH_URL =
	'https://marketplace.leadconnectorhq.com/oauth/chooselocation'

export const DEFAULT_BASE_URL = 'https://services.leadconnectorhq.com'
