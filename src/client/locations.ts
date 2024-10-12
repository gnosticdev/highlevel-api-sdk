import createClient from 'openapi-fetch'
import { DEFAULT_BASE_URL } from 'src/lib/constants'
import type { operations, paths } from '../generated/v2/openapi/locations'
import type { HighLevelConfig } from '../types/highlevel-client'
import type { AccessType } from '../types/scopes-builder'

type SearchLocationsParams = {
	/** key terms to search for when looking up a location */
	query: operations['search-locations']['parameters']['query']
	accessToken: string
}

type GetLocationsParams = {
	locationId: operations['get-location']['parameters']['path']['locationId']
	accessToken: string
}

export class LocationsClient<T extends AccessType> {
	/**
	 * The client contains all endpoints for the locations API
	 */
	client
	readonly config: HighLevelConfig<T>
	private readonly baseUrl: string
	readonly userType: 'Location' | 'Agency'
	/**
	 * creates a new locations client for use with the HighLevel API
	 * @constructor
	 * @param config - configuration for your app
	 * @see https://highlevel.stoplight.io/docs/integrations/location-api
	 */
	constructor(config: HighLevelConfig<T>) {
		this.config = config
		this.baseUrl = config.baseUrl ?? DEFAULT_BASE_URL
		this.userType =
			config.accessType === 'Sub-Account'
				? ('Location' as const)
				: ('Agency' as const)

		this.client = createClient<paths>({
			baseUrl: this.baseUrl,
		})
	}
	/**
	 * Search for locations by name
	 * @param authToken - the access token for the location
	 * @param query - the search query
	 */
	async searchLocations({ query, accessToken }: SearchLocationsParams) {
		accessToken
		const { data, error } = await this.client.GET('/locations/search', {
			params: {
				header: {
					Authorization: `Bearer ${accessToken}`,
					Version: '2021-07-28',
				},
				query,
			},
		})

		if (error) {
			throw new Error(error.message?.toString() ?? String(error))
		}

		return data
	}

	/**
	 * Get a location by its id
	 * @param accessToken - the access token for the location
	 * @param locationId - the id of the location
	 * @see https://highlevel.stoplight.io/docs/integrations/d777490312af4-get-location
	 */
	async getLocationById(params: GetLocationsParams) {
		const { accessToken, locationId } = params
		const { data, error } = await this.client.GET('/locations/{locationId}', {
			params: {
				header: {
					Authorization: `Bearer ${accessToken}`,
					Version: '2021-07-28',
				},
				path: {
					locationId,
				},
			},
		})

		if (error) {
			throw new Error(
				`Locations Error: ${error.message?.toString() ?? 'Unknown error'}`,
			)
		}

		return data
	}
}
