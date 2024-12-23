import { afterEach, beforeEach, describe, expect, it, spyOn } from 'bun:test'
import type { Client } from 'openapi-fetch'
import type { AuthHeaders } from '../src/clients/v2/client-types'
import { createHighLevelClient } from '../src/clients/v2/factory'
import type { PrivateIntegrationConfig } from '../src/clients/v2/integration-client'
import { HighLevelIntegrationClient } from '../src/clients/v2/integration-client'

type LocationsClient = Client<{
	'/locations/{locationId}': {
		get: {
			parameters: {
				path: {
					locationId: string
				}
				header: AuthHeaders & {
					'Content-Type'?: string
					'Custom-Header'?: string
				}
			}
			responses: {
				200: {
					content: {
						'application/json': {
							location: {
								id: string
								name: string
								timezone?: string
								address?: string
								city?: string
								state?: string
								country?: string
								postalCode?: string
							}
						}
					}
				}
			}
		}
	}
}>

describe('Integrations Client', () => {
	const mockIntegrationConfig: PrivateIntegrationConfig<'Sub-Account'> = {
		privateToken: 'test-private-token',
		accessType: 'Sub-Account',
		scopes: ['locations.readonly'],
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
			expect(client.scopes).toEqual(['locations.readonly'])
			expect(client._clientConfig.baseUrl).toBe('https://api.test.com')
		})

		it('should use default base URL when not provided', () => {
			const client = new HighLevelIntegrationClient(mockIntegrationConfig)
			expect(client.privateToken).toBe('test-private-token')
		})
	})

	describe('API calls', () => {
		let client: HighLevelIntegrationClient<'Sub-Account'>
		let mockSpy: JestMock.SpyInstance<LocationsClient['GET']>

		beforeEach(() => {
			client = createHighLevelClient(
				{
					baseUrl: 'https://api.test.com',
				},
				'integration',
				mockIntegrationConfig,
			)
			mockSpy = spyOn(client.locations, 'GET')
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
					} satisfies AuthHeaders,
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
						} satisfies AuthHeaders,
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
					} satisfies AuthHeaders & {
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
			const headers = firstCall[1]?.params?.header

			expect(headers?.Authorization).toBe(`Bearer ${client.privateToken}`)
			expect(headers?.Version).toBe('2021-07-28')
			expect(headers?.['Content-Type']).toBe('application/json')
			expect(headers?.['Custom-Header']).toBe('test')
		})
	})
})
