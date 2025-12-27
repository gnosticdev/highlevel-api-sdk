import { HighLevelSDKError } from '../../lib/errors'
import { GHL_WEBHOOK_PUBLIC_KEY_PEM } from './public-key'
import type { WebhookEventMap } from './types/WebhookEventMap'

type WebhookHandlerMap<T extends keyof WebhookEventMap> = {
	[K in T]: (payload: WebhookEventMap[K]) => Promise<void> | void
}
class HandlerMap<T extends keyof WebhookEventMap> extends Map<
	T,
	WebhookHandlerMap<T>[T]
> {
	get(event: T): WebhookHandlerMap<T>[T] | undefined {
		return super.get(event) as WebhookHandlerMap<T>[T] | undefined
	}
	set(event: T, handler: WebhookHandlerMap<T>[T]) {
		super.set(event, handler)
		return this
	}
}

export type WebhookHandler<T extends keyof WebhookEventMap> = (
	payload: WebhookEventMap[T],
) => Promise<void> | void
/**
 * Client for handling HighLevel webhook events
 *
 * **Note** You will need to decrypt the raw body of the payload response from HighLevel to get the actual payload.
 * @see {@link https://marketplace.gohighlevel.com/docs/webhook/WebhookIntegrationGuide}
 */
export class WebhooksClient {
	// Use keyof T instead of string to ensure type safety
	private handlers = new HandlerMap<keyof WebhookEventMap>()
	/**
	 * The public key used to verify the webhook signature, for convenience.
	 */
	public readonly WEBHOOK_PUBLIC_KEY_PEM = GHL_WEBHOOK_PUBLIC_KEY_PEM

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
	on<T extends keyof WebhookEventMap>(
		event: T,
		handler: WebhookHandlerMap<T>[T] extends (
			payload: infer P,
		) => Promise<void> | void
			? (payload: P) => Promise<void> | void
			: never,
	) {
		this.handlers.set(event, handler)
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
	async handle<T extends keyof WebhookEventMap>(
		event: T,
		payload: WebhookEventMap[T],
	) {
		const handler = this.handlers.get(
			event,
		) as WebhookHandlerMap<T>[T] extends (
			payload: infer P,
		) => Promise<void> | void
			? (payload: P) => Promise<void> | void
			: never
		if (!handler) {
			throw new HighLevelSDKError('NO_HANDLER_REGISTERED', { event })
		}

		// Basic payload validation
		if (!payload || typeof payload !== 'object') {
			throw new HighLevelSDKError('INVALID_WEBHOOK_PAYLOAD')
		}

		await handler(payload as WebhookEventMap[T])
	}

	/**
	 * Get the TypeScript type for a webhook payload
	 * Useful for type checking in your IDE
	 *
	 * @example
	 * ```ts
	 * const webhooks = new WebhooksClient()
	 *
	 * const contactType = webhooks.type<'ContactCreate'>()
	 * // contactType is fully typed as ContactCreate schema
	 * ```
	 */
	$typeOf<T extends keyof WebhookEventMap>(): WebhookEventMap[T] {
		return {} as WebhookEventMap[T]
	}
}

/**
 * Create a new webhooks client for handling HighLevel webhook events
 */
export function createWebhooksClient() {
	return new WebhooksClient()
}
