import createClient, { type Client, type ClientOptions } from 'openapi-fetch'
import type * as Businesses from '../../generated/v2/openapi/businesses'
import type * as Calendars from '../../generated/v2/openapi/calendars'
import type * as Campaigns from '../../generated/v2/openapi/campaigns'
import type * as Companies from '../../generated/v2/openapi/companies'
import type * as Contacts from '../../generated/v2/openapi/contacts'
import type * as Conversations from '../../generated/v2/openapi/conversations'
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

import type {
	AccessType,
	BaseScopeNames,
	FilteredScopeNames,
} from '../../lib/scopes-types'
import { type BaseOauthClient, OauthClient } from '../oauth'
import { DEFAULT_BASE_URL } from '../oauth/config'
import type { BaseHighLevelConfig, HighLevelOauthConfig } from './config'

/**
 * You can use this class to build your own HighLevel API client. You can use the pre-configured client with `createHighLevelClient`.
 */
export class HighLevelClient<
	T extends AccessType,
	TOauth extends OauthClient<T> | BaseOauthClient = BaseOauthClient,
> {
	oauth: TOauth
	businesses: Client<Businesses.paths, `${string}/${string}`>
	calendars: Client<Calendars.paths, `${string}/${string}`>
	campaigns: Client<Campaigns.paths, `${string}/${string}`>
	companies: Client<Companies.paths, `${string}/${string}`>
	contacts: Client<Contacts.paths, `${string}/${string}`>
	conversations: Client<Conversations.paths, `${string}/${string}`>
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

	readonly config: BaseHighLevelConfig | HighLevelOauthConfig<T>
	/**
	 * creates a new HighLevel API client
	 * @constructor
	 */
	constructor(config?: BaseHighLevelConfig & ClientOptions) {
		this.config = config ?? { baseUrl: DEFAULT_BASE_URL }
		this.oauth = createClient<Oauth.paths>() as TOauth
		this.businesses = createClient<Businesses.paths>(config)
		this.calendars = createClient<Calendars.paths>(config)
		this.campaigns = createClient<Campaigns.paths>(config)
		this.companies = createClient<Companies.paths>(config)
		this.contacts = createClient<Contacts.paths>(config)
		this.conversations = createClient<Conversations.paths>(config)
		this.forms = createClient<Forms.paths>(config)
		this.funnels = createClient<Funnels.paths>(config)
		this.invoices = createClient<Invoices.paths>(config)
		this.links = createClient<Links.paths>(config)
		this.locations = createClient<Locations.paths>(config)
		this.medias = createClient<Medias.paths>(config)
		this.opportunities = createClient<Opportunities.paths>(config)
		this.payments = createClient<Payments.paths>(config)
		this.products = createClient<Products.paths>(config)
		this.saasApi = createClient<SaasApi.paths>(config)
		this.snapshots = createClient<Snapshots.paths>(config)
		this.socialMediaPosting = createClient<SocialMediaPosting.paths>(config)
		this.surveys = createClient<Surveys.paths>(config)
		this.users = createClient<Users.paths>(config)
		this.workflows = createClient<Workflows.paths>(config)
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
	[K in AgencyScopeNames]: Client<
		BaseScopeNames<'Agency'>,
		`${string}/${string}`
	>
}

class HighLevelOauthClient<
	T extends AccessType,
	O extends OauthClient<T> | BaseOauthClient = OauthClient<T>,
> extends HighLevelClient<T, O> {
	oauth: O
	constructor(config: HighLevelOauthConfig<T>) {
		super(config)
		this.oauth = (config.oauthClient ?? new OauthClient(config)) as O
	}
}

/**
 * Creates a new HighLevel API client with built in oauth support.
 *
 * Uses the built in `OAuthClient` by default, but allows for passing in a custom oauth client that extends `OAuthClientInterface`.
 * @returns A new HighLevel API client.
 */
export function createHighLevelClient<T extends AccessType>(
	config: HighLevelOauthConfig<T>,
): HighLevelClient<T, OauthClient<T>> {
	return new HighLevelOauthClient(config)
}
