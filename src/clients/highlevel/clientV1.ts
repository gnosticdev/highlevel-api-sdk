import createClient, { type ClientOptions } from 'openapi-fetch'
import type * as V1 from '../../generated/v1/openapi'
import type { BaseHighLevelConfig } from './config'

type V1ClientOptions = BaseHighLevelConfig & ClientOptions

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
 * 	headers: {
 * 		Authorization: process.env.HIGHLEVEL_API_KEY!
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
export function createV1Client(config: V1ClientOptions) {
	return createClient<V1.paths>({
		baseUrl: config.baseUrl ?? 'https://rest.gohighlevel.com',
		headers: {
			Authorization: `Bearer ${process.env.HIGHLEVEL_API_KEY}`,
		},
	})
}
