import createClient, { type ClientOptions } from 'openapi-fetch'
import type * as V1 from '../../generated/v1/openapi'

type V1ClientOptions = ClientOptions & {
	/**
	 * The api key for the HighLevel Agency or Sub-Account.
	 * @default process.env.HIGHLEVEL_API_KEY
	 * @see https://help.gohighlevel.com/support/solutions/articles/48001060529-highlevel-api
	 */
	apiKey?: string
	/**
	 * base url for each API endpoint. no need to change unless you are proxying requests.
	 * @default 'https://rest.gohighlevel.com'
	 */
	baseUrl?: string
}

/**
 * Typed HighLevel v1 endpoints.
 * @see https://public-api.gohighlevel.com
 *
 * @example
 * ```ts
 * const client = createV1Client()
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
 * console.log(data)
 * // {
  contacts: [
    {
      id: "8Sd5n0evL1qsQYLge8Zg",
      locationId: "oDaimu7R2Chc0VYpcADd",
      contactName: "julie gamet",
      firstName: "julie",
      lastName: "gamet",
	  ...
}
 * ```
 */
export function createV1Client(config?: V1ClientOptions) {
	return createClient<V1.paths>({
		baseUrl: config?.baseUrl ?? 'https://rest.gohighlevel.com',
		headers: {
			Authorization: `Bearer ${config?.apiKey ?? process.env.HIGHLEVEL_API_KEY}`,
		},
	})
}
