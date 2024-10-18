import { mock } from 'bun:test'
import { OauthClient } from '../src/clients/oauth'
import { HighLevelClient } from '../src/clients/v2'
import type * as Locations from '../src/generated/v2/openapi/locations'

type MockLocationsResponse =
	Locations.paths['/locations/{locationId}']['get']['responses']['200']['content']['application/json']

const oauthClient = new OauthClient({
	accessType: 'Sub-Account',
	clientId: process.env.CLIENT_ID!,
	clientSecret: process.env.CLIENT_SECRET!,
	redirectUri: 'http://localhost:3000/auth/callback',
	scopes: ['locations.readonly'],
})

const client = new HighLevelClient()

const mockGet = mock(client.locations.GET)

const mockResponse: MockLocationsResponse = {
	location: {
		name: 'Test Location',
		address: '123 Main St, Anytown, USA',
		timezone: 'America/New_York',
		id: 'abc123',
		firstName: 'John',
		lastName: 'Doe',
		email: 'john.doe@example.com',
		phone: '1234567890',
		website: 'https://www.example.com',
		logoUrl: 'https://www.example.com/logo.png',
		state: 'CA',
		city: 'Anytown',
		country: 'USA',
		postalCode: '12345',
	},
}

const res = new Response(JSON.stringify(mockResponse))

mockGet.mockResolvedValue({
	response: new Response(JSON.stringify(mockResponse)),
	data: mockResponse,
	error: undefined,
})
