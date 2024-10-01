export const scopesSchema = {
	businesses: {
		readonly: [
			{
				methodAndEndpoint: 'GET /businesses',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'GET /businesses/:businessId',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
		],
		write: [
			{
				methodAndEndpoint: 'POST /businesses',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'PUT /businesses/:businessId',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'DELETE /businesses/:businessId',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
		],
	},
	calendars: {
		write: [
			{
				methodAndEndpoint: 'POST /calendars/',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'PUT /calendars/:calendarId',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'DELETE /calendars/:calendarId',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
		],
		readonly: [
			{
				methodAndEndpoint: 'GET /calendars/',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'GET /calendars/:calendarId',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'GET /calendars/:calendarId/free-slots',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
		],
	},
	'calendars/groups': {
		readonly: [
			{
				methodAndEndpoint: 'GET /calendars/groups',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
		],
		write: [
			{
				methodAndEndpoint: 'POST /calendars/groups',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'POST /calendars/groups/validate-slug',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'DELETE /calendars/groups/:groupId',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'PUT /calendars/groups/:groupId',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'PUT /calendars/groups/:groupId/status',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
		],
	},
	'calendars/events': {
		readonly: [
			{
				methodAndEndpoint: 'GET /calendars/events/appointments/:eventId',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
		],
		write: [
			{
				methodAndEndpoint: 'DELETE /calendars/events/:eventId',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'POST /calendars/events/block-slots',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'PUT /calendars/events/block-slots/:eventId',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'POST /calendars/events/appointments',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'PUT /calendars/events/appointments /:eventId',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
		],
	},
	campaigns: {
		readonly: [
			{
				methodAndEndpoint: 'GET /campaigns/',
				webhookEvents: 'CampaignStatusUpdate',
				accessType: ['Sub-Account'] as const,
			},
		],
	},
	contacts: {
		readonly: [
			{
				methodAndEndpoint: 'GET /contacts/:contactId',
				webhookEvents: 'ContactCreate',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'GET /contacts/:contactId/tasks',
				webhookEvents: 'ContactDelete',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'GET /contacts/:contactId/tasks/:taskId',
				webhookEvents: 'ContactDndUpdate',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'GET /contacts/:contactId/notes',
				webhookEvents: 'ContactTagUpdate',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'GET /contacts/:contactId/notes/:id',
				webhookEvents: 'NoteCreate',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'GET /contacts/:contactId/appointments',
				webhookEvents: 'NoteDelete',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'GET /contacts/',
				webhookEvents: 'TaskCreate',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'GET /contacts/business/:businessId',
				webhookEvents: 'TaskDelete',
				accessType: ['Sub-Account'] as const,
			},
		],
		write: [
			{
				methodAndEndpoint: 'POST /contacts/',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'PUT /contacts/:contactId',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'DELETE /contacts/:contactId',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'POST /contacts/:contactId/tasks',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'PUT /contacts/:contactId/tasks/:taskId',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'PUT /contacts/:contactId/tasks/:taskId/completed',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'DELETE /contacts/:contactId/tasks/:taskId',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'POST /contacts/:contactId/tags',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'DELETE /contacts/:contactId/tags',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'POST /contacts/:contactId/notes',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'PUT /contacts/:contactId/notes/:id',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'DELETE /contacts/:contactId/notes/:id',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'POST /contacts/:contactId/campaigns/:campaignId',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'DELETE /contacts/:contactId/campaigns/removeAll',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'DELETE /contacts/:contactId/campaigns/:campaignId',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'POST /contacts/:contactId/workflow/:workflowId',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'DELETE /contacts/:contactId/workflow/:workflowId',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
		],
	},
	conversations: {
		readonly: [
			{
				methodAndEndpoint: 'GET /conversations/:conversationsId',
				webhookEvents: 'ConversationUnreadWebhook',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'GET /conversations/search',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
		],
		write: [
			{
				methodAndEndpoint: 'POST /conversations/',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'PUT /conversations/:conversationsId',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'DELETE /conversations/:conversationsId',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
		],
	},
	'conversations/message': {
		readonly: [
			{
				methodAndEndpoint:
					'GET conversations/messages/:messageId/locations/:locationId/recording',
				webhookEvents: 'InboundMessage',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: '',
				webhookEvents: 'OutboundMessage',
				accessType: ['Sub-Account'] as const,
			},
		],
		write: [
			{
				methodAndEndpoint: 'POST /conversations/messages',
				webhookEvents: 'ConversationProviderOutboundMessage',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'POST /conversations/messages/inbound',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'POST /conversations/messages/upload',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'PUT /conversations/messages/:messageId/status',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'DELETE /conversations/messages/:messageId/schedule',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint:
					'DELETE /conversations/messages/email/:emailMessageId/schedule',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
		],
	},
	forms: {
		readonly: [
			{
				methodAndEndpoint: 'GET /forms/',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'GET /forms/submissions',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
		],
	},
	links: {
		readonly: [
			{
				methodAndEndpoint: 'GET /links/',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
		],
		write: [
			{
				methodAndEndpoint: 'POST /links/',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'PUT /links/:linkId',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'DELETE /links/:linkId',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
		],
	},
	locations: {
		readonly: [
			{
				methodAndEndpoint: 'GET /locations/:locationId',
				webhookEvents: '',
				accessType: ['Sub-Account', 'Company'] as const,
			},
			{
				methodAndEndpoint: 'GET /locations/search',
				webhookEvents: '',
				accessType: ['Sub-Account', 'Company'] as const,
			},
		],
		write: [
			{
				methodAndEndpoint: 'POST /locations/',
				webhookEvents: '',
				accessType: ['Company'] as const,
			},
			{
				methodAndEndpoint: 'PUT /locations/:locationId',
				webhookEvents: '',
				accessType: ['Company'] as const,
			},
			{
				methodAndEndpoint: 'DELETE /locations/:locationId',
				webhookEvents: '',
				accessType: ['Company'] as const,
			},
		],
	},
	'locations/customValues': {
		readonly: [
			{
				methodAndEndpoint: 'GET /locations/:locationId/customValues',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'GET /locations/:locationId/customValues/:id',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
		],
		write: [
			{
				methodAndEndpoint: 'POST /locations/:locationId/customValues',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'PUT /locations/:locationId/customValues/:id',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'DELETE /locations/:locationId/customValues/:id',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
		],
	},
	'locations/customFields': {
		readonly: [
			{
				methodAndEndpoint: 'GET /locations/:locationId/customFields',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'GET /locations/:locationId/customFields/:id',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
		],
		write: [
			{
				methodAndEndpoint: 'POST /locations/:locationId/customFields',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'PUT /locations/:locationId/customFields/:id',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'DELETE /locations/:locationId/customFields/:id',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
		],
	},
	'locations/tags': {
		readonly: [
			{
				methodAndEndpoint: 'GET /locations/:locationId/tags',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'GET /locations/:locationId/tags/:tagId',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
		],
		write: [
			{
				methodAndEndpoint: 'POST /locations/:locationId/tags/',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'PUT /locations/:locationId/tags/:tagId',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'DELETE /locations/:locationId/tags/:tagId',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
		],
	},
	'locations/templates': {
		readonly: [
			{
				methodAndEndpoint: 'GET /locations/:locationId/templates',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
		],
	},
	'locations/tasks': {
		readonly: [
			{
				methodAndEndpoint: 'POST /locations/:locationId/tasks/search',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
		],
	},
	medias: {
		readonly: [
			{
				methodAndEndpoint: 'GET /medias/files',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
		],
		write: [
			{
				methodAndEndpoint: 'POST /medias/upload-file',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'DELETE /medias/:fileId',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
		],
	},
	opportunities: {
		readonly: [
			{
				methodAndEndpoint: 'GET /opportunities/search',
				webhookEvents: 'OpportunityCreate',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'GET /opportunities/:id',
				webhookEvents: 'OpportunityDelete',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'GET /opportunities/pipelines',
				webhookEvents: 'OpportunityStageUpdate',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: '',
				webhookEvents: 'OpportunityStatusUpdate',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: '',
				webhookEvents: 'OpportunityMonetaryValueUpdate',
				accessType: ['Sub-Account'] as const,
			},
		],
		write: [
			{
				methodAndEndpoint: 'DELETE /opportunities/:id',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'PUT /opportunities/:id/status',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'POST /opportunities',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'PUT /opportunities/:id',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
		],
	},
	oauth: {
		readonly: [
			{
				methodAndEndpoint: 'GET /oauth/installedLocations',
				webhookEvents: '',
				accessType: ['Company'] as const,
			},
		],
		write: [
			{
				methodAndEndpoint: 'POST /oauth/locationToken',
				webhookEvents: '',
				accessType: ['Company'] as const,
			},
		],
	},
	snapshots: {
		readonly: [
			{
				methodAndEndpoint: 'GET /snapshots',
				webhookEvents: '',
				accessType: ['Company'] as const,
			},
		],
	},
	surveys: {
		readonly: [
			{
				methodAndEndpoint: 'GET /surveys/',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'GET /surveys/submissions',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
		],
	},
	users: {
		readonly: [
			{
				methodAndEndpoint: 'GET /users/',
				webhookEvents: '',
				accessType: ['Sub-Account', 'Company'] as const,
			},
			{
				methodAndEndpoint: 'GET /users/:userId',
				webhookEvents: '',
				accessType: ['Sub-Account', 'Company'] as const,
			},
		],
		write: [
			{
				methodAndEndpoint: 'POST /users/',
				webhookEvents: '',
				accessType: ['Sub-Account', 'Company'] as const,
			},
			{
				methodAndEndpoint: 'DELETE /users/:userId',
				webhookEvents: '',
				accessType: ['Sub-Account', 'Company'] as const,
			},
			{
				methodAndEndpoint: 'PUT /users/:userId',
				webhookEvents: '',
				accessType: ['Sub-Account', 'Company'] as const,
			},
		],
	},
	workflows: {
		readonly: [
			{
				methodAndEndpoint: 'GET /workflows/',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
		],
	},
}
