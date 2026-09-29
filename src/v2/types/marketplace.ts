export interface paths {
	'/marketplace/app/{appId}/installations': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get Installer Details
		 * @description Fetches installer details for the authenticated user. This endpoint returns information about the company, location, user, and installation details associated with the current OAuth token.
		 */
		get: operations['get-installer-details']
		put?: never
		post?: never
		/**
		 * Uninstall an application
		 * @description Uninstalls an application from your company or a specific location. This will remove the application`s access and stop all its functionalities
		 */
		delete: operations['uninstall-application']
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/marketplace/app/{appId}/rebilling-config/location/{locationId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get rebilling config for an app subscription and usage plans
		 * @description Get rebilling config for an app subscription and usage plans for the authenticated sub-account. This endpoint returns the subscription and usage plans for an app.
		 */
		get: operations['get-rebilling-config-for-app']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/marketplace/billing/charges': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get all wallet charges
		 * @description Get all wallet charges
		 */
		get: operations['getCharges']
		put?: never
		/**
		 * Create a new wallet charge
		 * @description Create a new wallet charge
		 */
		post: operations['charge']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/marketplace/billing/charges/{chargeId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get specific wallet charge details
		 * @description Get specific wallet charge details
		 */
		get: operations['getSpecificCharge']
		put?: never
		post?: never
		/**
		 * Delete a wallet charge
		 * @description Delete a wallet charge
		 */
		delete: operations['deleteCharge']
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/marketplace/billing/charges/has-funds': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Check if account has sufficient funds
		 * @description Check if account has sufficient funds
		 */
		get: operations['hasFunds']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/marketplace/external-auth/migration': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Migrate external authentication connection
		 * @description Migrates an external authentication connection credentials (basic or oauth2) for a specific app and location. This endpoint validates the app configuration, stores credentials safely in CRM's native encrypted storage. With this the lifecycle of the token is managed by CRM.
		 */
		post: operations['migrateConnection']
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
		DeleteIntegrationBodyDto: {
			/**
			 * @description The company id from which the application is to be uninstalled. If you pass agency token, then companyId is required. It will uninstall application from agency as well as all sub-accounts.
			 * @example tDtDnQdgm2LXpyiqYvZ6
			 */
			companyId?: string
			/**
			 * @description The location id from which the application is to be uninstalled. If you pass location token, then locationId is required. It will uninstall application from that location only.
			 * @example tDtDnQdgm2LXpyiqYvZ6
			 */
			locationId?: string
			/**
			 * @description The reason for uninstalling the application. Reason is required if you are uninstalling the application as a developer.
			 * @example Application is not working as expected
			 */
			reason?: string
		}
		DeleteIntegrationResponse: {
			/**
			 * @description The status of the uninstallation of the application
			 * @example true
			 */
			success: boolean
		}
		GetInstallerDetailsResponseDTO: {
			/**
			 * @description Installation details
			 * @example {
			 *       "companyId": "company123",
			 *       "locationId": "location123",
			 *       "companyName": "Example Company",
			 *       "relationshipNumber": "0-002-230",
			 *       "companyEmail": "contact@example.com",
			 *       "companyOwnerFullName": "John Doe",
			 *       "userId": "user123",
			 *       "isWhitelabelCompany": false,
			 *       "companyPlan": "agency_monthly_497",
			 *       "companyHighLevelPlan": "agency_monthly_497",
			 *       "marketplaceAppPlanId": "plan123"
			 *     }
			 */
			installationDetails: components['schemas']['InstallerDetailsDTO']
		}
		GetRebillingConfigResponseDTO: {
			/**
			 * @description The rebilling plans configuration
			 * @example {
			 *       "subscription": [
			 *         {
			 *           "resellingAmount": 0,
			 *           "baseAmount": 999,
			 *           "planId": "5ae000000000000000000000",
			 *           "features": [
			 *             "feature1",
			 *             "feature2"
			 *           ],
			 *           "paymentType": "month",
			 *           "name": "Monthly Plan - 999",
			 *           "paymentTime": "month"
			 *         }
			 *       ],
			 *       "usage": [
			 *         {
			 *           "productType": "workflow_action",
			 *           "productName": "Send Group iMessage",
			 *           "usageUnit": "action / message",
			 *           "meterId": "680b97022b4a34420f5f9b93",
			 *           "meterName": "Send Group iMessage",
			 *           "fixedPricePerUnit": 0.01001,
			 *           "priceType": "fixed",
			 *           "minPricePerUnit": "0.01001",
			 *           "maxPricePerUnit": "0.01001",
			 *           "executionLimitPerCycle": 1000
			 *         }
			 *       ]
			 *     }
			 */
			plans: components['schemas']['PlansDTO']
		}
		InstallerDetailsDTO: {
			/**
			 * @description Company email. Will be null for sub-account installations due to PII concerns.
			 * @example contact@example.com
			 */
			companyEmail?: string | null
			/**
			 * @deprecated
			 * @description Company plan. Will be null for sub-account installations due to business sensitivity.
			 * @example agency_monthly_497
			 */
			companyHighLevelPlan?: string | null
			/**
			 * @description Company ID
			 * @example company123
			 */
			companyId: string
			/**
			 * @description Company name
			 * @example Example Company
			 */
			companyName: string
			/**
			 * @description Company owner full name. Will be null for sub-account installations due to PII concerns.
			 * @example John Doe
			 */
			companyOwnerFullName?: string | null
			/**
			 * @description Company plan. Will be null for sub-account installations due to business sensitivity.
			 * @example agency_monthly_497
			 */
			companyPlan?: string | null
			/**
			 * @description Whether the company is a whitelabel company
			 * @example false
			 */
			isWhitelabelCompany: boolean
			/**
			 * @description Location ID (if applicable)
			 * @example location123
			 */
			locationId?: string
			/**
			 * @description Marketplace app plan ID for paid apps
			 * @example plan123
			 */
			marketplaceAppPlanId?: string
			/**
			 * @description Company relationship number
			 * @example 0-002-230
			 */
			relationshipNumber: string
			/**
			 * @description User ID who installed the app
			 * @example user123
			 */
			userId: string
			/**
			 * @description Whitelabel details (only present if isWhitelabelCompany is true)
			 * @example {
			 *       "domain": "example.com",
			 *       "logoUrl": "https://example.com/logo.png"
			 *     }
			 */
			whitelabelDetails?: components['schemas']['WhitelabelDetailsDTO']
		}
		InternalServerErrorDTO: {
			/**
			 * @description Error message describing the internal server error
			 * @example Internal Server Error
			 */
			message?: string
			/**
			 * @description HTTP status code
			 * @example 500
			 */
			statusCode?: number
		}
		MigrateConnectionDto: {
			/**
			 * @description Access token (required when type is oauth2)
			 * @example ya29.a0AfH6SMBx...
			 */
			accessToken?: string
			/**
			 * @description Connection identifier
			 * @example my-connection-identifier
			 */
			accountId: string
			/**
			 * @description API Key (supported when type is basic)
			 * @example sk_test_1234567890
			 */
			apiKey?: string
			/**
			 * @description App ID
			 * @example 507f1f77bcf86cd799439011
			 */
			appId: string
			/**
			 * @description App Version ID
			 * @example 507f1f77bcf86cd799439012
			 */
			appVersionId: string
			/**
			 * @description Basic auth credentials as key/value pairs (supported when type is basic). Keys are validated against the app version externalAuthConfig.fields.
			 * @example {
			 *       "email": "user@example.com",
			 *       "password": "p@ssw0rd"
			 *     }
			 */
			basicCredentials?: Record<string, never>
			/**
			 * @description Display name for the connection (optional, defaults to accountId)
			 * @example My Connection Display Name
			 */
			displayName?: string
			/**
			 * @description Timestamp for access token expiry (optional for oauth2)
			 * @example 1735689600000
			 */
			expiryAt?: number
			/**
			 * @description Access token expiry time in milliseconds (optional for oauth2)
			 * @example 3600000
			 */
			expiryIn?: number
			/**
			 * @description Whether this is the default connection for the location (optional, defaults to false)
			 * @example false
			 */
			isDefault?: boolean
			/**
			 * @description Location ID
			 * @example location_12345
			 */
			locationId: string
			/**
			 * @description Refresh token (required when type is oauth2)
			 * @example 1//0gHq5F...
			 */
			refreshToken?: string
			/**
			 * @description OAuth2 scopes (optional for oauth2)
			 * @example [
			 *       "contacts.readonly",
			 *       "contacts.write"
			 *     ]
			 */
			scopes?: string[]
			/**
			 * @description Type of authentication - basic or oauth2
			 * @example oauth2
			 * @enum {string}
			 */
			type: 'oauth2' | 'basic'
		}
		MigrateConnectionResponseDto: {
			/**
			 * @description Unique identifier for the migrated connection
			 * @example migration_12345
			 */
			identifier: string
			/**
			 * @description Message describing the result
			 * @example Connection migrated successfully
			 */
			message?: string
			/**
			 * @description Indicates if the migration was successful
			 * @example true
			 */
			success: boolean
		}
		PlansDTO: {
			/**
			 * @description Subscription plans
			 * @example [
			 *       {
			 *         "resellingAmount": 0,
			 *         "baseAmount": 999,
			 *         "planId": "5ae000000000000000000000",
			 *         "features": [
			 *           "feature1",
			 *           "feature2"
			 *         ],
			 *         "paymentType": "month",
			 *         "name": "Monthly Plan - 999",
			 *         "paymentTime": "month"
			 *       }
			 *     ]
			 */
			subscription: components['schemas']['SubscriptionPlanDTO'][]
			/**
			 * @description Usage-based plans
			 * @example [
			 *       {
			 *         "productType": "workflow_action",
			 *         "productName": "Send Group iMessage",
			 *         "usageUnit": "action / message",
			 *         "meterId": "680b97022b4a34420f5f9b93",
			 *         "meterName": "Send Group iMessage",
			 *         "fixedPricePerUnit": 0.01001,
			 *         "priceType": "fixed",
			 *         "minPricePerUnit": "0.01001",
			 *         "maxPricePerUnit": "0.01001",
			 *         "executionLimitPerCycle": 1000
			 *       }
			 *     ]
			 */
			usage: components['schemas']['UsagePlanDTO'][]
		}
		RaiseChargeBodyDTO: {
			/**
			 * @description App ID of the App
			 * @example 6578278e879ad2646715ba9c
			 */
			appId: string
			/**
			 * @description ID of the Agency the Sub-account belongs to
			 * @example company_abc123
			 */
			companyId: string
			/**
			 * @description Description of the charge
			 * @example Charge for sending 10 SMS messages
			 */
			description: string
			/**
			 * @description Event ID / Transaction ID on your server's side. This will help you maintain the reference of the event/transaction on your end that you charged the customer for.
			 * @example evt_abc123
			 */
			eventId: string
			/**
			 * @description The timestamp when the event/transaction was performed. If blank, the billing timestamp will be set as the event time. ISO8601 Format.
			 * @example 2025-03-26T00:00:000Z
			 */
			eventTime?: string
			/**
			 * @description ID of the Sub-Account to be charged
			 * @example ve9EPM428h8vShlRW1KT
			 */
			locationId: string
			/**
			 * @description Billing Meter ID (you can find this on your app's pricing page)
			 * @example 680b97022b4a34420f5f9b93
			 */
			meterId: string
			/**
			 * @description Price per unit to charge
			 * @example 0.01
			 */
			price?: number
			/**
			 * @description Number of units to charge
			 * @example 10
			 */
			units: number
			/**
			 * @description User ID
			 * @example user_abc123
			 */
			userId?: string
		}
		SubscriptionPlanDTO: {
			/**
			 * @description The base amount
			 * @example 0
			 */
			baseAmount: number
			/**
			 * @description The features
			 * @example [
			 *       "feature1",
			 *       "feature2"
			 *     ]
			 */
			features: string[]
			/**
			 * @description The plan name
			 * @example Monthly Plan - 999
			 */
			name: string
			/**
			 * @description The payment time
			 * @example month
			 */
			paymentTime: string
			/**
			 * @description The payment time
			 * @example month
			 */
			paymentType: string
			/**
			 * @description The plan id
			 * @example 5ae000000000000000000000
			 */
			planId: string
			/**
			 * @description The reselling amount
			 * @example 0
			 */
			resellingAmount: number
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
		UsagePlanDTO: {
			/**
			 * @description The execution limit per cycle
			 * @example 1000
			 */
			executionLimitPerCycle: number
			/**
			 * @description The fixed price per unit, applicable for fixed price type
			 * @example 0.01001
			 */
			fixedPricePerUnit: number
			/**
			 * @description The max price per unit, applicable for dynamic price type
			 * @example 0.01001
			 */
			maxPricePerUnit: string
			/**
			 * @description The meter id
			 * @example 680b97022b4a34420f5f9b93
			 */
			meterId: string
			/**
			 * @description The meter name
			 * @example Send Group iMessage
			 */
			meterName: string
			/**
			 * @description The min price per unit, applicable for dynamic price type
			 * @example 0.01001
			 */
			minPricePerUnit: string
			/**
			 * @description The price type
			 * @example fixed
			 * @enum {string}
			 */
			priceType: 'fixed' | 'dynamic'
			/**
			 * @description The product name
			 * @example Send Group iMessage
			 */
			productName: string
			/**
			 * @description The product type
			 * @example workflow_action
			 */
			productType: string
			/**
			 * @description The usage unit for the meter
			 * @example action / message
			 */
			usageUnit: string
		}
		WhitelabelDetailsDTO: {
			/**
			 * @description Domain of the whitelabel company
			 * @example example.com
			 */
			domain: string
			/**
			 * @description Logo URL of the whitelabel company
			 * @example https://example.com/logo.png
			 */
			logoUrl: string
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
	'get-installer-details': {
		parameters: {
			query?: never
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description ID of the app to get installer details */
				appId: string
			}
			cookie?: never
		}
		requestBody?: never
		responses: {
			/** @description Successfully retrieved installer details. Returns company, location, user, and installation information. */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['GetInstallerDetailsResponseDTO']
				}
			}
			/** @description Bad Request. Invalid request parameters or missing required data. */
			400: {
				headers: {
					[name: string]: unknown
				}
				content?: never
			}
			/** @description Forbidden. The client does not have necessary permissions to access installer details. */
			403: {
				headers: {
					[name: string]: unknown
				}
				content?: never
			}
		}
	}
	'uninstall-application': {
		parameters: {
			query?: never
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description The application id which is to be uninstalled. */
				appId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['DeleteIntegrationBodyDto']
			}
		}
		responses: {
			/** @description Successfully uninstalled the application */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['DeleteIntegrationResponse']
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
	'get-rebilling-config-for-app': {
		parameters: {
			query?: never
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description ID of the app to get rebilling config */
				appId: string
				/** @description ID of the Sub-Account location to get rebilling config for */
				locationId: string
			}
			cookie?: never
		}
		requestBody?: never
		responses: {
			/** @description Successfully retrieved rebilling config for the app */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['GetRebillingConfigResponseDTO']
				}
			}
			/** @description Bad Request. Invalid request parameters or missing required data. */
			400: {
				headers: {
					[name: string]: unknown
				}
				content?: never
			}
			/** @description Forbidden. The client does not have necessary permissions to access installer details. */
			403: {
				headers: {
					[name: string]: unknown
				}
				content?: never
			}
		}
	}
	getCharges: {
		parameters: {
			query?: {
				/** @description Filter results BEFORE a specific date. Use this in combination with startDate to filter results in a specific time window. */
				endDate?: string
				/** @description Event ID / Transaction ID */
				eventId?: string
				/** @description Maximum number of records to return */
				limit?: number
				/** @description Billing Meter ID (you can find this on your app's pricing page on the developer portal) */
				meterId?: string
				/** @description Number of records to skip */
				skip?: number
				/** @description Filter results AFTER a specific date. Use this in combination with endDate to filter results in a specific time window. */
				startDate?: string
				/** @description Filter results by User ID that your server passed via API when the charge was created */
				userId?: string
			}
			header?: never
			path?: never
			cookie?: never
		}
		requestBody?: never
		responses: {
			/** @description Returns list of wallet charges */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': {
						/**
						 * @description List of wallet charges
						 * @example []
						 */
						charges?: {
							/**
							 * @description Total amount charged
							 * @example 0.1
							 */
							amountCharged?: number
							/**
							 * @description App ID
							 * @example 6578278e879ad2646715ba9c
							 */
							appId?: string
							/**
							 * @description Charge ID
							 * @example charge_123
							 */
							chargeId?: string
							/**
							 * Format: date-time
							 * @description Timestamp when the charge was created in our system
							 * @example 2025-03-26T00:00:00.000Z
							 */
							createdAt?: string
							/**
							 * @description Currency of the transaction. We currently support USD only.
							 * @example USD
							 */
							currency?: string
							/**
							 * @description If the entityType is Location, entityld would be locationld.
							 * @example ve9EPM428h8vShlRW1KT
							 */
							entityId?: string
							/**
							 * @description Indicates who was charged? Currently, we support charges for 'location' only
							 * @example location
							 */
							entityType?: string
							/**
							 * @description meta object contains details that were sent while creating the charge via the API - eventID, description, eventTime, userld
							 * @example {
							 *       "eventId": "evt_abc123",
							 *       "description": "Charge for 10 SMS messages"
							 *     }
							 */
							meta?: Record<string, never>
							/**
							 * @description Billing Meter ID (you can find this on your app's pricing page)
							 * @example 680b97022b4a34420f5f9b93
							 */
							meterId?: string
							/**
							 * @description Price per unit for the charge
							 * @example 0.01
							 */
							pricePerUnit?: number
							/**
							 * @description Value is 'true' if the charge has subsequently been refunded.
							 * @example false
							 */
							refunded?: boolean
							/**
							 * @description This can be one of two values - 'charge' or 'refund'
							 * @example charge
							 */
							transactionType?: string
							/**
							 * @description Number of units that the sub-account was charged for
							 * @example 10
							 */
							units?: number
							/**
							 * Format: date-time
							 * @description Timestamp when the charge was last updated in our system
							 * @example 2025-03-26T00:00:00.000Z
							 */
							updatedAt?: string
						}[]
						/**
						 * @deprecated
						 * @description Total number of charges
						 * @example 100
						 */
						count?: number
						/**
						 * @description Pagination metadata for the charges list
						 * @example {
						 *       "total": 100,
						 *       "skip": 0,
						 *       "limit": 10
						 *     }
						 */
						pagination?: {
							/**
							 * @description Maximum number of records to return
							 * @example 10
							 */
							limit?: number
							/**
							 * @description Number of records to skip
							 * @example 0
							 */
							skip?: number
							/**
							 * @description Total number of charges
							 * @example 100
							 */
							total?: number
						}
					}
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
	charge: {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['RaiseChargeBodyDTO']
			}
		}
		responses: {
			/** @description Charge created successfully */
			201: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': {
						/**
						 * @description Unique identifier of the created charge
						 * @example charge_123
						 */
						chargeId?: string
						/**
						 * @description Indicates whether the charge was created successfully
						 * @example true
						 */
						success?: boolean
					}
				}
			}
			/** @description Bad request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': {
						/**
						 * @description Error message describing the bad request
						 * @example Invalid request body
						 */
						message?: string
						/**
						 * @description HTTP status code
						 * @example 400
						 */
						statusCode?: number
					}
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
	getSpecificCharge: {
		parameters: {
			query?: never
			header?: never
			path: {
				/** @description ID of the charge to retrieve */
				chargeId: string
			}
			cookie?: never
		}
		requestBody?: never
		responses: {
			/** @description Returns charge details */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': {
						/**
						 * @description Total amount charged
						 * @example 0.1
						 */
						amountCharged?: number
						/**
						 * @description App ID
						 * @example 6578278e879ad2646715ba9c
						 */
						appId?: string
						/**
						 * @description Charge ID
						 * @example charge_123
						 */
						chargeId?: string
						/**
						 * Format: date-time
						 * @description Timestamp when the charge was created in our system
						 * @example 2025-03-26T00:00:00.000Z
						 */
						createdAt?: string
						/**
						 * @description Currency of the transaction. We currently support USD only.
						 * @example USD
						 */
						currency?: string
						/**
						 * @description If the entityType is Location, entityld would be locationld.
						 * @example ve9EPM428h8vShlRW1KT
						 */
						entityId?: string
						/**
						 * @description Indicates who was charged? Currently, we support charges for 'location' only
						 * @example location
						 */
						entityType?: string
						/**
						 * @description meta object contains details that were sent while creating the charge via the API - eventID, description, eventTime, userld
						 * @example {
						 *       "eventId": "evt_abc123",
						 *       "description": "Charge for 10 SMS messages"
						 *     }
						 */
						meta?: Record<string, never>
						/**
						 * @description Billing Meter ID (you can find this on your app's pricing page)
						 * @example 680b97022b4a34420f5f9b93
						 */
						meterId?: string
						/**
						 * @description Price per unit for the charge
						 * @example 0.01
						 */
						pricePerUnit?: number
						/**
						 * @description Value is 'true' if the charge has subsequently been refunded.
						 * @example false
						 */
						refunded?: boolean
						/**
						 * @description This can be one of two values - 'charge' or 'refund'
						 * @example charge
						 */
						transactionType?: string
						/**
						 * @description Number of units that the sub-account was charged for
						 * @example 10
						 */
						units?: number
						/**
						 * Format: date-time
						 * @description Timestamp when the charge was last updated in our system
						 * @example 2025-03-26T00:00:00.000Z
						 */
						updatedAt?: string
					}
				}
			}
			/** @description Charge not found */
			404: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': {
						/**
						 * @description Error message describing why the charge was not found
						 * @example Charge not found
						 */
						message?: string
						/**
						 * @description HTTP status code
						 * @example 404
						 */
						statusCode?: number
					}
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
	deleteCharge: {
		parameters: {
			query?: never
			header?: never
			path: {
				/** @description ID of the charge to delete */
				chargeId: string
			}
			cookie?: never
		}
		requestBody?: never
		responses: {
			/** @description Charge deleted successfully */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': {
						/**
						 * @description Indicates whether the charge was deleted successfully
						 * @example true
						 */
						success?: boolean
					}
				}
			}
			/** @description Charge not found */
			404: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': {
						/**
						 * @description Error message describing why the charge was not found
						 * @example Charge not found
						 */
						message?: string
						/**
						 * @description HTTP status code
						 * @example 404
						 */
						statusCode?: number
					}
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
	hasFunds: {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		requestBody?: never
		responses: {
			/** @description Returns fund availability status */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': {
						/**
						 * @description Indicates whether the sub-account has sufficient funds to be charged
						 * @example true
						 */
						hasFunds?: boolean
					}
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
	migrateConnection: {
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
				'application/json': components['schemas']['MigrateConnectionDto']
			}
		}
		responses: {
			/** @description Connection migrated successfully */
			201: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['MigrateConnectionResponseDto']
				}
			}
			/** @description Bad request - invalid input or auth type mismatch */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
			/** @description Unauthorized - invalid or missing token */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
			/** @description App not found */
			404: {
				headers: {
					[name: string]: unknown
				}
				content?: never
			}
			/** @description Internal server error */
			500: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['InternalServerErrorDTO']
				}
			}
		}
	}
}
