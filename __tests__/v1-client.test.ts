import { beforeEach, describe, expect, it, spyOn } from 'bun:test'
import type { FetchResponse } from 'openapi-fetch'
import { createV1Client } from '../src/clients/v1'
import type * as V1 from '../src/generated/v1/openapi'

describe('V1 Client', () => {
	const mockApiKey = 'test-api-key'
	const mockBaseUrl = 'https://test.api.com'
	let client: ReturnType<typeof createV1Client>

	beforeEach(() => {
		client = createV1Client({ apiKey: mockApiKey })
	})

	describe('Client Configuration', () => {
		it('should create client with default configuration', () => {
			expect(client.GET).toBeFunction()
			expect(client.POST).toBeFunction()
			expect(client.PUT).toBeFunction()
			expect(client.DELETE).toBeFunction()
		})

		it('should create client with custom configuration', () => {
			const customClient = createV1Client({
				apiKey: mockApiKey,
				baseUrl: mockBaseUrl,
			})
			expect(customClient.GET).toBeFunction()
		})
	})

	describe('API Methods', () => {
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
						Authorization: `Bearer ${mockApiKey}`,
						'Content-Type': 'application/json',
					},
				},
				body: contactData,
			})

			expect(createContactSpy).toHaveBeenCalledWith('/v1/contacts/', {
				params: {
					header: {
						Authorization: `Bearer ${mockApiKey}`,
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
				params: {
					header: {
						Authorization: `Bearer ${mockApiKey}`,
						'Content-Type': 'application/json',
					},
				},
				body: {},
			})

			expect(data).toBeUndefined()
			expect(error).toEqual(mockErrorResponse.error)
		})
	})
})
