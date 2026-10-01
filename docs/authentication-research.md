# HighLevel authentication research

Checked 2026-09-30 against HighLevel's official documentation and SDK source.

## Findings

- A Private Integration Token (PIT) fits a custom integration for an agency or sub-account. An admin creates it in HighLevel settings, chooses its scopes, then copies the token. HighLevel describes it as a fixed OAuth access token. It does not refresh by itself. HighLevel recommends rotating it every 90 days. During a normal rotation, both tokens work for seven days. [Private Integrations](https://marketplace.gohighlevel.com/docs/Authorization/PrivateIntegrationsToken)
- HighLevel documents PIT creation in the account UI. It does not document an API that creates a PIT. For app setup, use OAuth: the user installs the app and approves access, then the app exchanges the authorization code for an access token. HighLevel supports this flow for both **Private Apps** and **Public Apps**. A “Private App” is an OAuth app type. It is not the same as a Private Integration. [Private Integrations](https://marketplace.gohighlevel.com/docs/Authorization/PrivateIntegrationsToken) · [OAuth 2.0](https://marketplace.gohighlevel.com/docs/Authorization/OAuth2.0)
- The official Node SDK guide says to use OAuth credentials “or PIT,” and describes token refresh and storage for OAuth. Its quick-start sample shows only the OAuth client ID and secret. The official SDK repository also shows `privateIntegrationToken` as a client option. [Node SDK guide](https://marketplace.gohighlevel.com/docs/sdk/node) · [Official Node SDK repository](https://github.com/GoHighLevel/highlevel-api-sdk)
- Both token types use `Authorization: Bearer <token>`. HighLevel's PIT example also sends `Version: 2021-07-28`. The token must have the required scopes. Ask for only the scopes the integration needs. Some endpoints also need a `locationId` or `companyId`, based on the resource. [Private Integrations](https://marketplace.gohighlevel.com/docs/Authorization/PrivateIntegrationsToken) · [OAuth 2.0](https://marketplace.gohighlevel.com/docs/Authorization/OAuth2.0)
- OAuth access tokens expire after about 24 hours. Refresh tokens last up to one year, or until first use. Each refresh returns a new refresh token, so the app must save it. PITs do not use this refresh flow. [OAuth 2.0](https://marketplace.gohighlevel.com/docs/Authorization/OAuth2.0) · [Private Integrations](https://marketplace.gohighlevel.com/docs/Authorization/PrivateIntegrationsToken)

## Guidance for this SDK's docs

Explain the two use cases. Use a PIT for a custom integration that connects to one agency or sub-account, when an admin can create and store the token. Use OAuth for an app that users install and authorize, including an internal **Private App**. Do not promise that an app can create a PIT for each customer: HighLevel documents UI creation for PITs and an OAuth install flow for programmatic access tokens. The official docs do not state that PITs are the preferred choice for every SDK user.
