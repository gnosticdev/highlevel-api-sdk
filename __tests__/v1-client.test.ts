import { expect, mock, test } from 'bun:test'
import { createV1Client } from '../src/clients/v1'
import type * as V1 from '../src/generated/v1/openapi'

// Mock the openapi-fetch module
mock.module('openapi-fetch', () => {
	return () => ({
		GET: mock(),
		POST: mock(),
		// Add other methods as needed
	})
})

test('V1 Client', () => {
	const mockApiKey = 'test-api-key'
	const mockBaseUrl = 'https://test.api.com'

	test('should create a client with default options', () => {
		// set process.env.HIGHLEVEL_API_KEY to mockApiKey
		process.env.HIGHLEVEL_API_KEY = mockApiKey
		const client = createV1Client()
		expect(client).toBeDefined()
	})

	test('should create a client with custom options', () => {
		const client = createV1Client({
			apiKey: mockApiKey,
			baseUrl: mockBaseUrl,
		})
		expect(client).toBeDefined()
	})

	test('should make a GET request to fetch contacts', async () => {
		const client = createV1Client({ apiKey: mockApiKey })

		const mockResponse: V1.paths['/v1/contacts/']['get']['responses']['200']['content']['application/json'] =
			{
				contacts: [
					{
						id: '123',
						locationId: '456',
						customField: [{ id: '1', value: 'value' }],
						dateAdded: '2024-01-01',
					},
				],
			}
		// Mock the get method to return our mock response
		client.GET = mock(client.GET)

		const { data, error } = await client.GET('/v1/contacts/', {
			params: {
				query: {
					limit: 10,
					query: 'John Doe',
				},
			},
		})

		expect(error).toBeNull()
		expect(data).toEqual(mockResponse)
		expect(client.GET).toHaveBeenCalledWith('/v1/contacts', {
			params: {
				query: {
					locationId: '456',
				},
			},
		})
	})

	// Add more tests for other endpoints or scenarios as needed
})
