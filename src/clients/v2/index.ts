import type * as Businesses from '../../generated/v2/openapi/businesses'
import type * as Calendars from '../../generated/v2/openapi/calendars'
import type * as Campaigns from '../../generated/v2/openapi/campaigns'
import type * as Companies from '../../generated/v2/openapi/companies'
import type * as Contacts from '../../generated/v2/openapi/contacts'
import type * as Conversations from '../../generated/v2/openapi/conversations'
import type * as Courses from '../../generated/v2/openapi/courses'
import type * as Forms from '../../generated/v2/openapi/forms'
import type * as Funnels from '../../generated/v2/openapi/funnels'
import type * as Invoices from '../../generated/v2/openapi/invoices'
import type * as Links from '../../generated/v2/openapi/links'
import type * as Locations from '../../generated/v2/openapi/locations'
import type * as Medias from '../../generated/v2/openapi/medias'
import type * as Oauth from '../../generated/v2/openapi/oauth'
import type * as Opportunities from '../../generated/v2/openapi/opportunities'
import type * as Payments from '../../generated/v2/openapi/payments'
import type * as Products from '../../generated/v2/openapi/products'
import type * as SaasApi from '../../generated/v2/openapi/saas-api'
import type * as Snapshots from '../../generated/v2/openapi/snapshots'
import type * as SocialMediaPosting from '../../generated/v2/openapi/social-media-posting'
import type * as Surveys from '../../generated/v2/openapi/surveys'
import type * as Users from '../../generated/v2/openapi/users'
import type * as Workflows from '../../generated/v2/openapi/workflows'

import type { Client, ClientOptions } from 'openapi-fetch'
import createClient from 'openapi-fetch'

import type {
	AccessType,
	BaseScopeNames,
	FilteredScopeNames,
} from '../../lib/type-utils'
import { type BaseOauthClient, OauthClient } from '../oauth'
import { DEFAULT_BASE_AUTH_URL, DEFAULT_BASE_URL } from '../oauth/config'
import type { BaseHighLevelConfig, HighLevelOauthConfig } from './config'
import type { HighLevelClientInterface } from './interface'

export type HighLevelClientConfig = BaseHighLevelConfig &
	Omit<ClientOptions, 'baseUrl'>

/**
 * Default HighLevel API client with typed endpoints.
 *
 * For pre-configured OAuth use `createHighLevelClient`.
 *
 * @example
 * ```ts
 * const client = new HighLevelClient()
 * const { data, error } = await client.contacts.GET('/contacts/', {
 *   params: {
 * 	  query: {
 * 		locationId: '1234567890',
 * 		query: 'John Doe',
 * 		limit: 10,
 * 	  },
 * 	  header: {
 * 		Authorization: `Bearer ${process.env.HIGHLEVEL_ACCESS_TOKEN}`,
 * 		Version: '2021-07-28',
 * 	  },
 * 	},
 * })
 * ```
 */
export class HighLevelClient<
	T extends AccessType,
	TOAuth extends BaseOauthClient | OauthClient<T> = BaseOauthClient,
> implements HighLevelClientInterface<T, TOAuth>
{
	/**
	 * Exposed config object for convenience.
	 */
	_clientConfig: HighLevelClientConfig
	/**
	 * Base OAuth client, if using this you will need to configure the oauth client yourself.
	 *
	 * To use the built in OAuth client, use the `createHighLevelClient` function.
	 */
	oauth: TOAuth
	businesses: Client<Businesses.paths, `${string}/${string}`>
	calendars: Client<Calendars.paths, `${string}/${string}`>
	campaigns: Client<Campaigns.paths, `${string}/${string}`>
	companies: Client<Companies.paths, `${string}/${string}`>
	contacts: Client<Contacts.paths, `${string}/${string}`>
	conversations: Client<Conversations.paths, `${string}/${string}`>
	courses: Client<Courses.paths, `${string}/${string}`>
	forms: Client<Forms.paths, `${string}/${string}`>
	funnels: Client<Funnels.paths, `${string}/${string}`>
	invoices: Client<Invoices.paths, `${string}/${string}`>
	links: Client<Links.paths, `${string}/${string}`>
	locations: Client<Locations.paths, `${string}/${string}`>
	medias: Client<Medias.paths, `${string}/${string}`>
	opportunities: Client<Opportunities.paths, `${string}/${string}`>
	payments: Client<Payments.paths, `${string}/${string}`>
	products: Client<Products.paths, `${string}/${string}`>
	saasApi: Client<SaasApi.paths, `${string}/${string}`>
	snapshots: Client<Snapshots.paths, `${string}/${string}`>
	socialMediaPosting: Client<SocialMediaPosting.paths, `${string}/${string}`>
	surveys: Client<Surveys.paths, `${string}/${string}`>
	users: Client<Users.paths, `${string}/${string}`>
	workflows: Client<Workflows.paths, `${string}/${string}`>
	/**
	 * creates a new HighLevel v2 API client with typed endpoints.
	 *
	 * uses the `createClient` method from `openapi-fetch` for each endpoint. Native `fetch` is used under the hood.
	 *
	 * @see https://openapi-ts.dev/openapi-fetch/
	 * @param clientConfig - same as `ClientOptions` from `openapi-fetch` with the default baseUrl set to `https://services.leadconnectorhq.com`
	 *
	 * @constructor
	 */
	constructor(
		/**
		 * Pass in optional fetch config from `openapi-fetch`. Uses the default baseUrl of `https://services.leadconnectorhq.com`
		 * @default { baseUrl: DEFAULT_BASE_URL }
		 * @see https://openapi-ts.dev/openapi-fetch
		 */
		clientConfig?: HighLevelClientConfig,
	) {
		// make sure the baseUrl is set at minimum
		this._clientConfig = clientConfig
			? {
					baseUrl: DEFAULT_BASE_URL,
					...clientConfig,
				}
			: { baseUrl: DEFAULT_BASE_URL }

		this.oauth = createClient<Oauth.paths>(this._clientConfig) as TOAuth

		/**
		 * Businesses endpoint
		 */
		this.businesses = createClient<Businesses.paths>(this._clientConfig)
		/**
		 * Calendars endpoint
		 */
		this.calendars = createClient<Calendars.paths>(this._clientConfig)
		/**
		 * Campaigns endpoint
		 */
		this.campaigns = createClient<Campaigns.paths>(this._clientConfig)
		/**
		 * Companies endpoint
		 */
		this.companies = createClient<Companies.paths>(this._clientConfig)
		/**
		 * Courses endpoint
		 */
		this.courses = createClient<Courses.paths>(this._clientConfig)
		/**
		 * Contacts endpoint
		 */
		this.contacts = createClient<Contacts.paths>(this._clientConfig)
		/**
		 * Conversations endpoint
		 */
		this.conversations = createClient<Conversations.paths>(this._clientConfig)
		/**
		 * Forms endpoint
		 */
		this.forms = createClient<Forms.paths>(this._clientConfig)
		/**
		 * Funnels endpoint
		 */
		this.funnels = createClient<Funnels.paths>(this._clientConfig)
		/**
		 * Invoices endpoint
		 */
		this.invoices = createClient<Invoices.paths>(this._clientConfig)
		/**
		 * Links endpoint
		 */
		this.links = createClient<Links.paths>(this._clientConfig)
		/**
		 * Locations endpoint
		 */
		this.locations = createClient<Locations.paths>(this._clientConfig)
		/**
		 * Medias endpoint
		 */
		this.medias = createClient<Medias.paths>(this._clientConfig)
		/**
		 * Opportunities endpoint
		 */
		this.opportunities = createClient<Opportunities.paths>(this._clientConfig)
		/**
		 * Payments endpoint
		 */
		this.payments = createClient<Payments.paths>(this._clientConfig)
		/**
		 * Products endpoint
		 */
		this.products = createClient<Products.paths>(this._clientConfig)
		/**
		 * SaasApi endpoint
		 */
		this.saasApi = createClient<SaasApi.paths>(this._clientConfig)
		/**
		 * Snapshots endpoint
		 */
		this.snapshots = createClient<Snapshots.paths>(this._clientConfig)
		/**
		 * SocialMediaPosting endpoint
		 */
		this.socialMediaPosting = createClient<SocialMediaPosting.paths>(
			this._clientConfig,
		)
		/**
		 * Surveys endpoint
		 */
		this.surveys = createClient<Surveys.paths>(this._clientConfig)
		/**
		 * Users endpoint
		 */
		this.users = createClient<Users.paths>(this._clientConfig)
		/**
		 * Workflows endpoint
		 */
		this.workflows = createClient<Workflows.paths>(this._clientConfig)
	}
}

type SubAccountScopeNames = FilteredScopeNames<'Sub-Account'>

// TODO: limit the methods to the scopes provides in config
// Create a type alias for the mapped type
type SubAccountClientMap = {
	[K in SubAccountScopeNames]: Client<
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		any,
		`${string}/${string}`
	>
}

type AgencyScopeNames = FilteredScopeNames<'Agency'>
type AgencyClientMap = {
	[K in AgencyScopeNames]: Client<BaseScopeNames<'Agency'>>
}

/**
 * Creates a new HighLevel API client with built in oauth support.
 *
 * Uses the built in `OAuthClient` by default, but allows for passing in a custom oauth client that extends `OAuthClientInterface`.
 *
 * This client has 2 main purposes:
 *
 * 1. Typed endpoints for the HighLevel API
 * 2. OAuth2 support with built in methods to:
 *  - create the auth url
 *  - get auth code from redirect
 *  - get a new access token
 *  - refresh the access token when it expires
 *
 * @example
 * ```ts
 * const client = createHighLevelClient({
 *  oauthConfig: {
 *    redirectUri: 'https://yourapp.com/oauth/callback',
 *    clientId: 'your-client-id',
 *    clientSecret: 'your-client-secret',
 *    accessType: 'Sub-Account',
 *  }
 * })
 * ```
 */
export class HighLevelClientWithOAuth<
	T extends AccessType,
	TOAuth extends BaseOauthClient | OauthClient<T> = OauthClient<T>,
> extends HighLevelClient<T, TOAuth> {
	oauth: TOAuth
	constructor(config: {
		oauthConfig: HighLevelOauthConfig<T>
		clientConfig?: HighLevelClientConfig
	}) {
		super(config.clientConfig)
		const baseUrl =
			config.clientConfig?.baseUrl ??
			config.oauthConfig.baseUrl ??
			DEFAULT_BASE_URL
		const _oauthConfig: HighLevelOauthConfig<T> = {
			...config.oauthConfig,
			baseUrl: baseUrl,
			baseAuthUrl: config.oauthConfig?.baseAuthUrl ?? DEFAULT_BASE_AUTH_URL,
			scopes: config.oauthConfig.scopes ?? [],
		}
		this.oauth = new OauthClient(_oauthConfig) as TOAuth
	}
}

export function createHighLevelClient<T extends AccessType>(config: {
	oauthConfig: HighLevelOauthConfig<T>
	clientConfig?: HighLevelClientConfig
}): HighLevelClient<T, OauthClient<T>> {
	if (config.oauthConfig) {
		return new HighLevelClientWithOAuth({
			clientConfig: config.clientConfig,
			oauthConfig: config.oauthConfig,
		})
	}
	return new HighLevelClient(config.clientConfig)
}
