import createClient from 'openapi-fetch'
import type { operations, paths } from '../schema/types/locations'
import type { AccessType } from './scopes.types'
import type { HighLevelConfig } from './sdk'

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
	private client
	constructor(private config: HighLevelConfig<T>) {
		this.client = createClient<paths>({
			baseUrl: config.baseUrl,
		})
	}
	/**
	 * Search for locations by name
	 * @param authToken - the access token for the location
	 * @param query - the search query
	 */
	public async searchLocations({ query, accessToken }: SearchLocationsParams) {
		accessToken
		const { data, error } = await this.client.GET('/locations/search', {
			params: {
				header: {
					Authorization: accessToken,
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
	 * @see https://highlevel.stoplight.io/docs/integrations/0443d7d1a4bd0-overview
	 */
	public async getLocationById(params: GetLocationsParams) {
		const { accessToken, locationId } = params
		const { data, error } = await this.client.GET('/locations/{locationId}', {
			params: {
				header: {
					Authorization: accessToken,
					Version: '2021-07-28',
				},
				path: {
					locationId,
				},
			},
		})

		if (error) {
			throw new Error(error.message?.toString() ?? 'Unknown error')
		}

		return data
	}
}
