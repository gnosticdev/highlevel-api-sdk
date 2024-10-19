import type { Client } from 'openapi-fetch'
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
import type * as Opportunities from '../../generated/v2/openapi/opportunities'
import type * as Payments from '../../generated/v2/openapi/payments'
import type * as Products from '../../generated/v2/openapi/products'
import type * as SaasApi from '../../generated/v2/openapi/saas-api'
import type * as Snapshots from '../../generated/v2/openapi/snapshots'
import type * as SocialMediaPosting from '../../generated/v2/openapi/social-media-posting'
import type * as Surveys from '../../generated/v2/openapi/surveys'
import type * as Users from '../../generated/v2/openapi/users'
import type * as Workflows from '../../generated/v2/openapi/workflows'
import type { AccessType } from '../../lib/type-utils'
import type { BaseOauthClient, OauthClient } from '../oauth'
import type { HighLevelClientConfig } from './index'

export interface HighLevelClientInterface<
	T extends AccessType,
	TOAuth extends BaseOauthClient | OauthClient<T>,
> {
	/**
	 * Exposed config object for convenience.
	 */
	_clientConfig: HighLevelClientConfig
	oauth: TOAuth
	invoices: Client<Invoices.paths, `${string}/${string}`>
	socialMediaPosting: Client<SocialMediaPosting.paths, `${string}/${string}`>
	opportunities: Client<Opportunities.paths, `${string}/${string}`>
	campaigns: Client<Campaigns.paths, `${string}/${string}`>
	businesses: Client<Businesses.paths, `${string}/${string}`>
	conversations: Client<Conversations.paths, `${string}/${string}`>
	products: Client<Products.paths, `${string}/${string}`>
	courses: Client<Courses.paths, `${string}/${string}`>
	surveys: Client<Surveys.paths, `${string}/${string}`>
	payments: Client<Payments.paths, `${string}/${string}`>
	workflows: Client<Workflows.paths, `${string}/${string}`>
	snapshots: Client<Snapshots.paths, `${string}/${string}`>
	saasApi: Client<SaasApi.paths, `${string}/${string}`>
	users: Client<Users.paths, `${string}/${string}`>
	funnels: Client<Funnels.paths, `${string}/${string}`>
	locations: Client<Locations.paths, `${string}/${string}`>
	links: Client<Links.paths, `${string}/${string}`>
	companies: Client<Companies.paths, `${string}/${string}`>
	contacts: Client<Contacts.paths, `${string}/${string}`>
	forms: Client<Forms.paths, `${string}/${string}`>
	calendars: Client<Calendars.paths, `${string}/${string}`>
	medias: Client<Medias.paths, `${string}/${string}`>
}
