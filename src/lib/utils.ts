import scopesSchema from '@api/schemas/scopes.json'

export function generateRedirectUrl(
    redirectUri: string,
    CLIENT_ID: string,
    accessType: 'Sub-Account' | 'Company'
) {
    let scopes = ''
    // use the accessType to determine the scopes. Assume that all scopes for a sub-account are also available for a company
    for (const scope of Object.keys(scopesSchema)) {
        if (scope.includes(accessType)) {
            scopes += scope + ' '
        }
    }

    const baseUrl = 'https://marketplace.gohighlevel.com/oauth/chooselocation'
    const params = new URLSearchParams({
        response_type: 'code',
        redirect_uri: redirectUri,
        client_id: CLIENT_ID,
        scope: scopes.trim()
    })

    return `${baseUrl}?${params.toString()}`
}
