# HighLevel API SDK

[![npm version](https://badge.fury.io/js/%40gnosticdev%2Fhighlevel-sdk.svg)](https://badge.fury.io/js/%40gnosticdev%2Fhighlevel-sdk)
[![npm downloads](https://img.shields.io/npm/dm/your-package-name.svg)](https://www.npmjs.com/package/your-package-name)

Typed API Endpoints & Clients for HighLevel API. You can use this SDK to build your own apps or use the included clients to interact with the HighLevel API.

## Features

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

The HighLevel client is the main client for interacting with the HighLevel API. It includes all of the endpoints for both v1 and v2 of the API. It includes a custom OAuth2 client for working with HighLevel's OAuth2 implementation.

_Recommended: store tokens in a DB like SQLite by passing in a storageFunction. Check out the auth example [example](./examples/bun-auth/)_

```ts
import { createHighLevelClient } from "@gnosticdev/highlevel-sdk"

const client = createHighLevelClient({
    oauthConfig: {
        accessType: 'Sub-Account',
        clientId: process.env.HIGHLEVEL_CLIENT_ID,
        clientSecret: process.env.HIGHLEVEL_CLIENT_SECRET,
        redirectUri: 'http://localhost:3000/oauth/callback',
        // scopes will be limited based on the accessType.
        scopes: [
            'locations.write',
            'contacts.readonly',
            // ... other scopes
        ],
        // Optional: function to store the token data. If not provided, will be available in memory only.
        storageFunction: async (tokenData) => {
            db.saveTokenResponse({
                access_token: tokenData.access_token,
                expiresAt: tokenData.expiresAt,
                refresh_token: tokenData.refresh_token,
                locationId: tokenData.locationId,
                userId: tokenData.userId,
            })
            return tokenData
    },
    },
})

// Example: Get contacts
const { data, error } = await client.contacts.GET('/contacts/', {
    params: {
        query: {
            locationId: '1234567890',
            query: 'John Doe',
            limit: 10,
        },
        header: {
            Authorization: `Bearer ${process.env.HIGHLEVEL_ACCESS_TOKEN}`,
            Version: '2021-07-28',
        },
    },
})
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

### OAuth2 Support

The SDK includes built-in OAuth2 support with methods to:

- Create the authorization URL
- Get auth code from redirect
- Get a new access token
- Refresh the access token when it expires

```ts
// Generate authorization URL
const authUrl = client.oauth.getAuthorizationURL()

// Exchange auth code for token
const token = await client.oauth.exchangeToken(authCode)

// Get access token (automatically refreshes if expired)
const accessToken = await client.oauth.getAccessToken()
```

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

## Examples

For more detailed usage examples, please check out the [examples directory](./examples).

## Documentation

For full documentation and API reference, please visit our [documentation site](https://link-to-your-documentation).

## Contributing

Contributions are welcome! Please see our [contributing guidelines](CONTRIBUTING.md) for more details.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
