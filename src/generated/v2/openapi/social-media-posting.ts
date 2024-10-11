export type paths = {
	'/social-media-posting/oauth/google/start': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Starts OAuth For Google Account
		 * @description Open the API in a window with appropriate params and headers instead of using the Curl. User is navigated to Google login OAuth screen. On successful login, listen on window object for message where event listener returns data in its callback function.
		 *       ### Sample code to listen to event data:
		 *         window.addEventListener('message',
		 *           function(e) {
		 *             if (e.data && e.data.page === 'social_media_posting') {
		 *             const { actionType, page, platform, placement, accountId, reconnectAccounts } = e.data
		 *             }
		 *           },
		 *         false)
		 *       ### Event Data Response:
		 *         {
		 *           actionType: string,            Ex: "close"
		 *           page: string,                  Ex: "social-media-posting"
		 *           platform: string,              Ex: "google"
		 *           placement: string,             Ex: "placement"
		 *           accountId: string,             Ex: "658a9b6833b91e0ecb8f3958"
		 *           reconnectAccounts: string[]]   Ex: ["658a9b6833b91e0ecb834acd", "efd2daa9b6833b91e0ecb8f3511"]
		 *         }
		 *       ### The accountId retrieved from above data can be used to fetch Google account details using below API -
		 *       API: '/social-media-posting/oauth/google/accounts/:accountId'
		 *
		 *       Method: GET
		 */
		get: operations['start-google-oauth']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/social-media-posting/oauth/{locationId}/google/locations/{accountId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get google business locations
		 * @description Get google business locations
		 */
		get: operations['get-google-locations']
		put?: never
		/**
		 * Set google business locations
		 * @description Set google business locations
		 */
		post: operations['set-google-locations']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/social-media-posting/{locationId}/posts/list': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Get posts
		 * @description Get Posts
		 */
		post: operations['get-posts']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/social-media-posting/{locationId}/posts': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Create post
		 * @description Create posts for all supported platforms. It is possible to create customized posts per channel by using the same platform account IDs in a request and hitting the create post API multiple times with different summaries and account IDs per platform.
		 *
		 *     The content and media limitations, as well as platform rate limiters corresponding to the respective platforms, are provided in the following reference link:
		 *
		 *       Link: [Platform Limitations](https://help.leadconnectorhq.com/support/solutions/articles/48001240003-social-planner-image-video-content-and-api-limitations "Social Planner Help")
		 */
		post: operations['create-post']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/social-media-posting/{locationId}/posts/{id}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get post
		 * @description Get post
		 */
		get: operations['get-post']
		/**
		 * Edit post
		 * @description Create posts for all supported platforms. It is possible to create customized posts per channel by using the same platform account IDs in a request and hitting the create post API multiple times with different summaries and account IDs per platform.
		 *
		 *     The content and media limitations, as well as platform rate limiters corresponding to the respective platforms, are provided in the following reference link:
		 *
		 *       Link: [Platform Limitations](https://help.leadconnectorhq.com/support/solutions/articles/48001240003-social-planner-image-video-content-and-api-limitations "Social Planner Help")
		 */
		put: operations['edit-post']
		post?: never
		/**
		 * Delete Post
		 * @description Delete Post
		 */
		delete: operations['delete-post']
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/social-media-posting/{locationId}/accounts': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get Accounts
		 * @description Get list of accounts and groups
		 */
		get: operations['get-account']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/social-media-posting/{locationId}/accounts/{id}': {
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
		 * Delete Account
		 * @description Delete account and account from group
		 */
		delete: operations['delete-account']
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/social-media-posting/oauth/facebook/start': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Starts OAuth For Facebook Account
		 * @description Open the API in a window with appropriate params and headers instead of using the Curl. User is navigated to Facebook login OAuth screen. On successful login, listen on window object for message where event listener returns data in its callback function.
		 *       ### Sample code to listen to event data:
		 *         window.addEventListener('message',
		 *           function(e) {
		 *             if (e.data && e.data.page === 'social_media_posting') {
		 *             const { actionType, page, platform, placement, accountId, reconnectAccounts } = e.data
		 *             }
		 *           },
		 *         false)
		 *       ### Event Data Response:
		 *         {
		 *           actionType: string,            Ex: "close"
		 *           page: string,                  Ex: "social-media-posting"
		 *           platform: string,              Ex: "facebook"
		 *           placement: string,             Ex: "placement"
		 *           accountId: string,             Ex: "658a9b6833b91e0ecb8f3958"
		 *           reconnectAccounts: string[]]   Ex: ["658a9b6833b91e0ecb834acd", "efd2daa9b6833b91e0ecb8f3511"]
		 *         }
		 *       ### The accountId retrieved from above data can be used to fetch Facebook account details using below API -
		 *       API: '/social-media-posting/oauth/facebook/accounts/:accountId'
		 *
		 *       Method: GET
		 */
		get: operations['start-facebook-oauth']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/social-media-posting/oauth/{locationId}/facebook/accounts/{accountId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get facebook pages
		 * @description Get facebook pages
		 */
		get: operations['get-facebook-page-group']
		put?: never
		/**
		 * Attach facebook pages
		 * @description Attach facebook pages
		 */
		post: operations['attach-facebook-page-group']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/social-media-posting/oauth/instagram/start': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Starts OAuth For Instagram Account
		 * @description Open the API in a window with appropriate params and headers instead of using the Curl. User is navigated to Instagram login OAuth screen. On successful login, listen on window object for message where event listener returns data in its callback function.
		 *       ### Sample code to listen to event data:
		 *         window.addEventListener('message',
		 *           function(e) {
		 *             if (e.data && e.data.page === 'social_media_posting') {
		 *             const { actionType, page, platform, placement, accountId, reconnectAccounts } = e.data
		 *             }
		 *           },
		 *         false)
		 *       ### Event Data Response:
		 *         {
		 *           actionType: string,            Ex: "close"
		 *           page: string,                  Ex: "social-media-posting"
		 *           platform: string,              Ex: "instagram"
		 *           placement: string,             Ex: "placement"
		 *           accountId: string,             Ex: "658a9b6833b91e0ecb8f3958"
		 *           reconnectAccounts: string[]]   Ex: ["658a9b6833b91e0ecb834acd", "efd2daa9b6833b91e0ecb8f3511"]
		 *         }
		 *       ### The accountId retrieved from above data can be used to fetch Instagram account details using below API -
		 *       API: '/social-media-posting/oauth/instagram/accounts/:accountId'
		 *
		 *       Method: GET
		 */
		get: operations['start-instagram-oauth']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/social-media-posting/oauth/{locationId}/instagram/accounts/{accountId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get Instagram Professional Accounts
		 * @description Get Instagram Professional Accounts
		 */
		get: operations['get-instagram-page-group']
		put?: never
		/**
		 * Attach Instagram Professional Accounts
		 * @description Attach Instagram Professional Accounts
		 */
		post: operations['attach-instagram-page-group']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/social-media-posting/oauth/linkedin/start': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Starts OAuth For LinkedIn Account
		 * @description Open the API in a window with appropriate params and headers instead of using the Curl. User is navigated to LinkedIn login OAuth screen. On successful login, listen on window object for message where event listener returns data in its callback function.
		 *       ### Sample code to listen to event data:
		 *         window.addEventListener('message',
		 *           function(e) {
		 *             if (e.data && e.data.page === 'social_media_posting') {
		 *             const { actionType, page, platform, placement, accountId, reconnectAccounts } = e.data
		 *             }
		 *           },
		 *         false)
		 *       ### Event Data Response:
		 *         {
		 *           actionType: string,            Ex: "close"
		 *           page: string,                  Ex: "social-media-posting"
		 *           platform: string,              Ex: "linkedin"
		 *           placement: string,             Ex: "placement"
		 *           accountId: string,             Ex: "658a9b6833b91e0ecb8f3958"
		 *           reconnectAccounts: string[]]   Ex: ["658a9b6833b91e0ecb834acd", "efd2daa9b6833b91e0ecb8f3511"]
		 *         }
		 *       ### The accountId retrieved from above data can be used to fetch LinkedIn account details using below API -
		 *       API: '/social-media-posting/oauth/linkedin/accounts/:accountId'
		 *
		 *       Method: GET
		 */
		get: operations['start-linkedin-oauth']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/social-media-posting/oauth/{locationId}/linkedin/accounts/{accountId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get Linkedin pages and profile
		 * @description Get Linkedin pages and profile
		 */
		get: operations['get-linkedin-page-profile']
		put?: never
		/**
		 * Attach linkedin pages and profile
		 * @description Attach linkedin pages and profile
		 */
		post: operations['attach-linkedin-page-profile']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/social-media-posting/oauth/twitter/start': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Starts OAuth For Twitter Account
		 * @description Open the API in a window with appropriate params and headers instead of using the Curl. User is navigated to Twitter login OAuth screen. On successful login, listen on window object for message where event listener returns data in its callback function.
		 *       ### Sample code to listen to event data:
		 *         window.addEventListener('message',
		 *           function(e) {
		 *             if (e.data && e.data.page === 'social_media_posting') {
		 *             const { actionType, page, platform, placement, accountId, reconnectAccounts } = e.data
		 *             }
		 *           },
		 *         false)
		 *       ### Event Data Response:
		 *         {
		 *           actionType: string,            Ex: "close"
		 *           page: string,                  Ex: "social-media-posting"
		 *           platform: string,              Ex: "twitter"
		 *           placement: string,             Ex: "placement"
		 *           accountId: string,             Ex: "658a9b6833b91e0ecb8f3958"
		 *           reconnectAccounts: string[]]   Ex: ["658a9b6833b91e0ecb834acd", "efd2daa9b6833b91e0ecb8f3511"]
		 *         }
		 *       ### The accountId retrieved from above data can be used to fetch Twitter account details using below API -
		 *       API: '/social-media-posting/oauth/twitter/accounts/:accountId'
		 *
		 *       Method: GET
		 */
		get: operations['start-twitter-oauth']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/social-media-posting/oauth/{locationId}/twitter/accounts/{accountId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get Twitter profile
		 * @description Get Twitter profile
		 */
		get: operations['get-twitter-profile']
		put?: never
		/**
		 * Attach Twitter profile
		 * @description Attach Twitter profile
		 */
		post: operations['attach-twitter-profile']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/social-media-posting/{locationId}/csv': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/** Get Upload Status */
		get: operations['get-upload-status']
		put?: never
		/** Upload CSV */
		post: operations['upload-csv']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/social-media-posting/{locationId}/set-accounts': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/** Set Accounts */
		post: operations['set-accounts']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/social-media-posting/{locationId}/csv/{id}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/** Get CSV Post */
		get: operations['get-csv-post']
		put?: never
		post?: never
		/** Delete CSV */
		delete: operations['delete-csv']
		options?: never
		head?: never
		/** Start CSV Finalize */
		patch: operations['start-csv-finalize']
		trace?: never
	}
	'/social-media-posting/{locationId}/csv/{csvId}/post/{postId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		post?: never
		/** Delete CSV Post */
		delete: operations['delete-csv-post']
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/social-media-posting/oauth/tiktok/start': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Starts OAuth For Tiktok Account
		 * @description Open the API in a window with appropriate params and headers instead of using the Curl. User is navigated to Tiktok login OAuth screen. On successful login, listen on window object for message where event listener returns data in its callback function.
		 *       ### Sample code to listen to event data:
		 *         window.addEventListener('message',
		 *           function(e) {
		 *             if (e.data && e.data.page === 'social_media_posting') {
		 *             const { actionType, page, platform, placement, accountId, reconnectAccounts } = e.data
		 *             }
		 *           },
		 *         false)
		 *       ### Event Data Response:
		 *         {
		 *           actionType: string,            Ex: "close"
		 *           page: string,                  Ex: "social-media-posting"
		 *           platform: string,              Ex: "tiktok"
		 *           placement: string,             Ex: "placement"
		 *           accountId: string,             Ex: "658a9b6833b91e0ecb8f3958"
		 *           reconnectAccounts: string[]]   Ex: ["658a9b6833b91e0ecb834acd", "efd2daa9b6833b91e0ecb8f3511"]
		 *         }
		 *       ### The accountId retrieved from above data can be used to fetch Tiktok account details using below API -
		 *       API: '/social-media-posting/oauth/tiktok/accounts/:accountId'
		 *
		 *       Method: GET
		 */
		get: operations['start-tiktok-oauth']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/social-media-posting/oauth/{locationId}/tiktok/accounts/{accountId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get Tiktok profile
		 * @description Get Tiktok profile
		 */
		get: operations['get-tiktok-profile']
		put?: never
		/**
		 * Attach Tiktok profile
		 * @description Attach Tiktok profile
		 */
		post: operations['attach-tiktok-profile']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/social-media-posting/oauth/tiktok-business/start': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Starts OAuth For Tiktok Business Account
		 * @description Open the API in a window with appropriate params and headers instead of using the Curl. User is navigated to Tiktok-Business login OAuth screen. On successful login, listen on window object for message where event listener returns data in its callback function.
		 *       ### Sample code to listen to event data:
		 *         window.addEventListener('message',
		 *           function(e) {
		 *             if (e.data && e.data.page === 'social_media_posting') {
		 *             const { actionType, page, platform, placement, accountId, reconnectAccounts } = e.data
		 *             }
		 *           },
		 *         false)
		 *       ### Event Data Response:
		 *         {
		 *           actionType: string,            Ex: "close"
		 *           page: string,                  Ex: "social-media-posting"
		 *           platform: string,              Ex: "tiktok-business"
		 *           placement: string,             Ex: "placement"
		 *           accountId: string,             Ex: "658a9b6833b91e0ecb8f3958"
		 *           reconnectAccounts: string[]]   Ex: ["658a9b6833b91e0ecb834acd", "efd2daa9b6833b91e0ecb8f3511"]
		 *         }
		 *       ### The accountId retrieved from above data can be used to fetch Tiktok-Business account details using below API -
		 *       API: '/social-media-posting/oauth/tiktok-business/accounts/:accountId'
		 *
		 *       Method: GET
		 */
		get: operations['start-tiktok-business-oauth']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/social-media-posting/oauth/{locationId}/tiktok-business/accounts/{accountId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get Tiktok Business profile
		 * @description Get Tiktok Business profile
		 */
		get: operations['get-tiktok-business-profile']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/social-media-posting/{locationId}/categories': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/** Get categories by location id */
		get: operations['get-categories-location-id']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/social-media-posting/{locationId}/categories/{id}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/** Get categories by id */
		get: operations['get-categories-id']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/social-media-posting/{locationId}/tags': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/** Get tags by location id */
		get: operations['get-tags-location-id']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/social-media-posting/{locationId}/tags/details': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/** Get tags by ids */
		post: operations['get-tags-by-ids']
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
		GoogleLocationSchema: {
			/** @example accounts/114659701071209971352 */
			name?: string
			/** @example w37swmmLbA02zgqKPpxITe */
			storeCode?: string
			/** @example Location Title */
			title?: string
			/**
			 * @description Meta data not related to User
			 * @example {}
			 */
			metadata?: Record<string, never>
			/**
			 * @description Store front address
			 * @example {}
			 */
			storefrontAddress?: Record<string, never>
			/**
			 * @description All locations and chain related to this one
			 * @example {}
			 */
			relationshipData?: Record<string, never>
			/** @example true */
			maxLocation?: boolean
			/** @example true */
			isVerified?: boolean
			/** @example true */
			isConnected?: boolean
		}
		GoogleAccountsSchema: {
			/** @example accounts/114659701071209971352 */
			name?: string
			/** @example Account Name Test */
			accountName?: string
			/** @example PERSONAL */
			type?: string
			/** @example UNVERIFIED */
			verificationState?: string
			/** @example NOT_VETTED */
			vettedState?: string
		}
		GetGoogleLocationSchema: {
			/** @description Google Location Details */
			location?: components['schemas']['GoogleLocationSchema']
			/** @description Google Account Details */
			account?: components['schemas']['GoogleAccountsSchema']
		}
		GetGoogleLocationAccountSchema: {
			/** @description Locations */
			locations?: components['schemas']['GetGoogleLocationSchema']
		}
		GetGoogleLocationResponseDTO: {
			/**
			 * @description Success or Failure
			 * @example true
			 */
			success: boolean
			/**
			 * @description Status Code
			 * @example 200
			 */
			statusCode: number
			/**
			 * @description Message
			 * @example Fetched Google Business Account
			 */
			message: string
			/** @description Requested Results */
			results?: components['schemas']['GetGoogleLocationAccountSchema']
		}
		AttachGMBLocationDTO: {
			location?: Record<string, never>
			account?: Record<string, never>
			/**
			 * @description Company ID
			 * @example sdfdsfdsfEWEsdfsdsW32dd
			 */
			companyId?: string
		}
		SocialGoogleMediaAccountSchema: {
			/** @example 65f2d989a4f2f1e5322c3856 */
			_id?: string
			/** @example u37swmmLbA02zgqKPpxITe2 */
			oAuthId?: string
			/** @example u37swmmLbA02zgqKPpxITe2 */
			oldId?: string
			/** @example u37swmmLbA02zgqKPpxITe2 */
			locationId?: string
			/** @example u37swmmLbA02zgqKPpxITe2 */
			originId?: string
			/** @example google */
			platform?: Record<string, never>
			/** @example location */
			type?: Record<string, never>
			/** @example Account Name */
			name?: string
			/** @example u37swmmLbA02zgqKPpxITe2 */
			avatar?: string
			/** @example {
			 *       "pageId": "u37swmmLbA02zgqKPpxITe2",
			 *       "page": {
			 *         "id": "u37swmmLbA02zgqKPpxITe2",
			 *         "name": "Account Name",
			 *         "avatar": "u37swmmLbA02zgqKPpxITe2"
			 *       },
			 *       "storeCode": "122",
			 *       "isVerified": "true",
			 *       "verified": true,
			 *       "protected": true,
			 *       "locationId": "u37swmmLbA02zgqKPpxITe2",
			 *       "accountId": "u37swmmLbA02zgqKPpxITe2",
			 *       "openId": "u37swmmLbA02zgqKPpxITe2",
			 *       "urn": "u37swmmLbA02zgqKPpxITe2",
			 *       "username": "testUser",
			 *       "storefrontAddress": {
			 *         "regionCode": "30021",
			 *         "languageCode": "E001",
			 *         "postalCode": "1221",
			 *         "administrativeArea": "Down Town",
			 *         "locality": "Louis Street",
			 *         "addressLines": [
			 *           "207",
			 *           "county"
			 *         ]
			 *       }
			 *     } */
			meta?: Record<string, never>
			/** @example true */
			active?: boolean
			/** @example true */
			deleted?: boolean
			/**
			 * Format: date-time
			 * @description created date
			 * @example 2024-03-14T11:03:37.015Z
			 */
			createdAt?: string
			/**
			 * Format: date-time
			 * @description updated date
			 * @example 2024-03-14T11:03:37.015Z
			 */
			updatedAt?: string
		}
		SocialMediaGmbAccountResponseDTO: {
			/**
			 * @description Success or Failure
			 * @example true
			 */
			success: boolean
			/**
			 * @description Status Code
			 * @example 201
			 */
			statusCode: number
			/**
			 * @description Message
			 * @example Added Google Business Account
			 */
			message: string
			/** @description Requested Results */
			results?: components['schemas']['SocialGoogleMediaAccountSchema']
		}
		SearchPostDTO: {
			/**
			 * @description type must be one of the following values: recent, all, scheduled, draft, failed, in_review, published, in_progress and deleted
			 * @default all
			 * @example Filter type
			 */
			type: string
			/**
			 * @description List of account Ids seperated by comma as a string
			 * @example 660a83fc29deacac50033e2b_omaDY3RbWtTP511e808O_17841465964543589, 38bF83fc29deacac50033e2b_omaDY3RbWtr3P11e808O_17841465964543998
			 */
			accounts?: string
			/**
			 * @default 0
			 * @example 1
			 */
			skip: string
			/**
			 * @default 10
			 * @example 10
			 */
			limit: string
			/**
			 * @description From Date
			 * @example 2024-01-22T05:32:49.463Z
			 */
			fromDate: string
			/**
			 * @description To Date
			 * @example 2024-03-20T05:32:49.463Z
			 */
			toDate: string
			/**
			 * @description Include User Data
			 * @example true
			 */
			includeUsers: string
			/**
			 * @description Post Type must be one of the following values: - post, story, reel
			 * @example post
			 */
			postType?: Record<string, never>
		}
		PostMediaSchema: {
			/** @example https://i0.wp.com/www.lifeofanarchitect.com/wp-content/uploads/2021/10/architectural-model-making-stairs.jpg */
			url: string
			/** @example Caption 1 */
			caption?: string
			/** @example video/mp4 or image/png */
			type?: string
			/** @example https://storage.googleapis.com/test/test/media/test.jpeg */
			thumbnail?: string
			/** @example https://storage.googleapis.com/test/test/media/test.jpeg */
			defaultThumb?: string
			/** @example Edf3323fsfsdsd */
			id?: string
		}
		OgTagsSchema: {
			/**
			 * @description Meta Image
			 * @example https://wwww.lifeofanarchitect.com/wp-content/uploads/2021/10/architectural-model-making-stairs.jpg
			 */
			metaImage?: string
			/** @description Meta Link */
			metaLink?: string
		}
		PostUserSchema: {
			/**
			 * @description User Id
			 * @example 6284c43d519161e96cc09c13
			 */
			id: string
			/**
			 * @description Title
			 * @example Mr
			 */
			title: string
			/**
			 * @description First name
			 * @example Harry
			 */
			firstName: string
			/**
			 * @description Last name
			 * @example Spencer
			 */
			lastName: string
			/**
			 * @description Profile photo
			 * @example https://storage.googleapis.com/user/kCrjKGHZQ2/profile/1dca8c-61c9-404d-a459-751fbcb.jpeg
			 */
			profilePhoto: string
			/**
			 * @description Phone number
			 * @example 901111119
			 */
			phone: string
			/**
			 * @description Email Id
			 * @example abc@xyc.com
			 */
			email: string
		}
		FormatedApprovalDetails: {
			/**
			 * @description Approver
			 * @example iVrVJ2uoXNF0wzcBzgl5
			 */
			approver?: string
			/**
			 * @description Requester Notes
			 * @example Test suggestion
			 */
			requesterNote?: string
			/**
			 * @description Approver Notes
			 * @example Test suggestion
			 */
			approverNote?: string
			/**
			 * @description Approval Status must be one of the following values: pending, approved, rejected, not_required
			 * @example approved
			 */
			approvalStatus?: Record<string, never>
			/** @description Approver User Details */
			approverUser?: components['schemas']['PostUserSchema']
		}
		TiktokPostSchema: {
			/**
			 * @description privacy level is an enum and must be one of the following values: PUBLIC_TO_EVERYONE, MUTUAL_FOLLOW_FRIENDS, SELF_ONLY
			 * @example PUBLIC_TO_EVERYONE
			 */
			privacyLevel?: Record<string, never>
			/**
			 * @description promote other brand
			 * @example true
			 */
			promoteOtherBrand?: boolean
			/**
			 * @description enable comment
			 * @example true
			 */
			enableComment?: boolean
			/**
			 * @description enable duet
			 * @example true
			 */
			enableDuet?: boolean
			/**
			 * @description enable stitch
			 * @example true
			 */
			enableStitch?: boolean
			/**
			 * @description video disclosure
			 * @example true
			 */
			videoDisclosure?: boolean
			/**
			 * @description promote your brand
			 * @example true
			 */
			promoteYourBrand?: boolean
		}
		DateSchema: {
			/** @example 2022 */
			year: number
			/** @example 1 */
			month: number
			/** @example 1 */
			day: number
		}
		TimeSchema: {
			/** @example 23 */
			hours: number
			/** @example 56 */
			minutes: number
			/** @example 34 */
			seconds: number
		}
		StartDateSchema: {
			/** @description Start Date */
			startDate?: components['schemas']['DateSchema']
			/** @description Start Time */
			startTime?: components['schemas']['TimeSchema']
		}
		EndDateSchema: {
			/** @description End Date */
			endDate?: components['schemas']['DateSchema']
			/** @description End Time */
			endTime?: components['schemas']['TimeSchema']
		}
		GMBPostSchema: {
			/**
			 * @description gmbEventType must be one of the following values: STANDARD, EVENT, OFFER
			 * @example STANDARD
			 */
			gmbEventType?: string
			/**
			 * @description Title
			 * @example Event Title
			 */
			title?: string
			/**
			 * @description Offer Title
			 * @example Hey
			 */
			offerTitle?: string
			/** @description Start Date */
			startDate?: components['schemas']['StartDateSchema']
			/** @description End Date */
			endDate?: components['schemas']['EndDateSchema']
			/**
			 * @description Terms Condition Url
			 * @example https://google.com/privacy
			 */
			termsConditions?: string
			/**
			 * @description Url
			 * @example https://google.com
			 */
			url?: string
			/**
			 * @description Coupon Code
			 * @example BOGO-50
			 */
			couponCode?: string
			/**
			 * @description Redeem Online Url
			 * @example https://google.com
			 */
			redeemOnlineUrl?: string
			/**
			 * @description Action Type must be one of the following values: none, order, book, shop, learn_more, call, sign_up
			 * @example book
			 */
			actionType?: Record<string, never>
		}
		GetPostFormattedSchema: {
			/** @example 61bb16833b3f2791f9715be2 */
			_id?: string
			/**
			 * @description source must be one of the following values: composer, recurring, csv
			 * @example composer
			 * @enum {string}
			 */
			source?: 'composer' | 'csv' | 'recurring' | 'review' | 'rss'
			/**
			 * @description Location Id
			 * @example ve9EPM428h8vShlRW1KT
			 */
			locationId: string
			/**
			 * @description platform must be one of the following values: google, facebook, instagram, linkedin, twitter, tiktok
			 * @example google
			 */
			platform?: string
			/**
			 * Format: date-time
			 * @example 2023-08-02T00:00:00.000Z
			 */
			displayDate?: string
			/**
			 * Format: date-time
			 * @example 2023-08-02T00:00:00.000Z
			 */
			createdAt?: string
			/**
			 * Format: date-time
			 * @example 2023-08-02T00:00:00.000Z
			 */
			updatedAt?: string
			/**
			 * @description Account Id
			 * @example w37swmmLbA02zgqKPpxITe
			 */
			accountId?: string
			/**
			 * @description Error
			 * @example Failed due to auth token
			 */
			error: string
			/** @example 323534534435 */
			postId?: string
			/** @example 2021-06-22T05:32:49.463Z */
			publishedAt?: string
			/**
			 * @description Account Ids
			 * @example [
			 *       "aF3KhyL8JIuBwzK3m7Ly_iVrVJ2uoXNF0wzcBzgl5_12554616564525983496"
			 *     ]
			 */
			accountIds?: string[]
			/** @example Sample Summary */
			summary?: string
			/** @description Post Media Data
			 *      The limitations of media as per the platforms is provided through the reference link in API description */
			media?: components['schemas']['PostMediaSchema'][]
			/**
			 * @description Status must be one of the following values: in_progress, draft, failed, published, scheduled, in_review, notification_sent, deleted
			 * @example published
			 */
			status?: Record<string, never>
			/** @example Lx1EI6YIgQYMQi0ytFXv */
			createdBy?: string
			/**
			 * @description Post Type must be one of the following values: - post, story, reel
			 * @example post
			 */
			type: Record<string, never>
			/**
			 * @description Tag Ids
			 * @example [
			 *       "aF3KhyL8JIuBwzK3m7Ly_iVrVJ2uoXNF0wzcBzgl5_12554616564525983496"
			 *     ]
			 */
			tags?: string[]
			/** @description Og Tags Meta Data */
			ogTagsDetails?: components['schemas']['OgTagsSchema']
			/** @description Post Approval Details */
			postApprovalDetails?: components['schemas']['FormatedApprovalDetails']
			/** @description Tiktok Post Details */
			tiktokPostDetails?: components['schemas']['TiktokPostSchema']
			/** @description GMB Post Details */
			gmbPostDetails?: components['schemas']['GMBPostSchema']
			/** @description User */
			user?: components['schemas']['PostUserSchema']
		}
		PostSuccessfulResponseSchema: {
			/** @description Post Data */
			posts?: components['schemas']['GetPostFormattedSchema'][]
			/** @example 6 */
			count?: number
		}
		PostSuccessfulResponseDTO: {
			/**
			 * @description Success or Failure
			 * @example true
			 */
			success: boolean
			/**
			 * @description Status Code
			 * @example 201
			 */
			statusCode: number
			/**
			 * @description Message
			 * @example Fetched Posts
			 */
			message: string
			/** @description Requested Results */
			results?: components['schemas']['PostSuccessfulResponseSchema']
		}
		PostApprovalSchema: {
			/**
			 * @description Approver
			 * @example iVrVJ2uoXNF0wzcBzgl5
			 */
			approver?: string
			/**
			 * @description Requester Notes
			 * @example Test suggestion
			 */
			requesterNote?: string
			/**
			 * @description Approver Notes
			 * @example Test suggestion
			 */
			approverNote?: string
			/**
			 * @description Approval Status must be one of the following values: pending, approved, rejected, not_required
			 * @example approved
			 */
			approvalStatus?: Record<string, never>
		}
		CreatePostDTO: {
			/**
			 * @description Account Ids
			 * @example [
			 *       "aF3KhyL8JIuBwzK3m7Ly_iVrVJ2uoXNF0wzcBzgl5_12554616564525983496"
			 *     ]
			 */
			accountIds?: string[]
			/**
			 * @description Post Content
			 *      The limitations of content as per the platforms is provided through the reference link in API description. The summary will be trimmed based on the limit
			 * @example Hello World
			 */
			summary?: string
			/** @description Post Media Data
			 *      The limitations of media as per the platforms is provided through the reference link in API description */
			media?: components['schemas']['PostMediaSchema'][]
			/**
			 * @description Status must be one of the following values: null, in_progress, draft, failed, published, scheduled, in_review, notification_sent, deleted
			 * @example draft
			 */
			status?: Record<string, never>
			/** @description Schedule Date */
			scheduleDate?: string
			/** @description Created By */
			createdBy?: string
			/**
			 * @description Follow Up Comment on platform. It is not allowed on Tiktok and GMB accounts and there is a limit of 280 charecters for twitter account
			 * @example First comment
			 */
			followUpComment?: string
			/** @description Og Tags Meta Data */
			ogTagsDetails?: components['schemas']['OgTagsSchema']
			/**
			 * @description Post Type must be one of the following values: - post, story, reel
			 * @example post
			 */
			type: Record<string, never>
			/** @description Post Approval Details */
			postApprovalDetails?: components['schemas']['PostApprovalSchema']
			/**
			 * @description if schedule datetime is updated
			 * @example true
			 */
			scheduleTimeUpdated?: boolean
			/**
			 * @description Array of Tag Value
			 * @example [
			 *       "65f151c99bc2bf3aaf970d72"
			 *     ]
			 */
			tags?: string[]
			/**
			 * @description Category Id
			 * @example 65f151c99bc2bf3aaf970d72
			 */
			categoryId?: string
			/** @description Tiktok Post Details */
			tiktokPostDetails?: components['schemas']['TiktokPostSchema']
			/** @description GMB Post Details */
			gmbPostDetails?: components['schemas']['GMBPostSchema']
			/**
			 * @description User ID
			 * @example sdfdsfdsfEWEsdfsdsW32dd
			 */
			userId?: string
		}
		CreatePostSuccessfulResponseSchema: {
			/** @description Post Data */
			post?: components['schemas']['GetPostFormattedSchema']
		}
		CreatePostSuccessfulResponseDTO: {
			/**
			 * @description Success or Failure
			 * @example true
			 */
			success: boolean
			/**
			 * @description Status Code
			 * @example 201
			 */
			statusCode: number
			/**
			 * @description Message
			 * @example Created Post
			 */
			message: string
			/** @description Requested Results */
			results?: components['schemas']['CreatePostSuccessfulResponseSchema']
		}
		GetPostSuccessfulResponseSchema: {
			/** @description Post Data */
			post?: components['schemas']['GetPostFormattedSchema']
		}
		GetPostSuccessfulResponseDTO: {
			/**
			 * @description Success or Failure
			 * @example true
			 */
			success: boolean
			/**
			 * @description Status Code
			 * @example 200
			 */
			statusCode: number
			/**
			 * @description Message
			 * @example Fetched Post
			 */
			message: string
			/** @description Requested Results */
			results?: components['schemas']['GetPostSuccessfulResponseSchema']
		}
		PostCreateRequest: {
			/**
			 * @description Account Ids
			 * @example [
			 *       "aF3KhyL8JIuBwzK3m7Ly_iVrVJ2uoXNF0wzcBzgl5_12554616564525983496"
			 *     ]
			 */
			accountIds?: string[]
			/**
			 * @description Post Content
			 *      The limitations of content as per the platforms is provided through the reference link in API description
			 * @example Hello World
			 */
			summary?: string
			/** @description Post Media Data
			 *      The limitations of media as per the platforms is provided through the reference link in API description */
			media?: components['schemas']['PostMediaSchema'][]
			/**
			 * @description Status must be one of the following values: in_progress, draft, failed, published, scheduled, in_review, notification_sent, deleted
			 * @example draft
			 */
			status?: Record<string, never>
			/** @description Schedule Date */
			scheduleDate?: string
			/** @description Created By */
			createdBy?: string
			/**
			 * @description Follow Up Comment on platform. It is not allowed on Tiktok and GMB accounts and there is a limit of 280 charecters for twitter account
			 * @example First comment
			 */
			followUpComment?: string
			/** @description Og Tags Meta Data */
			ogTagsDetails?: components['schemas']['OgTagsSchema']
			/**
			 * @description Post Type must be one of the following values: - post, story, reel
			 * @example post
			 */
			type: Record<string, never>
			/** @description Post Approval Details */
			postApprovalDetails?: components['schemas']['PostApprovalSchema']
			/**
			 * @description if schedule datetime is updated
			 * @example true
			 */
			scheduleTimeUpdated?: boolean
			/**
			 * @description Array of Tag Value
			 * @example [
			 *       "Tag1"
			 *     ]
			 */
			tags?: string[]
			/** @description Category Id */
			categoryId?: string
			/** @description Tiktok Post Details */
			tiktokPostDetails?: components['schemas']['TiktokPostSchema']
			/** @description GMB Post Details */
			gmbPostDetails?: components['schemas']['GMBPostSchema']
			/**
			 * @description User ID
			 * @example sdfdsfdsfEWEsdfsdsW32dd
			 */
			userId?: string
		}
		UpdatePostSuccessfulResponseDTO: {
			/**
			 * @description Success or Failure
			 * @example true
			 */
			success: boolean
			/**
			 * @description Status Code
			 * @example 200
			 */
			statusCode: number
			/**
			 * @description Message
			 * @example Updated Post
			 */
			message: string
		}
		DeletePostSuccessfulResponseSchema: {
			postId?: string
		}
		DeletePostSuccessfulResponseDTO: {
			/**
			 * @description Success or Failure
			 * @example true
			 */
			success: boolean
			/**
			 * @description Status Code
			 * @example 200
			 */
			statusCode: number
			/**
			 * @description Message
			 * @example Deleted Post
			 */
			message: string
			/** @description Requested Results */
			results?: components['schemas']['DeletePostSuccessfulResponseSchema']
		}
		GetAccountSchema: {
			/** @example aF3KhyL8JIuBwzK3m7Ly_Lx1EI6YIgQYMQi0ytFXv_12554616564525983496 */
			id?: string
			/** @example aF3KhyL8JIuBwzK3m7Ly */
			oauthId?: string
			/** @example aF3KhyL8JIuBwzK3m7Ly */
			profileId?: string
			/** @example Sample Account */
			name?: string
			/**
			 * @description platform must be one of the following values: google, facebook, instagram, linkedin, twitter, tiktok
			 * @example google
			 */
			platform?: string
			/** @example location */
			type?: string
			/** @example 2024-03-11T19:29:59.785Z */
			expire?: string
			/** @example false */
			isExpired?: boolean
			/** @example {
			 *       "hasGoogleUpdated": true,
			 *       "canDelete": true
			 *     } */
			meta?: Record<string, never>
		}
		GetGroupSchema: {
			/**
			 * @description Group Id
			 * @example 6284c43d519161e96cc09c13
			 */
			id: string
			/**
			 * @description name of group
			 * @example Primary
			 */
			name: string
			/** @example [
			 *       "6494063f4260855c1c5776b5_mhoUgTPkz19vjF5Qu7Av_2774080328752823730"
			 *     ] */
			accountIds: string[]
		}
		AccountsListResponseSchema: {
			accounts?: components['schemas']['GetAccountSchema'][]
			groups?: components['schemas']['GetGroupSchema'][]
		}
		AccountsListResponseDTO: {
			/**
			 * @description Success or Failure
			 * @example true
			 */
			success: boolean
			/**
			 * @description Status Code
			 * @example 200
			 */
			statusCode: number
			/**
			 * @description Message
			 * @example Fetched Accounts
			 */
			message: string
			/** @description Requested Results */
			results?: components['schemas']['AccountsListResponseSchema']
		}
		DeleteAccountResponseSchema: {
			/**
			 * @description Location Id
			 * @example ve9EPM428h8vShlRW1KT
			 */
			locationId?: string
			/**
			 * @description Id
			 * @example 65fac446d599990d1313c1dd
			 */
			id?: string
		}
		LocationAndAccountDeleteResponseDTO: {
			/**
			 * @description Success or Failure
			 * @example true
			 */
			success: boolean
			/**
			 * @description Status Code
			 * @example 200
			 */
			statusCode: number
			/**
			 * @description Message
			 * @example Deleted Account
			 */
			message: string
			/** @description Requested Results */
			results?: components['schemas']['DeleteAccountResponseSchema']
		}
		FacebookPageSchema: {
			/** @example u37swmmLbA02zgqKPpxITe2 */
			id?: string
			/** @example FB Page */
			name?: string
			/** @example u37swmmLbA02zgqKPpxITe2 */
			avatar?: string
			/** @example true */
			isOwned?: boolean
			/** @example true */
			isConnected?: boolean
		}
		GetFacebookAccountsSchema: {
			/** @description Facebook Pages Details */
			pages?: components['schemas']['FacebookPageSchema'][]
		}
		GetFacebookAccountsResponseDTO: {
			/**
			 * @description Success or Failure
			 * @example true
			 */
			success: boolean
			/**
			 * @description Status Code
			 * @example 200
			 */
			statusCode: number
			/**
			 * @description Message
			 * @example Fetched Facebook Account
			 */
			message: string
			/** @description Requested Results */
			results?: components['schemas']['GetFacebookAccountsSchema']
		}
		AttachFBAccountDTO: {
			/** @example page */
			type?: Record<string, never>
			/** @example 244405****11687 */
			originId?: string
			/** @example JOHN_DEO */
			name?: string
			/** @example https://storage.googleapis.com/2ad21ebc23/test */
			avatar?: string
			/**
			 * @description Company ID
			 * @example sdfdsfdsfEWEsdfsdsW32dd
			 */
			companyId?: string
		}
		SocialMediaFacebookAccountSchema: {
			/** @example 65f2d989a4f2f1e5322c3856 */
			_id?: string
			/** @example u37swmmLbA02zgqKPpxITe2 */
			oAuthId?: string
			/** @example u37swmmLbA02zgqKPpxITe2 */
			oldId?: string
			/** @example u37swmmLbA02zgqKPpxITe2 */
			locationId?: string
			/** @example u37swmmLbA02zgqKPpxITe2 */
			originId?: string
			/** @example facebook */
			platform?: Record<string, never>
			/**
			 * @description type value must be page
			 * @example page
			 */
			type?: Record<string, never>
			/** @example Account Name */
			name?: string
			/** @example u37swmmLbA02zgqKPpxITe2 */
			avatar?: string
			/** @example {
			 *       "pageId": "u37swmmLbA02zgqKPpxITe2",
			 *       "page": {
			 *         "id": "u37swmmLbA02zgqKPpxITe2",
			 *         "name": "Account Name",
			 *         "avatar": "u37swmmLbA02zgqKPpxITe2"
			 *       },
			 *       "storeCode": "122",
			 *       "isVerified": "true",
			 *       "verified": true,
			 *       "protected": true,
			 *       "locationId": "u37swmmLbA02zgqKPpxITe2",
			 *       "accountId": "u37swmmLbA02zgqKPpxITe2",
			 *       "openId": "u37swmmLbA02zgqKPpxITe2",
			 *       "urn": "u37swmmLbA02zgqKPpxITe2",
			 *       "username": "testUser",
			 *       "storefrontAddress": {
			 *         "regionCode": "30021",
			 *         "languageCode": "E001",
			 *         "postalCode": "1221",
			 *         "administrativeArea": "Down Town",
			 *         "locality": "Louis Street",
			 *         "addressLines": [
			 *           "207",
			 *           "county"
			 *         ]
			 *       }
			 *     } */
			meta?: Record<string, never>
			/** @example true */
			active?: boolean
			/** @example true */
			deleted?: boolean
			/**
			 * Format: date-time
			 * @description created date
			 * @example 2024-03-14T11:03:37.015Z
			 */
			createdAt?: string
			/**
			 * Format: date-time
			 * @description updated date
			 * @example 2024-03-14T11:03:37.015Z
			 */
			updatedAt?: string
		}
		SocialMediaFBAccountResponseDTO: {
			/**
			 * @description Success or Failure
			 * @example true
			 */
			success: boolean
			/**
			 * @description Status Code
			 * @example 201
			 */
			statusCode: number
			/**
			 * @description Message
			 * @example Added Facebook Account
			 */
			message: string
			/** @description Requested Results */
			results?: components['schemas']['SocialMediaFacebookAccountSchema']
		}
		InstagramAccountSchema: {
			/** @example idu37swmmLbA02zgqKPpxITe2 */
			id?: string
			/** @example Insta account */
			name?: string
			/** @example avau37swmmLbA02zgqKPpxITe2 */
			avatar?: string
			/** @example pidu37swmmLbA02zgqKPpxITe2 */
			pageId?: string
			/** @example true */
			isConnected?: boolean
		}
		GetInstagramAccountsSchema: {
			/** @description Instagram Account Details */
			accounts?: components['schemas']['InstagramAccountSchema'][]
		}
		GetInstagramAccountsResponseDTO: {
			/**
			 * @description Success or Failure
			 * @example true
			 */
			success: boolean
			/**
			 * @description Status Code
			 * @example 200
			 */
			statusCode: number
			/**
			 * @description Message
			 * @example Fetched Instagram Account
			 */
			message: string
			/** @description Requested Results */
			results?: components['schemas']['GetInstagramAccountsSchema']
		}
		AttachIGAccountDTO: {
			/** @example 244405****11687 */
			originId?: string
			/** @example JOHN_DEO */
			name?: string
			avatar?: string
			/** @example 234234234242sd */
			pageId: string
			/**
			 * @description Company ID
			 * @example sdfdsfdsfEWEsdfsdsW32dd
			 */
			companyId?: string
		}
		SocialMediaInstagramAccountSchema: {
			/** @example 65f2d989a4f2f1e5322c3856 */
			_id?: string
			/** @example u37swmmLbA02zgqKPpxITe2 */
			oAuthId?: string
			/** @example u37swmmLbA02zgqKPpxITe2 */
			oldId?: string
			/** @example u37swmmLbA02zgqKPpxITe2 */
			locationId?: string
			/** @example u37swmmLbA02zgqKPpxITe2 */
			originId?: string
			/** @example instagram */
			platform?: Record<string, never>
			/** @example profile */
			type?: Record<string, never>
			/** @example Profile Name */
			name?: string
			/** @example u37swmmLbA02zgqKPpxITe2 */
			avatar?: string
			/** @example {
			 *       "pageId": "u37swmmLbA02zgqKPpxITe2",
			 *       "page": {
			 *         "id": "u37swmmLbA02zgqKPpxITe2",
			 *         "name": "Account Name",
			 *         "avatar": "u37swmmLbA02zgqKPpxITe2"
			 *       },
			 *       "storeCode": "122",
			 *       "isVerified": "true",
			 *       "verified": true,
			 *       "protected": true,
			 *       "locationId": "u37swmmLbA02zgqKPpxITe2",
			 *       "accountId": "u37swmmLbA02zgqKPpxITe2",
			 *       "openId": "u37swmmLbA02zgqKPpxITe2",
			 *       "urn": "u37swmmLbA02zgqKPpxITe2",
			 *       "username": "testUser",
			 *       "storefrontAddress": {
			 *         "regionCode": "30021",
			 *         "languageCode": "E001",
			 *         "postalCode": "1221",
			 *         "administrativeArea": "Down Town",
			 *         "locality": "Louis Street",
			 *         "addressLines": [
			 *           "207",
			 *           "county"
			 *         ]
			 *       }
			 *     } */
			meta?: Record<string, never>
			/** @example true */
			active?: boolean
			/** @example true */
			deleted?: boolean
			/**
			 * Format: date-time
			 * @description created date
			 * @example 2024-03-14T11:03:37.015Z
			 */
			createdAt?: string
			/**
			 * Format: date-time
			 * @description updated date
			 * @example 2024-03-14T11:03:37.015Z
			 */
			updatedAt?: string
		}
		SocialMediaInstagramAccountResponseDTO: {
			/**
			 * @description Success or Failure
			 * @example true
			 */
			success: boolean
			/**
			 * @description Status Code
			 * @example 201
			 */
			statusCode: number
			/**
			 * @description Message
			 * @example Added Instagram Account
			 */
			message: string
			/** @description Requested Results */
			results?: components['schemas']['SocialMediaInstagramAccountSchema']
		}
		LinkedInPageSchema: {
			/**
			 * @description Page ID
			 * @example w37swmmLbA02zgqKPpxITe
			 */
			id?: string
			/**
			 * @description LinkedIn Page Name
			 * @example Sample Name
			 */
			name?: string
			/**
			 * @description Profile Avatar url
			 * @example w37swmmLbA02zgqKPpxITe
			 */
			avatar?: string
			/** @description URN */
			urn?: string
			/**
			 * @description is connected to app
			 * @example true
			 */
			isConnected?: boolean
		}
		LinkedInProfileSchema: {
			/**
			 * @description Id
			 * @example w37swmmLbA02zgqKPpxITe
			 */
			id?: string
			/**
			 * @description Name of profile
			 * @example Profile Name
			 */
			name?: string
			/**
			 * @description Profile avatar
			 * @example w37swmmLbA02zgqKPpxITe
			 */
			avatar?: string
			/** @description URN */
			urn?: string
			/**
			 * @description is connected to app
			 * @example true
			 */
			isConnected?: boolean
		}
		GetLinkedInAccountSchema: {
			/** @description LinkedIn Pages */
			pages?: components['schemas']['LinkedInPageSchema'][]
			/** @description LinkedIn Profile Details */
			profile?: components['schemas']['LinkedInProfileSchema'][]
		}
		GetLinkedInAccountsResponseDTO: {
			/**
			 * @description Success or Failure
			 * @example true
			 */
			success: boolean
			/**
			 * @description Status Code
			 * @example 200
			 */
			statusCode: number
			/**
			 * @description Message
			 * @example Fetched LinkedIn Account
			 */
			message: string
			/** @description Requested Results */
			results?: components['schemas']['GetLinkedInAccountSchema']
		}
		AttachLinkedinAccountDTO: {
			/** @enum {string} */
			type?: 'page' | 'group' | 'profile' | 'location' | 'business'
			/** @example 244405****11687 */
			originId?: string
			/** @example JOHN_DEO */
			name?: string
			avatar?: string
			urn?: string
			/**
			 * @description Company ID
			 * @example sdfdsfdsfEWEsdfsdsW32dd
			 */
			companyId?: string
		}
		SocialMediaLinkedInAccountSchema: {
			/** @example 65f2d989a4f2f1e5322c3856 */
			_id?: string
			/** @example u37swmmLbA02zgqKPpxITe2 */
			oAuthId?: string
			/** @example u37swmmLbA02zgqKPpxITe2 */
			oldId?: string
			/** @example u37swmmLbA02zgqKPpxITe2 */
			locationId?: string
			/** @example u37swmmLbA02zgqKPpxITe2 */
			originId?: string
			/** @example linkedin */
			platform?: Record<string, never>
			/**
			 * @description type must be one of the following values: page, profile
			 * @example profile
			 */
			type?: Record<string, never>
			/** @example Profile Name */
			name?: string
			/** @example u37swmmLbA02zgqKPpxITe2 */
			avatar?: string
			/** @example {
			 *       "pageId": "u37swmmLbA02zgqKPpxITe2",
			 *       "page": {
			 *         "id": "u37swmmLbA02zgqKPpxITe2",
			 *         "name": "Account Name",
			 *         "avatar": "u37swmmLbA02zgqKPpxITe2"
			 *       },
			 *       "storeCode": "122",
			 *       "isVerified": "true",
			 *       "verified": true,
			 *       "protected": true,
			 *       "locationId": "u37swmmLbA02zgqKPpxITe2",
			 *       "accountId": "u37swmmLbA02zgqKPpxITe2",
			 *       "openId": "u37swmmLbA02zgqKPpxITe2",
			 *       "urn": "u37swmmLbA02zgqKPpxITe2",
			 *       "username": "testUser",
			 *       "storefrontAddress": {
			 *         "regionCode": "30021",
			 *         "languageCode": "E001",
			 *         "postalCode": "1221",
			 *         "administrativeArea": "Down Town",
			 *         "locality": "Louis Street",
			 *         "addressLines": [
			 *           "207",
			 *           "county"
			 *         ]
			 *       }
			 *     } */
			meta?: Record<string, never>
			/** @example true */
			active?: boolean
			/** @example true */
			deleted?: boolean
			/**
			 * Format: date-time
			 * @description created date
			 * @example 2024-03-14T11:03:37.015Z
			 */
			createdAt?: string
			/**
			 * Format: date-time
			 * @description updated date
			 * @example 2024-03-14T11:03:37.015Z
			 */
			updatedAt?: string
		}
		SocialMediaLinkedInAccountResponseDTO: {
			/**
			 * @description Success or Failure
			 * @example true
			 */
			success: boolean
			/**
			 * @description Status Code
			 * @example 200
			 */
			statusCode: number
			/**
			 * @description Message
			 * @example Added LinkedIn Account
			 */
			message: string
			/** @description Requested Results */
			results?: components['schemas']['SocialMediaLinkedInAccountSchema']
		}
		TwitterProfileSchema: {
			/**
			 * @description ID of profile
			 * @example ZHl1OWpfZEMyeWc5UjJOOU51RVNOal
			 */
			id?: string
			/**
			 * @description Name of profile
			 * @example Twitter Account name
			 */
			name?: string
			/**
			 * @description Username of profile
			 * @example sample_user
			 */
			username?: string
			/**
			 * @description Avatar of profile
			 * @example ZHl1OWpfZEMyeWc5UjJOOU51RVNOal
			 */
			avatar?: string
			/**
			 * @description Is protected
			 * @example true
			 */
			protected?: boolean
			/**
			 * @description Is verified
			 * @example true
			 */
			verified?: boolean
			/**
			 * @description Is connected
			 * @example true
			 */
			isConnected?: boolean
		}
		GetTwitterAccountsSchema: {
			/** @description Twitter Profile Details */
			profile?: components['schemas']['TwitterProfileSchema'][]
		}
		GetTwitterAccountsResponseDTO: {
			/**
			 * @description Success or Failure
			 * @example true
			 */
			success: boolean
			/**
			 * @description Status Code
			 * @example 200
			 */
			statusCode: number
			/**
			 * @description Message
			 * @example Fetched Twitter Account
			 */
			message: string
			/** @description Requested Results */
			results?: components['schemas']['GetTwitterAccountsSchema']
		}
		AttachTwitterAccountDTO: {
			/** @example 244405****11687 */
			originId?: string
			/** @example JOHN_DEO */
			name?: string
			/** @example user_name */
			username?: string
			avatar?: string
			/** @example true */
			protected?: boolean
			/** @example true */
			verified?: boolean
			/**
			 * @description Company ID
			 * @example sdfdsfdsfEWEsdfsdsW32dd
			 */
			companyId?: string
		}
		SocialMediaTwitterAccountSchema: {
			/** @example 65f2d989a4f2f1e5322c3856 */
			_id?: string
			/** @example u37swmmLbA02zgqKPpxITe2 */
			oAuthId?: string
			/** @example u37swmmLbA02zgqKPpxITe2 */
			oldId?: string
			/** @example u37swmmLbA02zgqKPpxITe2 */
			locationId?: string
			/** @example u37swmmLbA02zgqKPpxITe2 */
			originId?: string
			/** @example twitter */
			platform?: Record<string, never>
			/** @example profile */
			type?: Record<string, never>
			/** @example Profile Name */
			name?: string
			/** @example u37swmmLbA02zgqKPpxITe2 */
			avatar?: string
			/** @example {
			 *       "pageId": "u37swmmLbA02zgqKPpxITe2",
			 *       "page": {
			 *         "id": "u37swmmLbA02zgqKPpxITe2",
			 *         "name": "Account Name",
			 *         "avatar": "u37swmmLbA02zgqKPpxITe2"
			 *       },
			 *       "storeCode": "122",
			 *       "isVerified": "true",
			 *       "verified": true,
			 *       "protected": true,
			 *       "locationId": "u37swmmLbA02zgqKPpxITe2",
			 *       "accountId": "u37swmmLbA02zgqKPpxITe2",
			 *       "openId": "u37swmmLbA02zgqKPpxITe2",
			 *       "urn": "u37swmmLbA02zgqKPpxITe2",
			 *       "username": "testUser",
			 *       "storefrontAddress": {
			 *         "regionCode": "30021",
			 *         "languageCode": "E001",
			 *         "postalCode": "1221",
			 *         "administrativeArea": "Down Town",
			 *         "locality": "Louis Street",
			 *         "addressLines": [
			 *           "207",
			 *           "county"
			 *         ]
			 *       }
			 *     } */
			meta?: Record<string, never>
			/** @example true */
			active?: boolean
			/** @example true */
			deleted?: boolean
			/**
			 * Format: date-time
			 * @description created date
			 * @example 2024-03-14T11:03:37.015Z
			 */
			createdAt?: string
			/**
			 * Format: date-time
			 * @description updated date
			 * @example 2024-03-14T11:03:37.015Z
			 */
			updatedAt?: string
		}
		SocialMediaTwitterAccountResponseDTO: {
			/**
			 * @description Success or Failure
			 * @example true
			 */
			success: boolean
			/**
			 * @description Status Code
			 * @example 201
			 */
			statusCode: number
			/**
			 * @description Message
			 * @example Added Twitter Account
			 */
			message: string
			/** @description Requested Results */
			results?: components['schemas']['SocialMediaTwitterAccountSchema']
		}
		UploadCSVDTO: {
			/** Format: binary */
			file?: string
		}
		UploadFileResponseSchema: {
			/** @example omaDY3RbWtTP511e/social-import/d23d68c2-82c0-1db6e2.csv */
			filePath?: string
			/** @example 6 */
			rowsCount?: number
			/** @example CSV Import Sample - CSV Import Sample.csv */
			fileName?: string
		}
		UploadFileResponseDTO: {
			/**
			 * @description Success or Failure
			 * @example true
			 */
			success: boolean
			/**
			 * @description Status Code
			 * @example 201
			 */
			statusCode: number
			/**
			 * @description Message
			 * @example Uploaded CSV
			 */
			message: string
			/** @description Requested Results */
			results?: components['schemas']['UploadFileResponseSchema']
		}
		SetAccountsDTO: {
			/**
			 * @description Account Ids
			 * @example [
			 *       "aF3KhyL8JIuBwzK3m7Ly_iVrVJ2uoXNF0wzcBzgl5_12554616564525983496"
			 *     ]
			 */
			accountIds: string[]
			/**
			 * @description File path
			 * @example o6241QsiRwUIJHyjuhos/social-planner-import/a6d04a26-0401-4e52-8f48-dbb274050fab.csv
			 */
			filePath: string
			/**
			 * @description Entires Count. rowcCount must be between 1 and number of posts in CSV
			 * @example 1
			 */
			rowsCount: number
			/**
			 * @description Name of file
			 * @example test.csv
			 */
			fileName: string
			/** @example o6241QsiRwUIJHyjuhos */
			approver?: string
			/**
			 * @description User ID
			 * @example sdfdsfdsfEWEsdfsdsW32dd
			 */
			userId?: string
		}
		SetAccountsResponseDTO: {
			/**
			 * @description Success or Failure
			 * @example true
			 */
			success: boolean
			/**
			 * @description Status Code
			 * @example 201
			 */
			statusCode: number
			/**
			 * @description Message
			 * @example Accounts Set Successfully
			 */
			message: string
		}
		CSVImportSchema: {
			/**
			 * @description Csv Id
			 * @example ve9EPM428h8vShlRW1KT
			 */
			_id: string
			/**
			 * @description locationId
			 * @example iVrVJ2uoXNF0wzcBzgl5
			 */
			locationId?: string
			/**
			 * @description File Name
			 * @example sample.csv
			 */
			fileName?: string
			/**
			 * @description Account Ids
			 * @example [
			 *       "aF3KhyL8JIuBwzK3m7Ly_iVrVJ2uoXNF0wzcBzgl5_12554616564525983496"
			 *     ]
			 */
			accountIds?: string[]
			/**
			 * @description File path
			 * @example File
			 */
			file?: string
			/**
			 * @description status must be one of the following values: pending, in_progress, completed, failed, in_review, importing, deleted
			 * @example completed
			 */
			status?: string
			/**
			 * @description Posts count
			 * @example 5
			 */
			count?: number
			/**
			 * @description Created By Id
			 * @example SDsdfdf45Dgs4w3ssss
			 */
			createdBy?: string
			/**
			 * @description Trace Id
			 * @example FSeSDsdfdf45Dgs4w3ssss
			 */
			traceId?: string
			/**
			 * @description Origin Id
			 * @example FSeSDsdfdf45Dgs4w3ssss
			 */
			originId?: string
			/**
			 * @description Approver Id
			 * @example FSeSDsdfdf45Dgs4w3ssss
			 */
			approver?: string
			/**
			 * Format: date-time
			 * @description Date Created
			 * @example 2023-08-02T00:00:00.000Z
			 */
			createdAt?: string
		}
		GetUploadStatusResponseSchema: {
			/** @description CSV Data */
			csvs: components['schemas']['CSVImportSchema']
			/** @example 6 */
			count: number
		}
		GetUploadStatusResponseDTO: {
			/**
			 * @description Success or Failure
			 * @example true
			 */
			success: boolean
			/**
			 * @description Status Code
			 * @example 200
			 */
			statusCode: number
			/**
			 * @description Message
			 * @example Fetched CSV Upload Status
			 */
			message: string
			/** @description Requested Results */
			results?: components['schemas']['GetUploadStatusResponseSchema']
		}
		OgImageSchema: {
			/**
			 * @description Image url
			 * @example https://knowledge.wharton.upenn.edu/wp-content/uploads/2019/07/072619_socialmedia_phonelikes-600x440.jpg
			 */
			url?: string
			/**
			 * @description Image width
			 * @example 400
			 */
			width?: number
			/**
			 * @description Image height
			 * @example 400
			 */
			height?: number
			/**
			 * @description Image Type
			 * @example image/jpg
			 */
			type?: string
		}
		IOgTagsSchema: {
			/**
			 * @description Tag url
			 * @example https://knowledge.wharton.upenn.edu/article/impact-of-social-media/
			 */
			url?: string
			/**
			 * @description Tag description
			 * @example Social media as we know it has barely
			 */
			ogDescription?: string
			/** @description Tag description */
			ogImage?: components['schemas']['OgImageSchema']
			/**
			 * @description Tag Title
			 * @example The Impact of Social Media: Is it Irreplaceable?
			 */
			ogTitle?: string
			/**
			 * @description Tag Url
			 * @example https://knowledge.wharton.upenn.edu/article/impact-of-social-media/
			 */
			ogUrl?: string
			/**
			 * @description Site Name
			 * @example Knowledge at Wharton
			 */
			ogSiteName?: string
			/**
			 * @description Og Tag Error
			 * @example InvalidLink
			 */
			error?: string
		}
		CSVMediaResponseSchema: {
			/**
			 * @description Media Url
			 * @example https://storage.googleapis.com/ghl-test/omaDY3RbWtTP511e808O/media/38e53059-b92706571605.png
			 */
			url?: string
			/**
			 * @description Media Type
			 * @example image/webp
			 */
			type?: string
			/**
			 * @description Media Size
			 * @example 18362
			 */
			size?: number
			/**
			 * @description Media Width
			 * @example 500
			 */
			width?: number
			/**
			 * @description Media Height
			 * @example 500
			 */
			height?: number
			/**
			 * @description Media Aspect Ratio
			 * @example 1.5
			 */
			aspectRatio?: number
			/**
			 * @description Media Aspect Ratio
			 * @example 60
			 */
			duration?: number
			/**
			 * @description Media format
			 * @example jpg
			 */
			format?: string
			/**
			 * @description Video Codec
			 * @example h264
			 */
			videoCodecName?: string
			/**
			 * @description Video Frame Rate
			 * @example 21
			 */
			frameRate?: number
			/**
			 * @description Audio Codec
			 * @example aac
			 */
			audioCodecName?: string
			/**
			 * @description Audio Channel
			 * @example 1
			 */
			audioChannels?: number
			/**
			 * @description Display Aspect Ratio
			 * @example 250 : 167
			 */
			displayAspectRatio?: string
			/** @description List of frames */
			frames?: string[]
			/**
			 * @description Selected Poster
			 * @example 0
			 */
			selectedPoster?: number
			/**
			 * @description Error
			 * @example Image is larger than 10MB
			 */
			error?: string
			/**
			 * @description Instagram media error. It can we one of the following errors: imageSize, imageType, imageAspectRatio, videoType, videoDuration, videoSize, videoAspectRatio, videoWidthHeight, audioCodec, audioCodecChannels, videoCodec, videoFrameRate
			 * @example imageSize
			 */
			instagramError?: string
			/**
			 * @description GMB media error. It can be one of the following errors: imageSize, imageDimension, imageType
			 * @example imageDimension
			 */
			gmbError?: string
			/**
			 * @description Facebook media error. It can be one of the following errors: imageSize, imageType, videoDuration, videoSize
			 * @example videoDuration
			 */
			facebookError?: string
			/**
			 * @description LinkedIn media error. It can be one of the following errors: imageSize, imageType, videoType, videoDuration, videoSize
			 * @example imageType
			 */
			linkedinError?: string
			/**
			 * @description Twitter media error. It can be one of the following errors: imageSize, videoType, videoDuration, videoSize
			 * @example videoSize
			 */
			twitterError?: string
			/**
			 * @description Tiktok media error. It can be one of the following errors: videoType, videoDuration, videoSize, videoWidthHeight, videoCodec, videoFrameRate
			 * @example videoFrameRate
			 */
			tiktokError?: string
			/**
			 * @description Tikok Business media error. It can be one of the following errors: videoType, videoDuration, videoSize, videoWidthHeight, videoCodec, videoFrameRate
			 * @example videoType
			 */
			tiktokBusinessError?: string
			/**
			 * @description Media error. It can be one of the following values: imageSize, imageWidth
			 * @example imageSize
			 */
			invalidError?: string
		}
		CSVPostSchema: {
			/**
			 * @description Account Ids
			 * @example [
			 *       "aF3KhyL8JIuBwzK3m7Ly_iVrVJ2uoXNF0wzcBzgl5_12554616564525983496"
			 *     ]
			 */
			accountIds?: string[]
			/** @description OG Tag */
			link?: components['schemas']['IOgTagsSchema']
			/** @description Post Media List */
			medias?: components['schemas']['CSVMediaResponseSchema'][]
			/** @example 2022-11-23T05:53:00.000Z */
			scheduleDate?: string
			/** @example First post */
			summary?: string
			/** @example Initial Comment */
			followUpComment?: string
			/** @example post */
			type?: Record<string, never>
			/** @description Tiktok Post Details */
			tiktokPostDetails?: components['schemas']['TiktokPostSchema']
			/** @description GMB Post Details */
			gmbPostDetails?: components['schemas']['GMBPostSchema']
			/** @description Error Description */
			errorMessage?: string
		}
		GetCsvPostResponseSchema: {
			/** @description CSV Data */
			csv?: components['schemas']['CSVImportSchema']
			/** @example 6 */
			count?: number
			/** @description CSV Posts */
			posts?: components['schemas']['CSVPostSchema'][]
		}
		GetCsvPostResponseDTO: {
			/**
			 * @description Success or Failure
			 * @example true
			 */
			success: boolean
			/**
			 * @description Status Code
			 * @example 200
			 */
			statusCode: number
			/**
			 * @description Message
			 * @example Fetched CSV Post
			 */
			message: string
			/** @description Requested Results */
			results?: components['schemas']['GetCsvPostResponseSchema']
		}
		CSVDefaultDTO: {
			/**
			 * @description User ID
			 * @example sdfdsfdsfEWEsdfsdsW32dd
			 */
			userId?: string
		}
		CsvPostStatusResponseDTO: {
			/**
			 * @description Success or Failure
			 * @example true
			 */
			success: boolean
			/**
			 * @description Status Code
			 * @example 200
			 */
			statusCode: number
			/**
			 * @description Message
			 * @example Updated Successfully
			 */
			message: string
		}
		CsvResponse: {
			/** @example Location Name */
			locationId?: string
			/** @example File Name */
			fileName?: string
			/**
			 * @description Account Ids
			 * @example [
			 *       "aF3KhyL8JIuBwzK3m7Ly_iVrVJ2uoXNF0wzcBzgl5_12554616564525983496"
			 *     ]
			 */
			accountIds?: string[]
			/** @example File */
			file?: string
			/**
			 * @description status must be one of the following values: pending, in_progress, completed, failed, in_review, importing, deleted
			 * @example completed
			 */
			status?: Record<string, never>
			/** @example 5 */
			count?: number
			/** @example AccountId_SDsdfdf45Dgs4w3ssss */
			createdBy?: string
			/** @example FSeSDsdfdf45Dgs4w3ssss */
			traceId?: string
			/** @example FSeSDsdfdf45Dgs4w3ssss */
			originId?: string
			/** @example FSeSDsdfdf45Dgs4w3ssss */
			approver?: string
		}
		CSVResponseSchema: {
			/** @description CSV Data */
			csv?: components['schemas']['CsvResponse']
		}
		DeleteCsvResponseDTO: {
			/**
			 * @description Success or Failure
			 * @example true
			 */
			success: boolean
			/**
			 * @description Status Code
			 * @example 200
			 */
			statusCode: number
			/**
			 * @description Message
			 * @example Deleted Post
			 */
			message: string
			/** @description Requested Results */
			results?: components['schemas']['CSVResponseSchema']
		}
		DeletePostResponseSchema: {
			/** @description Post Id */
			postId: string
		}
		DeletePostResponseDTO: {
			/**
			 * @description Success or Failure
			 * @example true
			 */
			success: boolean
			/**
			 * @description Status Code
			 * @example 200
			 */
			statusCode: number
			/**
			 * @description Message
			 * @example Deleted Post
			 */
			message: string
			/** @description Requested Results */
			results?: components['schemas']['DeletePostResponseSchema']
		}
		TiktokProfileSchema: {
			/**
			 * @description Id
			 * @example w37swmmLbA02zgqKPpxITe
			 */
			id?: string
			/**
			 * @description Name of account
			 * @example Account Name
			 */
			name?: string
			/**
			 * @description Username of account
			 * @example User_name
			 */
			username?: string
			/**
			 * @description Avatar of profile account
			 * @example w37swmmLbA02zgqKPpxITe
			 */
			avatar?: string
			/**
			 * @description Is verified
			 * @example true
			 */
			verified?: boolean
			/**
			 * @description Is connected
			 * @example true
			 */
			isConnected?: boolean
			/**
			 * @description Tiktok Account Type must be one of the following values: business, profile
			 * @example BUSINESS
			 */
			type?: Record<string, never>
		}
		GetTiktokAccountSchema: {
			/** @description Tiktok Business Account */
			profile?: components['schemas']['TiktokProfileSchema'][]
		}
		GetTiktokAccountResponseDTO: {
			/**
			 * @description Success or Failure
			 * @example true
			 */
			success: boolean
			/**
			 * @description Status Code
			 * @example 200
			 */
			statusCode: number
			/**
			 * @description Message
			 * @example Fetched Tiktok Account
			 */
			message: string
			/** @description Requested Results */
			results?: components['schemas']['GetTiktokAccountSchema']
		}
		AttachTiktokAccountDTO: {
			/** @enum {string} */
			type?: 'page' | 'group' | 'profile' | 'location' | 'business'
			/** @example 244405****11687 */
			originId?: string
			/** @example JOHN_DEO */
			name?: string
			avatar?: string
			/** @example true */
			verified?: boolean
			/** @example JOHN_DEO */
			username?: string
			/**
			 * @description Company ID
			 * @example sdfdsfdsfEWEsdfsdsW32dd
			 */
			companyId?: string
		}
		SocialMediaTiktokAccountSchema: {
			/** @example 65f2d989a4f2f1e5322c3856 */
			_id?: string
			/** @example u37swmmLbA02zgqKPpxITe2 */
			oAuthId?: string
			/** @example u37swmmLbA02zgqKPpxITe2 */
			oldId?: string
			/** @example u37swmmLbA02zgqKPpxITe2 */
			locationId?: string
			/** @example u37swmmLbA02zgqKPpxITe2 */
			originId?: string
			/** @example tiktok */
			platform?: Record<string, never>
			/**
			 * @description type must be one of the following values: profile, business
			 * @example profile
			 */
			type?: Record<string, never>
			/** @example Account Name */
			name?: string
			/** @example u37swmmLbA02zgqKPpxITe2 */
			avatar?: string
			/** @example {
			 *       "pageId": "u37swmmLbA02zgqKPpxITe2",
			 *       "page": {
			 *         "id": "u37swmmLbA02zgqKPpxITe2",
			 *         "name": "Account Name",
			 *         "avatar": "u37swmmLbA02zgqKPpxITe2"
			 *       },
			 *       "storeCode": "122",
			 *       "isVerified": "true",
			 *       "verified": true,
			 *       "protected": true,
			 *       "locationId": "u37swmmLbA02zgqKPpxITe2",
			 *       "accountId": "u37swmmLbA02zgqKPpxITe2",
			 *       "openId": "u37swmmLbA02zgqKPpxITe2",
			 *       "urn": "u37swmmLbA02zgqKPpxITe2",
			 *       "username": "testUser",
			 *       "storefrontAddress": {
			 *         "regionCode": "30021",
			 *         "languageCode": "E001",
			 *         "postalCode": "1221",
			 *         "administrativeArea": "Down Town",
			 *         "locality": "Louis Street",
			 *         "addressLines": [
			 *           "207",
			 *           "county"
			 *         ]
			 *       }
			 *     } */
			meta?: Record<string, never>
			/** @example true */
			active?: boolean
			/** @example true */
			deleted?: boolean
			/**
			 * Format: date-time
			 * @description created date
			 * @example 2024-03-14T11:03:37.015Z
			 */
			createdAt?: string
			/**
			 * Format: date-time
			 * @description updated date
			 * @example 2024-03-14T11:03:37.015Z
			 */
			updatedAt?: string
		}
		SocialMediaTiktokAccountResponseDTO: {
			/**
			 * @description Success or Failure
			 * @example true
			 */
			success: boolean
			/**
			 * @description Status Code
			 * @example 201
			 */
			statusCode: number
			/**
			 * @description Message
			 * @example Added Tiktok Account
			 */
			message: string
			/** @description Requested Results */
			results?: components['schemas']['SocialMediaTiktokAccountSchema']
		}
		GetTiktokBusinessAccountSchema: {
			/** @description Tiktok Profile */
			profile?: components['schemas']['TiktokProfileSchema'][]
		}
		GetTiktokBusinessAccountResponseDTO: {
			/**
			 * @description Success or Failure
			 * @example true
			 */
			success: boolean
			/**
			 * @description Status Code
			 * @example 201
			 */
			statusCode: number
			/**
			 * @description Message
			 * @example Fetched Tiktok Business Account
			 */
			message: string
			/** @description Requested Results */
			results?: components['schemas']['GetTiktokBusinessAccountSchema']
		}
		CategorySchema: {
			/**
			 * @description Category Name
			 * @example Primary
			 */
			name?: string
			/**
			 * @description Color For Category
			 * @example #FFFFFF
			 */
			primaryColor?: string
			/**
			 * @description Secondary Color
			 * @example #FFFFFF
			 */
			secondaryColor?: string
			/**
			 * @description Location ID
			 * @example Lx1EI6YIgQYMQi0ytFXv
			 */
			locationId?: string
			/**
			 * @description ID
			 * @example Lx1EI6YIgQYMQi0ytFXv
			 */
			_id?: string
			/**
			 * @description Created By User
			 * @example Lx1EI6YIgQYMQi0ytFXv
			 */
			createdBy?: string
			/**
			 * @description Deleted Value
			 * @example false
			 */
			deleted: boolean
			/**
			 * Format: date-time
			 * @example 2023-08-02T00:00:00.000Z
			 */
			createdAt?: string
			/**
			 * Format: date-time
			 * @example 2023-08-02T00:00:00.000Z
			 */
			updatedAt?: string
		}
		GetByLocationIdResponseSchema: {
			/**
			 * @description Count
			 * @example 3
			 */
			count: number
			/** @description Meta Data */
			categories: components['schemas']['CategorySchema'][]
		}
		GetByLocationIdResponseDTO: {
			/**
			 * @description Success or Failure
			 * @example true
			 */
			success: boolean
			/**
			 * @description Status Code
			 * @example 200
			 */
			statusCode: number
			/**
			 * @description Message
			 * @example Fetched Categories by Location ID
			 */
			message: string
			/** @description Requested Results */
			results?: components['schemas']['GetByLocationIdResponseSchema']
		}
		GetByIdResponseSchema: {
			/**
			 * @description Category Name
			 * @example Primary
			 */
			name?: string
			/**
			 * @description Color For Category
			 * @example #32a852
			 */
			primaryColor?: string
			/**
			 * @description Secondary Color
			 * @example #32a852
			 */
			secondaryColor?: string
			/**
			 * @description Location ID
			 * @example Lx1EI6YIgQYMQi0ytFXv
			 */
			locationId?: string
			/**
			 * @description ID
			 * @example Lx1EI6YIgQYMQi0ytFXv
			 */
			_id?: string
			/**
			 * @description Created By User
			 * @example Lx1EI6YIgQYMQi0ytFXv
			 */
			createdBy?: string
			/**
			 * @description Deleted Value
			 * @example false
			 */
			deleted: boolean
			/**
			 * @description Message
			 * @example Category not found
			 */
			message?: string
			/**
			 * Format: date-time
			 * @example 2023-08-02T00:00:00.000Z
			 */
			createdAt?: string
			/**
			 * Format: date-time
			 * @example 2023-08-02T00:00:00.000Z
			 */
			updatedAt?: string
		}
		GetCategorySchema: {
			/** @description Category Schema */
			category?: components['schemas']['GetByIdResponseSchema']
		}
		GetByIdResponseDTO: {
			/**
			 * @description Success or Failure
			 * @example true
			 */
			success: boolean
			/**
			 * @description Status Code
			 * @example 200
			 */
			statusCode: number
			/**
			 * @description Message
			 * @example Fetched Category
			 */
			message: string
			/** @description Requested Results */
			results?: components['schemas']['GetCategorySchema']
		}
		SocialMediaTagSchema: {
			/**
			 * @description Tag Name
			 * @example Primary Tag
			 */
			tag?: string
			/**
			 * @description Location Id
			 * @example Lx1EI6YIgQYMQi0ytFXv
			 */
			locationId?: string
			/**
			 * @description ID
			 * @example Lx1EI6YIgQYMQi0ytFXv
			 */
			_id?: string
			/**
			 * @description Created By User Id
			 * @example Lx1EI6YIgQYMQi0ytFXv
			 */
			createdBy?: string
			/**
			 * @description Deleted boolean value
			 * @example false
			 */
			deleted?: boolean
			/**
			 * Format: date-time
			 * @example 2023-08-02T00:00:00.000Z
			 */
			createdAt?: string
			/**
			 * Format: date-time
			 * @example 2023-08-02T00:00:00.000Z
			 */
			updatedAt?: string
		}
		GetTagsByLocationIdResponseSchema: {
			/** @description Tags Data */
			tags?: components['schemas']['SocialMediaTagSchema'][]
			/**
			 * @description Count
			 * @example 3
			 */
			count?: number
		}
		GetTagsByLocationIdResponseDTO: {
			/**
			 * @description Success or Failure
			 * @example true
			 */
			success: boolean
			/**
			 * @description Status Code
			 * @example 200
			 */
			statusCode: number
			/**
			 * @description Message
			 * @example Fetched Tags by Location ID
			 */
			message: string
			/** @description Requested Results */
			results?: components['schemas']['GetTagsByLocationIdResponseSchema']
		}
		UpdateTagDTO: {
			/**
			 * @description Array of Tag Ids
			 * @example [
			 *       "65fbdcfecc884f07e645ea8b"
			 *     ]
			 */
			tagIds: string[]
		}
		GetTagsByIdResponseSchema: {
			/** @description Social Media Tag Data */
			tags: components['schemas']['SocialMediaTagSchema'][]
			/**
			 * @description Count
			 * @example 3
			 */
			count?: number
		}
		GetTagsByIdResponseDTO: {
			/**
			 * @description Success or Failure
			 * @example true
			 */
			success: boolean
			/**
			 * @description Status Code
			 * @example 201
			 */
			statusCode: number
			/**
			 * @description Message
			 * @example Fetched Tags by Tag IDs
			 */
			message: string
			/** @description Requested Results */
			results?: components['schemas']['GetTagsByIdResponseSchema']
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
	'start-google-oauth': {
		parameters: {
			query: {
				/**
				 * @description Location Id
				 * @example w37swmmLbA02zgqKPpxITe2
				 */
				locationId: string
				/**
				 * @description User Id
				 * @example u37swmmLbA02zgqKPpxITe2
				 */
				userId: string
				/**
				 * @description Page
				 * @example integration
				 */
				page?: string
				/**
				 * @description Reconnect
				 * @example true
				 */
				reconnect?: string
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
			/** @description Successful Response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content?: never
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
	'get-google-locations': {
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
				 * @description Account Location Id
				 * @example w37swmmLbA02zgqKPpxITe2
				 */
				locationId: string
				/**
				 * @description Account Id
				 * @example w37swmmLbA02zgqKPpxITe
				 */
				accountId: string
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
					'application/json': components['schemas']['GetGoogleLocationResponseDTO']
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
	'set-google-locations': {
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
				 * @description Account Location Id
				 * @example w37swmmLbA02zgqKPpxITe2
				 */
				locationId: string
				/**
				 * @description Account Id
				 * @example w37swmmLbA02zgqKPpxITe
				 */
				accountId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['AttachGMBLocationDTO']
			}
		}
		responses: {
			/** @description Successful response */
			201: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['SocialMediaGmbAccountResponseDTO']
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
	'get-posts': {
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
				 * @description Location Id
				 * @example ve9EPM428h8vShlRW1KT
				 */
				locationId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['SearchPostDTO']
			}
		}
		responses: {
			/** @description Successful response */
			201: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['PostSuccessfulResponseDTO']
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
	'create-post': {
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
				 * @description Location Id
				 * @example ve9EPM428h8vShlRW1KT
				 */
				locationId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['CreatePostDTO']
			}
		}
		responses: {
			/** @description Successful response */
			201: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['CreatePostSuccessfulResponseDTO']
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
	'get-post': {
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
				 * @description Location Id
				 * @example ve9EPM428h8vShlRW1KT
				 */
				locationId: string
				/**
				 * @description Post Id
				 * @example 65fac446d599990d1313c1dd
				 */
				id: string
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
					'application/json': components['schemas']['GetPostSuccessfulResponseDTO']
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
	'edit-post': {
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
				 * @description Location Id
				 * @example ve9EPM428h8vShlRW1KT
				 */
				locationId: string
				/**
				 * @description Post Id
				 * @example 65fac446d599990d1313c1dd
				 */
				id: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['PostCreateRequest']
			}
		}
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UpdatePostSuccessfulResponseDTO']
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
	'delete-post': {
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
				 * @description Location Id
				 * @example ve9EPM428h8vShlRW1KT
				 */
				locationId: string
				/**
				 * @description Post Id
				 * @example 65fac446d599990d1313c1dd
				 */
				id: string
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
					'application/json': components['schemas']['DeletePostSuccessfulResponseDTO']
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
	'get-account': {
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
				 * @description Location Id
				 * @example ve9EPM428h8vShlRW1KT
				 */
				locationId: string
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
					'application/json': components['schemas']['AccountsListResponseDTO']
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
	'delete-account': {
		parameters: {
			query?: {
				/**
				 * @description Company ID
				 * @example sdfdsfdsfEWEsdfsdsW32dd
				 */
				companyId?: string
				/**
				 * @description User ID
				 * @example sdfdsfdsfEWEsdfsdsW32dd
				 */
				userId?: string
			}
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/**
				 * @description Location Id
				 * @example ve9EPM428h8vShlRW1KT
				 */
				locationId: string
				/**
				 * @description Id
				 * @example 65fac446d599990d1313c1dd
				 */
				id: string
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
					'application/json': components['schemas']['LocationAndAccountDeleteResponseDTO']
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
	'start-facebook-oauth': {
		parameters: {
			query: {
				/**
				 * @description Account Location Id
				 * @example w37swmmLbA02zgqKPpxITe2
				 */
				locationId: string
				/**
				 * @description Facebook Account Id
				 * @example u37swmmLbA02zgqKPpxITe2
				 */
				userId: string
				/**
				 * @description Facebook Page
				 * @example integration
				 */
				page?: string
				/**
				 * @description Reconnect boolean as string
				 * @example true
				 */
				reconnect?: string
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
			/** @description Successful Response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content?: never
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
	'get-facebook-page-group': {
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
				 * @description Account Location Id
				 * @example w37swmmLbA02zgqKPpxITe2
				 */
				locationId: string
				/**
				 * @description Account Id
				 * @example w37swmmLbA02zgqKPpxITe
				 */
				accountId: string
			}
			cookie?: never
		}
		requestBody?: never
		responses: {
			/** @description Successful response, runs Facebook OAuth and redirects to application */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['GetFacebookAccountsResponseDTO']
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
	'attach-facebook-page-group': {
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
				 * @description Account Location Id
				 * @example w37swmmLbA02zgqKPpxITe2
				 */
				locationId: string
				/**
				 * @description Account Id
				 * @example w37swmmLbA02zgqKPpxITe
				 */
				accountId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['AttachFBAccountDTO']
			}
		}
		responses: {
			/** @description Successful response */
			201: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['SocialMediaFBAccountResponseDTO']
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
	'start-instagram-oauth': {
		parameters: {
			query: {
				/**
				 * @description Location Id
				 * @example w37swmmLbA02zgqKPpxITe2
				 */
				locationId: string
				/**
				 * @description User Id
				 * @example u37swmmLbA02zgqKPpxITe2
				 */
				userId: string
				/**
				 * @description Page
				 * @example integration
				 */
				page?: string
				/**
				 * @description Reconnect
				 * @example true
				 */
				reconnect?: string
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
			/** @description Successful Response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content?: never
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
	'get-instagram-page-group': {
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
				 * @description Account Location Id
				 * @example w37swmmLbA02zgqKPpxITe2
				 */
				locationId: string
				/**
				 * @description Account Id
				 * @example w37swmmLbA02zgqKPpxITe
				 */
				accountId: string
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
					'application/json': components['schemas']['GetInstagramAccountsResponseDTO']
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
	'attach-instagram-page-group': {
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
				 * @description Account Location Id
				 * @example w37swmmLbA02zgqKPpxITe2
				 */
				locationId: string
				/**
				 * @description Account Id
				 * @example w37swmmLbA02zgqKPpxITe
				 */
				accountId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['AttachIGAccountDTO']
			}
		}
		responses: {
			/** @description Successful response */
			201: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['SocialMediaInstagramAccountResponseDTO']
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
	'start-linkedin-oauth': {
		parameters: {
			query: {
				/**
				 * @description Location Id
				 * @example w37swmmLbA02zgqKPpxITe2
				 */
				locationId: string
				/**
				 * @description User Id
				 * @example u37swmmLbA02zgqKPpxITe2
				 */
				userId: string
				/**
				 * @description Page
				 * @example integration
				 */
				page?: string
				/**
				 * @description Reconnect
				 * @example integration
				 */
				reconnect?: string
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
			/** @description Successful Response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content?: never
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
	'get-linkedin-page-profile': {
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
				 * @description Account Location Id
				 * @example w37swmmLbA02zgqKPpxITe2
				 */
				locationId: string
				/**
				 * @description Account Id
				 * @example w37swmmLbA02zgqKPpxITe
				 */
				accountId: string
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
					'application/json': components['schemas']['GetLinkedInAccountsResponseDTO']
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
	'attach-linkedin-page-profile': {
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
				 * @description Account Location Id
				 * @example w37swmmLbA02zgqKPpxITe2
				 */
				locationId: string
				/**
				 * @description Account Id
				 * @example w37swmmLbA02zgqKPpxITe
				 */
				accountId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['AttachLinkedinAccountDTO']
			}
		}
		responses: {
			/** @description Successful response */
			201: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['SocialMediaLinkedInAccountResponseDTO']
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
	'start-twitter-oauth': {
		parameters: {
			query: {
				/**
				 * @description Location Id
				 * @example w37swmmLbA02zgqKPpxITe2
				 */
				locationId: string
				/**
				 * @description User Id
				 * @example u37swmmLbA02zgqKPpxITe2
				 */
				userId: string
				/**
				 * @description Page
				 * @example integration
				 */
				page?: string
				/**
				 * @description Reconnect
				 * @example true
				 */
				reconnect?: string
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
			/** @description Successful Response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content?: never
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
	'get-twitter-profile': {
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
				 * @description Account Location Id
				 * @example w37swmmLbA02zgqKPpxITe2
				 */
				locationId: string
				/**
				 * @description Account Id
				 * @example w37swmmLbA02zgqKPpxITe
				 */
				accountId: string
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
					'application/json': components['schemas']['GetTwitterAccountsResponseDTO']
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
	'attach-twitter-profile': {
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
				 * @description Account Location Id
				 * @example w37swmmLbA02zgqKPpxITe2
				 */
				locationId: string
				/**
				 * @description Account Id
				 * @example w37swmmLbA02zgqKPpxITe
				 */
				accountId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['AttachTwitterAccountDTO']
			}
		}
		responses: {
			/** @description Successful response */
			201: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['SocialMediaTwitterAccountResponseDTO']
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
	'get-upload-status': {
		parameters: {
			query?: {
				/** @example 1 */
				skip?: string
				/** @example 10 */
				limit?: string
				/** @example true */
				includeUsers?: string
				/**
				 * @description User ID
				 * @example sdfdsfdsfEWEsdfsdsW32dd
				 */
				userId?: string
			}
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/**
				 * @description Location Id
				 * @example ve9EPM428h8vShlRW1KT
				 */
				locationId: string
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
					'application/json': components['schemas']['GetUploadStatusResponseDTO']
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
	'upload-csv': {
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
				 * @description Location Id
				 * @example ve9EPM428h8vShlRW1KT
				 */
				locationId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'multipart/form-data': components['schemas']['UploadCSVDTO']
			}
		}
		responses: {
			/** @description Successful response */
			201: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UploadFileResponseDTO']
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
	'set-accounts': {
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
				 * @description Location Id
				 * @example ve9EPM428h8vShlRW1KT
				 */
				locationId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['SetAccountsDTO']
			}
		}
		responses: {
			/** @description Successful response */
			201: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['SetAccountsResponseDTO']
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
	'get-csv-post': {
		parameters: {
			query?: {
				/** @example 0 */
				skip?: string
				/** @example 10 */
				limit?: string
			}
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @example sdfdsfdsfEWEsdfsdsW32dd */
				locationId: string
				/**
				 * @description CSV Id
				 * @example 65f92e55cc884f0d0845e447
				 */
				id: string
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
					'application/json': components['schemas']['GetCsvPostResponseDTO']
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
	'delete-csv': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @example sdfdsfdsfEWEsdfsdsW32dd */
				locationId: string
				/**
				 * @description CSV Id
				 * @example 65f92e55cc884f0d0845e447
				 */
				id: string
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
					'application/json': components['schemas']['DeleteCsvResponseDTO']
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
	'start-csv-finalize': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @example sdfdsfdsfEWEsdfsdsW32dd */
				locationId: string
				/**
				 * @description CSV Id
				 * @example 65f92e55cc884f0d0845e447
				 */
				id: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['CSVDefaultDTO']
			}
		}
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['CsvPostStatusResponseDTO']
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
	'delete-csv-post': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @example sdfdsfdsfEWEsdfsdsW32dd */
				locationId: string
				/**
				 * @description CSV Post Id
				 * @example 65f92e55cc884f0d0845e447
				 */
				postId: string
				/**
				 * @description CSV Id
				 * @example 65f92e55cc884f0d0845e447
				 */
				csvId: string
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
					'application/json': components['schemas']['DeletePostResponseDTO']
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
	'start-tiktok-oauth': {
		parameters: {
			query: {
				/**
				 * @description Location Id
				 * @example w37swmmLbA02zgqKPpxITe2
				 */
				locationId: string
				/**
				 * @description User Id
				 * @example u37swmmLbA02zgqKPpxITe2
				 */
				userId: string
				/**
				 * @description Page
				 * @example integration
				 */
				page?: string
				/**
				 * @description Reconnect
				 * @example true
				 */
				reconnect?: string
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
			/** @description Successful Response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content?: never
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
	'get-tiktok-profile': {
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
				 * @description Account Location Id
				 * @example w37swmmLbA02zgqKPpxITe2
				 */
				locationId: string
				/**
				 * @description Account Id
				 * @example w37swmmLbA02zgqKPpxITe
				 */
				accountId: string
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
					'application/json': components['schemas']['GetTiktokAccountResponseDTO']
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
	'attach-tiktok-profile': {
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
				 * @description Account Location Id
				 * @example w37swmmLbA02zgqKPpxITe2
				 */
				locationId: string
				/**
				 * @description Account Id
				 * @example w37swmmLbA02zgqKPpxITe
				 */
				accountId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['AttachTiktokAccountDTO']
			}
		}
		responses: {
			/** @description Successful response */
			201: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['SocialMediaTiktokAccountResponseDTO']
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
	'start-tiktok-business-oauth': {
		parameters: {
			query: {
				/**
				 * @description Location Id
				 * @example w37swmmLbA02zgqKPpxITe2
				 */
				locationId: string
				/**
				 * @description User Id
				 * @example u37swmmLbA02zgqKPpxITe2
				 */
				userId: string
				/**
				 * @description Page
				 * @example integration
				 */
				page?: string
				/**
				 * @description Reconnect
				 * @example true
				 */
				reconnect?: string
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
			/** @description Successful Response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content?: never
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
	'get-tiktok-business-profile': {
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
				 * @description Account Location Id
				 * @example w37swmmLbA02zgqKPpxITe2
				 */
				locationId: string
				/**
				 * @description Account Id
				 * @example w37swmmLbA02zgqKPpxITe
				 */
				accountId: string
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
					'application/json': components['schemas']['GetTiktokBusinessAccountResponseDTO']
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
	'get-categories-location-id': {
		parameters: {
			query?: {
				/**
				 * @description Search text string
				 * @example test
				 */
				searchText?: string
				/**
				 * @description Limit
				 * @example 10
				 */
				limit?: string
				/**
				 * @description Skip
				 * @example 0
				 */
				skip?: string
			}
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/**
				 * @description Location Id
				 * @example ve9EPM428h8vShlRW1KT
				 */
				locationId: string
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
					'application/json': components['schemas']['GetByLocationIdResponseDTO']
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
	'get-categories-id': {
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
				 * @description Category Id
				 * @example 6284c43d519161e96cc09c13
				 */
				id: string
				/**
				 * @description Location Id
				 * @example 6284c43d519161e96cc09c13
				 */
				locationId: string
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
					'application/json': components['schemas']['GetByIdResponseDTO']
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
	'get-tags-location-id': {
		parameters: {
			query?: {
				/**
				 * @description Search text string
				 * @example test
				 */
				searchText?: string
				/**
				 * @description Limit
				 * @example 10
				 */
				limit?: string
				/**
				 * @description Skip
				 * @example 0
				 */
				skip?: string
			}
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/**
				 * @description Location Id
				 * @example ve9EPM428h8vShlRW1KT
				 */
				locationId: string
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
					'application/json': components['schemas']['GetTagsByLocationIdResponseDTO']
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
	'get-tags-by-ids': {
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
				 * @description Location Id
				 * @example ve9EPM428h8vShlRW1KT
				 */
				locationId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['UpdateTagDTO']
			}
		}
		responses: {
			/** @description Successful response */
			201: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['GetTagsByIdResponseDTO']
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
