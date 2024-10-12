import { OauthClient } from '../src/oauth/client'

const oauthClient = new OauthClient({
	accessType: 'Sub-Account',
	clientId: process.env.CLIENT_ID!,
	clientSecret: process.env.CLIENT_SECRET!,
	redirectUri: 'http://localhost:3000/auth/callback',
	scopes: ['locations.readonly'],
})
