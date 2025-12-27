# Webhook Payload Decryption

This document provides reference code for verifying and decrypting HighLevel webhook payloads. **Note:** This code uses Node.js's `crypto` module and is not included in the SDK to maintain compatibility with all runtimes (Cloudflare Workers, Bun, etc.). You can copy this code into your project if you need webhook signature verification.

## Webhook Signature Verification

HighLevel webhooks include a signature that can be verified using their public key. This helps ensure the webhook payload is authentic and hasn't been tampered with.

```typescript
// src/webhooks/verify.ts
import crypto from 'node:crypto'
import type { WebhookEventMap } from './types/WebhookEventMap'

export const GHL_WEBHOOK_PUBLIC_KEY_PEM = `-----BEGIN PUBLIC KEY-----
MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAokvo/r9tVgcfZ5DysOSC
Frm602qYV0MaAiNnX9O8KxMbiyRKWeL9JpCpVpt4XHIcBOK4u3cLSqJGOLaPuXw6
dO0t6Q/ZVdAV5Phz+ZtzPL16iCGeK9po6D6JHBpbi989mmzMryUnQJezlYJ3DVfB
csedpinheNnyYeFXolrJvcsjDtfAeRx5ByHQmTnSdFUzuAnC9/GepgLT9SM4nCpv
uxmZMxrJt5Rw+VUaQ9B8JSvbMPpez4peKaJPZHBbU3OdeCVx5klVXXZQGNHOs8gF
3kvoV5rTnXV0IknLBXlcKKAQLZcY/Q9rG6Ifi9c+5vqlvHPCUJFT5XUGG5RKgOKU
J062fRtN+rLYZUV+BjafxQauvC8wSWeYja63VSUruvmNj8xkx2zE/Juc+yjLjTXp
IocmaiFeAO6fUtNjDeFVkhf5LNb59vECyrHD2SQIrhgXpO4Q3dVNA5rw576PwTzN
h/AMfHKIjE4xQA1SZuYJmNnmVZLIZBlQAF9Ntd03rfadZ+yDiOXCCs9FkHibELhC
HULgCsnuDJHcrGNd5/Ddm5hxGQ0ASitgHeMZ0kcIOwKDOzOU53lDza6/Y09T7sYJ
PQe7z0cvj7aE4B+Ax1ZoZGPzpJlZtGXCsu9aTEGEnKzmsFqwcSsnw3JB31IGKAyk
T1hhTiaCeIY/OwwwNUY2yvcCAwEAAQ==
-----END PUBLIC KEY-----`

/**
 * Verifies a HighLevel webhook signature using RSA-SHA256.
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
 const verifier = crypto.createVerify('SHA256')
 if (typeof opts.rawBody === 'string') {
  verifier.update(opts.rawBody)
 } else {
  verifier.update(new Uint8Array(opts.rawBody.buffer))
 }
 verifier.end()
 return verifier.verify(
  GHL_WEBHOOK_PUBLIC_KEY_PEM,
  opts.signatureB64,
  'base64',
 )
}

/**
 * Parses a raw webhook body string into a JSON object.
 *
 * @param rawBody - The raw webhook body as a string
 * @returns Parsed webhook object with a type property
 */
export function parseWebhook(
 rawBody: string,
): { type: string } & Record<string, unknown> {
 return JSON.parse(rawBody)
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
 // TS-only cast; if you want runtime safety, wrap with zod/io-ts later.
 const w = obj as WebhookEventMap[T]
 if (!w || w.type !== type) throw new Error('Webhook type mismatch')
 return w
}
```

## Usage Example

```typescript
import { verifyGhlWebhookSignature, parseWebhook, asTypedWebhook } from './webhook-utils'
import type { WebhookEventMap } from '@gnosticdev/highlevel-sdk/webhooks'

// In your webhook handler (e.g., Express, Hono, etc.)
app.post('/webhooks/highlevel', async (req, res) => {
  const signature = req.headers['x-ghl-signature'] as string
  const rawBody = req.body // Make sure to use raw body, not parsed JSON

  // Verify the signature
  if (!verifyGhlWebhookSignature({
    rawBody: rawBody,
    signatureB64: signature
  })) {
    return res.status(401).json({ error: 'Invalid signature' })
  }

  // Parse and type the webhook
  const parsed = parseWebhook(rawBody)
  const typedWebhook = asTypedWebhook(parsed, parsed.type as keyof WebhookEventMap)

  // Handle the webhook based on type
  switch (typedWebhook.type) {
    case 'ContactCreate':
      // typedWebhook is now fully typed as ContactCreate
      console.log('New contact:', typedWebhook.contact)
      break
    // ... other webhook types
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
- **Type Safety**: The `asTypedWebhook` function provides TypeScript type safety but minimal runtime validation. Consider using a validation library like Zod for production use.
