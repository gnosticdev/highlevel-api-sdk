import createClient, { type ClientOptions } from 'openapi-fetch'
import type { webhooks } from '../../generated/v2/custom/webhooks-openapi'

export type WebhooksClientOptions = ClientOptions & {
	/**
	 * base url for webhook endpoints. Override if you're using a custom domain or proxy.
	 * @default 'https://webhook.site'
	 */
	baseUrl?: string
}

/**
 * Create a typed client for handling HighLevel webhooks.
 * Use this to validate and type-check incoming webhook payloads.
 *
 * @example
 * ```ts
 * const webhooks = createWebhooksClient()
 *
 * // Type-safe webhook handling
 * app.post('/webhooks/contact-create', async (ctx) => {
 *   const { data, error } = await webhooks.ContactCreate.POST({
 *     body: ctx.req.body
 *   })
 *
 *   if (error) {
 *     console.error('Invalid webhook payload:', error)
 *     return ctx.status(400).json(error)
 *   }
 *
 *   // Handle webhook with fully typed payload
 *   console.log(data)
 *   ctx.status(200).end()
 * })
 * ```
 */
export function createWebhooksClient(config?: WebhooksClientOptions) {
	return createClient<webhooks>({
		baseUrl: config?.baseUrl ?? 'https://webhook.site',
		...config,
	})
}

const client = createWebhooksClient()
