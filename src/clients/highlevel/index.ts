import createClient, { type Client } from 'openapi-fetch'
// @biome-ignore format: <explanation>
import type {
	Businesses,
	Calendars,
	Campaigns,
	Companies,
	Contacts,
	Conversations,
	Forms,
	Funnels,
	Invoices,
	Links,
	Locations,
	Medias,
	Oauth,
	Opportunities,
	Payments,
	Products,
	SaasApi,
	Snapshots,
	SocialMediaPosting,
	Surveys,
	Users,
	Workflows,
} from '../../generated/v2/openapi'
import type {
	AccessType,
	BaseScopeNames,
	FilteredScopeNames,
} from '../../lib/scopes-types'
import { OauthClient } from '../oauth'
import type { HighLevelConfig } from './config'

/**
 * You can use this class to build your own HighLevel API client. You can use the pre-configured client with `createHighLevelClient`.
 */
export class HighLevelClient<T extends AccessType> {
	oauth: Client<Oauth.paths, `${string}/${string}`> | OauthClient<T>
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

	readonly config: HighLevelConfig<T>
	/**
	 * creates a new HighLevel API client
	 * @constructor
	 */
	constructor(config: HighLevelConfig<T>) {
		this.config = config
		this.oauth = createClient<Oauth.paths>(config)
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

/**
 * Creates a new HighLevel API client with built in oauth support.
 * @returns A new HighLevel API client.
 */
export function createHighLevelClient<T extends AccessType>(
	config: HighLevelConfig<T> & {
		/**
		 * Can pass in a custom oauth client - must implement `OauthClientInterface`.
		 *
		 * @example
		 * ```ts
		 * const customOauthClient = new OauthClient({...})
		 * const client = createHighLevelClient({
		 * 	authCode: '1234567890',
		 * 	oauthClient: new CustomOauthClient(config)
		 * })
		 * ```
		 */
		oauthClient?: OauthClient<T>
	},
): HighLevelClient<T> & {
	oauth: OauthClient<T>
} {
	const customOauthClient = config.oauthClient || new OauthClient(config)
	return {
		...new HighLevelClient(config),
		oauth: customOauthClient,
	}
}
