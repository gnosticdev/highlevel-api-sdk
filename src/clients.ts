import createClient from 'openapi-fetch'

import { paths as contactPaths } from 'api/types/contacts'
import { paths as locationPaths } from '@api/types/locations'

export const LocationsClient = createClient<locationPaths>({
    baseUrl: 'https://services.leadconnectorhq.com'
})

export const ContactsClient = createClient<contactPaths>({
    baseUrl: 'https://services.leadconnectorhq.com'
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

export async function getContacts() {
    const locationId = '5Y0ggcxwYThSdHUAgiIN'
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
