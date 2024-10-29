export type paths = Record<string, never>
export type webhooks = {
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
}
export type components = {
	schemas: {
		AppointmentCreate: {
			appointment?: {
				address?: string
				appointmentStatus?: string
				assignedUserId?: string
				calendarId?: string
				contactId?: string
				dateAdded?: string
				dateUpdated?: string
				endTime?: string
				groupId?: string
				id?: string
				notes?: string
				source?: string
				startTime?: string
				title?: string
				users?: unknown[]
			}
			locationId?: string
			type?: string
		}
		AppointmentDelete: {
			appointment?: {
				address?: string
				appointmentStatus?: string
				assignedUserId?: string
				calendarId?: string
				contactId?: string
				dateAdded?: string
				dateUpdated?: string
				endTime?: string
				groupId?: string
				id?: string
				notes?: string
				source?: string
				startTime?: string
				title?: string
				users?: unknown[]
			}
			locationId?: string
			type?: string
		}
		AppointmentUpdate: {
			appointment?: {
				address?: string
				appointmentStatus?: string
				assignedUserId?: string
				calendarId?: string
				contactId?: string
				dateAdded?: string
				dateUpdated?: string
				endTime?: string
				groupId?: string
				id?: string
				notes?: string
				source?: string
				startTime?: string
				title?: string
				users?: unknown[]
			}
			locationId?: string
			type?: string
		}
		AppInstall: {
			appId?: string
			companyId?: string
			locationId?: string
			planId?: string
			trial?: {
				onTrial?: boolean
				trialDuration?: number
				trialStartDate?: Record<string, never>
			}
			type?: string
			userId?: string
		}
		AppUninstall: {
			appId?: string
			companyId?: string
			locationId?: string
			type?: string
		}
		CampaignStatusUpdate: {
			contactId?: string
			dateAdded?: string
			id?: string
			locationId?: string
			replied?: string
			status?: string
			templateId?: string
			type?: string
		}
		ContactCreate: {
			address1?: string
			assignedTo?: string
			attachments?: unknown[]
			city?: string
			companyName?: string
			country?: string
			customFields?: {
				id?: string
				value?: string | number | unknown[] | Record<string, never>
			}[]
			dateAdded?: string
			dateOfBirth?: string
			dnd?: boolean
			email?: string
			firstName?: string
			id?: string
			lastName?: string
			locationId?: string
			name?: string
			phone?: string
			postalCode?: string
			source?: string
			state?: string
			tags?: unknown[]
			type?: string
			website?: string
		}
		ContactDelete: {
			address1?: string
			assignedTo?: string
			attachments?: unknown[]
			city?: string
			companyName?: string
			country?: string
			customFields?: {
				id?: string
				value?: string | number | unknown[] | Record<string, never>
			}[]
			dateAdded?: string
			dateOfBirth?: string
			dnd?: boolean
			email?: string
			firstName?: string
			id?: string
			lastName?: string
			locationId?: string
			name?: string
			phone?: string
			postalCode?: string
			source?: string
			state?: string
			tags?: unknown[]
			type?: string
			website?: string
		}
		ContactTagUpdate: {
			address1?: string
			assignedTo?: string
			attachments?: unknown[]
			city?: string
			companyName?: string
			country?: string
			customFields?: {
				id?: string
				value?: string | number | unknown[] | Record<string, never>
			}[]
			dateAdded?: string
			dateOfBirth?: string
			dnd?: boolean
			email?: string
			firstName?: string
			id?: string
			lastName?: string
			locationId?: string
			name?: string
			phone?: string
			postalCode?: string
			source?: string
			state?: string
			tags?: unknown[]
			type?: string
			website?: string
		}
		ContactDndUpdate: {
			address1?: string
			assignedTo?: string
			attachments?: unknown[]
			city?: string
			companyName?: string
			country?: string
			customFields?: {
				id?: string
				value?: string | number | unknown[] | Record<string, never>
			}[]
			dateAdded?: string
			dateOfBirth?: string
			dnd?: boolean
			dndSettings?: {
				Call?: {
					code?: string
					message?: string
					status?: string
				}
				Email?: {
					code?: string
					message?: string
					status?: string
				}
				FB?: {
					code?: string
					message?: string
					status?: string
				}
				GMB?: {
					code?: string
					message?: string
					status?: string
				}
				SMS?: {
					code?: string
					message?: string
					status?: string
				}
				WhatsApp?: {
					code?: string
					message?: string
					status?: string
				}
			}
			email?: string
			firstName?: string
			id?: string
			lastName?: string
			locationId?: string
			name?: string
			phone?: string
			postalCode?: string
			source?: string
			state?: string
			tags?: unknown[]
			type?: string
			website?: string
		}
		ConversationProviderOutboundWebhook: {
			attachments?: unknown[]
			contactId?: string
			emailFrom?: string
			emailMessageId?: string
			emailTo?: string
			html?: string
			locationId?: string
			message?: string
			messageId?: string
			phone?: string
			subject?: string
			type?: Record<string, never>
			userId?: string
		}
		InboundMessage: {
			attachments?: unknown[]
			body?: string
			contactId?: string
			contentType?: string
			conversationId?: string
			dateAdded?: string
			direction?: string
			locationId?: string
			messageId?: string
			messageType?: string
			status?: string
			type?: string
			userId?: string
		}
		ConversationUnreadWebhook: {
			contactId?: string
			deleted?: boolean
			id?: string
			inbox?: boolean
			locationId?: string
			starred?: boolean
			type?: string
			unreadCount?: number
		}
		ContactUpdate: {
			address1?: string
			assignedTo?: string
			attachments?: unknown[]
			city?: string
			companyName?: string
			country?: string
			customFields?: {
				id?: string
				value?: string | number | unknown[] | Record<string, never>
			}[]
			dateAdded?: string
			dateOfBirth?: string
			dnd?: boolean
			email?: string
			firstName?: string
			id?: string
			lastName?: string
			locationId?: string
			name?: string
			phone?: string
			postalCode?: string
			source?: string
			state?: string
			tags?: unknown[]
			type?: string
			website?: string
		}
		InvoiceCreate: {
			_id?: string
			altId?: string
			altType?: string
			amountDue?: number
			amountPaid?: number
			businessDetails?: {
				address?: string
				customValues?: string[]
				logoUrl?: string
				name?: string
				phoneNo?: string
				website?: string
			}
			contactDetails?: {
				additionalEmails?: {
					email?: string
				}[]
				address?: {
					addressLine1?: string
					addressLine2?: string
					city?: string
					countryCode?: string
					postalCode?: string
					state?: string
				}
				companyName?: string
				customFields?: string[]
				email?: string
				id?: string
				name?: string
				phoneNo?: string
			}
			createdAt?: string
			currency?: string
			discount?: {
				type?: string
				value?: number
			}
			dueDate?: string
			invoiceItems?: {
				_id?: string
				amount?: number
				currency?: string
				name?: string
				priceId?: string
				productId?: string
				qty?: number
				taxes?: unknown[]
			}[]
			invoiceNumber?: string
			issueDate?: string
			liveMode?: boolean
			name?: string
			status?: string
			title?: string
			total?: number
			totalSummary?: {
				discount?: number
				subTotal?: number
			}
			updatedAt?: string
		}
		InvoiceVoid: {
			_id?: string
			altId?: string
			altType?: string
			amountDue?: number
			amountPaid?: number
			businessDetails?: {
				address?: string
				customValues?: string[]
				logoUrl?: string
				name?: string
				phoneNo?: string
				website?: string
			}
			contactDetails?: {
				additionalEmails?: {
					email?: string
				}[]
				address?: {
					addressLine1?: string
					addressLine2?: string
					city?: string
					countryCode?: string
					postalCode?: string
					state?: string
				}
				companyName?: string
				customFields?: string[]
				email?: string
				id?: string
				name?: string
				phoneNo?: string
			}
			createdAt?: string
			currency?: string
			discount?: {
				type?: string
				value?: number
			}
			dueDate?: string
			invoiceItems?: {
				_id?: string
				amount?: number
				currency?: string
				name?: string
				priceId?: string
				productId?: string
				qty?: number
				taxes?: unknown[]
			}[]
			invoiceNumber?: string
			issueDate?: string
			liveMode?: boolean
			name?: string
			status?: string
			title?: string
			total?: number
			totalSummary?: {
				discount?: number
				subTotal?: number
			}
			updatedAt?: string
		}
		InvoiceSent: {
			_id?: string
			altId?: string
			altType?: string
			amountDue?: number
			amountPaid?: number
			businessDetails?: {
				address?: string
				customValues?: string[]
				logoUrl?: string
				name?: string
				phoneNo?: string
				website?: string
			}
			contactDetails?: {
				additionalEmails?: {
					email?: string
				}[]
				address?: {
					addressLine1?: string
					addressLine2?: string
					city?: string
					countryCode?: string
					postalCode?: string
					state?: string
				}
				companyName?: string
				customFields?: string[]
				email?: string
				id?: string
				name?: string
				phoneNo?: string
			}
			createdAt?: string
			currency?: string
			discount?: {
				type?: string
				value?: number
			}
			dueDate?: string
			invoiceItems?: {
				_id?: string
				amount?: number
				currency?: string
				name?: string
				priceId?: string
				productId?: string
				qty?: number
				taxes?: unknown[]
			}[]
			invoiceNumber?: string
			issueDate?: string
			liveMode?: boolean
			name?: string
			status?: string
			title?: string
			total?: number
			totalSummary?: {
				discount?: number
				subTotal?: number
			}
			updatedAt?: string
		}
		InvoicePartiallyPaid: {
			_id?: string
			altId?: string
			altType?: string
			amountDue?: number
			amountPaid?: number
			businessDetails?: {
				address?: string
				customValues?: string[]
				logoUrl?: string
				name?: string
				phoneNo?: string
				website?: string
			}
			contactDetails?: {
				additionalEmails?: {
					email?: string
				}[]
				address?: {
					addressLine1?: string
					addressLine2?: string
					city?: string
					countryCode?: string
					postalCode?: string
					state?: string
				}
				companyName?: string
				customFields?: string[]
				email?: string
				id?: string
				name?: string
				phoneNo?: string
			}
			createdAt?: string
			currency?: string
			discount?: {
				type?: string
				value?: number
			}
			dueDate?: string
			invoiceItems?: {
				_id?: string
				amount?: number
				currency?: string
				name?: string
				priceId?: string
				productId?: string
				qty?: number
				taxes?: unknown[]
			}[]
			invoiceNumber?: string
			issueDate?: string
			liveMode?: boolean
			name?: string
			status?: string
			title?: string
			total?: number
			totalSummary?: {
				discount?: number
				subTotal?: number
			}
			updatedAt?: string
		}
		InvoicePaid: {
			_id?: string
			altId?: string
			altType?: string
			amountDue?: number
			amountPaid?: number
			businessDetails?: {
				address?: string
				customValues?: string[]
				logoUrl?: string
				name?: string
				phoneNo?: string
				website?: string
			}
			contactDetails?: {
				additionalEmails?: {
					email?: string
				}[]
				address?: {
					addressLine1?: string
					addressLine2?: string
					city?: string
					countryCode?: string
					postalCode?: string
					state?: string
				}
				companyName?: string
				customFields?: string[]
				email?: string
				id?: string
				name?: string
				phoneNo?: string
			}
			createdAt?: string
			currency?: string
			discount?: {
				type?: string
				value?: number
			}
			dueDate?: string
			invoiceItems?: {
				_id?: string
				amount?: number
				currency?: string
				name?: string
				priceId?: string
				productId?: string
				qty?: number
				taxes?: unknown[]
			}[]
			invoiceNumber?: string
			issueDate?: string
			liveMode?: boolean
			name?: string
			status?: string
			title?: string
			total?: number
			totalSummary?: {
				discount?: number
				subTotal?: number
			}
			updatedAt?: string
		}
		InvoiceDelete: {
			_id?: string
			altId?: string
			altType?: string
			amountDue?: number
			amountPaid?: number
			businessDetails?: {
				address?: string
				customValues?: string[]
				logoUrl?: string
				name?: string
				phoneNo?: string
				website?: string
			}
			contactDetails?: {
				additionalEmails?: {
					email?: string
				}[]
				address?: {
					addressLine1?: string
					addressLine2?: string
					city?: string
					countryCode?: string
					postalCode?: string
					state?: string
				}
				companyName?: string
				customFields?: string[]
				email?: string
				id?: string
				name?: string
				phoneNo?: string
			}
			createdAt?: string
			currency?: string
			discount?: {
				type?: string
				value?: number
			}
			dueDate?: string
			invoiceItems?: {
				_id?: string
				amount?: number
				currency?: string
				name?: string
				priceId?: string
				productId?: string
				qty?: number
				taxes?: unknown[]
			}[]
			invoiceNumber?: string
			issueDate?: string
			liveMode?: boolean
			name?: string
			status?: string
			title?: string
			total?: number
			totalSummary?: {
				discount?: number
				subTotal?: number
			}
			updatedAt?: string
		}
		InvoiceUpdate: {
			_id?: string
			altId?: string
			altType?: string
			amountDue?: number
			amountPaid?: number
			businessDetails?: {
				address?: string
				customValues?: string[]
				logoUrl?: string
				name?: string
				phoneNo?: string
				website?: string
			}
			contactDetails?: {
				additionalEmails?: {
					email?: string
				}[]
				address?: {
					addressLine1?: string
					addressLine2?: string
					city?: string
					countryCode?: string
					postalCode?: string
					state?: string
				}
				companyName?: string
				customFields?: string[]
				email?: string
				id?: string
				name?: string
				phoneNo?: string
			}
			createdAt?: string
			currency?: string
			discount?: {
				type?: string
				value?: number
			}
			dueDate?: string
			invoiceItems?: {
				_id?: string
				amount?: number
				currency?: string
				name?: string
				priceId?: string
				productId?: string
				qty?: number
				taxes?: unknown[]
			}[]
			invoiceNumber?: string
			issueDate?: string
			liveMode?: boolean
			name?: string
			status?: string
			title?: string
			total?: number
			totalSummary?: {
				discount?: number
				subTotal?: number
			}
			updatedAt?: string
		}
		LCEmailStats: {
			companyId?: string
			locationId?: string
			type?: string
			webhookPayload?: {
				campaigns?: unknown[]
				'delivery-status'?: {
					'attempt-no'?: number
					code?: number
					description?: string
					'enhanced-code'?: string
					'i-first-delivery-attempt-seconds'?: number
					message?: string
					'mx-host'?: string
					'session-seconds'?: number
					utf8?: boolean
				}
				envelope?: {
					'i-ip-pool-id'?: string
					'i-ip-pool-name'?: string
					sender?: string
					'sending-ip'?: string
					targets?: string
					transport?: string
				}
				event?: string
				flags?: {
					'is-authenticated'?: boolean
					'is-big'?: boolean
					'is-routed'?: boolean
					'is-system-test'?: boolean
					'is-test-mode'?: boolean
				}
				id?: string
				'log-level'?: string
				message?: {
					attachments?: unknown[]
					headers?: {
						from?: string
						'message-id'?: string
						to?: string
					}
					size?: number
				}
				recipient?: string
				'recipient-domain'?: string
				'recipient-provider'?: string
				tags?: unknown[]
				timestamp?: number
			}
		}
		LocationCreate: {
			companyId?: string
			email?: string
			id?: string
			name?: string
			stripeProductId?: string
			type?: string
		}
		LocationUpdate: {
			companyId?: string
			email?: string
			id?: string
			name?: string
			stripeProductId?: string
			type?: string
		}
		NoteCreate: {
			body?: string
			contactId?: string
			dateAdded?: string
			id?: string
			locationId?: string
			type?: string
		}
		NoteDelete: {
			body?: string
			contactId?: string
			dateAdded?: string
			id?: string
			locationId?: string
			type?: string
		}
		OpportunityCreate: {
			assignedTo?: string
			contactId?: string
			dateAdded?: string
			id?: string
			locationId?: string
			monetaryValue?: number
			name?: string
			pipelineId?: string
			pipelineStageId?: string
			source?: string
			status?: string
			type?: string
		}
		OpportunityAssignedToUpdate: {
			assignedTo?: string
			contactId?: string
			dateAdded?: string
			id?: string
			locationId?: string
			monetaryValue?: number
			name?: string
			pipelineId?: string
			pipelineStageId?: string
			source?: string
			status?: string
			type?: string
		}
		NoteUpdate: {
			body?: string
			contactId?: string
			dateAdded?: string
			id?: string
			locationId?: string
			type?: string
		}
		OpportunityDelete: {
			assignedTo?: string
			contactId?: string
			dateAdded?: string
			id?: string
			locationId?: string
			monetaryValue?: number
			name?: string
			pipelineId?: string
			pipelineStageId?: string
			source?: string
			status?: string
			type?: string
		}
		OpportunityMonetaryValueUpdate: {
			assignedTo?: string
			contactId?: string
			dateAdded?: string
			id?: string
			locationId?: string
			monetaryValue?: number
			name?: string
			pipelineId?: string
			pipelineStageId?: string
			source?: string
			status?: string
			type?: string
		}
		OpportunityStageUpdate: {
			assignedTo?: string
			contactId?: string
			dateAdded?: string
			id?: string
			locationId?: string
			monetaryValue?: number
			name?: string
			pipelineId?: string
			pipelineStageId?: string
			source?: string
			status?: string
			type?: string
		}
		OpportunityStatusUpdate: {
			assignedTo?: string
			contactId?: string
			dateAdded?: string
			id?: string
			locationId?: string
			monetaryValue?: number
			name?: string
			pipelineId?: string
			pipelineStageId?: string
			source?: string
			status?: string
			type?: string
		}
		OpportunityUpdate: {
			assignedTo?: string
			contactId?: string
			dateAdded?: string
			id?: string
			locationId?: string
			monetaryValue?: number
			name?: string
			pipelineId?: string
			pipelineStageId?: string
			source?: string
			status?: string
			type?: string
		}
		OrderCreate: {
			_id?: string
			altId?: string
			altType?: string
			amount?: number
			amountSummary?: {
				discount?: number
				shipping?: number
				subtotal?: number
				tax?: number
			}
			contactId?: string
			contactSnapshot?: {
				address1?: string
				assignedTo?: string
				attachments?: unknown[]
				city?: string
				companyName?: string
				country?: string
				dateAdded?: string
				dateOfBirth?: string
				dnd?: boolean
				email?: string
				firstName?: string
				id?: string
				lastName?: string
				locationId?: string
				name?: string
				phone?: string
				postalCode?: string
				source?: string
				state?: string
				tags?: unknown[]
				website?: string
			}
			createdAt?: string
			currency?: string
			fulfillmentStatus?: string
			items?: {
				name?: string
				price?: Record<string, never>
				product?: Record<string, never>
				qty?: number
			}[]
			liveMode?: boolean
			source?: {
				id?: string
				meta?: Record<string, never>
				name?: string
				subType?: string
				type?: string
			}
			status?: string
			taxSummary?: {
				_id?: string
				amount?: number
				calculation?: string
				name?: string
				rate?: number
			}[]
			type?: string
			updatedAt?: string
		}
		OrderStatusUpdate: {
			_id?: string
			altId?: string
			altType?: string
			amount?: number
			amountSummary?: {
				discount?: number
				shipping?: number
				subtotal?: number
				tax?: number
			}
			contactId?: string
			contactSnapshot?: {
				address1?: string
				assignedTo?: string
				attachments?: unknown[]
				city?: string
				companyName?: string
				country?: string
				dateAdded?: string
				dateOfBirth?: string
				dnd?: boolean
				email?: string
				firstName?: string
				id?: string
				lastName?: string
				locationId?: string
				name?: string
				phone?: string
				postalCode?: string
				source?: string
				state?: string
				tags?: unknown[]
				website?: string
			}
			createdAt?: string
			currency?: string
			fulfillmentStatus?: string
			items?: {
				name?: string
				price?: Record<string, never>
				product?: Record<string, never>
				qty?: number
			}[]
			liveMode?: boolean
			source?: {
				id?: string
				meta?: Record<string, never>
				name?: string
				subType?: string
				type?: string
			}
			status?: string
			taxSummary?: {
				_id?: string
				amount?: number
				calculation?: string
				name?: string
				rate?: number
			}[]
			type?: string
			updatedAt?: string
		}
		OutboundMessage: {
			attachments?: unknown[]
			body?: string
			contactId?: string
			contentType?: string
			conversationId?: string
			dateAdded?: string
			direction?: string
			locationId?: string
			messageId?: string
			messageType?: string
			source?: string
			status?: string
			type?: string
			userId?: string
		}
		PriceCreate: {
			_id?: string
			allowOutOfStockPurchases?: boolean
			amount?: number
			availableQuantity?: number
			compareAtPrice?: number
			createdAt?: string
			currency?: string
			locationId?: string
			membershipOffers?: {
				_id?: string
				label?: string
				value?: string
			}[]
			name?: string
			priceType?: string
			product?: string
			recurring?: {
				interval?: string
				intervalCount?: number
			}
			trackInventory?: null
			updatedAt?: string
			userId?: string
			variantOptionIds?: string[]
		}
		PriceUpdate: {
			_id?: string
			allowOutOfStockPurchases?: boolean
			amount?: number
			availableQuantity?: number
			compareAtPrice?: number
			createdAt?: string
			currency?: string
			locationId?: string
			membershipOffers?: {
				_id?: string
				label?: string
				value?: string
			}[]
			name?: string
			product?: string
			recurring?: {
				interval?: string
				intervalCount?: number
			}
			trackInventory?: null
			type?: string
			updatedAt?: string
			userId?: string
			variantOptionIds?: string[]
		}
		PriceDelete: {
			_id?: string
			allowOutOfStockPurchases?: boolean
			amount?: number
			availableQuantity?: number
			compareAtPrice?: number
			createdAt?: string
			currency?: string
			locationId?: string
			membershipOffers?: {
				_id?: string
				label?: string
				value?: string
			}[]
			name?: string
			product?: string
			recurring?: {
				interval?: string
				intervalCount?: number
			}
			trackInventory?: null
			type?: string
			updatedAt?: string
			userId?: string
			variantOptionIds?: string[]
		}
		ProductCreate: {
			_id?: string
			availableInStore?: boolean
			createdAt?: string
			description?: string
			image?: string
			locationId?: string
			medias?: {
				id?: string
				isFeatured?: boolean
				title?: string
				type?: string
				url?: string
			}[]
			name?: string
			productType?: string
			statementDescriptor?: string
			updatedAt?: string
			userId?: string
			variants?: {
				id?: string
				name?: string
				options?: {
					id?: string
					name?: string
				}[]
			}[]
		}
		ProductUpdate: {
			_id?: string
			availableInStore?: boolean
			createdAt?: string
			description?: string
			image?: string
			locationId?: string
			medias?: {
				id?: string
				isFeatured?: boolean
				title?: string
				type?: string
				url?: string
			}[]
			name?: string
			productType?: string
			statementDescriptor?: string
			updatedAt?: string
			userId?: string
			variants?: {
				id?: string
				name?: string
				options?: {
					id?: string
					name?: string
				}[]
			}[]
		}
		ProductDelete: {
			_id?: string
			availableInStore?: boolean
			createdAt?: string
			description?: string
			image?: string
			locationId?: string
			medias?: {
				id?: string
				isFeatured?: boolean
				title?: string
				type?: string
				url?: string
			}[]
			name?: string
			productType?: string
			statementDescriptor?: string
			updatedAt?: string
			userId?: string
			variants?: {
				id?: string
				name?: string
				options?: {
					id?: string
					name?: string
				}[]
			}[]
		}
		TaskComplete: {
			assignedTo?: string
			body?: string
			contactId?: string
			dateAdded?: string
			dueDate?: string
			id?: string
			locationId?: string
			title?: string
			type?: string
		}
		TaskCreate: {
			assignedTo?: string
			body?: string
			contactId?: string
			dateAdded?: string
			dueDate?: string
			id?: string
			locationId?: string
			title?: string
			type?: string
		}
		TaskDelete: {
			assignedTo?: string
			body?: string
			contactId?: string
			dateAdded?: string
			dueDate?: string
			id?: string
			locationId?: string
			title?: string
			type?: string
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
