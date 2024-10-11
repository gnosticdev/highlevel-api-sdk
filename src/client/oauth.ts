import kleur from 'kleur'
import createClient from 'openapi-fetch'
import type { Oauth } from '../generated/v2/openapi'
import type { AccessType, ScopeLiterals } from '../lib/scopes-types'
import type { HighLevelConfig } from './main'
import { ScopesBuilder } from './scopes'

type AccessTokenRequest =
	Oauth.operations['get-access-token']['requestBody']['content']['application/x-www-form-urlencoded']

type RefreshTokenRequest =
	Oauth.operations['get-access-token']['requestBody']['content']['application/x-www-form-urlencoded']

export type AuthUrlParams = {
	response_type: 'code'
	redirect_uri: string
	client_id: string
	scope: string
}

export type TokenParams = AuthCodeParams | RefreshTokenRequest

export type AuthCodeParams<
	GrantType extends AccessTokenRequest['grant_type'] = 'authorization_code',
> = {
	[K in keyof Pick<
		AccessTokenRequest,
		'client_id' | 'client_secret' | 'refresh_token'
	>]: AccessTokenRequest[K]
} & {
	grant_type: GrantType
	user_type: 'Company' | 'Location'
}

export type LocationTokenParams =
	Oauth.components['schemas']['GetLocationAccessCodeBodyDto']

export type LocationTokenResponse =
	Oauth.components['schemas']['GetLocationAccessTokenSuccessfulResponseDto']

export type SearchInstalledLocationParams = {
	query: Oauth.operations['get-installed-location']['parameters']['query']
}

export type AccessTokenResponse = Required<
	Oauth.components['schemas']['GetAccessCodeSuccessfulResponseDto']
>

export type TokenData = AccessTokenResponse & {
	expiresAt: number
}

export interface IOauthClient<T extends AccessType> {
	/**
	 * The time (in seconds) when the access token expires. Default expiry is 24 hours from the time it was generated.
	 */
	expiresAt: number
	/**
     * Auto generates the authorization url for your app.
     * @see https://highlevel.stoplight.io/docs/integrations/a04191c0fabf9-authorization
     * @example
     * ```ts
        https://marketplace.gohighlevel.com/oauth/chooselocation?response_type=code&redirect_uri=https://myapp.com/oauth/callback/gohighlevel&client_id=CLIENT_ID&scope=conversations/message.readonly conversations/message.write
     * ```
     */
	getAuthorizationURL: string
	/**
	 * The token response from the server.
	 */
	tokenData: TokenData
	/**
	 * The scopes needed for your app. These must be added to your app in the marketplace.
	 */
	readonly scopes: ScopesBuilder<T> | (string & {})
	readonly config: HighLevelConfig<T>
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

export const DEFAULTS = {
	baseUrl: 'https://services.leadconnectorhq.com',
	baseAuthUrl: 'https://marketplace.gohighlevel.com/oauth/chooselocation',
} as const satisfies Pick<
	HighLevelConfig<AccessType>,
	'baseUrl' | 'baseAuthUrl'
>

/**
 * A client for accessing all endpoints with oauth
 * @see https://highlevel.stoplight.io/docs/integrations/
 */
export class OauthClient<T extends AccessType> implements IOauthClient<T> {
	private accessToken: string | undefined
	private refreshToken: string | undefined
	private readonly userType
	private client

	private _expiresAt: number | undefined
	readonly scopes: ScopesBuilder<T>
	readonly config: HighLevelConfig<T>
	private readonly baseUrl: string
	private readonly baseOauthUrl: string
	private _tokenData: TokenData | undefined
	storeTokenFn?: (tokenData: TokenData) => Promise<TokenData> = undefined

	/**
	 * creates a new oauth client for use with the HighLevel API
	 * @constructor
	 * @param config - configuration for your app
	 */
	constructor(config: HighLevelConfig<T>) {
		this.config = config
		this.baseUrl = config.baseUrl ?? DEFAULTS.baseUrl
		this.baseOauthUrl = config.baseAuthUrl ?? DEFAULTS.baseAuthUrl
		this.userType =
			config.accessType === 'Sub-Account'
				? ('Location' as const)
				: ('Company' as const)

		this.scopes = new ScopesBuilder(this.config)
		if (config.scopes && config.scopes.length > 0) {
			this.scopes.add(config.scopes as ScopeLiterals<T> | ScopeLiterals<T>[])
		}
		if (config.storageFunction) {
			this.storeTokenFn = config.storageFunction
		}
		const oauthClient = createClient<Oauth.paths>({
			baseUrl: this.baseUrl,
		})

		this.client = oauthClient
	}

	get expiresAt() {
		if (!this._expiresAt) throw new Error('expiresAt not set')
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

	get tokenData() {
		if (!this._tokenData) throw new Error('tokenData not set')
		return this._tokenData
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
			scope: this.scopes.get(),
			response_type: 'code',
		}
		const searchParams = new URLSearchParams(requiredParams)
		url.search = searchParams.toString()

		return url.toString()
	}

	/**
	 * Stores everything form the Token response including the accessToken, refreshToken, locationID, and adds the expiresAt time (in ms).
	 * **NOTE**: You can add a `storageFunction` to the config to store the token data in your database or cache.
	 * @param tokenData - the token response from the server
	 * @returns the token data with the `expiresAt` time added
	 */

	async storeTokenData<T>(
		tokenData: T extends Required<AccessTokenResponse> ? T : never,
	) {
		const { access_token, expires_in, refresh_token } = tokenData

		this.accessToken = access_token
		this.refreshToken = refresh_token
		this.setExpiresAt(expires_in)
		this.setTokenData({ ...tokenData, expiresAt: this.expiresAt })

		console.log(kleur.red('stored tokenData to memory:'))
		console.log({
			approvedLocations: tokenData.approvedLocations,
			companyId: tokenData.companyId,
			locationId: tokenData.locationId,
			userId: tokenData.userId,
			userType: tokenData.userType,
			expires: new Date(this.expiresAt).toLocaleString(),
		})

		if (typeof this.storeTokenFn !== 'function') {
			return this.tokenData
		}

		console.log(kleur.red('storing token with custom store function'))
		return this.storeTokenFn({ ...tokenData, expiresAt: this.expiresAt })
	}

	/**
	 * Check if the token is expired or if we need to refresh it
	 * @returns true if the token is expired or if we need to refresh it
	 */
	private isTokenExpired() {
		// if the token expires in the next 5 minutes, we should refresh it
		const isExpired = this.expiresAt <= Date.now() + 5 * 60 * 1000
		console.log(
			kleur.cyan(`need new token? ${!this.refreshToken || !this.expiresAt}`),
		)
		// if we dont have a refreshToken, we can't refresh the token
		// if we dont have an expires_at, we can't check if the token is expired
		if (!this.refreshToken || !this.expiresAt) return true

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
		if (this.accessToken && this.isTokenExpired() === false) {
			return this.accessToken
		}

		if (authCode) {
			const tokenResponse = await this.exchangeToken(authCode)
			if (!tokenResponse) throw new Error('No token response received')

			const storedToken = await this.storeTokenData(tokenResponse)
			return storedToken.access_token
		}

		if (this.refreshToken) {
			const tokenResponse = await this.refreshAccessToken()
			const storedToken = await this.storeTokenData(tokenResponse)
			return storedToken.access_token
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
			code: authCode,
			client_secret: this.config.clientSecret,
			grant_type: 'authorization_code',
			user_type: this.userType,
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
		if (!this.refreshToken) {
			throw new Error('No refresh token available.')
		}
		const tokenParams: TokenParams = {
			client_id: this.config.clientId,
			client_secret: this.config.clientSecret,
			refresh_token: this.refreshToken,
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
