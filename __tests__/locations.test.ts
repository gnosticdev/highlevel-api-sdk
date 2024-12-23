import { beforeEach, describe, expect, it, mock } from 'bun:test'
import { HighLevelClient } from '../src/clients/v2/default-client'
import { OauthClientImpl } from '../src/clients/v2/oauth/impl'
import type * as Locations from '../src/generated/v2/openapi/locations'

type MockLocationsResponse =
	Locations.paths['/locations/{locationId}']['get']['responses']['200']['content']['application/json']

describe('Locations Endpoint', () => {
	const client = new HighLevelClient()
	let oauthClient: OauthClientImpl<'Sub-Account'>

	beforeEach(() => {
		// Setup OAuth client
		oauthClient = new OauthClientImpl({
			accessType: 'Sub-Account',
			clientId: process.env.CLIENT_ID!,
			clientSecret: process.env.CLIENT_SECRET!,
			redirectUri: 'http://localhost:3000/auth/callback',
			scopes: ['locations.readonly'],
		})
	})

	describe('GET /locations/{locationId}', () => {
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

		beforeEach(() => {
			mockGet.mockReset()
		})

		it('should successfully fetch a location by ID', async () => {
			// Mock the GET response
			mockGet.mockResolvedValue({
				response: new Response(JSON.stringify(mockResponse)),
				data: mockResponse,
				error: undefined,
			})

			// Make the request
			const { data, error } = await mockGet('/locations/{locationId}', {
				params: {
					path: {
						locationId: 'abc123',
					},
					header: {
						Authorization: 'Bearer test-token',
						Version: '2021-07-28',
					},
				},
			})

			// Assertions
			expect(error).toBeUndefined()
			expect(data).toBeDefined()
			expect(data?.location).toEqual(mockResponse.location!)
			expect(mockGet).toHaveBeenCalledTimes(1)
		})

		it('should handle errors when fetching a location', async () => {
			// Mock an error response
			mockGet.mockResolvedValue({
				response: new Response(
					JSON.stringify({
						message: 'Location not found',
						statusCode: 404,
					}),
					{ status: 404 },
				),
				data: undefined,
				error: {
					message: 'Location not found',
					statusCode: 404,
				},
			})

			// Make the request
			const { data, error } = await mockGet('/locations/{locationId}', {
				params: {
					path: {
						locationId: 'invalid-id',
					},
					header: {
						Authorization: 'Bearer test-token',
						Version: '2021-07-28',
					},
				},
			})

			// Assertions
			expect(data).toBeUndefined()
			expect(error).toBeDefined()
			expect(error?.statusCode).toBe(404)
			expect(error?.message).toBe('Location not found')
			expect(mockGet).toHaveBeenCalledTimes(1)
		})
	})

	describe('POST /locations', () => {
		const mockPost = mock(client.locations.POST)

		const mockCreateLocationData: Locations.components['schemas']['CreateLocationDto'] =
			{
				name: 'New Location',
				companyId: 'comp123',
				address: '456 New St',
				city: 'New City',
				state: 'NY',
				country: 'US',
				postalCode: '67890',
				phone: '+1234567890',
				timezone: 'America/New_York',
			}

		beforeEach(() => {
			mockPost.mockReset()
		})

		it('should successfully create a new location', async () => {
			// Mock successful creation response
			mockPost.mockResolvedValue({
				response: new Response(
					JSON.stringify({
						id: 'new-loc-123',
						...mockCreateLocationData,
					}),
				),
				data: {
					id: 'new-loc-123',
					...mockCreateLocationData,
				},
				error: undefined,
			})

			// Make the request
			const { data, error } = await mockPost('/locations/', {
				body: mockCreateLocationData,
				params: {
					header: {
						Authorization: 'Bearer test-token',
						Version: '2021-07-28',
					},
				},
			})

			// Assertions
			expect(error).toBeUndefined()
			expect(data).toBeDefined()
			expect(data?.id).toBe('new-loc-123')
			expect(data?.name).toBe(mockCreateLocationData.name)
			expect(mockPost).toHaveBeenCalledTimes(1)
		})
	})
})
