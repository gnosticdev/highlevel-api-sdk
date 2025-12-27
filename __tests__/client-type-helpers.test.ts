import { afterEach, beforeEach, describe, expect, it, spyOn } from 'bun:test'
import { HighLevelSDKError } from '../src/lib/errors'
import {
	createClientMaybeAuth,
	createClientWithAuth,
} from '../src/v2/client/client-type-helpers'
import type { AUTH_HEADERS } from '../src/v2/client/types'

type MockPaths = {
	'/test': {
		get: {
			responses: {
				200: { content: { 'application/json': {} } }
			}
		}
	}
}
describe('client-type-helpers', () => {
	let mockFetch: ReturnType<typeof spyOn>

	beforeEach(() => {
		mockFetch = spyOn(globalThis, 'fetch')
		mockFetch.mockResolvedValue(new Response('{}'))
	})

	afterEach(() => {
		mockFetch.mockRestore()
	})

	describe('createClientMaybeAuth', () => {
		it('should create a client with authorization headers', async () => {
			const client = createClientMaybeAuth<MockPaths, AUTH_HEADERS>(
				{ Authorization: 'Bearer test-token', Version: '2021-07-28' },
				{
					baseUrl: 'https://api.test.com',
					headers: { 'Custom-Header': 'test' },
					fetch: mockFetch,
				},
			)

			await client.GET('/test')

			expect(mockFetch).toHaveBeenCalled()
			const lastCall = mockFetch.mock.lastCall
			expect(lastCall).toBeDefined()
			expect(lastCall).not.toBeEmpty()

			const request = lastCall?.[0] as Request
			expect(request.url).toBe('https://api.test.com/test')

			const headers = Object.fromEntries(request.headers.entries())
			expect(headers).toEqual(
				expect.objectContaining({
					authorization: 'Bearer test-token',
					version: '2021-07-28',
					'custom-header': 'test',
				}),
			)
		})

		it('should merge headers correctly', async () => {
			const options = {
				baseUrl: 'https://api.test.com',
				headers: {
					Authorization: 'Should be overridden',
					'Content-Type': 'application/json',
				},
			}

			const client = createClientMaybeAuth<MockPaths, AUTH_HEADERS>(
				{ Authorization: 'Bearer test-token', Version: '2021-07-28' },
				{ ...options, fetch: mockFetch },
			)

			await client.GET('/test')

			expect(mockFetch).toHaveBeenCalled()
			const lastCall = mockFetch.mock.lastCall
			expect(lastCall).toBeDefined()
			expect(lastCall).not.toBeEmpty()

			const request = lastCall?.[0] as Request
			expect(request.url).toBe('https://api.test.com/test')

			const headers = Object.fromEntries(request.headers.entries())
			expect(headers).toEqual({
				authorization: 'Bearer test-token',
				version: '2021-07-28',
				'content-type': 'application/json',
			})
		})
	})

	describe('createClientWithAuth', () => {
		it('should create a client with authorization headers', async () => {
			const client = createClientWithAuth<MockPaths>(
				{ Authorization: 'Bearer test-token', Version: '2021-07-28' },
				{
					baseUrl: 'https://api.test.com',
					headers: { 'Custom-Header': 'test' },
					fetch: mockFetch,
				},
			)

			await client.GET('/test')

			expect(mockFetch).toHaveBeenCalled()
			const lastCall = mockFetch.mock.lastCall
			expect(lastCall).toBeDefined()
			expect(lastCall).not.toBeEmpty()
			const request = lastCall?.[0] as Request
			expect(request.url).toBe('https://api.test.com/test')
			const headers = Object.fromEntries(request.headers.entries())
			expect(headers).toEqual(
				expect.objectContaining({
					authorization: 'Bearer test-token',
					version: '2021-07-28',
					'custom-header': 'test',
				}),
			)
		})
		it('should throw an error if the authorization header is not a Bearer token', () => {
			expect(() =>
				createClientWithAuth<MockPaths>(
					// @ts-expect-error - invalid authorization header
					{ Authorization: 'Invalid-Token', Version: '2021-07-28' },
					{
						baseUrl: 'https://api.test.com',
						headers: { 'Custom-Header': 'test' },
						fetch: mockFetch,
					},
				),
			).toThrow(HighLevelSDKError)
		})
	})
})
