export type paths = {
	'/payments/custom-provider/connect': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Fetch given provider config
		 * @description API for fetching an existing payment config for given location
		 */
		get: operations['fetch-config']
		put?: never
		/**
		 * Create new provider config
		 * @description API to create a new payment config for given location
		 */
		post: operations['create-config']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/payments/custom-provider/disconnect': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Disconnect existing provider config
		 * @description API to disconnect an existing payment config for given location
		 */
		post: operations['disconnect-config']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/payments/custom-provider/provider': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Create new integration
		 * @description API to create a new association for an app and location
		 */
		post: operations['create-integration']
		/**
		 * Deleting an existing integration
		 * @description API to delete an association for an app and location
		 */
		delete: operations['create-integration_delete']
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/payments/integrations/provider/whitelabel': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * List White-label Integration Providers
		 * @description The "List White-label Integration Providers" API allows to retrieve a paginated list of integration providers. Customize your results by filtering whitelabel integration providers(which are built directly on top of Authorize.net or NMI) based on name or paginate through the list using the provided query parameters. This endpoint provides a straightforward way to explore and retrieve integration provider information.
		 */
		get: operations['list-integration-providers']
		put?: never
		/**
		 * Create White-label Integration Provider
		 * @description The "Create White-label Integration Provider" API allows adding a new payment provider integration to the system which is built on top of Authorize.net or NMI. Use this endpoint to create a integration provider with the specified details. Ensure that the required information is provided in the request payload. This endpoint can be only invoked using marketplace-app token
		 */
		post: operations['create-integration provider']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/payments/orders': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * List Orders
		 * @description The "List Orders" API allows to retrieve a paginated list of orders. Customize your results by filtering orders based on name, alt type, order status, payment mode, date range, type of source, contact, funnel products or paginate through the list using the provided query parameters. This endpoint provides a straightforward way to explore and retrieve order information.
		 */
		get: operations['list-orders']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/payments/orders/{orderId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get Order by ID
		 * @description The "Get Order by ID" API allows to retrieve information for a specific order using its unique identifier. Use this endpoint to fetch details for a single order based on the provided order ID.
		 */
		get: operations['get-order-by-id']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/payments/orders/{orderId}/fulfillments': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * List fulfillment
		 * @description List all fulfillment history of an order
		 */
		get: operations['list-order-fulfillment']
		put?: never
		/**
		 * Create order fulfillment
		 * @description The "Order Fulfillment" API facilitates the process of fulfilling an order.
		 */
		post: operations['create-order-fulfillment']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/payments/subscriptions': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * List Subscriptions
		 * @description The "List Subscriptions" API allows to retrieve a paginated list of subscriptions. Customize your results by filtering subscriptions based on name, alt type, subscription status, payment mode, date range, type of source, contact, subscription id, entity id, contact or paginate through the list using the provided query parameters. This endpoint provides a straightforward way to explore and retrieve subscription information.
		 */
		get: operations['list-subscriptions']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/payments/subscriptions/{subscriptionId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get Subscription by ID
		 * @description The "Get Subscription by ID" API allows to retrieve information for a specific subscription using its unique identifier. Use this endpoint to fetch details for a single subscription based on the provided subscription ID.
		 */
		get: operations['get-subscription-by-id']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/payments/transactions': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * List Transactions
		 * @description The "List Transactions" API allows to retrieve a paginated list of transactions. Customize your results by filtering transactions based on name, alt type, transaction status, payment mode, date range, type of source, contact, subscription id, entity id or paginate through the list using the provided query parameters. This endpoint provides a straightforward way to explore and retrieve transaction information.
		 */
		get: operations['list-transactions']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/payments/transactions/{transactionId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get Transaction by ID
		 * @description The "Get Transaction by ID" API allows to retrieve information for a specific transaction using its unique identifier. Use this endpoint to fetch details for a single transaction based on the provided transaction ID.
		 */
		get: operations['get-transaction-by-id']
		put?: never
		post?: never
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
		AmountSummary: {
			/**
			 * @description Discount value on order.
			 * @example 10
			 */
			discount?: number
			/**
			 * @description Order sub-total value.
			 * @example 100
			 */
			subtotal: number
		}
		BadRequestDTO: {
			/** @example Bad Request */
			message?: string
			/** @example 400 */
			statusCode?: number
		}
		ConnectCustomProvidersConfigDto: {
			/** @description Live config containing api-key and publishable key for live payments */
			live: components['schemas']['CustomProviderKeys']
			/** @description Test config containing api-key and publishable-key for test payments */
			test: components['schemas']['CustomProviderKeys']
		}
		ConnectCustomProvidersResponseSchema: {
			/**
			 * @description The unique identifier for the custom provider.
			 * @example 662a44ad19a2a44d3cd9d749
			 */
			_id: string
			/**
			 * Format: date-time
			 * @description The creation timestamp of the custom provider.
			 * @example 2023-11-20T10:23:36.515Z
			 */
			createdAt: string
			/**
			 * @description Whether the config is deleted or not. true represents config is deleted
			 * @example true
			 */
			deleted: boolean
			/**
			 * @description Description of payment gateway. Shown on the payments integrations page as subtext
			 * @example This payment gateway supports payments in India via UPI, Net banking, cards and wallets.
			 */
			description: string
			/**
			 * @description Public image url for logo of the payment gateway displayed on the payments integrations page.
			 * @example https://testsubscription.paypal.com
			 */
			imageUrl: string
			/**
			 * @description Location id
			 * @example Lk3nlfk4lxlelVEwcW
			 */
			locationId: string
			/**
			 * @description The application id of marketplace
			 * @example 65f0b217a05c774da7f1efa5
			 */
			marketplaceAppId: string
			/**
			 * @description The name of the custom provider
			 * @example Company Paypal Integration
			 */
			name: string
			/**
			 * @description Payment provider details.
			 * @example { live: { liveMode: true }, test: { liveMode: false, apiKey: "y5ZQxryRFXZHvUJZdLXXXXXX", publishableKey: "rzp_test_zPRoVMLOa0A9wo" }}
			 */
			paymentProvider?: Record<string, never>
			/**
			 * @description This url will be loaded in iFrame to start a payment session.
			 * @example https://testpayment.paypal.com
			 */
			paymentsUrl: string
			/**
			 * @description The url used for querying payments related events. Ex. verify, refund, subscription etc.
			 * @example https://testsubscription.paypal.com
			 */
			queryUrl: string
			/**
			 * @description Trace id of the custom provider.
			 * @example 302d2cf4-1ba0-4bf5-bc3b-f8fa76fda58a
			 */
			traceId?: string
			/**
			 * Format: date-time
			 * @description The last update timestamp of the custom provider.
			 * @example 2024-01-23T09:57:04.846Z
			 */
			updatedAt: string
		}
		CreateCustomProvidersDto: {
			/**
			 * @description Description of payment gateway. Shown on the payments integrations page as subtext
			 * @example This payment gateway supports payments in India via UPI, Net banking, cards and wallets.
			 */
			description: string
			/**
			 * @description Public image url for logo of the payment gateway displayed on the payments integrations page.
			 * @example https://testsubscription.paypal.com
			 */
			imageUrl: string
			/**
			 * @description The name of the custom provider
			 * @example Company Paypal Integration
			 */
			name: string
			/**
			 * @description This url will be loaded in iFrame to start a payment session.
			 * @example https://testpayment.paypal.com
			 */
			paymentsUrl: string
			/**
			 * @description The url used for querying payments related events. Ex. verify, refund, subscription etc.
			 * @example https://testsubscription.paypal.com
			 */
			queryUrl: string
		}
		CreateCustomProvidersResponseSchema: {
			/**
			 * @description The unique identifier for the custom provider.
			 * @example 662a44ad19a2a44d3cd9d749
			 */
			_id: string
			/**
			 * Format: date-time
			 * @description The creation timestamp of the custom provider.
			 * @example 2023-11-20T10:23:36.515Z
			 */
			createdAt: string
			/**
			 * @description Whether the config is deleted or not. true represents config is deleted
			 * @example true
			 */
			deleted: boolean
			/**
			 * @description Description of payment gateway. Shown on the payments integrations page as subtext
			 * @example This payment gateway supports payments in India via UPI, Net banking, cards and wallets.
			 */
			description: string
			/**
			 * @description Public image url for logo of the payment gateway displayed on the payments integrations page.
			 * @example https://testsubscription.paypal.com
			 */
			imageUrl: string
			/**
			 * @description Location id
			 * @example Lk3nlfk4lxlelVEwcW
			 */
			locationId: string
			/**
			 * @description The application id of marketplace
			 * @example 65f0b217a05c774da7f1efa5
			 */
			marketplaceAppId: string
			/**
			 * @description The name of the custom provider
			 * @example Company Paypal Integration
			 */
			name: string
			/**
			 * @description Payment provider details.
			 * @example { live: { liveMode: true }, test: { liveMode: false, apiKey: "y5ZQxryRFXZHvUJZdLXXXXXX", publishableKey: "rzp_test_zPRoVMLOa0A9wo" }}
			 */
			paymentProvider?: Record<string, never>
			/**
			 * @description This url will be loaded in iFrame to start a payment session.
			 * @example https://testpayment.paypal.com
			 */
			paymentsUrl: string
			/**
			 * @description The url used for querying payments related events. Ex. verify, refund, subscription etc.
			 * @example https://testsubscription.paypal.com
			 */
			queryUrl: string
			/**
			 * @description Trace id of the custom provider.
			 * @example 302d2cf4-1ba0-4bf5-bc3b-f8fa76fda58a
			 */
			traceId?: string
			/**
			 * Format: date-time
			 * @description The last update timestamp of the custom provider.
			 * @example 2024-01-23T09:57:04.846Z
			 */
			updatedAt: string
		}
		CreateFulfillmentDto: {
			/**
			 * @description Location Id or Agency Id
			 * @example 6578278e879ad2646715ba9c
			 */
			altId: string
			/** @enum {string} */
			altType: 'location'
			/** @description Fulfilled items */
			items: components['schemas']['FulfillmentItems'][]
			/**
			 * @description Need to send a notification to customer
			 * @example true
			 */
			notifyCustomer: boolean
			/** @description Fulfillment tracking information */
			trackings: components['schemas']['FulfillmentTracking'][]
		}
		CreateFulfillmentResponseDto: {
			/** @description fulfillment data */
			data: components['schemas']['FulfillmentSchema']
			/**
			 * @description Status of api action
			 * @example true
			 */
			status: boolean
		}
		CreateWhiteLabelIntegrationProviderDto: {
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
			 * @description A brief description providing additional information about the integration provider.
			 * @example Description
			 */
			description: string
			/**
			 * @description The URL to an image representing the integration provider. The imageUrl should start with "https://" and ensure that this URL is publicly accessible.
			 * @example https://example.com/image.jpg
			 */
			imageUrl: string
			/**
			 * @description The type of payment provider associated with the integration provider.
			 * @example {
			 *       "AUTHORIZE_NET": "authorize-net",
			 *       "NMI": "nmi"
			 *     }
			 * @enum {string}
			 */
			provider: 'authorize-net' | 'nmi'
			/**
			 * @description The title or name of the integration provider.
			 * @example Title
			 */
			title: string
			/**
			 * @description A unique name given to the integration provider, uniqueName must start and end with a character. Only lowercase characters and hyphens (-) are supported
			 * @example easy-direct
			 */
			uniqueName: string
		}
		CreateWhitelabelIntegrationResponseDto: {
			/**
			 * @description The unique identifier of the integration provider.
			 * @example 65cb47dda50f4f13ced4b870
			 */
			_id: string
			/**
			 * @description The altId / locationId of the integration provider.
			 * @example Z4Bxl8J4SaPEPLq9IQ8g
			 */
			altId: string
			/**
			 * @description The altType of the integration provider.
			 * @example location
			 */
			altType: string
			/**
			 * Format: date-time
			 * @description The timestamp when the integration provider was created.
			 * @example 2024-02-13T10:43:41.026Z
			 */
			createdAt: string
			/**
			 * @description A brief description providing additional information about the integration provider.
			 * @example Lorem
			 */
			description: string
			/**
			 * @description The URL to an image representing the integration provider.
			 * @example https://example.com/assets/pmd/img/payments/nmi-logo.webp
			 */
			imageUrl: string
			/**
			 * @description The payment provider associated with the integration provider.
			 * @example nmi
			 */
			provider: string
			/**
			 * @description The route name associated with the integration provider.
			 * @example epd
			 */
			route: string
			/**
			 * @description The title or name of the integration provider.
			 * @example Example
			 */
			title: string
			/**
			 * Format: date-time
			 * @description The timestamp when the integration provider was last updated.
			 * @example 2024-02-13T10:43:41.026Z
			 */
			updatedAt: string
		}
		CustomProviderKeys: {
			/**
			 * @description Api-key for custom payment provider config
			 * @example y5ZQxryRFXZHvUJZdLeXXXXX
			 */
			apiKey: string
			/**
			 * @description Publishable-key for custom payment provider config
			 * @example rzp_test_zPRoVMLOa0XXXX
			 */
			publishableKey: string
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
		}
		DefaultPriceResponseDto: {
			/**
			 * @description The unique identifier for the price.
			 * @example 655b33aa2209e60b6adb87a7
			 */
			_id: string
			/**
			 * @description Continue selling when out of stock
			 * @example true
			 */
			allowOutOfStockPurchases?: boolean
			/**
			 * @description The amount of the price.
			 * @example 199999
			 */
			amount: number
			/**
			 * @description Available inventory stock quantity
			 * @example 5
			 */
			availableQuantity?: number
			/**
			 * @description The compare-at price for comparison purposes.
			 * @example 2000000
			 */
			compareAtPrice?: number
			/**
			 * Format: date-time
			 * @description The creation timestamp of the price.
			 * @example 2023-11-20T10:23:38.645Z
			 */
			createdAt?: string
			/**
			 * @description The currency code for the price.
			 * @example INR
			 */
			currency: string
			/**
			 * @description The unique identifier for the location.
			 * @example 3SwdhCsvxI8Au3KsPJt6
			 */
			locationId?: string
			/** @description An array of membership offers associated with the price. */
			membershipOffers?: components['schemas']['MembershipOfferDto'][]
			/**
			 * @description The name of the price.
			 * @example Red / S
			 */
			name: string
			/**
			 * @description The unique identifier for the associated product.
			 * @example 655b33a82209e60b6adb87a5
			 */
			product?: string
			/** @description The recurring details of the price (if type is recurring). */
			recurring?: components['schemas']['RecurringDto']
			/**
			 * @description Indicates whether inventory tracking is enabled.
			 * @example null
			 */
			trackInventory?: boolean
			/**
			 * @description The type of the price (e.g., one_time).
			 * @example one_time
			 * @enum {string}
			 */
			type: 'one_time' | 'recurring'
			/**
			 * Format: date-time
			 * @description The last update timestamp of the price.
			 * @example 2024-01-23T09:57:04.852Z
			 */
			updatedAt?: string
			/**
			 * @description The unique identifier for the user.
			 * @example 6YAtzfzpmHAdj0e8GkKp
			 */
			userId?: string
			/**
			 * @description An array of variant option IDs associated with the price.
			 * @example [
			 *       "h4z7u0im2q8",
			 *       "h3nst2ltsnn"
			 *     ]
			 */
			variantOptionIds?: string[]
		}
		DefaultProductResponseDto: {
			/**
			 * @description The unique identifier for the product.
			 * @example 655b33a82209e60b6adb87a5
			 */
			_id: string
			/**
			 * @description Indicates whether the product is available in-store.
			 * @example true
			 */
			availableInStore?: boolean
			/**
			 * @description An array of category Ids for the product
			 * @example [
			 *       "65d71377c326ea78e1c47df5",
			 *       "65d71377c326ea78e1c47d34"
			 *     ]
			 */
			collectionIds?: string[]
			/**
			 * Format: date-time
			 * @description The creation timestamp of the product.
			 * @example 2023-11-20T10:23:36.515Z
			 */
			createdAt: string
			/**
			 * @description product description
			 * @example This is a really awesome product
			 */
			description?: string
			/**
			 * @description The URL for the product image.
			 * @example https://storage.googleapis.com/ghl-test/3SwdhCsvxI8Au3KsPJt6/media/65af8d5df88bdb4b1022ee90.png
			 */
			image?: string
			/**
			 * @description A boolean representing whether a product label is enabled or not
			 * @default false
			 * @example true
			 */
			isLabelEnabled: boolean
			/**
			 * @description Is automatic attachment of taxes enabled for the product
			 * @default false
			 * @example true
			 */
			isTaxesEnabled: boolean
			/** @description The Product label details */
			label?: components['schemas']['ProductLabelDto']
			/**
			 * @description The unique identifier for the location.
			 * @example 3SwdhCsvxI8Au3KsPJt6
			 */
			locationId: string
			/** @description An array of medias for the product. */
			medias?: components['schemas']['ProductMediaDto'][]
			/**
			 * @description The name of the product.
			 * @example Awesome Product
			 */
			name: string
			/**
			 * @description The type of the product (e.g., PHYSICAL).
			 * @example PHYSICAL
			 */
			productType: string
			/** @description The SEO information for the product requested */
			seo?: components['schemas']['ProductSEODto']
			/**
			 * @description The slug of the product by which the product will be navigated
			 * @example washing-machine
			 */
			slug?: string
			/**
			 * @description The statement descriptor for the product.
			 * @example abcde
			 */
			statementDescriptor?: string
			/**
			 * @description An array of ids of Taxes attached to the Product. If the expand query includes tax, the taxes will be of type `ProductTaxDto`. Please refer to the `ProductTaxDto` for additional details.
			 * @example [
			 *       "654492a4e6bef380114de15a"
			 *     ]
			 */
			taxes?: string[]
			/**
			 * Format: date-time
			 * @description The last update timestamp of the product.
			 * @example 2024-01-23T09:57:04.846Z
			 */
			updatedAt: string
			/**
			 * @description The unique identifier for the user who created the product.
			 * @example 6YAtzfzpmHAdj0e8GkKp
			 */
			userId?: string
			/** @description An array of variants for the product. */
			variants?: components['schemas']['ProductVariantDto'][]
		}
		DeleteCustomProvidersConfigDto: {
			/**
			 * @description Whether the config is for test mode or live mode. true represents config is for live payments
			 * @example true
			 */
			liveMode: boolean
		}
		DeleteCustomProvidersResponseSchema: {
			/**
			 * @description Whether the custom provider config is disconnect or not. true represents config is disconnect
			 * @example true
			 */
			success: boolean
		}
		DisconnectCustomProvidersResponseSchema: {
			/**
			 * @description Whether the custom provider config is disconnect or not. true represents config is disconnect
			 * @example true
			 */
			success: boolean
		}
		FulfilledItem: {
			/**
			 * @description The id of product price
			 * @example 6578278e879ad2646715ba9c
			 */
			_id: string
			/**
			 * @description Name
			 * @example Iphone 15 pro
			 */
			name: string
			/** @description Price details */
			price: components['schemas']['DefaultPriceResponseDto']
			/** @description Product details */
			product: components['schemas']['DefaultProductResponseDto']
			/**
			 * @description The no of quantity of the current fulfilled item
			 * @example 1
			 */
			qty: number
		}
		FulfillmentItems: {
			/**
			 * @description The id of product price
			 * @example 6578278e879ad2646715ba9c
			 */
			priceId: string
			/**
			 * @description The no of quantity of the item
			 * @example 1
			 */
			qty: number
		}
		FulfillmentSchema: {
			/**
			 * @description The unique identifier for the fulfillment item.
			 * @example 655b33a82209e60b6adb87a5
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
			 * @description created at
			 * @example 2023-12-12T09:27:42.355Z
			 */
			createdAt: string
			/** @description Fulfilled items */
			items: components['schemas']['FulfilledItem'][]
			/** @description Fulfillment tracking information */
			trackings: components['schemas']['FulfillmentTracking'][]
			/**
			 * @description updated at
			 * @example 2023-12-12T09:27:42.355Z
			 */
			updatedAt: string
		}
		FulfillmentTracking: {
			/**
			 * @description Shipping carrier name
			 * @example FedEx
			 */
			shippingCarrier?: string
			/**
			 * @description Tracking number provided by the shipping carrier
			 * @example 40012345678
			 */
			trackingNumber?: string
			/**
			 * @description Tracking URL
			 * @example https://www.fedex.com/wtrk/track/?trknbr=40012345678
			 */
			trackingUrl?: string
		}
		GetCustomProvidersResponseSchema: {
			/**
			 * @description The unique identifier for the custom provider.
			 * @example 662a44ad19a2a44d3cd9d749
			 */
			_id: string
			/**
			 * Format: date-time
			 * @description The creation timestamp of the custom provider.
			 * @example 2023-11-20T10:23:36.515Z
			 */
			createdAt: string
			/**
			 * @description Whether the config is deleted or not. true represents config is deleted
			 * @example true
			 */
			deleted: boolean
			/**
			 * @description Description of payment gateway. Shown on the payments integrations page as subtext
			 * @example This payment gateway supports payments in India via UPI, Net banking, cards and wallets.
			 */
			description: string
			/**
			 * @description Public image url for logo of the payment gateway displayed on the payments integrations page.
			 * @example https://testsubscription.paypal.com
			 */
			imageUrl: string
			/**
			 * @description Location id
			 * @example Lk3nlfk4lxlelVEwcW
			 */
			locationId: string
			/**
			 * @description The application id of marketplace
			 * @example 65f0b217a05c774da7f1efa5
			 */
			marketplaceAppId: string
			/**
			 * @description The name of the custom provider
			 * @example Company Paypal Integration
			 */
			name: string
			/**
			 * @description Payment provider details.
			 * @example { live: { liveMode: true }, test: { liveMode: false, apiKey: "y5ZQxryRFXZHvUJZdLXXXXXX", publishableKey: "rzp_test_zPRoVMLOa0A9wo" }}
			 */
			paymentProvider?: Record<string, never>
			/**
			 * @description This url will be loaded in iFrame to start a payment session.
			 * @example https://testpayment.paypal.com
			 */
			paymentsUrl: string
			/**
			 * @description The url used for querying payments related events. Ex. verify, refund, subscription etc.
			 * @example https://testsubscription.paypal.com
			 */
			queryUrl: string
			/**
			 * @description Trace id of the custom provider.
			 * @example 302d2cf4-1ba0-4bf5-bc3b-f8fa76fda58a
			 */
			traceId?: string
			/**
			 * Format: date-time
			 * @description The last update timestamp of the custom provider.
			 * @example 2024-01-23T09:57:04.846Z
			 */
			updatedAt: string
		}
		GetOrderResponseSchema: {
			/**
			 * @description The unique identifier for the order.
			 * @example 653f5e0cde5a1314e62a837c
			 */
			_id: string
			/**
			 * @description AltId is the unique identifier eg: location id.
			 * @example 3SwdhCu3svxI8AKsPJt6
			 */
			altId: string
			/**
			 * @description AltType is the type of identifier.
			 * @example location
			 */
			altType: string
			/**
			 * @description Order value.
			 * @example 100
			 */
			amount?: number
			/**
			 * @description Amount details of the order.
			 * @example { subtotal: 100, discount: 5 }
			 */
			amountSummary?: components['schemas']['AmountSummary']
			/**
			 * @description Contact id corresponding to the order.
			 * @example XPLSw2SVagl12LMDeTmQ
			 */
			contactId?: string
			/**
			 * @description Contact details of the order.
			 * @example { last_name: "Mcclain", type: "lead", first_name_lower_case: "rogan", email: "anish+11@gohighlevel.com", last_name_lower_case: "mcclain", location_id: "o6241QsiRwUIJHyjuhos", company_name: "Jordan and Cox Trading"}
			 */
			contactSnapshot?: Record<string, never>
			/**
			 * @description Coupon details of the order.
			 * @example { code: "FEST10", _id: "63455e48901b43d4ef364a20" }
			 */
			coupon?: Record<string, never>
			/**
			 * Format: date-time
			 * @description The creation timestamp of the order.
			 * @example 2023-11-20T10:23:36.515Z
			 */
			createdAt: string
			/**
			 * @description Currency in which order was created.
			 * @example USD
			 */
			currency?: string
			/**
			 * @description Fingerprint id of the order.
			 * @example 5d51db5a-42b0-4b04-ba88-2c046c982a3a
			 */
			fingerprint?: string
			/**
			 * @description Fulfillment status of the order.
			 * @example unfulfilled
			 */
			fulfillmentStatus?: string
			/**
			 * @description Item details of the order.
			 * @example { _id: 61dd33e88058b9f967ca79dc, authorizeAmount: 0, locationId: "SBAWb4yu7A4LSc0skQ6g", name: "Sample Product": price: {}, product: { name: "Testing product", productType: "SERVICE" }}
			 */
			items?: string[]
			/**
			 * @description Order is in live / test mode.
			 * @example false
			 */
			liveMode?: boolean
			/**
			 * @description Is test order.
			 * @example false
			 */
			markAsTest?: boolean
			/**
			 * @description Meta details of the order.
			 * @example { couponSessionExpired: true }
			 */
			meta?: Record<string, never>
			/**
			 * @description Source details of the order.
			 * @example { type: "invoice", id: "61dd48ff65b013bc39bb09c6" }
			 */
			source?: components['schemas']['OrderSource']
			/**
			 * @description The status of the order (e.g., completed).
			 * @example completed
			 */
			status: string
			/**
			 * @description Trace id of the order.
			 * @example d3b16a92-a8ed-4e6b-8467-844750f78ed5
			 */
			traceId?: string
			/**
			 * @description Tracking id of the order.
			 * @example 63319ef9-de0a-4c84-aebd-3585fb4a0cdf
			 */
			trackingId?: string
			/**
			 * Format: date-time
			 * @description The last update timestamp of the order.
			 * @example 2024-01-23T09:57:04.846Z
			 */
			updatedAt: string
		}
		GetSubscriptionResponseSchema: {
			/**
			 * @description The unique identifier for the subscription.
			 * @example 64bf78af39118e4011926cba
			 */
			_id: string
			/**
			 * @description AltId is the unique identifier eg: location id.
			 * @example 3SwdhCu3svxI8AKsPJt6
			 */
			altId: string
			/**
			 * @description AltType is the type of identifier.
			 * @example location
			 */
			altType: Record<string, never>
			/**
			 * @description Subscription value.
			 * @example 100
			 */
			amount?: number
			/**
			 * @description Auto payment details of the subscription.
			 * @example { customerId: "908879612", paymentMethodId: "908646635" }
			 */
			autoPayment?: Record<string, never>
			/**
			 * Format: date-time
			 * @description Cancellation timestamp of the subscription.
			 * @example 2023-11-20T10:23:36.515Z
			 */
			canceledAt?: string
			/**
			 * @description User id who cancelled the subscription.
			 * @example qUuXUiB2AiA2DIthEicP
			 */
			canceledBy?: string
			/**
			 * @description Contact id corresponding to the subscription.
			 * @example XPLSw2SVagl12LMDeTmQ
			 */
			contactId?: string
			/**
			 * @description Contact details of the subscriber.
			 * @example { last_name: "Mcclain", type: "lead", first_name_lower_case: "rogan", email: "anish+11@gohighlevel.com", last_name_lower_case: "mcclain", location_id: "o6241QsiRwUIJHyjuhos", company_name: "Jordan and Cox Trading"}
			 */
			contactSnapshot?: Record<string, never>
			/**
			 * @description Coupon details of the subscription.
			 * @example { _id: "6374c6926d119a393fe1e556", usageCount: 5260, altId: "jVFIxsMY19D94nOSIOEO", altType: "location", name: "FREE-100%", code: "FREE100", discountType: "percentage", discountValue: 100 }
			 */
			coupon?: Record<string, never>
			/**
			 * Format: date-time
			 * @description The creation timestamp of the subscription.
			 * @example 2023-11-20T10:23:36.515Z
			 */
			createdAt: string
			/**
			 * @description Currency in which subscription was made.
			 * @example USD
			 */
			currency?: string
			/**
			 * @description Entity id for the subscription. e.g: order id
			 * @example 62f4db0f3059ecee61379012
			 */
			entityId?: string
			/**
			 * @description Entity source details for the subscription.
			 * @example { type: "funnel", id: "lx6ROqruHGVQD2PZwFxK", subType: "upsell", name: "test funnel" }
			 */
			entitySource?: components['schemas']['OrderSource']
			/**
			 * @description Entity type of subscription (eg: order).
			 * @example order
			 */
			entityType?: string
			/**
			 * @description Ip address from where subscription was initiated.
			 * @example 103.100.16.82
			 */
			ipAddress?: string
			/**
			 * @description Subscription is in live / test mode.
			 * @example false
			 */
			liveMode?: boolean
			/**
			 * @description Is test subscription.
			 * @example false
			 */
			markAsTest?: boolean
			/**
			 * @description Meta details of the subscription.
			 * @example { collection: "transactionsv2", id: "6320652f0f664b6632006920" }
			 */
			meta?: Record<string, never>
			/**
			 * @description Payment provider details for the subscription.
			 * @example { type: "paypal", connectedAccount: { _id: "64410debdc8f3b0503523abb", merchantClientId: "AeXtjrxdgsJiCPwQt5jML5pH-0mwmLs-tH7ub4Uo3IrDKvRl34FvJy8niI6E1wmS_pryIRdNllyVl58b" } }
			 */
			paymentProvider?: Record<string, never>
			/**
			 * @description Recurring product details of the subscription.
			 * @example { locationId: "Z4Bxl8J4SaPEPLq9IQ8g", funnel: "bQHJWKcyjiKjk4BHv91g", step: "2281a993-8a75-4b48-9912-571f29c99a74", name: "Sofa Set" }
			 */
			recurringProduct?: Record<string, never>
			/**
			 * @description Scedule details for the subscription.
			 * @example { collection: "transactionsv2", id: "6320652f0f664b6632006920" }
			 */
			schedule?: components['schemas']['ScheduleOptionsDto']
			/**
			 * @description Subscription status.
			 * @example active
			 */
			status?: Record<string, never>
			/**
			 * @description Subscription id for subscription.
			 * @example I-0UE609H8E43P
			 */
			subscriptionId?: string
			/**
			 * @description Snapshot of subscription.
			 * @example { status: "ACTIVE", status_update_time: "2022-08-16T11:06:53Z", id: "I-0UE609H8E43P", plan_id: "P-82K11750F0313430KMLRGE6Y", start_time: "2022-08-16T11:05:31Z", quantity: 1 }
			 */
			subscriptionSnapshot?: Record<string, never>
			/**
			 * @description Trace id of the subscription.
			 * @example 302d2cf4-1ba0-4bf5-bc3b-f8fa76fda58a
			 */
			traceId?: string
			/**
			 * Format: date-time
			 * @description The last update timestamp of the subscription.
			 * @example 2024-01-23T09:57:04.846Z
			 */
			updatedAt: string
		}
		GetTxnResponseSchema: {
			/**
			 * @description The unique identifier for the transaction.
			 * @example 61dd0feac077f72010f78804
			 */
			_id: string
			/**
			 * @description AltId is the unique identifier eg: location id.
			 * @example 3SwdhCu3svxI8AKsPJt6
			 */
			altId: string
			/**
			 * @description AltType is the type of identifier.
			 * @example location
			 */
			altType: string
			/**
			 * @description Transaction value.
			 * @example 100
			 */
			amount?: number
			/**
			 * @description Transaction amount refunded.
			 * @example 10
			 */
			amountRefunded?: number
			/**
			 * @description Charge id for transaction.
			 * @example in_1KGcXDCScnf89tZohCsmImwE
			 */
			chargeId?: string
			/**
			 * @description Charge snapshot of transaction.
			 * @example { id: "in_1KGcXDCScnf89tZohCsmImwE", object: "invoice", account_country: "US",  account_name:  "GHL-Testing" }
			 */
			chargeSnapshot?: Record<string, never>
			/**
			 * @description Contact id corresponding to the transaction.
			 * @example XPLSw2SVagl12LMDeTmQ
			 */
			contactId?: string
			/**
			 * @description Contact details of the transaction.
			 * @example { last_name: "Mcclain", type: "lead", first_name_lower_case: "rogan", email: "anish+11@gohighlevel.com", last_name_lower_case: "mcclain", location_id: "o6241QsiRwUIJHyjuhos", company_name: "Jordan and Cox Trading"}
			 */
			contactSnapshot?: Record<string, never>
			/**
			 * Format: date-time
			 * @description The creation timestamp of the transaction.
			 * @example 2023-11-20T10:23:36.515Z
			 */
			createdAt: string
			/**
			 * @description Currency in which transaction was made.
			 * @example USD
			 */
			currency?: string
			/**
			 * @description Entity id for the transaction. e.g: order id
			 * @example 61dd0fe9c077f73e67f78803
			 */
			entityId?: string
			/**
			 * @description Entity source details for the transaction.
			 * @example { type: "funnel", id: "BDBMEghdIUaqMPEsK349", subType: "two_step_order_form", name: "new funnel" }
			 */
			entitySource?: components['schemas']['OrderSource']
			/**
			 * @description Entity type of transaction (eg: order).
			 * @example order
			 */
			entityType?: string
			/**
			 * @description Invoice id for the transaction.
			 * @example in_1KGcXDCScnf89tZohCsmImwE
			 */
			invoiceId?: string
			/**
			 * @description Ip address from where transaction was initiated.
			 * @example 107.178.194.224
			 */
			ipAddress?: string
			/**
			 * @description Is parent transaction.
			 * @example false
			 */
			isParent?: boolean
			/**
			 * @description Transaction is in live / test mode.
			 * @example false
			 */
			liveMode?: boolean
			/**
			 * @description Is test transaction.
			 * @example false
			 */
			markAsTest?: boolean
			/**
			 * @description Meta details of the transaction.
			 * @example { stepId: "af7c731e-e36f-4152-bd1a-3f69a31d6d6d", pageId: "A8ltotc2jZxurJba4e3Y", pageUrl: "/v2/preview/A8ltotc2jZxurJba4e3Y" }
			 */
			meta?: Record<string, never>
			/**
			 * @description Payment provider details of the transaction.
			 * @example { type: "stripe", connectedAccount: { _id: "612ca676b484b241fef9d962", accountId: "acct_1Ihw53CScnf89tZo" } }
			 */
			paymentProvider?: Record<string, never>
			/**
			 * @description Qbo details of the transaction.
			 * @example { domain: "QBO", sparse: false, Id: "180", SyncToken: "0", TotalAmt: 25 }
			 */
			qboResponse?: Record<string, never>
			/**
			 * @description Is transaction qbo synced.
			 * @example false
			 */
			qboSynced?: boolean
			/**
			 * @description Receipt id for transaction.
			 * @example 6492fbea489bc07892c6defb
			 */
			receiptId?: string
			/**
			 * @description Transaction status.
			 * @example succeeded
			 */
			status?: Record<string, never>
			/**
			 * @description Subscription id for transaction.
			 * @example sub_1KGcXDCScnf89tZoVkoEMCEL
			 */
			subscriptionId?: string
			/**
			 * @description Trace id of the transaction.
			 * @example d3b16a92-a8ed-4e6b-8467-844750f78ed5
			 */
			traceId?: string
			/**
			 * Format: date-time
			 * @description The last update timestamp of the transaction.
			 * @example 2024-01-23T09:57:04.846Z
			 */
			updatedAt: string
		}
		IntegrationProviderSchema: {
			/**
			 * @description The unique identifier of the integration provider.
			 * @example 65cb47dda50f4f13ced4b870
			 */
			_id: string
			/**
			 * @description The altId / locationId of the integration provider.
			 * @example Z4Bxl8J4SaPEPLq9IQ8g
			 */
			altId: string
			/**
			 * @description The altType of the integration provider.
			 * @example location
			 */
			altType: string
			/**
			 * Format: date-time
			 * @description The timestamp when the integration provider was created.
			 * @example 2024-02-13T10:43:41.026Z
			 */
			createdAt: string
			/**
			 * @description A brief description providing additional information about the integration provider.
			 * @example Lorem
			 */
			description: string
			/**
			 * @description The URL to an image representing the integration provider.
			 * @example https://example.com/assets/pmd/img/payments/nmi-logo.webp
			 */
			imageUrl: string
			/**
			 * @description The payment provider associated with the integration provider.
			 * @example nmi
			 */
			provider: string
			/**
			 * @description The route name associated with the integration provider.
			 * @example epd
			 */
			route: string
			/**
			 * @description The title or name of the integration provider.
			 * @example Example
			 */
			title: string
			/**
			 * Format: date-time
			 * @description The timestamp when the integration provider was last updated.
			 * @example 2024-02-13T10:43:41.026Z
			 */
			updatedAt: string
		}
		ListFulfillmentResponseDto: {
			/** @description An array of fulfilled items */
			data: components['schemas']['FulfillmentSchema'][]
			/**
			 * @description Status of api action
			 * @example true
			 */
			status: boolean
		}
		ListOrdersResponseDto: {
			/** @description An array of orders */
			data: components['schemas']['OrderResponseSchema'][]
			/** @description total orders count */
			totalCount: number
		}
		ListSubscriptionResponseDto: {
			/** @description An array of subscriptions */
			data: components['schemas']['SubscriptionResponseSchema'][]
			/** @description total subscriptions count */
			totalCount: number
		}
		ListTxnsResponseDto: {
			/** @description An array of transactions */
			data: components['schemas']['TxnResponseSchema'][]
			/** @description total transactions count */
			totalCount: number
		}
		ListWhitelabelIntegrationProviderResponseDto: {
			/** @description list of integration provider. */
			providers: components['schemas']['IntegrationProviderSchema']
		}
		MembershipOfferDto: {
			/**
			 * @description The unique identifier for the membership offer.
			 * @example 655b33aa2209e60b6adb87a7
			 */
			_id: string
			/**
			 * @description Membership offer label
			 * @example top_50
			 */
			label: string
			/**
			 * @description Membership offer label
			 * @example 50
			 */
			value: string
		}
		OrderResponseSchema: {
			/**
			 * @description The unique identifier for the order.
			 * @example 653f5e0cde5a1314e62a837c
			 */
			_id: string
			/**
			 * @description AltId is the unique identifier eg: location id.
			 * @example 3SwdhCu3svxI8AKsPJt6
			 */
			altId: string
			/**
			 * @description AltType is the type of identifier.
			 * @example location
			 */
			altType: string
			/**
			 * @description Order value.
			 * @example 100
			 */
			amount?: number
			/**
			 * @description Contact email corresponding to the order.
			 * @example james.bond@gohighlevel.com
			 */
			contactEmail?: string
			/**
			 * @description Contact id corresponding to the order.
			 * @example XPLSw2SVagl12LMDeTmQ
			 */
			contactId?: string
			/**
			 * @description Contact name corresponding to the order.
			 * @example James Bond
			 */
			contactName?: string
			/**
			 * @description Coupon code for the order.
			 * @example 100PER
			 */
			couponCode?: string
			/**
			 * Format: date-time
			 * @description The creation timestamp of the order.
			 * @example 2023-11-20T10:23:36.515Z
			 */
			createdAt: string
			/**
			 * @description Currency in which order was created.
			 * @example USD
			 */
			currency?: string
			/**
			 * @description Discount value on order.
			 * @example 10
			 */
			discount?: number
			/**
			 * @description Fulfillment status of the order.
			 * @example unfulfilled
			 */
			fulfillmentStatus?: string
			/**
			 * @description Order is in live / test mode.
			 * @example false
			 */
			liveMode?: boolean
			/**
			 * @description Total one time products in an order.
			 * @example 1
			 */
			onetimeProducts?: number
			/**
			 * @description Total recurring time products in an order.
			 * @example 1
			 */
			recurringProducts?: number
			/**
			 * @description Source id for the order.
			 * @example kDj7BHej9Zyyq3QakJmz
			 */
			sourceId?: string
			/**
			 * @description Meta content for the source of order.
			 * @example { domain: "app.gohighlevel.com", pageId:  "rBVhyYhMsbxbO8ZqOcei", pageUrl:  "/v2/preview/rBVhyYhMsbxbO8ZqOcei", stepId:   "5a772f62-3fbc-418b-af1b-be8929dd64c2"}
			 */
			sourceMeta?: Record<string, never>
			/**
			 * @description Source name for the order.
			 * @example onestep
			 */
			sourceName?: string
			/**
			 * @description Source sub-type for the order.
			 * @example one_step_order_form
			 */
			sourceSubType?: string
			/**
			 * @description Source type of order (eg: funnel).
			 * @example funnel
			 */
			sourceType: string
			/**
			 * @description The status of the order (e.g., completed).
			 * @example completed
			 */
			status: string
			/**
			 * @description Order sub-total value.
			 * @example 100
			 */
			subtotal?: number
			/**
			 * @description Total products in an order.
			 * @example 5
			 */
			totalProducts?: number
			/**
			 * Format: date-time
			 * @description The last update timestamp of the order.
			 * @example 2024-01-23T09:57:04.846Z
			 */
			updatedAt: string
		}
		OrderSource: {
			id: string
			meta?: Record<string, never>
			name?: string
			/** @enum {string} */
			subType?:
				| 'one_step_order_form'
				| 'two_step_order_form'
				| 'upsell'
				| 'tap_to_pay'
				| 'card_payment'
				| 'store'
				| 'contact_view'
				| 'email_campaign'
				| 'payments_dashboard'
				| 'shopify'
			/** @enum {string} */
			type:
				| 'funnel'
				| 'website'
				| 'invoice'
				| 'calendar'
				| 'text2Pay'
				| 'document_contracts'
				| 'membership'
				| 'mobile_app'
				| 'communities'
				| 'point_of_sale'
				| 'manual'
				| 'form'
				| 'survey'
				| 'payment_link'
				| 'external'
		}
		ProductLabelDto: {
			/**
			 * @description Start date in YYYY-MM-DDTHH:mm:ssZ format
			 * @example 2024-06-30T05:43:39.000Z
			 */
			endDate?: string
			/**
			 * @description Start date in YYYY-MM-DDTHH:mm:ssZ format
			 * @example 2024-06-26T05:43:35.000Z
			 */
			startDate?: string
			/**
			 * @description The content for the product label.
			 * @example Featured
			 */
			title: string
		}
		ProductMediaDto: {
			/**
			 * @description The unique identifier for the media.
			 * @example fzrgusiuu0m
			 */
			id: string
			/**
			 * @description Indicates whether the media is featured.
			 * @example true
			 */
			isFeatured?: boolean
			/**
			 * @description Mongo ObjectIds of the prices for which the media is assigned
			 * @example 6578278e879ad2646715ba9c
			 */
			priceIds?: unknown[][]
			/**
			 * @description The title of the media file.
			 * @example 1dd7dcd0-e71d-4cf7-a06b-6d47723d6a29.png
			 */
			title?: string
			/**
			 * @description The type of the media file (e.g., image, video will be supporting soon).
			 * @example image
			 * @enum {string}
			 */
			type: 'image' | 'video'
			/**
			 * @description The URL where the media file is stored.
			 * @example https://storage.googleapis.com/ghl-test/3SwdhCsvxI8Au3KsPJt6/media/sample.png
			 */
			url: string
		}
		ProductSEODto: {
			/**
			 * @description SEO Description for the product which will be displayed in the preview
			 * @example New iPhone with all new features
			 */
			description?: string
			/**
			 * @description SEO title of the product which will be displayed in the preview
			 * @example Apple iPhone 14
			 */
			title?: string
		}
		ProductVariantDto: {
			/**
			 * @description A unique identifier for the variant.
			 * @example 38s63qmxfr4
			 */
			id: string
			/**
			 * @description The name of the variant.
			 * @example Size
			 */
			name: string
			/** @description An array of options for the variant. */
			options: components['schemas']['ProductVariantOptionDto'][]
		}
		ProductVariantOptionDto: {
			/**
			 * @description The unique identifier for the option.
			 * @example h4z7u0im2q8
			 */
			id: string
			/**
			 * @description The name of the option.
			 * @example XL
			 */
			name: string
		}
		RecurringDto: {
			/**
			 * @description The interval at which the recurring event occurs.
			 * @example day
			 * @enum {string}
			 */
			interval: 'day' | 'month' | 'week' | 'year'
			/**
			 * @description The number of intervals between each occurrence of the event.
			 * @example 1
			 */
			intervalCount: number
		}
		ScheduleOptionsDto: {
			executeAt?: string
			rrule?: components['schemas']['CustomRRuleOptionsDto']
		}
		SubscriptionResponseSchema: {
			/**
			 * @description The unique identifier for the subscription.
			 * @example 64bf78af39118e4011926cba
			 */
			_id: string
			/**
			 * @description AltId is the unique identifier eg: location id.
			 * @example 3SwdhCu3svxI8AKsPJt6
			 */
			altId: string
			/**
			 * @description AltType is the type of identifier.
			 * @example location
			 * @enum {string}
			 */
			altType: 'location'
			/**
			 * @description Subscription value.
			 * @example 100
			 */
			amount?: number
			/**
			 * @description Contact email corresponding to the subscription.
			 * @example james.bond@gohighlevel.com
			 */
			contactEmail?: string
			/**
			 * @description Contact id corresponding to the subscription.
			 * @example XPLSw2SVagl12LMDeTmQ
			 */
			contactId?: string
			/**
			 * @description Contact name corresponding to the subscription.
			 * @example James Bond
			 */
			contactName?: string
			/**
			 * Format: date-time
			 * @description The creation timestamp of the subscription.
			 * @example 2023-11-20T10:23:36.515Z
			 */
			createdAt: string
			/**
			 * @description Currency in which subscription occurred.
			 * @example USD
			 */
			currency?: string
			/**
			 * @description Entity id for the subscription. e.g: order id
			 * @example 62f4db0f3059ecee61379012
			 */
			entityId?: string
			/**
			 * @description Entity source id for the subscription.
			 * @example bevrkPbLaDNXFaqfLKMm
			 */
			entitySourceId?: string
			/**
			 * @description Meta content for the entity source of subscription.
			 * @example { domain: "app.gohighlevel.com", pageId:  "sxC4lNhFIavEnLZh5KhC", pageUrl:  "/v2/preview/sxC4lNhFIavEnLZh5KhC", stepId: "7d303d1f-cb85-403d-b548-bf01de5c7bb0" }
			 */
			entitySourceMeta?: Record<string, never>
			/**
			 * @description Entity source name for the subscription.
			 * @example Attribution Funnel
			 */
			entitySourceName?: string
			/**
			 * @description Entity source type of subscription (eg: funnel).
			 * @example funnel
			 */
			entitySourceType: string
			/**
			 * @description Entity type of subscription (eg: order).
			 * @example order
			 */
			entityType?: string
			/**
			 * @description Ip address from where subscription was initiated.
			 * @example 103.100.16.82
			 */
			ipAddress?: string
			/**
			 * @description Subscription is in live / test mode.
			 * @example false
			 */
			liveMode?: boolean
			/**
			 * @description Payment provider connected account id for subscription.
			 * @example ATn0CqrzrWS5ak185Bsb1xCpyzBDOZ8WdRxyFotppLYePTDhiuQ49H5QXO_L-4HKk1GBn7f9_QhbNK2s
			 */
			paymentProviderConnectedAccount?: string
			/**
			 * @description Payment provider for subscription.
			 * @example stripe
			 */
			paymentProviderType?: string
			/**
			 * @description The status of the subscription (e.g., succeeded).
			 * @example active
			 */
			status: Record<string, never>
			/**
			 * @description Subscription id for subscription.
			 * @example I-0UE609H8E43P
			 */
			subscriptionId?: string
			/**
			 * @description Snapshot of subscription.
			 * @example { status: "ACTIVE", status_update_time: "2022-08-16T11:06:53Z", id: "I-0UE609H8E43P", plan_id: "P-82K11750F0313430KMLRGE6Y", start_time: "2022-08-16T11:05:31Z", quantity: 1 }
			 */
			subscriptionSnapshot?: Record<string, never>
			/**
			 * Format: date-time
			 * @description The update timestamp of the subscription.
			 * @example 2023-11-20T10:23:36.515Z
			 */
			updatedAt: string
		}
		TxnResponseSchema: {
			/**
			 * @description The unique identifier for the transaction.
			 * @example 61dd0feac077f72010f78804
			 */
			_id: string
			/**
			 * @description AltId is the unique identifier eg: location id.
			 * @example 3SwdhCu3svxI8AKsPJt6
			 */
			altId: string
			/**
			 * @description AltType is the type of identifier.
			 * @example location
			 */
			altType: string
			/**
			 * @description Transaction value.
			 * @example 100
			 */
			amount?: number
			/**
			 * @description Transaction amount refunded.
			 * @example 10
			 */
			amountRefunded?: number
			/**
			 * @description Charge id for transaction.
			 * @example in_1KGcXDCScnf89tZohCsmImwE
			 */
			chargeId?: string
			/**
			 * @description Charge snapshot of transaction.
			 * @example { id: "in_1KGcXDCScnf89tZohCsmImwE", object: "invoice", account_country: "US",  account_name:  "GHL-Testing" }
			 */
			chargeSnapshot?: Record<string, never>
			/**
			 * @description Contact email corresponding to the transaction.
			 * @example james.bond@gohighlevel.com
			 */
			contactEmail?: string
			/**
			 * @description Contact id corresponding to the transaction.
			 * @example XPLSw2SVagl12LMDeTmQ
			 */
			contactId?: string
			/**
			 * @description Contact name corresponding to the transaction.
			 * @example James Bond
			 */
			contactName?: string
			/**
			 * Format: date-time
			 * @description The creation timestamp of the transaction.
			 * @example 2023-11-20T10:23:36.515Z
			 */
			createdAt: string
			/**
			 * @description Currency in which transaction occurred.
			 * @example USD
			 */
			currency?: string
			/**
			 * @description Entity id for the transaction. e.g: order id
			 * @example 61dd0fe9c077f73e67f78803
			 */
			entityId?: string
			/**
			 * @description Entity source id for the transaction.
			 * @example BDBMEghdIUaqMPEsK349
			 */
			entitySourceId?: string
			/**
			 * @description Meta content for the entity source of transaction.
			 * @example { domain: "app.gohighlevel.com", pageId:  "rBVhyYhMsbxbO8ZqOcei", pageUrl:  "/v2/preview/rBVhyYhMsbxbO8ZqOcei", stepId:   "5a772f62-3fbc-418b-af1b-be8929dd64c2"}
			 */
			entitySourceMeta?: Record<string, never>
			/**
			 * @description Entity source name for the transaction.
			 * @example new funnel
			 */
			entitySourceName?: string
			/**
			 * @description Entity source sub-type of the transactions.
			 * @example two_step_order_form
			 */
			entitySourceSubType?: string
			/**
			 * @description Entity source type of transaction (eg: funnel).
			 * @example funnel
			 */
			entitySourceType: string
			/**
			 * @description Entity type of transaction (eg: order).
			 * @example order
			 */
			entityType?: string
			/**
			 * @description Ip address from where transaction was initiated.
			 * @example 107.178.194.224
			 */
			ipAddress?: string
			/**
			 * @description Transaction is in live / test mode.
			 * @example false
			 */
			liveMode?: boolean
			/**
			 * @description Transaction payment method details.
			 * @example { card: { "brand": "discover", "last4": "0012" } }
			 */
			paymentMethod?: Record<string, never>
			/**
			 * @description Payment provider  account id for transaction.
			 * @example 612ca676b484b241fef9d962
			 */
			paymentProviderConnectedAccount?: string
			/**
			 * @description Payment provider for transaction.
			 * @example stripe
			 */
			paymentProviderType?: string
			/**
			 * @description The status of the transaction (e.g., succeeded).
			 * @example succeeded
			 */
			status: Record<string, never>
			/**
			 * @description Subscription id for transaction.
			 * @example sub_1KGcXDCScnf89tZoVkoEMCEL
			 */
			subscriptionId?: string
			/**
			 * Format: date-time
			 * @description The update timestamp of the transaction.
			 * @example 2023-11-20T10:23:36.515Z
			 */
			updatedAt: string
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
			/** @example [
			 *       "Unprocessable Entity"
			 *     ] */
			message?: string[]
			/** @example 422 */
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
	'fetch-config': {
		parameters: {
			query: {
				/**
				 * @description Location id
				 * @example Lk3nlfk4lxlelVEwcW
				 */
				locationId: string
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
					'application/json': components['schemas']['GetCustomProvidersResponseSchema']
				}
			}
			/** @description No such config exists for given locationId and marketplaceAppId */
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
	'create-config': {
		parameters: {
			query: {
				/**
				 * @description Location id
				 * @example Lk3nlfk4lxlelVEwcW
				 */
				locationId: string
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
		requestBody: {
			content: {
				'application/json': components['schemas']['ConnectCustomProvidersConfigDto']
			}
		}
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['ConnectCustomProvidersResponseSchema']
				}
			}
			/** @description No such config exists for given locationId and marketplaceAppId */
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
	'disconnect-config': {
		parameters: {
			query: {
				/**
				 * @description Location id
				 * @example Lk3nlfk4lxlelVEwcW
				 */
				locationId: string
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
		requestBody: {
			content: {
				'application/json': components['schemas']['DeleteCustomProvidersConfigDto']
			}
		}
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['DisconnectCustomProvidersResponseSchema']
				}
			}
			/** @description No such config exists for given locationId and marketplaceAppId */
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
	'create-integration': {
		parameters: {
			query: {
				/**
				 * @description Location id
				 * @example Lk3nlfk4lxlelVEwcW
				 */
				locationId: string
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
		requestBody: {
			content: {
				'application/json': components['schemas']['CreateCustomProvidersDto']
			}
		}
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['CreateCustomProvidersResponseSchema']
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
	'create-integration_delete': {
		parameters: {
			query: {
				/**
				 * @description Location id
				 * @example Lk3nlfk4lxlelVEwcW
				 */
				locationId: string
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
					'application/json': components['schemas']['DeleteCustomProvidersResponseSchema']
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
	'list-integration-providers': {
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
				/**
				 * @description The maximum number of items to be included in a single page of results
				 * @example 20
				 */
				limit?: number
				/**
				 * @description The starting index of the page, indicating the position from which the results should be retrieved.
				 * @example 0
				 */
				offset?: number
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
					'application/json': components['schemas']['ListWhitelabelIntegrationProviderResponseDto']
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
	'create-integration provider': {
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
				'application/json': components['schemas']['CreateWhiteLabelIntegrationProviderDto']
			}
		}
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['CreateWhitelabelIntegrationResponseDto']
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
	'list-orders': {
		parameters: {
			query: {
				/**
				 * @description AltId is the unique identifier e.g: location id.
				 * @example 3SwdhCu3svxI8AKsPJt6
				 */
				altId: string
				/**
				 * @description AltType is the type of identifier.
				 * @example location
				 */
				altType: string
				/**
				 * @description Contact id for filtering of orders.
				 * @example XPLSw2SVagl12LMDeTmQ
				 */
				contactId?: string
				/**
				 * @description Closing interval of orders.
				 * @example 2024-02-13
				 */
				endAt?: string
				/**
				 * @description Funnel product ids separated by comma.
				 * @example 61dd0c7dc077f712a5f787ff,61d6afc9d39ac5e35965c017
				 */
				funnelProductIds?: string
				/**
				 * @description The maximum number of items to be included in a single page of results
				 * @example 20
				 */
				limit?: number
				/**
				 * @description LocationId is the id of the sub-account.
				 * @example 3SwdhCu3svxI8AKsPJt6
				 */
				locationId?: string
				/**
				 * @description The starting index of the page, indicating the position from which the results should be retrieved.
				 * @example 0
				 */
				offset?: number
				/**
				 * @description Mode of payment.
				 * @example live
				 */
				paymentMode?: string
				/**
				 * @description The name of the order for searching.
				 * @example Awesome order
				 */
				search?: string
				/**
				 * @description Starting interval of orders.
				 * @example 2024-02-01
				 */
				startAt?: string
				/**
				 * @description Order status.
				 * @example completed
				 */
				status?: string
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
					'application/json': components['schemas']['ListOrdersResponseDto']
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
	'get-order-by-id': {
		parameters: {
			query: {
				/**
				 * @description AltId is the unique identifier e.g: location id.
				 * @example 3SwdhCu3svxI8AKsPJt6
				 */
				altId: string
				/**
				 * @description AltType is the type of identifier.
				 * @example location
				 */
				altType: string
				/**
				 * @description LocationId is the id of the sub-account.
				 * @example 3SwdhCu3svxI8AKsPJt6
				 */
				locationId?: string
			}
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/**
				 * @description ID of the order that needs to be returned
				 * @example 653f5e0cde5a1314e62a837c
				 */
				orderId: string
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
					'application/json': components['schemas']['GetOrderResponseSchema']
				}
			}
			/** @description Order not found */
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
	'list-order-fulfillment': {
		parameters: {
			query: {
				/**
				 * @description Location Id or Agency Id
				 * @example 6578278e879ad2646715ba9c
				 */
				altId: string
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
				 * @description ID of the order that needs to be returned
				 * @example 653f5e0cde5a1314e62a837c
				 */
				orderId: string
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
					'application/json': components['schemas']['ListFulfillmentResponseDto']
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
	'create-order-fulfillment': {
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
				 * @description ID of the order that needs to be returned
				 * @example 653f5e0cde5a1314e62a837c
				 */
				orderId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['CreateFulfillmentDto']
			}
		}
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['CreateFulfillmentResponseDto']
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
	'list-subscriptions': {
		parameters: {
			query: {
				/**
				 * @description AltId is the unique identifier e.g: location id.
				 * @example 3SwdhCu3svxI8AKsPJt6
				 */
				altId: string
				/**
				 * @description AltType is the type of identifier.
				 * @example location
				 */
				altType: 'location'
				/**
				 * @description Contact ID for the subscription
				 * @example AmuzcoPBpgKeccNsFlib
				 */
				contactId?: string
				/**
				 * @description Closing interval of subscriptions.
				 * @example 2024-02-13
				 */
				endAt?: string
				/**
				 * @description Entity id for filtering of subscriptions.
				 * @example 61dd0fe9c077f73e67f78803
				 */
				entityId?: string
				/**
				 * @description Source of the subscriptions.
				 * @example funnel
				 */
				entitySourceType?: string
				/**
				 * @description Subscription id for filtering of subscriptions.
				 * @example 64bf78af39118e4011926cba
				 */
				id?: string
				/**
				 * @description The maximum number of items to be included in a single page of results
				 * @example 20
				 */
				limit?: number
				/**
				 * @description The starting index of the page, indicating the position from which the results should be retrieved.
				 * @example 0
				 */
				offset?: number
				/**
				 * @description Mode of payment.
				 * @example live
				 */
				paymentMode?: string
				/**
				 * @description The name of the subscription for searching.
				 * @example Awesome subscription
				 */
				search?: string
				/**
				 * @description Starting interval of subscriptions.
				 * @example 2024-02-01
				 */
				startAt?: string
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
					'application/json': components['schemas']['ListSubscriptionResponseDto']
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
	'get-subscription-by-id': {
		parameters: {
			query: {
				/**
				 * @description AltId is the unique identifier e.g: location id.
				 * @example 3SwdhCu3svxI8AKsPJt6
				 */
				altId: string
				/**
				 * @description AltType is the type of identifier.
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
				 * @description ID of the subscription that needs to be returned
				 * @example 6322e9c9e39fc14ab3ed7042
				 */
				subscriptionId: string
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
					'application/json': components['schemas']['GetSubscriptionResponseSchema']
				}
			}
			/** @description Subscription not found */
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
	'list-transactions': {
		parameters: {
			query: {
				/**
				 * @description AltId is the unique identifier e.g: location id.
				 * @example 3SwdhCu3svxI8AKsPJt6
				 */
				altId: string
				/**
				 * @description AltType is the type of identifier.
				 * @example location
				 */
				altType: string
				/**
				 * @description Contact id for filtering of transactions.
				 * @example XPLSw2SVagl12LMDeTmQ
				 */
				contactId?: string
				/**
				 * @description Closing interval of transactions.
				 * @example 2024-02-13
				 */
				endAt?: string
				/**
				 * @description Entity id for filtering of transactions.
				 * @example 61dd0fe9c077f73e67f78803
				 */
				entityId?: string
				/**
				 * @description Source sub-type of the transactions.
				 * @example two_step_order_form
				 */
				entitySourceSubType?: string
				/**
				 * @description Source of the transactions.
				 * @example funnel
				 */
				entitySourceType?: string
				/**
				 * @description The maximum number of items to be included in a single page of results
				 * @example 20
				 */
				limit?: number
				/**
				 * @description LocationId is the id of the sub-account.
				 * @example 3SwdhCu3svxI8AKsPJt6
				 */
				locationId?: string
				/**
				 * @description The starting index of the page, indicating the position from which the results should be retrieved.
				 * @example 0
				 */
				offset?: number
				/**
				 * @description Mode of payment.
				 * @example live
				 */
				paymentMode?: string
				/**
				 * @description The name of the transaction for searching.
				 * @example Awesome transaction
				 */
				search?: string
				/**
				 * @description Starting interval of transactions.
				 * @example 2024-02-01
				 */
				startAt?: string
				/**
				 * @description Subscription id for filtering of transactions.
				 * @example sub_1KGcXDCScnf89tZoVkoEMCEL
				 */
				subscriptionId?: string
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
					'application/json': components['schemas']['ListTxnsResponseDto']
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
	'get-transaction-by-id': {
		parameters: {
			query: {
				/**
				 * @description AltId is the unique identifier e.g: location id.
				 * @example 3SwdhCu3svxI8AKsPJt6
				 */
				altId: string
				/**
				 * @description AltType is the type of identifier.
				 * @example location
				 */
				altType: string
				/**
				 * @description LocationId is the id of the sub-account.
				 * @example 3SwdhCu3svxI8AKsPJt6
				 */
				locationId?: string
			}
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/**
				 * @description ID of the transaction that needs to be returned
				 * @example 61dd0feac077f72010f78804
				 */
				transactionId: string
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
					'application/json': components['schemas']['GetTxnResponseSchema']
				}
			}
			/** @description Transaction not found */
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
