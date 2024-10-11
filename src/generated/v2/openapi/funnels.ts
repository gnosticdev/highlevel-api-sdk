export type paths = {
	'/funnels/lookup/redirect': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Create Redirect
		 * @description The "Create Redirect" API Allows adding a new url redirect to the system. Use this endpoint to create a url redirect with the specified details. Ensure that the required information is provided in the request payload.
		 */
		post: operations['create-redirect']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/funnels/lookup/redirect/{id}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		post?: never
		/**
		 * Delete Redirect By Id
		 * @description The "Delete Redirect By Id" API Allows deletion of a URL redirect from the system using its unique identifier. Use this endpoint to delete a URL redirect with the specified ID using details provided in the request payload.
		 */
		delete: operations['delete-redirect-by-id']
		options?: never
		head?: never
		/**
		 * Update Redirect By Id
		 * @description The "Update Redirect By Id" API Allows updating an existing URL redirect in the system. Use this endpoint to modify a URL redirect with the specified ID using details provided in the request payload.
		 */
		patch: operations['update-redirect-by-id']
		trace?: never
	}
	'/funnels/lookup/redirect/list': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Fetch List of Redirects
		 * @description Retrieves a list of all URL redirects based on the given query parameters.
		 */
		get: operations['fetch-redirects-list']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/funnels/funnel/list': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Fetch List of Funnels
		 * @description Retrieves a list of all funnels based on the given query parameters.
		 */
		get: operations['getFunnels']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/funnels/page': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Fetch list of funnel pages
		 * @description Retrieves a list of all funnel pages based on the given query parameters.
		 */
		get: operations['getPagesByFunnelId']
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
		CreateRedirectParams: {
			/** @example 6p2RxpgtMKQwO3E6IUaT */
			locationId: string
			/** @example example.com */
			domain: string
			/** @example /Hello */
			path: string
			/** @example https://www.google.com */
			target: string
			/**
			 * @example URL
			 * @enum {string}
			 */
			action: 'funnel' | 'website' | 'url' | 'all'
		}
		RedirectResponseDTO: {
			/**
			 * @description Unique identifier of the redirect
			 * @example 6p2RxpgtMKQwO3E6IUaT
			 */
			id: string
			/**
			 * @description Identifier of the location associated with the redirect
			 * @example 6p2RxpgtMKQwO3E6IUaT
			 */
			locationId: string
			/**
			 * @description Domain where the redirect occurs
			 * @example www.example.com
			 */
			domain: string
			/**
			 * @description Original path that will be redirected
			 * @example /old-path
			 */
			path: string
			/**
			 * @description Lowercase version of the original path
			 * @example /old-path
			 */
			pathLowercase: string
			/**
			 * @description Type of redirect (e.g., Permanent, Temporary)
			 * @example Permanent
			 */
			type: string
			/**
			 * @description Target URL to which the original path will be redirected
			 * @example https://www.example.com/new-path
			 */
			target: string
			/**
			 * @description Action performed by the redirect
			 * @example url
			 */
			action: string
		}
		CreateRedirectResponseDTO: {
			/** @description Data containing details of the created redirect */
			data: components['schemas']['RedirectResponseDTO']
		}
		UpdateRedirectParams: {
			/** @example https://www.google.com */
			target: string
			/**
			 * @example URL
			 * @enum {string}
			 */
			action: 'funnel' | 'website' | 'url' | 'all'
			/** @example 6p2RxpgtMKQwO3E6IUaT */
			locationId: string
		}
		RedirectListResponseDTO: {
			/**
			 * @description Object containing the count of redirects and an array of redirect data
			 * @example {
			 *       "count": 42,
			 *       "data": []
			 *     }
			 */
			data: Record<string, never>
		}
		DeleteRedirectResponseDTO: {
			/**
			 * @description Status of the delete operation
			 * @example {
			 *       "status": "ok"
			 *     }
			 */
			data: Record<string, never>
		}
		UpdateRedirectResponseDTO: {
			/** @description Data containing details of the updated redirect */
			data: components['schemas']['RedirectResponseDTO']
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
		FunnelPageResponseDTO: {
			/** @example 0yJbP3q7t7pLmeTWRAE2 */
			_id: string
			/** @example ojQjykmwNIU88vfsfzvH */
			locationId: string
			/** @example iucJ6TdFZiddhq9f6znh */
			funnelId: string
			/** @example Home */
			name: string
			/** @example 343bf634-3aa6-4ade-b963-2d3cd0bf2ede */
			stepId: string
			/** @example false */
			deleted: string
			/** @example 2024-04-18T12:25:23.029Z */
			updatedAt: string
		}
		FunnelListResponseDTO: {
			/** @example {
			 *       "_id": "SkIDfu0S4m3NYQyvWHC6",
			 *       "dateAdded": "2024-04-29T15:00:05.681Z",
			 *       "dateUpdated": "2024-04-29T15:00:28.465Z",
			 *       "deleted": false,
			 *       "domainId": "",
			 *       "locationId": "ojQjykmwNIU88vfsfzvH",
			 *       "name": "Chaitanya Copy",
			 *       "orderFormVersion": 2,
			 *       "originId": "hAmyh7jrJH5FfEEKAJ9z",
			 *       "steps": [
			 *         {
			 *           "id": "f5d178c0-8bbb-4cd4-927c-691c68a62c59",
			 *           "name": "Step 1",
			 *           "originId": "80b2f227-5bc8-4ca5-980d-817745ea4e8b",
			 *           "pages": [
			 *             "2IhBmBcQRx9JXV1JZsRt"
			 *           ],
			 *           "products": [],
			 *           "sequence": 1,
			 *           "type": "optin_funnel_page",
			 *           "url": "/newtestifypath"
			 *         }
			 *       ],
			 *       "type": "funnel",
			 *       "updatedAt": "2024-04-29T15:00:34.233Z",
			 *       "faviconUrl": "",
			 *       "globalSectionVersion": 1,
			 *       "globalSectionsPath": "funnel/SkIDfu0S4m3NYQyvWHC6/global-sections-1",
			 *       "globalSectionsUrl": "https://firebasestorage.googleapis.com/v0/b/highlevel-staging.appspot.com/o/funnel%2FSkIDfu0S4m3NYQyvWHC6%2Fglobal-sections-1?alt=media&token=9cc5c211-093b-4751-aeba-19282ac92955",
			 *       "isStoreActive": false,
			 *       "trackingCodeBody": "",
			 *       "trackingCodeHead": "",
			 *       "url": "/chaitanya"
			 *     } */
			funnels: Record<string, never>
			/** @example 24 */
			count: number
			/** @example 03774d31-a57e-4b4f-95c7-315ce61969f1 */
			traceId: string
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
	'create-redirect': {
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
				'application/json': components['schemas']['CreateRedirectParams']
			}
		}
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['CreateRedirectResponseDTO']
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
	'delete-redirect-by-id': {
		parameters: {
			query: {
				/** @example 6p2RxpgtMKQwO3E6IUaT */
				locationId: string
			}
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				id: string
			}
			cookie?: never
		}
		requestBody?: never
		responses: {
			/** @description Successful response - URL redirect deleted successfully */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['DeleteRedirectResponseDTO']
				}
			}
			/** @description Unprocessable Entity - The provided data is invalid or incomplete */
			422: {
				headers: {
					[name: string]: unknown
				}
				content?: never
			}
		}
	}
	'update-redirect-by-id': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				id: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['UpdateRedirectParams']
			}
		}
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UpdateRedirectResponseDTO']
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
	'fetch-redirects-list': {
		parameters: {
			query: {
				/** @example 6p2RxpgtMKQwO3E6IUaT */
				locationId: string
				/** @example 20 */
				limit: number
				/** @example 10 */
				offset: number
				/** @example example.com/test */
				search?: string
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
			/** @description Successful response - List of URL redirects returned */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['RedirectListResponseDTO']
				}
			}
			/** @description Unprocessable Entity - The provided data is invalid or incomplete */
			422: {
				headers: {
					[name: string]: unknown
				}
				content?: never
			}
		}
	}
	getFunnels: {
		parameters: {
			query: {
				locationId: string
				type?: string
				category?: string
				offset?: string
				limit?: string
				parentId?: string
				name?: string
				search?: string
			}
			header: {
				/** @description Access Token */
				Authorization: string
			}
			path?: never
			cookie?: never
		}
		requestBody?: never
		responses: {
			/** @description Successful response - List of funnels returned */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['FunnelListResponseDTO']
				}
			}
		}
	}
	getPagesByFunnelId: {
		parameters: {
			query: {
				locationId: string
				funnelId: string
				name?: string
				limit: number
				offset: number
			}
			header: {
				/** @description Access Token */
				Authorization: string
			}
			path?: never
			cookie?: never
		}
		requestBody?: never
		responses: {
			/** @description Successful response - List of funnel pages returned */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['FunnelPageResponseDTO']
				}
			}
		}
	}
}
