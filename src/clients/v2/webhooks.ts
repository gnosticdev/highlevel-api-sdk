import type {
	components,
	webhooks,
} from '../../generated/v2/custom/webhooks-openapi'

/**
 * Type helper for extracting webhook payload types
 */
type WebhookPayload<T extends keyof webhooks> = components['schemas'][T]

/**
 * Type helper for webhook handlers
 */
type WebhookHandler<T extends keyof webhooks> = (
	payload: WebhookPayload<T>,
) => Promise<void> | void

export class WebhooksClient {
	// Use keyof webhooks instead of string to ensure type safety
	private handlers = new Map<keyof webhooks, WebhookHandler<keyof webhooks>>()

	/**
	 * Register a handler for a specific webhook event
	 *
	 * @example
	 * ```ts
	 * const webhooks = new WebhooksClient()
	 *
	 * webhooks.on('ContactCreate', async (payload) => {
	 *   // payload is fully typed as ContactCreate schema
	 *   const { firstName, lastName, email } = payload
	 *   await db.contacts.create({ firstName, lastName, email })
	 * })
	 * ```
	 */
	on<T extends keyof webhooks>(event: T, handler: WebhookHandler<T>) {
		this.handlers.set(event, handler as WebhookHandler<keyof webhooks>)
		return this
	}

	/**
	 * Validate and handle an incoming webhook payload
	 *
	 * @example
	 * ```ts
	 * app.post('/webhooks/:event', async (ctx) => {
	 *   try {
	 *     await webhooks.handle(ctx.params.event, ctx.request.body)
	 *     return ctx.status(200).end()
	 *   } catch (error) {
	 *     return ctx.status(400).json({ error: error.message })
	 *   }
	 * })
	 * ```
	 */
	async handle<T extends keyof webhooks>(event: T, payload: WebhookPayload<T>) {
		const handler = this.handlers.get(event)
		if (!handler) {
			throw new Error(`No handler registered for webhook event: ${event}`)
		}

		// Basic payload validation
		if (!payload || typeof payload !== 'object') {
			throw new Error('Invalid webhook payload')
		}

		await handler(payload)
	}

	/**
	 * Get the TypeScript type for a webhook payload
	 * Useful for type checking in your IDE
	 */
	type<T extends keyof webhooks>(): WebhookPayload<T> {
		return {} as WebhookPayload<T>
	}
}

/**
 * Create a new webhooks client for handling HighLevel webhook events
 */
export function createWebhooksClient() {
	return new WebhooksClient()
}
