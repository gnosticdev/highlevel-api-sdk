import { LocationsClient } from './locations'
import type { AccessType, ScopeLiterals } from './scopes-schema'
import { OauthClient } from './oauth'
import { ScopesBuilder } from './scopes'
import { coolConsole } from '@gnosticdev/cool-console'

export type HighLevelConfig<T extends AccessType> = {
    /** client_id from app settings in marketplace.
     *
     * **Important:** Your client_id and client_secret must have been created after your scopes were added to your app.
     * @see https://marketplace.gohighlevel.com/apps
     */
    clientId: string
    /** client_secret from app settings in marketplace.
     *
     * **Important:** Your client_id and client_secret must have been created after your scopes were added to your app.
     * @see https://marketplace.gohighlevel.com/apps
     */
    clientSecret: string
    /**
     * type of app as defined in the ghl marketplace.
     *
     * **Note:**
     * - `Sub-Account` is same as Location.
     * - `Company` is same as Agency
     * @default 'Sub-Account'
     */
    accessType: T
    /**
     * the url to redirect to after the user has authorized the app
     * - use `client.getAuthorizationUrl()` to generate the the full auth url including your redirectUri, clientId, and scopes
     */
    redirectUri: string
    /**
     * base url for the api. no need to change unless you are proxying requests.
     * @default 'https://services.leadconnectorhq.com'
     */
    baseUrl?: string
    /**
     * Scopes needed for your app. These must be added to your app in the marketplace.
     * - available scopes will change depending on your app type.
     * - can also use either `client.scopes.allScopes()` to use all available scopes for the access type.
     * - or use `client.scopes.addScopes()` method to add individual scopes after initialization.
     * @see https://marketplace.gohighlevel.com/apps
     */
    scopes?: ScopeLiterals<T>[]
    /**
     * base url used to build the redirect uri. no need to change unless you are proxying requests.
     * @default 'https://marketplace.gohighlevel.com/oauth/chooselocation
     */
    baseOauthUrl?: string
    /**
     * the auth code from the redirect uri
     * - use `client.getAuthCode()` to get the auth code from the query params
     * @see https://highlevel.stoplight.io/docs/integrations/
     */
    authCode?: string
}

export type AuthUrlParams = {
    response_type: 'code'
    redirect_uri: string
    client_id: string
    scope: string
}

type MakeOptional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>

export type BaseConfig<T extends AccessType> = MakeOptional<
    HighLevelConfig<T>,
    'baseOauthUrl' | 'baseUrl'
>

type BaseConfigNoAuth<T extends AccessType> =
    | BaseConfig<T>
    | MakeOptional<BaseConfig<T>, 'authCode'>

/**
 * Client side method to get the auth code from the query params
 * @returns the auth code from the query params
 */
export async function getAuthCodeFromClient() {
    const url = new URL(window.location.href)
    const authCode = url.searchParams.get('code')
    coolConsole.green('authCode: ' + authCode)
    if (!authCode) {
        throw new Error('No auth code found in query params')
    }
    return authCode
}

export function generateAccessToken<T extends AccessType>(
    config: BaseConfigNoAuth<T>
) {
    if (!config.baseUrl) config.baseUrl = BaseClient.defaults.baseUrl
    if (!config.baseOauthUrl)
        config.baseOauthUrl = BaseClient.defaults.baseOauthUrl
    const client = new BaseClient(config)
    return client
}

class BaseClient<T extends AccessType> {
    /** the access level for your app. Sub-Account is same as Location. Company same as Agency. */
    public accessType: T
    public scopes: ScopesBuilder<T>
    /** the full config with defaults */
    public config: HighLevelConfig<T> & {
        baseUrl: string
        baseOauthUrl: string
    }
    constructor(userConfig: BaseConfigNoAuth<T>) {
        this.accessType = userConfig.accessType
        this.config = {
            ...BaseClient.defaults,
            ...userConfig
        }
        this.scopes = new ScopesBuilder(this.config)
        if (userConfig.scopes && userConfig.scopes.length > 0) {
            this.scopes.add(userConfig.scopes)
        }
    }

    public static get defaults() {
        return {
            baseUrl: 'https://services.leadconnectorhq.com',
            baseOauthUrl:
                'https://marketplace.gohighlevel.com/oauth/chooselocation',
            scopes: []
        } satisfies Pick<
            HighLevelConfig<AccessType>,
            'baseUrl' | 'baseOauthUrl' | 'scopes'
        >
    }

    /**
     * Generate the highlevel authorization url for your app.
     * @see https://highlevel.stoplight.io/docs/integrations/a04191c0fabf9-authorization
     * @example
     * ```ts
        https://marketplace.gohighlevel.com/oauth/chooselocation?response_type=code&redirect_uri=https://myapp.com/oauth/callback/gohighlevel&client_id=CLIENT_ID&scope=conversations/message.readonly conversations/message.write
     * ```
     */
    public get authUrl() {
        const url = new URL(this.config.baseOauthUrl)
        const requiredParams: AuthUrlParams = {
            client_id: this.config.clientId,
            redirect_uri: this.config.redirectUri,
            scope: this.scopes.get(),
            response_type: 'code'
        }
        const searchParams = new URLSearchParams(requiredParams)
        url.search = searchParams.toString()

        return url.toString()
    }

    /**
     * Initialize the client with an auth code.
     * If you don't have an auth code, use the `setAuthCode()` method first.
     * @param authCode  - if you have an auth code already, you can pass it in here
     * @returns
     */
    public async exchangeCodeForToken(authCode: string) {
        const config = {
            ...BaseClient.defaults,
            ...this.config,
            authCode: authCode
        } satisfies Required<HighLevelConfig<T>>
        const client = new HighLevelClient(config)
        const tokenResponse = await client.oauth.getToken()
        return tokenResponse
    }
}

export class HighLevelClient<T extends AccessType> {
    /** the locations client for accessing location endpoints */
    public locations: LocationsClient<T>
    public oauth: OauthClient<T>
    constructor(config: HighLevelConfig<T> & { authCode: string }) {
        this.locations = new LocationsClient(config)
        this.oauth = new OauthClient(config)
    }
}
