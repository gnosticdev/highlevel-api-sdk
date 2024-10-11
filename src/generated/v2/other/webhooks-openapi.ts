export type paths = Record<string, never>
export type webhooks = Record<string, never>
export type components = {
	schemas: {
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
		NoteCreate: {
			type?: string
			locationId?: string
			id?: string
			body?: string
			contactId?: string
			dateAdded?: string
		}
		NoteDelete: {
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
		NoteUpdate: {
			type?: string
			locationId?: string
			id?: string
			body?: string
			contactId?: string
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
	}
	responses: never
	parameters: never
	requestBodies: never
	headers: never
	pathItems: never
}
export type $defs = Record<string, never>
export type operations = Record<string, never>
