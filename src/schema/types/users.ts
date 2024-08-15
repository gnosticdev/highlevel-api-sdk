export interface paths {
	'/users/search': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Search Users
		 * @description Search Users
		 */
		get: operations['search-users']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/users/{userId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get User
		 * @description Get User
		 */
		get: operations['get-user']
		/**
		 * Update User
		 * @description Update User
		 */
		put: operations['update-user']
		post?: never
		/**
		 * Delete User
		 * @description Delete User
		 */
		delete: operations['delete-user']
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/users': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get User by Location
		 * @description Get User by Location
		 */
		get: operations['get-user-by-location']
		put?: never
		/**
		 * Create User
		 * @description Create User
		 */
		post: operations['create-user']
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
		PermissionsDto: {
			/**
			 * @default true
			 * @example true
			 */
			campaignsEnabled: boolean
			/**
			 * @default false
			 * @example false
			 */
			campaignsReadOnly: boolean
			/**
			 * @default true
			 * @example true
			 */
			contactsEnabled: boolean
			/**
			 * @default true
			 * @example true
			 */
			workflowsEnabled: boolean
			/**
			 * @default false
			 * @example true
			 */
			workflowsReadOnly: boolean
			/**
			 * @default true
			 * @example true
			 */
			triggersEnabled: boolean
			/**
			 * @default true
			 * @example true
			 */
			funnelsEnabled: boolean
			/**
			 * @default false
			 * @example false
			 */
			websitesEnabled: boolean
			/**
			 * @default true
			 * @example true
			 */
			opportunitiesEnabled: boolean
			/**
			 * @default true
			 * @example true
			 */
			dashboardStatsEnabled: boolean
			/**
			 * @default true
			 * @example true
			 */
			bulkRequestsEnabled: boolean
			/**
			 * @default true
			 * @example true
			 */
			appointmentsEnabled: boolean
			/**
			 * @default true
			 * @example true
			 */
			reviewsEnabled: boolean
			/**
			 * @default true
			 * @example true
			 */
			onlineListingsEnabled: boolean
			/**
			 * @default true
			 * @example true
			 */
			phoneCallEnabled: boolean
			/**
			 * @default true
			 * @example true
			 */
			conversationsEnabled: boolean
			/**
			 * @default false
			 * @example false
			 */
			assignedDataOnly: boolean
			/**
			 * @default false
			 * @example false
			 */
			adwordsReportingEnabled: boolean
			/**
			 * @default false
			 * @example false
			 */
			membershipEnabled: boolean
			/**
			 * @default false
			 * @example false
			 */
			facebookAdsReportingEnabled: boolean
			/**
			 * @default false
			 * @example false
			 */
			attributionsReportingEnabled: boolean
			/**
			 * @default true
			 * @example true
			 */
			settingsEnabled: boolean
			/**
			 * @default true
			 * @example true
			 */
			tagsEnabled: boolean
			/**
			 * @default true
			 * @example true
			 */
			leadValueEnabled: boolean
			/**
			 * @default true
			 * @example true
			 */
			marketingEnabled: boolean
			/**
			 * @default true
			 * @example true
			 */
			agentReportingEnabled: boolean
			/**
			 * @default false
			 * @example false
			 */
			botService: boolean
			/**
			 * @default true
			 * @example true
			 */
			socialPlanner: boolean
			/**
			 * @default true
			 * @example true
			 */
			bloggingEnabled: boolean
			/**
			 * @default true
			 * @example true
			 */
			invoiceEnabled: boolean
			/**
			 * @default true
			 * @example true
			 */
			affiliateManagerEnabled: boolean
			/**
			 * @default true
			 * @example true
			 */
			contentAiEnabled: boolean
			/**
			 * @default true
			 * @example true
			 */
			refundsEnabled: boolean
			/**
			 * @default true
			 * @example true
			 */
			recordPaymentEnabled: boolean
			/**
			 * @default true
			 * @example true
			 */
			cancelSubscriptionEnabled: boolean
			/**
			 * @default true
			 * @example true
			 */
			paymentsEnabled: boolean
		}
		RoleSchema: {
			/** @example account */
			type?: string
			/** @example admin */
			role?: string
			/** @example [
			 *       "ve9EPM428h8vShlRW1KT"
			 *     ] */
			locationIds?: string[]
		}
		UserSchema: {
			/** @example 0IHuJvc2ofPAAA8GzTRi */
			id?: string
			/** @example John Deo */
			name?: string
			/** @example John */
			firstName?: string
			/** @example Deo */
			lastName?: string
			/** @example john@deo.com */
			email?: string
			/** @example +1 808-868-8888 */
			phone?: string
			/** @example  */
			extension?: string
			permissions?: components['schemas']['PermissionsDto']
			roles?: components['schemas']['RoleSchema']
			/** @example false */
			deleted?: boolean
		}
		SearchUserSuccessfulResponseDto: {
			users?: components['schemas']['UserSchema'][]
			/** @example 1231 */
			count?: number
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
		LocationSuccessfulResponseDto: {
			users?: components['schemas']['UserSchema'][]
		}
		UserSuccessfulResponseDto: {
			/** @example 0IHuJvc2ofPAAA8GzTRi */
			id?: string
			/** @example John Deo */
			name?: string
			/** @example John */
			firstName?: string
			/** @example Deo */
			lastName?: string
			/** @example john@deo.com */
			email?: string
			/** @example +1 808-868-8888 */
			phone?: string
			/** @example  */
			extension?: string
			permissions?: components['schemas']['PermissionsDto']
			roles?: components['schemas']['RoleSchema']
		}
		CreateUserDto: {
			/** @example ve9EPM428h8vShlRW1KT */
			companyId: string
			/** @example John */
			firstName: string
			/** @example Deo */
			lastName: string
			/** @example john@deo.com */
			email: string
			/** @example ******* */
			password: string
			/** @example +18832327657 */
			phone?: string
			/** @example account */
			type: string
			/** @example admin */
			role: string
			/** @example [
			 *       "C2QujeCh8ZnC7al2InWR"
			 *     ] */
			locationIds: string[]
			permissions: components['schemas']['PermissionsDto']
			/** @example https://img.png */
			profilePhoto?: string
		}
		UpdateUserDto: {
			/** @example John */
			firstName?: string
			/** @example Deo */
			lastName?: string
			/** @example john@deo.com */
			email?: string
			/** @example ******* */
			password?: string
			/** @example +18832327657 */
			phone?: string
			/** @example account */
			type?: string
			/** @example admin */
			role?: string
			/**
			 * @description Company/Agency Id. Required for Agency Level access
			 * @example UAXssdawIWAWD
			 */
			companyId?: string
			/** @example [
			 *       "C2QujeCh8ZnC7al2InWR"
			 *     ] */
			locationIds?: string[]
			permissions?: components['schemas']['PermissionsDto']
			/** @example https://img.png */
			profilePhoto?: string
		}
		DeleteUserSuccessfulResponseDto: {
			/** @example true */
			succeded?: boolean
			/** @example Queued deleting user with e-mail john@deo.com and name John Deo. Will take effect in a few minutes. */
			message?: string
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
	'search-users': {
		parameters: {
			query: {
				/**
				 * @description Company ID in which the search needs to be performed
				 * @example 5DP41231LkQsiKESj6rh
				 */
				companyId: string
				/**
				 * @description The search term for the user is matched based on the user full name, email or phone
				 * @example John
				 */
				query?: string
				/**
				 * @description No of results to be skipped before returning the result
				 * @example 1
				 */
				skip?: string
				/**
				 * @description No of results to be limited before returning the result
				 * @example 10
				 */
				limit?: string
				/**
				 * @description Location ID in which the search needs to be performed
				 * @example 5DP41231LkQsiKESj6rh
				 */
				locationId?: string
				/**
				 * @description Type of the users to be filtered in the search
				 * @example agency
				 */
				type?: string
				/**
				 * @description Role of the users to be filtered in the search
				 * @example admin
				 */
				role?: string
				/**
				 * @description List of User IDs to be filtered in the search
				 * @example 5DP4iH6HLkQsiKESj6rh,5DP4iH6HLkQsiKESj34h
				 */
				ids?: string
				/**
				 * @description The field on which sort is applied in which the results need to be sorted. Default is based on the first and last name
				 * @example dateAdded
				 */
				sort?: string
				/**
				 * @description The direction in which the results need to be sorted
				 * @example asc
				 */
				sortDirection?: string
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
					'application/json': components['schemas']['SearchUserSuccessfulResponseDto']
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
	'get-user': {
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
				 * @description User Id
				 * @example ve9EPM428h8vShlRW1KT
				 */
				userId: string
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
					'application/json': components['schemas']['UserSuccessfulResponseDto']
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
	'update-user': {
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
				 * @description User Id
				 * @example ve9EPM428h8vShlRW1KT
				 */
				userId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['UpdateUserDto']
			}
		}
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UserSuccessfulResponseDto']
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
	'delete-user': {
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
				 * @description User Id
				 * @example ve9EPM428h8vShlRW1KT
				 */
				userId: string
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
					'application/json': components['schemas']['DeleteUserSuccessfulResponseDto']
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
	'get-user-by-location': {
		parameters: {
			query: {
				/** @example ve9EPM428h8vShlRW1KT */
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
					'application/json': components['schemas']['LocationSuccessfulResponseDto']
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
	'create-user': {
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
				'application/json': components['schemas']['CreateUserDto']
			}
		}
		responses: {
			/** @description Successful response */
			201: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UserSuccessfulResponseDto']
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
