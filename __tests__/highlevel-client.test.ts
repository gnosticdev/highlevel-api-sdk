import { beforeEach, describe, expect, it, spyOn } from 'bun:test'
import createClient from 'openapi-fetch'
import {
	HighLevelClient,
	HighLevelClientWithOAuth,
	createHighLevelClient,
} from '../src/clients/highlevel'
import type { HighLevelOauthConfig } from '../src/clients/highlevel/config'
import { type BaseOauthClient, OauthClient } from '../src/clients/oauth'
import {
	DEFAULT_BASE_AUTH_URL,
	DEFAULT_BASE_URL,
} from '../src/clients/oauth/config'
import type * as OAuth from '../src/generated/v2/openapi/oauth'
import type { AccessType } from '../src/lib/type-utils'

describe('Base HighLevelClient', () => {
	let baseClient: HighLevelClient<AccessType>
	let baseOauthClient: BaseOauthClient

	beforeEach(() => {
		baseClient = new HighLevelClient()
		baseOauthClient = createClient<OAuth.paths>({ baseUrl: DEFAULT_BASE_URL })
	})

	it('should create base client with default configuration', () => {
		expect(baseClient._clientConfig.baseUrl).toBe(DEFAULT_BASE_URL)
		expect(baseClient.oauth).toBeDefined()
	})

	it('should have all API properties defined', () => {
		expect(baseClient.locations).toBeDefined()
		expect(baseClient.campaigns).toBeDefined()
		expect(baseClient.contacts).toBeDefined()
		expect(baseClient.oauth.GET).toBeFunction()
		expect(baseOauthClient).toContainAllKeys(Object.keys(baseClient.oauth))
	})

	it('should have base oauth client', () => {
		expect(baseClient.oauth).toBeDefined()
		// @ts-expect-error - config is not defined on BaseOauthClient
		expect(baseClient.oauth.config).toBeUndefined()
	})
})

describe('SubAccount HighLevelClient', () => {
	let subAccountClient: HighLevelClientWithOAuth<'Sub-Account'>
	const subAccountOauthConfig: HighLevelOauthConfig<'Sub-Account'> = {
		accessType: 'Sub-Account',
		clientId: 'mock-client-id',
		clientSecret: 'mock-client-secret',
		redirectUri: 'http://localhost:3000/auth/callback',
		scopes: ['contacts.readonly', 'contacts.write'],
	}

	beforeEach(() => {
		subAccountClient = createHighLevelClient({
			oauthConfig: subAccountOauthConfig,
		})
	})

	it('should create a sub-account HighLevelClient instance with OAuthClient', () => {
		expect(subAccountClient).toBeInstanceOf(HighLevelClientWithOAuth)
		expect(subAccountClient.oauth).toBeInstanceOf(OauthClient)
	})

	it('should have correct oauth configuration', () => {
		expect(subAccountClient.oauth.config).toEqual({
			...subAccountOauthConfig,
			baseUrl: DEFAULT_BASE_URL,
			baseAuthUrl: DEFAULT_BASE_AUTH_URL,
		})
	})

	// Add more sub-account specific tests here
})

describe('Agency HighLevelClient', () => {
	let agencyClient: HighLevelClientWithOAuth<'Agency'>
	const agencyOauthConfig: HighLevelOauthConfig<'Agency'> = {
		accessType: 'Agency',
		clientId: 'mock-client-id',
		clientSecret: 'mock-client-secret',
		redirectUri: 'http://localhost:3000/auth/callback',
		scopes: ['locations.readonly', 'oauth.write'],
	}

	beforeEach(() => {
		agencyClient = createHighLevelClient({
			oauthConfig: agencyOauthConfig,
		})
	})

	it('should create an agency HighLevelClient instance with OAuthClient', () => {
		expect(agencyClient).toBeInstanceOf(HighLevelClientWithOAuth)
		expect(agencyClient.oauth).toBeInstanceOf(OauthClient)
	})

	it('should have correct oauth configuration', () => {
		expect(agencyClient.oauth.config).toEqual({
			...agencyOauthConfig,
			baseUrl: DEFAULT_BASE_URL,
			baseAuthUrl: DEFAULT_BASE_AUTH_URL,
		})
	})

	it('should fetch locations', async () => {
		const mockLocationsResponse = {
			locations: [
				{ id: '1', name: 'Location 1' },
				{ id: '2', name: 'Location 2' },
			],
		}

		const locationsGetSpy = spyOn(
			agencyClient.locations,
			'GET',
		).mockResolvedValue({
			data: mockLocationsResponse,
			error: undefined,
			response: new Response(),
		})

		const { data, error } = await agencyClient.locations.GET(
			'/locations/search',
			{
				params: {
					header: {
						Authorization: 'Bearer mock-access-token',
						Version: '2021-07-28',
					},
					query: {
						companyId: '123',
					},
				},
			},
		)

		expect(locationsGetSpy).toHaveBeenCalledWith('/locations/search', {
			params: {
				header: {
					Authorization: 'Bearer mock-access-token',
					Version: '2021-07-28',
				},
				query: {
					companyId: '123',
				},
			},
		})
		expect(data).toEqual(mockLocationsResponse)
		expect(error).toBeUndefined()
	})

	// Add more agency specific tests here
})

describe('createHighLevelClient Defaults', () => {
	it('should apply all defaults as noted in JSDoc comments', () => {
		const minimalConfig: HighLevelOauthConfig<'Sub-Account'> = {
			clientId: 'test-client-id',
			clientSecret: 'test-client-secret',
			redirectUri: 'http://localhost:3000/callback',
			accessType: 'Sub-Account',
		}

		const client = createHighLevelClient({ oauthConfig: minimalConfig })

		expect(client.oauth.config).toEqual({
			...minimalConfig,
			baseUrl: DEFAULT_BASE_URL,
			baseAuthUrl: DEFAULT_BASE_AUTH_URL,
			scopes: [],
		})
	})

	it('should use provided values and apply remaining defaults', () => {
		const customConfig: HighLevelOauthConfig<'Agency'> = {
			clientId: 'test-client-id',
			clientSecret: 'test-client-secret',
			redirectUri: 'http://localhost:3000/callback',
			accessType: 'Agency',
			scopes: ['locations.readonly', 'oauth.write'],
			baseAuthUrl: 'https://custom.auth.com',
		}

		const client = createHighLevelClient({
			oauthConfig: customConfig,
		})

		expect(client.oauth.config).toStrictEqual({
			...customConfig,
			baseUrl: DEFAULT_BASE_URL,
		})
	})
})
