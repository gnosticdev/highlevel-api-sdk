import { beforeEach, describe, expect, it, mock, spyOn } from 'bun:test'
import {
	type HighLevelClient,
	createHighLevelClient,
} from '../src/clients/highlevel'
import type { OauthClient } from '../src/clients/oauth'

describe('HighLevelClient', () => {
	let client: HighLevelClient<'Agency', OauthClient<'Agency'>>
	let mockOauthClient: OauthClient<'Agency'>

	beforeEach(() => {
		mockOauthClient = {
			getAccessToken: mock(() => Promise.resolve('mock-access-token')),
			exchangeToken: mock(() =>
				Promise.resolve({
					access_token: 'mock-access-token',
					refresh_token: 'mock-refresh-token',
					expires_in: 3600,
				}),
			),
			refreshAccessToken: mock(() =>
				Promise.resolve({
					access_token: 'mock-refreshed-token',
					refresh_token: 'mock-refresh-token',
					expires_in: 3600,
				}),
			),
		} as unknown as OauthClient<'Agency'>

		client = createHighLevelClient({
			oauthClient: mockOauthClient,
			accessType: 'Agency',
			clientId: 'mock-client-id',
			clientSecret: 'mock-client-secret',
			redirectUri: 'http://localhost:3000/auth/callback',
			scopes: ['locations.readonly', 'oauth.write'],
		})
	})

	it('should create a HighLevelClient instance', () => {
		expect(client).toBeDefined()
		expect(client.oauth).toBe(mockOauthClient)
	})

	it('should have locations property', () => {
		expect(client.locations).toBeDefined()
	})

	it('should have campaigns property', () => {
		expect(client.campaigns).toBeDefined()
	})

	it('should have contacts property', () => {
		expect(client.contacts).toBeDefined()
	})

	it('should fetch locations', async () => {
		const mockLocationsResponse = {
			locations: [
				{ id: '1', name: 'Location 1' },
				{ id: '2', name: 'Location 2' },
			],
		}

		const locationsGetSpy = spyOn(client.locations, 'GET').mockResolvedValue({
			data: mockLocationsResponse,
			error: undefined,
			response: new Response(),
		})

		const { data, error } = await client.locations.GET('/locations/search', {
			params: {
				header: {
					Authorization: 'Bearer mock-access-token',
					Version: '2021-07-28',
				},
				query: {
					companyId: '123',
				},
			},
		})

		expect(locationsGetSpy).toHaveBeenCalledWith('/locations/search', {
			params: {
				header: {
					Authorization: 'Bearer mock-access-token',
					Version: '2021-07-28',
				},
				query: {
					companyId: '123',
				},
			},
		})
		expect(data).toEqual(mockLocationsResponse)
		expect(error).toBeUndefined()
	})
})
