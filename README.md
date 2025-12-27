# HighLevel API SDK

[![npm version](https://badge.fury.io/js/%40gnosticdev%2Fhighlevel-sdk.svg)](https://badge.fury.io/js/%40gnosticdev%2Fhighlevel-sdk)
[![npm downloads](https://img.shields.io/npm/dm/@gnosticdev/highlevel-sdk.svg)](https://www.npmjs.com/package/@gnosticdev/highlevel-sdk)

TypeScript SDK for working with HighLevel API v1 and v2 endpoints. Works with any server-side JS runtime including Node.js, Bun, Cloudflare Workers, etc.

## Why Use This SDK?

The HighLevel API is constantly evolving, with updated endpoints being added regularly. This package downloads the latest OpenAPI schemas from the [HighLevel API Docs](https://githhub.com/GoHighLevel/highlevel-api-docs) on a schedule, then uses the [openapi-typescript](https://openapi-ts.dev/introduction) library to generate the types for each endpoint.

This means that when a new endpoint is added, this package will automatically have support for it. Also, each endpoint has full type safety, and the types are generated from HighLevel's OpenAPI v3 documentation so will always be compatible and up to date.

## Features

- **NEW** Support for [Private Integrations](https://help.gohighlevel.com/support/solutions/articles/155000003054-private-integrations-everything-you-need-to-know)
- Fully typed client SDK (using native `fetch`) built with [openapi-fetch](https://openapi-ts.dev/openapi-fetch/)
- OAuth2 helpers for working with HighLevel's OAuth2 implementation
- Scopes builder for easily adding the appropriate scopes to your app
- Webhooks client with typed responses
- Support for both v1 (legacy API keys) and v2 (OAuth & Private Integrations)

## Resources

- [API v2 Documentation](https://highlevel.stoplight.io/docs/integrations) (OAuth & Private Integrations)
- [API v1 Documentation](https://public-api.gohighlevel.com/) (Legacy API Keys)

## Installation

```bash
bun add @gnosticdev/highlevel-sdk
# or
pnpm add @gnosticdev/highlevel-sdk
# or
npm add @gnosticdev/highlevel-sdk
```

## Usage

### Using the HighLevel Client

The HighLevel client uses the v2 API by default (see below for v1 client). It can be created with different configurations:

- **Basic Client**: Without built-in authentication.

  ```ts
  const client = createHighLevelClient()

  // or pass in the client config
  const client = createHighLevelClient()
  ```

- **Client with OAuth**: Requires OAuth configuration.

  ```ts
  // The first argument is always the client config, so pass an empty object if you don't need it
  const client = createHighLevelClient({}, 'oauth', {
      clientId: 'your-client-id',
      clientSecret: 'your-client-secret',
      redirectUri: 'http://localhost:3000/callback',
      accessType: 'Sub-Account',
      scopes: ['contacts.readonly']
  })
  ```

- **Client with Private Integration**: Requires private integration configuration.

  ```ts
  const client = createHighLevelClient({}, 'integration', {
      privateToken: process.env.HIGHLEVEL_PRIVATE_TOKEN!,
      accessType: 'Agency',
      scopes: ['saas/company.write', 'saas/company.read']
  })
  ```

### Error Handling

The SDK uses `openapi-fetch` under the hood, which returns both `data` and `error` properties for type-safe error handling.

```ts
import { createHighLevelClient } from "@gnosticdev/highlevel-sdk"

// Create client with OAuth2 support
const client = createHighLevelClient({}, 'oauth', {
    clientId: process.env.HIGHLEVEL_CLIENT_ID!,
    clientSecret: process.env.HIGHLEVEL_CLIENT_SECRET!,
    redirectUri: 'http://localhost:3000/oauth/callback',
    accessType: 'Sub-Account',
    scopes: ['contacts.readonly'],
    // Optional: store tokens in your database
    storageFunction: async (tokenData) => {
        await db.saveTokenResponse({
            access_token: tokenData.access_token,
            expiresAt: tokenData.expiresAt,
            refresh_token: tokenData.refresh_token,
            locationId: tokenData.locationId,
            userId: tokenData.userId,
        })
        return tokenData
    }
})

// Example: Get contacts with error handling
const { data, error } = await client.contacts.GET('/contacts/', {
    params: {
        query: {
            locationId: '1234567890',
            query: 'John Doe',
            limit: 10,
        },
    },
})

if (error) {
    console.error('Error fetching contacts:', error.message)
    // Handle error appropriately
    return
}

// Type-safe response data
console.log(data.contacts)
```

### OAuth2 Support

The OAuth client is available on the HighLevelClient instance when created with OAuth configuration:

```ts
// Generate authorization URL
const authUrl = client.oauth.getAuthorizationUrl()

// Exchange auth code for token
const token = await client.oauth.exchangeToken(authCode)

// Get access token (automatically refreshes if expired)
const accessToken = await client.oauth.getAccessToken()
```

### Using the v1 Client

The v1 client requires an API key and automatically adds the authorization header to all requests.

```ts
import { createHighLevelV1Client } from "@gnosticdev/highlevel-sdk"

const v1Client = createHighLevelV1Client({
    apiKey: process.env.HIGHLEVEL_API_KEY!
})

const { data, error } = await v1Client.GET('/v1/contacts', {
    params: {
        query: {
            locationId: '1234567890',
        }
        // No need to add Authorization header - it's added automatically
    }
})

if (error) {
    console.error('Error fetching contacts:', error)
    return
}

console.log(data.contacts)
```

### Using the Webhooks Client

The SDK includes a typed client for handling HighLevel webhooks. This provides type safety and validation for incoming webhook payloads:

```ts
import { createWebhooksClient } from "@gnosticdev/highlevel-sdk/webhooks"

const webhooks = createWebhooksClient()

// Example: Hono route handler for Contact Create webhook
app.post('/webhooks/contact-create', async (ctx) => {
  const { data, error } = await webhooks.ContactCreate.POST({
    body: ctx.req.body
  })

  if (error) {
    console.error('Invalid webhook payload:', error)
    return res.status(400).json(error)
  }

  // data is fully typed based on the webhook type
  console.log('Contact created:', data)
  res.status(200).end()
})

// Example: Handle App Installation webhook
app.post('/webhooks/app-install', async (req, res) => {
  const { data, error } = await webhooks.AppInstall.POST({
    body: req.body
  })

  if (error) {
    console.error('Invalid app install payload:', error)
    return res.status(400).json(error)
  }

  // Handle new app installation
  const { locationId, userId, companyId } = data
  await db.saveNewInstallation({ locationId, userId, companyId })

  res.status(200).end()
})

Available webhook types include:
- AppointmentCreate
- AppInstall
- ContactCreate
- ContactUpdate
- NoteCreate
- NoteUpdate
- OpportunityCreate
- UserCreate
- And more...

The webhooks client provides full type safety and validation for all webhook payloads defined in the HighLevel API.

#### Webhook Signature Verification

For webhook signature verification and payload decryption, see the [Webhook Payload Decryption documentation](./docs/decrypt-payload.md). Note that signature verification code uses Node.js's `crypto` module and is not included in the SDK to maintain compatibility with all runtimes (Cloudflare Workers, Bun, etc.).

### Endpoint Types

If you just want to get types for the API endpoints, you can use them like this:

```ts
import type * as Locations from "@gnosticdev/highlevel-sdk/types/locations"

// Example: the response type for the `GET /locations/{locationId}` endpoint
type LocationCustomValues =
    NonNullable<Locations.operations['get-custom-values']['responses']['200']['content']['application/json']['customValues']>

const customValues: LocationCustomValues = [{
    fieldKey: 'contact.lead_source',
    id: 'lead_source_id',
    locationId: 'my_location_id',
    name: 'Lead Source',
    value: 'Google',
}]
```

### Module Exports

The SDK provides several module exports for better organization and tree-shaking:

```ts
// Main client
import { createHighLevelClient } from "@gnosticdev/highlevel-sdk"

// OAuth specific functionality
import { OAuthClient } from "@gnosticdev/highlevel-sdk/oauth"

// Scopes builder
import { ScopesBuilder } from "@gnosticdev/highlevel-sdk/scopes"

// V1 API client
import { createHighLevelV1Client } from "@gnosticdev/highlevel-sdk/v1"

// Webhooks client
import { createWebhooksClient } from "@gnosticdev/highlevel-sdk/webhooks"

// Types
import type * as Locations from "@gnosticdev/highlevel-sdk/types/locations"
```

## Scopes

1. Once you have added your scopes to your app, you can collect them from the dev console on your app's settings page in the Highlevel Marketplace:

    ```ts
    /**
     * Navigate to your apps' setting page -  `https://marketplace.highlevel.com/app-settins/<your-app-id>/auth`
     * Press cmd + J on keyboard
     */
    $$('.n-tag__content')
        .map((scope) => scope.textContent.trim())
        .toSorted()
    ```

2. Copy the resulting array
3. Create a new ScopesBuilder instance and paste the scopes to it.

    ```ts
    const client = createHighLevelClient({}, 'oauth', {
        clientId: 'your-client-id',
        clientSecret: 'your-client-secret',
        redirectUri: 'http://localhost:3000/callback',
        scopes: [
            'locations.write',
            'contacts.readonly',
            // ... your scopes here
        ]
    })
    ```

## Examples

Check out our example projects in the [examples directory](./examples):

- `examples/bun-auth`: Example of OAuth2 authentication flow using Bun and Hono
- More examples coming soon!

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
