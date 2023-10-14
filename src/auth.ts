const getToken = async (
    authCode: string,
    requestUri: string,
    accessType: 'Sub-Account' | 'Company'
) => {
    const { CLIENT_ID, CLIENT_SECRET } = Bun.env
    if (!CLIENT_ID || !CLIENT_SECRET)
        throw new Error('Missing CLIENT_ID or CLIENT_SECRET')

    const url = 'https://services.leadconnectorhq.com/oauth/token'
    const options: RequestInit = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Accept: 'application/json'
        },
        body: new URLSearchParams({
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
            grant_type: 'authorization_code',
            code: authCode,
            refresh_token: '',
            user_type: '',
            redirect_uri: requestUri
        })
    }

    try {
        const response = await fetch(url, options)
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.error(error)
    }
}
