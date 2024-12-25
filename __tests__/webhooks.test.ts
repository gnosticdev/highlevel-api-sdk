import { describe, expect, it, spyOn } from 'bun:test'
import {
	WebhooksClient,
	createWebhooksClient,
} from '../src/clients/v2/webhooks'
import type { ContactCreate } from '../src/generated/v2/custom/webhooks'

describe('WebhooksClient', () => {
	// Sample webhook payload based on ContactCreate type
	const mockContactPayload: ContactCreate = {
		id: '123',
		firstName: 'John',
		lastName: 'Doe',
		email: 'john@example.com',
		phone: '+1234567890',
		locationId: 'loc_123',
		// Removed createdAt and updatedAt as they're not part of the type
	}

	it('should create a new instance via factory function', () => {
		const client = createWebhooksClient()
		expect(client).toBeInstanceOf(WebhooksClient)
	})

	it('should register and handle webhook events', async () => {
		const client = createWebhooksClient()

		// Create a properly typed handler function
		const handler = async (payload: ContactCreate) => {
			expect(payload).toEqual(mockContactPayload)
		}

		// Create a spy with the correct type
		const handlerSpy = spyOn({ handler }, 'handler')

		// Register handler for ContactCreate event
		client.on('ContactCreate', handlerSpy)

		// Handle webhook payload
		await client.handle('ContactCreate', mockContactPayload)
		expect(handlerSpy).toHaveBeenCalledWith(mockContactPayload)
	})

	it('should allow chaining of event handlers', () => {
		const client = createWebhooksClient()
		const result = client
			.on('ContactCreate', async () => {})
			.on('ContactUpdate', async () => {})
			.on('ContactDelete', async () => {})

		expect(result).toBeInstanceOf(WebhooksClient)
	})

	it('should throw error when no handler is registered', async () => {
		const client = createWebhooksClient()

		expect(client.handle('ContactCreate', mockContactPayload)).rejects.toThrow(
			'No handler registered for webhook event: ContactCreate',
		)
	})

	it('should throw error for invalid payload', async () => {
		const client = createWebhooksClient()
		client.on('ContactCreate', async () => {})

		// @ts-expect-error Testing invalid payload
		await expect(client.handle('ContactCreate', null)).rejects.toThrow(
			'Invalid webhook payload',
		)
		// @ts-expect-error Testing invalid payload
		await expect(client.handle('ContactCreate', undefined)).rejects.toThrow(
			'Invalid webhook payload',
		)
	})

	it('should handle multiple registered handlers', async () => {
		const client = createWebhooksClient()
		const handlers = {
			contactCreate: async () => {},
			contactUpdate: async () => {},
			contactDelete: async () => {},
		}

		const createSpy = spyOn(handlers, 'contactCreate')
		const updateSpy = spyOn(handlers, 'contactUpdate')
		const deleteSpy = spyOn(handlers, 'contactDelete')

		client
			.on('ContactCreate', handlers.contactCreate)
			.on('ContactUpdate', handlers.contactUpdate)
			.on('ContactDelete', handlers.contactDelete)

		await client.handle('ContactCreate', mockContactPayload)
		expect(createSpy).toHaveBeenCalled()
		expect(updateSpy).not.toHaveBeenCalled()
		expect(deleteSpy).not.toHaveBeenCalled()
	})

	it('should handle async handlers correctly', async () => {
		const client = createWebhooksClient()
		let handlerCalled = false

		client.on('ContactCreate', async (payload) => {
			await new Promise((resolve) => setTimeout(resolve, 10))
			handlerCalled = true
			expect(payload).toEqual(mockContactPayload)
		})

		await client.handle('ContactCreate', mockContactPayload)
		expect(handlerCalled).toBe(true)
	})

	it('should maintain type safety with type helper', () => {
		const client = createWebhooksClient()
		const contactType = client.type<'ContactCreate'>()

		// This is just for type checking, the actual value is empty
		expect(contactType).toEqual({})
	})
})
