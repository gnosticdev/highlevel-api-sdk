import createClient from 'openapi-fetch'
import type * as Oauth from '../../generated/v2/openapi/oauth'
import { DEFAULT_BASE_AUTH_URL, DEFAULT_BASE_URL } from '../../lib/constants'
import type { AccessType, ScopeLiterals } from '../../lib/scopes-types'
import type { HighLevelConfig } from '../highlevel/config'
import type {
	AccessTokenResponse,
	AuthUrlParams,
	LocationTokenParams,
	OAuthClientInterface,
	SearchInstalledLocationParams,
	TokenData,
	TokenParams,
} from './config'

/**
 * This client has built in methods for generating tokens, refreshing tokens, and storing tokens.
 * You can extend this class to implement your own methods.
 * @see https://highlevel.stoplight.io/docs/integrations/
 */
export class OauthClient<T extends AccessType>
	implements OAuthClientInterface<T>
{
	private _accessToken: string | undefined
	private _refreshToken: string | undefined
	private readonly userType
	private client

	// avoid conflict with the `expiresAt` getter
	private _expiresAt: number | undefined
	readonly scopes: ScopeLiterals<T> | ScopeLiterals<T>[] | (string & {}) = []
	readonly config: HighLevelConfig<T>
	private readonly baseUrl: string
	private readonly baseOauthUrl: string
	// avoid conflict with the `tokenData` property
	private _tokenData: TokenData | undefined
	storeTokenFn?: (tokenData: TokenData) => Promise<TokenData> = undefined

	/**
	 * creates a new oauth client for use with the HighLevel API
	 * @constructor
	 * @param config - configuration for your app
	 */
	constructor(config: HighLevelConfig<T>) {
		this.config = config
		this.baseUrl = config.baseUrl ?? DEFAULT_BASE_URL
		this.baseOauthUrl = config.baseAuthUrl ?? DEFAULT_BASE_AUTH_URL
		this.userType =
			config.accessType === 'Sub-Account'
				? ('Location' as const)
				: ('Company' as const)

		if (config.scopes && config.scopes.length > 0) {
			this.scopes = config.scopes as ScopeLiterals<T>[]
		}
		if (config.storageFunction) {
			this.storeTokenFn = config.storageFunction
		}
		const oauthClient = createClient<Oauth.paths>({
			baseUrl: this.baseUrl,
		})

		this.client = oauthClient
	}

	/**
	 * The token data from the server.
	 */
	get tokenData(): TokenData | undefined {
		return this._tokenData
	}

	/**
	 * The time (in seconds) when the access token expires.
	 */
	get expiresAt(): number | undefined {
		return this._expiresAt
	}

	setExpiresAt(expires_in: number) {
		this._expiresAt = Date.now() + expires_in * 1000
	}

	setTokenData(tokenData: TokenData) {
		this._tokenData = tokenData
	}

	updateTokenData(updatedTokenData: Partial<TokenData>) {
		const newTokenData = Object.assign({}, this._tokenData)
		for (const key in updatedTokenData) {
			const _key = key as keyof typeof updatedTokenData
			if (
				updatedTokenData[key as keyof typeof updatedTokenData] === undefined
			) {
				continue
			}
			// @ts-expect-error - we know the key is valid
			newTokenData[_key] =
				updatedTokenData[key as keyof typeof updatedTokenData]!
		}
		this.setTokenData(newTokenData)
	}

	/**
     * generates the authorization url for your app using the baseAuthUrl, clientId, redirectUri, and scopes.
     * @see https://highlevel.stoplight.io/docs/integrations/a04191c0fabf9-authorization
     * @example
     * ```ts
        https://marketplace.gohighlevel.com/oauth/chooselocation?response_type=code&redirect_uri=https://myapp.com/oauth/callback/gohighlevel&client_id=CLIENT_ID&scope=conversations/message.readonly conversations/message.write
     * ```
     */
	get getAuthorizationURL() {
		const url = new URL(this.baseOauthUrl)
		const requiredParams: AuthUrlParams = {
			client_id: this.config.clientId,
			redirect_uri: this.config.redirectUri,
			scope: Array.isArray(this.scopes) ? this.scopes.join(' ') : this.scopes,
			response_type: 'code',
		}
		const searchParams = new URLSearchParams(requiredParams)
		url.search = searchParams.toString()

		return url.toString()
	}

	/**
	 * Stores everything from the Token response including the accessToken, refreshToken, locationID, and adds the expiresAt time (in ms).
	 * **NOTE**: You can add a `storageFunction` to the config to store the token data in your database or cache.
	 * @param tokenData - the token response from the server
	 * @returns the token data with the `expiresAt` time added
	 */
	async storeTokenData<T>(
		tokenData: T extends Required<AccessTokenResponse> ? T : never,
	) {
		this._accessToken = tokenData.access_token
		this._refreshToken = tokenData.refresh_token
		this.setExpiresAt(tokenData.expires_in)
		this.setTokenData({ ...tokenData, expiresAt: this.expiresAt! })

		if (typeof this.storeTokenFn === 'function') {
			return await this.storeTokenFn({
				...tokenData,
				expiresAt: this.expiresAt!,
			})
		}

		return this.tokenData
	}

	/**
	 * Check if the token is expired or if we need to refresh it
	 * @returns true if the token is expired or if we need to refresh it
	 */
	private isTokenExpired() {
		// if the token expires in the next 5 minutes, we should refresh it
		const isExpired = this.expiresAt
			? this.expiresAt <= Date.now() + 5 * 60 * 1000
			: true

		// if we dont have a refreshToken, we can't refresh the token
		// if we dont have an expires_at, we can't check if the token is expired
		if (!this._refreshToken || !this.expiresAt) return true

		// otherwise return if the token is expired
		return isExpired
	}

	/**
	 * Returns a valid access token by either refreshing the token or exchanging the auth code for a new token.
	 * @param authCode - The authorization code received from the OAuth provider.
	 * @returns The access token.
	 */
	async getAccessToken(authCode?: string) {
		// Directly return the valid accessToken if available
		if (this._accessToken && this.isTokenExpired() === false) {
			return this._accessToken
		}

		if (authCode) {
			process.env.NODE_ENV === 'development' &&
				console.log('exchanging auth code for token', this)
			const tokenResponse = await this.exchangeToken(authCode)
			if (!tokenResponse) throw new Error('No token response received')
			process.env.NODE_ENV === 'development' &&
				console.log('storing token data')
			const storedToken = await this.storeTokenData(tokenResponse)
			return storedToken?.access_token ?? null
		}

		if (this._refreshToken) {
			const tokenResponse = await this.refreshAccessToken()
			const storedToken = await this.storeTokenData(tokenResponse)
			return storedToken?.access_token ?? null
		}

		return null
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
		const token = await this.fetchAccessToken(tokenParams)

		return token
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
		const token = await this.fetchAccessToken(tokenParams)

		return token
	}

	/**
	 * Sends a request to the server to obtain a new token.
	 * @param tokenParams - Auth code params or refresh token params
	 * @returns The token response from the server.
	 */
	private async fetchAccessToken(tokenParams: TokenParams) {
		const { data, error } = await this.client.POST('/oauth/token', {
			body: tokenParams,
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				Accept: 'application/json',
			},
			bodySerializer(body) {
				return new URLSearchParams(body).toString()
			},
		})

		if (error) {
			console.error('error getting token', error)
			throw new Error(error.message?.toString())
		}

		const validatedData = this.validate(data)

		return validatedData
	}

	/**
	 * generate a location AccessToken from Agency AccessToken
	 * @param companyId - your agency id
	 * @param locationId - The locationId is the locationId of the location you want to get a token for
	 */
	async generateLocationToken({ companyId, locationId }: LocationTokenParams) {
		const { data, error, response } = await this.client.POST(
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
				bodySerializer(body) {
					return new URLSearchParams(body).toString()
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

		const validatedData = this.validate(data)

		return validatedData
	}

	/**
	 * Get all locations under your agency that have installed your app
	 * @param query - search for installed locations using any of these properties
	 * @param appId - the appId of your app
	 * @param companyId - the companyId of your agency
	 */
	async getInstalledLocations(query: SearchInstalledLocationParams['query']) {
		const { data, error } = await this.client.GET('/oauth/installedLocations', {
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
		})

		if (error) {
			console.error('Error: installed locations', error)
			throw new Error(error.message?.toString())
		}

		const validatedData = this.validate(data)

		return validatedData
	}

	private validate<T>(data: T): Required<T> {
		for (const key in data) {
			if (data[key as keyof typeof data] === undefined) {
				throw new Error('Invalid data received from server')
			}
		}
		return data as Required<T>
	}
}