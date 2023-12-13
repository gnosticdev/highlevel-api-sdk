import { coolConsole } from "@gnosticdev/cool-console"
import createClient, { type BodySerializer } from "openapi-fetch"
import type { operations, paths as OauthPaths } from "../schema/types/oauth"
import { ScopesBuilder } from "./scopes"
import type { AccessType } from "./scopes-schema"
import type { HighLevelConfig } from "./sdk"

type AccessTokenRequest =
	operations["get-access-token"]["requestBody"]["content"]["application/x-www-form-urlencoded"]

export type AuthUrlParams = {
	response_type: "code"
	redirect_uri: string
	client_id: string
	scope: string
}

export type TokenParams = AuthCodeParams | RefreshTokenParams
type AuthCodeParams<
	GrantType extends AccessTokenRequest["grant_type"] = "authorization_code",
> = {
	[K in keyof Pick<
		AccessTokenRequest,
		"client_id" | "client_secret" | "code"
	>]: AccessTokenRequest[K]
} & {
	grant_type: GrantType
	user_type: "Company" | "Location"
}
type RefreshTokenParams<
	GrantType extends AccessTokenRequest["grant_type"] = "refresh_token",
> = {
	[K in keyof Pick<
		AccessTokenRequest,
		"client_id" | "client_secret" | "refresh_token"
	>]: AccessTokenRequest[K]
} & {
	grant_type: GrantType
	user_type: "Company" | "Location"
}

type LocationTokenParams =
	operations["get-location-access-token"]["requestBody"]["content"]["application/x-www-form-urlencoded"]

type SearchInstalledLocationParams = {
	query: operations["get-installed-location"]["parameters"]["query"]
}

type TokenResponse = Required<
	operations["get-access-token"]["responses"]["200"]["content"]["application/json"]
>

export async function createOauthClient<T extends AccessType>(
	config: HighLevelConfig<T>,
) {
	const client = new OauthClient(config)
	await client.getAccessToken(config.authCode)
	return client
}

const DEFAULTS = {
	baseUrl: "https://services.leadconnectorhq.com",
	baseAuthUrl: "https://marketplace.gohighlevel.com/oauth/chooselocation",
} as const satisfies Pick<
	HighLevelConfig<AccessType>,
	"baseUrl" | "baseAuthUrl"
>

const tokenSerializer: BodySerializer<TokenParams> = (
	body: TokenParams | undefined,
) => {
	if (!body) return undefined
	const params = new URLSearchParams(body)
	coolConsole.pink("Token Serializer /POST body:").obj(params)
	return params
}
/**
 * A client for accessing all endpoints with oauth
 * @see https://highlevel.stoplight.io/docs/integrations/
 */
export class OauthClient<T extends AccessType> {
	private expiresAt: number | undefined
	private accessToken: string | undefined
	private refreshToken: string | undefined
	private readonly userType
	private client
	public readonly scopes: ScopesBuilder<T>
	public readonly config: HighLevelConfig<T>
	private readonly baseUrl: string
	private readonly baseOauthUrl: string
	public tokenData: TokenResponse | undefined
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
			config.accessType === "Sub-Account"
				? ("Location" as const)
				: ("Company" as const)
		const baseClient = createClient<OauthPaths>({
			baseUrl: config.baseUrl,
		})
		this.scopes = new ScopesBuilder(this.config)
		if (config.scopes && config.scopes.length > 0) {
			this.scopes.add(config.scopes)
		}
		const oauthClient = new Proxy(baseClient, {
			get: (_, key: keyof typeof baseClient) => {
				// logic to handle accessTokens
				const newClient = createClient<OauthPaths>({
					bodySerializer: key === "POST" ? tokenSerializer : undefined,
					baseUrl: this.baseUrl,
					headers: {
						"Content-Type": "application/x-www-form-urlencoded",
						Accept: "application/json",
						...(this.accessToken && {
							Authorization: `Bearer ${this.accessToken}`,
						}),
					},
				})
				return newClient[key]
			},
		})
		this.client = oauthClient
	}

	/**
     * Auto generates the authorization url for your app.
     * @see https://highlevel.stoplight.io/docs/integrations/a04191c0fabf9-authorization
     * @example
     * ```ts
        https://marketplace.gohighlevel.com/oauth/chooselocation?response_type=code&redirect_uri=https://myapp.com/oauth/callback/gohighlevel&client_id=CLIENT_ID&scope=conversations/message.readonly conversations/message.write
     * ```
     */
	public get authUrl() {
		const url = new URL(this.baseOauthUrl)
		const requiredParams: AuthUrlParams = {
			client_id: this.config.clientId,
			redirect_uri: this.config.redirectUri,
			scope: this.scopes.get(),
			response_type: "code",
		}
		const searchParams = new URLSearchParams(requiredParams)
		url.search = searchParams.toString()

		return url.toString()
	}

	/**
	 * Stores the accessToken, refreshToken, and calculates the expiresAt date in ms for use in later requests
	 * @param data - the token response from the server
	 */
	private storeTokenResponse(data: TokenResponse) {
		const { access_token, expires_in, refresh_token } = data
		this.accessToken = access_token
		this.refreshToken = refresh_token
		this.expiresAt = Date.now() + expires_in * 1000
		this.tokenData = data
		coolConsole.pink("token set!").obj({
			approvedLocations: data.approvedLocations,
			locationId: data.locationId,
			userId: data.userId,
			userType: data.userType,
			expires: new Date(this.expiresAt).toLocaleString(),
		})
		return data
	}

	/**
	 * Check if the token is expired or if we need to refresh it
	 * @returns true if the token is expired or if we need to refresh it
	 */
	private isTokenExpired() {
		coolConsole.orange(
			`need new token? ${!this.refreshToken || !this.expiresAt}`,
		)
		// if we dont have a refreshToken, we can't refresh the token
		// if we dont have an expiresAt, we can't check if the token is expired
		if (!this.refreshToken || !this.expiresAt) return true
		// if the token expires in the next 5 minutes, we should refresh it
		return this.expiresAt <= Date.now() + 5 * 60 * 1000
	}

	/**
	 * Gets a new access token using an authorization code or refreshes the current token.
	 * @param authCode - The authorization code received from the OAuth provider.
	 * @returns The access token.
	 */
	public async getAccessToken(authCode?: string): Promise<string> {
		coolConsole.pink("getting token...").gold("authCode:").obj(authCode)
		if (!authCode && !this.refreshToken) {
			throw new Error(
				"No refresh token available, need an auth token to initiate the flow.",
			)
		}

		// If an auth code is provided, use it to get a new token
		if (authCode) {
			const tokenResponse = await this.generateAccessToken(authCode)
			this.storeTokenResponse(tokenResponse)
			return this.accessToken!
		}

		// If we have a refresh token and the current token is expired, refresh it
		if (!this.refreshToken && this.isTokenExpired()) {
			const tokenResponse = await this.refreshAccessToken()
			this.storeTokenResponse(tokenResponse)
			return this.accessToken!
		}

		// If the token is still valid, return it
		return this.accessToken!
	}

	/**
	 * Generates a new access token using the provided authorization code.
	 * @param authCode - Parameters required to generate a new token.
	 * @returns The token response from the server.
	 */
	private async generateAccessToken(authCode: string): Promise<TokenResponse> {
		const tokenParams: AuthCodeParams = {
			client_id: this.config.clientId,
			client_secret: this.config.clientSecret,
			code: authCode,
			grant_type: "authorization_code",
			user_type: this.userType,
		}
		return this.requestToken(tokenParams)
	}

	/**
	 * Refreshes the current access token.
	 * @returns The token response from the server.
	 */
	private async refreshAccessToken(): Promise<TokenResponse> {
		if (!this.refreshToken) {
			throw new Error("No refresh token available.")
		}
		const tokenParams: RefreshTokenParams = {
			client_id: this.config.clientId,
			client_secret: this.config.clientSecret,
			refresh_token: this.refreshToken,
			grant_type: "refresh_token",
			user_type: this.userType,
		}
		return this.requestToken(tokenParams)
	}

	/**
	 * Sends a request to the server to obtain a new token.
	 * @param tokenParams - Auth code params or refresh token params
	 * @returns The token response from the server.
	 */
	private async requestToken(tokenParams: TokenParams): Promise<TokenResponse> {
		const { data, error } = await this.client.POST("/oauth/token", {
			body: tokenParams,
		})

		if (error) {
			console.error("error getting token", error)
			throw new Error(error.message?.toString())
		}

		if (!data.access_token || !data.expires_in) {
			console.error(data)
			throw new Error("no accessToken or expires_in received")
		}

		return data as TokenResponse
	}

	/**
	 * generate a location AccessToken from Agency AccessToken
	 * @param companyId - your agency id
	 * @param locationId - The locationId is the locationId of the location you want to get a token for
	 */
	public async generateLocationToken({
		companyId,
		locationId,
	}: LocationTokenParams) {
		const { data, error } = await this.client.POST("/oauth/locationToken", {
			body: {
				companyId,
				locationId,
			},
		})
		if (error) {
			throw new Error(error.message?.toString() ?? String(error))
		}
		return data
	}

	/**
	 * Get all locations under your agency that have installed your app
	 * @param query - search for installed locations using any of these properties
	 */
	public async getInstalledLocations(query: SearchInstalledLocationParams) {
		const { data, error } = await this.client.GET("/oauth/installedLocations", {
			params: {
				query,
			},
		})

		if (error) {
			console.error("error getting installed locations", error)
			throw new Error(error.message?.toString())
		}

		return data
	}
}
