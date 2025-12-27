export interface paths {
	'/phone-system/number-pools': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * List Number Pools
		 * @description Get list of number pools
		 */
		get: operations['getNumberPoolList']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/phone-system/numbers/location/{locationId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * List active numbers
		 * @description Retrieve a paginated list of active phone numbers for a specific location. Supports filtering, pagination, and optional exclusion of number pool assignments.
		 */
		get: operations['active-numbers']
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
		DetailedPhoneNumberDto: {
			/**
			 * @description Address SID for compliance purposes
			 * @example AD1234567890abcdef1234567890abcde
			 */
			addressSid?: string | null
			/**
			 * @description Bundle SID for regulatory compliance
			 * @example BU1234567890abcdef1234567890abcde
			 */
			bundleSid?: string | null
			/** @description Communication capabilities supported by this number */
			capabilities: {
				/**
				 * @description Whether the number supports fax transmission
				 * @example false
				 */
				fax?: boolean
				/**
				 * @description Whether the number supports MMS messaging
				 * @example true
				 */
				mms?: boolean
				/**
				 * @description Whether the number supports SMS messaging
				 * @example true
				 */
				sms?: boolean
				/**
				 * @description Whether the number supports voice calls
				 * @example true
				 */
				voice?: boolean
			}
			/**
			 * @description ISO 3166-1 alpha-2 country code
			 * @example US
			 */
			countryCode: string
			/**
			 * Format: date-time
			 * @description When the number was originally purchased/added
			 * @example 2023-01-15T10:30:00Z
			 */
			dateAdded?: string
			/**
			 * Format: date-time
			 * @description When the number configuration was last updated
			 * @example 2023-02-20T14:45:00Z
			 */
			dateUpdated?: string
			/**
			 * @description Phone number to forward calls to
			 * @example +14155552672
			 */
			forwardingNumber?: string | null
			/**
			 * @description Human-readable name assigned to the number
			 * @example Sales Line 1
			 */
			friendlyName?: string | null
			/** @description Configuration for inbound call handling service */
			inboundCallService?: {
				/**
				 * @description Type of inbound call service
				 * @example voice_ai
				 * @enum {string}
				 */
				type?: 'voice_ai' | 'ivr' | 'forward'
				/**
				 * @description Service configuration value or ID
				 * @example 68e381b296a83800a27cd1
				 */
				value?: string
			} | null
			/**
			 * @description Whether this is the default outbound number for the location
			 * @example false
			 */
			isDefaultNumber: boolean
			/**
			 * @description Whether group conversations are enabled for this number (US/CA numbers with SMS/MMS only)
			 * @example true
			 */
			isGroupConversationEnabled: boolean
			/**
			 * @description Array of user IDs that should ring when this number is called
			 * @example [
			 *       "user_123",
			 *       "user_456"
			 *     ]
			 */
			linkedRingAllUsers: string[]
			/**
			 * @description User ID of the user assigned to this number
			 * @example user_123456789
			 */
			linkedUser?: string | null
			/**
			 * @description Source or origin of the phone number
			 * @example twilio
			 * @enum {string}
			 */
			origin?: 'twilio' | 'hosted' | 'ported'
			/**
			 * @description E.164 formatted phone number
			 * @example +14155552671
			 */
			phoneNumber: string
			/**
			 * @description Phone number SID (unique identifier)
			 * @example PN1234567890abcdef1234567890abcde
			 */
			sid: string
			/**
			 * @description Type of phone number (local, toll-free, mobile, etc.)
			 * @example local
			 * @enum {string}
			 */
			type: 'local' | 'toll-free' | 'mobile' | 'national'
		}
		NumberPoolDto: {
			/**
			 * @description Whether call recording is enabled
			 * @example true
			 */
			callRecording?: boolean
			/**
			 * @description Number to forward calls to
			 * @example +14155552671
			 */
			forwardingNumber?: string
			/**
			 * @description Unique identifier for the number pool
			 * @example ve9EPM428h8vShlRW1KT
			 */
			id?: string
			/** @description Inbound call service configuration */
			inboundCallService?: {
				/**
				 * @description Type of inbound call service
				 * @example voice_ai
				 */
				type?: string
				/**
				 * @description Service configuration value/ID
				 * @example 68e381b296a83800a27cd1
				 */
				value?: string
			} | null
			/**
			 * @description Whether the number pool is active
			 * @example true
			 */
			isActive?: boolean
			/**
			 * @description Location ID this pool belongs to
			 * @example loc123
			 */
			locationId?: string
			/**
			 * @description Human-readable name of the number pool
			 * @example Sales Team Pool
			 */
			name?: string
			/** @description Phone numbers in this pool */
			numbers?: {
				/**
				 * @description Human-readable name for the number
				 * @example Sales Line 1
				 */
				friendlyName?: string
				/**
				 * @description E.164 formatted phone number
				 * @example +14155552671
				 */
				phoneNumber?: string
			}[]
			/**
			 * @description Whether whisper is enabled
			 * @example true
			 */
			whisper?: boolean
			/**
			 * @description Message played during whisper
			 * @example Incoming call from sales line
			 */
			whisperMessage?: string
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
	getNumberPoolList: {
		parameters: {
			query?: {
				/**
				 * @description Location ID to filter pools
				 * @example ve9EPM428h8vShlRW1KT
				 */
				locationId?: string
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
			/** @description Successfully retrieved number pools list */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': {
						/** @description Array of number pool objects */
						data?: components['schemas']['NumberPoolDto'][]
						/**
						 * @description Indicates if the request was successful
						 * @example true
						 */
						success?: boolean
						/**
						 * @description Total number of pools returned
						 * @example 5
						 */
						total?: number
					}
				}
			}
			/** @description Bad request - Invalid location ID or parameters */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': {
						/** @example Bad Request */
						error?: string
						/** @example Invalid locationId format */
						message?: string
						/** @example 400 */
						statusCode?: number
					}
				}
			}
			/** @description Unauthorized - Invalid or missing authentication token */
			401: {
				headers: {
					[name: string]: unknown
				}
				content?: never
			}
			/** @description Forbidden - Insufficient permissions for this location */
			403: {
				headers: {
					[name: string]: unknown
				}
				content?: never
			}
		}
	}
	'active-numbers': {
		parameters: {
			query?: {
				/**
				 * @description The page index for pagination. The default is 0.
				 * @example 0
				 */
				page?: number
				/**
				 * @description How many resources to return in each list page. The default is 50, and the maximum is 1000.
				 * @example 100
				 */
				pageSize?: number
				/**
				 * @description Filter numbers by phone number pattern. Supports partial matching (e.g., "+91" to find all Indian numbers).
				 * @example +91
				 */
				searchFilter?: string
				/**
				 * @description Whether to exclude numbers that are assigned to number pools. Default is true.
				 * @example true
				 */
				skipNumberPool?: boolean
			}
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/**
				 * @description The unique identifier of the location
				 * @example ve9EPM428h8vShlRW1KT
				 */
				locationId: string
			}
			cookie?: never
		}
		requestBody?: never
		responses: {
			/** @description Successfully retrieved list of active numbers */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': {
						/**
						 * @description Current status of the account
						 * @example active
						 * @enum {string}
						 */
						accountStatus: 'active' | 'suspended' | 'closed'
						/**
						 * @description Whether this account is manged by LeadconnectorHQ
						 * @example true
						 */
						isUnderGhl: boolean
						/** @description Array of phone number objects with detailed configuration */
						numbers: components['schemas']['DetailedPhoneNumberDto'][]
						/**
						 * @description Current page index (0-based)
						 * @example 0
						 */
						page: number
						/**
						 * @description Number of items requested per page
						 * @example 100
						 */
						pageSize: number
					}
				}
			}
			/** @description Bad request - Invalid parameters */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': {
						/** @example Bad Request */
						error?: string
						/** @example Invalid locationId format or pagination parameters */
						message?: string
						/** @example 400 */
						statusCode?: number
					}
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
			/** @description Phone system not connected */
			404: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': {
						/** @example Phone system is not connected to this account */
						message?: string
						/** @example 404 */
						statusCode?: number
					}
				}
			}
			/** @description Internal server error */
			500: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': {
						/**
						 * @description Account status when error occurs
						 * @example suspended
						 */
						accountStatus?: string
						/** @example Internal server error */
						msg?: string
					}
				}
			}
		}
	}
}
