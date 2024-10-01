export type paths = {
	'/invoices/template': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * List templates
		 * @description API to get list of templates
		 */
		get: operations['list-invoice-templates']
		put?: never
		/**
		 * Create template
		 * @description API to create a template
		 */
		post: operations['create-invoice-template']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/invoices/template/{templateId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get an template
		 * @description API to get an template by template id
		 */
		get: operations['get-invoice-template']
		/**
		 * Update template
		 * @description API to update an template by template id
		 */
		put: operations['update-invoice-template']
		post?: never
		/**
		 * Delete template
		 * @description API to update an template by template id
		 */
		delete: operations['delete-invoice-template']
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/invoices/schedule': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * List schedules
		 * @description API to get list of schedules
		 */
		get: operations['list-invoice-schedules']
		put?: never
		/**
		 * Create Invoice Schedule
		 * @description API to create an invoice Schedule
		 */
		post: operations['create-invoice-schedule']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/invoices/schedule/{scheduleId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get an schedule
		 * @description API to get an schedule by schedule id
		 */
		get: operations['get-invoice-schedule']
		/**
		 * Update schedule
		 * @description API to update an schedule by schedule id
		 */
		put: operations['update-invoice-schedule']
		post?: never
		/**
		 * Delete schedule
		 * @description API to delete an schedule by schedule id
		 */
		delete: operations['delete-invoice-schedule']
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/invoices/schedule/{scheduleId}/schedule': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Schedule an schedule invoice
		 * @description API to schedule an schedule invoice to start sending to the customer
		 */
		post: operations['schedule-invoice-schedule']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/invoices/schedule/{scheduleId}/auto-payment': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Manage Auto payment for an schedule invoice
		 * @description API to manage auto payment for a schedule
		 */
		post: operations['auto-payment-invoice-schedule']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/invoices/schedule/{scheduleId}/cancel': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Cancel an scheduled invoice
		 * @description API to cancel a scheduled invoice by schedule id
		 */
		post: operations['cancel-invoice-schedule']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/invoices/text2pay': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Create & Send
		 * @description API to create or update a text2pay invoice
		 */
		post: operations['text2pay-invoice']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/invoices/generate-invoice-number': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Generate Invoice Number
		 * @description Get the next invoice number for the given location
		 */
		get: operations['generate-invoice-number']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/invoices/{invoiceId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get invoice
		 * @description API to get invoice by invoice id
		 */
		get: operations['get-invoice']
		/**
		 * Update invoice
		 * @description API to update invoice by invoice id
		 */
		put: operations['update-invoice']
		post?: never
		/**
		 * Delete invoice
		 * @description API to delete invoice by invoice id
		 */
		delete: operations['delete-invoice']
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/invoices/{invoiceId}/void': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Void invoice
		 * @description API to delete invoice by invoice id
		 */
		post: operations['void-invoice']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/invoices/{invoiceId}/send': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Send invoice
		 * @description API to send invoice by invoice id
		 */
		post: operations['send-invoice']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/invoices/{invoiceId}/record-payment': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Record a manual payment for an invoice
		 * @description API to record manual payment for an invoice by invoice id
		 */
		post: operations['record-invoice']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/invoices/': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * List invoices
		 * @description API to get list of invoices
		 */
		get: operations['list-invoices']
		put?: never
		/**
		 * Create Invoice
		 * @description API to create an invoice
		 */
		post: operations['create-invoice']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
}
export type webhooks = Record<string, never>
export type components = {
	schemas: {
		BadRequestDTO: {
			/** @example 400 */
			statusCode?: number
			/** @example Bad Request */
			message?: string
		}
		UnauthorizedDTO: {
			/** @example 401 */
			statusCode?: number
			/** @example Invalid token: access token is invalid */
			message?: string
			/** @example Unauthorized */
			error?: string
		}
		AddressDto: {
			/**
			 * @description Address Line 1
			 * @example 9931 Beechwood
			 */
			addressLine1?: string
			/**
			 * @description Address Line 2
			 * @example Beechwood
			 */
			addressLine2?: string
			/**
			 * @description City
			 * @example St. Houston
			 */
			city?: string
			/**
			 * @description State
			 * @example TX
			 */
			state?: string
			/**
			 * @description Country Code
			 * @example US
			 */
			countryCode?: string
			/**
			 * @description Postal Code
			 * @example 559-6993
			 */
			postalCode?: string
		}
		BusinessDetailsDto: {
			/**
			 * @description Business Logo URL
			 * @example https://example.com/logo.png
			 */
			logoUrl?: string
			/**
			 * @description Business Name
			 * @example ABC Corp.
			 */
			name?: string
			/**
			 * @description Business Phone Number
			 * @example +1-214-559-6993
			 */
			phoneNo?: string
			/**
			 * @description Business Address
			 * @example 9931 Beechwood, TX
			 */
			address?: components['schemas']['AddressDto']
			/**
			 * @description Business Website Link
			 * @example wwww.example.com
			 */
			website?: string
			/** @description Custom Values */
			customValues?: string[]
		}
		ItemTaxDto: {
			_id: string
			name: string
			rate: number
			/** @enum {string} */
			calculation: 'exclusive'
			description?: string
			taxId?: string
		}
		InvoiceItemDto: {
			/**
			 * @description Invoice Item Name
			 * @example ABC Product
			 */
			name: string
			/**
			 * @description Invoice descriptions
			 * @example ABC Corp.
			 */
			description?: string
			/**
			 * @description Product Id
			 * @example 6578278e879ad2646715ba9c
			 */
			productId?: string
			/**
			 * @description Price Id
			 * @example 6578278e879ad2646715ba9c
			 */
			priceId?: string
			/**
			 * @description Currency
			 * @example USD
			 */
			currency: string
			/**
			 * @description Product amount
			 * @example 999
			 */
			amount: number
			/**
			 * @description Product Quantity
			 * @example 1
			 */
			qty: number
			/** @description Tax */
			taxes?: components['schemas']['ItemTaxDto'][]
		}
		DiscountDto: {
			/**
			 * @description Discount Value
			 * @default 0
			 * @example 10
			 */
			value: number
			/**
			 * @description Discount type
			 * @default percentage
			 * @example percentage
			 * @enum {string}
			 */
			type: 'percentage' | 'fixed'
		}
		CreateInvoiceTemplateDto: {
			/**
			 * @description location Id / company Id based on altType
			 * @example 6578278e879ad2646715ba9c
			 */
			altId: string
			/**
			 * @description Alt Type
			 * @example location
			 * @enum {string}
			 */
			altType: 'location'
			internal?: boolean
			/**
			 * @description Name of the template
			 * @example New Template
			 */
			name: string
			businessDetails: components['schemas']['BusinessDetailsDto']
			currency: string
			items: components['schemas']['InvoiceItemDto'][]
			discount?: components['schemas']['DiscountDto']
			termsNotes?: string
			/**
			 * @description Template title
			 * @example New Template
			 */
			title?: string
		}
		CreateInvoiceTemplateResponseDto: {
			/**
			 * @description Template Id
			 * @example 6578278e879ad2646715ba9c
			 */
			_id: string
			/**
			 * @description Location Id or Agency Id
			 * @example 6578278e879ad2646715ba9c
			 */
			altId: string
			/** @enum {string} */
			altType: 'location'
			/**
			 * @description Name of the Template
			 * @example New Template
			 */
			name: string
			/**
			 * @description Business Details
			 * @example {
			 *       "name": "Alex",
			 *       "address": {
			 *         "addressLine1": "9931 Beechwood",
			 *         "city": "St. Houston",
			 *         "state": "TX",
			 *         "countryCode": "USA",
			 *         "postalCode": "559-6993"
			 *       },
			 *       "phoneNo": "+1-214-559-6993",
			 *       "website": "www.example.com"
			 *     }
			 */
			businessDetails: components['schemas']['BusinessDetailsDto']
			/**
			 * @description Currency
			 * @example USD
			 */
			currency: string
			/**
			 * @description Discount
			 * @example {
			 *       "type": "percentage",
			 *       "value": 0
			 *     }
			 */
			discount?: components['schemas']['DiscountDto']
			/**
			 * @description Invoice Items
			 * @example [
			 *       {
			 *         "taxes": [],
			 *         "_id": "c6tZZU0rJBf30ZXx9Gli",
			 *         "productId": "c6tZZU0rJBf30ZXx9Gli",
			 *         "priceId": "c6tZZU0rJBf30ZXx9Gli",
			 *         "currency": "USD",
			 *         "name": "Macbook Pro",
			 *         "qty": 1,
			 *         "amount": 999
			 *       }
			 *     ]
			 */
			items: string[]
			/**
			 * @description Total Amount
			 * @example 999
			 */
			total: number
			/**
			 * @description created at
			 * @example 2023-12-12T09:27:42.355Z
			 */
			createdAt: string
			/**
			 * @description updated at
			 * @example 2023-12-12T09:27:42.355Z
			 */
			updatedAt: string
		}
		UnprocessableDTO: {
			/** @example 422 */
			statusCode?: number
			/** @example [
			 *       "Unprocessable Entity"
			 *     ] */
			message?: string[]
			/** @example Unprocessable Entity */
			error?: string
		}
		GetTemplateResponseDto: {
			/**
			 * @description Template Id
			 * @example 6578278e879ad2646715ba9c
			 */
			_id: string
			/**
			 * @description Location Id or Agency Id
			 * @example 6578278e879ad2646715ba9c
			 */
			altId: string
			/** @enum {string} */
			altType: 'location'
			/**
			 * @description Name of the Template
			 * @example New Template
			 */
			name: string
			/**
			 * @description Business Details
			 * @example {
			 *       "name": "Alex",
			 *       "address": {
			 *         "addressLine1": "9931 Beechwood",
			 *         "city": "St. Houston",
			 *         "state": "TX",
			 *         "countryCode": "USA",
			 *         "postalCode": "559-6993"
			 *       },
			 *       "phoneNo": "+1-214-559-6993",
			 *       "website": "www.example.com"
			 *     }
			 */
			businessDetails: components['schemas']['BusinessDetailsDto']
			/**
			 * @description Currency
			 * @example USD
			 */
			currency: string
			/**
			 * @description Discount
			 * @example {
			 *       "type": "percentage",
			 *       "value": 0
			 *     }
			 */
			discount?: components['schemas']['DiscountDto']
			/**
			 * @description Invoice Items
			 * @example [
			 *       {
			 *         "taxes": [],
			 *         "_id": "c6tZZU0rJBf30ZXx9Gli",
			 *         "productId": "c6tZZU0rJBf30ZXx9Gli",
			 *         "priceId": "c6tZZU0rJBf30ZXx9Gli",
			 *         "currency": "USD",
			 *         "name": "Macbook Pro",
			 *         "qty": 1,
			 *         "amount": 999
			 *       }
			 *     ]
			 */
			items: string[]
			/**
			 * @description Total Amount
			 * @example 999
			 */
			total: number
			/**
			 * @description created at
			 * @example 2023-12-12T09:27:42.355Z
			 */
			createdAt: string
			/**
			 * @description updated at
			 * @example 2023-12-12T09:27:42.355Z
			 */
			updatedAt: string
		}
		ListTemplatesResponseDto: {
			data: components['schemas']['GetTemplateResponseDto'][]
			/**
			 * @description Total number of Templates
			 * @example 100
			 */
			totalCount: number
		}
		UpdateInvoiceTemplateDto: {
			/**
			 * @description location Id / company Id based on altType
			 * @example 6578278e879ad2646715ba9c
			 */
			altId: string
			/**
			 * @description Alt Type
			 * @example location
			 * @enum {string}
			 */
			altType: 'location'
			internal?: boolean
			/**
			 * @description Name of the template
			 * @example New Template
			 */
			name: string
			businessDetails: components['schemas']['BusinessDetailsDto']
			currency: string
			items: components['schemas']['InvoiceItemDto'][]
			discount?: components['schemas']['DiscountDto']
			termsNotes?: string
			/**
			 * @description Template title
			 * @example New Template
			 */
			title?: string
		}
		UpdateInvoiceTemplateResponseDto: {
			/**
			 * @description Template Id
			 * @example 6578278e879ad2646715ba9c
			 */
			_id: string
			/**
			 * @description Location Id or Agency Id
			 * @example 6578278e879ad2646715ba9c
			 */
			altId: string
			/** @enum {string} */
			altType: 'location'
			/**
			 * @description Name of the Template
			 * @example New Template
			 */
			name: string
			/**
			 * @description Business Details
			 * @example {
			 *       "name": "Alex",
			 *       "address": {
			 *         "addressLine1": "9931 Beechwood",
			 *         "city": "St. Houston",
			 *         "state": "TX",
			 *         "countryCode": "USA",
			 *         "postalCode": "559-6993"
			 *       },
			 *       "phoneNo": "+1-214-559-6993",
			 *       "website": "www.example.com"
			 *     }
			 */
			businessDetails: components['schemas']['BusinessDetailsDto']
			/**
			 * @description Currency
			 * @example USD
			 */
			currency: string
			/**
			 * @description Discount
			 * @example {
			 *       "type": "percentage",
			 *       "value": 0
			 *     }
			 */
			discount?: components['schemas']['DiscountDto']
			/**
			 * @description Invoice Items
			 * @example [
			 *       {
			 *         "taxes": [],
			 *         "_id": "c6tZZU0rJBf30ZXx9Gli",
			 *         "productId": "c6tZZU0rJBf30ZXx9Gli",
			 *         "priceId": "c6tZZU0rJBf30ZXx9Gli",
			 *         "currency": "USD",
			 *         "name": "Macbook Pro",
			 *         "qty": 1,
			 *         "amount": 999
			 *       }
			 *     ]
			 */
			items: string[]
			/**
			 * @description Total Amount
			 * @example 999
			 */
			total: number
			/**
			 * @description created at
			 * @example 2023-12-12T09:27:42.355Z
			 */
			createdAt: string
			/**
			 * @description updated at
			 * @example 2023-12-12T09:27:42.355Z
			 */
			updatedAt: string
		}
		DeleteInvoiceTemplateResponseDto: {
			/**
			 * @description success
			 * @example true
			 */
			success: boolean
		}
		AdditionalEmailsDto: {
			/** @example alex@example.com */
			email: string
		}
		ContactDetailsDto: {
			/**
			 * @description Contact ID
			 * @example 6578278e879ad2646715ba9c
			 */
			id: string
			/**
			 * @description Contact Name
			 * @example Alex
			 */
			name: string
			/**
			 * @description Contact Phone Number
			 * @example +1-214-559-6993
			 */
			phoneNo?: string
			/**
			 * @description Contact Email
			 * @example alex@example.com
			 */
			email?: string
			/** @description Secondary email addresses for the contact to be saved */
			additionalEmails?: components['schemas']['AdditionalEmailsDto'][]
			/**
			 * @description Contact Company Name
			 * @example ABC Corp.
			 */
			companyName?: string
			address?: components['schemas']['AddressDto']
			/** @description Custom Values */
			customFields?: string[]
		}
		CustomRRuleOptionsDto: {
			/**
			 * @example monthly
			 * @enum {string}
			 */
			intervalType:
				| 'yearly'
				| 'monthly'
				| 'weekly'
				| 'daily'
				| 'hourly'
				| 'minutely'
				| 'secondly'
			/** @example 2 */
			interval: number
			/**
			 * @description Start date in YYYY-MM-DD format
			 * @example 2023-01-01
			 */
			startDate: string
			/**
			 * @description Start time in HH:mm:ss format
			 * @example 20:45:00
			 */
			startTime?: string
			/**
			 * @description End date in YYYY-MM-DD format
			 * @example 2029-11-01
			 */
			endDate?: string
			/**
			 * @description End time in HH:mm:ss format
			 * @example 18:45:00
			 */
			endTime?: string
			/**
			 * @description -1, 1, 2, 3, ..., 27, 28
			 * @example 15
			 */
			dayOfMonth?: number
			/**
			 * @example mo
			 * @enum {string}
			 */
			dayOfWeek?: 'mo' | 'tu' | 'we' | 'th' | 'fr' | 'sa' | 'su'
			/**
			 * @description -1, 1, 2, 3, 4
			 * @example -1
			 */
			numOfWeek?: number
			/**
			 * @example jan
			 * @enum {string}
			 */
			monthOfYear?:
				| 'jan'
				| 'feb'
				| 'mar'
				| 'apr'
				| 'may'
				| 'jun'
				| 'jul'
				| 'aug'
				| 'sep'
				| 'oct'
				| 'nov'
				| 'dec'
			/**
			 * @description Max number of task executions
			 * @example 10
			 */
			count?: number
			/**
			 * @description Execute task number of days before
			 * @example 5
			 */
			daysBefore?: number
		}
		ScheduleOptionsDto: {
			executeAt?: string
			rrule?: components['schemas']['CustomRRuleOptionsDto']
		}
		CreateInvoiceScheduleDto: {
			/**
			 * @description location Id / company Id based on altType
			 * @example 6578278e879ad2646715ba9c
			 */
			altId: string
			/**
			 * @description Alt Type
			 * @example location
			 * @enum {string}
			 */
			altType: 'location'
			name: string
			contactDetails: components['schemas']['ContactDetailsDto']
			schedule: components['schemas']['ScheduleOptionsDto']
			liveMode: boolean
			businessDetails: components['schemas']['BusinessDetailsDto']
			currency: string
			items: components['schemas']['InvoiceItemDto'][]
			discount: components['schemas']['DiscountDto']
			termsNotes?: string
			title?: string
		}
		DefaultInvoiceResponseDto: {
			/**
			 * @description Invoice Id
			 * @example 6578278e879ad2646715ba9c
			 */
			_id: string
			/**
			 * @description Invoice Status
			 * @example draft
			 * @enum {string}
			 */
			status:
				| 'draft'
				| 'sent'
				| 'payment_processing'
				| 'paid'
				| 'void'
				| 'partially_paid'
			/**
			 * @description Live Mode
			 * @example false
			 */
			liveMode: boolean
			/**
			 * @description Amount Paid
			 * @example 0
			 */
			amountPaid: number
			/**
			 * @description Location Id or Agency Id
			 * @example 6578278e879ad2646715ba9c
			 */
			altId: string
			/** @enum {string} */
			altType: 'location'
			/**
			 * @description Name of the invoice
			 * @example New Invoice
			 */
			name: string
			/**
			 * @description Business Details
			 * @example {
			 *       "name": "Alex",
			 *       "address": {
			 *         "addressLine1": "9931 Beechwood",
			 *         "city": "St. Houston",
			 *         "state": "TX",
			 *         "countryCode": "USA",
			 *         "postalCode": "559-6993"
			 *       },
			 *       "phoneNo": "+1-214-559-6993",
			 *       "website": "www.example.com"
			 *     }
			 */
			businessDetails: components['schemas']['BusinessDetailsDto']
			/**
			 * @description Invoice Number
			 * @example 19
			 */
			invoiceNumber: number
			/**
			 * @description Currency
			 * @example USD
			 */
			currency: string
			/**
			 * @description Contact Details
			 * @example {
			 *       "id": "c6tZZU0rJBf30ZXx9Gli",
			 *       "phoneNo": "+1-214-559-6993",
			 *       "email": "alex@example.com",
			 *       "customFields": [],
			 *       "name": "Alex",
			 *       "address": {
			 *         "countryCode": "US"
			 *       }
			 *     }
			 */
			contactDetails: components['schemas']['ContactDetailsDto']
			/**
			 * @description Issue date in YYYY-MM-DD format
			 * @example 2023-01-01
			 */
			issueDate: string
			/**
			 * @description Due date in YYYY-MM-DD format
			 * @example 2023-01-01
			 */
			dueDate: string
			/**
			 * @description Discount
			 * @example {
			 *       "type": "percentage",
			 *       "value": 0
			 *     }
			 */
			discount?: components['schemas']['DiscountDto']
			/**
			 * @description Invoice Items
			 * @example [
			 *       {
			 *         "taxes": [],
			 *         "_id": "c6tZZU0rJBf30ZXx9Gli",
			 *         "productId": "c6tZZU0rJBf30ZXx9Gli",
			 *         "priceId": "c6tZZU0rJBf30ZXx9Gli",
			 *         "currency": "USD",
			 *         "name": "Macbook Pro",
			 *         "qty": 1,
			 *         "amount": 999
			 *       }
			 *     ]
			 */
			invoiceItems: string[]
			/**
			 * @description Total Amount
			 * @example 999
			 */
			total: number
			/**
			 * @description Title
			 * @example INVOICE
			 */
			title: string
			/**
			 * @description Total Amount Due
			 * @example 999
			 */
			amountDue: number
			/**
			 * @description created at
			 * @example 2023-12-12T09:27:42.355Z
			 */
			createdAt: string
			/**
			 * @description updated at
			 * @example 2023-12-12T09:27:42.355Z
			 */
			updatedAt: string
		}
		CreateInvoiceScheduleResponseDto: {
			/**
			 * @description Schedule Id
			 * @example 6578278e879ad2646715ba9c
			 */
			_id: string
			/**
			 * @description Schedule Status
			 * @example draft
			 */
			status: Record<string, never>
			/**
			 * @description Live Mode
			 * @example false
			 */
			liveMode: boolean
			/**
			 * @description Location Id or Agency Id
			 * @example 6578278e879ad2646715ba9c
			 */
			altId: string
			/** @enum {string} */
			altType: 'location'
			/**
			 * @description Name of the invoice
			 * @example New Invoice
			 */
			name: string
			schedule?: components['schemas']['ScheduleOptionsDto']
			/** @description List of invoices */
			invoices: components['schemas']['DefaultInvoiceResponseDto'][]
			/**
			 * @description Business Details
			 * @example {
			 *       "name": "Alex",
			 *       "address": {
			 *         "addressLine1": "9931 Beechwood",
			 *         "city": "St. Houston",
			 *         "state": "TX",
			 *         "countryCode": "USA",
			 *         "postalCode": "559-6993"
			 *       },
			 *       "phoneNo": "+1-214-559-6993",
			 *       "website": "www.example.com"
			 *     }
			 */
			businessDetails: components['schemas']['BusinessDetailsDto']
			/**
			 * @description Currency
			 * @example USD
			 */
			currency: string
			/**
			 * @description Contact Details
			 * @example {
			 *       "id": "c6tZZU0rJBf30ZXx9Gli",
			 *       "phoneNo": "+1-214-559-6993",
			 *       "email": "alex@example.com",
			 *       "customFields": [],
			 *       "name": "Alex",
			 *       "address": {
			 *         "countryCode": "US"
			 *       }
			 *     }
			 */
			contactDetails: components['schemas']['ContactDetailsDto']
			/**
			 * @description Discount
			 * @example {
			 *       "type": "percentage",
			 *       "value": 0
			 *     }
			 */
			discount?: components['schemas']['DiscountDto']
			/**
			 * @description Invoice Items
			 * @example [
			 *       {
			 *         "taxes": [],
			 *         "_id": "c6tZZU0rJBf30ZXx9Gli",
			 *         "productId": "c6tZZU0rJBf30ZXx9Gli",
			 *         "priceId": "c6tZZU0rJBf30ZXx9Gli",
			 *         "currency": "USD",
			 *         "name": "Macbook Pro",
			 *         "qty": 1,
			 *         "amount": 999
			 *       }
			 *     ]
			 */
			items: string[]
			/**
			 * @description Total Amount
			 * @example 999
			 */
			total: number
			/**
			 * @description Title
			 * @example INVOICE
			 */
			title: string
			/**
			 * @description Terms notes
			 * @example Confidential
			 */
			termsNotes: string
			/**
			 * @description Compiled terms notes
			 * @example Confidential
			 */
			compiledTermsNotes: string
			/**
			 * @description created at
			 * @example 2023-12-12T09:27:42.355Z
			 */
			createdAt: string
			/**
			 * @description updated at
			 * @example 2023-12-12T09:27:42.355Z
			 */
			updatedAt: string
		}
		GetScheduleResponseDto: {
			/**
			 * @description Schedule Id
			 * @example 6578278e879ad2646715ba9c
			 */
			_id: string
			/**
			 * @description Schedule Status
			 * @example draft
			 */
			status: Record<string, never>
			/**
			 * @description Live Mode
			 * @example false
			 */
			liveMode: boolean
			/**
			 * @description Location Id or Agency Id
			 * @example 6578278e879ad2646715ba9c
			 */
			altId: string
			/** @enum {string} */
			altType: 'location'
			/**
			 * @description Name of the invoice
			 * @example New Invoice
			 */
			name: string
			schedule?: components['schemas']['ScheduleOptionsDto']
			/** @description List of invoices */
			invoices: components['schemas']['DefaultInvoiceResponseDto'][]
			/**
			 * @description Business Details
			 * @example {
			 *       "name": "Alex",
			 *       "address": {
			 *         "addressLine1": "9931 Beechwood",
			 *         "city": "St. Houston",
			 *         "state": "TX",
			 *         "countryCode": "USA",
			 *         "postalCode": "559-6993"
			 *       },
			 *       "phoneNo": "+1-214-559-6993",
			 *       "website": "www.example.com"
			 *     }
			 */
			businessDetails: components['schemas']['BusinessDetailsDto']
			/**
			 * @description Currency
			 * @example USD
			 */
			currency: string
			/**
			 * @description Contact Details
			 * @example {
			 *       "id": "c6tZZU0rJBf30ZXx9Gli",
			 *       "phoneNo": "+1-214-559-6993",
			 *       "email": "alex@example.com",
			 *       "customFields": [],
			 *       "name": "Alex",
			 *       "address": {
			 *         "countryCode": "US"
			 *       }
			 *     }
			 */
			contactDetails: components['schemas']['ContactDetailsDto']
			/**
			 * @description Discount
			 * @example {
			 *       "type": "percentage",
			 *       "value": 0
			 *     }
			 */
			discount?: components['schemas']['DiscountDto']
			/**
			 * @description Invoice Items
			 * @example [
			 *       {
			 *         "taxes": [],
			 *         "_id": "c6tZZU0rJBf30ZXx9Gli",
			 *         "productId": "c6tZZU0rJBf30ZXx9Gli",
			 *         "priceId": "c6tZZU0rJBf30ZXx9Gli",
			 *         "currency": "USD",
			 *         "name": "Macbook Pro",
			 *         "qty": 1,
			 *         "amount": 999
			 *       }
			 *     ]
			 */
			items: string[]
			/**
			 * @description Total Amount
			 * @example 999
			 */
			total: number
			/**
			 * @description Title
			 * @example INVOICE
			 */
			title: string
			/**
			 * @description Terms notes
			 * @example Confidential
			 */
			termsNotes: string
			/**
			 * @description Compiled terms notes
			 * @example Confidential
			 */
			compiledTermsNotes: string
			/**
			 * @description created at
			 * @example 2023-12-12T09:27:42.355Z
			 */
			createdAt: string
			/**
			 * @description updated at
			 * @example 2023-12-12T09:27:42.355Z
			 */
			updatedAt: string
		}
		ListSchedulesResponseDto: {
			schedules: components['schemas']['GetScheduleResponseDto'][]
			/**
			 * @description Total number of Schedules
			 * @example 100
			 */
			total: number
		}
		UpdateInvoiceScheduleDto: {
			/**
			 * @description location Id / company Id based on altType
			 * @example 6578278e879ad2646715ba9c
			 */
			altId: string
			/**
			 * @description Alt Type
			 * @example location
			 * @enum {string}
			 */
			altType: 'location'
			name: string
			contactDetails: components['schemas']['ContactDetailsDto']
			schedule: components['schemas']['ScheduleOptionsDto']
			liveMode: boolean
			businessDetails: components['schemas']['BusinessDetailsDto']
			currency: string
			items: components['schemas']['InvoiceItemDto'][]
			discount: components['schemas']['DiscountDto']
			termsNotes?: string
			title?: string
		}
		UpdateInvoiceScheduleResponseDto: {
			/**
			 * @description Schedule Id
			 * @example 6578278e879ad2646715ba9c
			 */
			_id: string
			/**
			 * @description Schedule Status
			 * @example draft
			 */
			status: Record<string, never>
			/**
			 * @description Live Mode
			 * @example false
			 */
			liveMode: boolean
			/**
			 * @description Location Id or Agency Id
			 * @example 6578278e879ad2646715ba9c
			 */
			altId: string
			/** @enum {string} */
			altType: 'location'
			/**
			 * @description Name of the invoice
			 * @example New Invoice
			 */
			name: string
			schedule?: components['schemas']['ScheduleOptionsDto']
			/** @description List of invoices */
			invoices: components['schemas']['DefaultInvoiceResponseDto'][]
			/**
			 * @description Business Details
			 * @example {
			 *       "name": "Alex",
			 *       "address": {
			 *         "addressLine1": "9931 Beechwood",
			 *         "city": "St. Houston",
			 *         "state": "TX",
			 *         "countryCode": "USA",
			 *         "postalCode": "559-6993"
			 *       },
			 *       "phoneNo": "+1-214-559-6993",
			 *       "website": "www.example.com"
			 *     }
			 */
			businessDetails: components['schemas']['BusinessDetailsDto']
			/**
			 * @description Currency
			 * @example USD
			 */
			currency: string
			/**
			 * @description Contact Details
			 * @example {
			 *       "id": "c6tZZU0rJBf30ZXx9Gli",
			 *       "phoneNo": "+1-214-559-6993",
			 *       "email": "alex@example.com",
			 *       "customFields": [],
			 *       "name": "Alex",
			 *       "address": {
			 *         "countryCode": "US"
			 *       }
			 *     }
			 */
			contactDetails: components['schemas']['ContactDetailsDto']
			/**
			 * @description Discount
			 * @example {
			 *       "type": "percentage",
			 *       "value": 0
			 *     }
			 */
			discount?: components['schemas']['DiscountDto']
			/**
			 * @description Invoice Items
			 * @example [
			 *       {
			 *         "taxes": [],
			 *         "_id": "c6tZZU0rJBf30ZXx9Gli",
			 *         "productId": "c6tZZU0rJBf30ZXx9Gli",
			 *         "priceId": "c6tZZU0rJBf30ZXx9Gli",
			 *         "currency": "USD",
			 *         "name": "Macbook Pro",
			 *         "qty": 1,
			 *         "amount": 999
			 *       }
			 *     ]
			 */
			items: string[]
			/**
			 * @description Total Amount
			 * @example 999
			 */
			total: number
			/**
			 * @description Title
			 * @example INVOICE
			 */
			title: string
			/**
			 * @description Terms notes
			 * @example Confidential
			 */
			termsNotes: string
			/**
			 * @description Compiled terms notes
			 * @example Confidential
			 */
			compiledTermsNotes: string
			/**
			 * @description created at
			 * @example 2023-12-12T09:27:42.355Z
			 */
			createdAt: string
			/**
			 * @description updated at
			 * @example 2023-12-12T09:27:42.355Z
			 */
			updatedAt: string
		}
		DeleteInvoiceScheduleResponseDto: {
			/**
			 * @description success
			 * @example true
			 */
			success: boolean
		}
		CardDto: {
			brand: string
			last4: string
		}
		USBankAccountDto: {
			bank_name: string
			last4: string
		}
		AutoPaymentDetailsDto: {
			enable: boolean
			type?: string
			paymentMethodId?: string
			customerId?: string
			card?: components['schemas']['CardDto']
			usBankAccount?: components['schemas']['USBankAccountDto']
		}
		ScheduleInvoiceScheduleDto: {
			/**
			 * @description location Id / company Id based on altType
			 * @example 6578278e879ad2646715ba9c
			 */
			altId: string
			/**
			 * @description Alt Type
			 * @example location
			 * @enum {string}
			 */
			altType: 'location'
			liveMode: boolean
			/** @description auto-payment configuration */
			autoPayment?: components['schemas']['AutoPaymentDetailsDto']
		}
		ScheduleInvoiceScheduleResponseDto: {
			/**
			 * @description Schedule Id
			 * @example 6578278e879ad2646715ba9c
			 */
			_id: string
			/**
			 * @description Schedule Status
			 * @example draft
			 */
			status: Record<string, never>
			/**
			 * @description Live Mode
			 * @example false
			 */
			liveMode: boolean
			/**
			 * @description Location Id or Agency Id
			 * @example 6578278e879ad2646715ba9c
			 */
			altId: string
			/** @enum {string} */
			altType: 'location'
			/**
			 * @description Name of the invoice
			 * @example New Invoice
			 */
			name: string
			schedule?: components['schemas']['ScheduleOptionsDto']
			/** @description List of invoices */
			invoices: components['schemas']['DefaultInvoiceResponseDto'][]
			/**
			 * @description Business Details
			 * @example {
			 *       "name": "Alex",
			 *       "address": {
			 *         "addressLine1": "9931 Beechwood",
			 *         "city": "St. Houston",
			 *         "state": "TX",
			 *         "countryCode": "USA",
			 *         "postalCode": "559-6993"
			 *       },
			 *       "phoneNo": "+1-214-559-6993",
			 *       "website": "www.example.com"
			 *     }
			 */
			businessDetails: components['schemas']['BusinessDetailsDto']
			/**
			 * @description Currency
			 * @example USD
			 */
			currency: string
			/**
			 * @description Contact Details
			 * @example {
			 *       "id": "c6tZZU0rJBf30ZXx9Gli",
			 *       "phoneNo": "+1-214-559-6993",
			 *       "email": "alex@example.com",
			 *       "customFields": [],
			 *       "name": "Alex",
			 *       "address": {
			 *         "countryCode": "US"
			 *       }
			 *     }
			 */
			contactDetails: components['schemas']['ContactDetailsDto']
			/**
			 * @description Discount
			 * @example {
			 *       "type": "percentage",
			 *       "value": 0
			 *     }
			 */
			discount?: components['schemas']['DiscountDto']
			/**
			 * @description Invoice Items
			 * @example [
			 *       {
			 *         "taxes": [],
			 *         "_id": "c6tZZU0rJBf30ZXx9Gli",
			 *         "productId": "c6tZZU0rJBf30ZXx9Gli",
			 *         "priceId": "c6tZZU0rJBf30ZXx9Gli",
			 *         "currency": "USD",
			 *         "name": "Macbook Pro",
			 *         "qty": 1,
			 *         "amount": 999
			 *       }
			 *     ]
			 */
			items: string[]
			/**
			 * @description Total Amount
			 * @example 999
			 */
			total: number
			/**
			 * @description Title
			 * @example INVOICE
			 */
			title: string
			/**
			 * @description Terms notes
			 * @example Confidential
			 */
			termsNotes: string
			/**
			 * @description Compiled terms notes
			 * @example Confidential
			 */
			compiledTermsNotes: string
			/**
			 * @description created at
			 * @example 2023-12-12T09:27:42.355Z
			 */
			createdAt: string
			/**
			 * @description updated at
			 * @example 2023-12-12T09:27:42.355Z
			 */
			updatedAt: string
		}
		AutoPaymentScheduleDto: {
			/**
			 * @description location Id / company Id based on altType
			 * @example 6578278e879ad2646715ba9c
			 */
			altId: string
			/**
			 * @description Alt Type
			 * @example location
			 * @enum {string}
			 */
			altType: 'location'
			id: string
			/** @description auto-payment configuration */
			autoPayment: components['schemas']['AutoPaymentDetailsDto']
		}
		AutoPaymentInvoiceScheduleResponseDto: {
			/**
			 * @description Schedule Id
			 * @example 6578278e879ad2646715ba9c
			 */
			_id: string
			/**
			 * @description Schedule Status
			 * @example draft
			 */
			status: Record<string, never>
			/**
			 * @description Live Mode
			 * @example false
			 */
			liveMode: boolean
			/**
			 * @description Location Id or Agency Id
			 * @example 6578278e879ad2646715ba9c
			 */
			altId: string
			/** @enum {string} */
			altType: 'location'
			/**
			 * @description Name of the invoice
			 * @example New Invoice
			 */
			name: string
			schedule?: components['schemas']['ScheduleOptionsDto']
			/** @description List of invoices */
			invoices: components['schemas']['DefaultInvoiceResponseDto'][]
			/**
			 * @description Business Details
			 * @example {
			 *       "name": "Alex",
			 *       "address": {
			 *         "addressLine1": "9931 Beechwood",
			 *         "city": "St. Houston",
			 *         "state": "TX",
			 *         "countryCode": "USA",
			 *         "postalCode": "559-6993"
			 *       },
			 *       "phoneNo": "+1-214-559-6993",
			 *       "website": "www.example.com"
			 *     }
			 */
			businessDetails: components['schemas']['BusinessDetailsDto']
			/**
			 * @description Currency
			 * @example USD
			 */
			currency: string
			/**
			 * @description Contact Details
			 * @example {
			 *       "id": "c6tZZU0rJBf30ZXx9Gli",
			 *       "phoneNo": "+1-214-559-6993",
			 *       "email": "alex@example.com",
			 *       "customFields": [],
			 *       "name": "Alex",
			 *       "address": {
			 *         "countryCode": "US"
			 *       }
			 *     }
			 */
			contactDetails: components['schemas']['ContactDetailsDto']
			/**
			 * @description Discount
			 * @example {
			 *       "type": "percentage",
			 *       "value": 0
			 *     }
			 */
			discount?: components['schemas']['DiscountDto']
			/**
			 * @description Invoice Items
			 * @example [
			 *       {
			 *         "taxes": [],
			 *         "_id": "c6tZZU0rJBf30ZXx9Gli",
			 *         "productId": "c6tZZU0rJBf30ZXx9Gli",
			 *         "priceId": "c6tZZU0rJBf30ZXx9Gli",
			 *         "currency": "USD",
			 *         "name": "Macbook Pro",
			 *         "qty": 1,
			 *         "amount": 999
			 *       }
			 *     ]
			 */
			items: string[]
			/**
			 * @description Total Amount
			 * @example 999
			 */
			total: number
			/**
			 * @description Title
			 * @example INVOICE
			 */
			title: string
			/**
			 * @description Terms notes
			 * @example Confidential
			 */
			termsNotes: string
			/**
			 * @description Compiled terms notes
			 * @example Confidential
			 */
			compiledTermsNotes: string
			/**
			 * @description created at
			 * @example 2023-12-12T09:27:42.355Z
			 */
			createdAt: string
			/**
			 * @description updated at
			 * @example 2023-12-12T09:27:42.355Z
			 */
			updatedAt: string
		}
		CancelInvoiceScheduleDto: {
			/**
			 * @description location Id / company Id based on altType
			 * @example 6578278e879ad2646715ba9c
			 */
			altId: string
			/**
			 * @description Alt Type
			 * @example location
			 * @enum {string}
			 */
			altType: 'location'
		}
		CancelInvoiceScheduleResponseDto: {
			/**
			 * @description Schedule Id
			 * @example 6578278e879ad2646715ba9c
			 */
			_id: string
			/**
			 * @description Schedule Status
			 * @example draft
			 */
			status: Record<string, never>
			/**
			 * @description Live Mode
			 * @example false
			 */
			liveMode: boolean
			/**
			 * @description Location Id or Agency Id
			 * @example 6578278e879ad2646715ba9c
			 */
			altId: string
			/** @enum {string} */
			altType: 'location'
			/**
			 * @description Name of the invoice
			 * @example New Invoice
			 */
			name: string
			schedule?: components['schemas']['ScheduleOptionsDto']
			/** @description List of invoices */
			invoices: components['schemas']['DefaultInvoiceResponseDto'][]
			/**
			 * @description Business Details
			 * @example {
			 *       "name": "Alex",
			 *       "address": {
			 *         "addressLine1": "9931 Beechwood",
			 *         "city": "St. Houston",
			 *         "state": "TX",
			 *         "countryCode": "USA",
			 *         "postalCode": "559-6993"
			 *       },
			 *       "phoneNo": "+1-214-559-6993",
			 *       "website": "www.example.com"
			 *     }
			 */
			businessDetails: components['schemas']['BusinessDetailsDto']
			/**
			 * @description Currency
			 * @example USD
			 */
			currency: string
			/**
			 * @description Contact Details
			 * @example {
			 *       "id": "c6tZZU0rJBf30ZXx9Gli",
			 *       "phoneNo": "+1-214-559-6993",
			 *       "email": "alex@example.com",
			 *       "customFields": [],
			 *       "name": "Alex",
			 *       "address": {
			 *         "countryCode": "US"
			 *       }
			 *     }
			 */
			contactDetails: components['schemas']['ContactDetailsDto']
			/**
			 * @description Discount
			 * @example {
			 *       "type": "percentage",
			 *       "value": 0
			 *     }
			 */
			discount?: components['schemas']['DiscountDto']
			/**
			 * @description Invoice Items
			 * @example [
			 *       {
			 *         "taxes": [],
			 *         "_id": "c6tZZU0rJBf30ZXx9Gli",
			 *         "productId": "c6tZZU0rJBf30ZXx9Gli",
			 *         "priceId": "c6tZZU0rJBf30ZXx9Gli",
			 *         "currency": "USD",
			 *         "name": "Macbook Pro",
			 *         "qty": 1,
			 *         "amount": 999
			 *       }
			 *     ]
			 */
			items: string[]
			/**
			 * @description Total Amount
			 * @example 999
			 */
			total: number
			/**
			 * @description Title
			 * @example INVOICE
			 */
			title: string
			/**
			 * @description Terms notes
			 * @example Confidential
			 */
			termsNotes: string
			/**
			 * @description Compiled terms notes
			 * @example Confidential
			 */
			compiledTermsNotes: string
			/**
			 * @description created at
			 * @example 2023-12-12T09:27:42.355Z
			 */
			createdAt: string
			/**
			 * @description updated at
			 * @example 2023-12-12T09:27:42.355Z
			 */
			updatedAt: string
		}
		SentToDto: {
			/**
			 * @description Email Address
			 * @example [
			 *       "alex@example.com"
			 *     ]
			 */
			email: string[]
			/**
			 * @description cc to be kept in any sent out emails
			 * @example [
			 *       "alex@example.com"
			 *     ]
			 */
			emailCc?: string[]
			/**
			 * @description bcc to be kept in any sent out emails
			 * @example [
			 *       "alex@example.com"
			 *     ]
			 */
			emailBcc?: string[]
			/**
			 * @description Contact Phone Number
			 * @example [
			 *       "+1-214-559-6993"
			 *     ]
			 */
			phoneNo?: string[]
		}
		Text2PayDto: {
			/**
			 * @description location Id / company Id based on altType
			 * @example 6578278e879ad2646715ba9c
			 */
			altId: string
			/**
			 * @description Alt Type
			 * @example location
			 * @enum {string}
			 */
			altType: 'location'
			/**
			 * @description Invoice Name
			 * @example New Invoice
			 */
			name: string
			businessDetails: components['schemas']['BusinessDetailsDto']
			/**
			 * @description Currency code
			 * @example USD
			 */
			currency: string
			/** @description An array of items for the invoice. */
			items: components['schemas']['InvoiceItemDto'][]
			/**
			 * @description Terms notes, Also supports HTML markups
			 * @example <p>This is a default terms.</p>
			 */
			termsNotes?: string
			/**
			 * @description Title for the invoice
			 * @example INVOICE
			 */
			title?: string
			/** @description Contact information to send the invoice to */
			contactDetails: components['schemas']['ContactDetailsDto']
			/**
			 * @description Invoice Number
			 * @example 1001
			 */
			invoiceNumber?: string
			/**
			 * @description Issue date in YYYY-MM-DD format
			 * @example 2023-01-01
			 */
			issueDate: string
			/**
			 * @description Due date in YYYY-MM-DD format
			 * @example 2023-01-14
			 */
			dueDate?: string
			sentTo: components['schemas']['SentToDto']
			liveMode: boolean
			/** @description id of invoice to update. If skipped, a new invoice will be created */
			id?: string
			/**
			 * @description include terms & notes with receipts
			 * @example true
			 */
			includeTermsNote?: boolean
			/**
			 * @description create invoice in draft mode or send mode
			 * @example draft
			 * @enum {string}
			 */
			action: 'draft' | 'send'
			/** @description id of user generating invoice */
			userId: string
			discount?: components['schemas']['DiscountDto']
		}
		Text2PayInvoiceResponseDto: {
			invoice: components['schemas']['DefaultInvoiceResponseDto']
			/** @description preview url of generated invoice */
			invoiceUrl: string
		}
		GenerateInvoiceNumberResponseDto: {
			/**
			 * @description Invoice Number
			 * @example 19
			 */
			invoiceNumber?: number
		}
		CreateInvoiceDto: {
			/**
			 * @description location Id / company Id based on altType
			 * @example 6578278e879ad2646715ba9c
			 */
			altId: string
			/**
			 * @description Alt Type
			 * @example location
			 * @enum {string}
			 */
			altType: 'location'
			/**
			 * @description Invoice Name
			 * @example New Invoice
			 */
			name: string
			businessDetails: components['schemas']['BusinessDetailsDto']
			/**
			 * @description Currency code
			 * @example USD
			 */
			currency: string
			/** @description An array of items for the invoice. */
			items: components['schemas']['InvoiceItemDto'][]
			discount: components['schemas']['DiscountDto']
			/**
			 * @description Terms notes, Also supports HTML markups
			 * @example <p>This is a default terms.</p>
			 */
			termsNotes?: string
			/**
			 * @description Title for the invoice
			 * @example INVOICE
			 */
			title?: string
			/** @description Contact information to send the invoice to */
			contactDetails: components['schemas']['ContactDetailsDto']
			/**
			 * @description Invoice Number
			 * @example 1001
			 */
			invoiceNumber?: string
			/**
			 * @description Issue date in YYYY-MM-DD format
			 * @example 2023-01-01
			 */
			issueDate: string
			/**
			 * @description Due date in YYYY-MM-DD format
			 * @example 2023-01-14
			 */
			dueDate?: string
			sentTo: components['schemas']['SentToDto']
			liveMode: boolean
		}
		OldCreateInvoiceDTO: Record<string, never>
		CreateInvoiceResponseDto: {
			/**
			 * @description Invoice Id
			 * @example 6578278e879ad2646715ba9c
			 */
			_id: string
			/**
			 * @description Invoice Status
			 * @example draft
			 * @enum {string}
			 */
			status:
				| 'draft'
				| 'sent'
				| 'payment_processing'
				| 'paid'
				| 'void'
				| 'partially_paid'
			/**
			 * @description Live Mode
			 * @example false
			 */
			liveMode: boolean
			/**
			 * @description Amount Paid
			 * @example 0
			 */
			amountPaid: number
			/**
			 * @description Location Id or Agency Id
			 * @example 6578278e879ad2646715ba9c
			 */
			altId: string
			/** @enum {string} */
			altType: 'location'
			/**
			 * @description Name of the invoice
			 * @example New Invoice
			 */
			name: string
			/**
			 * @description Business Details
			 * @example {
			 *       "name": "Alex",
			 *       "address": {
			 *         "addressLine1": "9931 Beechwood",
			 *         "city": "St. Houston",
			 *         "state": "TX",
			 *         "countryCode": "USA",
			 *         "postalCode": "559-6993"
			 *       },
			 *       "phoneNo": "+1-214-559-6993",
			 *       "website": "www.example.com"
			 *     }
			 */
			businessDetails: components['schemas']['BusinessDetailsDto']
			/**
			 * @description Invoice Number
			 * @example 19
			 */
			invoiceNumber: number
			/**
			 * @description Currency
			 * @example USD
			 */
			currency: string
			/**
			 * @description Contact Details
			 * @example {
			 *       "id": "c6tZZU0rJBf30ZXx9Gli",
			 *       "phoneNo": "+1-214-559-6993",
			 *       "email": "alex@example.com",
			 *       "customFields": [],
			 *       "name": "Alex",
			 *       "address": {
			 *         "countryCode": "US"
			 *       }
			 *     }
			 */
			contactDetails: components['schemas']['ContactDetailsDto']
			/**
			 * @description Issue date in YYYY-MM-DD format
			 * @example 2023-01-01
			 */
			issueDate: string
			/**
			 * @description Due date in YYYY-MM-DD format
			 * @example 2023-01-01
			 */
			dueDate: string
			/**
			 * @description Discount
			 * @example {
			 *       "type": "percentage",
			 *       "value": 0
			 *     }
			 */
			discount?: components['schemas']['DiscountDto']
			/**
			 * @description Invoice Items
			 * @example [
			 *       {
			 *         "taxes": [],
			 *         "_id": "c6tZZU0rJBf30ZXx9Gli",
			 *         "productId": "c6tZZU0rJBf30ZXx9Gli",
			 *         "priceId": "c6tZZU0rJBf30ZXx9Gli",
			 *         "currency": "USD",
			 *         "name": "Macbook Pro",
			 *         "qty": 1,
			 *         "amount": 999
			 *       }
			 *     ]
			 */
			invoiceItems: string[]
			/**
			 * @description Total Amount
			 * @example 999
			 */
			total: number
			/**
			 * @description Title
			 * @example INVOICE
			 */
			title: string
			/**
			 * @description Total Amount Due
			 * @example 999
			 */
			amountDue: number
			/**
			 * @description created at
			 * @example 2023-12-12T09:27:42.355Z
			 */
			createdAt: string
			/**
			 * @description updated at
			 * @example 2023-12-12T09:27:42.355Z
			 */
			updatedAt: string
		}
		TotalSummaryDto: {
			/**
			 * @description subTotal
			 * @example 999
			 */
			subTotal: number
			/**
			 * @description discount
			 * @example 0
			 */
			discount: number
		}
		GetInvoiceResponseDto: {
			/**
			 * @description Invoice Id
			 * @example 6578278e879ad2646715ba9c
			 */
			_id: string
			/**
			 * @description Invoice Status
			 * @example draft
			 * @enum {string}
			 */
			status:
				| 'draft'
				| 'sent'
				| 'payment_processing'
				| 'paid'
				| 'void'
				| 'partially_paid'
			/**
			 * @description Live Mode
			 * @example false
			 */
			liveMode: boolean
			/**
			 * @description Amount Paid
			 * @example 0
			 */
			amountPaid: number
			/**
			 * @description Location Id or Agency Id
			 * @example 6578278e879ad2646715ba9c
			 */
			altId: string
			/** @enum {string} */
			altType: 'location'
			/**
			 * @description Name of the invoice
			 * @example New Invoice
			 */
			name: string
			/**
			 * @description Business Details
			 * @example {
			 *       "name": "Alex",
			 *       "address": {
			 *         "addressLine1": "9931 Beechwood",
			 *         "city": "St. Houston",
			 *         "state": "TX",
			 *         "countryCode": "USA",
			 *         "postalCode": "559-6993"
			 *       },
			 *       "phoneNo": "+1-214-559-6993",
			 *       "website": "www.example.com"
			 *     }
			 */
			businessDetails: components['schemas']['BusinessDetailsDto']
			/**
			 * @description Invoice Number
			 * @example 19
			 */
			invoiceNumber: number
			/**
			 * @description Currency
			 * @example USD
			 */
			currency: string
			/**
			 * @description Contact Details
			 * @example {
			 *       "id": "c6tZZU0rJBf30ZXx9Gli",
			 *       "phoneNo": "+1-214-559-6993",
			 *       "email": "alex@example.com",
			 *       "customFields": [],
			 *       "name": "Alex",
			 *       "address": {
			 *         "countryCode": "US"
			 *       }
			 *     }
			 */
			contactDetails: components['schemas']['ContactDetailsDto']
			/**
			 * @description Issue date in YYYY-MM-DD format
			 * @example 2023-01-01
			 */
			issueDate: string
			/**
			 * @description Due date in YYYY-MM-DD format
			 * @example 2023-01-01
			 */
			dueDate: string
			/**
			 * @description Discount
			 * @example {
			 *       "type": "percentage",
			 *       "value": 0
			 *     }
			 */
			discount?: components['schemas']['DiscountDto']
			/**
			 * @description Invoice Items
			 * @example [
			 *       {
			 *         "taxes": [],
			 *         "_id": "c6tZZU0rJBf30ZXx9Gli",
			 *         "productId": "c6tZZU0rJBf30ZXx9Gli",
			 *         "priceId": "c6tZZU0rJBf30ZXx9Gli",
			 *         "currency": "USD",
			 *         "name": "Macbook Pro",
			 *         "qty": 1,
			 *         "amount": 999
			 *       }
			 *     ]
			 */
			invoiceItems: string[]
			/**
			 * @description Total Amount
			 * @example 999
			 */
			total: number
			/**
			 * @description Title
			 * @example INVOICE
			 */
			title: string
			/**
			 * @description Total Amount Due
			 * @example 999
			 */
			amountDue: number
			/**
			 * @description created at
			 * @example 2023-12-12T09:27:42.355Z
			 */
			createdAt: string
			/**
			 * @description updated at
			 * @example 2023-12-12T09:27:42.355Z
			 */
			updatedAt: string
			totalSummary: components['schemas']['TotalSummaryDto']
		}
		ListInvoicesResponseDto: {
			invoices: components['schemas']['GetInvoiceResponseDto'][]
			/**
			 * @description Total number of invoices
			 * @example 100
			 */
			total: number
		}
		UpdateInvoiceDto: {
			/**
			 * @description location Id / company Id based on altType
			 * @example 6578278e879ad2646715ba9c
			 */
			altId: string
			/**
			 * @description Alt Type
			 * @example location
			 * @enum {string}
			 */
			altType: 'location'
			/**
			 * @description Name to be updated
			 * @example New Invoice
			 */
			name: string
			/**
			 * @description Title for the invoice
			 * @example INVOICE
			 */
			title?: string
			/**
			 * @description Currency
			 * @example USD
			 */
			currency: string
			/**
			 * @description Description
			 * @example ABC Corp payments
			 */
			description?: string
			/**
			 * @description Business details which need to be updated
			 * @example {
			 *       "name": "Alex",
			 *       "address": {
			 *         "addressLine1": "9931 Beechwood",
			 *         "city": "St. Houston",
			 *         "state": "TX",
			 *         "countryCode": "USA",
			 *         "postalCode": "559-6993"
			 *       },
			 *       "phoneNo": "+1-214-559-6993",
			 *       "website": "www.example.com"
			 *     }
			 */
			businessDetails?: components['schemas']['BusinessDetailsDto']
			/**
			 * @description Invoice Number
			 * @example 1001
			 */
			invoiceNumber?: string
			/**
			 * @description Id of the contact which you need to send the invoice
			 * @example 6578278e879ad2646715ba9c
			 */
			contactId?: string
			contactDetails?: components['schemas']['ContactDetailsDto']
			/**
			 * @description Terms notes, Also supports HTML markups
			 * @example <p>This is a default terms.</p>
			 */
			termsNotes?: string
			discount?: components['schemas']['DiscountDto']
			invoiceItems: components['schemas']['InvoiceItemDto'][]
			/** @description Payment mode */
			liveMode?: boolean
			/**
			 * @description Issue date in YYYY-MM-DD format
			 * @example 2023-01-01
			 */
			issueDate: string
			/**
			 * @description Due date in YYYY-MM-DD format
			 * @example 2023-01-14
			 */
			dueDate: string
		}
		UpdateInvoiceResponseDto: {
			/**
			 * @description Invoice Id
			 * @example 6578278e879ad2646715ba9c
			 */
			_id: string
			/**
			 * @description Invoice Status
			 * @example draft
			 * @enum {string}
			 */
			status:
				| 'draft'
				| 'sent'
				| 'payment_processing'
				| 'paid'
				| 'void'
				| 'partially_paid'
			/**
			 * @description Live Mode
			 * @example false
			 */
			liveMode: boolean
			/**
			 * @description Amount Paid
			 * @example 0
			 */
			amountPaid: number
			/**
			 * @description Location Id or Agency Id
			 * @example 6578278e879ad2646715ba9c
			 */
			altId: string
			/** @enum {string} */
			altType: 'location'
			/**
			 * @description Name of the invoice
			 * @example New Invoice
			 */
			name: string
			/**
			 * @description Business Details
			 * @example {
			 *       "name": "Alex",
			 *       "address": {
			 *         "addressLine1": "9931 Beechwood",
			 *         "city": "St. Houston",
			 *         "state": "TX",
			 *         "countryCode": "USA",
			 *         "postalCode": "559-6993"
			 *       },
			 *       "phoneNo": "+1-214-559-6993",
			 *       "website": "www.example.com"
			 *     }
			 */
			businessDetails: components['schemas']['BusinessDetailsDto']
			/**
			 * @description Invoice Number
			 * @example 19
			 */
			invoiceNumber: number
			/**
			 * @description Currency
			 * @example USD
			 */
			currency: string
			/**
			 * @description Contact Details
			 * @example {
			 *       "id": "c6tZZU0rJBf30ZXx9Gli",
			 *       "phoneNo": "+1-214-559-6993",
			 *       "email": "alex@example.com",
			 *       "customFields": [],
			 *       "name": "Alex",
			 *       "address": {
			 *         "countryCode": "US"
			 *       }
			 *     }
			 */
			contactDetails: components['schemas']['ContactDetailsDto']
			/**
			 * @description Issue date in YYYY-MM-DD format
			 * @example 2023-01-01
			 */
			issueDate: string
			/**
			 * @description Due date in YYYY-MM-DD format
			 * @example 2023-01-01
			 */
			dueDate: string
			/**
			 * @description Discount
			 * @example {
			 *       "type": "percentage",
			 *       "value": 0
			 *     }
			 */
			discount?: components['schemas']['DiscountDto']
			/**
			 * @description Invoice Items
			 * @example [
			 *       {
			 *         "taxes": [],
			 *         "_id": "c6tZZU0rJBf30ZXx9Gli",
			 *         "productId": "c6tZZU0rJBf30ZXx9Gli",
			 *         "priceId": "c6tZZU0rJBf30ZXx9Gli",
			 *         "currency": "USD",
			 *         "name": "Macbook Pro",
			 *         "qty": 1,
			 *         "amount": 999
			 *       }
			 *     ]
			 */
			invoiceItems: string[]
			/**
			 * @description Total Amount
			 * @example 999
			 */
			total: number
			/**
			 * @description Title
			 * @example INVOICE
			 */
			title: string
			/**
			 * @description Total Amount Due
			 * @example 999
			 */
			amountDue: number
			/**
			 * @description created at
			 * @example 2023-12-12T09:27:42.355Z
			 */
			createdAt: string
			/**
			 * @description updated at
			 * @example 2023-12-12T09:27:42.355Z
			 */
			updatedAt: string
		}
		DeleteInvoiceResponseDto: {
			/**
			 * @description Invoice Id
			 * @example 6578278e879ad2646715ba9c
			 */
			_id: string
			/**
			 * @description Invoice Status
			 * @example draft
			 * @enum {string}
			 */
			status:
				| 'draft'
				| 'sent'
				| 'payment_processing'
				| 'paid'
				| 'void'
				| 'partially_paid'
			/**
			 * @description Live Mode
			 * @example false
			 */
			liveMode: boolean
			/**
			 * @description Amount Paid
			 * @example 0
			 */
			amountPaid: number
			/**
			 * @description Location Id or Agency Id
			 * @example 6578278e879ad2646715ba9c
			 */
			altId: string
			/** @enum {string} */
			altType: 'location'
			/**
			 * @description Name of the invoice
			 * @example New Invoice
			 */
			name: string
			/**
			 * @description Business Details
			 * @example {
			 *       "name": "Alex",
			 *       "address": {
			 *         "addressLine1": "9931 Beechwood",
			 *         "city": "St. Houston",
			 *         "state": "TX",
			 *         "countryCode": "USA",
			 *         "postalCode": "559-6993"
			 *       },
			 *       "phoneNo": "+1-214-559-6993",
			 *       "website": "www.example.com"
			 *     }
			 */
			businessDetails: components['schemas']['BusinessDetailsDto']
			/**
			 * @description Invoice Number
			 * @example 19
			 */
			invoiceNumber: number
			/**
			 * @description Currency
			 * @example USD
			 */
			currency: string
			/**
			 * @description Contact Details
			 * @example {
			 *       "id": "c6tZZU0rJBf30ZXx9Gli",
			 *       "phoneNo": "+1-214-559-6993",
			 *       "email": "alex@example.com",
			 *       "customFields": [],
			 *       "name": "Alex",
			 *       "address": {
			 *         "countryCode": "US"
			 *       }
			 *     }
			 */
			contactDetails: components['schemas']['ContactDetailsDto']
			/**
			 * @description Issue date in YYYY-MM-DD format
			 * @example 2023-01-01
			 */
			issueDate: string
			/**
			 * @description Due date in YYYY-MM-DD format
			 * @example 2023-01-01
			 */
			dueDate: string
			/**
			 * @description Discount
			 * @example {
			 *       "type": "percentage",
			 *       "value": 0
			 *     }
			 */
			discount?: components['schemas']['DiscountDto']
			/**
			 * @description Invoice Items
			 * @example [
			 *       {
			 *         "taxes": [],
			 *         "_id": "c6tZZU0rJBf30ZXx9Gli",
			 *         "productId": "c6tZZU0rJBf30ZXx9Gli",
			 *         "priceId": "c6tZZU0rJBf30ZXx9Gli",
			 *         "currency": "USD",
			 *         "name": "Macbook Pro",
			 *         "qty": 1,
			 *         "amount": 999
			 *       }
			 *     ]
			 */
			invoiceItems: string[]
			/**
			 * @description Total Amount
			 * @example 999
			 */
			total: number
			/**
			 * @description Title
			 * @example INVOICE
			 */
			title: string
			/**
			 * @description Total Amount Due
			 * @example 999
			 */
			amountDue: number
			/**
			 * @description created at
			 * @example 2023-12-12T09:27:42.355Z
			 */
			createdAt: string
			/**
			 * @description updated at
			 * @example 2023-12-12T09:27:42.355Z
			 */
			updatedAt: string
		}
		VoidInvoiceDto: {
			/**
			 * @description location Id / company Id based on altType
			 * @example 6578278e879ad2646715ba9c
			 */
			altId: string
			/**
			 * @description Alt Type
			 * @example location
			 * @enum {string}
			 */
			altType: 'location'
		}
		VoidInvoiceResponseDto: {
			/**
			 * @description Invoice Id
			 * @example 6578278e879ad2646715ba9c
			 */
			_id: string
			/**
			 * @description Invoice Status
			 * @example draft
			 * @enum {string}
			 */
			status:
				| 'draft'
				| 'sent'
				| 'payment_processing'
				| 'paid'
				| 'void'
				| 'partially_paid'
			/**
			 * @description Live Mode
			 * @example false
			 */
			liveMode: boolean
			/**
			 * @description Amount Paid
			 * @example 0
			 */
			amountPaid: number
			/**
			 * @description Location Id or Agency Id
			 * @example 6578278e879ad2646715ba9c
			 */
			altId: string
			/** @enum {string} */
			altType: 'location'
			/**
			 * @description Name of the invoice
			 * @example New Invoice
			 */
			name: string
			/**
			 * @description Business Details
			 * @example {
			 *       "name": "Alex",
			 *       "address": {
			 *         "addressLine1": "9931 Beechwood",
			 *         "city": "St. Houston",
			 *         "state": "TX",
			 *         "countryCode": "USA",
			 *         "postalCode": "559-6993"
			 *       },
			 *       "phoneNo": "+1-214-559-6993",
			 *       "website": "www.example.com"
			 *     }
			 */
			businessDetails: components['schemas']['BusinessDetailsDto']
			/**
			 * @description Invoice Number
			 * @example 19
			 */
			invoiceNumber: number
			/**
			 * @description Currency
			 * @example USD
			 */
			currency: string
			/**
			 * @description Contact Details
			 * @example {
			 *       "id": "c6tZZU0rJBf30ZXx9Gli",
			 *       "phoneNo": "+1-214-559-6993",
			 *       "email": "alex@example.com",
			 *       "customFields": [],
			 *       "name": "Alex",
			 *       "address": {
			 *         "countryCode": "US"
			 *       }
			 *     }
			 */
			contactDetails: components['schemas']['ContactDetailsDto']
			/**
			 * @description Issue date in YYYY-MM-DD format
			 * @example 2023-01-01
			 */
			issueDate: string
			/**
			 * @description Due date in YYYY-MM-DD format
			 * @example 2023-01-01
			 */
			dueDate: string
			/**
			 * @description Discount
			 * @example {
			 *       "type": "percentage",
			 *       "value": 0
			 *     }
			 */
			discount?: components['schemas']['DiscountDto']
			/**
			 * @description Invoice Items
			 * @example [
			 *       {
			 *         "taxes": [],
			 *         "_id": "c6tZZU0rJBf30ZXx9Gli",
			 *         "productId": "c6tZZU0rJBf30ZXx9Gli",
			 *         "priceId": "c6tZZU0rJBf30ZXx9Gli",
			 *         "currency": "USD",
			 *         "name": "Macbook Pro",
			 *         "qty": 1,
			 *         "amount": 999
			 *       }
			 *     ]
			 */
			invoiceItems: string[]
			/**
			 * @description Total Amount
			 * @example 999
			 */
			total: number
			/**
			 * @description Title
			 * @example INVOICE
			 */
			title: string
			/**
			 * @description Total Amount Due
			 * @example 999
			 */
			amountDue: number
			/**
			 * @description created at
			 * @example 2023-12-12T09:27:42.355Z
			 */
			createdAt: string
			/**
			 * @description updated at
			 * @example 2023-12-12T09:27:42.355Z
			 */
			updatedAt: string
		}
		InvoiceSettingsSenderConfigurationDto: {
			/**
			 * @description Sender name to be used while sending invoice
			 * @example Alex
			 */
			fromName?: string
			/**
			 * @description Email id to be used while sending out invoices
			 * @example alex@example.com
			 */
			fromEmail?: string
		}
		SendInvoiceDto: {
			/**
			 * @description location Id / company Id based on altType
			 * @example 6578278e879ad2646715ba9c
			 */
			altId: string
			/**
			 * @description Alt Type
			 * @example location
			 * @enum {string}
			 */
			altType: 'location'
			/**
			 * @description Please ensure that the UserId corresponds to an authorized personnel, either by an employee ID or agency ID, to access this location. This account will serve as the primary channel for all future communications and updates.
			 * @example 6578278e879ad2646715ba9c
			 */
			userId: string
			/** @enum {string} */
			action: 'sms_and_email' | 'send_manually' | 'email' | 'sms'
			liveMode: boolean
			/** @description sender details for invoice, valid only if invoice is not sent manually */
			sentFrom?: components['schemas']['InvoiceSettingsSenderConfigurationDto']
		}
		SendInvoicesResponseDto: {
			invoice: components['schemas']['DefaultInvoiceResponseDto']
			smsData: Record<string, never>
			emailData: Record<string, never>
		}
		ChequeDto: {
			/**
			 * @description check number
			 * @example 129-129-129-912
			 */
			number: string
		}
		RecordPaymentDto: {
			/**
			 * @description location Id / company Id based on altType
			 * @example 6578278e879ad2646715ba9c
			 */
			altId: string
			/**
			 * @description Alt Type
			 * @example location
			 * @enum {string}
			 */
			altType: 'location'
			/**
			 * @description manual payment method
			 * @example card
			 * @enum {string}
			 */
			mode: 'cash' | 'card' | 'cheque' | 'bank_transfer' | 'other'
			card: components['schemas']['CardDto']
			cheque: components['schemas']['ChequeDto']
			/**
			 * @description Any note to be recorded with the transaction
			 * @example This was a direct payment
			 */
			notes: string
			/**
			 * @description Amount to be paid against the invoice.
			 * @example 999
			 */
			amount?: number
		}
		RecordPaymentResponseDto: {
			/**
			 * @description status
			 * @example true
			 */
			success: boolean
			invoice: components['schemas']['DefaultInvoiceResponseDto']
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
	'list-invoice-templates': {
		parameters: {
			query: {
				/**
				 * @description location Id / company Id based on altType
				 * @example 6578278e879ad2646715ba9c
				 */
				altId: string
				/**
				 * @description Alt Type
				 * @example location
				 */
				altType: 'location'
				/** @description status to be filtered */
				status?: string
				/**
				 * @description startAt in YYYY-MM-DD format
				 * @example 2023-01-01
				 */
				startAt?: string
				/**
				 * @description endAt in YYYY-MM-DD format
				 * @example 2023-01-01
				 */
				endAt?: string
				/**
				 * @description To search for an invoice by id / name / email / phoneNo
				 * @example Alex
				 */
				search?: string
				/**
				 * @description payment mode
				 * @example live
				 */
				paymentMode?: 'default' | 'live'
				/**
				 * @description Limit the number of items to return
				 * @example 10
				 */
				limit: string
				/**
				 * @description Number of items to skip
				 * @example 10
				 */
				offset: string
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
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['ListTemplatesResponseDto']
				}
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
			/** @description Unprocessable Entity */
			422: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnprocessableDTO']
				}
			}
		}
	}
	'create-invoice-template': {
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
				'application/json': components['schemas']['CreateInvoiceTemplateDto']
			}
		}
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['CreateInvoiceTemplateResponseDto']
				}
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
			/** @description Unprocessable Entity */
			422: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnprocessableDTO']
				}
			}
		}
	}
	'get-invoice-template': {
		parameters: {
			query: {
				/**
				 * @description location Id / company Id based on altType
				 * @example 6578278e879ad2646715ba9c
				 */
				altId: string
				/**
				 * @description Alt Type
				 * @example location
				 */
				altType: 'location'
			}
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/**
				 * @description Template Id
				 * @example 6578278e879ad2646715ba9c
				 */
				templateId: string
			}
			cookie?: never
		}
		requestBody?: never
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['GetTemplateResponseDto']
				}
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
			/** @description Unprocessable Entity */
			422: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnprocessableDTO']
				}
			}
		}
	}
	'update-invoice-template': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/**
				 * @description Template Id
				 * @example 6578278e879ad2646715ba9c
				 */
				templateId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['UpdateInvoiceTemplateDto']
			}
		}
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UpdateInvoiceTemplateResponseDto']
				}
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
			/** @description Unprocessable Entity */
			422: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnprocessableDTO']
				}
			}
		}
	}
	'delete-invoice-template': {
		parameters: {
			query: {
				/**
				 * @description location Id / company Id based on altType
				 * @example 6578278e879ad2646715ba9c
				 */
				altId: string
				/**
				 * @description Alt Type
				 * @example location
				 */
				altType: 'location'
			}
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/**
				 * @description Template Id
				 * @example 6578278e879ad2646715ba9c
				 */
				templateId: string
			}
			cookie?: never
		}
		requestBody?: never
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['DeleteInvoiceTemplateResponseDto']
				}
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
			/** @description Unprocessable Entity */
			422: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnprocessableDTO']
				}
			}
		}
	}
	'list-invoice-schedules': {
		parameters: {
			query: {
				/**
				 * @description location Id / company Id based on altType
				 * @example 6578278e879ad2646715ba9c
				 */
				altId: string
				/**
				 * @description Alt Type
				 * @example location
				 */
				altType: 'location'
				/** @description status to be filtered */
				status?: string
				/**
				 * @description startAt in YYYY-MM-DD format
				 * @example 2023-01-01
				 */
				startAt?: string
				/**
				 * @description endAt in YYYY-MM-DD format
				 * @example 2023-01-01
				 */
				endAt?: string
				/**
				 * @description To search for an invoice by id / name / email / phoneNo
				 * @example Alex
				 */
				search?: string
				/**
				 * @description payment mode
				 * @example live
				 */
				paymentMode?: 'default' | 'live'
				/**
				 * @description Limit the number of items to return
				 * @example 10
				 */
				limit: string
				/**
				 * @description Number of items to skip
				 * @example 10
				 */
				offset: string
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
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['ListSchedulesResponseDto']
				}
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
			/** @description Unprocessable Entity */
			422: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnprocessableDTO']
				}
			}
		}
	}
	'create-invoice-schedule': {
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
				'application/json': components['schemas']['CreateInvoiceScheduleDto']
			}
		}
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['CreateInvoiceScheduleResponseDto']
				}
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
			/** @description Unprocessable Entity */
			422: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnprocessableDTO']
				}
			}
		}
	}
	'get-invoice-schedule': {
		parameters: {
			query: {
				/**
				 * @description location Id / company Id based on altType
				 * @example 6578278e879ad2646715ba9c
				 */
				altId: string
				/**
				 * @description Alt Type
				 * @example location
				 */
				altType: 'location'
			}
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/**
				 * @description Schedule Id
				 * @example 6578278e879ad2646715ba9c
				 */
				scheduleId: string
			}
			cookie?: never
		}
		requestBody?: never
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['GetScheduleResponseDto']
				}
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
			/** @description Unprocessable Entity */
			422: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnprocessableDTO']
				}
			}
		}
	}
	'update-invoice-schedule': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/**
				 * @description Schedule Id
				 * @example 6578278e879ad2646715ba9c
				 */
				scheduleId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['UpdateInvoiceScheduleDto']
			}
		}
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UpdateInvoiceScheduleResponseDto']
				}
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
			/** @description Unprocessable Entity */
			422: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnprocessableDTO']
				}
			}
		}
	}
	'delete-invoice-schedule': {
		parameters: {
			query: {
				/**
				 * @description location Id / company Id based on altType
				 * @example 6578278e879ad2646715ba9c
				 */
				altId: string
				/**
				 * @description Alt Type
				 * @example location
				 */
				altType: 'location'
			}
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/**
				 * @description Schedule Id
				 * @example 6578278e879ad2646715ba9c
				 */
				scheduleId: string
			}
			cookie?: never
		}
		requestBody?: never
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['DeleteInvoiceScheduleResponseDto']
				}
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
			/** @description Unprocessable Entity */
			422: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnprocessableDTO']
				}
			}
		}
	}
	'schedule-invoice-schedule': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/**
				 * @description Schedule Id
				 * @example 6578278e879ad2646715ba9c
				 */
				scheduleId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['ScheduleInvoiceScheduleDto']
			}
		}
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['ScheduleInvoiceScheduleResponseDto']
				}
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
			/** @description Unprocessable Entity */
			422: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnprocessableDTO']
				}
			}
		}
	}
	'auto-payment-invoice-schedule': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/**
				 * @description Schedule Id
				 * @example 6578278e879ad2646715ba9c
				 */
				scheduleId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['AutoPaymentScheduleDto']
			}
		}
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['AutoPaymentInvoiceScheduleResponseDto']
				}
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
			/** @description Unprocessable Entity */
			422: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnprocessableDTO']
				}
			}
		}
	}
	'cancel-invoice-schedule': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/**
				 * @description Schedule Id
				 * @example 6578278e879ad2646715ba9c
				 */
				scheduleId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['CancelInvoiceScheduleDto']
			}
		}
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['CancelInvoiceScheduleResponseDto']
				}
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
			/** @description Unprocessable Entity */
			422: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnprocessableDTO']
				}
			}
		}
	}
	'text2pay-invoice': {
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
				'application/json': components['schemas']['Text2PayDto']
			}
		}
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['Text2PayInvoiceResponseDto']
				}
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
			/** @description Unprocessable Entity */
			422: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnprocessableDTO']
				}
			}
		}
	}
	'generate-invoice-number': {
		parameters: {
			query: {
				/** @description Location Id */
				altId: string
				altType: 'location'
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
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['GenerateInvoiceNumberResponseDto']
				}
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
			/** @description Unprocessable Entity */
			422: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnprocessableDTO']
				}
			}
		}
	}
	'get-invoice': {
		parameters: {
			query: {
				/**
				 * @description location Id / company Id based on altType
				 * @example 6578278e879ad2646715ba9c
				 */
				altId: string
				/**
				 * @description Alt Type
				 * @example location
				 */
				altType: 'location'
			}
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/**
				 * @description Invoice Id
				 * @example 6578278e879ad2646715ba9c
				 */
				invoiceId: string
			}
			cookie?: never
		}
		requestBody?: never
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['GetInvoiceResponseDto']
				}
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
			/** @description Unprocessable Entity */
			422: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnprocessableDTO']
				}
			}
		}
	}
	'update-invoice': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/**
				 * @description Invoice Id
				 * @example 6578278e879ad2646715ba9c
				 */
				invoiceId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['UpdateInvoiceDto']
			}
		}
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UpdateInvoiceResponseDto']
				}
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
			/** @description Unprocessable Entity */
			422: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnprocessableDTO']
				}
			}
		}
	}
	'delete-invoice': {
		parameters: {
			query: {
				/**
				 * @description location Id / company Id based on altType
				 * @example 6578278e879ad2646715ba9c
				 */
				altId: string
				/**
				 * @description Alt Type
				 * @example location
				 */
				altType: 'location'
			}
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/**
				 * @description Invoice Id
				 * @example 6578278e879ad2646715ba9c
				 */
				invoiceId: string
			}
			cookie?: never
		}
		requestBody?: never
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['DeleteInvoiceResponseDto']
				}
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': unknown
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
			/** @description Unprocessable Entity */
			422: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnprocessableDTO']
				}
			}
		}
	}
	'void-invoice': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/**
				 * @description Invoice Id
				 * @example 6578278e879ad2646715ba9c
				 */
				invoiceId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['VoidInvoiceDto']
			}
		}
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['VoidInvoiceResponseDto']
				}
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': unknown
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
			/** @description Unprocessable Entity */
			422: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnprocessableDTO']
				}
			}
		}
	}
	'send-invoice': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/**
				 * @description Invoice Id
				 * @example 6578278e879ad2646715ba9c
				 */
				invoiceId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['SendInvoiceDto']
			}
		}
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['SendInvoicesResponseDto']
				}
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
			/** @description Unprocessable Entity */
			422: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnprocessableDTO']
				}
			}
		}
	}
	'record-invoice': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/**
				 * @description Invoice Id
				 * @example 6578278e879ad2646715ba9c
				 */
				invoiceId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['RecordPaymentDto']
			}
		}
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['RecordPaymentResponseDto']
				}
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
			/** @description Unprocessable Entity */
			422: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnprocessableDTO']
				}
			}
		}
	}
	'list-invoices': {
		parameters: {
			query: {
				/**
				 * @description location Id / company Id based on altType
				 * @example 6578278e879ad2646715ba9c
				 */
				altId: string
				/**
				 * @description Alt Type
				 * @example location
				 */
				altType: 'location'
				/** @description status to be filtered */
				status?: string
				/**
				 * @description startAt in YYYY-MM-DD format
				 * @example 2023-01-01
				 */
				startAt?: string
				/**
				 * @description endAt in YYYY-MM-DD format
				 * @example 2023-01-01
				 */
				endAt?: string
				/**
				 * @description To search for an invoice by id / name / email / phoneNo
				 * @example Alex
				 */
				search?: string
				/**
				 * @description payment mode
				 * @example live
				 */
				paymentMode?: 'default' | 'live'
				/**
				 * @description Contact ID for the invoice
				 * @example AmuzcoPBpgKeccNsFlib
				 */
				contactId?: string
				/**
				 * @description Limit the number of items to return
				 * @example 10
				 */
				limit: string
				/**
				 * @description Number of items to skip
				 * @example 10
				 */
				offset: string
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
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['ListInvoicesResponseDto']
				}
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
			/** @description Unprocessable Entity */
			422: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnprocessableDTO']
				}
			}
		}
	}
	'create-invoice': {
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
				'application/json': components['schemas']['CreateInvoiceDto']
			}
		}
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['CreateInvoiceResponseDto']
				}
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
			/** @description Unprocessable Entity */
			422: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnprocessableDTO']
				}
			}
		}
	}
}
