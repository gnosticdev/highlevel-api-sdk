export interface paths {
	'/custom-menus/': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get Custom Menu Links
		 * @description Fetches a collection of custom menus based on specified criteria. This endpoint allows clients to retrieve custom menu configurations, which may include menu items, categories, and associated metadata. The response can be tailored using query parameters for filtering, sorting, and pagination.
		 */
		get: operations['get-custom-menus']
		put?: never
		/**
		 * Create Custom Menu Link
		 * @description Creates a new custom menu for a company. Requires authentication and proper permissions. For Icon Usage Details please refer to  https://doc.clickup.com/8631005/d/h/87cpx-243696/d60fa70db6b92b2
		 */
		post: operations['create-custom-menu']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/custom-menus/{customMenuId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get Custom Menu Link
		 * @description Fetches a single custom menus based on id. This endpoint allows clients to retrieve custom menu configurations, which may include menu items, categories, and associated metadata
		 */
		get: operations['get-custom-menu-by-id']
		/**
		 * Update Custom Menu Link
		 * @description Updates an existing custom menu for a given company. Requires authentication and proper permissions.
		 */
		put: operations['update-custom-menu']
		post?: never
		/**
		 * Delete Custom Menu Link
		 * @description Removes a specific custom menu from the system. This operation requires authentication and proper permissions. The custom menu is identified by its unique ID, and the operation is performed within the context of a specific company.
		 */
		delete: operations['delete-custom-menu']
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
}
export type webhooks = Record<string, never>
export interface components {
	schemas: {
		CreateCustomMenuDTO: {
			/**
			 * @description Whether to allow camera access (only for iframe mode)
			 * @example false
			 */
			allowCamera?: boolean
			/**
			 * @description Whether to allow microphone access (only for iframe mode)
			 * @example false
			 */
			allowMicrophone?: boolean
			/** @description Icon information for the custom menu */
			icon: components['schemas']['IconSchema']
			/**
			 * @description List of sub-account IDs where the menu should be shown. This list is applicable only when showOnLocation is true and showToAllLocations is false
			 * @example [
			 *       "gfWreTIHL8pDbggBb7af",
			 *       "67WreTIHL8pDbggBb7ty"
			 *     ]
			 */
			locations: string[]
			/**
			 * @description Mode for opening the menu link
			 * @enum {string}
			 */
			openMode: 'iframe' | 'new_tab' | 'current_tab'
			/**
			 * @description Whether the menu must be displayed on the agency's level
			 * @default true
			 * @example true
			 */
			showOnCompany: boolean
			/**
			 * @description Whether the menu must be displayed for sub-accounts level
			 * @default true
			 * @example true
			 */
			showOnLocation: boolean
			/**
			 * @description Whether the menu must be displayed to all sub-accounts
			 * @default true
			 * @example true
			 */
			showToAllLocations: boolean
			/**
			 * @description Title of the custom menu
			 * @example Custom Menu
			 */
			title: string
			/**
			 * @description URL of the custom menu
			 * @example https://custom-menus.com/
			 */
			url: string
			/**
			 * @description Which user-roles should the menu be accessible to?
			 * @enum {string}
			 */
			userRole: 'all' | 'admin' | 'user'
		}
		CustomMenuSchema: {
			/**
			 * @description Indicates if camera access is allowed for this menu
			 * @example false
			 */
			allowCamera?: boolean
			/**
			 * @description Indicates if microphone access is allowed for this menu
			 * @example false
			 */
			allowMicrophone?: boolean
			/** @description Icon information for the menu item */
			icon?: components['schemas']['IconSchemaOptional']
			/**
			 * @description Unique identifier for the custom menu
			 * @example 12345
			 */
			id?: string
			/**
			 * @description List of sub-account IDs where the menu should be shown. This list is applicable only when showOnLocation is true and showToAllLocations is false
			 * @example [
			 *       "gfWreTIHL8pDbggBb7af",
			 *       "67WreTIHL8pDbggBb7ty"
			 *     ]
			 */
			locations?: string[]
			/**
			 * @description Mode for opening the menu link
			 * @enum {string}
			 */
			openMode?: 'iframe' | 'new_tab' | 'current_tab'
			/**
			 * @description Order of the custom menu
			 * @example 1
			 */
			order?: number
			/**
			 * @description Filter to show only agency-level menu links. When omitted, fetches both agency and sub-account menu links. Ignored if locationId is provided
			 * @example true
			 */
			showOnCompany?: boolean
			/**
			 * @description Whether the menu must be displayed for sub-accounts level
			 * @example true
			 */
			showOnLocation?: boolean
			/**
			 * @description Whether the menu must be displayed to all sub-accounts
			 * @example true
			 */
			showToAllLocations?: boolean
			/**
			 * @description Title of the custom menu
			 * @example Dashboard
			 */
			title?: string
			/**
			 * @description URL of the custom menu
			 * @example /dashboard
			 */
			url?: string
			/**
			 * @description Which user-roles should the menu be accessible to?
			 * @enum {string}
			 */
			userRole?: 'all' | 'admin' | 'user'
		}
		DeleteCustomMenuSuccessfulResponseDTO: {
			/**
			 * Format: date-time
			 * @description Timestamp of when the deletion was performed
			 * @example 2023-09-12T15:30:45.123Z
			 */
			deletedAt?: string
			/**
			 * @description The ID of the deleted custom menu
			 * @example 12345abcde
			 */
			deletedMenuId?: string
			/**
			 * @description A message providing additional information about the deletion operation
			 * @example Custom menu successfully deleted
			 */
			message?: string
			/**
			 * @description Indicates whether the custom menu was successfully deleted
			 * @example true
			 */
			success?: boolean
		}
		GetCustomMenusResponseDTO: {
			/** @description Array of custom menu links */
			customMenus?: components['schemas']['CustomMenuSchema'][]
			/**
			 * @description Total number of custom menu records
			 * @example 100
			 */
			totalLinks?: number
		}
		GetSingleCustomMenusSuccessfulResponseDTO: {
			/** @description Single Custom menu link object */
			customMenu?: components['schemas']['CustomMenuSchema']
		}
		IconSchema: {
			/**
			 * @description Font family of the icon
			 * @enum {string}
			 */
			fontFamily: 'fab' | 'fas' | 'far'
			/**
			 * @description Name of the icon
			 * @example yin-yang
			 */
			name: string
		}
		IconSchemaOptional: {
			/**
			 * @description Font family of the icon
			 * @enum {string}
			 */
			fontFamily?: 'fab' | 'fas' | 'far'
			/**
			 * @description Name of the icon
			 * @example yin-yang
			 */
			name?: string
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
		UpdateCustomMenuDTO: {
			/**
			 * @description Whether to allow camera access (only for iframe mode)
			 * @example false
			 */
			allowCamera?: boolean
			/**
			 * @description Whether to allow microphone access (only for iframe mode)
			 * @example false
			 */
			allowMicrophone?: boolean
			/** @description Icon information for the custom menu */
			icon?: components['schemas']['IconSchemaOptional']
			/**
			 * @description List of sub-account IDs where the menu should be shown. This list is applicable only when showOnLocation is true and showToAllLocations is false
			 * @example [
			 *       "gfWreTIHL8pDbggBb7af",
			 *       "67WreTIHL8pDbggBb7ty"
			 *     ]
			 */
			locations?: string[]
			/**
			 * @description Mode for opening the menu link
			 * @enum {string}
			 */
			openMode?: 'iframe' | 'new_tab' | 'current_tab'
			/**
			 * @description Whether the menu must be displayed on the agency's level
			 * @default true
			 * @example true
			 */
			showOnCompany: boolean
			/**
			 * @description Whether the menu must be displayed for sub-accounts level
			 * @default true
			 * @example true
			 */
			showOnLocation: boolean
			/**
			 * @description Whether the menu must be displayed to all sub-accounts
			 * @default true
			 * @example true
			 */
			showToAllLocations: boolean
			/**
			 * @description Title of the custom menu
			 * @example Custom Menu
			 */
			title?: string
			/**
			 * @description URL of the custom menu
			 * @example https://custom-menus.com/
			 */
			url?: string
			/**
			 * @description Which user-roles should the menu be accessible to?
			 * @enum {string}
			 */
			userRole?: 'all' | 'admin' | 'user'
		}
		UpdateCustomMenuLinkResponseDTO: {
			/** @description Updated custom menu link */
			customMenu?: components['schemas']['CustomMenuSchema']
			/** @description Status of update */
			success?: boolean
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
	'get-custom-menus': {
		parameters: {
			query?: {
				/** @description Maximum number of items to return */
				limit?: number
				/** @description Unique identifier of the location */
				locationId?: string
				/** @description Search query to filter custom menus by name, supports partial || full names */
				query?: string
				/** @description Filter to show only agency-level menu links. When omitted, fetches both agency and sub-account menu links. Ignored if locationId is provided */
				showOnCompany?: boolean
				/** @description Number of items to skip for pagination */
				skip?: number
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
			/** @description Successfully retrieved custom menus. Returns an array of custom menu objects, potentially including their structure, items, and relevant metadata. */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['GetCustomMenusResponseDTO']
				}
			}
			/** @description Bad Request. Invalid query parameters provided. */
			400: {
				headers: {
					[name: string]: unknown
				}
				content?: never
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
			/** @description Forbidden. The client does not have necessary permissions to access custom menus. */
			403: {
				headers: {
					[name: string]: unknown
				}
				content?: never
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
	'create-custom-menu': {
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
				'application/json': components['schemas']['CreateCustomMenuDTO']
			}
		}
		responses: {
			/** @description Custom menu successfully created */
			201: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['GetSingleCustomMenusSuccessfulResponseDTO']
				}
			}
			/** @description Bad Request - Invalid input */
			400: {
				headers: {
					[name: string]: unknown
				}
				content?: never
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
			/** @description Forbidden - Insufficient permissions */
			403: {
				headers: {
					[name: string]: unknown
				}
				content?: never
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
	'get-custom-menu-by-id': {
		parameters: {
			query?: never
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description Unique identifier of the custom menu */
				customMenuId: string
			}
			cookie?: never
		}
		requestBody?: never
		responses: {
			/** @description Successfully retrieved custom menu. Returns a single custom menu object, potentially including its structure, items, and relevant metadata. */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['GetSingleCustomMenusSuccessfulResponseDTO']
				}
			}
			/** @description Bad Request. Invalid query parameters provided. */
			400: {
				headers: {
					[name: string]: unknown
				}
				content?: never
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
			/** @description Forbidden. The client does not have necessary permissions to access custom menu. */
			403: {
				headers: {
					[name: string]: unknown
				}
				content?: never
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
	'update-custom-menu': {
		parameters: {
			query?: never
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description ID of the custom menu to update */
				customMenuId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['UpdateCustomMenuDTO']
			}
		}
		responses: {
			/** @description Custom menu successfully updated */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UpdateCustomMenuLinkResponseDTO']
				}
			}
			/** @description Bad Request - Invalid input */
			400: {
				headers: {
					[name: string]: unknown
				}
				content?: never
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
			/** @description Forbidden - Insufficient permissions */
			403: {
				headers: {
					[name: string]: unknown
				}
				content?: never
			}
			/** @description Not Found - Custom menu or company not found */
			404: {
				headers: {
					[name: string]: unknown
				}
				content?: never
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
	'delete-custom-menu': {
		parameters: {
			query?: never
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description ID of the custom menu to delete */
				customMenuId: string
			}
			cookie?: never
		}
		requestBody?: never
		responses: {
			/** @description Custom menu successfully deleted */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['DeleteCustomMenuSuccessfulResponseDTO']
				}
			}
			/** @description Bad Request. Invalid parameters provided. */
			400: {
				headers: {
					[name: string]: unknown
				}
				content?: never
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
			/** @description Forbidden. The client does not have necessary permissions to delete this custom menu. */
			403: {
				headers: {
					[name: string]: unknown
				}
				content?: never
			}
			/** @description Not Found. The specified custom menu does not exist or has already been deleted. */
			404: {
				headers: {
					[name: string]: unknown
				}
				content?: never
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
