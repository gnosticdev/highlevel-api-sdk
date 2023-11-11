import scopesSchema from '@api/schemas/scopes.json'

/**
 * use the accessType to determine the scopes. Assume that all scopes for a sub-account are also available for a company
 */
export function generateScopes(
    accessType: 'Sub-Account' | 'Company' = 'Sub-Account'
) {
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
 * @param accessType - the type of access to request (Sub-Account or Company)
 * @returns
 */
export function generateRedirectUrl(
    redirectUri: string,
    CLIENT_ID: string,
    accessType: 'Sub-Account' | 'Company' = 'Sub-Account'
) {
    const scopes = generateScopes(accessType)

    const baseUrl = 'https://marketplace.gohighlevel.com/oauth/chooselocation'
    const params = new URLSearchParams({
        response_type: 'code',
        redirect_uri: redirectUri,
        client_id: CLIENT_ID,
        scope: scopes.trim()
    })

    return `${baseUrl}?${params.toString()}`
}
