export type paths = {
	'/email/verify': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Email Verification
		 * @description Verify Email
		 */
		post: operations['verify-email']
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
			/** @example Bad Request */
			message?: string
			/** @example 400 */
			statusCode?: number
		}
		EmailNotVerifiedResponseDto: {
			/**
			 * @description Email address
			 * @example abc@xyz.com
			 */
			address?: string
			/**
			 * @description Email verification failure message
			 * @example Validation is disabled / proper config not found
			 */
			message?: string
			/**
			 * @description Email verification not processed
			 * @example false
			 */
			verified: boolean
		}
		EmailVerifiedResponseDto: {
			/**
			 * @description Email address
			 * @example abc@xyz.com
			 */
			address: string
			/**
			 * @description Lead Connector email verification recomendation
			 * @example {
			 *       "isEmailValid": false
			 *     }
			 */
			leadconnectorRecomendation: components['schemas']['LeadConnectorRecomandationDto']
			/**
			 * @description Reason for email verification failure
			 * @example [
			 *       "mailbox_does_not_exist"
			 *     ]
			 */
			reason?: string[]
			/**
			 * @description Email verification result
			 * @example undeliverable
			 * @enum {string}
			 */
			result:
				| 'deliverable'
				| 'undeliverable'
				| 'do_not_send'
				| 'unknown'
				| 'catch_all'
			/**
			 * @description Risk level of email sending to bounce
			 * @example low
			 * @enum {string}
			 */
			risk: 'high' | 'low' | 'medium' | 'unknown'
		}
		LeadConnectorRecomandationDto: {
			/**
			 * @description Email verification status
			 * @example false
			 */
			isEmailValid?: boolean
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
		VerificationBodyDto: {
			/**
			 * @description Email Verification type
			 * @example email
			 * @enum {string}
			 */
			type: 'email' | 'contact'
			/**
			 * @description Email Verification recepient (email address / contactId)
			 * @example abc@xyz.com
			 */
			verify: string
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
	'verify-email': {
		parameters: {
			query: {
				/**
				 * @description Location Id, The email verification charges will be deducted from this location (if rebilling is enabled) / company wallet
				 * @example 5DP4iH6HLkQsiKESj6rh
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
				'application/json': components['schemas']['VerificationBodyDto']
			}
		}
		responses: {
			/** @description Successful response */
			201: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json':
						| components['schemas']['EmailVerifiedResponseDto']
						| components['schemas']['EmailNotVerifiedResponseDto']
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
