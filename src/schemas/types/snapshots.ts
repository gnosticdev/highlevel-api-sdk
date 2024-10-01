export interface paths {
	'/snapshots': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get Snapshots
		 * @description Get a list of all own and imported Snapshots
		 */
		get: operations['get-custom-snapshots']
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
		SnapshotsSchema: {
			/**
			 * @description Snapshot Id.
			 * @example 1eM2UgkfaECOYyUdCo9Pa
			 */
			id?: string
			/**
			 * @description Name of the snapshot
			 * @example Martial Arts Snapshot
			 */
			name?: string
			/**
			 * @description Type of snapshot - own or imported.
			 * @example own
			 */
			type?: string
		}
		GetSnapshotsSuccessfulResponseDto: {
			snapshots?: components['schemas']['SnapshotsSchema'][]
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
	'get-custom-snapshots': {
		parameters: {
			query: {
				/**
				 * @description Company Id
				 * @example 5D112kQsiKESj6rash
				 */
				companyId: string
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
					'application/json': components['schemas']['GetSnapshotsSuccessfulResponseDto']
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
}
