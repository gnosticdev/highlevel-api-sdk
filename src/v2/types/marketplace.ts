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
			/** @description Installation details */
			installationDetails: components['schemas']['InstallerDetailsDTO']
		}
		InstallerDetailsDTO: {
			/**
			 * @description Company email
			 * @example contact@example.com
			 */
			companyEmail: string
			/**
			 * @description Company plan
			 * @example agency_monthly_497
			 */
			companyHighLevelPlan?: string
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
			 * @description Company owner full name
			 * @example John Doe
			 */
			companyOwnerFullName?: string
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
			 * @description User ID who installed the app
			 * @example user123
			 */
			userId: string
			/** @description Whitelabel details (only present if isWhitelabelCompany is true) */
			whitelabelDetails?: components['schemas']['WhitelabelDetailsDTO']
		}
		RaiseChargeBodyDTO: {
			/** @description App ID of the App */
			appId: string
			/** @description ID of the Agency the Sub-account belongs to */
			companyId: string
			/** @description Description of the charge */
			description: string
			/** @description Event ID / Transaction ID on your server's side. This will help you maintain the reference of the event/transaction on your end that you charged the customer for. */
			eventId: string
			/**
			 * @description The timestamp when the event/transaction was performed. If blank, the billing timestamp will be set as the event time. ISO8601 Format.
			 * @example 2025-03-26T00:00:000Z
			 */
			eventTime?: string
			/** @description ID of the Sub-Account to be charged */
			locationId: string
			/** @description Billing Meter ID (you can find this on your app's pricing page) */
			meterId: string
			/** @description Price per unit to charge */
			price?: number
			/** @description Number of units to charge */
			units: string
			/** @description User ID */
			userId?: string
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
			header?: never
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
						charges?: {
							/** @description Total amount charged */
							amountCharged?: number
							/** @description App ID */
							appId?: string
							/** @description Charge ID */
							chargeId?: string
							/**
							 * Format: date-time
							 * @description Timestamp when the charge was created in our system
							 */
							createdAt?: string
							/** @description Currency of the transaction. We currently support USD only. */
							currency?: string
							/** @description If the entityType is Location, entityld would be locationld. */
							entityId?: string
							/** @description Indicates who was charged? Currently, we support charges for 'location' only */
							entityType?: string
							/** @description meta object contains details that were sent while creating the charge via the API - eventID, description, eventTime, userld */
							meta?: Record<string, never>
							/** @description Billing Meter ID (you can find this on your app's pricing page) */
							meterId?: string
							/** @description Price per unit for the charge */
							pricePerUnit?: number
							/** @description Value is 'true' if the charge has subsequently been refunded. */
							refunded?: boolean
							/** @description This can be one of two values - 'charge' or 'refund' */
							transactionType?: string
							/** @description Number of units that the sub-account was charged for */
							units?: number
							/**
							 * Format: date-time
							 * @description Timestamp when the charge was last updated in our system
							 */
							updatedAt?: string
						}[]
						total?: number
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
						/** @example charge_123 */
						chargeId?: string
						/** @example true */
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
						message?: string
						/** @example 400 */
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
						/** @description Total amount charged */
						amountCharged?: number
						/** @description App ID */
						appId?: string
						/** @description Charge ID */
						chargeId?: string
						/**
						 * Format: date-time
						 * @description Timestamp when the charge was created in our system
						 */
						createdAt?: string
						/** @description Currency of the transaction. We currently support USD only. */
						currency?: string
						/** @description If the entityType is Location, entityld would be locationld. */
						entityId?: string
						/** @description Indicates who was charged? Currently, we support charges for 'location' only */
						entityType?: string
						/** @description meta object contains details that were sent while creating the charge via the API - eventID, description, eventTime, userld */
						meta?: Record<string, never>
						/** @description Billing Meter ID (you can find this on your app's pricing page) */
						meterId?: string
						/** @description Price per unit for the charge */
						pricePerUnit?: number
						/** @description Value is 'true' if the charge has subsequently been refunded. */
						refunded?: boolean
						/** @description This can be one of two values - 'charge' or 'refund' */
						transactionType?: string
						/** @description Number of units that the sub-account was charged for */
						units?: number
						/**
						 * Format: date-time
						 * @description Timestamp when the charge was last updated in our system
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
						/** @example Charge not found */
						message?: string
						/** @example 404 */
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
						/** @example true */
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
						/** @example Charge not found */
						message?: string
						/** @example 404 */
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
						/** @example true */
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
}
