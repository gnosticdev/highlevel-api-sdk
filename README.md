# HighLevel API SDK (WIP)

Typed API Endpoints & Clients for HighLevel API. You can use this SDK to build your own apps or use the included clients to interact with the HighLevel API.

## Features

- API Endpoints generated from HighLevel's OpenAPI v3 documentation, using [openapi-typescript](https://openapi-ts.dev/introduction)
- Fully typed client SDK (using native `fetch`) built with [openapi-fetch](https://openapi-ts.dev/openapi-fetch/)
- OAuth2 helpers for working with HighLevel's OAuth2 implementation
- Scopes builder for easily working with the scopes specified in the HighLevel Marketplace
- Typed webhooks endpoints

## Installation

```bash
bun add @gnosticdev/highlevel-sdk
```

## Usage

Use the types for each endpoint by importing them directly:

```ts
import type { Locations } from "@gnosticdev/highlevel-sdk/types/locations"
```

## Scopes Builder

You can use the scopes builder to add scopes in a typesafe way, making sure your marketplace app and code match.

With the scopes builder you just provide the access type, and it will show you all of the available options for that access type.

```ts
const scopes = new ScopesBuilder()
scopes.add("businesses.readonly")
scopes.add("businesses.write")
// or you can add multiple at once
scopes.add([
    "businesses.readonly",
    "businesses.write",
    "calendars.readonly",
    ...
])
```

### Collecting Scopes Helper

1. Once you have added your scopes to your app, you can collect them from the dev console on your app's settings page in the Highlevel Marketplace:

    ```ts
    // https://marketplace.gohighlevel.com/apps/<your app_id>/settings
    $$('.n-tag__content')
        .map((scope) => scope.textContent.trim())
        .toSorted()
    ```

2. Copy the resulting array
3. Create a new ScopesBuilder instance and paste the scopes to it.

    ```ts
    const scopes = new ScopesBuilder()
    scopes.add([
        "businesses.readonly",
        "businesses.write",
        "calendars.readonly",
        ...
    ])
    ```

4. Call the `get` method to get the scopes string.

    ```ts
    scopes.get()
    ```

## TODO

- [ ] Allow custom fetch handler in clients
- [ ] Add client for each schema type
