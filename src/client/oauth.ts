import createClient from 'openapi-fetch'
import type { paths, operations } from '../api/types/oauth'
import type { AccessType } from './scopes-schema'
import type { HighLevelConfig } from './base'
import { coolConsole } from '@gnosticdev/cool-console'

type AuthInfo =
    operations['get-access-token']['requestBody']['content']['application/x-www-form-urlencoded']

export type TokenParams = AuthCodeParams | RefreshTokenParams
type AuthCodeParams<
    GrantType extends AuthInfo['grant_type'] = 'authorization_code'
> = {
    [K in keyof Pick<
        AuthInfo,
        'client_id' | 'client_secret' | 'code'
    >]: AuthInfo[K]
} & {
    grant_type: GrantType
    user_type: 'Company' | 'Location'
}
type RefreshTokenParams<
    GrantType extends AuthInfo['grant_type'] = 'refresh_token'
> = {
    [K in keyof Pick<
        AuthInfo,
        'client_id' | 'client_secret' | 'refresh_token'
    >]: AuthInfo[K]
} & {
    grant_type: GrantType
    user_type: 'Company' | 'Location'
}

type LocationTokenParams =
    operations['get-location-access-token']['requestBody']['content']['application/x-www-form-urlencoded']

type SearchInstalledLocationParams = {
    query: operations['get-installed-location']['parameters']['query']
}

type TokenResponse = Required<
    operations['get-access-token']['responses']['200']['content']['application/json']
>

export async function createOauthClient<T extends AccessType>(
    config: HighLevelConfig<T>
) {
    const client = new OauthClient(config)
    const tokenResponse = await client.getToken()
}
/**
 * A client for accessing all endpoints with oauth
 * @see https://highlevel.stoplight.io/docs/integrations/
 */
export class OauthClient<T extends AccessType> {
    private expiresAt: number | undefined
    private accessToken: string | undefined
    private refreshToken: string | undefined
    private userType
    private client
    private authCode
    private config: HighLevelConfig<T>
    /**
     * creates a new oauth client with a custom http client
     * @constructor
     * @param config
     * @param client
     */
    constructor(config: HighLevelConfig<T>) {
        this.config = config
        this.userType =
            config.accessType === 'Company'
                ? ('Company' as const)
                : ('Location' as const)
        const baseClient = createClient<paths>({
            baseUrl: config.baseUrl
        })
        this.authCode = config.authCode
        const oauthClient = new Proxy(baseClient, {
            get: (_, key: keyof typeof baseClient) => {
                // logic to handle accessTokens
                const newClient = createClient<paths>({
                    bodySerializer:
                        key !== 'POST'
                            ? undefined
                            : (body) => {
                                  if (body) {
                                      const params = new URLSearchParams(body)
                                      coolConsole
                                          .pink('/POST body:')
                                          .obj(params)
                                      return params
                                  }
                              },
                    baseUrl: config.baseUrl,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        Accept: 'application/json',
                        ...(this.accessToken && {
                            Authorization: `Bearer ${this.accessToken}`
                        })
                    }
                })
                return newClient[key]
            }
        })
        this.client = oauthClient
    }

    private setToken(data: TokenResponse) {
        const { access_token, expires_in, refresh_token } = data
        this.accessToken = access_token
        this.refreshToken = refresh_token
        this.expiresAt = Date.now() + expires_in * 1000

        coolConsole
            .pink('token set!')
            .obj({ access_token, expiresAt: this.expiresAt, refresh_token })
        return data
    }

    private isTokenExpired() {
        // if we dont have a refreshToken, we can't refresh the token
        // if we dont have an expiresAt, we can't check if the token is expired
        if (!this.refreshToken || !this.expiresAt) return true
        // if the token expires in the next 5 minutes, we should refresh it
        return this.expiresAt <= Date.now() + 5 * 60 * 1000
    }

    /**
     * gets and sets the access token for the oauth client
     * @returns the access token
     */
    public async getToken() {
        coolConsole.pink('getting token...')
        if (this.isTokenExpired()) {
            const tokenResponse = await this.generateToken({
                isRefresh: !!this.refreshToken
            })
            this.setToken(tokenResponse)
        }
        return this.accessToken!
    }

    /** Sends a request to retrieve an access token for a Location or Agency */
    private async generateToken({
        isRefresh
    }: {
        isRefresh?: boolean
    }): Promise<TokenResponse> {
        const baseParams: Pick<
            TokenParams,
            'client_id' | 'client_secret' | 'user_type'
        > = {
            client_id: this.config.clientId,
            client_secret: this.config.clientSecret,
            user_type: this.userType
        }
        const tokenParams: TokenParams = {
            ...baseParams,
            ...(isRefresh && this.refreshToken
                ? {
                      grant_type: 'refresh_token',
                      refresh_token: this.refreshToken
                  }
                : {
                      grant_type: 'authorization_code',
                      code: this.authCode
                  })
        }
        const { data, error } = await this.client.POST('/oauth/token', {
            body: tokenParams
        })

        if (error) {
            console.error(error)
            throw new Error(error.message?.toString() ?? 'Unknown error')
        }

        if (!data.access_token || !data.expires_in) {
            console.error(data)
            throw new Error('no accessToken or expires_in received')
        }

        return data as TokenResponse
    }

    /**
     * generate a locationAccessToken from AgencyAccessToken
     * @param companyId - your agency id
     * @param locationId - The locationId is the locationId of the location you want to get a token for
     */
    public async getLocationToken({
        companyId,
        locationId
    }: LocationTokenParams) {
        const { data, error } = await this.client.POST('/oauth/locationToken', {
            body: {
                companyId,
                locationId
            }
        })
        if (error) {
            throw new Error(error.message?.toString() ?? 'Unknown error')
        }
        return data
    }

    /**
     * Get all locations under your agency that have installed your app
     * @param query - search for installed locations using any of these properties
     */
    public async getInstalledLocations(query: SearchInstalledLocationParams) {
        const { data, error } = await this.client.GET(
            '/oauth/installedLocations',
            {
                params: {
                    query
                }
            }
        )

        if (error) {
            throw new Error(error.message?.toString() ?? 'Unknown error')
        }

        return data
    }
}
