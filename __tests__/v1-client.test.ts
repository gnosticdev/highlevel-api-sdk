import { beforeEach, describe, expect, it, spyOn } from 'bun:test'
import type { FetchResponse } from 'openapi-fetch'
import { createHighLevelV1Client } from '../src/v1'
import type * as V1 from '../src/v1/types/openapi'

describe('V1 Client', () => {
	const mockApiKey = 'test-api-key'
	// sends back the request body
	const mockBaseUrl = 'https://postman-echo.com'
	let client: ReturnType<typeof createHighLevelV1Client>

	beforeEach(() => {
		client = createHighLevelV1Client({ apiKey: mockApiKey })
	})

	describe('Client Configuration', () => {
		it('should throw a HighLevelSDKError if apiKey is not provided', async () => {
			// biome-ignore lint/suspicious/noExplicitAny: <explanation>
			expect(() => createHighLevelV1Client({} as any)).toThrow(
				'apiKey is required',
			)
		})

		it('should create client with expected methods', () => {
			expect(client.GET).toBeFunction()
			expect(client.POST).toBeFunction()
			expect(client.PUT).toBeFunction()
			expect(client.DELETE).toBeFunction()
		})

		it('should use correct baseUrl configuration', async () => {
			const fetchSpy = spyOn(globalThis, 'fetch')
			// Test default baseUrl
			const defaultClient = createHighLevelV1Client({
				apiKey: mockApiKey,
				fetch: globalThis.fetch,
			})
			await defaultClient.GET('/v1/contacts/', {})
			expect(fetchSpy).toHaveBeenCalledWith(
				'https://rest.gohighlevel.com/v1/contacts/',
				expect.any(Object),
			)
			it('should use custom baseUrl configuration', async () => {
				// Test custom baseUrl
				const customClient = createHighLevelV1Client({
					apiKey: mockApiKey,
					baseUrl: mockBaseUrl,
				})
				const customSpy = spyOn(globalThis, 'fetch')
				await customClient.GET('/v1/contacts/', {})
				expect(customSpy).toHaveBeenCalledWith(
					`${mockBaseUrl}/v1/contacts/`,
					expect.any(Object),
				)
			})
		})
	})

	describe('API Methods', () => {
		it('should automatically include authorization header in requests', async () => {
			const getSpy = spyOn(client, 'GET')
			getSpy.mockResolvedValue({
				data: { contacts: [] },
				response: new Response(),
				error: undefined,
			})

			await client.GET('/v1/contacts/', {})

			// biome-ignore lint/suspicious/noExplicitAny: <explanation>
			const calls = getSpy.mock.calls as any[][]
			expect(calls[0]![0]).toBe('/v1/contacts/')
			expect(calls[0]![1]).toEqual({
				params: expect.objectContaining({
					header: expect.objectContaining({
						Authorization: `Bearer ${mockApiKey}`,
					}),
				}),
			})
		})

		it('should create a contact', async () => {
			const mockResponse: FetchResponse<
				V1.paths['/v1/contacts/']['post'],
				V1.components['schemas']['_v1_contacts__post_200_response'],
				'application/json'
			> = {
				data: {
					contact: {
						id: 'ocQHyuzHvysMo5N5VsXc',
						locationId: 'C2QujeCh8ZnC7al2InWR',
						email: 'JohnDeo@gmail.com',
						emailLowerCase: 'johndeo@gmail.com',
						dateAdded: '2020-10-29T09:31:30.255Z',
						source: 'xyz form',
						fingerprint: '91f4f0e0-e2dd-11ea-9b16-53b2d72e8a24',
						timezone: 'Asia/Calcutta',
						tags: ['laboris esse ut irure', 'eiusmod exercitation irure ut'],
						customField: [
							{
								id: 'MgobCB14YMVKuE4Ka8p1',
								value: 'ea laboris consectetur elit sit',
							},
							{
								id: 'MgobCB14YMVKuE4Ka8p1',
								value: 'incididunt cupidatat nostrud qu',
							},
						],
						country: 'DE',
					},
				},
				response: new Response(),
				error: undefined,
			}

			const createContactSpy = spyOn(client, 'POST')
			createContactSpy.mockResolvedValue(mockResponse)

			const contactData = {
				firstName: 'John',
				lastName: 'Doe',
				email: 'john@doe.com',
				phone: '+1234567890',
			}

			const { data, error } = await client.POST('/v1/contacts/', {
				params: {
					header: {
						'Content-Type': 'application/json',
					},
				},
				body: contactData,
			})

			// biome-ignore lint/suspicious/noExplicitAny: <explanation>
			const calls = createContactSpy.mock.calls as any[][]
			expect(calls[0]![0]).toBe('/v1/contacts/')
			expect(calls[0]![1]).toEqual({
				params: {
					header: {
						'Content-Type': 'application/json',
					},
				},
				body: contactData,
			})
			expect(data).toEqual(mockResponse.data)
			expect(error).toBeUndefined()
		})

		it('should handle API errors', async () => {
			type ContactErrorResponse = {
				msg: string
				'email or phone'?: {
					message: string
					rule: string
				}
			}

			const mockErrorResponse: FetchResponse<
				V1.paths['/v1/contacts/']['post'],
				V1.components['schemas']['_v1_contacts__post_200_response'],
				'application/json'
			> = {
				error: {
					msg: 'Invalid request',
				} as ContactErrorResponse,
				response: new Response(),
				data: undefined,
			}

			const createContactSpy = spyOn(client, 'POST')
			createContactSpy.mockResolvedValue(mockErrorResponse)

			const { data, error } = await client.POST('/v1/contacts/', {
				params: { header: { 'Content-Type': 'application/json' } },
			})

			// @ts-expect-error
			expect(createContactSpy.mock.calls[0]![0]).toBe('/v1/contacts/')
			// @ts-expect-error
			expect(createContactSpy.mock.calls[0]![1]).toEqual({
				params: { header: { 'Content-Type': 'application/json' } },
			})
			expect(data).toBeUndefined()
			expect(error).toEqual(mockErrorResponse.error)
		})
	})
})
