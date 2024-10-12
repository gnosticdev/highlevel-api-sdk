import createClient from 'openapi-fetch'
import type { AccessType, HighLevelConfig } from '..'
// @biome-ignore format: <explanation>
import type {
	Businesses,
	Calendars,
	Campaigns,
	Companies,
	Contacts,
	Conversations,
	Courses,
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
} from '../generated/v2/openapi'

export const businessesClient = (config: HighLevelConfig<AccessType>) =>
	createClient<Businesses.paths>(config)
export const calendarsClient = (config: HighLevelConfig<AccessType>) =>
	createClient<Calendars.paths>(config)
export const campaignsClient = (config: HighLevelConfig<AccessType>) =>
	createClient<Campaigns.paths>(config)
export const companiesClient = (config: HighLevelConfig<AccessType>) =>
	createClient<Companies.paths>(config)
export const contactsClient = (config: HighLevelConfig<AccessType>) =>
	createClient<Contacts.paths>(config)
export const conversationsClient = (config: HighLevelConfig<AccessType>) =>
	createClient<Conversations.paths>(config)
export const coursesClient = (config: HighLevelConfig<AccessType>) =>
	createClient<Courses.paths>(config)
export const formsClient = (config: HighLevelConfig<AccessType>) =>
	createClient<Forms.paths>(config)
export const funnelsClient = (config: HighLevelConfig<AccessType>) =>
	createClient<Funnels.paths>(config)
export const invoicesClient = (config: HighLevelConfig<AccessType>) =>
	createClient<Invoices.paths>(config)
export const linksClient = (config: HighLevelConfig<AccessType>) =>
	createClient<Links.paths>(config)
export const locationsClient = (config: HighLevelConfig<AccessType>) =>
	createClient<Locations.paths>(config)
export const mediasClient = (config: HighLevelConfig<AccessType>) =>
	createClient<Medias.paths>(config)
export const oauthClient = (config: HighLevelConfig<AccessType>) =>
	createClient<Oauth.paths>(config)
export const opportunitiesClient = (config: HighLevelConfig<AccessType>) =>
	createClient<Opportunities.paths>(config)
export const paymentsClient = (config: HighLevelConfig<AccessType>) =>
	createClient<Payments.paths>(config)
export const productsClient = (config: HighLevelConfig<AccessType>) =>
	createClient<Products.paths>(config)
export const saasApiClient = (config: HighLevelConfig<AccessType>) =>
	createClient<SaasApi.paths>(config)
export const snapshotsClient = (config: HighLevelConfig<AccessType>) =>
	createClient<Snapshots.paths>(config)
export const socialMediaPostingClient = (config: HighLevelConfig<AccessType>) =>
	createClient<SocialMediaPosting.paths>(config)
export const surveysClient = (config: HighLevelConfig<AccessType>) =>
	createClient<Surveys.paths>(config)
export const usersClient = (config: HighLevelConfig<AccessType>) =>
	createClient<Users.paths>(config)
export const workflowsClient = (config: HighLevelConfig<AccessType>) =>
	createClient<Workflows.paths>(config)
