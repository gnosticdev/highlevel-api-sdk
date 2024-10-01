export interface paths {
	'/workflows': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get Workflow
		 * @description Get Workflow
		 */
		get: operations['get-workflow']
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
		BadRequestDto: {
			/** @example 400 */
			statusCode?: number
			/** @example Bad Request */
			message?: string
		}
		UnauthorizedDto: {
			/** @example 401 */
			statusCode?: number
			/** @example Invalid token: access token is invalid */
			message?: string
			/** @example Unauthorized */
			error?: string
		}
		unprocessableDto: {
			/** @example 422 */
			statusCode?: number
			/** @example [
			 *       "Unprocessable Entity"
			 *     ] */
			message?: string[]
			/** @example Unprocessable Entity */
			error?: string
		}
		WorkflowSchema: {
			/** @example 78559bb3-b920-461e-b010-7b2a2816d2a9 */
			id?: string
			/** @example First Workflow */
			name?: string
			/** @example draft */
			status?: string
			/** @example 2 */
			version?: number
			/** @example 2021-05-26T11:33:49.000Z */
			createdAt?: string
			/** @example 2021-05-26T11:33:49.000Z */
			updatedAt?: string
			/** @example eBG6WapS3v4ZqwA45MTxtYJ */
			locationId?: string
		}
		GetWorkflowSuccessfulResponseDto: {
			workflow?: components['schemas']['WorkflowSchema'][]
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
	'get-workflow': {
		parameters: {
			query: {
				/** @example ve9EPM428h8vShlRW1KT */
				locationId: string
			}
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description Api Version */
				Version: string
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
					'application/json': components['schemas']['GetWorkflowSuccessfulResponseDto']
				}
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDto']
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDto']
				}
			}
			/** @description Unprocessable Entity */
			422: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['unprocessableDto']
				}
			}
		}
	}
}
