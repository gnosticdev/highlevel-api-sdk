import type { Client, ClientOptions } from 'openapi-fetch'
import createClient from 'openapi-fetch'

import type * as Businesses from '../types/openapi/businesses'
import type * as Calendars from '../types/openapi/calendars'
import type * as Campaigns from '../types/openapi/campaigns'
import type * as Companies from '../types/openapi/companies'
import type * as Contacts from '../types/openapi/contacts'
import type * as Conversations from '../types/openapi/conversations'
import type * as Courses from '../types/openapi/courses'
import type * as Forms from '../types/openapi/forms'
import type * as Funnels from '../types/openapi/funnels'
import type * as Invoices from '../types/openapi/invoices'
import type * as Links from '../types/openapi/links'
import type * as Locations from '../types/openapi/locations'
import type * as Medias from '../types/openapi/medias'
import type * as Oauth from '../types/openapi/oauth'
import type * as Opportunities from '../types/openapi/opportunities'
import type * as Payments from '../types/openapi/payments'
import type * as Products from '../types/openapi/products'
import type * as SaasApi from '../types/openapi/saas-api'
import type * as Snapshots from '../types/openapi/snapshots'
import type * as SocialMediaPosting from '../types/openapi/social-media-posting'
import type * as Surveys from '../types/openapi/surveys'
import type * as Users from '../types/openapi/users'
import type * as Workflows from '../types/openapi/workflows'

import type { AccessType } from '../../lib/type-utils'
import { createHighLevelClient } from '../index'
import type { DefaultOauthClient, OauthClientImpl } from '../oauth/impl'
import type { HighLevelClientInterface } from './interface'
import {
	type AuthHeaders,
	type ClientWithAuth,
	createClientWithAuth,
} from './types'

/**
 * default base url for the HighLevel API.
 * @default 'https://services.leadconnectorhq.com'
 */
export const DEFAULT_V2_BASE_URL = 'https://services.leadconnectorhq.com'

/**
 * Configuration used on every request made by the HighLevelClient.
 */
export interface HighLevelClientConfig extends ClientOptions {
	/**
	 * base url for each API endpoint. no need to change unless you are proxying requests.
	 * @default 'https://services.leadconnectorhq.com'
	 */
	baseUrl?: string
}

function createClientMaybeAuth<
	TPaths extends {},
	THeaders extends AuthHeaders | undefined = undefined,
>(
	authHeaders?: THeaders,
	options?: HighLevelClientConfig,
): THeaders extends undefined ? Client<TPaths> : ClientWithAuth<TPaths> {
	if (authHeaders) {
		return createClientWithAuth<TPaths>(
			authHeaders,
			options,
		) as THeaders extends undefined ? Client<TPaths> : ClientWithAuth<TPaths>
	}
	return createClient<TPaths>(options) as THeaders extends undefined
		? Client<TPaths>
		: ClientWithAuth<TPaths>
}

/**
 * Default client for HighLevel API endpoints.
 *
 * @remarks use the `createHighLevelClient` function to create an instance of this client without handling generic types.
 *
 * @see {@link createHighLevelClient}
 *
 * @example
 * ```ts
 * const client = new HighLevelClient({}, {headers: {Authorization: 'Bearer 1234567890'}})
 * const locations = client.locations.GET('/locations/search', {query: {name: 'John Doe'}})
 * ```
 */
export class HighLevelClient<
	/**
	 * access level for the client. `Sub-Account` or `Agency`
	 */
	T extends AccessType,
	/**
	 * oauth client implementation.
	 */
	TOauth extends DefaultOauthClient | OauthClientImpl<T> = DefaultOauthClient,
	/**
	 * headers for the client.
	 */
	THeaders extends AuthHeaders | undefined = undefined,
> implements HighLevelClientInterface<T, TOauth>
{
	/**
	 * oauth client implementation.
	 */
	oauth: TOauth
	/**
	 * businesses client implementation.
	 */
	businesses: THeaders extends undefined
		? Client<Businesses.paths>
		: ClientWithAuth<Businesses.paths>
	/**
	 * invoices client implementation.
	 */
	invoices: THeaders extends undefined
		? Client<Invoices.paths>
		: ClientWithAuth<Invoices.paths>
	/**
	 * opportunities client implementation.
	 */
	opportunities: THeaders extends undefined
		? Client<Opportunities.paths>
		: ClientWithAuth<Opportunities.paths>
	/**
	 * campaigns client implementation.
	 */
	campaigns: THeaders extends undefined
		? Client<Campaigns.paths>
		: ClientWithAuth<Campaigns.paths>
	/**
	 * conversations client implementation.
	 */
	conversations: THeaders extends undefined
		? Client<Conversations.paths>
		: ClientWithAuth<Conversations.paths>
	/**
	 * products client implementation.
	 */
	products: THeaders extends undefined
		? Client<Products.paths>
		: ClientWithAuth<Products.paths>
	/**
	 * courses client implementation.
	 */
	courses: THeaders extends undefined
		? Client<Courses.paths>
		: ClientWithAuth<Courses.paths>
	/**
	 * surveys client implementation.
	 */
	surveys: THeaders extends undefined
		? Client<Surveys.paths>
		: ClientWithAuth<Surveys.paths>
	/**
	 * payments client implementation.
	 */
	payments: THeaders extends undefined
		? Client<Payments.paths>
		: ClientWithAuth<Payments.paths>
	/**
	 * workflows client implementation.
	 */
	workflows: THeaders extends undefined
		? Client<Workflows.paths>
		: ClientWithAuth<Workflows.paths>
	/**
	 * snapshots client implementation.
	 */
	snapshots: THeaders extends undefined
		? Client<Snapshots.paths>
		: ClientWithAuth<Snapshots.paths>
	/**
	 * saasApi client implementation.
	 */
	saasApi: THeaders extends undefined
		? Client<SaasApi.paths>
		: ClientWithAuth<SaasApi.paths>
	/**
	 * users client implementation.
	 */
	users: THeaders extends undefined
		? Client<Users.paths>
		: ClientWithAuth<Users.paths>
	/**
	 * funnels client implementation.
	 */
	funnels: THeaders extends undefined
		? Client<Funnels.paths>
		: ClientWithAuth<Funnels.paths>
	/**
	 * locations client implementation.
	 */
	locations: THeaders extends undefined
		? Client<Locations.paths>
		: ClientWithAuth<Locations.paths>
	/**
	 * links client implementation.
	 */
	links: THeaders extends undefined
		? Client<Links.paths>
		: ClientWithAuth<Links.paths>
	/**
	 * companies client implementation.
	 */
	companies: THeaders extends undefined
		? Client<Companies.paths>
		: ClientWithAuth<Companies.paths>
	/**
	 * contacts client implementation.
	 */
	contacts: THeaders extends undefined
		? Client<Contacts.paths>
		: ClientWithAuth<Contacts.paths>
	/**
	 * forms client implementation.
	 */
	forms: THeaders extends undefined
		? Client<Forms.paths>
		: ClientWithAuth<Forms.paths>
	/**
	 * calendars client implementation.
	 */
	calendars: THeaders extends undefined
		? Client<Calendars.paths>
		: ClientWithAuth<Calendars.paths>
	/**
	 * medias client implementation.
	 */
	medias: THeaders extends undefined
		? Client<Medias.paths>
		: ClientWithAuth<Medias.paths>
	/**
	 * social media posting client implementation.
	 */
	socialMediaPosting: THeaders extends undefined
		? Client<SocialMediaPosting.paths>
		: ClientWithAuth<SocialMediaPosting.paths>

	/**
	 * client configuration
	 */
	_clientConfig: HighLevelClientConfig

	constructor(
		clientConfig?: HighLevelClientConfig,
		private authHeaders?: THeaders,
	) {
		this._clientConfig = clientConfig
			? {
					baseUrl: DEFAULT_V2_BASE_URL,
					...clientConfig,
				}
			: { baseUrl: DEFAULT_V2_BASE_URL }

		if (authHeaders) {
			this._clientConfig.headers = {
				...this._clientConfig.headers,
				...authHeaders,
			}
		}

		this.oauth = createClient<Oauth.paths>(this._clientConfig) as TOauth

		this.businesses = createClientMaybeAuth<Businesses.paths, THeaders>(
			authHeaders,
			this._clientConfig,
		)

		this.calendars = createClientMaybeAuth<Calendars.paths, THeaders>(
			authHeaders,
			this._clientConfig,
		)

		this.campaigns = createClientMaybeAuth<Campaigns.paths, THeaders>(
			authHeaders,
			this._clientConfig,
		)

		this.companies = createClientMaybeAuth<Companies.paths, THeaders>(
			authHeaders,
			this._clientConfig,
		)

		this.courses = createClientMaybeAuth<Courses.paths, THeaders>(
			authHeaders,
			this._clientConfig,
		)

		this.contacts = createClientMaybeAuth<Contacts.paths, THeaders>(
			authHeaders,
			this._clientConfig,
		)

		this.conversations = createClientMaybeAuth<Conversations.paths, THeaders>(
			authHeaders,
			this._clientConfig,
		)

		this.forms = createClientMaybeAuth<Forms.paths, THeaders>(
			authHeaders,
			this._clientConfig,
		)

		this.funnels = createClientMaybeAuth<Funnels.paths, THeaders>(
			authHeaders,
			this._clientConfig,
		)

		this.invoices = createClientMaybeAuth<Invoices.paths, THeaders>(
			authHeaders,
			this._clientConfig,
		)

		this.links = createClientMaybeAuth<Links.paths, THeaders>(
			authHeaders,
			this._clientConfig,
		)

		this.locations = createClientMaybeAuth<Locations.paths, THeaders>(
			authHeaders,
			this._clientConfig,
		)

		this.medias = createClientMaybeAuth<Medias.paths, THeaders>(
			authHeaders,
			this._clientConfig,
		)

		this.opportunities = createClientMaybeAuth<Opportunities.paths, THeaders>(
			authHeaders,
			this._clientConfig,
		)

		this.locations = createClientMaybeAuth<Locations.paths, THeaders>(
			authHeaders,
			this._clientConfig,
		)

		this.medias = createClientMaybeAuth<Medias.paths, THeaders>(
			authHeaders,
			this._clientConfig,
		)

		this.opportunities = createClientMaybeAuth<Opportunities.paths, THeaders>(
			authHeaders,
			this._clientConfig,
		)

		this.payments = createClientMaybeAuth<Payments.paths, THeaders>(
			authHeaders,
			this._clientConfig,
		)

		this.products = createClientMaybeAuth<Products.paths, THeaders>(
			authHeaders,
			this._clientConfig,
		)

		this.saasApi = createClientMaybeAuth<SaasApi.paths, THeaders>(
			authHeaders,
			this._clientConfig,
		)

		this.snapshots = createClientMaybeAuth<Snapshots.paths, THeaders>(
			authHeaders,
			this._clientConfig,
		)

		this.socialMediaPosting = createClientMaybeAuth<
			SocialMediaPosting.paths,
			THeaders
		>(authHeaders, this._clientConfig)

		this.surveys = createClientMaybeAuth<Surveys.paths, THeaders>(
			authHeaders,
			this._clientConfig,
		)

		this.users = createClientMaybeAuth<Users.paths, THeaders>(
			authHeaders,
			this._clientConfig,
		)

		this.workflows = createClientMaybeAuth<Workflows.paths, THeaders>(
			authHeaders,
			this._clientConfig,
		)
	}
}
