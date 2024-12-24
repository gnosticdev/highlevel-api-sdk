# HighLevel API SDK

[![npm version](https://badge.fury.io/js/%40gnosticdev%2Fhighlevel-sdk.svg)](https://badge.fury.io/js/%40gnosticdev%2Fhighlevel-sdk)
[![npm downloads](https://img.shields.io/npm/dm/your-package-name.svg)](https://www.npmjs.com/package/your-package-name)

Typed API Endpoints & Clients for HighLevel API. You can use this SDK to build your own apps or use the included clients to interact with the HighLevel API.

## Features

- **NEW** Support for [Private Integrations](https://help.gohighlevel.com/support/solutions/articles/155000003054-private-integrations-everything-you-need-to-know)
- API Endpoints generated from HighLevel's OpenAPI v3 documentation, using [openapi-typescript](https://openapi-ts.dev/introduction)
- Fully typed client SDK (using native `fetch`) built with [openapi-fetch](https://openapi-ts.dev/openapi-fetch/)
- OAuth2 helpers for working with HighLevel's OAuth2 implementation
- Scopes builder for easily working with the scopes specified in the HighLevel Marketplace
- Typed webhooks endpoints
- Support for both v1 and v2 of the HighLevel API

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

The HighLevel client can be created with different configurations:

- **Basic Client**: Without built-in authentication.

  ```ts
  const client = createHighLevelClient()

  // or pass in the client config
  const client = createHighLevelClient({
    baseUrl: 'https://api.custom-url.com',
  })
  ```

- **Client with OAuth**: Requires OAuth configuration.

  ```ts
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
      privateToken: 'your-token',
      accessType: 'Agency',
      scopes: ['saas/company.write']
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

The v1 client adds the authrorization header to all requests.

```ts
import { createV1Client } from "@gnosticdev/highlevel-sdk"

const v1Client = createV1Client()

const { data, error } = await v1Client.GET('/v1/contacts', {
    params: {
        query: {
            locationId: '1234567890',
        },
        // Optional: added to all requests by default
        // header: {
        //     Authorization: `Bearer ${process.env.HIGHLEVEL_ACCESS_TOKEN}`,
        // },
    }
})
```

### Using the Webhooks Client

The SDK includes a typed client for handling HighLevel webhooks. This provides type safety and validation for incoming webhook payloads:

```ts
import { createWebhooksClient } from "@gnosticdev/highlevel-sdk"

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

## Scopes

1. Once you have added your scopes to your app, you can collect them from the dev console on your app's settings page in the Highlevel Marketplace:

    ```ts
    /**
     * Navigate to your apps' setting page -  `https://marketplace.highlevel.com/app-settins/<your-app-id>/auth`

     * Press cmd + J on keyboarrd
     */
    $$('.n-tag__content')
        .map((scope) => scope.textContent.trim())
        .toSorted()
    ```

2. Copy the resulting array
3. Create a new ScopesBuilder instance and paste the scopes to it.

    ```ts
    const client = createHighLevelClient({
        scopes: [
            'locations.write',
            'contacts.readonly',
            ...
        ]
    })
    ```

```ts

## Examples

For more detailed usage examples, please check out the [examples directory](./examples).

## Documentation

For full documentation and API reference, please visit our [documentation site](https://link-to-your-documentation).

## Contributing

Contributions are welcome! Please see our [contributing guidelines](CONTRIBUTING.md) for more details.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
