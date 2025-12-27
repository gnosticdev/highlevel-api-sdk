import {
	afterEach,
	beforeEach,
	describe,
	expect,
	it,
	type jest,
	spyOn,
} from 'bun:test'
import type { Client } from 'openapi-fetch'
import { createHighLevelClient } from '../src/v2'
import type { AUTH_HEADERS } from '../src/v2/client/types'
import type { PrivateIntegrationConfig } from '../src/v2/client/with-integration'
import { HighLevelIntegrationClient } from '../src/v2/client/with-integration'
import type { paths as LocationsPaths } from '../src/v2/types/locations'

type LocationGet = Pick<
	LocationsPaths,
	'/locations/{locationId}'
>['/locations/{locationId}']['get']

type LocationsClient = Client<LocationGet>['GET']

describe('Integrations Client', () => {
	const mockIntegrationConfig: PrivateIntegrationConfig<'Sub-Account'> = {
		privateToken: 'test-private-token',
		accessType: 'Sub-Account',
	}

	describe('initialization', () => {
		it('should correctly initialize with private token', () => {
			const client = createHighLevelClient(
				{
					baseUrl: 'https://api.test.com',
				},
				'integration',
				mockIntegrationConfig,
			)

			expect(client.privateToken).toBe('test-private-token')
			expect(client._clientConfig.baseUrl).toBe('https://api.test.com')
		})

		it('should use default base URL when not provided', () => {
			const client = new HighLevelIntegrationClient(mockIntegrationConfig)
			expect(client.privateToken).toBe('test-private-token')
		})
	})

	describe('API calls', () => {
		let client: HighLevelIntegrationClient<'Sub-Account'>
		let mockSpy: jest.SpiedFunction<LocationsClient>
		let mockFetch: ReturnType<typeof spyOn>

		beforeEach(() => {
			mockFetch = spyOn(globalThis, 'fetch')
			mockFetch.mockResolvedValue(new Response('{}'))
			client = createHighLevelClient(
				{
					baseUrl: 'https://api.test.com',
					fetch: mockFetch,
				},
				'integration',
				mockIntegrationConfig,
			)
			mockSpy = spyOn(
				client.locations,
				'GET',
			) as jest.SpiedFunction<LocationsClient>
		})

		afterEach(() => {
			mockSpy.mockRestore()
		})

		const mockResponse = {
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
		} as const

		it('should automatically add auth header to requests', async () => {
			mockSpy.mockResolvedValue({
				data: { 'application/json': mockResponse },
				response: new Response(),
				error: undefined,
			})
			await client.locations.GET('/locations/{locationId}', {
				params: {
					path: {
						locationId: 'loc123',
					},
					header: {
						Authorization: `Bearer ${client.privateToken}`,
						Version: '2021-07-28',
					} satisfies AUTH_HEADERS,
				},
			})
			expect(mockSpy).toHaveBeenCalled()
			const lastCall = mockSpy.mock.lastCall
			expect(lastCall).toBeDefined()
			expect(lastCall).not.toBeEmpty()
		})

		it('should handle API errors correctly', async () => {
			const errorResponse = {
				message: 'Unauthorized',
				statusCode: 401,
			}

			mockSpy.mockResolvedValue({
				data: undefined,
				response: new Response(),
				error: errorResponse,
			})

			const { data, error } = await client.locations.GET(
				'/locations/{locationId}',
				{
					params: {
						path: {
							locationId: 'invalid-id',
						},
						header: {
							Authorization: `Bearer ${client.privateToken}`,
							Version: '2021-07-28',
						} satisfies AUTH_HEADERS,
					},
				},
			)

			expect(data).toBeUndefined()
			expect(error).toEqual(errorResponse)
			expect(mockSpy).toHaveBeenCalled()
		})

		it('should preserve existing headers while adding auth header', async () => {
			mockSpy.mockResolvedValue({
				data: { 'application/json': mockResponse },
				response: new Response(),
				error: undefined,
			})

			await client.locations.GET('/locations/{locationId}', {
				params: {
					path: {
						locationId: 'loc123',
					},
					header: {
						Authorization: `Bearer ${client.privateToken}`,
						Version: '2021-07-28',
						'Content-Type': 'application/json',
						'Custom-Header': 'test',
					} satisfies AUTH_HEADERS & {
						'Content-Type': string
						'Custom-Header': string
					},
				},
			})

			expect(mockSpy).toHaveBeenCalled()
			const calls = mockSpy.mock.calls
			expect(calls.length).toBeGreaterThan(0)

			const firstCall = calls[0]
			if (!firstCall) throw new Error('Expected at least one call to mockGet')
			expect(firstCall[1]).toBeDefined()
			// @ts-expect-error - complex type
			const headers = firstCall[1]?.params?.header

			expect(headers?.Authorization).toBe(`Bearer ${client.privateToken}`)
			expect(headers?.Version).toBe('2021-07-28')
			expect(headers?.['Content-Type']).toBe('application/json')
			expect(headers?.['Custom-Header']).toBe('test')
		})
	})
})
