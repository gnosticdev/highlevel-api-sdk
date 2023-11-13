import createClient from 'openapi-fetch'

import type { paths, operations } from '../api/generated/locations'
import * as Oauth from '../api/generated/oauth'

export const LocationsClient = createClient<paths>({
    baseUrl: process.env.API_BASE_URL
})

type BaseParams = {
    authToken: string
    query: operations['search-locations']['parameters']['query']
}

export async function searchLocations({ authToken, query }: BaseParams) {
    const { data, error } = await LocationsClient.GET('/locations/search', {
        params: {
            header: {
                Authorization: authToken,
                Version: '2021-07-28'
            },
            query
        }
    })

    if (error) {
        throw new Error(error.message?.toString() ?? 'Unknown error')
    }

    return data
}
