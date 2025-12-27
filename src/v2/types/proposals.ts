export interface paths {
	'/proposals/document': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * List documents
		 * @description List documents for a location
		 */
		get: operations['list-documents-contracts']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/proposals/document/send': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Send document
		 * @description Send document to a client
		 */
		post: operations['send-documents-contracts']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/proposals/templates': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * List templates
		 * @description List document contract templates for a location
		 */
		get: operations['list-documents-contracts-templates']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/proposals/templates/send': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Send template
		 * @description Send template to a client
		 */
		post: operations['send-documents-contracts-template']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
}
export type webhooks = Record<string, never>
export interface components {
	schemas: {
		BadRequestDTO: {
			/** @example Bad Request */
			message?: string
			/** @example 400 */
			statusCode?: number
		}
		CCRecipientItem: {
			/**
			 * @description Contact Name
			 * @example Jim Anton
			 */
			contactName: string
			/**
			 * @description Email
			 * @example jim@gmail.com
			 */
			email: string
			/**
			 * @description First Name
			 * @example Jim
			 */
			firstName: string
			/**
			 * @description Contact ID
			 * @example contactId
			 */
			id: string
			/**
			 * @description Contact Image URL
			 * @example https://example.com/image.jpg
			 */
			imageUrl: string
			/**
			 * @description Last Name
			 * @example Anton
			 */
			lastName: string
		}
		DiscountDto: {
			/**
			 * @description Unique identifier for the discount
			 * @example 123456
			 */
			id: string
			/**
			 * @description Type of discount
			 * @example percentage
			 * @enum {string}
			 */
			type: 'percentage' | 'custom_amount'
			/**
			 * @description Discount value (either a percentage or custom amount)
			 * @example 10
			 */
			value: number
		}
		DocumentDto: {
			/**
			 * @description Unique identifier
			 * @example 67ac9a51106ee8311e911XXXX
			 */
			_id: string
			/**
			 * @description Date to (ISO 8601)
			 * @example 2025-02-14T18:29:59.999Z
			 */
			createdAt: string
			/**
			 * @description Whether the document is deleted
			 * @example false
			 */
			deleted: boolean
			/**
			 * @description Document Id
			 * @example hTlkh7t8gujsahgg93
			 */
			documentId: string
			/**
			 * @description Number of times document is moved to draft state
			 * @example 1
			 */
			documentRevision: number
			/** @description Fillable fields */
			fillableFields: components['schemas']['FillableFieldsDTO'][]
			/** @description Grand total object of the document */
			grandTotal: components['schemas']['GrandTotalDto']
			/**
			 * @description Whether the document is expired
			 * @example false
			 */
			isExpired: boolean
			/** @description Links for the document if its sent */
			links: components['schemas']['ProposalEstimateLinksDto'][]
			/**
			 * @description Locale of the location
			 * @example en-US
			 */
			locale: string
			/**
			 * @description Location Id
			 * @example hTlkh7t8gujsahgg93
			 */
			locationId: string
			/**
			 * @description Name of the document
			 * @example Document Name
			 */
			name: string
			/**
			 * @description Payment status
			 * @example paid
			 */
			paymentStatus: ('waiting_for_payment' | 'paid' | 'no_payment')[]
			/**
			 * @description Recipients
			 * @example [
			 *       {
			 *         "id": "u240JcS0E5qE0ziHnwMm",
			 *         "email": "jim@gmail.com",
			 *         "imageUrl": "",
			 *         "contactName": "Jim Anton",
			 *         "firstName": "Jim",
			 *         "lastName": "Anton",
			 *         "role": "signer",
			 *         "hasCompleted": true,
			 *         "signingOrder": 1,
			 *         "imgUrl": "base64 image url",
			 *         "ip": "123.123.123.123"
			 *       }
			 *     ]
			 */
			recipients: components['schemas']['RecipientItem'][]
			/**
			 * @description Document status
			 * @example draft
			 */
			status: ('draft' | 'sent' | 'viewed' | 'completed' | 'accepted')[]
			/**
			 * @description Type of the document
			 * @example proposal
			 */
			type: string
			/**
			 * @description Date start from (ISO 8601)
			 * @example 2025-02-03T18:30:00.000Z
			 */
			updatedAt: string
		}
		DocumentListResponseDto: {
			/** @description List of documents */
			documents: components['schemas']['DocumentDto'][]
			/**
			 * @description Total records available
			 * @example 10
			 */
			total: number
			/**
			 * @description WhiteLabel url for document
			 * @example https://example.com
			 */
			whiteLabelBaseUrl?: number
			/**
			 * @description WhiteLabel url for invoice
			 * @example https://example.com
			 */
			whiteLabelBaseUrlForInvoice?: number
		}
		/**
		 * @description Element type
		 * @enum {string}
		 */
		ELEMENTS_LOOKUP:
			| 'Page'
			| 'Text'
			| 'Image'
			| 'Video'
			| 'Table'
			| 'ProductList'
			| 'PageBreak'
			| 'Signature'
			| 'PaymentDetails'
			| 'TextField'
			| 'DateField'
			| 'InitialsField'
			| 'Checkbox'
			| 'Row'
			| 'Column'
		/**
		 * @description Entity type
		 * @enum {string}
		 */
		EntityReference: 'contacts' | 'users'
		FillableFieldsDTO: {
			entityType: components['schemas']['EntityReference']
			/**
			 * @description Field Id
			 * @example text_field_1
			 */
			fieldId: string
			/**
			 * @description Has the field been completed
			 * @example true
			 */
			hasCompleted: boolean
			/**
			 * @description Id
			 * @example 2d0a6fe1-d519-4198-8785-3da1d7cab925
			 */
			id: string
			/**
			 * @description Is the field required
			 * @example true
			 */
			isRequired: boolean
			/**
			 * @description Recipient
			 * @example John Doe
			 */
			recipient: string
			/** @example TextField */
			type: components['schemas']['ELEMENTS_LOOKUP']
			/**
			 * @description Value of the field
			 * @example John Doe
			 */
			value: string
		}
		GrandTotalDto: {
			/**
			 * @description Total amount before discounts
			 * @example 100
			 */
			amount: number
			/**
			 * @description Currency of the total amount
			 * @example USD
			 */
			currency: string
			/**
			 * @description Total discount percentage applied
			 * @example 15
			 */
			discountPercentage: number
			/** @description List of applied discounts */
			discounts: components['schemas']['DiscountDto'][]
		}
		NotificationSenderSettingDto: {
			fromEmail: string
			fromName: string
		}
		NotificationSendSettingDto: {
			subject: string
			templateId: string
		}
		NotificationSettingsDto: {
			receive: components['schemas']['NotificationSendSettingDto']
			sender: components['schemas']['NotificationSenderSettingDto']
		}
		ProposalEstimateLinksDto: {
			/**
			 * @description Created by user ID
			 * @example b6d8fa28-1112-4dc7-b9d2-f22b75a477ea
			 */
			createdBy: string
			/**
			 * @description Whether the document is deleted
			 * @example false
			 */
			deleted: boolean
			/**
			 * @description Document ID
			 * @example c1e87a91-93b2-4b78-821f-85cf0e1f925b
			 */
			documentId: string
			/**
			 * @description Document revision number
			 * @example 1
			 */
			documentRevision: number
			/**
			 * @description Entity name that the recipient belongs to
			 * @example contacts
			 * @enum {string}
			 */
			entityName: 'contacts' | 'users'
			/**
			 * @description Recipient category (recipient, cc, or bcc)
			 * @example recipient
			 * @enum {string}
			 */
			recipientCategory: 'recipient' | 'cc' | 'bcc'
			/**
			 * @description Recipient ID
			 * @example u240JcS0E5qE0ziHnwMm
			 */
			recipientId: string
			/**
			 * @description Reference ID
			 * @example 550e8400-e29b-41d4-a716-446655440000
			 */
			referenceId: string
		}
		RecipientItem: {
			/**
			 * @description Recipient contact name
			 * @example Jim Anton
			 */
			contactName?: string
			/**
			 * @description Recipient country
			 * @example United States
			 */
			country?: string
			/**
			 * @description Recipient Email
			 * @example jim@gmail.com
			 */
			email: string
			/**
			 * @description Recipient entity name
			 * @example Jim Anton
			 */
			entityName?: string
			/**
			 * @description Recipient First Name
			 * @example Jim
			 */
			firstName?: string
			/**
			 * @description Recipient has completed the document
			 * @example true
			 */
			hasCompleted: boolean
			/**
			 * @description Recipient Id
			 * @example u240JcS0E5qE0ziHnwMm
			 */
			id: string
			/**
			 * @description Recipient image url
			 * @example base64 image url
			 */
			imgUrl?: string
			/**
			 * @description Recipient initials image url
			 * @example base64 image url
			 */
			initialsImgUrl?: string
			/**
			 * @description Recipient ip
			 * @example 123.123.123.123
			 */
			ip?: string
			/**
			 * @description Recipient is primary
			 * @example true
			 */
			isPrimary: boolean
			/**
			 * @description Recipient Last Name
			 * @example Anton
			 */
			lastName?: string
			/**
			 * @description Recipient last viewed date
			 * @example 2025-02-03T18:30:00.000Z
			 */
			lastViewedAt?: string
			/**
			 * @description Recipient Phone
			 * @example 1234567890
			 */
			phone?: string
			/**
			 * @description Recipient Phone Number
			 * @example +1234567890
			 */
			phoneNumber?: string
			/**
			 * @description Recipient role
			 * @example signer
			 * @enum {string}
			 */
			role: 'user' | 'signer'
			/**
			 * @description Share link
			 * @example https://www.google.com
			 */
			shareLink?: string
			/**
			 * @description Recipient signed date
			 * @example 2025-02-03T18:30:00.000Z
			 */
			signedDate?: string
			/**
			 * @description Recipient signing order
			 * @example 1
			 */
			signingOrder: number
			/**
			 * @description Recipient user agent
			 * @example Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36
			 */
			userAgent?: string
		}
		SendDocumentDto: {
			/**
			 * @description CC Recipient
			 * @example [
			 *       {
			 *         "id": "u240JcS0E5qE0ziHnwMm",
			 *         "email": "jim@gmail.com",
			 *         "imageUrl": "",
			 *         "contactName": "Jim Anton",
			 *         "firstName": "Jim",
			 *         "lastName": "Anton"
			 *       }
			 *     ]
			 */
			ccRecipients?: components['schemas']['CCRecipientItem'][]
			/**
			 * @description Document Id
			 * @example hTlkh7t8gujsahgg93
			 */
			documentId: string
			/**
			 * @description Document Name
			 * @example new Document
			 */
			documentName?: string
			/**
			 * @description Location Id
			 * @example hTlkh7t8gujsahgg93
			 */
			locationId: string
			/**
			 * @description Medium to be used for sending the document
			 * @example email
			 * @enum {string}
			 */
			medium?: 'link' | 'email'
			/**
			 * @example {
			 *       "sender": {
			 *         "fromName": "",
			 *         "fromEmail": ""
			 *       },
			 *       "receive": {
			 *         "subject": "",
			 *         "templateId": ""
			 *       }
			 *     }
			 */
			notificationSettings?: components['schemas']['NotificationSettingsDto']
			/**
			 * @description Sent ByUser Id
			 * @example 1234567890
			 */
			sentBy: string
		}
		SendDocumentFromPublicApiBodyDto: {
			/**
			 * @description Contact Id
			 * @example hTlkh7t8gujsahgg93
			 */
			contactId: string
			/**
			 * @description Location Id
			 * @example hTlkh7t8gujsahgg93
			 */
			locationId: string
			/**
			 * @description Opportunity Id
			 * @example hTlkh7t8gujsahgg93
			 */
			opportunityId?: string
			/**
			 * @description Send Document
			 * @example true
			 */
			sendDocument?: boolean
			/**
			 * @description Template Id
			 * @example hTlkh7t8gujsahgg93
			 */
			templateId: string
			/**
			 * @description User Id
			 * @example hTlkh7t8gujsahgg93
			 */
			userId: string
		}
		SendDocumentResponseDto: {
			/** @description Links for all recipients */
			links: components['schemas']['ProposalEstimateLinksDto'][]
			/**
			 * @description Success status
			 * @example true
			 */
			success: boolean
		}
		SendTemplateResponseDto: {
			/** @description Links for all recipients */
			links: components['schemas']['ProposalEstimateLinksDto'][]
			/**
			 * @description Success status
			 * @example true
			 */
			success: boolean
		}
		TemplateListPaginationResponseDTO: {
			/** @description Array of templates */
			data: components['schemas']['TemplateListResponseDTO'][]
			/**
			 * @description Total number of templates
			 * @example 2
			 */
			total: number
			/**
			 * @description Trace ID for request tracking
			 * @example d5656876-86a5-46fb-84df-788f1da7937a
			 */
			traceId?: string
		}
		TemplateListResponseDTO: {
			/**
			 * @description Template ID
			 * @example 685d11c371c22e636e9c04b2
			 */
			_id: string
			/**
			 * @description Template creation date
			 * @example 2025-06-26T09:24:19.305Z
			 */
			createdAt: string
			/**
			 * @description Whether the template is deleted
			 * @example false
			 */
			deleted: boolean
			/**
			 * @description Document form URL (only present when isPublicDocument is true)
			 * @example https://staging.sendlink.co/documents/doc-form/685d11c371c22e636e9c04b2?locale=en_US
			 */
			docFormUrl?: string
			/**
			 * @description Document count (only present when isPublicDocument is true)
			 * @example 0
			 */
			documentCount?: number
			/**
			 * @description Template ID (alias for _id)
			 * @example 685d11c371c22e636e9c04b2
			 */
			id: string
			/**
			 * @description Whether the template is a public document
			 * @example true
			 */
			isPublicDocument: boolean
			/**
			 * @description Location ID
			 * @example 5rORm9p7RtxWQPzBIbTG
			 */
			locationId: string
			/**
			 * @description Template name
			 * @example New Template
			 */
			name: string
			/**
			 * @description Template type
			 * @example proposal
			 * @enum {string}
			 */
			type: 'proposal' | 'estimate' | 'contentLibrary'
			/**
			 * @description Template last update date
			 * @example 2025-06-26T09:27:32.119Z
			 */
			updatedAt: string
			/**
			 * @description User ID who last updated the template
			 * @example K9PSPnWjfNoE8DCf5LJZ
			 */
			updatedBy: string
			/**
			 * @description Template version
			 * @example 2
			 */
			version: number
		}
		UnauthorizedDTO: {
			/** @example Unauthorized */
			error?: string
			/** @example Invalid token: access token is invalid */
			message?: string
			/** @example 401 */
			statusCode?: number
		}
	}
	responses: never
	parameters: never
	requestBodies: never
	headers: never
	pathItems: never
}
export type $defs = Record<string, never>
export interface operations {
	'list-documents-contracts': {
		parameters: {
			query: {
				/** @description Date start from (ISO 8601), dateFrom & DateTo must be provided together */
				dateFrom?: string
				/** @description Date to (ISO 8601), dateFrom & DateTo must be provided together */
				dateTo?: string
				/** @description Limit to fetch number of records */
				limit?: number
				/** @description Location Id */
				locationId: string
				/** @description Payment status, pass as comma separated values */
				paymentStatus?: 'waiting_for_payment' | 'paid' | 'no_payment'
				/** @description Search string */
				query?: string
				/** @description Skip number of records */
				skip?: number
				/** @description Document status, pass as comma separated values */
				status?: 'draft' | 'sent' | 'viewed' | 'completed' | 'accepted'
			}
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-07-28'
			}
			path?: never
			cookie?: never
		}
		requestBody?: never
		responses: {
			/** @description Document fetched successfully */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['DocumentListResponseDto']
				}
			}
			/** @description Unprocessable Entity */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
		}
	}
	'send-documents-contracts': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-07-28'
			}
			path?: never
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['SendDocumentDto']
			}
		}
		responses: {
			/** @description Document sent successfully */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['SendDocumentResponseDto']
				}
			}
			/** @description Unprocessable Entity */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
		}
	}
	'list-documents-contracts-templates': {
		parameters: {
			query: {
				/** @description Date start from (ISO 8601) */
				dateFrom?: string
				/** @description Date to (ISO 8601) */
				dateTo?: string
				/** @description If the docForm is a DocForm */
				isPublicDocument?: boolean
				/** @description Limit */
				limit?: string
				/** @description Location Id */
				locationId: string
				/** @description Template Name */
				name?: string
				/** @description Skip */
				skip?: string
				/** @description Comma-separated template types. Valid values: proposal, estimate, contentLibrary */
				type?: string
				/** @description User Id, required when isPublicDocument is true */
				userId?: string
			}
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-07-28'
			}
			path?: never
			cookie?: never
		}
		requestBody?: never
		responses: {
			/** @description Templates fetched successfully */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['TemplateListPaginationResponseDTO']
				}
			}
			/** @description Unprocessable Entity */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
		}
	}
	'send-documents-contracts-template': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-07-28'
			}
			path?: never
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['SendDocumentFromPublicApiBodyDto']
			}
		}
		responses: {
			/** @description Document sent successfully */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['SendTemplateResponseDto']
				}
			}
			/** @description Unprocessable Entity */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
		}
	}
}
