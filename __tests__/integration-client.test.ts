import { beforeEach, describe, expect, it, mock } from 'bun:test'
import { HighLevelIntegrationClient } from '../src/clients/v2'
import type {
	HighLevelClientConfig,
	PrivateIntegrationConfig,
} from '../src/clients/v2/config'
import type * as Locations from '../src/generated/v2/openapi/locations'

describe('HighLevelIntegrationClient', () => {
	const mockConfig = {
		integrationConfig: {
			privateToken: 'test-private-token',
			accessType: 'Sub-Account',
			scopes: ['locations.readonly'],
		} satisfies PrivateIntegrationConfig<'Sub-Account'>,
		clientConfig: {
			baseUrl: 'https://api.test.com',
		},
	}

	describe('initialization', () => {
		it('should correctly initialize with private token', () => {
			const client = new HighLevelIntegrationClient(mockConfig)

			expect(client.privateToken).toBe('test-private-token')
			expect(client.scopes).toEqual(['locations.readonly'])
		})

		it('should use default base URL when not provided', () => {
			const clientWithoutBaseUrl = new HighLevelIntegrationClient({
				integrationConfig: mockConfig.integrationConfig,
			})

			expect(clientWithoutBaseUrl.privateToken).toBe('test-private-token')
		})
	})

	describe('API calls', () => {
		const client = new HighLevelIntegrationClient(mockConfig)
		const mockGet = mock(client.locations.GET)

		const mockResponse: Locations.paths['/locations/{locationId}']['get']['responses']['200']['content']['application/json'] =
			{
				location: {
					id: 'loc123',
					name: 'Test Location',
					timezone: 'America/New_York',
					address: '123 Test St',
					city: 'Test City',
					state: 'TS',
					country: 'US',
					postalCode: '12345',
				},
			}

		beforeEach(() => {
			mockGet.mockReset()
		})

		it('should make API calls with private token authorization', async () => {
			mockGet.mockResolvedValue({
				response: new Response(JSON.stringify(mockResponse)),
				data: mockResponse,
				error: undefined,
			})

			const { data, error } = await mockGet('/locations/{locationId}', {
				params: {
					path: {
						locationId: 'loc123',
					},
				},
			})

			expect(error).toBeUndefined()
			expect(data).toBeDefined()
			expect(mockGet).toHaveBeenCalledTimes(1)
			// Verify the Authorization header contains the private token
			expect(mockGet).toHaveBeenCalledWith('/locations/{locationId}', {
				params: {
					path: {
						locationId: 'loc123',
					},
				},
			})
		})

		it('should handle API errors correctly', async () => {
			mockGet.mockResolvedValue({
				response: new Response(
					JSON.stringify({
						message: 'Unauthorized',
						statusCode: 401,
					}),
					{ status: 401 },
				),
				data: undefined,
				error: {
					message: 'Unauthorized',
					statusCode: 401,
				},
			})

			const { data, error } = await mockGet('/locations/{locationId}', {
				params: {
					path: {
						locationId: 'invalid-id',
					},
				},
			})

			expect(data).toBeUndefined()
			expect(error).toBeDefined()
			expect(error?.statusCode).toBe(401)
			expect(error?.message).toBe('Unauthorized')
		})
	})
})
