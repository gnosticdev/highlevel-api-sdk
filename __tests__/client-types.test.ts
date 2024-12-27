import { afterEach, beforeEach, describe, expect, it, spyOn } from 'bun:test'
import { createClientWithAuth } from '../src/v2/client-types'

describe('createClientWithAuth', () => {
	let mockFetch: ReturnType<typeof spyOn>

	beforeEach(() => {
		mockFetch = spyOn(global, 'fetch')
		mockFetch.mockResolvedValue(new Response('{}'))
	})

	afterEach(() => {
		mockFetch.mockRestore()
	})

	it('should create a client with authorization headers', async () => {
		const client = createClientWithAuth<{
			'/test': {
				get: {
					responses: {
						200: { content: { 'application/json': unknown } }
					}
				}
			}
		}>(
			{ Authorization: 'Bearer test-token', Version: '2021-07-28' },
			{
				baseUrl: 'https://api.test.com',
				headers: {
					'Custom-Header': 'test',
				},
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

		const client = createClientWithAuth<{
			'/test': {
				get: {
					responses: {
						200: { content: { 'application/json': unknown } }
					}
				}
			}
		}>(
			{
				Authorization: 'Bearer test-token',
				Version: '2021-07-28',
			},
			options,
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
