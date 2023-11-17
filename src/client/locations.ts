import createClient from 'openapi-fetch'

import type { paths, operations } from '../api/generated/locations'

export const LocationsClient = createClient<paths>({
    baseUrl: 'https://services.leadconnector.com'
})

type Params = {
    authToken: string
    query: operations['search-locations']['parameters']['query']
}

export async function searchLocations({ authToken, query }: Params) {
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
