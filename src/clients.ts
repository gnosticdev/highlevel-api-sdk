import createClient from 'openapi-fetch'

import { type paths as contactPaths } from '@api/types/contacts'
import { type paths as locationPaths } from '@api/types/locations'

export const LocationsClient = createClient<locationPaths>({
    baseUrl: Bun.env.API_BASE_URL
})

export const ContactsClient = createClient<contactPaths>({
    baseUrl: Bun.env.API_BASE_URL
})

export async function getLocations() {
    const authToken = process.env.AUTH_TOKEN

    if (!authToken) throw new Error('AUTH_TOKEN not found in .env')
    const { data, error } = await LocationsClient.GET('/locations/search', {
        params: {
            header: {
                Authorization: authToken,
                Version: '2021-07-28'
            },
            query: {}
        }
    })

    if (error) {
        throw new Error(error.message?.toString() ?? 'Unknown error')
    }

    return data
}

// peninsula locationId = '5Y0ggcxwYThSdHUAgiIN'
export async function getContacts(locationId: string) {
    const last30Days = Date.now() - 1000 * 60 * 60 * 24 * 30

    const authToken = process.env.AUTH_TOKEN
    if (!authToken) throw new Error('AUTH_TOKEN not found in .env')

    const { data, error } = await ContactsClient.GET('/contacts/', {
        params: {
            header: {
                Authorization: authToken,
                Version: '2021-07-28'
            },
            query: {
                locationId,
                query: 'John Smith',
                startAfter: last30Days
            }
        }
    })

    if (error) {
        throw new Error(error.message?.toString() ?? 'Unknown error')
    }

    return data
}
