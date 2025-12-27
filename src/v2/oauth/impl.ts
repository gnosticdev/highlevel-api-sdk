import createClient, { type Client } from 'openapi-fetch'
import { DEFAULT_V2_BASE_URL } from '../client/default'
import type { HighLevelOauthConfig } from '../client/with-oauth'
import {
	DEFAULT_OAUTH_LOGIN_URL,
	defaultMemoryStorageFunction,
} from '../client/with-oauth'
import type { AccessType } from '../scopes/scope-types'
import type * as Oauth from '../types/oauth'

import type {
	AuthUrlParams,
	LocationTokenParams,
	OAuthClientInterface,
	SearchInstalledLocationParams,
	TokenData,
	TokenParams,
} from './types'

export * from './types'

// ---------------------------------
// Custom Oauth2 Implementation
// ---------------------------------

/**
 * Default `openapi-fetch` client for HighLevel OAuth 2.0 endpoints.
 */
export type DefaultOauthClient = Client<Oauth.paths>

/**
 * This client has built in methods for generating, refreshing, and storing tokens.
 * You can extend this class to implement your own methods.
 * @see https://highlevel.stoplight.io/docs/integrations/
 */
export class OauthClientImpl<T extends AccessType>
	implements OAuthClientInterface
{
	private _accessToken: string | undefined
	private _refreshToken: string | undefined
	/**
	 * Type of user that is accessing the API.
	 *
	 * Only used for generating tokens, similar to `accessType` but uses `Location` (Sub-Account) or `Company` (Agency)
	 */
	private readonly userType

	/**
	 * Underlying oauth client created by `createClient` method from `openapi-fetch`
	 *
	 * Most likely do not need to use this unless special use case.
	 */
	_client: DefaultOauthClient

	// avoid conflict with the `expiresAt` getter
	expiresAt: number | undefined
	readonly scopes: string
	readonly config: HighLevelOauthConfig<T>
	private readonly baseUrl: string
	private readonly baseOauthUrl: string
	// avoid conflict with the `tokenData` property
	tokenData: TokenData | undefined
	storeTokenFn: (tokenData: TokenData) => Promise<TokenData>

	/**
	 * creates a new oauth client for use with the HighLevel API
	 * @constructor
	 * @param config - configuration for your app
	 */
	constructor(config: HighLevelOauthConfig<T>) {
		this.config = config

		// Set Defaults
		this.baseUrl = config.baseUrl ?? DEFAULT_V2_BASE_URL
		this.baseOauthUrl = config.baseAuthUrl ?? DEFAULT_OAUTH_LOGIN_URL
		this.scopes = config.scopes.join(' ')
		if (this.scopes.length === 0) {
			console.warn(
				'No scopes provided! Your app will not be able to access any data.',
			)
		}
		this.userType =
			config.accessType === 'Sub-Account'
				? ('Location' as const)
				: ('Company' as const)

		// Use the provided storage function or default to memory storage
		// The storage function signature expects Promise<TokenData>, but we convert it to Promise<void>
		// to match the storeTokenFn type
		this.storeTokenFn = config.storageFunction
			? async (tokenData: TokenData) => {
					await config.storageFunction!(tokenData)
					return tokenData
				}
			: async (tokenData: TokenData) => {
					await defaultMemoryStorageFunction(tokenData)
					return tokenData
				}

		this._client = createClient<Oauth.paths>({
			baseUrl: this.baseUrl,
		})
	}

	/**
	 * Update the stored token data with the provided token data.
	 * @param updatedTokenData - The token data to update.
	 */
	updateTokenData(updatedTokenData: Partial<TokenData>) {
		// store
		this.tokenData = { ...this.tokenData, ...updatedTokenData } as TokenData
		this.storeTokenFn(this.tokenData)
	}

	/**
     * generates the authorization url for your app using the baseAuthUrl, clientId, redirectUri, and scopes.
     * @see https://highlevel.stoplight.io/docs/integrations/a04191c0fabf9-authorization
     * @example
     * ```ts
        https://marketplace.leadconnectorhq.com/oauth/chooselocation?response_type=code&redirect_uri=https://myapp.com/oauth/callback/gohighlevel&client_id=CLIENT_ID&scope=conversations/message.readonly conversations/message.write
     * ```
     */
	getAuthorizationUrl() {
		const url = new URL(this.baseOauthUrl)
		const requiredParams: AuthUrlParams = {
			client_id: this.config.clientId,
			redirect_uri: this.config.redirectUri,
			scope: this.scopes,
			response_type: 'code',
		}
		const searchParams = new URLSearchParams(requiredParams)
		url.search = searchParams.toString()

		return url.toString()
	}

	/**
	 * Stores the token data using the `storageFunction` including the accessToken, refreshToken, locationID, and adds the expiresAt time (in ms).
	 * **NOTE**: You can add a `storageFunction` to the config to store the token data in your database or cache.
	 * @param tokenData - the token response from the server
	 * @returns the token data with the `expiresAt` time added
	 */
	async storeTokenData(tokenData: TokenData) {
		this._accessToken = tokenData.access_token
		this._refreshToken = tokenData.refresh_token
		const expiresAt = Date.now() + tokenData.expires_in * 1000
		this.tokenData = { ...tokenData, expiresAt }

		return this.storeTokenFn(this.tokenData)
	}

	/**
	 * Check if the token is expired or if we need to refresh it
	 * @returns true if the token is expired or if we need to refresh it
	 */
	private isTokenExpired() {
		if (!this.tokenData?.expiresAt || !this._refreshToken) return true
		return this.tokenData.expiresAt <= Date.now() + 5 * 60 * 1000
	}

	/**
	 * Returns a valid access token by either refreshing the token or exchanging the auth code for a new token.
	 *
	 * Also stores the token via the `storeTokenData` if provided.
	 * @param authCode - The authorization code received from the OAuth provider.
	 * @throws {Error} - If no token response is received or if no auth code or refresh token is provided.
	 * @returns The access token.
	 */
	async getAccessToken(authCode?: string): Promise<string | null> {
		if (this._accessToken && !this.isTokenExpired()) {
			return this._accessToken
		}

		if (authCode) {
			const tokenResponse = await this.exchangeToken(authCode)
			if (!tokenResponse) throw new Error('Error in token exchange')
			await this.storeTokenData(tokenResponse)
			return tokenResponse.access_token
		}

		if (!this._refreshToken) {
			return null
		}

		const tokenResponse = await this.refreshAccessToken()
		await this.storeTokenData(tokenResponse as TokenData)
		return tokenResponse.access_token
	}

	/**
	 * Generates a new access token using the provided authorization code. \
	 * **NOTE**: This method does not save the token data to the client.
	 * To store the token:
	 * - `storeTokenData` - saves the token data.
	 * - `getAccessToken` - fetches and stores the token data.
	 * @param authCode - Parameters required to generate a new token.
	 * @returns The token response from the server.
	 */
	async exchangeToken(authCode: string) {
		const tokenParams: TokenParams = {
			client_id: this.config.clientId,
			client_secret: this.config.clientSecret,
			grant_type: 'authorization_code',
			user_type: this.userType,
			code: authCode,
		}
		const { data, error } = await this.#fetchAccessToken(tokenParams)

		if (error) {
			console.error('Error: exchanging token', error)
			throw new Error(error.message?.toString() ?? String(error))
		}

		return data as TokenData
	}

	/**
	 * Refreshes the current access token.
	 * **NOTE**: This method does not save the token data to the client.
	 * To store the token:
	 * - `storeTokenData` - saves the token data.
	 * - `getAccessToken` - fetches and stores the token data.
	 * @returns The token response from the server.
	 */
	async refreshAccessToken() {
		if (!this._refreshToken) {
			throw new Error('No refresh token available.')
		}
		const tokenParams: TokenParams = {
			client_id: this.config.clientId,
			client_secret: this.config.clientSecret,
			refresh_token: this._refreshToken,
			grant_type: 'refresh_token',
			user_type: this.userType,
		}
		const { data, error } = await this.#fetchAccessToken(tokenParams)

		if (error) {
			console.error('Error: refreshing token', error)
			throw new Error(error.message?.toString() ?? String(error))
		}

		return data as TokenData
	}

	/**
	 * Main method for getting getting a token from HighLevel v2 API.
	 *
	 * Sends a `POST` request to the `/oauth/token` endpoint.
	 *
	 * @param tokenParams - Auth code params or refresh token params
	 * @private
	 */
	async #fetchAccessToken(tokenParams: TokenParams) {
		return this._client.POST('/oauth/token', {
			body: tokenParams,
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				Accept: 'application/json',
			},
			bodySerializer(_body) {
				return new URLSearchParams(_body).toString()
			},
		})
	}

	/**
	 * generate a location AccessToken from Agency AccessToken
	 * @param companyId - your agency id
	 * @param locationId - The locationId is the locationId of the location you want to get a token for
	 */
	async generateLocationToken({ companyId, locationId }: LocationTokenParams) {
		const { data, error, response } = await this._client.POST(
			'/oauth/locationToken',
			{
				body: {
					companyId,
					locationId,
				},
				params: {
					header: {
						Version: '2021-07-28',
					},
				},
				bodySerializer(_body) {
					return new URLSearchParams(_body).toString()
				},
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
					Accept: 'application/json',
				},
			},
		)

		if (error) {
			console.error(await response.text())
			throw new Error(error.message?.toString() ?? String(error))
		}

		return data
	}

	/**
	 * Get all locations under your agency that have installed your app
	 * @param query - search for installed locations using any of these properties
	 * @param appId - the appId of your app
	 * @param companyId - the companyId of your agency
	 */
	async getInstalledLocations(query: SearchInstalledLocationParams['query']) {
		const { data, error } = await this._client.GET(
			'/oauth/installedLocations',
			{
				params: {
					query: {
						...query,
						appId: query.appId,
						companyId: query.companyId,
					},
					header: {
						Version: '2021-07-28',
					},
				},
			},
		)

		if (error) {
			console.error('Error: installed locations', error)
			throw new Error(error.message?.toString())
		}

		return data
	}
}
