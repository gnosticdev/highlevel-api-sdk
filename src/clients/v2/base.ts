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
import type { AccessType } from '../../lib/type-utils'
import {
	type AuthHeaders,
	type ClientWithAuth,
	createClientWithAuth,
} from './client-types'
import { createHighLevelClient } from './factory'
import type { HighLevelClientInterface } from './interface'
import type { BaseOauthClient, OauthClientImpl } from './oauth/oauth-impl'

export const DEFAULT_BASE_URL = 'https://services.leadconnectorhq.com'
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
	T extends AccessType,
	TOauth extends BaseOauthClient | OauthClientImpl<T> = BaseOauthClient,
	THeaders extends AuthHeaders | undefined = undefined,
> implements HighLevelClientInterface<T, TOauth>
{
	oauth: TOauth
	businesses: THeaders extends undefined
		? Client<Businesses.paths>
		: ClientWithAuth<Businesses.paths>
	invoices: THeaders extends undefined
		? Client<Invoices.paths>
		: ClientWithAuth<Invoices.paths>
	opportunities: THeaders extends undefined
		? Client<Opportunities.paths>
		: ClientWithAuth<Opportunities.paths>
	campaigns: THeaders extends undefined
		? Client<Campaigns.paths>
		: ClientWithAuth<Campaigns.paths>
	conversations: THeaders extends undefined
		? Client<Conversations.paths>
		: ClientWithAuth<Conversations.paths>
	products: THeaders extends undefined
		? Client<Products.paths>
		: ClientWithAuth<Products.paths>
	courses: THeaders extends undefined
		? Client<Courses.paths>
		: ClientWithAuth<Courses.paths>
	surveys: THeaders extends undefined
		? Client<Surveys.paths>
		: ClientWithAuth<Surveys.paths>
	payments: THeaders extends undefined
		? Client<Payments.paths>
		: ClientWithAuth<Payments.paths>
	workflows: THeaders extends undefined
		? Client<Workflows.paths>
		: ClientWithAuth<Workflows.paths>
	snapshots: THeaders extends undefined
		? Client<Snapshots.paths>
		: ClientWithAuth<Snapshots.paths>
	saasApi: THeaders extends undefined
		? Client<SaasApi.paths>
		: ClientWithAuth<SaasApi.paths>
	users: THeaders extends undefined
		? Client<Users.paths>
		: ClientWithAuth<Users.paths>
	funnels: THeaders extends undefined
		? Client<Funnels.paths>
		: ClientWithAuth<Funnels.paths>
	locations: THeaders extends undefined
		? Client<Locations.paths>
		: ClientWithAuth<Locations.paths>
	links: THeaders extends undefined
		? Client<Links.paths>
		: ClientWithAuth<Links.paths>
	companies: THeaders extends undefined
		? Client<Companies.paths>
		: ClientWithAuth<Companies.paths>
	contacts: THeaders extends undefined
		? Client<Contacts.paths>
		: ClientWithAuth<Contacts.paths>
	forms: THeaders extends undefined
		? Client<Forms.paths>
		: ClientWithAuth<Forms.paths>
	calendars: THeaders extends undefined
		? Client<Calendars.paths>
		: ClientWithAuth<Calendars.paths>
	medias: THeaders extends undefined
		? Client<Medias.paths>
		: ClientWithAuth<Medias.paths>
	socialMediaPosting: THeaders extends undefined
		? Client<SocialMediaPosting.paths>
		: ClientWithAuth<SocialMediaPosting.paths>

	_clientConfig: HighLevelClientConfig

	constructor(
		clientConfig?: HighLevelClientConfig,
		private authHeaders?: THeaders,
	) {
		this._clientConfig = clientConfig
			? {
					baseUrl: DEFAULT_BASE_URL,
					...clientConfig,
				}
			: { baseUrl: DEFAULT_BASE_URL }

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

const client = new HighLevelClient()
client.contacts.GET('/contacts/', {
	params: {
		header: { Authorization: 'Bearer 1234567890', Version: '2021-07-28' },
		query: { query: 'John Doe', locationId: '1234567890' },
	},
})

// with Authentication headers
const clientWithAuth = new HighLevelClient(
	{},
	{ Authorization: 'Bearer 1234567890', Version: '2021-07-28' },
)
clientWithAuth.contacts.GET('/contacts/', {
	params: { query: { query: 'johndoe@email.com', locationId: '1234567890' } },
})
