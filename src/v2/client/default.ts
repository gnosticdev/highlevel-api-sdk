import type { ClientOptions } from 'openapi-fetch'
import createClient from 'openapi-fetch'
import type { DefaultOauthClient } from '../oauth/impl'
import type { AccessType } from '../scopes/scope-types'
import type * as Oauth from '../types/oauth'
import { BaseHighLevelClient } from './base'

/**
 * default base url for the HighLevel API.
 * @default 'https://services.leadconnectorhq.com'
 */
export const DEFAULT_V2_BASE_URL = 'https://services.leadconnectorhq.com'

export interface HighLevelClientConfig extends ClientOptions {
	/**
	 * base url for each API endpoint. no need to change unless you are proxying requests.
	 * @default 'https://services.leadconnectorhq.com'
	 */
	baseUrl?: string
}

/**
 * Default client for HighLevel API endpoints.
 *
 * @remarks use the `createHighLevelClient` function to create an instance of this client without handling generic types.
 *
 * @see {@link createHighLevelClient}
 *
 * @example
 * ```ts
 * const client = new HighLevelClient({}, {Authorization: 'Bearer 1234567890', Version: '2021-07-28'})
 * const locations = client.locations.GET('/locations/search', {query: {name: 'John Doe'}})
 * ```
 */
export class HighLevelClient<T extends AccessType> extends BaseHighLevelClient<
	T,
	DefaultOauthClient
> {
	oauth: DefaultOauthClient
	constructor(clientConfig?: HighLevelClientConfig) {
		super(clientConfig)
		this.oauth = createClient<Oauth.paths>(this._clientConfig)
	}
}
const client = new HighLevelClient({})
client.businesses.GET('/businesses/{businessId}', {
	params: {
		header: { Version: '2021-07-28' },
		path: { businessId: '1234567890' },
	},
})
