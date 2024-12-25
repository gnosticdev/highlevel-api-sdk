import { beforeEach, describe, expect, it, spyOn } from 'bun:test'
import { readdirSync } from 'node:fs'
import { join } from 'node:path'
import type { Client, FetchResponse } from 'openapi-fetch'
import { createHighLevelClient } from '../src/clients/v2'
import { DEFAULT_BASE_URL, HighLevelClient } from '../src/clients/v2/base'
import type { AuthHeaders } from '../src/clients/v2/client-types'
import type { HighLevelOauthConfig } from '../src/clients/v2/oauth-client'
import {
	DEFAULT_BASE_AUTH_URL,
	HighLevelClientWithOAuth,
} from '../src/clients/v2/oauth-client'
import {
	type BaseOauthClient,
	OauthClientImpl,
} from '../src/clients/v2/oauth/oauth-impl'
import type * as Locations from '../src/generated/v2/openapi/locations'
import type { AccessType } from '../src/lib/type-utils'

type LocationsResponse = FetchResponse<
	Locations.paths['/locations/search']['get'],
	Locations.components['schemas']['SearchSuccessfulResponseDto'],
	'application/json'
>

describe('Base Client', () => {
	let baseClient: HighLevelClient<AccessType, BaseOauthClient, AuthHeaders>
	let baseOauthClient: BaseOauthClient

	beforeEach(() => {
		baseClient = new HighLevelClient()
		baseOauthClient = createHighLevelClient().oauth
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
	})

	it('should have all OAuth properties defined', () => {
		expect(baseOauthClient).toContainAllKeys(Object.keys(baseClient.oauth))
	})

	it('should have base oauth client', () => {
		expect(baseClient.oauth).toBeDefined()
		// @ts-expect-error - config is not defined on BaseOauthClient
		expect(baseClient.oauth.config).toBeUndefined()
	})
})

describe('SubAccount Client', () => {
	let subAccountClient: HighLevelClientWithOAuth<'Sub-Account'>
	const subAccountOauthConfig: HighLevelOauthConfig<'Sub-Account'> = {
		accessType: 'Sub-Account',
		clientId: 'mock-client-id',
		clientSecret: 'mock-client-secret',
		redirectUri: 'http://localhost:3000/auth/callback',
		scopes: ['contacts.readonly', 'contacts.write'],
	}

	beforeEach(() => {
		subAccountClient = createHighLevelClient({}, 'oauth', subAccountOauthConfig)
	})

	it('should create a sub-account HighLevelClient instance with OAuthClient', () => {
		expect(subAccountClient).toBeInstanceOf(HighLevelClientWithOAuth)
		expect(subAccountClient.oauth).toBeInstanceOf(OauthClientImpl)
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

describe('Agency Client', () => {
	let agencyClient: HighLevelClientWithOAuth<'Agency'>
	const agencyOauthConfig: HighLevelOauthConfig<'Agency'> = {
		accessType: 'Agency',
		clientId: 'mock-client-id',
		clientSecret: 'mock-client-secret',
		redirectUri: 'http://localhost:3000/auth/callback',
		scopes: ['locations.readonly', 'oauth.write'],
	}

	const mockLocationsResponse: LocationsResponse = {
		data: {
			locations: [
				{ id: '1', name: 'Location 1' },
				{ id: '2', name: 'Location 2' },
			],
		},
		error: undefined,
		response: new Response(),
	}

	beforeEach(() => {
		agencyClient = createHighLevelClient({}, 'oauth', agencyOauthConfig)
	})

	it('should create an agency HighLevelClient instance with OAuthClient', () => {
		expect(agencyClient).toBeInstanceOf(HighLevelClientWithOAuth)
		expect(agencyClient.oauth).toBeInstanceOf(OauthClientImpl)
	})

	it('should have correct oauth configuration', () => {
		expect(agencyClient.oauth.config).toEqual({
			...agencyOauthConfig,
			baseUrl: DEFAULT_BASE_URL,
			baseAuthUrl: DEFAULT_BASE_AUTH_URL,
		})
	})

	it('should fetch locations', async () => {
		const locationsGetSpy = spyOn(agencyClient.locations, 'GET')

		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		locationsGetSpy.mockResolvedValueOnce(mockLocationsResponse as any)

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
		expect(data).toEqual(mockLocationsResponse.data)
		expect(error).toBeUndefined()
	})
})

describe('createHighLevelClient Oauth Client Defaults', () => {
	it('should apply all defaults as noted in JSDoc comments', () => {
		const oathConfig: HighLevelOauthConfig<'Sub-Account'> = {
			clientId: 'test-client-id',
			clientSecret: 'test-client-secret',
			redirectUri: 'http://localhost:3000/callback',
			accessType: 'Sub-Account',
			scopes: ['saas/company.write'],
		}

		const client = createHighLevelClient({}, 'oauth', oathConfig)

		expect(client.oauth.config).toEqual({
			...oathConfig,
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

		const client = createHighLevelClient({}, 'oauth', customConfig)

		expect(client.oauth.config).toStrictEqual({
			...customConfig,
			baseUrl: DEFAULT_BASE_URL,
		})
	})
})

describe('HighLevel API Coverage', () => {
	const highLevelClient = new HighLevelClient()

	it('should have an openapi-fetch client for each schema', () => {
		const clientProperties = getClientPropertiesFromSchemas().sort()

		expect(highLevelClient).toContainKeys(clientProperties)
		// get the methods of the high level client
		const hlClientMethods = Object.keys(highLevelClient)
			.filter((key) => clientProperties.includes(key))
			.sort()

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
		const client = createHighLevelClient({}, 'oauth', {
			clientId: 'test-client-id',
			clientSecret: 'test-client-secret',
			redirectUri: 'http://localhost:3000/callback',
			accessType: 'Sub-Account',
			scopes: ['contacts.readonly'],
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
