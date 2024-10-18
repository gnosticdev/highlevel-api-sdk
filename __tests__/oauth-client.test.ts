import { beforeEach, describe, expect, it, spyOn } from 'bun:test'
import { OauthClient } from '../src/clients/oauth'
import type { HighLevelOauthConfig } from '../src/clients/v2/config'

describe('OauthClient', () => {
	const mockConfig: HighLevelOauthConfig<'Agency'> = {
		accessType: 'Agency',
		clientId: 'mock-client-id',
		clientSecret: 'mock-client-secret',
		redirectUri: 'http://localhost:3000/callback',
		scopes: ['locations.readonly', 'oauth.write'],
	}

	let client: OauthClient<'Agency'>

	beforeEach(() => {
		client = new OauthClient(mockConfig)
	})

	it('should create an OauthClient instance', () => {
		expect(client).toBeDefined()
		expect(client.config).toEqual(mockConfig)
	})

	it('should generate an authorization URL', () => {
		const authUrl = client.getAuthorizationURL()
		expect(authUrl).toBeString()
		expect(authUrl).toInclude(
			'marketplace.gohighlevel.com/oauth/chooselocation',
		)
		expect(authUrl).toInclude(mockConfig.clientId)
		expect(authUrl).toInclude(encodeURIComponent(mockConfig.redirectUri))
		expect(authUrl).toInclude(mockConfig.scopes?.join('+') ?? '')
	})

	it('should exchange token', async () => {
		const mockExchangeResponse = {
			access_token: 'mock-access-token',
			refresh_token: 'mock-refresh-token',
			expires_in: 3600,
		}

		const fetchAccessTokenSpy = spyOn(
			client,
			// biome-ignore lint/suspicious/noExplicitAny: <explanation>
			'fetchAccessToken' as any,
		).mockResolvedValue({ data: mockExchangeResponse })

		const result = await client.exchangeToken('mock-auth-code')

		expect(fetchAccessTokenSpy).toHaveBeenCalledWith(
			expect.objectContaining({
				grant_type: 'authorization_code',
				code: 'mock-auth-code',
			}),
		)
		// @ts-expect-error
		expect(result).toEqual(mockExchangeResponse)
	})

	it('should refresh access token', async () => {
		const mockRefreshResponse = {
			access_token: 'mock-refreshed-token',
			refresh_token: 'mock-new-refresh-token',
			expires_in: 3600,
		}

		const fetchAccessTokenSpy = spyOn(
			client,
			// biome-ignore lint/suspicious/noExplicitAny: <explanation>
			'fetchAccessToken' as any,
		).mockResolvedValue({ data: mockRefreshResponse })
		// @ts-expect-error
		client._refreshToken = 'mock-refresh-token'

		const result = await client.refreshAccessToken()

		expect(fetchAccessTokenSpy).toHaveBeenCalledWith(
			expect.objectContaining({
				grant_type: 'refresh_token',
				refresh_token: 'mock-refresh-token',
			}),
		)
		// @ts-expect-error
		expect(result).toEqual(mockRefreshResponse)
	})

	it('should get access token', async () => {
		const mockAccessToken = 'mock-access-token'
		const getAccessTokenSpy = spyOn(client, 'getAccessToken').mockResolvedValue(
			mockAccessToken,
		)

		const result = await client.getAccessToken()

		expect(getAccessTokenSpy).toHaveBeenCalled()
		expect(result).toBe(mockAccessToken)
	})

	it('should get installed locations', async () => {
		const mockLocations = {
			locations: [
				{ id: '1', name: 'Location 1' },
				{ id: '2', name: 'Location 2' },
			],
		}

		// @ts-expect-error
		const clientGetSpy = spyOn(client.client, 'GET').mockResolvedValue({
			// @ts-expect-error
			data: mockLocations,
			error: undefined,
		})

		const result = await client.getInstalledLocations({
			appId: 'mock-app-id',
			companyId: 'mock-company-id',
		})

		expect(clientGetSpy).toHaveBeenCalledWith(
			'/oauth/installedLocations',
			expect.any(Object),
		)
		// @ts-expect-error
		expect(result).toEqual(mockLocations)
	})
})
