# Webhook Signature Verification and Payload Parsing

This guide shows how to verify a HighLevel webhook signature and parse its payload. HighLevel's current guide uses the `X-GHL-Signature` header with Ed25519. It says the legacy `X-WH-Signature` header was due to end on September 1, 2026. See the [HighLevel webhook guide](https://marketplace.gohighlevel.com/docs/webhook/WebhookIntegrationGuide).

This code uses Node.js `crypto`. The SDK does not verify signatures, so you can use the Web Crypto API in other runtimes.

## Webhook Signature Verification

Verify the raw request body before you parse it. HighLevel signs the request body with its Ed25519 private key. The SDK exposes the current public key for convenience.

```typescript
// src/webhooks/verify.ts
import crypto from 'node:crypto'
import { createWebhooksClient } from '@gnosticdev/highlevel-sdk/webhooks'
import type { WebhookEventMap } from '@gnosticdev/highlevel-sdk/webhooks'

const webhooks = createWebhooksClient()
export const GHL_WEBHOOK_ED25519_PUBLIC_KEY_PEM = webhooks.WEBHOOK_GHL_PUBLIC_KEY_PEM

/**
 * Verifies the current HighLevel webhook signature using Ed25519.
 *
 * @param opts - Verification options
 * @param opts.rawBody - The raw webhook body as a string or Buffer
 * @param opts.signatureB64 - The base64-encoded signature from the X-GHL-Signature header
 * @returns true if the signature is valid, false otherwise
 */
export function verifyGhlWebhookSignature(opts: {
	rawBody: string | Buffer
	signatureB64: string
}): boolean {
	const payload = typeof opts.rawBody === 'string' ? Buffer.from(opts.rawBody) : opts.rawBody
	const signature = Buffer.from(opts.signatureB64, 'base64')
	return crypto.verify(null, payload, GHL_WEBHOOK_ED25519_PUBLIC_KEY_PEM, signature)
}

/**
 * Parses a raw webhook body into a JSON object.
 *
 * @param rawBody - The raw webhook body as a string or Buffer
 * @returns Parsed webhook object with a type property
 */
export function parseWebhook(
	rawBody: string | Buffer,
): { type: string } & Record<string, unknown> {
	return JSON.parse(typeof rawBody === 'string' ? rawBody : rawBody.toString('utf8'))
}

/**
 * Type-safe webhook type assertion.
 *
 * @param obj - The webhook object to type-check
 * @param type - The expected webhook type
 * @returns The typed webhook object
 * @throws Error if the webhook type doesn't match
 */
export function asTypedWebhook<T extends keyof WebhookEventMap>(
	obj: unknown,
	type: T,
): WebhookEventMap[T] {
	// This checks the event name. It does not validate every payload field.
	const w = obj as WebhookEventMap[T]
	if (!w || w.type !== type) throw new Error('Webhook type mismatch')
	return w
}
```

## Usage Example

```typescript
import {
	verifyGhlWebhookSignature,
	parseWebhook,
	asTypedWebhook,
} from './webhook-utils'
import type { WebhookEventMap } from '@gnosticdev/highlevel-sdk/webhooks'

// In your webhook handler. Configure middleware to keep the raw request body.
app.post('/webhooks/highlevel', async (req, res) => {
	const signature = req.headers['x-ghl-signature']
	const rawBody = req.body
	if (typeof signature !== 'string') {
		return res.status(401).json({ error: 'Missing webhook signature' })
	}

	// Verify the signature
	if (
		!verifyGhlWebhookSignature({
			rawBody: rawBody,
			signatureB64: signature,
		})
	) {
		return res.status(401).json({ error: 'Invalid signature' })
	}

	// Parse the verified raw body.
	const parsed = parseWebhook(rawBody)

	// Check each supported event before using its typed payload.
	switch (parsed.type) {
		case 'ContactCreate': {
			const contact = asTypedWebhook(parsed, 'ContactCreate')
			console.log('New contact:', contact.firstName, contact.email)
			break
		}
		default:
			console.log('Unhandled webhook event:', parsed.type)
	}

	res.status(200).end()
})
```

## Important Notes

- **Raw Body Required**: Make sure your webhook handler uses the raw request body (not parsed JSON) for signature verification. Most frameworks have middleware to access raw bodies.
- **Runtime Compatibility**: This code uses Node.js `crypto` module. For other runtimes:
    - **Bun**: Should work with minimal modifications
    - **Cloudflare Workers**: Use Web Crypto API instead
    - **Deno**: Use Deno's crypto API
- **Type Safety**: The `asTypedWebhook` function checks the event name and returns the matching TypeScript type. It does not validate every field. Use a validation library such as Zod if you need a runtime schema check.
