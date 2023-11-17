import createClient from 'openapi-fetch'
import type { paths, operations } from '../api/generated/oauth'

export const OauthClient = createClient<paths>()

type Params = {
    baseUrl: string
    body: operations['get-access-token']['requestBody']['content']['application/x-www-form-urlencoded']
}

export async function getAccessToken({ body, baseUrl }: Params) {
    const { POST } = createClient<paths>({ baseUrl })
    const { data, error } = await POST('/oauth/token', {
        body
    })

    if (error) {
        throw new Error(error.message?.toString() ?? 'Unknown error')
    }

    return data
}
