export const webhooksSchema = {
	openapi: '3.0.0',
	info: {
		title: 'Webhooks API',
		version: '1.0.0',
	},
	paths: {
		'/webhooks/AppointmentCreate': {
			post: {
				summary: 'Receive AppointmentCreate webhook',
				requestBody: {
					content: {
						'application/json': {
							schema: {
								$ref: '#/components/schemas/AppointmentCreate',
							},
						},
					},
				},
				responses: {
					'200': {
						description: 'Webhook received successfully',
					},
				},
			},
		},
		'/webhooks/AppointmentDelete': {
			post: {
				summary: 'Receive AppointmentDelete webhook',
				requestBody: {
					content: {
						'application/json': {
							schema: {
								$ref: '#/components/schemas/AppointmentDelete',
							},
						},
					},
				},
				responses: {
					'200': {
						description: 'Webhook received successfully',
					},
				},
			},
		},
		'/webhooks/AppointmentUpdate': {
			post: {
				summary: 'Receive AppointmentUpdate webhook',
				requestBody: {
					content: {
						'application/json': {
							schema: {
								$ref: '#/components/schemas/AppointmentUpdate',
							},
						},
					},
				},
				responses: {
					'200': {
						description: 'Webhook received successfully',
					},
				},
			},
		},
		'/webhooks/AppInstall': {
			post: {
				summary: 'Receive AppInstall webhook',
				requestBody: {
					content: {
						'application/json': {
							schema: {
								$ref: '#/components/schemas/AppInstall',
							},
						},
					},
				},
				responses: {
					'200': {
						description: 'Webhook received successfully',
					},
				},
			},
		},
		'/webhooks/AppUninstall': {
			post: {
				summary: 'Receive AppUninstall webhook',
				requestBody: {
					content: {
						'application/json': {
							schema: {
								$ref: '#/components/schemas/AppUninstall',
							},
						},
					},
				},
				responses: {
					'200': {
						description: 'Webhook received successfully',
					},
				},
			},
		},
		'/webhooks/CampaignStatusUpdate': {
			post: {
				summary: 'Receive CampaignStatusUpdate webhook',
				requestBody: {
					content: {
						'application/json': {
							schema: {
								$ref: '#/components/schemas/CampaignStatusUpdate',
							},
						},
					},
				},
				responses: {
					'200': {
						description: 'Webhook received successfully',
					},
				},
			},
		},
		'/webhooks/ContactCreate': {
			post: {
				summary: 'Receive ContactCreate webhook',
				requestBody: {
					content: {
						'application/json': {
							schema: {
								$ref: '#/components/schemas/ContactCreate',
							},
						},
					},
				},
				responses: {
					'200': {
						description: 'Webhook received successfully',
					},
				},
			},
		},
		'/webhooks/ContactDelete': {
			post: {
				summary: 'Receive ContactDelete webhook',
				requestBody: {
					content: {
						'application/json': {
							schema: {
								$ref: '#/components/schemas/ContactDelete',
							},
						},
					},
				},
				responses: {
					'200': {
						description: 'Webhook received successfully',
					},
				},
			},
		},
		'/webhooks/ContactTagUpdate': {
			post: {
				summary: 'Receive ContactTagUpdate webhook',
				requestBody: {
					content: {
						'application/json': {
							schema: {
								$ref: '#/components/schemas/ContactTagUpdate',
							},
						},
					},
				},
				responses: {
					'200': {
						description: 'Webhook received successfully',
					},
				},
			},
		},
		'/webhooks/ContactDndUpdate': {
			post: {
				summary: 'Receive ContactDndUpdate webhook',
				requestBody: {
					content: {
						'application/json': {
							schema: {
								$ref: '#/components/schemas/ContactDndUpdate',
							},
						},
					},
				},
				responses: {
					'200': {
						description: 'Webhook received successfully',
					},
				},
			},
		},
		'/webhooks/ConversationProviderOutboundWebhook': {
			post: {
				summary: 'Receive Conversation Provider Outbound Webhook webhook',
				requestBody: {
					content: {
						'application/json': {
							schema: {
								$ref: '#/components/schemas/ConversationProviderOutboundWebhook',
							},
						},
					},
				},
				responses: {
					'200': {
						description: 'Webhook received successfully',
					},
				},
			},
		},
		'/webhooks/InboundMessage': {
			post: {
				summary: 'Receive InboundMessage webhook',
				requestBody: {
					content: {
						'application/json': {
							schema: {
								$ref: '#/components/schemas/InboundMessage',
							},
						},
					},
				},
				responses: {
					'200': {
						description: 'Webhook received successfully',
					},
				},
			},
		},
		'/webhooks/ConversationUnreadWebhook': {
			post: {
				summary: 'Receive Conversation Unread Webhook webhook',
				requestBody: {
					content: {
						'application/json': {
							schema: {
								$ref: '#/components/schemas/ConversationUnreadWebhook',
							},
						},
					},
				},
				responses: {
					'200': {
						description: 'Webhook received successfully',
					},
				},
			},
		},
		'/webhooks/ContactUpdate': {
			post: {
				summary: 'Receive ContactUpdate webhook',
				requestBody: {
					content: {
						'application/json': {
							schema: {
								$ref: '#/components/schemas/ContactUpdate',
							},
						},
					},
				},
				responses: {
					'200': {
						description: 'Webhook received successfully',
					},
				},
			},
		},
		'/webhooks/InvoiceCreate': {
			post: {
				summary: 'Receive InvoiceCreate webhook',
				requestBody: {
					content: {
						'application/json': {
							schema: {
								$ref: '#/components/schemas/InvoiceCreate',
							},
						},
					},
				},
				responses: {
					'200': {
						description: 'Webhook received successfully',
					},
				},
			},
		},
		'/webhooks/InvoiceVoid': {
			post: {
				summary: 'Receive InvoiceVoid webhook',
				requestBody: {
					content: {
						'application/json': {
							schema: {
								$ref: '#/components/schemas/InvoiceVoid',
							},
						},
					},
				},
				responses: {
					'200': {
						description: 'Webhook received successfully',
					},
				},
			},
		},
		'/webhooks/InvoiceSent': {
			post: {
				summary: 'Receive InvoiceSent webhook',
				requestBody: {
					content: {
						'application/json': {
							schema: {
								$ref: '#/components/schemas/InvoiceSent',
							},
						},
					},
				},
				responses: {
					'200': {
						description: 'Webhook received successfully',
					},
				},
			},
		},
		'/webhooks/InvoicePartiallyPaid': {
			post: {
				summary: 'Receive InvoicePartiallyPaid webhook',
				requestBody: {
					content: {
						'application/json': {
							schema: {
								$ref: '#/components/schemas/InvoicePartiallyPaid',
							},
						},
					},
				},
				responses: {
					'200': {
						description: 'Webhook received successfully',
					},
				},
			},
		},
		'/webhooks/InvoicePaid': {
			post: {
				summary: 'Receive InvoicePaid webhook',
				requestBody: {
					content: {
						'application/json': {
							schema: {
								$ref: '#/components/schemas/InvoicePaid',
							},
						},
					},
				},
				responses: {
					'200': {
						description: 'Webhook received successfully',
					},
				},
			},
		},
		'/webhooks/InvoiceDelete': {
			post: {
				summary: 'Receive InvoiceDelete webhook',
				requestBody: {
					content: {
						'application/json': {
							schema: {
								$ref: '#/components/schemas/InvoiceDelete',
							},
						},
					},
				},
				responses: {
					'200': {
						description: 'Webhook received successfully',
					},
				},
			},
		},
		'/webhooks/InvoiceUpdate': {
			post: {
				summary: 'Receive InvoiceUpdate webhook',
				requestBody: {
					content: {
						'application/json': {
							schema: {
								$ref: '#/components/schemas/InvoiceUpdate',
							},
						},
					},
				},
				responses: {
					'200': {
						description: 'Webhook received successfully',
					},
				},
			},
		},
		'/webhooks/LCEmailStats': {
			post: {
				summary: 'Receive LCEmailStats webhook',
				requestBody: {
					content: {
						'application/json': {
							schema: {
								$ref: '#/components/schemas/LCEmailStats',
							},
						},
					},
				},
				responses: {
					'200': {
						description: 'Webhook received successfully',
					},
				},
			},
		},
		'/webhooks/LocationCreate': {
			post: {
				summary: 'Receive LocationCreate webhook',
				requestBody: {
					content: {
						'application/json': {
							schema: {
								$ref: '#/components/schemas/LocationCreate',
							},
						},
					},
				},
				responses: {
					'200': {
						description: 'Webhook received successfully',
					},
				},
			},
		},
		'/webhooks/LocationUpdate': {
			post: {
				summary: 'Receive LocationUpdate webhook',
				requestBody: {
					content: {
						'application/json': {
							schema: {
								$ref: '#/components/schemas/LocationUpdate',
							},
						},
					},
				},
				responses: {
					'200': {
						description: 'Webhook received successfully',
					},
				},
			},
		},
		'/webhooks/NoteCreate': {
			post: {
				summary: 'Receive NoteCreate webhook',
				requestBody: {
					content: {
						'application/json': {
							schema: {
								$ref: '#/components/schemas/NoteCreate',
							},
						},
					},
				},
				responses: {
					'200': {
						description: 'Webhook received successfully',
					},
				},
			},
		},
		'/webhooks/NoteDelete': {
			post: {
				summary: 'Receive NoteDelete webhook',
				requestBody: {
					content: {
						'application/json': {
							schema: {
								$ref: '#/components/schemas/NoteDelete',
							},
						},
					},
				},
				responses: {
					'200': {
						description: 'Webhook received successfully',
					},
				},
			},
		},
		'/webhooks/OpportunityCreate': {
			post: {
				summary: 'Receive OpportunityCreate webhook',
				requestBody: {
					content: {
						'application/json': {
							schema: {
								$ref: '#/components/schemas/OpportunityCreate',
							},
						},
					},
				},
				responses: {
					'200': {
						description: 'Webhook received successfully',
					},
				},
			},
		},
		'/webhooks/OpportunityAssignedToUpdate': {
			post: {
				summary: 'Receive OpportunityAssignedToUpdate webhook',
				requestBody: {
					content: {
						'application/json': {
							schema: {
								$ref: '#/components/schemas/OpportunityAssignedToUpdate',
							},
						},
					},
				},
				responses: {
					'200': {
						description: 'Webhook received successfully',
					},
				},
			},
		},
		'/webhooks/NoteUpdate': {
			post: {
				summary: 'Receive NoteUpdate webhook',
				requestBody: {
					content: {
						'application/json': {
							schema: {
								$ref: '#/components/schemas/NoteUpdate',
							},
						},
					},
				},
				responses: {
					'200': {
						description: 'Webhook received successfully',
					},
				},
			},
		},
		'/webhooks/OpportunityDelete': {
			post: {
				summary: 'Receive OpportunityDelete webhook',
				requestBody: {
					content: {
						'application/json': {
							schema: {
								$ref: '#/components/schemas/OpportunityDelete',
							},
						},
					},
				},
				responses: {
					'200': {
						description: 'Webhook received successfully',
					},
				},
			},
		},
		'/webhooks/OpportunityMonetaryValueUpdate': {
			post: {
				summary: 'Receive OpportunityMonetaryValueUpdate webhook',
				requestBody: {
					content: {
						'application/json': {
							schema: {
								$ref: '#/components/schemas/OpportunityMonetaryValueUpdate',
							},
						},
					},
				},
				responses: {
					'200': {
						description: 'Webhook received successfully',
					},
				},
			},
		},
		'/webhooks/OpportunityStageUpdate': {
			post: {
				summary: 'Receive OpportunityStageUpdate webhook',
				requestBody: {
					content: {
						'application/json': {
							schema: {
								$ref: '#/components/schemas/OpportunityStageUpdate',
							},
						},
					},
				},
				responses: {
					'200': {
						description: 'Webhook received successfully',
					},
				},
			},
		},
		'/webhooks/OpportunityStatusUpdate': {
			post: {
				summary: 'Receive OpportunityStatusUpdate webhook',
				requestBody: {
					content: {
						'application/json': {
							schema: {
								$ref: '#/components/schemas/OpportunityStatusUpdate',
							},
						},
					},
				},
				responses: {
					'200': {
						description: 'Webhook received successfully',
					},
				},
			},
		},
		'/webhooks/OpportunityUpdate': {
			post: {
				summary: 'Receive OpportunityUpdate webhook',
				requestBody: {
					content: {
						'application/json': {
							schema: {
								$ref: '#/components/schemas/OpportunityUpdate',
							},
						},
					},
				},
				responses: {
					'200': {
						description: 'Webhook received successfully',
					},
				},
			},
		},
		'/webhooks/OrderCreate': {
			post: {
				summary: 'Receive OrderCreate webhook',
				requestBody: {
					content: {
						'application/json': {
							schema: {
								$ref: '#/components/schemas/OrderCreate',
							},
						},
					},
				},
				responses: {
					'200': {
						description: 'Webhook received successfully',
					},
				},
			},
		},
		'/webhooks/OrderStatusUpdate': {
			post: {
				summary: 'Receive OrderStatusUpdate webhook',
				requestBody: {
					content: {
						'application/json': {
							schema: {
								$ref: '#/components/schemas/OrderStatusUpdate',
							},
						},
					},
				},
				responses: {
					'200': {
						description: 'Webhook received successfully',
					},
				},
			},
		},
		'/webhooks/OutboundMessage': {
			post: {
				summary: 'Receive OutboundMessage webhook',
				requestBody: {
					content: {
						'application/json': {
							schema: {
								$ref: '#/components/schemas/OutboundMessage',
							},
						},
					},
				},
				responses: {
					'200': {
						description: 'Webhook received successfully',
					},
				},
			},
		},
		'/webhooks/PriceCreate': {
			post: {
				summary: 'Receive PriceCreate webhook',
				requestBody: {
					content: {
						'application/json': {
							schema: {
								$ref: '#/components/schemas/PriceCreate',
							},
						},
					},
				},
				responses: {
					'200': {
						description: 'Webhook received successfully',
					},
				},
			},
		},
		'/webhooks/PriceUpdate': {
			post: {
				summary: 'Receive PriceUpdate webhook',
				requestBody: {
					content: {
						'application/json': {
							schema: {
								$ref: '#/components/schemas/PriceUpdate',
							},
						},
					},
				},
				responses: {
					'200': {
						description: 'Webhook received successfully',
					},
				},
			},
		},
		'/webhooks/PriceDelete': {
			post: {
				summary: 'Receive PriceDelete webhook',
				requestBody: {
					content: {
						'application/json': {
							schema: {
								$ref: '#/components/schemas/PriceDelete',
							},
						},
					},
				},
				responses: {
					'200': {
						description: 'Webhook received successfully',
					},
				},
			},
		},
		'/webhooks/ProductCreate': {
			post: {
				summary: 'Receive ProductCreate webhook',
				requestBody: {
					content: {
						'application/json': {
							schema: {
								$ref: '#/components/schemas/ProductCreate',
							},
						},
					},
				},
				responses: {
					'200': {
						description: 'Webhook received successfully',
					},
				},
			},
		},
		'/webhooks/ProductUpdate': {
			post: {
				summary: 'Receive ProductUpdate webhook',
				requestBody: {
					content: {
						'application/json': {
							schema: {
								$ref: '#/components/schemas/ProductUpdate',
							},
						},
					},
				},
				responses: {
					'200': {
						description: 'Webhook received successfully',
					},
				},
			},
		},
		'/webhooks/ProductDelete': {
			post: {
				summary: 'Receive ProductDelete webhook',
				requestBody: {
					content: {
						'application/json': {
							schema: {
								$ref: '#/components/schemas/ProductDelete',
							},
						},
					},
				},
				responses: {
					'200': {
						description: 'Webhook received successfully',
					},
				},
			},
		},
		'/webhooks/TaskComplete': {
			post: {
				summary: 'Receive TaskComplete webhook',
				requestBody: {
					content: {
						'application/json': {
							schema: {
								$ref: '#/components/schemas/TaskComplete',
							},
						},
					},
				},
				responses: {
					'200': {
						description: 'Webhook received successfully',
					},
				},
			},
		},
		'/webhooks/TaskCreate': {
			post: {
				summary: 'Receive TaskCreate webhook',
				requestBody: {
					content: {
						'application/json': {
							schema: {
								$ref: '#/components/schemas/TaskCreate',
							},
						},
					},
				},
				responses: {
					'200': {
						description: 'Webhook received successfully',
					},
				},
			},
		},
		'/webhooks/TaskDelete': {
			post: {
				summary: 'Receive TaskDelete webhook',
				requestBody: {
					content: {
						'application/json': {
							schema: {
								$ref: '#/components/schemas/TaskDelete',
							},
						},
					},
				},
				responses: {
					'200': {
						description: 'Webhook received successfully',
					},
				},
			},
		},
	},
	components: {
		schemas: {
			AppointmentCreate: {
				type: 'object',
				properties: {
					type: {
						type: 'string',
					},
					locationId: {
						type: 'string',
					},
					appointment: {
						type: 'object',
						properties: {
							id: {
								type: 'string',
							},
							address: {
								type: 'string',
							},
							title: {
								type: 'string',
							},
							calendarId: {
								type: 'string',
							},
							contactId: {
								type: 'string',
							},
							groupId: {
								type: 'string',
							},
							appointmentStatus: {
								type: 'string',
							},
							assignedUserId: {
								type: 'string',
							},
							users: {
								type: 'array',
							},
							notes: {
								type: 'string',
							},
							source: {
								type: 'string',
							},
							startTime: {
								type: 'string',
							},
							endTime: {
								type: 'string',
							},
							dateAdded: {
								type: 'string',
							},
							dateUpdated: {
								type: 'string',
							},
						},
					},
				},
			},
			AppointmentDelete: {
				type: 'object',
				properties: {
					type: {
						type: 'string',
					},
					locationId: {
						type: 'string',
					},
					appointment: {
						type: 'object',
						properties: {
							id: {
								type: 'string',
							},
							address: {
								type: 'string',
							},
							title: {
								type: 'string',
							},
							calendarId: {
								type: 'string',
							},
							contactId: {
								type: 'string',
							},
							groupId: {
								type: 'string',
							},
							appointmentStatus: {
								type: 'string',
							},
							assignedUserId: {
								type: 'string',
							},
							users: {
								type: 'array',
							},
							notes: {
								type: 'string',
							},
							source: {
								type: 'string',
							},
							startTime: {
								type: 'string',
							},
							endTime: {
								type: 'string',
							},
							dateAdded: {
								type: 'string',
							},
							dateUpdated: {
								type: 'string',
							},
						},
					},
				},
			},
			AppointmentUpdate: {
				type: 'object',
				properties: {
					type: {
						type: 'string',
					},
					locationId: {
						type: 'string',
					},
					appointment: {
						type: 'object',
						properties: {
							id: {
								type: 'string',
							},
							address: {
								type: 'string',
							},
							title: {
								type: 'string',
							},
							calendarId: {
								type: 'string',
							},
							contactId: {
								type: 'string',
							},
							groupId: {
								type: 'string',
							},
							appointmentStatus: {
								type: 'string',
							},
							assignedUserId: {
								type: 'string',
							},
							users: {
								type: 'array',
							},
							notes: {
								type: 'string',
							},
							source: {
								type: 'string',
							},
							startTime: {
								type: 'string',
							},
							endTime: {
								type: 'string',
							},
							dateAdded: {
								type: 'string',
							},
							dateUpdated: {
								type: 'string',
							},
						},
					},
				},
			},
			AppInstall: {
				type: 'object',
				properties: {
					type: {
						type: 'string',
					},
					appId: {
						type: 'string',
					},
					companyId: {
						type: 'string',
					},
					locationId: {
						type: 'string',
					},
					userId: {
						type: 'string',
					},
					planId: {
						type: 'string',
					},
					trial: {
						type: 'object',
						properties: {
							onTrial: {
								type: 'boolean',
							},
							trialDuration: {
								type: 'number',
							},
							trialStartDate: {
								type: 'Date',
							},
						},
					},
				},
			},
			AppUninstall: {
				type: 'object',
				properties: {
					type: {
						type: 'string',
					},
					appId: {
						type: 'string',
					},
					companyId: {
						type: 'string',
					},
					locationId: {
						type: 'string',
					},
				},
			},
			CampaignStatusUpdate: {
				type: 'object',
				properties: {
					type: {
						type: 'string',
					},
					locationId: {
						type: 'string',
					},
					id: {
						type: 'string',
					},
					contactId: {
						type: 'string',
					},
					status: {
						type: 'string',
					},
					templateId: {
						type: 'string',
					},
					replied: {
						type: 'string',
					},
					dateAdded: {
						type: 'string',
					},
				},
			},
			ContactCreate: {
				type: 'object',
				properties: {
					type: {
						type: 'string',
					},
					locationId: {
						type: 'string',
					},
					id: {
						type: 'string',
					},
					address1: {
						type: 'string',
					},
					city: {
						type: 'string',
					},
					companyName: {
						type: 'string',
					},
					country: {
						type: 'string',
					},
					source: {
						type: 'string',
					},
					dateAdded: {
						type: 'string',
					},
					dateOfBirth: {
						type: 'string',
					},
					dnd: {
						type: 'boolean',
					},
					email: {
						type: 'string',
					},
					name: {
						type: 'string',
					},
					firstName: {
						type: 'string',
					},
					lastName: {
						type: 'string',
					},
					phone: {
						type: 'string',
					},
					postalCode: {
						type: 'string',
					},
					state: {
						type: 'string',
					},
					tags: {
						type: 'array',
					},
					website: {
						type: 'string',
					},
					attachments: {
						type: 'array',
					},
					assignedTo: {
						type: 'string',
					},
					customFields: {
						type: 'array',
						items: {
							type: 'object',
							properties: {
								id: {
									type: 'string',
								},
								value: {
									type: ['string', 'number', 'array', 'object'],
								},
							},
						},
					},
				},
			},
			ContactDelete: {
				type: 'object',
				properties: {
					type: {
						type: 'string',
					},
					locationId: {
						type: 'string',
					},
					id: {
						type: 'string',
					},
					address1: {
						type: 'string',
					},
					city: {
						type: 'string',
					},
					companyName: {
						type: 'string',
					},
					country: {
						type: 'string',
					},
					source: {
						type: 'string',
					},
					dateAdded: {
						type: 'string',
					},
					dateOfBirth: {
						type: 'string',
					},
					dnd: {
						type: 'boolean',
					},
					email: {
						type: 'string',
					},
					name: {
						type: 'string',
					},
					firstName: {
						type: 'string',
					},
					lastName: {
						type: 'string',
					},
					phone: {
						type: 'string',
					},
					postalCode: {
						type: 'string',
					},
					state: {
						type: 'string',
					},
					tags: {
						type: 'array',
					},
					website: {
						type: 'string',
					},
					attachments: {
						type: 'array',
					},
					assignedTo: {
						type: 'string',
					},
					customFields: {
						type: 'array',
						items: {
							type: 'object',
							properties: {
								id: {
									type: 'string',
								},
								value: {
									type: ['string', 'number', 'array', 'object'],
								},
							},
						},
					},
				},
			},
			ContactTagUpdate: {
				type: 'object',
				properties: {
					type: {
						type: 'string',
					},
					locationId: {
						type: 'string',
					},
					id: {
						type: 'string',
					},
					address1: {
						type: 'string',
					},
					city: {
						type: 'string',
					},
					companyName: {
						type: 'string',
					},
					country: {
						type: 'string',
					},
					source: {
						type: 'string',
					},
					dateAdded: {
						type: 'string',
					},
					dateOfBirth: {
						type: 'string',
					},
					dnd: {
						type: 'boolean',
					},
					email: {
						type: 'string',
					},
					name: {
						type: 'string',
					},
					firstName: {
						type: 'string',
					},
					lastName: {
						type: 'string',
					},
					phone: {
						type: 'string',
					},
					postalCode: {
						type: 'string',
					},
					state: {
						type: 'string',
					},
					tags: {
						type: 'array',
					},
					website: {
						type: 'string',
					},
					attachments: {
						type: 'array',
					},
					assignedTo: {
						type: 'string',
					},
					customFields: {
						type: 'array',
						items: {
							type: 'object',
							properties: {
								id: {
									type: 'string',
								},
								value: {
									type: ['string', 'number', 'array', 'object'],
								},
							},
						},
					},
				},
			},
			ContactDndUpdate: {
				type: 'object',
				properties: {
					type: {
						type: 'string',
					},
					locationId: {
						type: 'string',
					},
					id: {
						type: 'string',
					},
					address1: {
						type: 'string',
					},
					city: {
						type: 'string',
					},
					companyName: {
						type: 'string',
					},
					country: {
						type: 'string',
					},
					source: {
						type: 'string',
					},
					dateAdded: {
						type: 'string',
					},
					dateOfBirth: {
						type: 'string',
					},
					dnd: {
						type: 'boolean',
					},
					dndSettings: {
						type: 'object',
						properties: {
							SMS: {
								type: 'object',
								properties: {
									status: {
										type: 'string',
									},
									message: {
										type: 'string',
									},
									code: {
										type: 'string',
									},
								},
							},
							Email: {
								type: 'object',
								properties: {
									status: {
										type: 'string',
									},
									message: {
										type: 'string',
									},
									code: {
										type: 'string',
									},
								},
							},
							GMB: {
								type: 'object',
								properties: {
									status: {
										type: 'string',
									},
									message: {
										type: 'string',
									},
									code: {
										type: 'string',
									},
								},
							},
							FB: {
								type: 'object',
								properties: {
									status: {
										type: 'string',
									},
									message: {
										type: 'string',
									},
									code: {
										type: 'string',
									},
								},
							},
							WhatsApp: {
								type: 'object',
								properties: {
									status: {
										type: 'string',
									},
									message: {
										type: 'string',
									},
									code: {
										type: 'string',
									},
								},
							},
							Call: {
								type: 'object',
								properties: {
									status: {
										type: 'string',
									},
									message: {
										type: 'string',
									},
									code: {
										type: 'string',
									},
								},
							},
						},
					},
					email: {
						type: 'string',
					},
					name: {
						type: 'string',
					},
					firstName: {
						type: 'string',
					},
					lastName: {
						type: 'string',
					},
					phone: {
						type: 'string',
					},
					postalCode: {
						type: 'string',
					},
					state: {
						type: 'string',
					},
					tags: {
						type: 'array',
					},
					website: {
						type: 'string',
					},
					attachments: {
						type: 'array',
					},
					assignedTo: {
						type: 'string',
					},
					customFields: {
						type: 'array',
						items: {
							type: 'object',
							properties: {
								id: {
									type: 'string',
								},
								value: {
									type: ['string', 'number', 'array', 'object'],
								},
							},
						},
					},
				},
			},
			ConversationProviderOutboundWebhook: {
				type: 'object',
				properties: {
					contactId: {
						type: 'string',
					},
					locationId: {
						type: 'string',
					},
					messageId: {
						type: 'string',
					},
					emailMessageId: {
						type: 'string',
					},
					type: {
						type: 'Email/SMS',
					},
					attachments: {
						type: 'array',
					},
					message: {
						type: 'string',
					},
					phone: {
						type: 'string',
					},
					emailTo: {
						type: 'string',
					},
					emailFrom: {
						type: 'string',
					},
					html: {
						type: 'string',
					},
					subject: {
						type: 'string',
					},
					userId: {
						type: 'string',
					},
				},
			},
			InboundMessage: {
				type: 'object',
				properties: {
					type: {
						type: 'string',
					},
					locationId: {
						type: 'string',
					},
					attachments: {
						type: 'array',
					},
					body: {
						type: 'string',
					},
					contactId: {
						type: 'string',
					},
					contentType: {
						type: 'string',
					},
					conversationId: {
						type: 'string',
					},
					dateAdded: {
						type: 'string',
					},
					direction: {
						type: 'string',
					},
					messageType: {
						type: 'string',
					},
					status: {
						type: 'string',
					},
					messageId: {
						type: 'string',
					},
					userId: {
						type: 'string',
					},
				},
			},
			ConversationUnreadWebhook: {
				type: 'object',
				properties: {
					type: {
						type: 'string',
					},
					locationId: {
						type: 'string',
					},
					id: {
						type: 'string',
					},
					contactId: {
						type: 'string',
					},
					unreadCount: {
						type: 'number',
					},
					inbox: {
						type: 'boolean',
					},
					starred: {
						type: 'boolean',
					},
					deleted: {
						type: 'boolean',
					},
				},
			},
			ContactUpdate: {
				type: 'object',
				properties: {
					type: {
						type: 'string',
					},
					locationId: {
						type: 'string',
					},
					id: {
						type: 'string',
					},
					address1: {
						type: 'string',
					},
					city: {
						type: 'string',
					},
					companyName: {
						type: 'string',
					},
					country: {
						type: 'string',
					},
					source: {
						type: 'string',
					},
					dateAdded: {
						type: 'string',
					},
					dateOfBirth: {
						type: 'string',
					},
					dnd: {
						type: 'boolean',
					},
					email: {
						type: 'string',
					},
					name: {
						type: 'string',
					},
					firstName: {
						type: 'string',
					},
					lastName: {
						type: 'string',
					},
					phone: {
						type: 'string',
					},
					postalCode: {
						type: 'string',
					},
					state: {
						type: 'string',
					},
					tags: {
						type: 'array',
					},
					website: {
						type: 'string',
					},
					attachments: {
						type: 'array',
					},
					assignedTo: {
						type: 'string',
					},
					customFields: {
						type: 'array',
						items: {
							type: 'object',
							properties: {
								id: {
									type: 'string',
								},
								value: {
									type: ['string', 'number', 'array', 'object'],
								},
							},
						},
					},
				},
			},
			InvoiceCreate: {
				type: 'object',
				properties: {
					_id: {
						type: 'string',
					},
					status: {
						type: 'string',
					},
					liveMode: {
						type: 'boolean',
					},
					amountPaid: {
						type: 'number',
					},
					altId: {
						type: 'string',
					},
					altType: {
						type: 'string',
					},
					name: {
						type: 'string',
					},
					businessDetails: {
						type: 'object',
						properties: {
							name: {
								type: 'string',
							},
							address: {
								type: 'string',
							},
							phoneNo: {
								type: 'string',
							},
							website: {
								type: 'string',
							},
							logoUrl: {
								type: 'string',
							},
							customValues: {
								type: 'array',
								items: {
									type: 'string',
								},
							},
						},
					},
					invoiceNumber: {
						type: 'string',
					},
					currency: {
						type: 'string',
					},
					contactDetails: {
						type: 'object',
						properties: {
							id: {
								type: 'string',
							},
							phoneNo: {
								type: 'string',
							},
							email: {
								type: 'string',
							},
							customFields: {
								type: 'array',
								items: {
									type: 'string',
								},
							},
							name: {
								type: 'string',
							},
							address: {
								type: 'object',
								properties: {
									countryCode: {
										type: 'string',
									},
									addressLine1: {
										type: 'string',
									},
									addressLine2: {
										type: 'string',
									},
									city: {
										type: 'string',
									},
									state: {
										type: 'string',
									},
									postalCode: {
										type: 'string',
									},
								},
							},
							additionalEmails: {
								type: 'array',
								items: {
									type: 'object',
									properties: {
										email: {
											type: 'string',
										},
									},
								},
							},
							companyName: {
								type: 'string',
							},
						},
					},
					issueDate: {
						type: 'string',
					},
					dueDate: {
						type: 'string',
					},
					discount: {
						type: 'object',
						properties: {
							type: {
								type: 'string',
							},
							value: {
								type: 'number',
							},
						},
					},
					invoiceItems: {
						type: 'array',
						items: {
							type: 'object',
							properties: {
								taxes: {
									type: 'array',
								},
								_id: {
									type: 'string',
								},
								productId: {
									type: 'string',
								},
								priceId: {
									type: 'string',
								},
								currency: {
									type: 'string',
								},
								name: {
									type: 'string',
								},
								qty: {
									type: 'number',
								},
								amount: {
									type: 'number',
								},
							},
						},
					},
					total: {
						type: 'number',
					},
					title: {
						type: 'string',
					},
					amountDue: {
						type: 'number',
					},
					createdAt: {
						type: 'string',
					},
					updatedAt: {
						type: 'string',
					},
					totalSummary: {
						type: 'object',
						properties: {
							subTotal: {
								type: 'number',
							},
							discount: {
								type: 'number',
							},
						},
					},
				},
			},
			InvoiceVoid: {
				type: 'object',
				properties: {
					_id: {
						type: 'string',
					},
					status: {
						type: 'string',
					},
					liveMode: {
						type: 'boolean',
					},
					amountPaid: {
						type: 'number',
					},
					altId: {
						type: 'string',
					},
					altType: {
						type: 'string',
					},
					name: {
						type: 'string',
					},
					businessDetails: {
						type: 'object',
						properties: {
							name: {
								type: 'string',
							},
							address: {
								type: 'string',
							},
							phoneNo: {
								type: 'string',
							},
							website: {
								type: 'string',
							},
							logoUrl: {
								type: 'string',
							},
							customValues: {
								type: 'array',
								items: {
									type: 'string',
								},
							},
						},
					},
					invoiceNumber: {
						type: 'string',
					},
					currency: {
						type: 'string',
					},
					contactDetails: {
						type: 'object',
						properties: {
							id: {
								type: 'string',
							},
							phoneNo: {
								type: 'string',
							},
							email: {
								type: 'string',
							},
							customFields: {
								type: 'array',
								items: {
									type: 'string',
								},
							},
							name: {
								type: 'string',
							},
							address: {
								type: 'object',
								properties: {
									countryCode: {
										type: 'string',
									},
									addressLine1: {
										type: 'string',
									},
									addressLine2: {
										type: 'string',
									},
									city: {
										type: 'string',
									},
									state: {
										type: 'string',
									},
									postalCode: {
										type: 'string',
									},
								},
							},
							additionalEmails: {
								type: 'array',
								items: {
									type: 'object',
									properties: {
										email: {
											type: 'string',
										},
									},
								},
							},
							companyName: {
								type: 'string',
							},
						},
					},
					issueDate: {
						type: 'string',
					},
					dueDate: {
						type: 'string',
					},
					discount: {
						type: 'object',
						properties: {
							type: {
								type: 'string',
							},
							value: {
								type: 'number',
							},
						},
					},
					invoiceItems: {
						type: 'array',
						items: {
							type: 'object',
							properties: {
								taxes: {
									type: 'array',
								},
								_id: {
									type: 'string',
								},
								productId: {
									type: 'string',
								},
								priceId: {
									type: 'string',
								},
								currency: {
									type: 'string',
								},
								name: {
									type: 'string',
								},
								qty: {
									type: 'number',
								},
								amount: {
									type: 'number',
								},
							},
						},
					},
					total: {
						type: 'number',
					},
					title: {
						type: 'string',
					},
					amountDue: {
						type: 'number',
					},
					createdAt: {
						type: 'string',
					},
					updatedAt: {
						type: 'string',
					},
					totalSummary: {
						type: 'object',
						properties: {
							subTotal: {
								type: 'number',
							},
							discount: {
								type: 'number',
							},
						},
					},
				},
			},
			InvoiceSent: {
				type: 'object',
				properties: {
					_id: {
						type: 'string',
					},
					status: {
						type: 'string',
					},
					liveMode: {
						type: 'boolean',
					},
					amountPaid: {
						type: 'number',
					},
					altId: {
						type: 'string',
					},
					altType: {
						type: 'string',
					},
					name: {
						type: 'string',
					},
					businessDetails: {
						type: 'object',
						properties: {
							name: {
								type: 'string',
							},
							address: {
								type: 'string',
							},
							phoneNo: {
								type: 'string',
							},
							website: {
								type: 'string',
							},
							logoUrl: {
								type: 'string',
							},
							customValues: {
								type: 'array',
								items: {
									type: 'string',
								},
							},
						},
					},
					invoiceNumber: {
						type: 'string',
					},
					currency: {
						type: 'string',
					},
					contactDetails: {
						type: 'object',
						properties: {
							id: {
								type: 'string',
							},
							phoneNo: {
								type: 'string',
							},
							email: {
								type: 'string',
							},
							customFields: {
								type: 'array',
								items: {
									type: 'string',
								},
							},
							name: {
								type: 'string',
							},
							address: {
								type: 'object',
								properties: {
									countryCode: {
										type: 'string',
									},
									addressLine1: {
										type: 'string',
									},
									addressLine2: {
										type: 'string',
									},
									city: {
										type: 'string',
									},
									state: {
										type: 'string',
									},
									postalCode: {
										type: 'string',
									},
								},
							},
							additionalEmails: {
								type: 'array',
								items: {
									type: 'object',
									properties: {
										email: {
											type: 'string',
										},
									},
								},
							},
							companyName: {
								type: 'string',
							},
						},
					},
					issueDate: {
						type: 'string',
					},
					dueDate: {
						type: 'string',
					},
					discount: {
						type: 'object',
						properties: {
							type: {
								type: 'string',
							},
							value: {
								type: 'number',
							},
						},
					},
					invoiceItems: {
						type: 'array',
						items: {
							type: 'object',
							properties: {
								taxes: {
									type: 'array',
								},
								_id: {
									type: 'string',
								},
								productId: {
									type: 'string',
								},
								priceId: {
									type: 'string',
								},
								currency: {
									type: 'string',
								},
								name: {
									type: 'string',
								},
								qty: {
									type: 'number',
								},
								amount: {
									type: 'number',
								},
							},
						},
					},
					total: {
						type: 'number',
					},
					title: {
						type: 'string',
					},
					amountDue: {
						type: 'number',
					},
					createdAt: {
						type: 'string',
					},
					updatedAt: {
						type: 'string',
					},
					totalSummary: {
						type: 'object',
						properties: {
							subTotal: {
								type: 'number',
							},
							discount: {
								type: 'number',
							},
						},
					},
				},
			},
			InvoicePartiallyPaid: {
				type: 'object',
				properties: {
					_id: {
						type: 'string',
					},
					status: {
						type: 'string',
					},
					liveMode: {
						type: 'boolean',
					},
					amountPaid: {
						type: 'number',
					},
					altId: {
						type: 'string',
					},
					altType: {
						type: 'string',
					},
					name: {
						type: 'string',
					},
					businessDetails: {
						type: 'object',
						properties: {
							name: {
								type: 'string',
							},
							address: {
								type: 'string',
							},
							phoneNo: {
								type: 'string',
							},
							website: {
								type: 'string',
							},
							logoUrl: {
								type: 'string',
							},
							customValues: {
								type: 'array',
								items: {
									type: 'string',
								},
							},
						},
					},
					invoiceNumber: {
						type: 'string',
					},
					currency: {
						type: 'string',
					},
					contactDetails: {
						type: 'object',
						properties: {
							id: {
								type: 'string',
							},
							phoneNo: {
								type: 'string',
							},
							email: {
								type: 'string',
							},
							customFields: {
								type: 'array',
								items: {
									type: 'string',
								},
							},
							name: {
								type: 'string',
							},
							address: {
								type: 'object',
								properties: {
									countryCode: {
										type: 'string',
									},
									addressLine1: {
										type: 'string',
									},
									addressLine2: {
										type: 'string',
									},
									city: {
										type: 'string',
									},
									state: {
										type: 'string',
									},
									postalCode: {
										type: 'string',
									},
								},
							},
							additionalEmails: {
								type: 'array',
								items: {
									type: 'object',
									properties: {
										email: {
											type: 'string',
										},
									},
								},
							},
							companyName: {
								type: 'string',
							},
						},
					},
					issueDate: {
						type: 'string',
					},
					dueDate: {
						type: 'string',
					},
					discount: {
						type: 'object',
						properties: {
							type: {
								type: 'string',
							},
							value: {
								type: 'number',
							},
						},
					},
					invoiceItems: {
						type: 'array',
						items: {
							type: 'object',
							properties: {
								taxes: {
									type: 'array',
								},
								_id: {
									type: 'string',
								},
								productId: {
									type: 'string',
								},
								priceId: {
									type: 'string',
								},
								currency: {
									type: 'string',
								},
								name: {
									type: 'string',
								},
								qty: {
									type: 'number',
								},
								amount: {
									type: 'number',
								},
							},
						},
					},
					total: {
						type: 'number',
					},
					title: {
						type: 'string',
					},
					amountDue: {
						type: 'number',
					},
					createdAt: {
						type: 'string',
					},
					updatedAt: {
						type: 'string',
					},
					totalSummary: {
						type: 'object',
						properties: {
							subTotal: {
								type: 'number',
							},
							discount: {
								type: 'number',
							},
						},
					},
				},
			},
			InvoicePaid: {
				type: 'object',
				properties: {
					_id: {
						type: 'string',
					},
					status: {
						type: 'string',
					},
					liveMode: {
						type: 'boolean',
					},
					amountPaid: {
						type: 'number',
					},
					altId: {
						type: 'string',
					},
					altType: {
						type: 'string',
					},
					name: {
						type: 'string',
					},
					businessDetails: {
						type: 'object',
						properties: {
							name: {
								type: 'string',
							},
							address: {
								type: 'string',
							},
							phoneNo: {
								type: 'string',
							},
							website: {
								type: 'string',
							},
							logoUrl: {
								type: 'string',
							},
							customValues: {
								type: 'array',
								items: {
									type: 'string',
								},
							},
						},
					},
					invoiceNumber: {
						type: 'string',
					},
					currency: {
						type: 'string',
					},
					contactDetails: {
						type: 'object',
						properties: {
							id: {
								type: 'string',
							},
							phoneNo: {
								type: 'string',
							},
							email: {
								type: 'string',
							},
							customFields: {
								type: 'array',
								items: {
									type: 'string',
								},
							},
							name: {
								type: 'string',
							},
							address: {
								type: 'object',
								properties: {
									countryCode: {
										type: 'string',
									},
									addressLine1: {
										type: 'string',
									},
									addressLine2: {
										type: 'string',
									},
									city: {
										type: 'string',
									},
									state: {
										type: 'string',
									},
									postalCode: {
										type: 'string',
									},
								},
							},
							additionalEmails: {
								type: 'array',
								items: {
									type: 'object',
									properties: {
										email: {
											type: 'string',
										},
									},
								},
							},
							companyName: {
								type: 'string',
							},
						},
					},
					issueDate: {
						type: 'string',
					},
					dueDate: {
						type: 'string',
					},
					discount: {
						type: 'object',
						properties: {
							type: {
								type: 'string',
							},
							value: {
								type: 'number',
							},
						},
					},
					invoiceItems: {
						type: 'array',
						items: {
							type: 'object',
							properties: {
								taxes: {
									type: 'array',
								},
								_id: {
									type: 'string',
								},
								productId: {
									type: 'string',
								},
								priceId: {
									type: 'string',
								},
								currency: {
									type: 'string',
								},
								name: {
									type: 'string',
								},
								qty: {
									type: 'number',
								},
								amount: {
									type: 'number',
								},
							},
						},
					},
					total: {
						type: 'number',
					},
					title: {
						type: 'string',
					},
					amountDue: {
						type: 'number',
					},
					createdAt: {
						type: 'string',
					},
					updatedAt: {
						type: 'string',
					},
					totalSummary: {
						type: 'object',
						properties: {
							subTotal: {
								type: 'number',
							},
							discount: {
								type: 'number',
							},
						},
					},
				},
			},
			InvoiceDelete: {
				type: 'object',
				properties: {
					_id: {
						type: 'string',
					},
					status: {
						type: 'string',
					},
					liveMode: {
						type: 'boolean',
					},
					amountPaid: {
						type: 'number',
					},
					altId: {
						type: 'string',
					},
					altType: {
						type: 'string',
					},
					name: {
						type: 'string',
					},
					businessDetails: {
						type: 'object',
						properties: {
							name: {
								type: 'string',
							},
							address: {
								type: 'string',
							},
							phoneNo: {
								type: 'string',
							},
							website: {
								type: 'string',
							},
							logoUrl: {
								type: 'string',
							},
							customValues: {
								type: 'array',
								items: {
									type: 'string',
								},
							},
						},
					},
					invoiceNumber: {
						type: 'string',
					},
					currency: {
						type: 'string',
					},
					contactDetails: {
						type: 'object',
						properties: {
							id: {
								type: 'string',
							},
							phoneNo: {
								type: 'string',
							},
							email: {
								type: 'string',
							},
							customFields: {
								type: 'array',
								items: {
									type: 'string',
								},
							},
							name: {
								type: 'string',
							},
							address: {
								type: 'object',
								properties: {
									countryCode: {
										type: 'string',
									},
									addressLine1: {
										type: 'string',
									},
									addressLine2: {
										type: 'string',
									},
									city: {
										type: 'string',
									},
									state: {
										type: 'string',
									},
									postalCode: {
										type: 'string',
									},
								},
							},
							additionalEmails: {
								type: 'array',
								items: {
									type: 'object',
									properties: {
										email: {
											type: 'string',
										},
									},
								},
							},
							companyName: {
								type: 'string',
							},
						},
					},
					issueDate: {
						type: 'string',
					},
					dueDate: {
						type: 'string',
					},
					discount: {
						type: 'object',
						properties: {
							type: {
								type: 'string',
							},
							value: {
								type: 'number',
							},
						},
					},
					invoiceItems: {
						type: 'array',
						items: {
							type: 'object',
							properties: {
								taxes: {
									type: 'array',
								},
								_id: {
									type: 'string',
								},
								productId: {
									type: 'string',
								},
								priceId: {
									type: 'string',
								},
								currency: {
									type: 'string',
								},
								name: {
									type: 'string',
								},
								qty: {
									type: 'number',
								},
								amount: {
									type: 'number',
								},
							},
						},
					},
					total: {
						type: 'number',
					},
					title: {
						type: 'string',
					},
					amountDue: {
						type: 'number',
					},
					createdAt: {
						type: 'string',
					},
					updatedAt: {
						type: 'string',
					},
					totalSummary: {
						type: 'object',
						properties: {
							subTotal: {
								type: 'number',
							},
							discount: {
								type: 'number',
							},
						},
					},
				},
			},
			InvoiceUpdate: {
				type: 'object',
				properties: {
					_id: {
						type: 'string',
					},
					status: {
						type: 'string',
					},
					liveMode: {
						type: 'boolean',
					},
					amountPaid: {
						type: 'number',
					},
					altId: {
						type: 'string',
					},
					altType: {
						type: 'string',
					},
					name: {
						type: 'string',
					},
					businessDetails: {
						type: 'object',
						properties: {
							name: {
								type: 'string',
							},
							address: {
								type: 'string',
							},
							phoneNo: {
								type: 'string',
							},
							website: {
								type: 'string',
							},
							logoUrl: {
								type: 'string',
							},
							customValues: {
								type: 'array',
								items: {
									type: 'string',
								},
							},
						},
					},
					invoiceNumber: {
						type: 'string',
					},
					currency: {
						type: 'string',
					},
					contactDetails: {
						type: 'object',
						properties: {
							id: {
								type: 'string',
							},
							phoneNo: {
								type: 'string',
							},
							email: {
								type: 'string',
							},
							customFields: {
								type: 'array',
								items: {
									type: 'string',
								},
							},
							name: {
								type: 'string',
							},
							address: {
								type: 'object',
								properties: {
									countryCode: {
										type: 'string',
									},
									addressLine1: {
										type: 'string',
									},
									addressLine2: {
										type: 'string',
									},
									city: {
										type: 'string',
									},
									state: {
										type: 'string',
									},
									postalCode: {
										type: 'string',
									},
								},
							},
							additionalEmails: {
								type: 'array',
								items: {
									type: 'object',
									properties: {
										email: {
											type: 'string',
										},
									},
								},
							},
							companyName: {
								type: 'string',
							},
						},
					},
					issueDate: {
						type: 'string',
					},
					dueDate: {
						type: 'string',
					},
					discount: {
						type: 'object',
						properties: {
							type: {
								type: 'string',
							},
							value: {
								type: 'number',
							},
						},
					},
					invoiceItems: {
						type: 'array',
						items: {
							type: 'object',
							properties: {
								taxes: {
									type: 'array',
								},
								_id: {
									type: 'string',
								},
								productId: {
									type: 'string',
								},
								priceId: {
									type: 'string',
								},
								currency: {
									type: 'string',
								},
								name: {
									type: 'string',
								},
								qty: {
									type: 'number',
								},
								amount: {
									type: 'number',
								},
							},
						},
					},
					total: {
						type: 'number',
					},
					title: {
						type: 'string',
					},
					amountDue: {
						type: 'number',
					},
					createdAt: {
						type: 'string',
					},
					updatedAt: {
						type: 'string',
					},
					totalSummary: {
						type: 'object',
						properties: {
							subTotal: {
								type: 'number',
							},
							discount: {
								type: 'number',
							},
						},
					},
				},
			},
			LCEmailStats: {
				type: 'object',
				properties: {
					type: {
						type: 'string',
					},
					locationId: {
						type: 'string',
					},
					companyId: {
						type: 'string',
					},
					webhookPayload: {
						type: 'object',
						properties: {
							event: {
								type: 'string',
							},
							id: {
								type: 'string',
							},
							timestamp: {
								type: 'integer',
							},
							flags: {
								type: 'object',
								properties: {
									'is-authenticated': {
										type: 'boolean',
									},
									'is-routed': {
										type: 'boolean',
									},
									'is-big': {
										type: 'boolean',
									},
									'is-system-test': {
										type: 'boolean',
									},
									'is-test-mode': {
										type: 'boolean',
									},
								},
							},
							message: {
								type: 'object',
								properties: {
									attachments: {
										type: 'array',
									},
									headers: {
										type: 'object',
										properties: {
											'message-id': {
												type: 'string',
											},
											from: {
												type: 'string',
											},
											to: {
												type: 'string',
											},
										},
									},
									size: {
										type: 'integer',
									},
								},
							},
							'log-level': {
								type: 'string',
							},
							recipient: {
								type: 'string',
							},
							'recipient-domain': {
								type: 'string',
							},
							tags: {
								type: 'array',
							},
							'recipient-provider': {
								type: 'string',
							},
							campaigns: {
								type: 'array',
							},
							'delivery-status': {
								type: 'object',
								properties: {
									'attempt-no': {
										type: 'integer',
									},
									code: {
										type: 'integer',
									},
									message: {
										type: 'string',
									},
									description: {
										type: 'string',
									},
									'session-seconds': {
										type: 'number',
									},
									'enhanced-code': {
										type: 'string',
									},
									'mx-host': {
										type: 'string',
									},
									utf8: {
										type: 'boolean',
									},
									'i-first-delivery-attempt-seconds': {
										type: 'number',
									},
								},
							},
							envelope: {
								type: 'object',
								properties: {
									sender: {
										type: 'string',
									},
									targets: {
										type: 'string',
									},
									transport: {
										type: 'string',
									},
									'sending-ip': {
										type: 'string',
									},
									'i-ip-pool-id': {
										type: 'string',
									},
									'i-ip-pool-name': {
										type: 'string',
									},
								},
							},
						},
					},
				},
			},
			LocationCreate: {
				type: 'object',
				properties: {
					type: {
						type: 'string',
					},
					id: {
						type: 'string',
					},
					name: {
						type: 'string',
					},
					email: {
						type: 'string',
					},
					stripeProductId: {
						type: 'string',
					},
					companyId: {
						type: 'string',
					},
				},
			},
			LocationUpdate: {
				type: 'object',
				properties: {
					type: {
						type: 'string',
					},
					id: {
						type: 'string',
					},
					name: {
						type: 'string',
					},
					email: {
						type: 'string',
					},
					stripeProductId: {
						type: 'string',
					},
					companyId: {
						type: 'string',
					},
				},
			},
			NoteCreate: {
				type: 'object',
				properties: {
					type: {
						type: 'string',
					},
					locationId: {
						type: 'string',
					},
					id: {
						type: 'string',
					},
					body: {
						type: 'string',
					},
					contactId: {
						type: 'string',
					},
					dateAdded: {
						type: 'string',
					},
				},
			},
			NoteDelete: {
				type: 'object',
				properties: {
					type: {
						type: 'string',
					},
					locationId: {
						type: 'string',
					},
					id: {
						type: 'string',
					},
					body: {
						type: 'string',
					},
					contactId: {
						type: 'string',
					},
					dateAdded: {
						type: 'string',
					},
				},
			},
			OpportunityCreate: {
				type: 'object',
				properties: {
					type: {
						type: 'string',
					},
					locationId: {
						type: 'string',
					},
					id: {
						type: 'string',
					},
					assignedTo: {
						type: 'string',
					},
					contactId: {
						type: 'string',
					},
					monetaryValue: {
						type: 'number',
					},
					name: {
						type: 'string',
					},
					pipelineId: {
						type: 'string',
					},
					pipelineStageId: {
						type: 'string',
					},
					source: {
						type: 'string',
					},
					status: {
						type: 'string',
					},
					dateAdded: {
						type: 'string',
					},
				},
			},
			OpportunityAssignedToUpdate: {
				type: 'object',
				properties: {
					type: {
						type: 'string',
					},
					locationId: {
						type: 'string',
					},
					id: {
						type: 'string',
					},
					assignedTo: {
						type: 'string',
					},
					contactId: {
						type: 'string',
					},
					monetaryValue: {
						type: 'number',
					},
					name: {
						type: 'string',
					},
					pipelineId: {
						type: 'string',
					},
					pipelineStageId: {
						type: 'string',
					},
					source: {
						type: 'string',
					},
					status: {
						type: 'string',
					},
					dateAdded: {
						type: 'string',
					},
				},
			},
			NoteUpdate: {
				type: 'object',
				properties: {
					type: {
						type: 'string',
					},
					locationId: {
						type: 'string',
					},
					id: {
						type: 'string',
					},
					body: {
						type: 'string',
					},
					contactId: {
						type: 'string',
					},
					dateAdded: {
						type: 'string',
					},
				},
			},
			OpportunityDelete: {
				type: 'object',
				properties: {
					type: {
						type: 'string',
					},
					locationId: {
						type: 'string',
					},
					id: {
						type: 'string',
					},
					assignedTo: {
						type: 'string',
					},
					contactId: {
						type: 'string',
					},
					monetaryValue: {
						type: 'number',
					},
					name: {
						type: 'string',
					},
					pipelineId: {
						type: 'string',
					},
					pipelineStageId: {
						type: 'string',
					},
					source: {
						type: 'string',
					},
					status: {
						type: 'string',
					},
					dateAdded: {
						type: 'string',
					},
				},
			},
			OpportunityMonetaryValueUpdate: {
				type: 'object',
				properties: {
					type: {
						type: 'string',
					},
					locationId: {
						type: 'string',
					},
					id: {
						type: 'string',
					},
					assignedTo: {
						type: 'string',
					},
					contactId: {
						type: 'string',
					},
					monetaryValue: {
						type: 'number',
					},
					name: {
						type: 'string',
					},
					pipelineId: {
						type: 'string',
					},
					pipelineStageId: {
						type: 'string',
					},
					source: {
						type: 'string',
					},
					status: {
						type: 'string',
					},
					dateAdded: {
						type: 'string',
					},
				},
			},
			OpportunityStageUpdate: {
				type: 'object',
				properties: {
					type: {
						type: 'string',
					},
					locationId: {
						type: 'string',
					},
					id: {
						type: 'string',
					},
					assignedTo: {
						type: 'string',
					},
					contactId: {
						type: 'string',
					},
					monetaryValue: {
						type: 'number',
					},
					name: {
						type: 'string',
					},
					pipelineId: {
						type: 'string',
					},
					pipelineStageId: {
						type: 'string',
					},
					source: {
						type: 'string',
					},
					status: {
						type: 'string',
					},
					dateAdded: {
						type: 'string',
					},
				},
			},
			OpportunityStatusUpdate: {
				type: 'object',
				properties: {
					type: {
						type: 'string',
					},
					locationId: {
						type: 'string',
					},
					id: {
						type: 'string',
					},
					assignedTo: {
						type: 'string',
					},
					contactId: {
						type: 'string',
					},
					monetaryValue: {
						type: 'number',
					},
					name: {
						type: 'string',
					},
					pipelineId: {
						type: 'string',
					},
					pipelineStageId: {
						type: 'string',
					},
					source: {
						type: 'string',
					},
					status: {
						type: 'string',
					},
					dateAdded: {
						type: 'string',
					},
				},
			},
			OpportunityUpdate: {
				type: 'object',
				properties: {
					type: {
						type: 'string',
					},
					locationId: {
						type: 'string',
					},
					id: {
						type: 'string',
					},
					assignedTo: {
						type: 'string',
					},
					contactId: {
						type: 'string',
					},
					monetaryValue: {
						type: 'number',
					},
					name: {
						type: 'string',
					},
					pipelineId: {
						type: 'string',
					},
					pipelineStageId: {
						type: 'string',
					},
					source: {
						type: 'string',
					},
					status: {
						type: 'string',
					},
					dateAdded: {
						type: 'string',
					},
				},
			},
			OrderCreate: {
				type: 'object',
				properties: {
					type: {
						type: 'string',
					},
					altId: {
						type: 'string',
					},
					altType: {
						type: 'string',
					},
					_id: {
						type: 'string',
					},
					contactId: {
						type: 'string',
					},
					contactSnapshot: {
						type: 'object',
						properties: {
							locationId: {
								type: 'string',
							},
							id: {
								type: 'string',
							},
							address1: {
								type: 'string',
							},
							city: {
								type: 'string',
							},
							companyName: {
								type: 'string',
							},
							country: {
								type: 'string',
							},
							source: {
								type: 'string',
							},
							dateAdded: {
								type: 'string',
							},
							dateOfBirth: {
								type: 'string',
							},
							dnd: {
								type: 'boolean',
							},
							email: {
								type: 'string',
							},
							name: {
								type: 'string',
							},
							firstName: {
								type: 'string',
							},
							lastName: {
								type: 'string',
							},
							phone: {
								type: 'string',
							},
							postalCode: {
								type: 'string',
							},
							state: {
								type: 'string',
							},
							tags: {
								type: 'array',
							},
							website: {
								type: 'string',
							},
							attachments: {
								type: 'array',
							},
							assignedTo: {
								type: 'string',
							},
						},
					},
					status: {
						type: 'string',
					},
					fulfillmentStatus: {
						type: 'string',
					},
					currency: {
						type: 'string',
					},
					amount: {
						type: 'number',
					},
					liveMode: {
						type: 'boolean',
					},
					items: {
						type: 'array',
						items: {
							type: 'object',
							properties: {
								name: {
									type: 'string',
								},
								qty: {
									type: 'number',
								},
								product: {
									type: 'object',
								},
								price: {
									type: 'object',
								},
							},
						},
					},
					amountSummary: {
						type: 'object',
						properties: {
							discount: {
								type: 'number',
							},
							shipping: {
								type: 'number',
							},
							subtotal: {
								type: 'number',
							},
							tax: {
								type: 'number',
							},
						},
					},
					taxSummary: {
						type: 'array',
						items: {
							type: 'object',
							properties: {
								_id: {
									type: 'string',
								},
								amount: {
									type: 'number',
								},
								calculation: {
									type: 'string',
								},
								name: {
									type: 'string',
								},
								rate: {
									type: 'number',
								},
							},
						},
					},
					source: {
						type: 'object',
						properties: {
							id: {
								type: 'string',
							},
							name: {
								type: 'string',
							},
							type: {
								type: 'string',
							},
							subType: {
								type: 'string',
							},
							meta: {
								type: 'object',
							},
						},
					},
					createdAt: {
						type: 'string',
					},
					updatedAt: {
						type: 'string',
					},
				},
			},
			OrderStatusUpdate: {
				type: 'object',
				properties: {
					type: {
						type: 'string',
					},
					altId: {
						type: 'string',
					},
					altType: {
						type: 'string',
					},
					_id: {
						type: 'string',
					},
					contactId: {
						type: 'string',
					},
					contactSnapshot: {
						type: 'object',
						properties: {
							locationId: {
								type: 'string',
							},
							id: {
								type: 'string',
							},
							address1: {
								type: 'string',
							},
							city: {
								type: 'string',
							},
							companyName: {
								type: 'string',
							},
							country: {
								type: 'string',
							},
							source: {
								type: 'string',
							},
							dateAdded: {
								type: 'string',
							},
							dateOfBirth: {
								type: 'string',
							},
							dnd: {
								type: 'boolean',
							},
							email: {
								type: 'string',
							},
							name: {
								type: 'string',
							},
							firstName: {
								type: 'string',
							},
							lastName: {
								type: 'string',
							},
							phone: {
								type: 'string',
							},
							postalCode: {
								type: 'string',
							},
							state: {
								type: 'string',
							},
							tags: {
								type: 'array',
							},
							website: {
								type: 'string',
							},
							attachments: {
								type: 'array',
							},
							assignedTo: {
								type: 'string',
							},
						},
					},
					status: {
						type: 'string',
					},
					fulfillmentStatus: {
						type: 'string',
					},
					currency: {
						type: 'string',
					},
					amount: {
						type: 'number',
					},
					liveMode: {
						type: 'boolean',
					},
					items: {
						type: 'array',
						items: {
							type: 'object',
							properties: {
								name: {
									type: 'string',
								},
								qty: {
									type: 'number',
								},
								product: {
									type: 'object',
								},
								price: {
									type: 'object',
								},
							},
						},
					},
					amountSummary: {
						type: 'object',
						properties: {
							discount: {
								type: 'number',
							},
							shipping: {
								type: 'number',
							},
							subtotal: {
								type: 'number',
							},
							tax: {
								type: 'number',
							},
						},
					},
					taxSummary: {
						type: 'array',
						items: {
							type: 'object',
							properties: {
								_id: {
									type: 'string',
								},
								amount: {
									type: 'number',
								},
								calculation: {
									type: 'string',
								},
								name: {
									type: 'string',
								},
								rate: {
									type: 'number',
								},
							},
						},
					},
					source: {
						type: 'object',
						properties: {
							id: {
								type: 'string',
							},
							name: {
								type: 'string',
							},
							type: {
								type: 'string',
							},
							subType: {
								type: 'string',
							},
							meta: {
								type: 'object',
							},
						},
					},
					createdAt: {
						type: 'string',
					},
					updatedAt: {
						type: 'string',
					},
				},
			},
			OutboundMessage: {
				type: 'object',
				properties: {
					type: {
						type: 'string',
					},
					locationId: {
						type: 'string',
					},
					attachments: {
						type: 'array',
					},
					body: {
						type: 'string',
					},
					contactId: {
						type: 'string',
					},
					contentType: {
						type: 'string',
					},
					conversationId: {
						type: 'string',
					},
					dateAdded: {
						type: 'string',
					},
					direction: {
						type: 'string',
					},
					messageType: {
						type: 'string',
					},
					status: {
						type: 'string',
					},
					messageId: {
						type: 'string',
					},
					userId: {
						type: 'string',
					},
					source: {
						type: 'string',
					},
				},
			},
			PriceCreate: {
				type: 'object',
				properties: {
					_id: {
						type: 'string',
					},
					membershipOffers: {
						type: 'array',
						items: {
							type: 'object',
							properties: {
								label: {
									type: 'string',
								},
								value: {
									type: 'string',
								},
								_id: {
									type: 'string',
								},
							},
						},
					},
					variantOptionIds: {
						type: 'array',
						items: {
							type: 'string',
						},
					},
					locationId: {
						type: 'string',
					},
					product: {
						type: 'string',
					},
					userId: {
						type: 'string',
					},
					name: {
						type: 'string',
					},
					priceType: {
						type: 'string',
					},
					currency: {
						type: 'string',
					},
					amount: {
						type: 'number',
					},
					recurring: {
						type: 'object',
						properties: {
							interval: {
								type: 'string',
							},
							intervalCount: {
								type: 'number',
							},
						},
					},
					createdAt: {
						type: 'string',
					},
					updatedAt: {
						type: 'string',
					},
					compareAtPrice: {
						type: 'number',
					},
					trackInventory: {
						type: 'null',
					},
					availableQuantity: {
						type: 'number',
					},
					allowOutOfStockPurchases: {
						type: 'boolean',
					},
				},
			},
			PriceUpdate: {
				type: 'object',
				properties: {
					_id: {
						type: 'string',
					},
					membershipOffers: {
						type: 'array',
						items: {
							type: 'object',
							properties: {
								label: {
									type: 'string',
								},
								value: {
									type: 'string',
								},
								_id: {
									type: 'string',
								},
							},
						},
					},
					variantOptionIds: {
						type: 'array',
						items: {
							type: 'string',
						},
					},
					locationId: {
						type: 'string',
					},
					product: {
						type: 'string',
					},
					userId: {
						type: 'string',
					},
					name: {
						type: 'string',
					},
					type: {
						type: 'string',
					},
					currency: {
						type: 'string',
					},
					amount: {
						type: 'number',
					},
					recurring: {
						type: 'object',
						properties: {
							interval: {
								type: 'string',
							},
							intervalCount: {
								type: 'number',
							},
						},
					},
					createdAt: {
						type: 'string',
					},
					updatedAt: {
						type: 'string',
					},
					compareAtPrice: {
						type: 'number',
					},
					trackInventory: {
						type: 'null',
					},
					availableQuantity: {
						type: 'number',
					},
					allowOutOfStockPurchases: {
						type: 'boolean',
					},
				},
			},
			PriceDelete: {
				type: 'object',
				properties: {
					_id: {
						type: 'string',
					},
					membershipOffers: {
						type: 'array',
						items: {
							type: 'object',
							properties: {
								label: {
									type: 'string',
								},
								value: {
									type: 'string',
								},
								_id: {
									type: 'string',
								},
							},
						},
					},
					variantOptionIds: {
						type: 'array',
						items: {
							type: 'string',
						},
					},
					locationId: {
						type: 'string',
					},
					product: {
						type: 'string',
					},
					userId: {
						type: 'string',
					},
					name: {
						type: 'string',
					},
					type: {
						type: 'string',
					},
					currency: {
						type: 'string',
					},
					amount: {
						type: 'number',
					},
					recurring: {
						type: 'object',
						properties: {
							interval: {
								type: 'string',
							},
							intervalCount: {
								type: 'number',
							},
						},
					},
					createdAt: {
						type: 'string',
					},
					updatedAt: {
						type: 'string',
					},
					compareAtPrice: {
						type: 'number',
					},
					trackInventory: {
						type: 'null',
					},
					availableQuantity: {
						type: 'number',
					},
					allowOutOfStockPurchases: {
						type: 'boolean',
					},
				},
			},
			ProductCreate: {
				type: 'object',
				properties: {
					_id: {
						type: 'string',
					},
					description: {
						type: 'string',
					},
					variants: {
						type: 'array',
						items: {
							type: 'object',
							properties: {
								id: {
									type: 'string',
								},
								name: {
									type: 'string',
								},
								options: {
									type: 'array',
									items: {
										type: 'object',
										properties: {
											id: {
												type: 'string',
											},
											name: {
												type: 'string',
											},
										},
									},
								},
							},
						},
					},
					medias: {
						type: 'array',
						items: {
							type: 'object',
							properties: {
								id: {
									type: 'string',
								},
								title: {
									type: 'string',
								},
								url: {
									type: 'string',
								},
								type: {
									type: 'string',
								},
								isFeatured: {
									type: 'boolean',
								},
							},
						},
					},
					locationId: {
						type: 'string',
					},
					name: {
						type: 'string',
					},
					productType: {
						type: 'string',
					},
					availableInStore: {
						type: 'boolean',
					},
					userId: {
						type: 'string',
					},
					createdAt: {
						type: 'string',
					},
					updatedAt: {
						type: 'string',
					},
					statementDescriptor: {
						type: 'string',
					},
					image: {
						type: 'string',
					},
				},
			},
			ProductUpdate: {
				type: 'object',
				properties: {
					_id: {
						type: 'string',
					},
					description: {
						type: 'string',
					},
					variants: {
						type: 'array',
						items: {
							type: 'object',
							properties: {
								id: {
									type: 'string',
								},
								name: {
									type: 'string',
								},
								options: {
									type: 'array',
									items: {
										type: 'object',
										properties: {
											id: {
												type: 'string',
											},
											name: {
												type: 'string',
											},
										},
									},
								},
							},
						},
					},
					medias: {
						type: 'array',
						items: {
							type: 'object',
							properties: {
								id: {
									type: 'string',
								},
								title: {
									type: 'string',
								},
								url: {
									type: 'string',
								},
								type: {
									type: 'string',
								},
								isFeatured: {
									type: 'boolean',
								},
							},
						},
					},
					locationId: {
						type: 'string',
					},
					name: {
						type: 'string',
					},
					productType: {
						type: 'string',
					},
					availableInStore: {
						type: 'boolean',
					},
					userId: {
						type: 'string',
					},
					createdAt: {
						type: 'string',
					},
					updatedAt: {
						type: 'string',
					},
					statementDescriptor: {
						type: 'string',
					},
					image: {
						type: 'string',
					},
				},
			},
			ProductDelete: {
				type: 'object',
				properties: {
					_id: {
						type: 'string',
					},
					description: {
						type: 'string',
					},
					variants: {
						type: 'array',
						items: {
							type: 'object',
							properties: {
								id: {
									type: 'string',
								},
								name: {
									type: 'string',
								},
								options: {
									type: 'array',
									items: {
										type: 'object',
										properties: {
											id: {
												type: 'string',
											},
											name: {
												type: 'string',
											},
										},
									},
								},
							},
						},
					},
					medias: {
						type: 'array',
						items: {
							type: 'object',
							properties: {
								id: {
									type: 'string',
								},
								title: {
									type: 'string',
								},
								url: {
									type: 'string',
								},
								type: {
									type: 'string',
								},
								isFeatured: {
									type: 'boolean',
								},
							},
						},
					},
					locationId: {
						type: 'string',
					},
					name: {
						type: 'string',
					},
					productType: {
						type: 'string',
					},
					availableInStore: {
						type: 'boolean',
					},
					userId: {
						type: 'string',
					},
					createdAt: {
						type: 'string',
					},
					updatedAt: {
						type: 'string',
					},
					statementDescriptor: {
						type: 'string',
					},
					image: {
						type: 'string',
					},
				},
			},
			TaskComplete: {
				type: 'object',
				properties: {
					type: {
						type: 'string',
					},
					locationId: {
						type: 'string',
					},
					id: {
						type: 'string',
					},
					assignedTo: {
						type: 'string',
					},
					body: {
						type: 'string',
					},
					contactId: {
						type: 'string',
					},
					title: {
						type: 'string',
					},
					dateAdded: {
						type: 'string',
					},
					dueDate: {
						type: 'string',
					},
				},
			},
			TaskCreate: {
				type: 'object',
				properties: {
					type: {
						type: 'string',
					},
					locationId: {
						type: 'string',
					},
					id: {
						type: 'string',
					},
					assignedTo: {
						type: 'string',
					},
					body: {
						type: 'string',
					},
					contactId: {
						type: 'string',
					},
					title: {
						type: 'string',
					},
					dateAdded: {
						type: 'string',
					},
					dueDate: {
						type: 'string',
					},
				},
			},
			TaskDelete: {
				type: 'object',
				properties: {
					type: {
						type: 'string',
					},
					locationId: {
						type: 'string',
					},
					id: {
						type: 'string',
					},
					assignedTo: {
						type: 'string',
					},
					body: {
						type: 'string',
					},
					contactId: {
						type: 'string',
					},
					title: {
						type: 'string',
					},
					dateAdded: {
						type: 'string',
					},
					dueDate: {
						type: 'string',
					},
				},
			},
		},
	},
}
