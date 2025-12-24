export interface paths {
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
	'/invoices/{invoiceId}/late-fees-configuration': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		/**
		 * Update invoice late fees configuration
		 * @description API to update invoice late fees configuration by invoice id
		 */
		patch: operations['update-invoice-late-fees-configuration']
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
	'/invoices/estimate': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Create New Estimate
		 * @description Create a new estimate with the provided details
		 */
		post: operations['create-new-estimate']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/invoices/estimate/{estimateId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		/**
		 * Update Estimate
		 * @description Update an existing estimate with new details
		 */
		put: operations['update-estimate']
		post?: never
		/**
		 * Delete Estimate
		 * @description Delete an existing estimate
		 */
		delete: operations['delete-estimate']
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/invoices/estimate/{estimateId}/invoice': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Create Invoice from Estimate
		 * @description Create a new invoice from an existing estimate
		 */
		post: operations['create-invoice-from-estimate']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/invoices/estimate/{estimateId}/send': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Send Estimate
		 * @description API to send estimate by estimate id
		 */
		post: operations['send-estimate']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/invoices/estimate/list': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * List Estimates
		 * @description Get a paginated list of estimates
		 */
		get: operations['list-estimates']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/invoices/estimate/number/generate': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Generate Estimate Number
		 * @description Get the next estimate number for the given location
		 */
		get: operations['generate-estimate-number']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/invoices/estimate/stats/last-visited-at': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		/**
		 * Update estimate last visited at
		 * @description API to update estimate last visited at by estimate id
		 */
		patch: operations['update-estimate-last-visited-at']
		trace?: never
	}
	'/invoices/estimate/template': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * List Estimate Templates
		 * @description Get a list of estimate templates or a specific template by ID
		 */
		get: operations['list-estimate-templates']
		put?: never
		/**
		 * Create Estimate Template
		 * @description Create a new estimate template
		 */
		post: operations['create-estimate-template']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/invoices/estimate/template/{templateId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		/**
		 * Update Estimate Template
		 * @description Update an existing estimate template
		 */
		put: operations['update-estimate-template']
		post?: never
		/**
		 * Delete Estimate Template
		 * @description Delete an existing estimate template
		 */
		delete: operations['delete-estimate-template']
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/invoices/estimate/template/preview': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Preview Estimate Template
		 * @description Get a preview of an estimate template
		 */
		get: operations['preview-estimate-template']
		put?: never
		post?: never
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
	'/invoices/schedule/{scheduleId}/updateAndSchedule': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Update scheduled recurring invoice
		 * @description API to update scheduled recurring invoice
		 */
		post: operations['update-and-schedule-invoice-schedule']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/invoices/stats/last-visited-at': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		/**
		 * Update invoice last visited at
		 * @description API to update invoice last visited at by invoice id
		 */
		patch: operations['update-invoice-last-visited-at']
		trace?: never
	}
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
	'/invoices/template/{templateId}/late-fees-configuration': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		/**
		 * Update template late fees configuration
		 * @description API to update template late fees configuration by template id
		 */
		patch: operations['update-invoice-template-late-fees-configuration']
		trace?: never
	}
	'/invoices/template/{templateId}/payment-methods-configuration': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		/**
		 * Update template late fees configuration
		 * @description API to update template late fees configuration by template id
		 */
		patch: operations['update-invoice-payment-methods-configuration']
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
}
export type webhooks = Record<string, never>
export interface components {
	schemas: {
		AdditionalEmailsDto: {
			/** @example alex@example.com */
			email: string
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
			 * @description Country Code
			 * @example US
			 */
			countryCode?: string
			/**
			 * @description Postal Code
			 * @example 559-6993
			 */
			postalCode?: string
			/**
			 * @description State
			 * @example TX
			 */
			state?: string
		}
		AltDto: {
			/**
			 * @description Location Id or Agency Id
			 * @example 6578278e879ad2646715ba9c
			 */
			altId: string
			/** @enum {string} */
			altType: 'location'
		}
		AttachmentsDto: {
			/**
			 * @description Id of the file selected
			 * @example 6241712be68f7a98102ba272
			 */
			id: string
			/**
			 * @description Name of the file
			 * @example Electronics.pdf
			 */
			name: string
			/**
			 * @description Size of the file
			 * @example 10000
			 */
			size: number
			/** @description Type of the file */
			type: string
			/**
			 * @description URL of the file
			 * @example https://example.com/digital-delivery
			 */
			url: string
		}
		AutoInvoice: Record<string, never>
		AutoInvoicingDto: {
			/**
			 * @description Direct Payments
			 * @example true
			 */
			directPayments?: boolean
			/**
			 * @description Enable Auto Invoice
			 * @example true
			 */
			enabled: boolean
		}
		AutoPaymentDetailsDto: {
			bacsDirectDebit?: components['schemas']['BacsDirectDebitDTO']
			becsDirectDebit?: components['schemas']['BecsDirectDebitDTO']
			card?: components['schemas']['CardDto']
			cardId?: string
			customerId?: string
			enable: boolean
			paymentMethodId?: string
			sepaDirectDebit?: components['schemas']['SepaDirectDebitDTO']
			type?: string
			usBankAccount?: components['schemas']['USBankAccountDto']
		}
		AutoPaymentInvoiceScheduleResponseDto: {
			/**
			 * @description Schedule Id
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
			 * @description Compiled terms notes
			 * @example Confidential
			 */
			compiledTermsNotes: string
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
			 * @description created at
			 * @example 2023-12-12T09:27:42.355Z
			 */
			createdAt: string
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
			/** @description List of invoices */
			invoices: components['schemas']['DefaultInvoiceResponseDto'][]
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
			 * @description Live Mode
			 * @example false
			 */
			liveMode: boolean
			/**
			 * @description Name of the invoice
			 * @example New Invoice
			 */
			name: string
			schedule?: components['schemas']['ScheduleOptionsDto']
			/**
			 * @description Schedule Status
			 * @example draft
			 */
			status: Record<string, never>
			/**
			 * @description Terms notes
			 * @example Confidential
			 */
			termsNotes: string
			/**
			 * @description Title
			 * @example INVOICE
			 */
			title: string
			/**
			 * @description Total Amount
			 * @example 999
			 */
			total: number
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
			/** @description auto-payment configuration */
			autoPayment: components['schemas']['AutoPaymentDetailsDto']
			id: string
		}
		BacsDirectDebitDTO: {
			last4: string
			sort_code: string
		}
		BadRequestDTO: {
			/** @example Bad Request */
			message?: string
			/** @example 400 */
			statusCode?: number
		}
		BecsDirectDebitDTO: {
			bsb_number: string
			last4: string
		}
		BusinessDetails: Record<string, never>
		BusinessDetailsDto: {
			/**
			 * @description Business Address
			 * @example 9931 Beechwood, TX
			 */
			address?: components['schemas']['AddressDto']
			/** @description Custom Values */
			customValues?: string[]
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
			 * @description Business Website Link
			 * @example wwww.example.com
			 */
			website?: string
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
			 * @description Location Id or Agency Id
			 * @example 6578278e879ad2646715ba9c
			 */
			altId: string
			/** @enum {string} */
			altType: 'location'
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
			 * @description Compiled terms notes
			 * @example Confidential
			 */
			compiledTermsNotes: string
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
			 * @description created at
			 * @example 2023-12-12T09:27:42.355Z
			 */
			createdAt: string
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
			/** @description List of invoices */
			invoices: components['schemas']['DefaultInvoiceResponseDto'][]
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
			 * @description Live Mode
			 * @example false
			 */
			liveMode: boolean
			/**
			 * @description Name of the invoice
			 * @example New Invoice
			 */
			name: string
			schedule?: components['schemas']['ScheduleOptionsDto']
			/**
			 * @description Schedule Status
			 * @example draft
			 */
			status: Record<string, never>
			/**
			 * @description Terms notes
			 * @example Confidential
			 */
			termsNotes: string
			/**
			 * @description Title
			 * @example INVOICE
			 */
			title: string
			/**
			 * @description Total Amount
			 * @example 999
			 */
			total: number
			/**
			 * @description updated at
			 * @example 2023-12-12T09:27:42.355Z
			 */
			updatedAt: string
		}
		CardDto: {
			brand: string
			last4: string
		}
		ChequeDto: {
			/**
			 * @description check number
			 * @example 129-129-129-912
			 */
			number: string
		}
		ContactDetails: Record<string, never>
		ContactDetailsDto: {
			/** @description Secondary email addresses for the contact to be saved */
			additionalEmails?: components['schemas']['AdditionalEmailsDto'][]
			address?: components['schemas']['AddressDto']
			/**
			 * @description Contact Company Name
			 * @example ABC Corp.
			 */
			companyName?: string
			/** @description Custom Values */
			customFields?: string[]
			/**
			 * @description Contact Email
			 * @example alex@example.com
			 */
			email: string
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
			 * @example +1234567890
			 */
			phoneNo: string
		}
		CreateEstimatesDto: {
			/**
			 * @description Location Id or Agency Id
			 * @example 6578278e879ad2646715ba9c
			 */
			altId: string
			/** @enum {string} */
			altType: 'location'
			/** @description attachments for the invoice */
			attachments?: components['schemas']['AttachmentsDto'][]
			/**
			 * @description Auto invoice for the estimate
			 * @example {
			 *       "enabled": true,
			 *       "directPayments": true
			 *     }
			 */
			autoInvoice?: components['schemas']['AutoInvoicingDto']
			/**
			 * @description Automatic taxes enabled for the Estimate
			 * @default false
			 * @example true
			 */
			automaticTaxesEnabled: boolean
			businessDetails: components['schemas']['BusinessDetailsDto']
			/** @description Contact information to send the estimate to */
			contactDetails: components['schemas']['ContactDetailsDto']
			/**
			 * @description Currency code
			 * @example USD
			 */
			currency: string
			discount: components['schemas']['DiscountDto']
			/**
			 * @description Estimate Number, if not specified will take in the next valid estimate number
			 * @example 1001
			 */
			estimateNumber?: number
			/**
			 * @description Prefix for the estimate number
			 * @default EST-
			 * @example EST-
			 */
			estimateNumberPrefix: string
			/**
			 * @description expiry date estimate
			 * @example 2024-08-10
			 */
			expiryDate?: string
			/** @description frequency settings for the estimate */
			frequencySettings: components['schemas']['FrequencySettingsDto']
			/**
			 * @description issue date estimate
			 * @example 2024-08-07
			 */
			issueDate?: string
			/** @description An array of items for the estimate. */
			items: components['schemas']['InvoiceItemDto'][]
			/**
			 * @description livemode for estimate
			 * @default true
			 * @example true
			 */
			liveMode: boolean
			/**
			 * @description Meta data for the estimate
			 * @example {
			 *       "key": "value"
			 *     }
			 */
			meta?: Record<string, never>
			/** @description miscellaneous charges for the estimate */
			miscellaneousCharges?: components['schemas']['ProcessingFeeDto']
			/**
			 * @description Estimate Name
			 * @example Home Service Estimate
			 */
			name: string
			/** @description Payment Schedule Config for the estimate */
			paymentScheduleConfig?: components['schemas']['PaymentScheduleConfigDto']
			/** @description When sending estimate directly while saving */
			sendEstimateDetails?: components['schemas']['SendEstimateDto']
			/** @description Email and sent to details for the estimate */
			sentTo?: components['schemas']['SentToDto']
			/**
			 * @description Terms notes, Also supports HTML markups
			 * @example <p>This is a default terms.</p>
			 */
			termsNotes?: string
			/**
			 * @description Title for the estimate
			 * @example ESTIMATE
			 */
			title?: string
			/**
			 * @description User Id
			 * @example 6578278e879ad2646715ba9c
			 */
			userId?: string
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
			/** @description attachments for the invoice */
			attachments?: components['schemas']['AttachmentsDto'][]
			/**
			 * @description Automatic taxes enabled for the Invoice
			 * @example true
			 */
			automaticTaxesEnabled?: boolean
			businessDetails: components['schemas']['BusinessDetailsDto']
			/** @description Contact information to send the invoice to */
			contactDetails: components['schemas']['ContactDetailsDto']
			/**
			 * @description Currency code
			 * @example USD
			 */
			currency: string
			discount: components['schemas']['DiscountDto']
			/**
			 * @description Due date in YYYY-MM-DD format
			 * @example 2023-01-14
			 */
			dueDate?: string
			/**
			 * @description Invoice Number
			 * @example 1001
			 */
			invoiceNumber?: string
			/**
			 * @description prefix for invoice number
			 * @example INV-
			 */
			invoiceNumberPrefix?: string
			/**
			 * @description Issue date in YYYY-MM-DD format
			 * @example 2023-01-01
			 */
			issueDate: string
			/** @description An array of items for the invoice. */
			items: components['schemas']['InvoiceItemDto'][]
			/** @description late fees configuration */
			lateFeesConfiguration?: components['schemas']['LateFeesConfigurationDto']
			liveMode: boolean
			/** @description miscellaneous charges for the invoice */
			miscellaneousCharges?: components['schemas']['ProcessingFeeDto']
			/**
			 * @description Invoice Name
			 * @example New Invoice
			 */
			name: string
			/** @description Payment Methods for Invoices */
			paymentMethods?: components['schemas']['PaymentMethodDto']
			/** @description split invoice into payment schedule summing up to full invoice amount */
			paymentSchedule?: components['schemas']['PaymentScheduleDto']
			sentTo: components['schemas']['SentToDto']
			/**
			 * @description Terms notes, Also supports HTML markups
			 * @example <p>This is a default terms.</p>
			 */
			termsNotes?: string
			/** @description tips configuration for the invoice */
			tipsConfiguration?: components['schemas']['TipsConfigurationDto']
			/**
			 * @description Title for the invoice
			 * @example INVOICE
			 */
			title?: string
		}
		CreateInvoiceFromEstimateDto: {
			/**
			 * @description Location Id or Agency Id
			 * @example 6578278e879ad2646715ba9c
			 */
			altId: string
			/** @enum {string} */
			altType: 'location'
			/**
			 * @description Mark Estimate as Invoiced
			 * @example true
			 */
			markAsInvoiced: boolean
			/**
			 * @description Version of the update request
			 * @example v2
			 * @enum {string}
			 */
			version?: 'v1' | 'v2'
		}
		CreateInvoiceFromEstimateResponseDTO: {
			/** @description Estimate details */
			estimate: components['schemas']['EstimateResponseDto']
			/** @description Invoice details */
			invoice: components['schemas']['DefaultInvoiceResponseDto']
		}
		CreateInvoiceResponseDto: {
			/**
			 * @description Invoice Id
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
			 * @description Total Amount Due
			 * @example 999
			 */
			amountDue: number
			/**
			 * @description Amount Paid
			 * @example 0
			 */
			amountPaid: number
			/**
			 * @description Is Automatic taxes calculated for the Invoice items
			 * @example true
			 */
			automaticTaxesCalculated?: boolean
			/**
			 * @description Automatic taxes enabled for the Invoice
			 * @example true
			 */
			automaticTaxesEnabled?: boolean
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
			businessDetails: Record<string, never>
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
			contactDetails: Record<string, never>
			/**
			 * @description created at
			 * @example 2023-12-12T09:27:42.355Z
			 */
			createdAt: string
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
			discount?: Record<string, never>
			/**
			 * @description Due date in YYYY-MM-DD format
			 * @example 2023-01-01
			 */
			dueDate: string
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
			 * @description Invoice Number
			 * @example 19
			 */
			invoiceNumber: number
			/**
			 * @description Issue date in YYYY-MM-DD format
			 * @example 2023-01-01
			 */
			issueDate: string
			/**
			 * @description Live Mode
			 * @example false
			 */
			liveMode: boolean
			/**
			 * @description Name of the invoice
			 * @example New Invoice
			 */
			name: string
			/** @description split invoice into payment schedule summing up to full invoice amount */
			paymentSchedule?: Record<string, never>
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
			 * @description Title
			 * @example INVOICE
			 */
			title: string
			/**
			 * @description Total Amount
			 * @example 999
			 */
			total: number
			/**
			 * @description updated at
			 * @example 2023-12-12T09:27:42.355Z
			 */
			updatedAt: string
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
			/** @description attachments for the invoice */
			attachments?: components['schemas']['AttachmentsDto'][]
			/**
			 * @description Automatic taxes enabled for the Invoice
			 * @example true
			 */
			automaticTaxesEnabled?: boolean
			businessDetails: components['schemas']['BusinessDetailsDto']
			contactDetails: components['schemas']['ContactDetailsDto']
			currency: string
			discount: components['schemas']['DiscountDto']
			/**
			 * @description prefix for invoice number
			 * @example INV-
			 */
			invoiceNumberPrefix?: string
			items: components['schemas']['InvoiceItemDto'][]
			/** @description Late fees configuration for the invoices */
			lateFeesConfiguration?: components['schemas']['LateFeesConfigurationDto']
			liveMode: boolean
			/** @description miscellaneous charges for the invoice */
			miscellaneousCharges?: components['schemas']['ProcessingFeeDto']
			name: string
			/** @description Payment Methods for Invoices */
			paymentMethods?: components['schemas']['PaymentMethodDto']
			schedule: components['schemas']['ScheduleOptionsDto']
			termsNotes?: string
			/** @description Configuration for tips on invoices */
			tipsConfiguration?: components['schemas']['TipsConfigurationDto']
			title?: string
		}
		CreateInvoiceScheduleResponseDto: {
			/**
			 * @description Schedule Id
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
			 * @description Compiled terms notes
			 * @example Confidential
			 */
			compiledTermsNotes: string
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
			 * @description created at
			 * @example 2023-12-12T09:27:42.355Z
			 */
			createdAt: string
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
			/** @description List of invoices */
			invoices: components['schemas']['DefaultInvoiceResponseDto'][]
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
			 * @description Live Mode
			 * @example false
			 */
			liveMode: boolean
			/**
			 * @description Name of the invoice
			 * @example New Invoice
			 */
			name: string
			schedule?: components['schemas']['ScheduleOptionsDto']
			/**
			 * @description Schedule Status
			 * @example draft
			 */
			status: Record<string, never>
			/**
			 * @description Terms notes
			 * @example Confidential
			 */
			termsNotes: string
			/**
			 * @description Title
			 * @example INVOICE
			 */
			title: string
			/**
			 * @description Total Amount
			 * @example 999
			 */
			total: number
			/**
			 * @description updated at
			 * @example 2023-12-12T09:27:42.355Z
			 */
			updatedAt: string
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
			/** @description attachments for the invoice */
			attachments?: string[]
			/**
			 * @description Automatic taxes enabled for the Invoice
			 * @example true
			 */
			automaticTaxesEnabled?: boolean
			businessDetails: components['schemas']['BusinessDetailsDto']
			currency: string
			discount?: components['schemas']['DiscountDto']
			internal?: boolean
			/**
			 * @description prefix for invoice number
			 * @example INV-
			 */
			invoiceNumberPrefix?: string
			items: components['schemas']['InvoiceItemDto'][]
			/** @description Late fees configuration for the invoices */
			lateFeesConfiguration?: components['schemas']['LateFeesConfigurationDto']
			/** @description miscellaneous charges for the invoice */
			miscellaneousCharges?: components['schemas']['ProcessingFeeDto']
			/**
			 * @description Name of the template
			 * @example New Template
			 */
			name: string
			/** @description Payment Methods for Invoices */
			paymentMethods?: components['schemas']['PaymentMethodDto']
			termsNotes?: string
			/** @description Configuration for tips on invoices */
			tipsConfiguration?: components['schemas']['TipsConfigurationDto']
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
			 * @description created at
			 * @example 2023-12-12T09:27:42.355Z
			 */
			createdAt: string
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
			 * @description prefix for invoice number
			 * @example INV-
			 */
			invoiceNumberPrefix?: string
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
			 * @description Name of the Template
			 * @example New Template
			 */
			name: string
			/**
			 * @description Total Amount
			 * @example 999
			 */
			total: number
			/**
			 * @description updated at
			 * @example 2023-12-12T09:27:42.355Z
			 */
			updatedAt: string
		}
		CustomRRuleOptionsDto: {
			/**
			 * @description Max number of task executions
			 * @example 10
			 */
			count?: number
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
			 * @description Execute task number of days before
			 * @example 5
			 */
			daysBefore?: number
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
			 * @description End type like after, by, count
			 * @example by
			 */
			endType?: string
			/** @example 2 */
			interval: number
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
			 * @description -1, 1, 2, 3, 4
			 * @example -1
			 */
			numOfWeek?: number
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
			 * @description Start as primary user accepted date
			 * @example true
			 */
			useStartAsPrimaryUserAccepted?: boolean
		}
		DefaultInvoiceResponseDto: {
			/**
			 * @description Invoice Id
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
			 * @description Total Amount Due
			 * @example 999
			 */
			amountDue: number
			/**
			 * @description Amount Paid
			 * @example 0
			 */
			amountPaid: number
			/**
			 * @description Is Automatic taxes calculated for the Invoice items
			 * @example true
			 */
			automaticTaxesCalculated?: boolean
			/**
			 * @description Automatic taxes enabled for the Invoice
			 * @example true
			 */
			automaticTaxesEnabled?: boolean
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
			businessDetails: Record<string, never>
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
			contactDetails: Record<string, never>
			/**
			 * @description created at
			 * @example 2023-12-12T09:27:42.355Z
			 */
			createdAt: string
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
			discount?: Record<string, never>
			/**
			 * @description Due date in YYYY-MM-DD format
			 * @example 2023-01-01
			 */
			dueDate: string
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
			 * @description Invoice Number
			 * @example 19
			 */
			invoiceNumber: number
			/**
			 * @description Issue date in YYYY-MM-DD format
			 * @example 2023-01-01
			 */
			issueDate: string
			/**
			 * @description Live Mode
			 * @example false
			 */
			liveMode: boolean
			/**
			 * @description Name of the invoice
			 * @example New Invoice
			 */
			name: string
			/** @description split invoice into payment schedule summing up to full invoice amount */
			paymentSchedule?: Record<string, never>
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
			 * @description Title
			 * @example INVOICE
			 */
			title: string
			/**
			 * @description Total Amount
			 * @example 999
			 */
			total: number
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
			 * @description Location Id or Agency Id
			 * @example 6578278e879ad2646715ba9c
			 */
			altId: string
			/** @enum {string} */
			altType: 'location'
			/**
			 * @description Total Amount Due
			 * @example 999
			 */
			amountDue: number
			/**
			 * @description Amount Paid
			 * @example 0
			 */
			amountPaid: number
			/**
			 * @description Is Automatic taxes calculated for the Invoice items
			 * @example true
			 */
			automaticTaxesCalculated?: boolean
			/**
			 * @description Automatic taxes enabled for the Invoice
			 * @example true
			 */
			automaticTaxesEnabled?: boolean
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
			businessDetails: Record<string, never>
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
			contactDetails: Record<string, never>
			/**
			 * @description created at
			 * @example 2023-12-12T09:27:42.355Z
			 */
			createdAt: string
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
			discount?: Record<string, never>
			/**
			 * @description Due date in YYYY-MM-DD format
			 * @example 2023-01-01
			 */
			dueDate: string
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
			 * @description Invoice Number
			 * @example 19
			 */
			invoiceNumber: number
			/**
			 * @description Issue date in YYYY-MM-DD format
			 * @example 2023-01-01
			 */
			issueDate: string
			/**
			 * @description Live Mode
			 * @example false
			 */
			liveMode: boolean
			/**
			 * @description Name of the invoice
			 * @example New Invoice
			 */
			name: string
			/** @description split invoice into payment schedule summing up to full invoice amount */
			paymentSchedule?: Record<string, never>
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
			 * @description Title
			 * @example INVOICE
			 */
			title: string
			/**
			 * @description Total Amount
			 * @example 999
			 */
			total: number
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
		DeleteInvoiceTemplateResponseDto: {
			/**
			 * @description success
			 * @example true
			 */
			success: boolean
		}
		DiscountDto: {
			/**
			 * @description Discount type
			 * @default percentage
			 * @example percentage
			 * @enum {string}
			 */
			type: 'percentage' | 'fixed'
			/**
			 * @description Product Ids on which discount is applicable
			 * @example [ '6579751d56f60276e5bd4154' ]
			 */
			validOnProductIds?: string[]
			/**
			 * @description Discount Value
			 * @default 0
			 * @example 10
			 */
			value: number
		}
		EstimateIdParam: {
			/**
			 * @description Estimate Id
			 * @example 5f9d6d8b1b2d2c001f2d9e4b
			 */
			estimateId: string
		}
		EstimateResponseDto: {
			/**
			 * @description Version number
			 * @example 0
			 */
			__v: number
			/**
			 * @description Unique identifier
			 * @example 67ac9a51106ee8311e911XXXX
			 */
			_id: string
			/**
			 * @description Location Id or Agency Id
			 * @example 6578278e879ad2646715ba9c
			 */
			altId: string
			/** @enum {string} */
			altType: 'location'
			/** @description Attachments */
			attachments?: components['schemas']['AttachmentsDto'][]
			/**
			 * @description Auto-invoice settings for the estimate
			 * @example {
			 *       "enabled": true,
			 *       "directPayments": false
			 *     }
			 */
			autoInvoice?: components['schemas']['AutoInvoice']
			/**
			 * @description Indicates if automatic taxes were calculated
			 * @example true
			 */
			automaticTaxesCalculated: boolean
			/**
			 * @description Indicates if automatic taxes are enabled for this estimate
			 * @example false
			 */
			automaticTaxesEnabled: boolean
			/**
			 * @description Business details associated with the estimate
			 * @example {
			 *       "logoUrl": "your_image-url",
			 *       "name": "Business name",
			 *       "address": {
			 *         "addressLine1": "address line 1",
			 *         "city": "Test City",
			 *         "state": "State Name",
			 *         "countryCode": "US",
			 *         "postalCode": "12345"
			 *       },
			 *       "phoneNo": "+1 1234567890",
			 *       "website": "www.example.com",
			 *       "customValues": [
			 *         {
			 *           "name": "Test",
			 *           "fieldKey": "{{custom_values.test}}",
			 *           "id": "5DYTWoiQvWiIJZXX44XXX",
			 *           "value": "Test's Custom Value"
			 *         }
			 *       ]
			 *     }
			 */
			businessDetails: components['schemas']['BusinessDetails']
			/**
			 * @description Company identifier associated with the estimate
			 * @example COMP12345
			 */
			companyId: string
			/**
			 * @description Contact details for the estimate
			 * @example {
			 *       "id": "jvzfKTNdE7OYXXXXXX",
			 *       "name": "Contact Name",
			 *       "phoneNo": "+911111111114",
			 *       "email": "email@test.com",
			 *       "address": {
			 *         "countryCode": "US"
			 *       }
			 *     }
			 */
			contactDetails: components['schemas']['ContactDetails']
			/**
			 * Format: date-time
			 * @description Timestamp when created
			 * @example 2025-02-12T13:17:47.416Z
			 */
			createdAt: string
			/**
			 * @description Currency code
			 * @example USD
			 */
			currency: string
			/**
			 * @description Indicates if deleted
			 * @example false
			 */
			deleted: boolean
			/**
			 * @description Discount details for the estimate template
			 * @example {
			 *       "type": "percentage",
			 *       "value": 0
			 *     }
			 */
			discount: components['schemas']['DiscountDto']
			/**
			 * @description History of actions taken on the estimate
			 * @example [
			 *       {
			 *         "action": "Created",
			 *         "timestamp": "2023-06-15T10:00:00.000Z"
			 *       }
			 *     ]
			 */
			estimateActionHistory: string[]
			/**
			 * @description Estimate number prefix
			 * @example EST-
			 */
			estimateNumberPrefix?: string
			/**
			 * Format: date-time
			 * @description Date when the estimate expires
			 * @example 2023-07-15T00:00:00.000Z
			 */
			expiryDate: string
			/**
			 * @description Frequency settings for recurring estimates
			 * @example {
			 *       "enabled": false
			 *     }
			 * @example {
			 *       "enabled": true,
			 *       "schedule": {
			 *         "rrule": {
			 *           "intervalType": "monthly",
			 *           "numOfWeek": 0,
			 *           "dayOfMonth": 1,
			 *           "interval": 1,
			 *           "startDate": "2025-02-12",
			 *           "endType": "after",
			 *           "count": "5"
			 *         }
			 *       }
			 *     }
			 * @example {
			 *       "enabled": true,
			 *       "schedule": {
			 *         "rrule": {
			 *           "intervalType": "monthly",
			 *           "numOfWeek": 0,
			 *           "dayOfMonth": 1,
			 *           "interval": 1,
			 *           "startDate": "2025-02-12",
			 *           "endType": "by",
			 *           "endDate": "2025-02-24"
			 *         }
			 *       }
			 *     }
			 * @example {
			 *       "enabled": true,
			 *       "schedule": {
			 *         "rrule": {
			 *           "intervalType": "monthly",
			 *           "numOfWeek": 0,
			 *           "dayOfMonth": 1,
			 *           "interval": 1,
			 *           "startDate": "2025-02-12",
			 *           "endType": "never"
			 *         }
			 *       }
			 *     }
			 */
			frequencySettings: components['schemas']['FrequencySettingsDto']
			/**
			 * Format: date-time
			 * @description Date when the estimate was issued
			 * @example 2023-06-15T00:00:00.000Z
			 */
			issueDate: string
			/**
			 * @description An array of items
			 * @example [
			 *       {
			 *         "taxes": [],
			 *         "taxInclusive": false,
			 *         "_id": "67ac9a51106ee8311e911XXXX",
			 *         "description": "<p>Futuristic anti-gravity racing</p>",
			 *         "currency": "USD",
			 *         "productId": "67ac9a51106ee8311e911XXXX",
			 *         "priceId": "67ac9a51106ee8311e911XXXX",
			 *         "amount": 9.99,
			 *         "qty": 1,
			 *         "name": "TEST",
			 *         "type": "one_time"
			 *       },
			 *       {
			 *         "taxes": [
			 *           {
			 *             "_id": "67ac9a51106ee8311e911XXXX",
			 *             "name": "TaxTwo",
			 *             "rate": 8.5,
			 *             "calculation": "exclusive"
			 *           }
			 *         ],
			 *         "taxInclusive": true,
			 *         "_id": "67ac9a51106ee8311e911XXXX",
			 *         "productId": "67ac9a51106ee8311e911XXXX",
			 *         "priceId": "67ac9a51106ee8311e911XXXX",
			 *         "currency": "USD",
			 *         "name": "TEST2",
			 *         "qty": 1,
			 *         "amount": 500,
			 *         "description": "",
			 *         "type": "recurring"
			 *       }
			 *     ]
			 */
			items: unknown[][]
			/**
			 * Format: date-time
			 * @description Timestamp when the estimate was last visited
			 * @example 2023-06-20T08:30:00.000Z
			 */
			lastVisitedAt: string
			/**
			 * @description Indicates if it is in live mode
			 * @example true
			 */
			liveMode: boolean
			/**
			 * @description Additional metadata associated with the estimate
			 * @example {
			 *       "key": "value"
			 *     }
			 */
			meta: Record<string, never>
			/**
			 * @description Name
			 * @example Estimate Name
			 */
			name: string
			/**
			 * @description User who sent the estimate
			 * @example user@example.com
			 */
			sentBy?: string
			/**
			 * @description Recipient details for the estimate
			 * @example {
			 *       "email": [
			 *         "test@example.com"
			 *       ],
			 *       "phoneNo": [
			 *         "+1 99444444444"
			 *       ]
			 *     }
			 */
			sentTo: components['schemas']['SentTo']
			/**
			 * @description Terms and conditions for the estimate, supports HTML markup
			 * @example <p>All services are subject to availability.</p>
			 */
			termsNotes?: string
			/**
			 * @description Title
			 * @example ESTIMATE
			 */
			title?: string
			/**
			 * @description Total amount
			 * @example 1222.03
			 */
			total: number
			/**
			 * @description Total amount in USD
			 * @example 1500.75
			 */
			totalamountInUSD: number
			/**
			 * @description Trace ID for logging and debugging
			 * @example 010c7a01-857f-4619-970d-xyxyxyxy
			 */
			traceId: string
			/**
			 * Format: date-time
			 * @description Timestamp when last updated
			 * @example 2025-02-12T13:17:47.416Z
			 */
			updatedAt: string
			/**
			 * @description User Id of who last updated
			 * @example 3HIpOF9NIc5ltriQXXXX
			 */
			updatedBy?: string
		}
		EstimateTemplateResponseDTO: {
			/**
			 * @description Version number
			 * @example 0
			 */
			__v: number
			/**
			 * @description Unique identifier
			 * @example 67ac9a51106ee8311e911XXXX
			 */
			_id: string
			/**
			 * @description Location Id or Agency Id
			 * @example 6578278e879ad2646715ba9c
			 */
			altId: string
			/** @enum {string} */
			altType: 'location'
			/** @description Attachments */
			attachments?: components['schemas']['AttachmentsDto'][]
			/**
			 * @description Indicates if automatic taxes are enabled for this estimate
			 * @example false
			 */
			automaticTaxesEnabled: boolean
			/**
			 * @description Business details associated with the estimate
			 * @example {
			 *       "logoUrl": "your_image-url",
			 *       "name": "Business name",
			 *       "address": {
			 *         "addressLine1": "address line 1",
			 *         "city": "Test City",
			 *         "state": "State Name",
			 *         "countryCode": "US",
			 *         "postalCode": "12345"
			 *       },
			 *       "phoneNo": "+1 1234567890",
			 *       "website": "www.example.com",
			 *       "customValues": [
			 *         {
			 *           "name": "Test",
			 *           "fieldKey": "{{custom_values.test}}",
			 *           "id": "5DYTWoiQvWiIJZXX44XXX",
			 *           "value": "Test's Custom Value"
			 *         }
			 *       ]
			 *     }
			 */
			businessDetails: components['schemas']['BusinessDetails']
			/**
			 * Format: date-time
			 * @description Timestamp when created
			 * @example 2025-02-12T13:17:47.416Z
			 */
			createdAt: string
			/**
			 * @description Currency code
			 * @example USD
			 */
			currency: string
			/**
			 * @description Indicates if deleted
			 * @example false
			 */
			deleted: boolean
			/**
			 * @description Discount details for the estimate template
			 * @example {
			 *       "type": "percentage",
			 *       "value": 0
			 *     }
			 */
			discount: components['schemas']['DiscountDto']
			/**
			 * @description Estimate number prefix
			 * @example EST-
			 */
			estimateNumberPrefix?: string
			/**
			 * @description An array of items
			 * @example [
			 *       {
			 *         "taxes": [],
			 *         "taxInclusive": false,
			 *         "_id": "67ac9a51106ee8311e911XXXX",
			 *         "description": "<p>Futuristic anti-gravity racing</p>",
			 *         "currency": "USD",
			 *         "productId": "67ac9a51106ee8311e911XXXX",
			 *         "priceId": "67ac9a51106ee8311e911XXXX",
			 *         "amount": 9.99,
			 *         "qty": 1,
			 *         "name": "TEST",
			 *         "type": "one_time"
			 *       },
			 *       {
			 *         "taxes": [
			 *           {
			 *             "_id": "67ac9a51106ee8311e911XXXX",
			 *             "name": "TaxTwo",
			 *             "rate": 8.5,
			 *             "calculation": "exclusive"
			 *           }
			 *         ],
			 *         "taxInclusive": true,
			 *         "_id": "67ac9a51106ee8311e911XXXX",
			 *         "productId": "67ac9a51106ee8311e911XXXX",
			 *         "priceId": "67ac9a51106ee8311e911XXXX",
			 *         "currency": "USD",
			 *         "name": "TEST2",
			 *         "qty": 1,
			 *         "amount": 500,
			 *         "description": "",
			 *         "type": "recurring"
			 *       }
			 *     ]
			 */
			items: unknown[][]
			/**
			 * @description Indicates if it is in live mode
			 * @example true
			 */
			liveMode: boolean
			/**
			 * @description Name
			 * @example Estimate Name
			 */
			name: string
			/**
			 * @description Terms and conditions for the estimate, supports HTML markup
			 * @example <p>All services are subject to availability.</p>
			 */
			termsNotes?: string
			/**
			 * @description Title
			 * @example ESTIMATE
			 */
			title?: string
			/**
			 * @description Total amount
			 * @example 1222.03
			 */
			total: number
			/**
			 * Format: date-time
			 * @description Timestamp when last updated
			 * @example 2025-02-12T13:17:47.416Z
			 */
			updatedAt: string
			/**
			 * @description User Id of who last updated
			 * @example 3HIpOF9NIc5ltriQXXXX
			 */
			updatedBy?: string
		}
		EstimateTemplatesDto: {
			/**
			 * @description Location Id or Agency Id
			 * @example 6578278e879ad2646715ba9c
			 */
			altId: string
			/** @enum {string} */
			altType: 'location'
			/** @description attachments for the invoice */
			attachments?: components['schemas']['AttachmentsDto'][]
			/**
			 * @description Automatic taxes enabled for the Estimate
			 * @default false
			 * @example true
			 */
			automaticTaxesEnabled: boolean
			businessDetails: components['schemas']['BusinessDetailsDto']
			/**
			 * @description Currency code
			 * @example USD
			 */
			currency: string
			discount: components['schemas']['DiscountDto']
			/**
			 * @description Prefix for the estimate number
			 * @default EST-
			 * @example EST-
			 */
			estimateNumberPrefix: string
			/** @description An array of items for the estimate. */
			items: unknown[][]
			/**
			 * @description livemode for estimate
			 * @default true
			 * @example true
			 */
			liveMode: boolean
			/**
			 * @description Meta data for the estimate
			 * @example {
			 *       "key": "value"
			 *     }
			 */
			meta?: Record<string, never>
			/** @description miscellaneous charges for the estimate */
			miscellaneousCharges?: components['schemas']['ProcessingFeeDto']
			/**
			 * @description Estimate Name
			 * @example Home Service Estimate Template
			 */
			name: string
			/** @description When sending estimate directly while saving */
			sendEstimateDetails?: components['schemas']['SendEstimateDto']
			/**
			 * @description Terms notes, Also supports HTML markups
			 * @example <p>This is a default terms.</p>
			 */
			termsNotes?: string
			/**
			 * @description Title for the estimate
			 * @example ESTIMATE
			 */
			title?: string
		}
		FrequencySettingsDto: {
			/**
			 * @description enabled for the frequency settings
			 * @example true
			 */
			enabled: boolean
			/** @description schedule setting for the estimate */
			schedule: components['schemas']['ScheduleOptionsDto']
		}
		GenerateEstimateNumberResponse: {
			estimateNumber: number
			traceId: string
		}
		GenerateInvoiceNumberResponseDto: {
			/**
			 * @description Invoice Number
			 * @example 19
			 */
			invoiceNumber?: number
		}
		GetInvoiceResponseDto: {
			/**
			 * @description Invoice Id
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
			 * @description Total Amount Due
			 * @example 999
			 */
			amountDue: number
			/**
			 * @description Amount Paid
			 * @example 0
			 */
			amountPaid: number
			/**
			 * @description Is Automatic taxes calculated for the Invoice items
			 * @example true
			 */
			automaticTaxesCalculated?: boolean
			/**
			 * @description Automatic taxes enabled for the Invoice
			 * @example true
			 */
			automaticTaxesEnabled?: boolean
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
			businessDetails: Record<string, never>
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
			contactDetails: Record<string, never>
			/**
			 * @description created at
			 * @example 2023-12-12T09:27:42.355Z
			 */
			createdAt: string
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
			discount?: Record<string, never>
			/**
			 * @description Due date in YYYY-MM-DD format
			 * @example 2023-01-01
			 */
			dueDate: string
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
			 * @description Invoice Number
			 * @example 19
			 */
			invoiceNumber: number
			/**
			 * @description Issue date in YYYY-MM-DD format
			 * @example 2023-01-01
			 */
			issueDate: string
			/**
			 * @description Live Mode
			 * @example false
			 */
			liveMode: boolean
			/**
			 * @description Name of the invoice
			 * @example New Invoice
			 */
			name: string
			/** @description split invoice into payment schedule summing up to full invoice amount */
			paymentSchedule?: Record<string, never>
			/** @description Reminders Configuration */
			remindersConfiguration?: components['schemas']['RemindersConfigurationDto']
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
			 * @description Title
			 * @example INVOICE
			 */
			title: string
			/**
			 * @description Total Amount
			 * @example 999
			 */
			total: number
			totalSummary: components['schemas']['TotalSummaryDto']
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
			 * @description Location Id or Agency Id
			 * @example 6578278e879ad2646715ba9c
			 */
			altId: string
			/** @enum {string} */
			altType: 'location'
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
			 * @description Compiled terms notes
			 * @example Confidential
			 */
			compiledTermsNotes: string
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
			 * @description created at
			 * @example 2023-12-12T09:27:42.355Z
			 */
			createdAt: string
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
			/** @description List of invoices */
			invoices: components['schemas']['DefaultInvoiceResponseDto'][]
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
			 * @description Live Mode
			 * @example false
			 */
			liveMode: boolean
			/**
			 * @description Name of the invoice
			 * @example New Invoice
			 */
			name: string
			schedule?: components['schemas']['ScheduleOptionsDto']
			/**
			 * @description Schedule Status
			 * @example draft
			 */
			status: Record<string, never>
			/**
			 * @description Terms notes
			 * @example Confidential
			 */
			termsNotes: string
			/**
			 * @description Title
			 * @example INVOICE
			 */
			title: string
			/**
			 * @description Total Amount
			 * @example 999
			 */
			total: number
			/**
			 * @description updated at
			 * @example 2023-12-12T09:27:42.355Z
			 */
			updatedAt: string
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
			 * @description created at
			 * @example 2023-12-12T09:27:42.355Z
			 */
			createdAt: string
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
			 * @description prefix for invoice number
			 * @example INV-
			 */
			invoiceNumberPrefix?: string
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
			 * @description Name of the Template
			 * @example New Template
			 */
			name: string
			/**
			 * @description Total Amount
			 * @example 999
			 */
			total: number
			/**
			 * @description updated at
			 * @example 2023-12-12T09:27:42.355Z
			 */
			updatedAt: string
		}
		InvoiceItemDto: {
			/**
			 * @description Product amount
			 * @example 999
			 */
			amount: number
			/**
			 * @description Tax category id for calculating automatic tax
			 * @example 6578278e879ad2646715ba9c
			 */
			automaticTaxCategoryId?: string
			/**
			 * @description Currency
			 * @example USD
			 */
			currency: string
			/**
			 * @description Invoice descriptions
			 * @example ABC Corp.
			 */
			description?: string
			/** @description Setupfee item, only created when 1st invoice of recurring schedule is generated */
			isSetupFeeItem?: boolean
			/**
			 * @description Invoice Item Name
			 * @example ABC Product
			 */
			name: string
			/**
			 * @description Price Id
			 * @example 6578278e879ad2646715ba9c
			 */
			priceId?: string
			/**
			 * @description Product Id
			 * @example 6578278e879ad2646715ba9c
			 */
			productId?: string
			/**
			 * @description Product Quantity
			 * @example 1
			 */
			qty: number
			/** @description Tax */
			taxes?: components['schemas']['ItemTaxDto'][]
			/**
			 * @description true if item amount is tax inclusive
			 * @default false
			 * @example true
			 */
			taxInclusive: boolean
			/**
			 * @description Price type of the item
			 * @example one_time
			 * @enum {string}
			 */
			type?: 'one_time' | 'recurring'
		}
		InvoiceSettingsSenderConfigurationDto: {
			/**
			 * @description Email id to be used while sending out invoices
			 * @example alex@example.com
			 */
			fromEmail?: string
			/**
			 * @description Sender name to be used while sending invoice
			 * @example Alex
			 */
			fromName?: string
		}
		ItemTaxDto: {
			_id: string
			/** @enum {string} */
			calculation?: 'exclusive'
			description?: string
			name: string
			rate: number
			taxId?: string
		}
		LateFeesConfigurationDto: {
			/**
			 * @description Enable late fees
			 * @example true
			 */
			enable: boolean
			/** @description Late Fees Frequency */
			frequency: components['schemas']['LateFeesFrequencyDto']
			/** @description Late Fees Grace */
			grace?: components['schemas']['LateFeesGraceDto']
			/** @description Max late fees payable */
			maxLateFees?: components['schemas']['LateFeesMaxFeesDto']
			/**
			 * @description Late Fees Type
			 * @example fixed
			 * @enum {string}
			 */
			type: 'fixed' | 'percentage'
			/**
			 * @description Late Fees Value
			 * @example 10
			 */
			value: number
		}
		LateFeesFrequencyDto: {
			/**
			 * @description Late fees interval
			 * @example day
			 * @enum {string}
			 */
			interval: 'minute' | 'hour' | 'day' | 'week' | 'month' | 'one_time'
			/**
			 * @description Late fees interval count
			 * @example 10
			 */
			intervalCount?: number
		}
		LateFeesGraceDto: {
			/**
			 * @description Late fees grace interval
			 * @example day
			 * @enum {string}
			 */
			interval: 'day'
			/**
			 * @description Late fees grace interval count
			 * @example 10
			 */
			intervalCount: number
		}
		LateFeesMaxFeesDto: {
			/**
			 * @example fixed
			 * @enum {string}
			 */
			type: 'fixed'
			/**
			 * @description 10
			 * @example Max late fees to pay
			 */
			value: number
		}
		ListEstimatesResponseDTO: {
			/** @description List of estimates */
			estimates: string[]
			/** @description Total number of estimates */
			total: number
			/** @description Unique identifier for tracing the request */
			traceId: string
		}
		ListEstimateTemplateResponseDTO: {
			/** @description List of estimate templates */
			data: string[]
			/** @description Total number of estimate templates available */
			totalCount: number
			/** @description Unique identifier for tracing the request */
			traceId: string
		}
		ListInvoicesResponseDto: {
			invoices: components['schemas']['GetInvoiceResponseDto'][]
			/**
			 * @description Total number of invoices
			 * @example 100
			 */
			total: number
		}
		ListSchedulesResponseDto: {
			schedules: components['schemas']['GetScheduleResponseDto'][]
			/**
			 * @description Total number of Schedules
			 * @example 100
			 */
			total: number
		}
		ListTemplatesResponseDto: {
			data: components['schemas']['GetTemplateResponseDto'][]
			/**
			 * @description Total number of Templates
			 * @example 100
			 */
			totalCount: number
		}
		OldCreateInvoiceDTO: Record<string, never>
		PatchInvoiceStatsLastViewedDto: {
			/**
			 * @description Invoice Id
			 * @example 6578278e879ad2646715ba9c
			 */
			invoiceId: string
		}
		PaymentMethodDto: {
			/** @description Payment Method */
			stripe: components['schemas']['StripePaymentMethodDto']
		}
		PaymentScheduleConfigDto: {
			/** @description Due date type configuration */
			dateConfig: components['schemas']['PaymentScheduleDateConfigDto']
			/** @description Payment Schedule Items */
			schedules: unknown[][]
			/**
			 * @description Payment Schedule Type
			 * @example fixed
			 * @enum {string}
			 */
			type: 'fixed' | 'percentage'
		}
		PaymentScheduleDateConfigDto: {
			/**
			 * @description Deposit date type
			 * @example estimate_accepted
			 * @enum {string}
			 */
			depositDateType: 'estimate_accepted' | 'custom'
			/**
			 * @description Payment Schedule Date Type
			 * @example regular_interval
			 * @enum {string}
			 */
			scheduleDateType: 'regular_interval' | 'custom'
		}
		PaymentScheduleDto: {
			/** @description payment schedule item */
			schedules: string[]
			/**
			 * @description Payment schedule type
			 * @example percentage
			 * @enum {string}
			 */
			type: 'fixed' | 'percentage'
		}
		ProcessingFeeDto: {
			/** @description charges for the processing fee */
			charges: unknown[][]
			/**
			 * @description collected miscellaneous charges
			 * @example 10
			 */
			collectedMiscellaneousCharges?: number
			/** @description paid miscellaneous charges */
			paidCharges?: components['schemas']['ProcessingFeePaidChargeDto'][]
		}
		ProcessingFeePaidChargeDto: {
			/**
			 * @description id of the processing fee
			 * @example 673d01d7d547648a8dab6211
			 */
			_id: string
			/**
			 * @description amount of the processing fee
			 * @example 10
			 */
			amount: number
			/**
			 * @description charge for the processing fee
			 * @example 10
			 */
			charge: number
			/**
			 * @description name of the processing fee
			 * @example Processing Fee
			 */
			name: string
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
			 * @description Amount to be paid against the invoice.
			 * @example 999
			 */
			amount?: number
			card: components['schemas']['CardDto']
			cheque: components['schemas']['ChequeDto']
			/**
			 * @description Updated At to be recorded against the invoice.
			 * @example 2025-03-19T05:03:00.000Z
			 */
			fulfilledAt?: string
			meta?: Record<string, never>
			/**
			 * @description manual payment method
			 * @example card
			 * @enum {string}
			 */
			mode: 'cash' | 'card' | 'cheque' | 'bank_transfer' | 'other'
			/**
			 * @description Any note to be recorded with the transaction
			 * @example This was a direct payment
			 */
			notes: string
			/**
			 * @description Payment Schedule Ids to be recorded against the invoice.
			 * @example [
			 *       "6578278e879ad2646715ba9c"
			 *     ]
			 */
			paymentScheduleIds?: string[]
		}
		RecordPaymentResponseDto: {
			invoice: components['schemas']['DefaultInvoiceResponseDto']
			/**
			 * @description status
			 * @example true
			 */
			success: boolean
		}
		ReminderDto: {
			/**
			 * @description Subject of the reminder
			 * @example Reminder
			 */
			emailSubject: string
			/**
			 * @description Email template to be used for sending reminders
			 * @example default
			 */
			emailTemplate: string
			/**
			 * @description Flag indicating if the reminder is enabled or not
			 * @example true
			 */
			enabled: boolean
			/**
			 * @description Business Hour End Time
			 * @example 5:00 PM
			 */
			endTime?: string
			/**
			 * @description Interval type for the reminder
			 * @example daily
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
			/**
			 * @description Maximum number of reminders that can be sent
			 * @example 3
			 */
			maxReminders: number
			/**
			 * @description Unique identifier for the reminder
			 * @example 9333e45f-a27d-4659-90e5-76c5ef06d094
			 */
			reminderId: string
			/**
			 * @description Condition for sending the reminder
			 * @example invoice_sent
			 * @enum {string}
			 */
			reminderInvoiceCondition: 'invoice_sent' | 'invoice_overdue'
			/**
			 * @description Name of the reminder
			 * @example Special Reminder
			 */
			reminderName: string
			/**
			 * @description frequency gap of the reminder to exeucte
			 * @example 10
			 */
			reminderNumber: number
			/**
			 * @description Time condition for the reminder
			 * @example before
			 * @enum {string}
			 */
			reminderTime: 'before' | 'after'
			/**
			 * @description SMS template to be used for sending reminders
			 * @example default
			 */
			smsTemplate: string
			/**
			 * @description Business Hour Start Time
			 * @example 9:00 AM
			 */
			startTime?: string
			/**
			 * @description Timezone at which reminder will be sent
			 * @example businessTZ
			 */
			timezone?: string
		}
		ReminderExecutionDetailsList: Record<string, never>
		RemindersConfigurationDto: {
			/** @description List of reminders */
			reminderExecutionDetailsList: components['schemas']['ReminderExecutionDetailsList']
			/** @description Reminder settings */
			reminderSettings: components['schemas']['ReminderSettingsDto']
		}
		ReminderSettingsDto: {
			/**
			 * @description default template Id of reminder
			 * @example dhwjqi2899012990w2u
			 */
			defaultEmailTemplateId: string
			/** @description List of reminders */
			reminders: components['schemas']['ReminderDto'][]
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
			/** @description auto-payment configuration */
			autoPayment?: components['schemas']['AutoPaymentDetailsDto']
			liveMode: boolean
		}
		ScheduleInvoiceScheduleResponseDto: {
			/**
			 * @description Schedule Id
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
			 * @description Compiled terms notes
			 * @example Confidential
			 */
			compiledTermsNotes: string
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
			 * @description created at
			 * @example 2023-12-12T09:27:42.355Z
			 */
			createdAt: string
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
			/** @description List of invoices */
			invoices: components['schemas']['DefaultInvoiceResponseDto'][]
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
			 * @description Live Mode
			 * @example false
			 */
			liveMode: boolean
			/**
			 * @description Name of the invoice
			 * @example New Invoice
			 */
			name: string
			schedule?: components['schemas']['ScheduleOptionsDto']
			/**
			 * @description Schedule Status
			 * @example draft
			 */
			status: Record<string, never>
			/**
			 * @description Terms notes
			 * @example Confidential
			 */
			termsNotes: string
			/**
			 * @description Title
			 * @example INVOICE
			 */
			title: string
			/**
			 * @description Total Amount
			 * @example 999
			 */
			total: number
			/**
			 * @description updated at
			 * @example 2023-12-12T09:27:42.355Z
			 */
			updatedAt: string
		}
		ScheduleOptionsDto: {
			executeAt?: string
			rrule?: components['schemas']['CustomRRuleOptionsDto']
		}
		SendEstimateDto: {
			/** @enum {string} */
			action: 'sms_and_email' | 'send_manually' | 'email' | 'sms'
			/**
			 * @description Location Id or Agency Id
			 * @example 6578278e879ad2646715ba9c
			 */
			altId: string
			/** @enum {string} */
			altType: 'location'
			/**
			 * @description estimate name
			 * @example Estimate
			 */
			estimateName?: string
			/**
			 * @description livemode for estimate
			 * @example true
			 */
			liveMode: boolean
			/** @description sender details for invoice, valid only if invoice is not sent manually */
			sentFrom?: components['schemas']['InvoiceSettingsSenderConfigurationDto']
			/**
			 * @description Please ensure that the UserId corresponds to an authorized personnel, either by an employee ID or agency ID, to access this location. This account will serve as the primary channel for all future communications and updates.
			 * @example 6578278e879ad2646715ba9c
			 */
			userId: string
		}
		SendInvoiceDto: {
			/** @enum {string} */
			action: 'sms_and_email' | 'send_manually' | 'email' | 'sms'
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
			/** @description auto-payment configuration */
			autoPayment?: components['schemas']['AutoPaymentDetailsDto']
			liveMode: boolean
			/** @description sender details for invoice, valid only if invoice is not sent manually */
			sentFrom?: components['schemas']['InvoiceSettingsSenderConfigurationDto']
			/**
			 * @description Please ensure that the UserId corresponds to an authorized personnel, either by an employee ID or agency ID, to access this location. This account will serve as the primary channel for all future communications and updates.
			 * @example 6578278e879ad2646715ba9c
			 */
			userId: string
		}
		SendInvoicesResponseDto: {
			emailData: Record<string, never>
			invoice: components['schemas']['DefaultInvoiceResponseDto']
			smsData: Record<string, never>
		}
		SentTo: Record<string, never>
		SentToDto: {
			/**
			 * @description Email Address
			 * @example [
			 *       "alex@example.com"
			 *     ]
			 */
			email: string[]
			/**
			 * @description bcc to be kept in any sent out emails
			 * @example [
			 *       "alex@example.com"
			 *     ]
			 */
			emailBcc?: string[]
			/**
			 * @description cc to be kept in any sent out emails
			 * @example [
			 *       "alex@example.com"
			 *     ]
			 */
			emailCc?: string[]
			/**
			 * @description Contact Phone Number
			 * @example [
			 *       "+1-214-559-6993"
			 *     ]
			 */
			phoneNo?: string[]
		}
		SepaDirectDebitDTO: {
			bank_code: string
			branch_code: string
			last4: string
		}
		StripePaymentMethodDto: {
			/**
			 * @description Enable Bank Debit Only
			 * @example false
			 */
			enableBankDebitOnly: boolean
		}
		Text2PayDto: {
			/**
			 * @description create invoice in draft mode or send mode
			 * @example draft
			 * @enum {string}
			 */
			action: 'draft' | 'send'
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
			/** @description attachments for the invoice */
			attachments?: components['schemas']['AttachmentsDto'][]
			/**
			 * @description Automatic taxes enabled for the Invoice
			 * @example true
			 */
			automaticTaxesEnabled?: boolean
			businessDetails?: components['schemas']['BusinessDetailsDto']
			/** @description Contact information to send the invoice to */
			contactDetails: components['schemas']['ContactDetailsDto']
			/**
			 * @description Currency code
			 * @example USD
			 */
			currency: string
			discount?: components['schemas']['DiscountDto']
			/**
			 * @description Due date in YYYY-MM-DD format
			 * @example 2023-01-14
			 */
			dueDate?: string
			/** @description id of invoice to update. If skipped, a new invoice will be created */
			id?: string
			/**
			 * @description include terms & notes with receipts
			 * @example true
			 */
			includeTermsNote?: boolean
			/**
			 * @description Invoice Number
			 * @example 1001
			 */
			invoiceNumber?: string
			/**
			 * @description prefix for invoice number
			 * @example INV-
			 */
			invoiceNumberPrefix?: string
			/**
			 * @description Issue date in YYYY-MM-DD format
			 * @example 2023-01-01
			 */
			issueDate: string
			/** @description An array of items for the invoice. */
			items: components['schemas']['InvoiceItemDto'][]
			/** @description late fees configuration */
			lateFeesConfiguration?: components['schemas']['LateFeesConfigurationDto']
			liveMode: boolean
			/** @description miscellaneous charges for the invoice */
			miscellaneousCharges?: components['schemas']['ProcessingFeeDto']
			/**
			 * @description Invoice Name
			 * @example New Invoice
			 */
			name: string
			/** @description Payment Methods for Invoices */
			paymentMethods?: components['schemas']['PaymentMethodDto']
			/** @description split invoice into payment schedule summing up to full invoice amount */
			paymentSchedule?: components['schemas']['PaymentScheduleDto']
			sentTo: components['schemas']['SentToDto']
			/**
			 * @description Terms notes, Also supports HTML markups
			 * @example <p>This is a default terms.</p>
			 */
			termsNotes?: string
			/** @description tips configuration for the invoice */
			tipsConfiguration?: components['schemas']['TipsConfigurationDto']
			/**
			 * @description Title for the invoice
			 * @example INVOICE
			 */
			title?: string
			/** @description id of user generating invoice */
			userId: string
		}
		Text2PayInvoiceResponseDto: {
			invoice: components['schemas']['DefaultInvoiceResponseDto']
			/** @description preview url of generated invoice */
			invoiceUrl: string
		}
		TipsConfigurationDto: {
			/**
			 * @description Tips enabled status
			 * @example true
			 */
			tipsEnabled: boolean
			/**
			 * @description Percentage of tips allowed
			 * @example [
			 *       5,
			 *       10,
			 *       15
			 *     ]
			 */
			tipsPercentage: string[]
		}
		TotalSummaryDto: {
			/**
			 * @description discount
			 * @example 0
			 */
			discount: number
			/**
			 * @description subTotal
			 * @example 999
			 */
			subTotal: number
			/**
			 * @description tax
			 * @example 0
			 */
			tax: number
		}
		UnauthorizedDTO: {
			/** @example Unauthorized */
			error?: string
			/** @example Invalid token: access token is invalid */
			message?: string
			/** @example 401 */
			statusCode?: number
		}
		UnprocessableDTO: {
			/** @example Unprocessable Entity */
			error?: string
			/**
			 * @example [
			 *       "Unprocessable Entity"
			 *     ]
			 */
			message?: string[]
			/** @example 422 */
			statusCode?: number
		}
		UpdateAndScheduleInvoiceScheduleResponseDto: {
			/**
			 * @description Schedule Id
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
			 * @description Compiled terms notes
			 * @example Confidential
			 */
			compiledTermsNotes: string
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
			 * @description created at
			 * @example 2023-12-12T09:27:42.355Z
			 */
			createdAt: string
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
			/** @description List of invoices */
			invoices: components['schemas']['DefaultInvoiceResponseDto'][]
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
			 * @description Live Mode
			 * @example false
			 */
			liveMode: boolean
			/**
			 * @description Name of the invoice
			 * @example New Invoice
			 */
			name: string
			schedule?: components['schemas']['ScheduleOptionsDto']
			/**
			 * @description Schedule Status
			 * @example draft
			 */
			status: Record<string, never>
			/**
			 * @description Terms notes
			 * @example Confidential
			 */
			termsNotes: string
			/**
			 * @description Title
			 * @example INVOICE
			 */
			title: string
			/**
			 * @description Total Amount
			 * @example 999
			 */
			total: number
			/**
			 * @description updated at
			 * @example 2023-12-12T09:27:42.355Z
			 */
			updatedAt: string
		}
		UpdateEstimateDto: {
			/**
			 * @description Location Id or Agency Id
			 * @example 6578278e879ad2646715ba9c
			 */
			altId: string
			/** @enum {string} */
			altType: 'location'
			/** @description attachments for the invoice */
			attachments?: components['schemas']['AttachmentsDto'][]
			/**
			 * @description Auto invoice for the estimate
			 * @example {
			 *       "enabled": true,
			 *       "directPayments": true
			 *     }
			 */
			autoInvoice?: components['schemas']['AutoInvoicingDto']
			/**
			 * @description Automatic taxes enabled for the Estimate
			 * @default false
			 * @example true
			 */
			automaticTaxesEnabled: boolean
			businessDetails: components['schemas']['BusinessDetailsDto']
			/** @description Contact information to send the estimate to */
			contactDetails: components['schemas']['ContactDetailsDto']
			/**
			 * @description Currency code
			 * @example USD
			 */
			currency: string
			discount: components['schemas']['DiscountDto']
			/**
			 * @description Estimate Number, if not specified will take in the next valid estimate number
			 * @example 1001
			 */
			estimateNumber?: number
			/**
			 * @description Prefix for the estimate number
			 * @default EST-
			 * @example EST-
			 */
			estimateNumberPrefix: string
			/**
			 * @description Estimate Status
			 * @example sent
			 * @enum {string}
			 */
			estimateStatus?:
				| 'all'
				| 'draft'
				| 'sent'
				| 'accepted'
				| 'declined'
				| 'invoiced'
				| 'viewed'
			/**
			 * @description expiry date estimate
			 * @example 2024-08-10
			 */
			expiryDate?: string
			/** @description frequency settings for the estimate */
			frequencySettings: components['schemas']['FrequencySettingsDto']
			/**
			 * @description issue date estimate
			 * @example 2024-08-07
			 */
			issueDate?: string
			/** @description An array of items for the estimate. */
			items: components['schemas']['InvoiceItemDto'][]
			/**
			 * @description livemode for estimate
			 * @default true
			 * @example true
			 */
			liveMode: boolean
			/**
			 * @description Meta data for the estimate
			 * @example {
			 *       "key": "value"
			 *     }
			 */
			meta?: Record<string, never>
			/** @description miscellaneous charges for the estimate */
			miscellaneousCharges?: components['schemas']['ProcessingFeeDto']
			/**
			 * @description Estimate Name
			 * @example Home Service Estimate
			 */
			name: string
			/** @description Payment Schedule Config for the estimate */
			paymentScheduleConfig?: components['schemas']['PaymentScheduleConfigDto']
			/** @description When sending estimate directly while saving */
			sendEstimateDetails?: components['schemas']['SendEstimateDto']
			/** @description Email and sent to details for the estimate */
			sentTo?: components['schemas']['SentToDto']
			/**
			 * @description Terms notes, Also supports HTML markups
			 * @example <p>This is a default terms.</p>
			 */
			termsNotes?: string
			/**
			 * @description Title for the estimate
			 * @example ESTIMATE
			 */
			title?: string
			/**
			 * @description User Id
			 * @example 6578278e879ad2646715ba9c
			 */
			userId?: string
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
			/** @description attachments for the invoice */
			attachments?: components['schemas']['AttachmentsDto'][]
			/**
			 * @description Automatic taxes enabled for the Invoice
			 * @example true
			 */
			automaticTaxesEnabled?: boolean
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
			contactDetails?: components['schemas']['ContactDetailsDto']
			/**
			 * @description Id of the contact which you need to send the invoice
			 * @example 6578278e879ad2646715ba9c
			 */
			contactId?: string
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
			discount?: components['schemas']['DiscountDto']
			/**
			 * @description Due date in YYYY-MM-DD format
			 * @example 2023-01-14
			 */
			dueDate: string
			invoiceItems: components['schemas']['InvoiceItemDto'][]
			/**
			 * @description Invoice Number
			 * @example 1001
			 */
			invoiceNumber?: string
			/**
			 * @description prefix for invoice number
			 * @example INV-
			 */
			invoiceNumberPrefix?: string
			/**
			 * @description Issue date in YYYY-MM-DD format
			 * @example 2023-01-01
			 */
			issueDate: string
			/** @description Payment mode */
			liveMode?: boolean
			/** @description miscellaneous charges for the invoice */
			miscellaneousCharges?: components['schemas']['ProcessingFeeDto']
			/**
			 * @description Name to be updated
			 * @example New Invoice
			 */
			name: string
			/** @description Payment Methods for Invoices */
			paymentMethods?: components['schemas']['PaymentMethodDto']
			/** @description split invoice into payment schedule summing up to full invoice amount */
			paymentSchedule?: components['schemas']['PaymentScheduleDto']
			/**
			 * @description Terms notes, Also supports HTML markups
			 * @example <p>This is a default terms.</p>
			 */
			termsNotes?: string
			/** @description tips configuration for the invoice */
			tipsConfiguration?: components['schemas']['TipsConfigurationDto']
			/**
			 * @description Title for the invoice
			 * @example INVOICE
			 */
			title?: string
			xeroDetails?: Record<string, never>
		}
		UpdateInvoiceLateFeesConfigurationDto: {
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
			/** @description late fees configuration */
			lateFeesConfiguration: components['schemas']['LateFeesConfigurationDto']
		}
		UpdateInvoiceResponseDto: {
			/**
			 * @description Invoice Id
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
			 * @description Total Amount Due
			 * @example 999
			 */
			amountDue: number
			/**
			 * @description Amount Paid
			 * @example 0
			 */
			amountPaid: number
			/**
			 * @description Is Automatic taxes calculated for the Invoice items
			 * @example true
			 */
			automaticTaxesCalculated?: boolean
			/**
			 * @description Automatic taxes enabled for the Invoice
			 * @example true
			 */
			automaticTaxesEnabled?: boolean
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
			businessDetails: Record<string, never>
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
			contactDetails: Record<string, never>
			/**
			 * @description created at
			 * @example 2023-12-12T09:27:42.355Z
			 */
			createdAt: string
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
			discount?: Record<string, never>
			/**
			 * @description Due date in YYYY-MM-DD format
			 * @example 2023-01-01
			 */
			dueDate: string
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
			 * @description Invoice Number
			 * @example 19
			 */
			invoiceNumber: number
			/**
			 * @description Issue date in YYYY-MM-DD format
			 * @example 2023-01-01
			 */
			issueDate: string
			/**
			 * @description Live Mode
			 * @example false
			 */
			liveMode: boolean
			/**
			 * @description Name of the invoice
			 * @example New Invoice
			 */
			name: string
			/** @description split invoice into payment schedule summing up to full invoice amount */
			paymentSchedule?: Record<string, never>
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
			 * @description Title
			 * @example INVOICE
			 */
			title: string
			/**
			 * @description Total Amount
			 * @example 999
			 */
			total: number
			/**
			 * @description updated at
			 * @example 2023-12-12T09:27:42.355Z
			 */
			updatedAt: string
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
			/** @description attachments for the invoice */
			attachments?: components['schemas']['AttachmentsDto'][]
			businessDetails: components['schemas']['BusinessDetailsDto']
			contactDetails: components['schemas']['ContactDetailsDto']
			currency: string
			discount: components['schemas']['DiscountDto']
			items: components['schemas']['InvoiceItemDto'][]
			liveMode: boolean
			/** @description miscellaneous charges for the invoice */
			miscellaneousCharges?: components['schemas']['ProcessingFeeDto']
			name: string
			schedule: components['schemas']['ScheduleOptionsDto']
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
			 * @description Location Id or Agency Id
			 * @example 6578278e879ad2646715ba9c
			 */
			altId: string
			/** @enum {string} */
			altType: 'location'
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
			 * @description Compiled terms notes
			 * @example Confidential
			 */
			compiledTermsNotes: string
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
			 * @description created at
			 * @example 2023-12-12T09:27:42.355Z
			 */
			createdAt: string
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
			/** @description List of invoices */
			invoices: components['schemas']['DefaultInvoiceResponseDto'][]
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
			 * @description Live Mode
			 * @example false
			 */
			liveMode: boolean
			/**
			 * @description Name of the invoice
			 * @example New Invoice
			 */
			name: string
			schedule?: components['schemas']['ScheduleOptionsDto']
			/**
			 * @description Schedule Status
			 * @example draft
			 */
			status: Record<string, never>
			/**
			 * @description Terms notes
			 * @example Confidential
			 */
			termsNotes: string
			/**
			 * @description Title
			 * @example INVOICE
			 */
			title: string
			/**
			 * @description Total Amount
			 * @example 999
			 */
			total: number
			/**
			 * @description updated at
			 * @example 2023-12-12T09:27:42.355Z
			 */
			updatedAt: string
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
			businessDetails: components['schemas']['BusinessDetailsDto']
			currency: string
			discount?: components['schemas']['DiscountDto']
			internal?: boolean
			items: components['schemas']['InvoiceItemDto'][]
			/** @description miscellaneous charges for the invoice */
			miscellaneousCharges?: components['schemas']['ProcessingFeeDto']
			/**
			 * @description Name of the template
			 * @example New Template
			 */
			name: string
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
			 * @description created at
			 * @example 2023-12-12T09:27:42.355Z
			 */
			createdAt: string
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
			 * @description prefix for invoice number
			 * @example INV-
			 */
			invoiceNumberPrefix?: string
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
			 * @description Name of the Template
			 * @example New Template
			 */
			name: string
			/**
			 * @description Total Amount
			 * @example 999
			 */
			total: number
			/**
			 * @description updated at
			 * @example 2023-12-12T09:27:42.355Z
			 */
			updatedAt: string
		}
		UpdatePaymentMethodsConfigurationDto: {
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
			/** @description Payment Methods for Invoices */
			paymentMethods?: components['schemas']['PaymentMethodDto']
		}
		USBankAccountDto: {
			bank_name: string
			last4: string
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
			 * @description Location Id or Agency Id
			 * @example 6578278e879ad2646715ba9c
			 */
			altId: string
			/** @enum {string} */
			altType: 'location'
			/**
			 * @description Total Amount Due
			 * @example 999
			 */
			amountDue: number
			/**
			 * @description Amount Paid
			 * @example 0
			 */
			amountPaid: number
			/**
			 * @description Is Automatic taxes calculated for the Invoice items
			 * @example true
			 */
			automaticTaxesCalculated?: boolean
			/**
			 * @description Automatic taxes enabled for the Invoice
			 * @example true
			 */
			automaticTaxesEnabled?: boolean
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
			businessDetails: Record<string, never>
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
			contactDetails: Record<string, never>
			/**
			 * @description created at
			 * @example 2023-12-12T09:27:42.355Z
			 */
			createdAt: string
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
			discount?: Record<string, never>
			/**
			 * @description Due date in YYYY-MM-DD format
			 * @example 2023-01-01
			 */
			dueDate: string
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
			 * @description Invoice Number
			 * @example 19
			 */
			invoiceNumber: number
			/**
			 * @description Issue date in YYYY-MM-DD format
			 * @example 2023-01-01
			 */
			issueDate: string
			/**
			 * @description Live Mode
			 * @example false
			 */
			liveMode: boolean
			/**
			 * @description Name of the invoice
			 * @example New Invoice
			 */
			name: string
			/** @description split invoice into payment schedule summing up to full invoice amount */
			paymentSchedule?: Record<string, never>
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
			 * @description Title
			 * @example INVOICE
			 */
			title: string
			/**
			 * @description Total Amount
			 * @example 999
			 */
			total: number
			/**
			 * @description updated at
			 * @example 2023-12-12T09:27:42.355Z
			 */
			updatedAt: string
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
	'list-invoices': {
		parameters: {
			query: {
				/** @description location Id / company Id based on altType */
				altId: string
				/** @description Alt Type */
				altType: 'location'
				/** @description Contact ID for the invoice */
				contactId?: string
				/** @description endAt in YYYY-MM-DD format */
				endAt?: string
				/** @description Limit the number of items to return */
				limit: string
				/** @description Number of items to skip */
				offset: string
				/** @description payment mode */
				paymentMode?: 'default' | 'live' | 'test'
				/** @description To search for an invoice by id / name / email / phoneNo */
				search?: string
				/** @description The field on which sorting should be applied */
				sortField?: 'issueDate'
				/** @description The order of sort which should be applied for the sortField */
				sortOrder?: 'ascend' | 'descend'
				/** @description startAt in YYYY-MM-DD format */
				startAt?: string
				/** @description status to be filtered */
				status?: string
			}
			header: {
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
	'get-invoice': {
		parameters: {
			query: {
				/** @description location Id / company Id based on altType */
				altId: string
				/** @description Alt Type */
				altType: 'location'
			}
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description Invoice Id */
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
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description Invoice Id */
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
				/** @description location Id / company Id based on altType */
				altId: string
				/** @description Alt Type */
				altType: 'location'
			}
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description Invoice Id */
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
	'update-invoice-late-fees-configuration': {
		parameters: {
			query?: never
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description Invoice Id */
				invoiceId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['UpdateInvoiceLateFeesConfigurationDto']
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
	'record-invoice': {
		parameters: {
			query?: never
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description Invoice Id */
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
	'send-invoice': {
		parameters: {
			query?: never
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description Invoice Id */
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
	'void-invoice': {
		parameters: {
			query?: never
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description Invoice Id */
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
	'create-new-estimate': {
		parameters: {
			query?: never
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path?: never
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['CreateEstimatesDto']
			}
		}
		responses: {
			/** @description Created */
			201: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['EstimateResponseDto']
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
	'update-estimate': {
		parameters: {
			query?: never
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description Estimate Id */
				estimateId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['UpdateEstimateDto']
			}
		}
		responses: {
			/** @description Successfully updated */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['EstimateResponseDto']
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
	'delete-estimate': {
		parameters: {
			query?: never
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description Estimate Id */
				estimateId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['AltDto']
			}
		}
		responses: {
			/** @description Successfully Deleted */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['EstimateResponseDto']
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
	'create-invoice-from-estimate': {
		parameters: {
			query?: never
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description Estimate Id */
				estimateId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['CreateInvoiceFromEstimateDto']
			}
		}
		responses: {
			/** @description Successfully Created */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['CreateInvoiceFromEstimateResponseDTO']
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
	'send-estimate': {
		parameters: {
			query?: never
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description Estimate Id */
				estimateId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['SendEstimateDto']
			}
		}
		responses: {
			/** @description Created */
			201: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['EstimateResponseDto']
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
	'list-estimates': {
		parameters: {
			query: {
				/** @description Location Id or Agency Id */
				altId: string
				altType: 'location'
				/** @description Contact ID for the estimate */
				contactId?: string
				/** @description endAt in YYYY-MM-DD format */
				endAt?: string
				/** @description Limit the number of items to return */
				limit: string
				/** @description Number of items to skip */
				offset: string
				/** @description search text for estimates name */
				search?: string
				/** @description startAt in YYYY-MM-DD format */
				startAt?: string
				/** @description estimate status */
				status?:
					| 'all'
					| 'draft'
					| 'sent'
					| 'accepted'
					| 'declined'
					| 'invoiced'
					| 'viewed'
			}
			header: {
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
					'application/json': components['schemas']['ListEstimatesResponseDTO']
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
	'generate-estimate-number': {
		parameters: {
			query: {
				/** @description Location Id or Agency Id */
				altId: string
				altType: 'location'
			}
			header: {
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
					'application/json': components['schemas']['GenerateEstimateNumberResponse']
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
	'update-estimate-last-visited-at': {
		parameters: {
			query?: never
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path?: never
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['EstimateIdParam']
			}
		}
		responses: {
			200: {
				headers: {
					[name: string]: unknown
				}
				content?: never
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
		}
	}
	'list-estimate-templates': {
		parameters: {
			query: {
				/** @description Location Id or Agency Id */
				altId: string
				altType: 'location'
				/** @description Limit the number of items to return */
				limit: string
				/** @description Number of items to skip */
				offset: string
				/** @description To search for an estimate template by id / name */
				search?: string
			}
			header: {
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
					'application/json': components['schemas']['ListEstimateTemplateResponseDTO']
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
	'create-estimate-template': {
		parameters: {
			query?: never
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path?: never
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['EstimateTemplatesDto']
			}
		}
		responses: {
			/** @description Successfully created */
			201: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['EstimateTemplateResponseDTO']
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
	'update-estimate-template': {
		parameters: {
			query?: never
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description Template Id */
				templateId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['EstimateTemplatesDto']
			}
		}
		responses: {
			/** @description Successfully updated */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['EstimateTemplateResponseDTO']
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
	'delete-estimate-template': {
		parameters: {
			query?: never
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description Template Id */
				templateId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['AltDto']
			}
		}
		responses: {
			/** @description Successfully deleted */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['EstimateTemplateResponseDTO']
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
	'preview-estimate-template': {
		parameters: {
			query: {
				/** @description Location Id or Agency Id */
				altId: string
				altType: 'location'
				/** @description Template Id */
				templateId: string
			}
			header: {
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
					'application/json': components['schemas']['EstimateTemplateResponseDTO']
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
	'list-invoice-schedules': {
		parameters: {
			query: {
				/** @description location Id / company Id based on altType */
				altId: string
				/** @description Alt Type */
				altType: 'location'
				/** @description endAt in YYYY-MM-DD format */
				endAt?: string
				/** @description Limit the number of items to return */
				limit: string
				/** @description Number of items to skip */
				offset: string
				/** @description payment mode */
				paymentMode?: 'default' | 'live' | 'test'
				/** @description To search for an invoice by id / name / email / phoneNo */
				search?: string
				/** @description startAt in YYYY-MM-DD format */
				startAt?: string
				/** @description status to be filtered */
				status?: string
			}
			header: {
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
				/** @description location Id / company Id based on altType */
				altId: string
				/** @description Alt Type */
				altType: 'location'
			}
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description Schedule Id */
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
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description Schedule Id */
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
				/** @description location Id / company Id based on altType */
				altId: string
				/** @description Alt Type */
				altType: 'location'
			}
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description Schedule Id */
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
	'auto-payment-invoice-schedule': {
		parameters: {
			query?: never
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description Schedule Id */
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
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description Schedule Id */
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
	'schedule-invoice-schedule': {
		parameters: {
			query?: never
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description Schedule Id */
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
	'update-and-schedule-invoice-schedule': {
		parameters: {
			query?: never
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description Schedule Id */
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
					'application/json': components['schemas']['UpdateAndScheduleInvoiceScheduleResponseDto']
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
	'update-invoice-last-visited-at': {
		parameters: {
			query?: never
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path?: never
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['PatchInvoiceStatsLastViewedDto']
			}
		}
		responses: {
			200: {
				headers: {
					[name: string]: unknown
				}
				content?: never
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
		}
	}
	'list-invoice-templates': {
		parameters: {
			query: {
				/** @description location Id / company Id based on altType */
				altId: string
				/** @description Alt Type */
				altType: 'location'
				/** @description endAt in YYYY-MM-DD format */
				endAt?: string
				/** @description Limit the number of items to return */
				limit: string
				/** @description Number of items to skip */
				offset: string
				/** @description payment mode */
				paymentMode?: 'default' | 'live' | 'test'
				/** @description To search for an invoice by id / name / email / phoneNo */
				search?: string
				/** @description startAt in YYYY-MM-DD format */
				startAt?: string
				/** @description status to be filtered */
				status?: string
			}
			header: {
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
				/** @description location Id / company Id based on altType */
				altId: string
				/** @description Alt Type */
				altType: 'location'
			}
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description Template Id */
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
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description Template Id */
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
				/** @description location Id / company Id based on altType */
				altId: string
				/** @description Alt Type */
				altType: 'location'
			}
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description Template Id */
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
	'update-invoice-template-late-fees-configuration': {
		parameters: {
			query?: never
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description Template Id */
				templateId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['UpdateInvoiceLateFeesConfigurationDto']
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
	'update-invoice-payment-methods-configuration': {
		parameters: {
			query?: never
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description Template Id */
				templateId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['UpdatePaymentMethodsConfigurationDto']
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
	'text2pay-invoice': {
		parameters: {
			query?: never
			header: {
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
}
