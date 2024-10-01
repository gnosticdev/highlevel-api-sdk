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
	'calendars/resources': {
		readonly: [
			{
				methodAndEndpoint: 'GET /calendars/resources/:resourceType',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'GET /calendars/resources/:resourceType/:id',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
		],
		write: [
			{
				methodAndEndpoint: 'POST /calendars/resources',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'PUT /calendars/resources/:resourceType/:id',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'DELETE /calendars/resources/:resourceType/:id',
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
			{
				methodAndEndpoint: 'GET /calendars/events',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'GET /calendars/blocked-slots',
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
			{
				methodAndEndpoint:
					'GET conversations/locations/:locationId/messages/:messageId/transcription',
				webhookEvents: 'InboundMessage',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: '',
				webhookEvents: 'OutboundMessage',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint:
					'GET conversations/locations/:locationId/messages/:messageId/transcription/download',
				webhookEvents: 'InboundMessage',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: '',
				webhookEvents: 'OutboundMessage',
				accessType: [''] as const,
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
	invoices: {
		readonly: [
			{
				methodAndEndpoint: 'GET /invoices/',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'GET /invoices/:invoiceId',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'GET /invoices/generate-invoice-number',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
		],
		write: [
			{
				methodAndEndpoint: 'POST /invoices',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'PUT /invoices/:invoiceId',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'DELETE /invoices/:invoiceId',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'POST /invoices/:invoiceId/send',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'POST /invoices/:invoiceId/void',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'POST /invoices/:invoiceId/record-payment',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'POST /invoices/text2pay',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
		],
	},
	'invoices/schedule': {
		readonly: [
			{
				methodAndEndpoint: 'GET /invoices/schedule/',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'GET /invoices/schedule/:scheduleId',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
		],
		write: [
			{
				methodAndEndpoint: 'POST /invoices/schedule',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'PUT /invoices/schedule/:scheduleId',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'DELETE /invoices/schedule/:scheduleId',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'POST /invoices/schedule/:scheduleId/schedule',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'POST /invoices/schedule/:scheduleId/auto-payment',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'POST /invoices/schedule/:scheduleId/cancel',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
		],
	},
	'invoices/template': {
		readonly: [
			{
				methodAndEndpoint: 'GET /invoices/template/',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'GET /invoices/template/:templateId',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
		],
		write: [
			{
				methodAndEndpoint: 'POST /invoices/template/',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'PUT /invoices/template/:templateId',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'DELETE /invoices/template/:templateId',
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
				webhookEvents: 'LocationCreate',
				accessType: ['Sub-Account', 'Agency'] as const,
			},
			{
				methodAndEndpoint: '',
				webhookEvents: 'LocationUpdate',
				accessType: ['Sub-Account', 'Agency'] as const,
			},
			{
				methodAndEndpoint: 'GET /locations/search',
				webhookEvents: '',
				accessType: ['Sub-Account', 'Agency'] as const,
			},
			{
				methodAndEndpoint: 'GET /locations/timeZones',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
		],
		write: [
			{
				methodAndEndpoint: 'POST /locations/',
				webhookEvents: '',
				accessType: ['Agency'] as const,
			},
			{
				methodAndEndpoint: 'PUT /locations/:locationId',
				webhookEvents: '',
				accessType: ['Agency'] as const,
			},
			{
				methodAndEndpoint: 'DELETE /locations/:locationId',
				webhookEvents: '',
				accessType: ['Agency'] as const,
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
		],
	},
	'funnels/redirect': {
		readonly: [
			{
				methodAndEndpoint: 'GET /funnels/lookup/redirect/list',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
		],
		write: [
			{
				methodAndEndpoint: 'POST /funnels/lookup/redirect',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
		],
	},
	'funnels/page': {
		readonly: [
			{
				methodAndEndpoint: 'GET /funnels/page',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
		],
	},
	'funnels/funnel': {
		readonly: [
			{
				methodAndEndpoint: 'GET /funnels/funnel/list',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
		],
	},
	'funnels/pagecount': {
		readonly: [
			{
				methodAndEndpoint: 'GET /funnels/page/count',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'DELETE /funnels/lookup/redirect/:id',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'PATCH /funnels/lookup/redirect/:id',
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
	'payments/integration': {
		readonly: [
			{
				methodAndEndpoint: 'GET /payments/integrations/provider/whitelabel',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
		],
		write: [
			{
				methodAndEndpoint: 'POST /payments/integrations/provider/whitelabel',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
		],
	},
	'payments/orders': {
		readonly: [
			{
				methodAndEndpoint: 'GET /payments/orders/',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'GET /payments/orders/:orderId',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'GET /payments/orders/:orderId/fulfillments',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
		],
		write: [
			{
				methodAndEndpoint: 'POST /payments/orders/:orderId/fulfillments',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
		],
	},
	'payments/transactions': {
		readonly: [
			{
				methodAndEndpoint: 'GET /payments/transactions/',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'GET /payments/transactions/:transactionId',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
		],
	},
	'payments/subscriptions': {
		readonly: [
			{
				methodAndEndpoint: 'GET /payments/subscriptions/',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'GET /payments/subscriptions/:subscriptionId',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
		],
	},
	products: {
		readonly: [
			{
				methodAndEndpoint: 'GET /products/',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'GET /products/:productId',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
		],
		write: [
			{
				methodAndEndpoint: 'POST /products/',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'PUT /products/:productId',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'DELETE /products/:productId',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
		],
	},
	'products/prices': {
		readonly: [
			{
				methodAndEndpoint: 'GET /products/:productId/price/',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'GET /products/:productId/price/:priceId',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
		],
		write: [
			{
				methodAndEndpoint: 'POST /products/:productId/price/',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'PUT /products/:productId/price/:priceId',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'DELETE /products/:productId/price/:priceId',
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
				accessType: ['Agency'] as const,
			},
		],
		write: [
			{
				methodAndEndpoint: 'POST /oauth/locationToken',
				webhookEvents: '',
				accessType: ['Agency'] as const,
			},
		],
	},
	'saas/location': {
		write: [
			{
				methodAndEndpoint: 'PUT /update-saas-subscription/:locationId',
				webhookEvents: '',
				accessType: ['Agency'] as const,
			},
			{
				methodAndEndpoint: 'POST /enable-saas/:locationId',
				webhookEvents: '',
				accessType: ['Sub-Account', 'Agency'] as const,
			},
		],
		read: [
			{
				methodAndEndpoint: 'GET /locations',
				webhookEvents: '',
				accessType: ['Sub-Account', 'Agency'] as const,
			},
		],
	},
	'saas/company': {
		write: [
			{
				methodAndEndpoint: 'POST /bulk-disable-saas/:companyId',
				webhookEvents: '',
				accessType: ['Sub-Account', 'Agency'] as const,
			},
		],
	},
	snapshots: {
		readonly: [
			{
				methodAndEndpoint: 'GET /snapshots',
				webhookEvents: '',
				accessType: ['Agency'] as const,
			},
		],
	},
	'socialplanner/account': {
		readonly: [
			{
				methodAndEndpoint: 'GET /social-media-posting/:locationId/accounts',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
		],
		write: [
			{
				methodAndEndpoint:
					'DELETE /social-media-posting/:locationId/accounts/:id',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
		],
	},
	'socialplanner/csv': {
		readonly: [
			{
				methodAndEndpoint: 'GET /social-media-posting/:locationId/csv',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'GET /social-media-posting/:locationId/csv/:id',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
		],
		write: [
			{
				methodAndEndpoint: 'POST /social-media-posting/:locationId/csv',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint:
					'POST /social-media-posting/:locationId/set-accounts',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'DELETE /social-media-posting/:locationId/csv/:id',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'PATCH /social-media-posting/:locationId/csv/:id',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint:
					'DELETE /social-media-posting/:locationId/csv/:csvId/post/:postId',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
		],
	},
	'socialplanner/category': {
		readonly: [
			{
				methodAndEndpoint: 'GET /social-media-posting/:locationId/categories',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint:
					'GET /social-media-posting/:locationId/categories/:id',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
		],
	},
	'socialplanner/oauth': {
		readonly: [
			{
				methodAndEndpoint: 'GET /social-media-posting/oauth/facebook/start',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint:
					'GET /social-media-posting/oauth/:locationId/facebook/accounts/:accountId',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'GET /social-media-posting/oauth/google/start',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint:
					'GET /social-media-posting/oauth/:locationId/google/locations/:accountId',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'GET /social-media-posting/oauth/instagram/start',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint:
					'GET /social-media-posting/oauth/:locationId/instagram/accounts/:accountId',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'GET /social-media-posting/oauth/linkedin/start',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint:
					'GET /social-media-posting/oauth/:locationId/linkedin/accounts/:accountId',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'GET /social-media-posting/oauth/tiktok/start',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint:
					'GET /social-media-posting/oauth/:locationId/tiktok/accounts/:accountId',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint:
					'GET /social-media-posting/oauth/tiktok-business/start',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint:
					'GET /social-media-posting/oauth/:locationId/tiktok-business/accounts/:accountId',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'GET /social-media-posting/oauth/twitter/start',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint:
					'GET /social-media-posting/oauth/:locationId/twitter/accounts/:accountId',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
		],
		write: [
			{
				methodAndEndpoint:
					'POST /social-media-posting/oauth/:locationId/facebook/accounts/:accountId',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint:
					'POST /social-media-posting/oauth/:locationId/google/locations/:accountId',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint:
					'POST /social-media-posting/oauth/:locationId/instagram/accounts/:accountId',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint:
					'POST /social-media-posting/oauth/:locationId/linkedin/accounts/:accountId',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint:
					'POST /social-media-posting/oauth/:locationId/tiktok/accounts/:accountId',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint:
					'POST /social-media-posting/oauth/:locationId/twitter/accounts/:accountId',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
		],
	},
	'socialplanner/post': {
		readonly: [
			{
				methodAndEndpoint: 'GET /social-media-posting/:locationId/posts/:id',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'POST /social-media-posting/:locationId/posts/list',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
		],
		write: [
			{
				methodAndEndpoint: 'POST /social-media-posting/:locationId/posts',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'PUT /social-media-posting/:locationId/posts/:id',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'DELETE /social-media-posting/:locationId/posts/:id',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint: 'PATCH /social-media-posting/:locationId/posts/:id',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
		],
	},
	'socialplanner/tag': {
		readonly: [
			{
				methodAndEndpoint: 'GET /social-media-posting/:locationId/tags',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
			{
				methodAndEndpoint:
					'POST /social-media-posting/:locationId/tags/details',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
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
				accessType: ['Sub-Account', 'Agency'] as const,
			},
			{
				methodAndEndpoint: 'GET /users/:userId',
				webhookEvents: '',
				accessType: ['Sub-Account', 'Agency'] as const,
			},
		],
		write: [
			{
				methodAndEndpoint: 'POST /users/',
				webhookEvents: '',
				accessType: ['Sub-Account', 'Agency'] as const,
			},
			{
				methodAndEndpoint: 'DELETE /users/:userId',
				webhookEvents: '',
				accessType: ['Sub-Account', 'Agency'] as const,
			},
			{
				methodAndEndpoint: 'PUT /users/:userId',
				webhookEvents: '',
				accessType: ['Sub-Account', 'Agency'] as const,
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
	courses: {
		write: [
			{
				methodAndEndpoint: 'POST courses/courses-exporter/public/import',
				webhookEvents: '',
				accessType: ['Sub-Account'] as const,
			},
		],
	},
}
