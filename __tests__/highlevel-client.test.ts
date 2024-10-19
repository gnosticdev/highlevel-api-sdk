import { beforeEach, describe, expect, it, spyOn } from 'bun:test'
import { readdirSync } from 'node:fs'
import { join } from 'node:path'
import createClient, { type Client } from 'openapi-fetch'
import { type BaseOauthClient, OauthClient } from '../src/clients/oauth'
import {
	DEFAULT_BASE_AUTH_URL,
	DEFAULT_BASE_URL,
} from '../src/clients/oauth/config'
import {
	HighLevelClient,
	HighLevelClientWithOAuth,
	createHighLevelClient,
} from '../src/clients/v2'
import type { HighLevelOauthConfig } from '../src/clients/v2/config'
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
})

describe('createHighLevelClient Defaults', () => {
	it('should apply all defaults as noted in JSDoc comments', () => {
		const minimalConfig: HighLevelOauthConfig<'Sub-Account'> = {
			clientId: 'test-client-id',
			clientSecret: 'test-client-secret',
			redirectUri: 'http://localhost:3000/callback',
			accessType: 'Sub-Account',
			scopes: ['saas/company.write'],
		}

		const client = createHighLevelClient({ oauthConfig: minimalConfig })

		expect(client.oauth.config).toEqual({
			...minimalConfig,
			baseUrl: DEFAULT_BASE_URL,
			baseAuthUrl: DEFAULT_BASE_AUTH_URL,
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

describe('HighLevel API Coverage', () => {
	const highLevelClient = new HighLevelClient()
	const baseClient = createClient()

	it('should have an openapi-fetch client for each schema', () => {
		const clientProperties = getClientPropertiesFromSchemas().toSorted()

		expect(highLevelClient).toContainKeys(clientProperties)
		// get the methods of the high level client
		const hlClientMethods = Object.keys(highLevelClient)
			.filter((key) => clientProperties.includes(key))
			.toSorted()
		expect(hlClientMethods).toBeArrayOfSize(clientProperties.length)

		// make sure each method is an object, and each object has the main methods
		const innerClients = hlClientMethods.map(
			(method) => highLevelClient[method as keyof typeof highLevelClient],
			// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		) as Client<any, any>[]
		const notAClient = innerClients.find(
			(client) =>
				!(client instanceof Object) &&
				!['GET', 'POST', 'PUT', 'DELETE', 'TRACE', 'OPTIONS'].includes(client),
		)
		const notAFunction = innerClients.find(
			(client) => typeof client.GET !== 'function',
		)
		expect(notAClient).toBeUndefined()
		expect(notAFunction).toBeUndefined()
	})
})

describe('createHighLevelClient', () => {
	it('should create a client with custom OAuth methods', () => {
		const client = createHighLevelClient({
			oauthConfig: {
				clientId: 'test-client-id',
				clientSecret: 'test-client-secret',
				redirectUri: 'http://localhost:3000/callback',
				accessType: 'Sub-Account',
				scopes: ['contacts.readonly'],
			},
		})

		// Check that it's an instance of HighLevelClientWithOAuth
		expect(client).toBeInstanceOf(HighLevelClientWithOAuth)

		// Check for custom OAuth methods
		expect(client.oauth.getAuthorizationUrl).toBeFunction()
		expect(client.oauth.getAccessToken).toBeFunction()
		expect(client.oauth.refreshAccessToken).toBeFunction()
		expect(client.oauth.storeTokenData).toBeFunction()
		expect(client.oauth.exchangeToken).toBeFunction()
		expect(client.oauth.getInstalledLocations).toBeFunction()
		expect(client.oauth.generateLocationToken).toBeFunction()

		// Check that it still has all the API properties
		const clientProperties = getClientPropertiesFromSchemas()
		for (const propertyName of clientProperties) {
			expect(client).toHaveProperty(propertyName)
			expect(client[propertyName as keyof typeof client]).toBeDefined()
		}
	})
})

function getClientPropertiesFromSchemas() {
	const schemaDir = join(import.meta.dir, '..', 'schemas', 'v2', 'openapi')
	const schemaFiles = readdirSync(schemaDir)

	return schemaFiles.map((file) =>
		file
			.replace('.openapi.json', '')
			.replace(/[-\s](.)/g, (_, char) => char.toUpperCase())
			.replace(/^(.)/, (_, char) => char.toLowerCase()),
	)
}
