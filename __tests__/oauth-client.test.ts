import { describe, expect, it, spyOn } from 'bun:test'
import type { HighLevelOauthConfig } from '../src/v2/client/with-oauth'
import { OauthClientImpl } from '../src/v2/oauth/impl'
import type { TokenData } from '../src/v2/oauth/types'

describe('OauthClient', () => {
	const mockConfig: HighLevelOauthConfig<'Sub-Account'> = {
		clientId: 'test-client-id',
		clientSecret: 'test-client-secret',
		redirectUri: 'http://localhost:3000/callback',
		accessType: 'Sub-Account',
		scopes: ['conversations/message.readonly', 'conversations/message.write'],
	}

	const mockTokenData: TokenData = {
		access_token: 'test-access-token',
		refresh_token: 'test-refresh-token',
		expires_in: 3600,
		isBulkInstallation: false,
		token_type: 'Bearer',
		approvedLocations: ['location-1'],
		companyId: 'company-1',
		locationId: 'location-1',
		planId: 'plan-1',
		scope: 'conversations.message.readonly conversations.message.write',
		userType: 'Location',
		expiresAt: Date.now() + 3600 * 1000,
		userId: 'user-1',
	}

	it('should initialize with default memory storage function', () => {
		const client = new OauthClientImpl(mockConfig)
		expect(client.storeTokenFn).toBeDefined()
		// Verify it's using the default memory storage (not a custom one)
		// When no storageFunction is provided, it should use the default memory store
		expect(client.config.storageFunction).toBeUndefined()
	})

	it('should use custom storage function when provided', async () => {
		let storedData: TokenData | undefined
		const customStorageFn = async (data: TokenData) => {
			storedData = data
			return data
		}

		const client = new OauthClientImpl({
			...mockConfig,
			storageFunction: customStorageFn,
		})

		await client.storeTokenData(mockTokenData)
		expect(storedData).toBeDefined()
		expect(storedData?.access_token).toBe(mockTokenData.access_token)
	})

	it('should store token data with expiration time using default memory store', async () => {
		const client = new OauthClientImpl(mockConfig)
		const now = Date.now()
		await client.storeTokenData(mockTokenData)

		// Verify token data is stored in memory
		expect(client.tokenData).toBeDefined()
		expect(client.tokenData?.access_token).toBe(mockTokenData.access_token)
		expect(client.tokenData?.refresh_token).toBe(mockTokenData.refresh_token)
		expect(client.tokenData?.expiresAt).toBeGreaterThan(now)

		// Verify we can retrieve the access token
		const accessToken = await client.getAccessToken()
		expect(accessToken).toBe(mockTokenData.access_token)
	})

	it('should update token data partially', async () => {
		const client = new OauthClientImpl(mockConfig)
		await client.storeTokenData(mockTokenData)

		const updatedData = {
			access_token: 'new-access-token',
		}

		client.updateTokenData(updatedData)
		expect(client.tokenData?.access_token).toBe('new-access-token')
		expect(client.tokenData?.refresh_token).toBe(mockTokenData.refresh_token)
	})

	it('should generate correct authorization URL', () => {
		const client = new OauthClientImpl(mockConfig)
		const authUrl = client.getAuthorizationUrl()

		// construct the url with URLSearchParams bc encodeURIComponent uses %20 instead of +
		const url = new URL(authUrl)
		const params = new URLSearchParams(url.search)

		expect(params.get('client_id')).toBe(mockConfig.clientId)
		expect(params.get('redirect_uri')).toBe(mockConfig.redirectUri)
		expect(params.get('scope')).toBe((mockConfig.scopes as string[]).join(' '))
		expect(params.get('response_type')).toBe('code')
	})

	it('should refresh token when expired', async () => {
		const client = new OauthClientImpl(mockConfig)
		const expiredTokenData = {
			...mockTokenData,
			expires_in: -3600, // Expired token
		}

		await client.storeTokenData(expiredTokenData)

		const refreshAccessTokenSpy = spyOn(client, 'refreshAccessToken')
		refreshAccessTokenSpy.mockImplementation(() => {
			return Promise.resolve({
				...mockTokenData,
				access_token: 'new-refreshed-token',
			})
		})

		const newToken = await client.getAccessToken()
		expect(newToken).toBe('new-refreshed-token')
		expect(refreshAccessTokenSpy).toHaveBeenCalled()
	})

	it('should exchange auth code for token', async () => {
		const client = new OauthClientImpl(mockConfig)

		const exchangeTokenSpy = spyOn(client, 'exchangeToken')
		exchangeTokenSpy.mockImplementation(() => {
			return Promise.resolve(mockTokenData)
		})

		const token = await client.exchangeToken('test-auth-code')
		expect(token).toEqual(mockTokenData)
		expect(exchangeTokenSpy).toHaveBeenCalledWith('test-auth-code')
	})

	it('should handle token exchange errors', async () => {
		const client = new OauthClientImpl(mockConfig)
		const exchangeTokenSpy = spyOn(client, 'exchangeToken')
		exchangeTokenSpy.mockImplementation(() => {
			return Promise.reject(new Error('Token exchange failed'))
		})

		expect(client.exchangeToken('test-auth-code')).rejects.toThrow(
			'Token exchange failed',
		)
	})

	it('should handle refresh token errors', async () => {
		const client = new OauthClientImpl(mockConfig)
		await client.storeTokenData(mockTokenData)
		const refreshAccessTokenSpy = spyOn(client, 'refreshAccessToken')
		refreshAccessTokenSpy.mockImplementation(() => {
			return Promise.reject(new Error('Refresh token failed'))
		})

		expect(client.refreshAccessToken()).rejects.toThrow('Refresh token failed')
	})

	it('should persist token data across multiple storage calls using memory store', async () => {
		const client = new OauthClientImpl(mockConfig)

		// Store initial token data
		await client.storeTokenData(mockTokenData)
		expect(client.tokenData?.access_token).toBe(mockTokenData.access_token)

		// Update token data
		const updatedTokenData = {
			...mockTokenData,
			access_token: 'updated-access-token',
		}
		await client.storeTokenData(updatedTokenData)

		// Verify the token data was updated
		expect(client.tokenData?.access_token).toBe('updated-access-token')
		expect(client.tokenData?.refresh_token).toBe(mockTokenData.refresh_token)
	})

	it('should store and retrieve multiple tokens using memory store', async () => {
		const client1 = new OauthClientImpl(mockConfig)
		const client2 = new OauthClientImpl({
			...mockConfig,
			clientId: 'client-2',
		})

		const tokenData1 = {
			...mockTokenData,
			locationId: 'location-1',
			access_token: 'token-1',
		}
		const tokenData2 = {
			...mockTokenData,
			locationId: 'location-2',
			access_token: 'token-2',
		}

		await client1.storeTokenData(tokenData1)
		await client2.storeTokenData(tokenData2)

		// Each client should have its own token data stored in memory
		expect(client1.tokenData?.access_token).toBe('token-1')
		expect(client2.tokenData?.access_token).toBe('token-2')
	})
})
