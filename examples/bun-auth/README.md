# HighLevel SDK Auth Example

This is a simple OAuth2 flow using the HighLevel SDK, Bun, and Hono. There is a simple frontend that initiates the flow, and once logged in, you can view endpoints that require authentication.

## Requirements

- [Bun](https://bun.sh/)
- Client ID
- Client Secret
- Redirect URI
- HighLevel API Key (for v1 endpoints only)

## Install

```bash
bun install
```

## App Setup

1. Create an app in the [HighLevel Marketplace](https://marketplace.gohighlevel.com/apps)
2. Add the following (minimum) scopes to your app:
    - `locations.readonly`
    - `users.readonly`

3. Add the following redirect URIs:
    - `http://localhost:3000/auth/callback`

4. Get your app id, client_id, and client_secret from the app you just created

5. Rename the `.env.example` file to `.env` and fill in your CLIENT_ID, CLIENT_SECRET, and REDIRECT_URL

```bash
CLIENT_ID="<your client id>"
CLIENT_SECRET="<your client secret>"
REDIRECT_URL="http://localhost:3000/auth/callback"
```

## Running the app

```bash
bun run dev
```

- Navigate to `http://localhost:3000`
- Click the "Get Auth Code" button
- Login to your HighLevel account (you may need to login first then restart the flow)
- After logging in, you should be redirected the the `/authorized` page and see a success message, your access token, and a links to the `/locations` and `/users` endpoints that you can click on and see the data. Feel free to add more routes/scopes to your app to see other endpoints.
