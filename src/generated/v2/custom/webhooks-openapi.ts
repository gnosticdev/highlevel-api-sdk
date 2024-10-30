export type paths = Record<string, never>
export type webhooks = {
	AppointmentDelete: {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		post: {
			parameters: {
				query?: never
				header?: never
				path?: never
				cookie?: never
			}
			requestBody?: {
				content: {
					'application/json': components['schemas']['AppointmentDelete']
				}
			}
			responses: {
				/** @description Webhook processed successfully */
				200: {
					headers: {
						[name: string]: unknown
					}
					content?: never
				}
			}
		}
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	AppointmentUpdate: {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		post: {
			parameters: {
				query?: never
				header?: never
				path?: never
				cookie?: never
			}
			requestBody?: {
				content: {
					'application/json': components['schemas']['AppointmentUpdate']
				}
			}
			responses: {
				/** @description Webhook processed successfully */
				200: {
					headers: {
						[name: string]: unknown
					}
					content?: never
				}
			}
		}
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	AppointmentCreate: {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		post: {
			parameters: {
				query?: never
				header?: never
				path?: never
				cookie?: never
			}
			requestBody?: {
				content: {
					'application/json': components['schemas']['AppointmentCreate']
				}
			}
			responses: {
				/** @description Webhook processed successfully */
				200: {
					headers: {
						[name: string]: unknown
					}
					content?: never
				}
			}
		}
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	AppInstall: {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		post: {
			parameters: {
				query?: never
				header?: never
				path?: never
				cookie?: never
			}
			requestBody?: {
				content: {
					'application/json': components['schemas']['AppInstall']
				}
			}
			responses: {
				/** @description Webhook processed successfully */
				200: {
					headers: {
						[name: string]: unknown
					}
					content?: never
				}
			}
		}
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	ContactCreate: {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		post: {
			parameters: {
				query?: never
				header?: never
				path?: never
				cookie?: never
			}
			requestBody?: {
				content: {
					'application/json': components['schemas']['ContactCreate']
				}
			}
			responses: {
				/** @description Webhook processed successfully */
				200: {
					headers: {
						[name: string]: unknown
					}
					content?: never
				}
			}
		}
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	AppUninstall: {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		post: {
			parameters: {
				query?: never
				header?: never
				path?: never
				cookie?: never
			}
			requestBody?: {
				content: {
					'application/json': components['schemas']['AppUninstall']
				}
			}
			responses: {
				/** @description Webhook processed successfully */
				200: {
					headers: {
						[name: string]: unknown
					}
					content?: never
				}
			}
		}
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	CampaignStatusUpdate: {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		post: {
			parameters: {
				query?: never
				header?: never
				path?: never
				cookie?: never
			}
			requestBody?: {
				content: {
					'application/json': components['schemas']['CampaignStatusUpdate']
				}
			}
			responses: {
				/** @description Webhook processed successfully */
				200: {
					headers: {
						[name: string]: unknown
					}
					content?: never
				}
			}
		}
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	ContactDndUpdate: {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		post: {
			parameters: {
				query?: never
				header?: never
				path?: never
				cookie?: never
			}
			requestBody?: {
				content: {
					'application/json': components['schemas']['ContactDndUpdate']
				}
			}
			responses: {
				/** @description Webhook processed successfully */
				200: {
					headers: {
						[name: string]: unknown
					}
					content?: never
				}
			}
		}
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	ContactTagUpdate: {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		post: {
			parameters: {
				query?: never
				header?: never
				path?: never
				cookie?: never
			}
			requestBody?: {
				content: {
					'application/json': components['schemas']['ContactTagUpdate']
				}
			}
			responses: {
				/** @description Webhook processed successfully */
				200: {
					headers: {
						[name: string]: unknown
					}
					content?: never
				}
			}
		}
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	ContactDelete: {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		post: {
			parameters: {
				query?: never
				header?: never
				path?: never
				cookie?: never
			}
			requestBody?: {
				content: {
					'application/json': components['schemas']['ContactDelete']
				}
			}
			responses: {
				/** @description Webhook processed successfully */
				200: {
					headers: {
						[name: string]: unknown
					}
					content?: never
				}
			}
		}
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	ConversationProviderOutboundWebhook: {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		post: {
			parameters: {
				query?: never
				header?: never
				path?: never
				cookie?: never
			}
			requestBody?: {
				content: {
					'application/json': components['schemas']['ConversationProviderOutboundWebhook']
				}
			}
			responses: {
				/** @description Webhook processed successfully */
				200: {
					headers: {
						[name: string]: unknown
					}
					content?: never
				}
			}
		}
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	InboundMessage: {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		post: {
			parameters: {
				query?: never
				header?: never
				path?: never
				cookie?: never
			}
			requestBody?: {
				content: {
					'application/json': components['schemas']['InboundMessage']
				}
			}
			responses: {
				/** @description Webhook processed successfully */
				200: {
					headers: {
						[name: string]: unknown
					}
					content?: never
				}
			}
		}
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	InvoiceCreate: {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		post: {
			parameters: {
				query?: never
				header?: never
				path?: never
				cookie?: never
			}
			requestBody?: {
				content: {
					'application/json': components['schemas']['InvoiceCreate']
				}
			}
			responses: {
				/** @description Webhook processed successfully */
				200: {
					headers: {
						[name: string]: unknown
					}
					content?: never
				}
			}
		}
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	ContactUpdate: {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		post: {
			parameters: {
				query?: never
				header?: never
				path?: never
				cookie?: never
			}
			requestBody?: {
				content: {
					'application/json': components['schemas']['ContactUpdate']
				}
			}
			responses: {
				/** @description Webhook processed successfully */
				200: {
					headers: {
						[name: string]: unknown
					}
					content?: never
				}
			}
		}
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	ConversationUnreadWebhook: {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		post: {
			parameters: {
				query?: never
				header?: never
				path?: never
				cookie?: never
			}
			requestBody?: {
				content: {
					'application/json': components['schemas']['ConversationUnreadWebhook']
				}
			}
			responses: {
				/** @description Webhook processed successfully */
				200: {
					headers: {
						[name: string]: unknown
					}
					content?: never
				}
			}
		}
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	InvoiceSent: {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		post: {
			parameters: {
				query?: never
				header?: never
				path?: never
				cookie?: never
			}
			requestBody?: {
				content: {
					'application/json': components['schemas']['InvoiceSent']
				}
			}
			responses: {
				/** @description Webhook processed successfully */
				200: {
					headers: {
						[name: string]: unknown
					}
					content?: never
				}
			}
		}
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	InvoicePaid: {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		post: {
			parameters: {
				query?: never
				header?: never
				path?: never
				cookie?: never
			}
			requestBody?: {
				content: {
					'application/json': components['schemas']['InvoicePaid']
				}
			}
			responses: {
				/** @description Webhook processed successfully */
				200: {
					headers: {
						[name: string]: unknown
					}
					content?: never
				}
			}
		}
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	InvoiceVoid: {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		post: {
			parameters: {
				query?: never
				header?: never
				path?: never
				cookie?: never
			}
			requestBody?: {
				content: {
					'application/json': components['schemas']['InvoiceVoid']
				}
			}
			responses: {
				/** @description Webhook processed successfully */
				200: {
					headers: {
						[name: string]: unknown
					}
					content?: never
				}
			}
		}
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	InvoicePartiallyPaid: {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		post: {
			parameters: {
				query?: never
				header?: never
				path?: never
				cookie?: never
			}
			requestBody?: {
				content: {
					'application/json': components['schemas']['InvoicePartiallyPaid']
				}
			}
			responses: {
				/** @description Webhook processed successfully */
				200: {
					headers: {
						[name: string]: unknown
					}
					content?: never
				}
			}
		}
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	InvoiceUpdate: {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		post: {
			parameters: {
				query?: never
				header?: never
				path?: never
				cookie?: never
			}
			requestBody?: {
				content: {
					'application/json': components['schemas']['InvoiceUpdate']
				}
			}
			responses: {
				/** @description Webhook processed successfully */
				200: {
					headers: {
						[name: string]: unknown
					}
					content?: never
				}
			}
		}
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	LCEmailStats: {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		post: {
			parameters: {
				query?: never
				header?: never
				path?: never
				cookie?: never
			}
			requestBody?: {
				content: {
					'application/json': components['schemas']['LCEmailStats']
				}
			}
			responses: {
				/** @description Webhook processed successfully */
				200: {
					headers: {
						[name: string]: unknown
					}
					content?: never
				}
			}
		}
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	LocationCreate: {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		post: {
			parameters: {
				query?: never
				header?: never
				path?: never
				cookie?: never
			}
			requestBody?: {
				content: {
					'application/json': components['schemas']['LocationCreate']
				}
			}
			responses: {
				/** @description Webhook processed successfully */
				200: {
					headers: {
						[name: string]: unknown
					}
					content?: never
				}
			}
		}
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	LocationUpdate: {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		post: {
			parameters: {
				query?: never
				header?: never
				path?: never
				cookie?: never
			}
			requestBody?: {
				content: {
					'application/json': components['schemas']['LocationUpdate']
				}
			}
			responses: {
				/** @description Webhook processed successfully */
				200: {
					headers: {
						[name: string]: unknown
					}
					content?: never
				}
			}
		}
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	InvoiceDelete: {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		post: {
			parameters: {
				query?: never
				header?: never
				path?: never
				cookie?: never
			}
			requestBody?: {
				content: {
					'application/json': components['schemas']['InvoiceDelete']
				}
			}
			responses: {
				/** @description Webhook processed successfully */
				200: {
					headers: {
						[name: string]: unknown
					}
					content?: never
				}
			}
		}
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	NoteDelete: {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		post: {
			parameters: {
				query?: never
				header?: never
				path?: never
				cookie?: never
			}
			requestBody?: {
				content: {
					'application/json': components['schemas']['NoteDelete']
				}
			}
			responses: {
				/** @description Webhook processed successfully */
				200: {
					headers: {
						[name: string]: unknown
					}
					content?: never
				}
			}
		}
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	NoteCreate: {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		post: {
			parameters: {
				query?: never
				header?: never
				path?: never
				cookie?: never
			}
			requestBody?: {
				content: {
					'application/json': components['schemas']['NoteCreate']
				}
			}
			responses: {
				/** @description Webhook processed successfully */
				200: {
					headers: {
						[name: string]: unknown
					}
					content?: never
				}
			}
		}
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	NoteUpdate: {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		post: {
			parameters: {
				query?: never
				header?: never
				path?: never
				cookie?: never
			}
			requestBody?: {
				content: {
					'application/json': components['schemas']['NoteUpdate']
				}
			}
			responses: {
				/** @description Webhook processed successfully */
				200: {
					headers: {
						[name: string]: unknown
					}
					content?: never
				}
			}
		}
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	OpportunityCreate: {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		post: {
			parameters: {
				query?: never
				header?: never
				path?: never
				cookie?: never
			}
			requestBody?: {
				content: {
					'application/json': components['schemas']['OpportunityCreate']
				}
			}
			responses: {
				/** @description Webhook processed successfully */
				200: {
					headers: {
						[name: string]: unknown
					}
					content?: never
				}
			}
		}
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	OpportunityAssignedToUpdate: {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		post: {
			parameters: {
				query?: never
				header?: never
				path?: never
				cookie?: never
			}
			requestBody?: {
				content: {
					'application/json': components['schemas']['OpportunityAssignedToUpdate']
				}
			}
			responses: {
				/** @description Webhook processed successfully */
				200: {
					headers: {
						[name: string]: unknown
					}
					content?: never
				}
			}
		}
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	OpportunityMonetaryValueUpdate: {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		post: {
			parameters: {
				query?: never
				header?: never
				path?: never
				cookie?: never
			}
			requestBody?: {
				content: {
					'application/json': components['schemas']['OpportunityMonetaryValueUpdate']
				}
			}
			responses: {
				/** @description Webhook processed successfully */
				200: {
					headers: {
						[name: string]: unknown
					}
					content?: never
				}
			}
		}
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	OpportunityStageUpdate: {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		post: {
			parameters: {
				query?: never
				header?: never
				path?: never
				cookie?: never
			}
			requestBody?: {
				content: {
					'application/json': components['schemas']['OpportunityStageUpdate']
				}
			}
			responses: {
				/** @description Webhook processed successfully */
				200: {
					headers: {
						[name: string]: unknown
					}
					content?: never
				}
			}
		}
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	OpportunityStatusUpdate: {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		post: {
			parameters: {
				query?: never
				header?: never
				path?: never
				cookie?: never
			}
			requestBody?: {
				content: {
					'application/json': components['schemas']['OpportunityStatusUpdate']
				}
			}
			responses: {
				/** @description Webhook processed successfully */
				200: {
					headers: {
						[name: string]: unknown
					}
					content?: never
				}
			}
		}
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	OpportunityDelete: {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		post: {
			parameters: {
				query?: never
				header?: never
				path?: never
				cookie?: never
			}
			requestBody?: {
				content: {
					'application/json': components['schemas']['OpportunityDelete']
				}
			}
			responses: {
				/** @description Webhook processed successfully */
				200: {
					headers: {
						[name: string]: unknown
					}
					content?: never
				}
			}
		}
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	OpportunityUpdate: {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		post: {
			parameters: {
				query?: never
				header?: never
				path?: never
				cookie?: never
			}
			requestBody?: {
				content: {
					'application/json': components['schemas']['OpportunityUpdate']
				}
			}
			responses: {
				/** @description Webhook processed successfully */
				200: {
					headers: {
						[name: string]: unknown
					}
					content?: never
				}
			}
		}
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	OrderStatusUpdate: {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		post: {
			parameters: {
				query?: never
				header?: never
				path?: never
				cookie?: never
			}
			requestBody?: {
				content: {
					'application/json': components['schemas']['OrderStatusUpdate']
				}
			}
			responses: {
				/** @description Webhook processed successfully */
				200: {
					headers: {
						[name: string]: unknown
					}
					content?: never
				}
			}
		}
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	OutboundMessage: {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		post: {
			parameters: {
				query?: never
				header?: never
				path?: never
				cookie?: never
			}
			requestBody?: {
				content: {
					'application/json': components['schemas']['OutboundMessage']
				}
			}
			responses: {
				/** @description Webhook processed successfully */
				200: {
					headers: {
						[name: string]: unknown
					}
					content?: never
				}
			}
		}
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	OrderCreate: {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		post: {
			parameters: {
				query?: never
				header?: never
				path?: never
				cookie?: never
			}
			requestBody?: {
				content: {
					'application/json': components['schemas']['OrderCreate']
				}
			}
			responses: {
				/** @description Webhook processed successfully */
				200: {
					headers: {
						[name: string]: unknown
					}
					content?: never
				}
			}
		}
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	PriceUpdate: {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		post: {
			parameters: {
				query?: never
				header?: never
				path?: never
				cookie?: never
			}
			requestBody?: {
				content: {
					'application/json': components['schemas']['PriceUpdate']
				}
			}
			responses: {
				/** @description Webhook processed successfully */
				200: {
					headers: {
						[name: string]: unknown
					}
					content?: never
				}
			}
		}
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	PriceDelete: {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		post: {
			parameters: {
				query?: never
				header?: never
				path?: never
				cookie?: never
			}
			requestBody?: {
				content: {
					'application/json': components['schemas']['PriceDelete']
				}
			}
			responses: {
				/** @description Webhook processed successfully */
				200: {
					headers: {
						[name: string]: unknown
					}
					content?: never
				}
			}
		}
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	ProductCreate: {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		post: {
			parameters: {
				query?: never
				header?: never
				path?: never
				cookie?: never
			}
			requestBody?: {
				content: {
					'application/json': components['schemas']['ProductCreate']
				}
			}
			responses: {
				/** @description Webhook processed successfully */
				200: {
					headers: {
						[name: string]: unknown
					}
					content?: never
				}
			}
		}
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	ProductUpdate: {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		post: {
			parameters: {
				query?: never
				header?: never
				path?: never
				cookie?: never
			}
			requestBody?: {
				content: {
					'application/json': components['schemas']['ProductUpdate']
				}
			}
			responses: {
				/** @description Webhook processed successfully */
				200: {
					headers: {
						[name: string]: unknown
					}
					content?: never
				}
			}
		}
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	PriceCreate: {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		post: {
			parameters: {
				query?: never
				header?: never
				path?: never
				cookie?: never
			}
			requestBody?: {
				content: {
					'application/json': components['schemas']['PriceCreate']
				}
			}
			responses: {
				/** @description Webhook processed successfully */
				200: {
					headers: {
						[name: string]: unknown
					}
					content?: never
				}
			}
		}
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	ProductDelete: {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		post: {
			parameters: {
				query?: never
				header?: never
				path?: never
				cookie?: never
			}
			requestBody?: {
				content: {
					'application/json': components['schemas']['ProductDelete']
				}
			}
			responses: {
				/** @description Webhook processed successfully */
				200: {
					headers: {
						[name: string]: unknown
					}
					content?: never
				}
			}
		}
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	TaskComplete: {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		post: {
			parameters: {
				query?: never
				header?: never
				path?: never
				cookie?: never
			}
			requestBody?: {
				content: {
					'application/json': components['schemas']['TaskComplete']
				}
			}
			responses: {
				/** @description Webhook processed successfully */
				200: {
					headers: {
						[name: string]: unknown
					}
					content?: never
				}
			}
		}
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	TaskDelete: {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		post: {
			parameters: {
				query?: never
				header?: never
				path?: never
				cookie?: never
			}
			requestBody?: {
				content: {
					'application/json': components['schemas']['TaskDelete']
				}
			}
			responses: {
				/** @description Webhook processed successfully */
				200: {
					headers: {
						[name: string]: unknown
					}
					content?: never
				}
			}
		}
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	TaskCreate: {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		post: {
			parameters: {
				query?: never
				header?: never
				path?: never
				cookie?: never
			}
			requestBody?: {
				content: {
					'application/json': components['schemas']['TaskCreate']
				}
			}
			responses: {
				/** @description Webhook processed successfully */
				200: {
					headers: {
						[name: string]: unknown
					}
					content?: never
				}
			}
		}
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	UserCreate: {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		post: {
			parameters: {
				query?: never
				header?: never
				path?: never
				cookie?: never
			}
			requestBody?: {
				content: {
					'application/json': components['schemas']['UserCreate']
				}
			}
			responses: {
				/** @description Webhook processed successfully */
				200: {
					headers: {
						[name: string]: unknown
					}
					content?: never
				}
			}
		}
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
}
export type components = {
	schemas: {
		AppointmentDelete: {
			type?: string
			locationId?: string
			appointment?: {
				id?: string
				address?: string
				title?: string
				calendarId?: string
				contactId?: string
				groupId?: string
				appointmentStatus?: string
				assignedUserId?: string
				users?: unknown[]
				notes?: string
				source?: string
				startTime?: string
				endTime?: string
				dateAdded?: string
				dateUpdated?: string
			}
		}
		AppointmentUpdate: {
			type?: string
			locationId?: string
			appointment?: {
				id?: string
				address?: string
				title?: string
				calendarId?: string
				contactId?: string
				groupId?: string
				appointmentStatus?: string
				assignedUserId?: string
				users?: unknown[]
				notes?: string
				source?: string
				startTime?: string
				endTime?: string
				dateAdded?: string
				dateUpdated?: string
			}
		}
		AppointmentCreate: {
			type?: string
			locationId?: string
			appointment?: {
				id?: string
				address?: string
				title?: string
				calendarId?: string
				contactId?: string
				groupId?: string
				appointmentStatus?: string
				assignedUserId?: string
				users?: unknown[]
				notes?: string
				source?: string
				startTime?: string
				endTime?: string
				dateAdded?: string
				dateUpdated?: string
			}
		}
		AppInstall: {
			type?: string
			appId?: string
			companyId?: string
			locationId?: string
			userId?: string
			planId?: string
			trial?: {
				onTrial?: boolean
				trialDuration?: number
				trialStartDate?: Record<string, never>
			}
		}
		ContactCreate: {
			type?: string
			locationId?: string
			id?: string
			address1?: string
			city?: string
			companyName?: string
			country?: string
			source?: string
			dateAdded?: string
			dateOfBirth?: string
			dnd?: boolean
			email?: string
			name?: string
			firstName?: string
			lastName?: string
			phone?: string
			postalCode?: string
			state?: string
			tags?: unknown[]
			website?: string
			attachments?: unknown[]
			assignedTo?: string
			customFields?: {
				id?: string
				value?: string | number | unknown[] | Record<string, never>
			}[]
		}
		AppUninstall: {
			type?: string
			appId?: string
			companyId?: string
			locationId?: string
		}
		CampaignStatusUpdate: {
			type?: string
			locationId?: string
			id?: string
			contactId?: string
			status?: string
			templateId?: string
			replied?: string
			dateAdded?: string
		}
		ContactDndUpdate: {
			type?: string
			locationId?: string
			id?: string
			address1?: string
			city?: string
			companyName?: string
			country?: string
			source?: string
			dateAdded?: string
			dateOfBirth?: string
			dnd?: boolean
			dndSettings?: {
				SMS?: {
					status?: string
					message?: string
					code?: string
				}
				Email?: {
					status?: string
					message?: string
					code?: string
				}
				GMB?: {
					status?: string
					message?: string
					code?: string
				}
				FB?: {
					status?: string
					message?: string
					code?: string
				}
				WhatsApp?: {
					status?: string
					message?: string
					code?: string
				}
				Call?: {
					status?: string
					message?: string
					code?: string
				}
			}
			email?: string
			name?: string
			firstName?: string
			lastName?: string
			phone?: string
			postalCode?: string
			state?: string
			tags?: unknown[]
			website?: string
			attachments?: unknown[]
			assignedTo?: string
			customFields?: {
				id?: string
				value?: string | number | unknown[] | Record<string, never>
			}[]
		}
		ContactTagUpdate: {
			type?: string
			locationId?: string
			id?: string
			address1?: string
			city?: string
			companyName?: string
			country?: string
			source?: string
			dateAdded?: string
			dateOfBirth?: string
			dnd?: boolean
			email?: string
			name?: string
			firstName?: string
			lastName?: string
			phone?: string
			postalCode?: string
			state?: string
			tags?: unknown[]
			website?: string
			attachments?: unknown[]
			assignedTo?: string
			customFields?: {
				id?: string
				value?: string | number | unknown[] | Record<string, never>
			}[]
		}
		ContactDelete: {
			type?: string
			locationId?: string
			id?: string
			address1?: string
			city?: string
			companyName?: string
			country?: string
			source?: string
			dateAdded?: string
			dateOfBirth?: string
			dnd?: boolean
			email?: string
			name?: string
			firstName?: string
			lastName?: string
			phone?: string
			postalCode?: string
			state?: string
			tags?: unknown[]
			website?: string
			attachments?: unknown[]
			assignedTo?: string
			customFields?: {
				id?: string
				value?: string | number | unknown[] | Record<string, never>
			}[]
		}
		ConversationProviderOutboundWebhook: {
			contactId?: string
			locationId?: string
			messageId?: string
			emailMessageId?: string
			type?: Record<string, never>
			attachments?: unknown[]
			message?: string
			phone?: string
			emailTo?: string
			emailFrom?: string
			html?: string
			subject?: string
			userId?: string
		}
		InboundMessage: {
			type?: string
			locationId?: string
			attachments?: unknown[]
			body?: string
			contactId?: string
			contentType?: string
			conversationId?: string
			dateAdded?: string
			direction?: string
			messageType?: string
			status?: string
			messageId?: string
			userId?: string
		}
		InvoiceCreate: {
			_id?: string
			status?: string
			liveMode?: boolean
			amountPaid?: number
			altId?: string
			altType?: string
			name?: string
			businessDetails?: {
				name?: string
				address?: string
				phoneNo?: string
				website?: string
				logoUrl?: string
				customValues?: string[]
			}
			invoiceNumber?: string
			currency?: string
			contactDetails?: {
				id?: string
				phoneNo?: string
				email?: string
				customFields?: string[]
				name?: string
				address?: {
					countryCode?: string
					addressLine1?: string
					addressLine2?: string
					city?: string
					state?: string
					postalCode?: string
				}
				additionalEmails?: {
					email?: string
				}[]
				companyName?: string
			}
			issueDate?: string
			dueDate?: string
			discount?: {
				type?: string
				value?: number
			}
			invoiceItems?: {
				taxes?: unknown[]
				_id?: string
				productId?: string
				priceId?: string
				currency?: string
				name?: string
				qty?: number
				amount?: number
			}[]
			total?: number
			title?: string
			amountDue?: number
			createdAt?: string
			updatedAt?: string
			totalSummary?: {
				subTotal?: number
				discount?: number
			}
		}
		ContactUpdate: {
			type?: string
			locationId?: string
			id?: string
			address1?: string
			city?: string
			companyName?: string
			country?: string
			source?: string
			dateAdded?: string
			dateOfBirth?: string
			dnd?: boolean
			email?: string
			name?: string
			firstName?: string
			lastName?: string
			phone?: string
			postalCode?: string
			state?: string
			tags?: unknown[]
			website?: string
			attachments?: unknown[]
			assignedTo?: string
			customFields?: {
				id?: string
				value?: string | number | unknown[] | Record<string, never>
			}[]
		}
		ConversationUnreadWebhook: {
			type?: string
			locationId?: string
			id?: string
			contactId?: string
			unreadCount?: number
			inbox?: boolean
			starred?: boolean
			deleted?: boolean
		}
		InvoiceSent: {
			_id?: string
			status?: string
			liveMode?: boolean
			amountPaid?: number
			altId?: string
			altType?: string
			name?: string
			businessDetails?: {
				name?: string
				address?: string
				phoneNo?: string
				website?: string
				logoUrl?: string
				customValues?: string[]
			}
			invoiceNumber?: string
			currency?: string
			contactDetails?: {
				id?: string
				phoneNo?: string
				email?: string
				customFields?: string[]
				name?: string
				address?: {
					countryCode?: string
					addressLine1?: string
					addressLine2?: string
					city?: string
					state?: string
					postalCode?: string
				}
				additionalEmails?: {
					email?: string
				}[]
				companyName?: string
			}
			issueDate?: string
			dueDate?: string
			discount?: {
				type?: string
				value?: number
			}
			invoiceItems?: {
				taxes?: unknown[]
				_id?: string
				productId?: string
				priceId?: string
				currency?: string
				name?: string
				qty?: number
				amount?: number
			}[]
			total?: number
			title?: string
			amountDue?: number
			createdAt?: string
			updatedAt?: string
			totalSummary?: {
				subTotal?: number
				discount?: number
			}
		}
		InvoicePaid: {
			_id?: string
			status?: string
			liveMode?: boolean
			amountPaid?: number
			altId?: string
			altType?: string
			name?: string
			businessDetails?: {
				name?: string
				address?: string
				phoneNo?: string
				website?: string
				logoUrl?: string
				customValues?: string[]
			}
			invoiceNumber?: string
			currency?: string
			contactDetails?: {
				id?: string
				phoneNo?: string
				email?: string
				customFields?: string[]
				name?: string
				address?: {
					countryCode?: string
					addressLine1?: string
					addressLine2?: string
					city?: string
					state?: string
					postalCode?: string
				}
				additionalEmails?: {
					email?: string
				}[]
				companyName?: string
			}
			issueDate?: string
			dueDate?: string
			discount?: {
				type?: string
				value?: number
			}
			invoiceItems?: {
				taxes?: unknown[]
				_id?: string
				productId?: string
				priceId?: string
				currency?: string
				name?: string
				qty?: number
				amount?: number
			}[]
			total?: number
			title?: string
			amountDue?: number
			createdAt?: string
			updatedAt?: string
			totalSummary?: {
				subTotal?: number
				discount?: number
			}
		}
		InvoiceVoid: {
			_id?: string
			status?: string
			liveMode?: boolean
			amountPaid?: number
			altId?: string
			altType?: string
			name?: string
			businessDetails?: {
				name?: string
				address?: string
				phoneNo?: string
				website?: string
				logoUrl?: string
				customValues?: string[]
			}
			invoiceNumber?: string
			currency?: string
			contactDetails?: {
				id?: string
				phoneNo?: string
				email?: string
				customFields?: string[]
				name?: string
				address?: {
					countryCode?: string
					addressLine1?: string
					addressLine2?: string
					city?: string
					state?: string
					postalCode?: string
				}
				additionalEmails?: {
					email?: string
				}[]
				companyName?: string
			}
			issueDate?: string
			dueDate?: string
			discount?: {
				type?: string
				value?: number
			}
			invoiceItems?: {
				taxes?: unknown[]
				_id?: string
				productId?: string
				priceId?: string
				currency?: string
				name?: string
				qty?: number
				amount?: number
			}[]
			total?: number
			title?: string
			amountDue?: number
			createdAt?: string
			updatedAt?: string
			totalSummary?: {
				subTotal?: number
				discount?: number
			}
		}
		InvoicePartiallyPaid: {
			_id?: string
			status?: string
			liveMode?: boolean
			amountPaid?: number
			altId?: string
			altType?: string
			name?: string
			businessDetails?: {
				name?: string
				address?: string
				phoneNo?: string
				website?: string
				logoUrl?: string
				customValues?: string[]
			}
			invoiceNumber?: string
			currency?: string
			contactDetails?: {
				id?: string
				phoneNo?: string
				email?: string
				customFields?: string[]
				name?: string
				address?: {
					countryCode?: string
					addressLine1?: string
					addressLine2?: string
					city?: string
					state?: string
					postalCode?: string
				}
				additionalEmails?: {
					email?: string
				}[]
				companyName?: string
			}
			issueDate?: string
			dueDate?: string
			discount?: {
				type?: string
				value?: number
			}
			invoiceItems?: {
				taxes?: unknown[]
				_id?: string
				productId?: string
				priceId?: string
				currency?: string
				name?: string
				qty?: number
				amount?: number
			}[]
			total?: number
			title?: string
			amountDue?: number
			createdAt?: string
			updatedAt?: string
			totalSummary?: {
				subTotal?: number
				discount?: number
			}
		}
		InvoiceUpdate: {
			_id?: string
			status?: string
			liveMode?: boolean
			amountPaid?: number
			altId?: string
			altType?: string
			name?: string
			businessDetails?: {
				name?: string
				address?: string
				phoneNo?: string
				website?: string
				logoUrl?: string
				customValues?: string[]
			}
			invoiceNumber?: string
			currency?: string
			contactDetails?: {
				id?: string
				phoneNo?: string
				email?: string
				customFields?: string[]
				name?: string
				address?: {
					countryCode?: string
					addressLine1?: string
					addressLine2?: string
					city?: string
					state?: string
					postalCode?: string
				}
				additionalEmails?: {
					email?: string
				}[]
				companyName?: string
			}
			issueDate?: string
			dueDate?: string
			discount?: {
				type?: string
				value?: number
			}
			invoiceItems?: {
				taxes?: unknown[]
				_id?: string
				productId?: string
				priceId?: string
				currency?: string
				name?: string
				qty?: number
				amount?: number
			}[]
			total?: number
			title?: string
			amountDue?: number
			createdAt?: string
			updatedAt?: string
			totalSummary?: {
				subTotal?: number
				discount?: number
			}
		}
		LCEmailStats: {
			type?: string
			locationId?: string
			companyId?: string
			webhookPayload?: {
				event?: string
				id?: string
				timestamp?: number
				flags?: {
					'is-authenticated'?: boolean
					'is-routed'?: boolean
					'is-big'?: boolean
					'is-system-test'?: boolean
					'is-test-mode'?: boolean
				}
				message?: {
					attachments?: unknown[]
					headers?: {
						'message-id'?: string
						from?: string
						to?: string
					}
					size?: number
				}
				'log-level'?: string
				recipient?: string
				'recipient-domain'?: string
				tags?: unknown[]
				'recipient-provider'?: string
				campaigns?: unknown[]
				'delivery-status'?: {
					'attempt-no'?: number
					code?: number
					message?: string
					description?: string
					'session-seconds'?: number
					'enhanced-code'?: string
					'mx-host'?: string
					utf8?: boolean
					'i-first-delivery-attempt-seconds'?: number
				}
				envelope?: {
					sender?: string
					targets?: string
					transport?: string
					'sending-ip'?: string
					'i-ip-pool-id'?: string
					'i-ip-pool-name'?: string
				}
			}
		}
		LocationCreate: {
			type?: string
			id?: string
			name?: string
			email?: string
			stripeProductId?: string
			companyId?: string
		}
		LocationUpdate: {
			type?: string
			id?: string
			name?: string
			email?: string
			stripeProductId?: string
			companyId?: string
		}
		InvoiceDelete: {
			_id?: string
			status?: string
			liveMode?: boolean
			amountPaid?: number
			altId?: string
			altType?: string
			name?: string
			businessDetails?: {
				name?: string
				address?: string
				phoneNo?: string
				website?: string
				logoUrl?: string
				customValues?: string[]
			}
			invoiceNumber?: string
			currency?: string
			contactDetails?: {
				id?: string
				phoneNo?: string
				email?: string
				customFields?: string[]
				name?: string
				address?: {
					countryCode?: string
					addressLine1?: string
					addressLine2?: string
					city?: string
					state?: string
					postalCode?: string
				}
				additionalEmails?: {
					email?: string
				}[]
				companyName?: string
			}
			issueDate?: string
			dueDate?: string
			discount?: {
				type?: string
				value?: number
			}
			invoiceItems?: {
				taxes?: unknown[]
				_id?: string
				productId?: string
				priceId?: string
				currency?: string
				name?: string
				qty?: number
				amount?: number
			}[]
			total?: number
			title?: string
			amountDue?: number
			createdAt?: string
			updatedAt?: string
			totalSummary?: {
				subTotal?: number
				discount?: number
			}
		}
		NoteDelete: {
			type?: string
			locationId?: string
			id?: string
			body?: string
			contactId?: string
			dateAdded?: string
		}
		NoteCreate: {
			type?: string
			locationId?: string
			id?: string
			body?: string
			contactId?: string
			dateAdded?: string
		}
		NoteUpdate: {
			type?: string
			locationId?: string
			id?: string
			body?: string
			contactId?: string
			dateAdded?: string
		}
		OpportunityCreate: {
			type?: string
			locationId?: string
			id?: string
			assignedTo?: string
			contactId?: string
			monetaryValue?: number
			name?: string
			pipelineId?: string
			pipelineStageId?: string
			source?: string
			status?: string
			dateAdded?: string
		}
		OpportunityAssignedToUpdate: {
			type?: string
			locationId?: string
			id?: string
			assignedTo?: string
			contactId?: string
			monetaryValue?: number
			name?: string
			pipelineId?: string
			pipelineStageId?: string
			source?: string
			status?: string
			dateAdded?: string
		}
		OpportunityMonetaryValueUpdate: {
			type?: string
			locationId?: string
			id?: string
			assignedTo?: string
			contactId?: string
			monetaryValue?: number
			name?: string
			pipelineId?: string
			pipelineStageId?: string
			source?: string
			status?: string
			dateAdded?: string
		}
		OpportunityStageUpdate: {
			type?: string
			locationId?: string
			id?: string
			assignedTo?: string
			contactId?: string
			monetaryValue?: number
			name?: string
			pipelineId?: string
			pipelineStageId?: string
			source?: string
			status?: string
			dateAdded?: string
		}
		OpportunityStatusUpdate: {
			type?: string
			locationId?: string
			id?: string
			assignedTo?: string
			contactId?: string
			monetaryValue?: number
			name?: string
			pipelineId?: string
			pipelineStageId?: string
			source?: string
			status?: string
			dateAdded?: string
		}
		OpportunityDelete: {
			type?: string
			locationId?: string
			id?: string
			assignedTo?: string
			contactId?: string
			monetaryValue?: number
			name?: string
			pipelineId?: string
			pipelineStageId?: string
			source?: string
			status?: string
			dateAdded?: string
		}
		OpportunityUpdate: {
			type?: string
			locationId?: string
			id?: string
			assignedTo?: string
			contactId?: string
			monetaryValue?: number
			name?: string
			pipelineId?: string
			pipelineStageId?: string
			source?: string
			status?: string
			dateAdded?: string
		}
		OrderStatusUpdate: {
			type?: string
			altId?: string
			altType?: string
			_id?: string
			contactId?: string
			contactSnapshot?: {
				locationId?: string
				id?: string
				address1?: string
				city?: string
				companyName?: string
				country?: string
				source?: string
				dateAdded?: string
				dateOfBirth?: string
				dnd?: boolean
				email?: string
				name?: string
				firstName?: string
				lastName?: string
				phone?: string
				postalCode?: string
				state?: string
				tags?: unknown[]
				website?: string
				attachments?: unknown[]
				assignedTo?: string
			}
			status?: string
			fulfillmentStatus?: string
			currency?: string
			amount?: number
			liveMode?: boolean
			items?: {
				name?: string
				qty?: number
				product?: Record<string, never>
				price?: Record<string, never>
			}[]
			amountSummary?: {
				discount?: number
				shipping?: number
				subtotal?: number
				tax?: number
			}
			taxSummary?: {
				_id?: string
				amount?: number
				calculation?: string
				name?: string
				rate?: number
			}[]
			source?: {
				id?: string
				name?: string
				type?: string
				subType?: string
				meta?: Record<string, never>
			}
			createdAt?: string
			updatedAt?: string
		}
		OutboundMessage: {
			type?: string
			locationId?: string
			attachments?: unknown[]
			body?: string
			contactId?: string
			contentType?: string
			conversationId?: string
			dateAdded?: string
			direction?: string
			messageType?: string
			status?: string
			messageId?: string
			userId?: string
			source?: string
		}
		OrderCreate: {
			type?: string
			altId?: string
			altType?: string
			_id?: string
			contactId?: string
			contactSnapshot?: {
				locationId?: string
				id?: string
				address1?: string
				city?: string
				companyName?: string
				country?: string
				source?: string
				dateAdded?: string
				dateOfBirth?: string
				dnd?: boolean
				email?: string
				name?: string
				firstName?: string
				lastName?: string
				phone?: string
				postalCode?: string
				state?: string
				tags?: unknown[]
				website?: string
				attachments?: unknown[]
				assignedTo?: string
			}
			status?: string
			fulfillmentStatus?: string
			currency?: string
			amount?: number
			liveMode?: boolean
			items?: {
				name?: string
				qty?: number
				product?: Record<string, never>
				price?: Record<string, never>
			}[]
			amountSummary?: {
				discount?: number
				shipping?: number
				subtotal?: number
				tax?: number
			}
			taxSummary?: {
				_id?: string
				amount?: number
				calculation?: string
				name?: string
				rate?: number
			}[]
			source?: {
				id?: string
				name?: string
				type?: string
				subType?: string
				meta?: Record<string, never>
			}
			createdAt?: string
			updatedAt?: string
		}
		PriceUpdate: {
			_id?: string
			membershipOffers?: {
				label?: string
				value?: string
				_id?: string
			}[]
			variantOptionIds?: string[]
			locationId?: string
			product?: string
			userId?: string
			name?: string
			type?: string
			currency?: string
			amount?: number
			recurring?: {
				interval?: string
				intervalCount?: number
			}
			createdAt?: string
			updatedAt?: string
			compareAtPrice?: number
			trackInventory?: null
			availableQuantity?: number
			allowOutOfStockPurchases?: boolean
		}
		PriceDelete: {
			_id?: string
			membershipOffers?: {
				label?: string
				value?: string
				_id?: string
			}[]
			variantOptionIds?: string[]
			locationId?: string
			product?: string
			userId?: string
			name?: string
			type?: string
			currency?: string
			amount?: number
			recurring?: {
				interval?: string
				intervalCount?: number
			}
			createdAt?: string
			updatedAt?: string
			compareAtPrice?: number
			trackInventory?: null
			availableQuantity?: number
			allowOutOfStockPurchases?: boolean
		}
		ProductCreate: {
			_id?: string
			description?: string
			variants?: {
				id?: string
				name?: string
				options?: {
					id?: string
					name?: string
				}[]
			}[]
			medias?: {
				id?: string
				title?: string
				url?: string
				type?: string
				isFeatured?: boolean
			}[]
			locationId?: string
			name?: string
			productType?: string
			availableInStore?: boolean
			userId?: string
			createdAt?: string
			updatedAt?: string
			statementDescriptor?: string
			image?: string
		}
		ProductUpdate: {
			_id?: string
			description?: string
			variants?: {
				id?: string
				name?: string
				options?: {
					id?: string
					name?: string
				}[]
			}[]
			medias?: {
				id?: string
				title?: string
				url?: string
				type?: string
				isFeatured?: boolean
			}[]
			locationId?: string
			name?: string
			productType?: string
			availableInStore?: boolean
			userId?: string
			createdAt?: string
			updatedAt?: string
			statementDescriptor?: string
			image?: string
		}
		PriceCreate: {
			_id?: string
			membershipOffers?: {
				label?: string
				value?: string
				_id?: string
			}[]
			variantOptionIds?: string[]
			locationId?: string
			product?: string
			userId?: string
			name?: string
			priceType?: string
			currency?: string
			amount?: number
			recurring?: {
				interval?: string
				intervalCount?: number
			}
			createdAt?: string
			updatedAt?: string
			compareAtPrice?: number
			trackInventory?: null
			availableQuantity?: number
			allowOutOfStockPurchases?: boolean
		}
		ProductDelete: {
			_id?: string
			description?: string
			variants?: {
				id?: string
				name?: string
				options?: {
					id?: string
					name?: string
				}[]
			}[]
			medias?: {
				id?: string
				title?: string
				url?: string
				type?: string
				isFeatured?: boolean
			}[]
			locationId?: string
			name?: string
			productType?: string
			availableInStore?: boolean
			userId?: string
			createdAt?: string
			updatedAt?: string
			statementDescriptor?: string
			image?: string
		}
		TaskComplete: {
			type?: string
			locationId?: string
			id?: string
			assignedTo?: string
			body?: string
			contactId?: string
			title?: string
			dateAdded?: string
			dueDate?: string
		}
		TaskDelete: {
			type?: string
			locationId?: string
			id?: string
			assignedTo?: string
			body?: string
			contactId?: string
			title?: string
			dateAdded?: string
			dueDate?: string
		}
		TaskCreate: {
			type?: string
			locationId?: string
			id?: string
			assignedTo?: string
			body?: string
			contactId?: string
			title?: string
			dateAdded?: string
			dueDate?: string
		}
		UserCreate: {
			type?: string
			locationId?: string
			companyId?: string
			id?: string
			firstName?: string
			lastName?: string
			email?: string
			phone?: string
			extension?: string
			role?: string
			permissions?: {
				adwordsReportingEnabled?: boolean
				affiliateManagerEnabled?: boolean
				agentReportingEnabled?: boolean
				appointmentsEnabled?: boolean
				assignedDataOnly?: boolean
				attributionsReportingEnabled?: boolean
				bloggingEnabled?: boolean
				botService?: boolean
				bulkRequestsEnabled?: boolean
				campaignsEnabled?: boolean
				campaignsReadOnly?: boolean
				cancelSubscriptionEnabled?: boolean
				communitiesEnabled?: boolean
				contactsEnabled?: boolean
				contentAiEnabled?: boolean
				conversationsEnabled?: boolean
				dashboardStatsEnabled?: boolean
				facebookAdsReportingEnabled?: boolean
				funnelsEnabled?: boolean
				invoiceEnabled?: boolean
				leadValueEnabled?: boolean
				marketingEnabled?: boolean
				membershipEnabled?: boolean
				onlineListingsEnabled?: boolean
				opportunitiesEnabled?: boolean
				paymentsEnabled?: boolean
				phoneCallEnabled?: boolean
				recordPaymentEnabled?: boolean
				refundsEnabled?: boolean
				reviewsEnabled?: boolean
				settingsEnabled?: boolean
				socialPlanner?: boolean
				tagsEnabled?: boolean
				triggersEnabled?: boolean
				websitesEnabled?: boolean
				workflowsEnabled?: boolean
				workflowsReadOnly?: boolean
			}
			locations?: string[]
		}
	}
	responses: never
	parameters: never
	requestBodies: never
	headers: never
	pathItems: never
}
export type $defs = Record<string, never>
export type operations = Record<string, never>
