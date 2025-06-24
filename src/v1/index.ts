import type { ClientOptions } from 'openapi-fetch'
import createClient from 'openapi-fetch'
import { HighLevelSDKError } from '../lib/errors'
import type * as V1 from './types/openapi'

const DEFAULT_V1_BASE_URL = 'https://rest.gohighlevel.com'

/**
 * Options for the HighLevel v1 client.
 *
 * @extends {ClientOptions} - the `openapi-fetch` client options.
 */
export interface V1ClientOptions extends ClientOptions {
	/**
	 * The api key for the HighLevel Agency or Sub-Account.
	 * @see https://help.gohighlevel.com/support/solutions/articles/48001060529-highlevel-api
	 */
	apiKey: string
	/**
	 * base url for each API endpoint. no need to change unless you are proxying requests.
	 * @default 'https://rest.gohighlevel.com'
	 */
	baseUrl?: string
}

/**
 * Creates a client for v1 of the HighLevel API.
 *
 * _Note_: The v1 API uses legacy API keys, use the v2 client for OAuth or Private Integration.
 *
 * @see {@link createHighLevelClient}
 *
 * @see https://public-api.gohighlevel.com
 *
 * @example
 * ```ts
 * const client = createHighLevelV1Client({
 * 	apiKey: process.env.HIGHLEVEL_API_KEY,
 * })
 *
 * const {data, error} = await client.get('/v1/contacts', {
 * 	params: {
 * 		query: {
 * 			locationId: '1234567890'
 * 		}
 * 	  }
 * })
 *
 * if (error) {
 * 	throw new Error(error.message)
 * }
 *
 * console.log(data) // { contacts: [{...}] }
 * ```
 */
export function createHighLevelV1Client(config: V1ClientOptions) {
	if (!config.apiKey) {
		throw new HighLevelSDKError('API_KEY_REQUIRED')
	}

	return createClient<V1.paths>({
		baseUrl: config.baseUrl ?? DEFAULT_V1_BASE_URL,
		headers: {
			Authorization: `Bearer ${config.apiKey}`,
		},
	})
}
