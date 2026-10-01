# HighLevel API SDK

[![npm version](https://badge.fury.io/js/%40gnosticdev%2Fhighlevel-sdk.svg)](https://badge.fury.io/js/%40gnosticdev%2Fhighlevel-sdk)
[![npm downloads](https://img.shields.io/npm/dm/@gnosticdev/highlevel-sdk.svg)](https://www.npmjs.com/package/@gnosticdev/highlevel-sdk)

TypeScript SDK for working with HighLevel API v1 and v2 endpoints. Works with any server-side JS runtime including Node.js, Bun, Cloudflare Workers, etc.

## Why Use This SDK?

The HighLevel API changes often. Each week, a GitHub Action checks the schemas in the [official HighLevel API docs repository](https://github.com/GoHighLevel/highlevel-api-docs). It uses [openapi-typescript](https://openapi-ts.dev/introduction) to generate endpoint types.

When the schemas change, the action checks the package. If the checks pass, it publishes a new minor version to npm and creates a GitHub release. The action run summary and release notes list added, changed, and removed operations and schemas. New types are available after this release.

## Features

- Support for OAuth and [Private Integrations](https://marketplace.gohighlevel.com/docs/Authorization/PrivateIntegrationsToken)
- Fully typed client SDK (using native `fetch`) built with [openapi-fetch](https://openapi-ts.dev/openapi-fetch/)
- OAuth2 helpers for working with HighLevel's OAuth2 implementation
- Scopes builder for easily adding the appropriate scopes to your app
- Webhooks client with typed event handlers
- Support for both v1 (legacy API keys) and v2 (OAuth & Private Integrations)

## Resources

- [API v2 Documentation](https://marketplace.gohighlevel.com/docs/) (OAuth & Private Integrations)
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

- **Basic Client**: Pass an `openapi-fetch` client config as the first argument. Set a base URL and headers that the client will send by default.

    ```ts
    import { createHighLevelClient } from '@gnosticdev/highlevel-sdk'

    const client = createHighLevelClient({
      baseUrl: 'https://services.leadconnectorhq.com',
      headers: {
        Authorization: `Bearer ${process.env.HIGHLEVEL_API_TOKEN!}`,
        Version: '2021-07-28',
      },
    })
    ```

- **Client with OAuth**: Requires OAuth configuration.

    ```ts
    // The first argument is the openapi-fetch client config.
    const client = createHighLevelClient({
      baseUrl: 'https://services.leadconnectorhq.com',
    }, 'oauth', {
    	clientId: 'your-client-id',
    	clientSecret: 'your-client-secret',
    	redirectUri: 'http://localhost:3000/callback',
    	accessType: 'Sub-Account',
    	scopes: ['contacts.readonly'],
    })
    ```

- **Client with Private Integration**: Requires private integration configuration.

    ```ts
    const client = createHighLevelClient({
      baseUrl: 'https://services.leadconnectorhq.com',
    }, 'integration', {
    	privateToken: process.env.HIGHLEVEL_PRIVATE_TOKEN!,
    	accessType: 'Agency',
    })
    ```

### Choose an authentication method

Use a Private Integration Token (PIT) for a custom integration that you run for one HighLevel agency or sub-account. An admin creates the token in HighLevel settings and selects its scopes there. Keep the token on your server. This SDK adds the `Authorization` and `Version` headers to each request. You do not need to add these headers to each call.

HighLevel's current docs show how to create a PIT in the account settings. They do not document an API that creates a PIT. The SDK cannot create one for each customer. HighLevel describes a PIT as a fixed token and recommends that you rotate it every 90 days. See [Private Integrations](https://marketplace.gohighlevel.com/docs/Authorization/PrivateIntegrationsToken).

Use OAuth when you build an app that users install and approve. HighLevel issues the tokens after the user approves the app. This works for both **Private Apps** and **Public Apps**. A Private App is an OAuth app type. It is not a Private Integration. OAuth is the right choice when each customer must approve access to their own account. Save each new refresh token after a token refresh. See [OAuth 2.0](https://marketplace.gohighlevel.com/docs/Authorization/OAuth2.0).

HighLevel's docs do not say that a PIT is the preferred choice for every app. Choose the token type that fits how the app gets access.

### Error Handling

The SDK uses `openapi-fetch` under the hood, which returns both `data` and `error` properties for type-safe error handling.

```ts
import { createHighLevelClient } from '@gnosticdev/highlevel-sdk'

// Create client with OAuth2 support
const client = createHighLevelClient({
	baseUrl: 'https://services.leadconnectorhq.com',
}, 'oauth', {
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
	},
})

async function handleOAuthCallback(request: Request) {
	const authCode = new URL(request.url).searchParams.get('code')
	if (!authCode) {
		throw new Error('HighLevel did not return an auth code')
	}

	// Exchange the code and store the token data.
	const accessToken = await client.oauth.getAccessToken(authCode)
	if (!accessToken) {
		throw new Error('HighLevel did not return an access token')
	}

	// OAuth endpoint calls need the current access token and API version.
	const { data, error } = await client.contacts.GET('/contacts/', {
		params: {
			header: {
				Authorization: `Bearer ${accessToken}`,
				Version: '2021-07-28',
			},
			query: {
				locationId: '1234567890',
				query: 'John Doe',
				limit: 10,
			},
		},
	})

	if (error) {
		console.error('Error fetching contacts:', error.message)
		return
	}

	console.log(data.contacts)
}
```

### OAuth2 Support

The OAuth client is available on the HighLevelClient instance when created with OAuth configuration:

```ts
// Generate authorization URL
const authUrl = client.oauth.getAuthorizationUrl()

// Exchange the auth code and store the token data
const accessToken = await client.oauth.getAccessToken(authCode)

// Later calls refresh the access token when needed
const currentAccessToken = await client.oauth.getAccessToken()
```

Pass the access token in the `Authorization` header for each OAuth API call. The OAuth client stores tokens in memory by default. Use `storageFunction` to save tokens in a database. When you create a new client, load the saved token data from your database and pass it to `client.oauth.storeTokenData()` before you call `getAccessToken()`. Save the new refresh token after each refresh.

### Using the v1 Client

The v1 client requires an API key and automatically adds the authorization header to all requests.

```ts
import { createHighLevelV1Client } from '@gnosticdev/highlevel-sdk/v1'

const v1Client = createHighLevelV1Client({
	apiKey: process.env.HIGHLEVEL_API_KEY!,
})

const { data, error } = await v1Client.GET('/v1/contacts', {
	params: {
		query: {
			locationId: '1234567890',
		},
		// No need to add Authorization header - it's added automatically
	},
})

if (error) {
	console.error('Error fetching contacts:', error)
	return
}

console.log(data.contacts)
```

### Using the Webhooks Client

The webhooks client lets you register handlers with typed payloads:

```ts
import { createWebhooksClient } from '@gnosticdev/highlevel-sdk/webhooks'

const webhooks = createWebhooksClient()

webhooks.on('ContactCreate', async (payload) => {
  // TypeScript knows the fields in this ContactCreate payload.
  console.log('Contact created:', payload.firstName, payload.lastName)
})
```

In your HTTP route, verify the signature and parse the request body. Check the event name, then call `webhooks.handle('ContactCreate', payload)` with that event's payload. The SDK checks that the payload is an object and that a handler exists. It does not verify signatures or validate every payload field.

HighLevel's current webhook guide uses the `X-GHL-Signature` header with Ed25519. The client exposes the current public key as `webhooks.WEBHOOK_GHL_PUBLIC_KEY_PEM`. The older `webhooks.WEBHOOK_PUBLIC_KEY_PEM` property is the legacy RSA key. See the [webhook signature guide](./docs/decrypt-payload.md).

#### Webhook Signature Verification

For a Node.js example of webhook signature verification and payload parsing, see the [Webhook Signature Verification and Payload Parsing guide](./docs/decrypt-payload.md). Signature verification code is not included in the SDK so it can support runtimes with different crypto APIs.

### Endpoint Types

If you just want to get types for the API endpoints, you can use them like this:

```ts
import type * as Locations from '@gnosticdev/highlevel-sdk/types/locations'

// Example: the response type for `GET /locations/{locationId}/customValues`
type LocationCustomValues = NonNullable<
  Locations.operations['get-custom-values']['responses']['200']['content']['application/json']['customValues']
>

const customValues: LocationCustomValues = [{
  fieldKey: 'contact.lead_source',
  id: 'lead_source_id',
  locationId: 'my_location_id',
  name: 'Lead Source',
  value: 'Google',
}]
```

### Creating a Custom Client

You can create a custom client using the `createClient` function from `openapi-fetch` with specific endpoint types from this package. This is useful when you only need a subset of the API endpoints or want to create a more focused client.

```ts
import { createClient } from '@gnosticdev/highlevel-sdk'
import type * as CustomMenus from '@gnosticdev/highlevel-sdk/types/custom-menus'

// Create a client with only custom menu endpoints
type CustomMenuPaths = CustomMenus.paths

const client = createClient<CustomMenuPaths>({
	headers: {
		Authorization: `Bearer ${process.env.HIGHLEVEL_API_TOKEN!}`,
		Version: '2021-07-28',
	},
})

// Use the client with full type safety
const { data, error } = await client.GET('/custom-menus/', {
	params: {
		header: {
			Version: '2021-07-28',
		},
		query: {
			locationId: '1234567890',
		},
	},
})

if (error) {
	console.error('Error:', error)
	return
}

console.log(data)
```

You can also combine multiple endpoint types to create a client with a custom set of endpoints:

```ts
import { createClient } from '@gnosticdev/highlevel-sdk'
import type * as CustomMenus from '@gnosticdev/highlevel-sdk/types/custom-menus'
import type * as Contacts from '@gnosticdev/highlevel-sdk/types/contacts'

// Combine multiple endpoint types
type CustomMenuPaths = CustomMenus.paths & Contacts.paths

const client = createClient<CustomMenuPaths>({
	headers: {
		Authorization: `Bearer ${process.env.HIGHLEVEL_API_TOKEN!}`,
		Version: '2021-07-28',
	},
})
```

**Note:** The `createClient` function is exported from this package and is the same `openapi-fetch` client. Headers passed in the config are request defaults. An operation can still require a header in `params.header` for TypeScript, as shown above. You can override default headers there.

### Module Exports

The SDK provides several module exports for better organization and tree-shaking:

```ts
// Main client
import { createHighLevelClient } from '@gnosticdev/highlevel-sdk'

// OAuth client implementation
import { OauthClientImpl } from '@gnosticdev/highlevel-sdk/oauth'

// Scopes builder
import { ScopesBuilder } from '@gnosticdev/highlevel-sdk/scopes'

// V1 API client
import { createHighLevelV1Client } from '@gnosticdev/highlevel-sdk/v1'

// Webhooks client
import { createWebhooksClient } from '@gnosticdev/highlevel-sdk/webhooks'

// Types
import type * as Locations from '@gnosticdev/highlevel-sdk/types/locations'
```

## Scopes

For OAuth, add the scopes to your app in the HighLevel Marketplace. Use `ScopesBuilder` to collect scopes that are valid for an agency or sub-account app:

```ts
import { createHighLevelClient } from '@gnosticdev/highlevel-sdk'
import { ScopesBuilder } from '@gnosticdev/highlevel-sdk/scopes'

const scopeBuilder = new ScopesBuilder('Sub-Account')
scopeBuilder.add(['contacts.readonly', 'locations.readonly'])

const client = createHighLevelClient({
  baseUrl: 'https://services.leadconnectorhq.com',
}, 'oauth', {
  clientId: process.env.HIGHLEVEL_CLIENT_ID!,
  clientSecret: process.env.HIGHLEVEL_CLIENT_SECRET!,
  redirectUri: 'http://localhost:3000/callback',
  accessType: 'Sub-Account',
  scopes: [...scopeBuilder.collection],
})
```

TypeScript checks scope names against the selected access type. The builder does not add scopes to your HighLevel app or grant access. HighLevel sets Private Integration Token scopes when an admin creates the token.

## Examples

Check out our example projects in the [examples directory](./examples):

- `examples/bun-auth`: Example of OAuth2 authentication flow using Bun and Hono
- More examples coming soon!

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
