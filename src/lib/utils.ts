import scopesSchema from '../api/schemas/scopes.json'

/**
 * use the accessType to determine the scopes. Assume that all scopes for a sub-account are also available for a company
 */
export function generateScopes(accessType: 'Sub-Account' | 'Company') {
    let scopeString = ''
    for (const scope of Object.keys(scopesSchema)) {
        if (scope.includes(accessType)) {
            scopeString += scope + ' '
        }
    }
    return scopeString
}

/**
 * Generate the url to redirect to for the user to authorize the app
 * @param redirectUri - the url to redirect to after the user has authorized the app
 * @param CLIENT_ID - the client id of the app
 * @param accessType - the type of access to request
 *  - Sub-Account (same as Location)
 *  - Company (same as Agency))
 * @returns
 */
export function generateRedirectUrl(
    redirectUri: string,
    CLIENT_ID: string,
    scopeOrAccess: 'Sub-Account' | 'Company'
) {
    const scopes = generateScopes(scopeOrAccess)

    const baseUrl = 'https://marketplace.gohighlevel.com/oauth/chooselocation'
    const params = new URLSearchParams({
        response_type: 'code',
        redirect_uri: redirectUri,
        client_id: CLIENT_ID,
        scope: scopes.trim()
    })

    return `${baseUrl}?${params.toString()}`
}

export function objectKeys<T extends { [K in keyof T]: T[K] }>(
    obj: T
): (keyof T)[] {
    return Object.keys(obj) as (keyof T)[]
}
export function objectEntries<T extends { [K in keyof T]: T[K] }>(
    obj: T
): [keyof T, T[keyof T]][] {
    return Object.entries(obj) as [keyof T, T[keyof T]][]
}
