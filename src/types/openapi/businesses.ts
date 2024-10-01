export type paths = {
	'/businesses/{businessId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get Business
		 * @description Get Business
		 */
		get: operations['get-business']
		/**
		 * Update Business
		 * @description Update Business
		 */
		put: operations['update-business']
		post?: never
		/**
		 * Delete Business
		 * @description Delete Business
		 */
		delete: operations['delete-Business']
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/businesses/': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get Businesses by Location
		 * @description Get Businesses by Location
		 */
		get: operations['get-businesses-by-location']
		put?: never
		/**
		 * Create Business
		 * @description Create Business
		 */
		post: operations['create-business']
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
		BusinessCreatedByOrUpdatedBy: Record<string, never>
		BusinessDto: {
			/**
			 * @description Business Id
			 * @example 63771dcac1116f0e21de8e12
			 */
			id: string
			/**
			 * @description Business Name
			 * @example Microsoft
			 */
			name: string
			/** @description phone number */
			phone?: string
			/**
			 * @description email
			 * @example abc@microsoft.com
			 */
			email?: string
			/**
			 * @description website
			 * @example microsoft.com
			 */
			website?: string
			/** @description address */
			address?: string
			/** @description city */
			city?: string
			/** @description description */
			description?: string
			/** @description state */
			state?: string
			/** @description postal code */
			postalCode?: string
			/**
			 * @description country
			 * @example united states
			 */
			country?: string
			/** @description updated By */
			updatedBy?: components['schemas']['BusinessCreatedByOrUpdatedBy']
			/** @description locaitonId */
			locationId: string
			/** @description Created By */
			createdBy?: components['schemas']['BusinessCreatedByOrUpdatedBy']
			/**
			 * Format: date-time
			 * @description Creation Time
			 */
			createdAt?: string
			/**
			 * Format: date-time
			 * @description Last updation time
			 */
			updatedAt?: string
		}
		GetBusinessByLocationResponseDto: {
			/** @description Business Response */
			businesses: components['schemas']['BusinessDto'][]
		}
		CreateBusinessDto: {
			/** @example Microsoft */
			name: string
			/** @example 5DP4iH6HLkQsiKESj6rh */
			locationId: string
			/** @example +18832327657 */
			phone?: string
			/** @example john@deo.com */
			email?: string
			/** @example www.xyz.com */
			website?: string
			/** @example street adress */
			address?: string
			/** @example new york */
			city?: string
			/** @example 12312312 */
			postalCode?: string
			/** @example new york */
			state?: string
			/** @example us */
			country?: string
			/** @example business description */
			description?: string
		}
		UpdateBusinessResponseDto: {
			/**
			 * @description Success Value
			 * @example true
			 */
			success: boolean
			/** @description Business Response */
			buiseness: components['schemas']['BusinessDto']
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
		UpdateBusinessDto: {
			/** @example Microsoft */
			name?: string
			/** @example +18832327657 */
			phone?: string
			/** @example john@deo.com */
			email?: string
			/** @example 12312312 */
			postalCode?: string
			/** @example www.xyz.com */
			website?: string
			/** @example street adress */
			address?: string
			/** @example new york */
			state?: string
			/** @example new york */
			city?: string
			/** @example us */
			country?: string
			/** @example business description */
			description?: string
		}
		DeleteBusinessResponseDto: {
			/**
			 * @description Success value
			 * @example true
			 */
			success: boolean
		}
		GetBusinessByIdResponseDto: {
			/** @description Business Response */
			business: components['schemas']['BusinessDto']
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
	'get-business': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @example 5DP4iH6HLkQsiKESj6rh */
				businessId: string
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
					'application/json': components['schemas']['GetBusinessByIdResponseDto']
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
	'update-business': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @example 5DP4iH6HLkQsiKESj6rh */
				businessId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['UpdateBusinessDto']
			}
		}
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UpdateBusinessResponseDto']
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
	'delete-Business': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @example 5DP4iH6HLkQsiKESj6rh */
				businessId: string
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
					'application/json': components['schemas']['DeleteBusinessResponseDto']
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
	'get-businesses-by-location': {
		parameters: {
			query: {
				/** @example 5DP4iH6HLkQsiKESj6rh */
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
					'application/json': components['schemas']['GetBusinessByLocationResponseDto']
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
		}
	}
	'create-business': {
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
				'application/json': components['schemas']['CreateBusinessDto']
			}
		}
		responses: {
			/** @description Successful response */
			201: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UpdateBusinessResponseDto']
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
