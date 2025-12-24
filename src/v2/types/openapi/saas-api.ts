export interface paths {
	'/saas-api/public-api/agency-plans/{companyId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get Agency Plans
		 * @deprecated
		 * @description Fetch all agency subscription plans for a given company ID
		 */
		get: operations['get-agency-plans-deprecated']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/saas-api/public-api/bulk-disable-saas/{companyId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Disable SaaS for locations
		 * @deprecated
		 * @description Disable SaaS for locations for given locationIds
		 */
		post: operations['bulk-disable-saas-deprecated']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/saas-api/public-api/bulk-enable-saas/{companyId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Bulk Enable SaaS
		 * @deprecated
		 * @description Enable SaaS mode for multiple locations with support for both SaaS v1 and v2
		 */
		post: operations['bulk-enable-saas-deprecated']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/saas-api/public-api/enable-saas/{locationId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Enable SaaS for Sub-Account (Formerly Location)
		 * @deprecated
		 * @description <div>
		 *                       <p>Enable SaaS for Sub-Account (Formerly Location) based on the data provided</p>
		 *                       <div>
		 *                         <span style= "display: inline-block;
		 *                                     width: 25px; height: 25px;
		 *                                     background-color: yellow;
		 *                                     color: black;
		 *                                     font-weight: bold;
		 *                                     font-size: 24px;
		 *                                     text-align: center;
		 *                                     line-height: 22px;
		 *                                     border: 2px solid black;
		 *                                     border-radius: 10%;
		 *                                     margin-right: 10px;">
		 *                                     !
		 *                           </span>
		 *                           <span>
		 *                             <strong>
		 *                               This feature is only available on Agency Pro ($497) plan.
		 *                             </strong>
		 *                           </span>
		 *                       </div>
		 *                     </div>
		 */
		post: operations['enable-saas-location-deprecated']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/saas-api/public-api/get-saas-subscription/{locationId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get Location Subscription Details
		 * @deprecated
		 * @description Fetch subscription details for a specific location from location metadata
		 */
		get: operations['get-location-subscription-deprecated']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/saas-api/public-api/locations': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get locations by stripeId with companyId
		 * @deprecated
		 * @description Get locations by stripeCustomerId or stripeSubscriptionId with companyId
		 */
		get: operations['locations-deprecated']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/saas-api/public-api/pause/{locationId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Pause location
		 * @deprecated
		 * @description Pause Sub account for given locationId
		 */
		post: operations['pause-location-deprecated']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/saas-api/public-api/saas-locations/{companyId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get SaaS Locations
		 * @deprecated
		 * @description Fetch all SaaS-activated locations for a company with pagination
		 */
		get: operations['get-saas-locations-deprecated']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/saas-api/public-api/saas-plan/{planId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get SaaS Plan
		 * @deprecated
		 * @description Fetch a specific SaaS plan by plan ID
		 */
		get: operations['get-saas-plan-deprecated']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/saas-api/public-api/update-rebilling/{companyId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Update Rebilling
		 * @deprecated
		 * @description Bulk update rebilling for given locationIds
		 */
		post: operations['update-rebilling-deprecated']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/saas-api/public-api/update-saas-subscription/{locationId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		/**
		 * Update SaaS subscription
		 * @deprecated
		 * @description Update SaaS subscription for given locationId and customerId
		 */
		put: operations['update-saas-subscription-deprecated']
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/saas/agency-plans/{companyId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get Agency Plans
		 * @description Fetch all agency subscription plans for a given company ID
		 */
		get: operations['get-agency-plans']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/saas/bulk-disable-saas/{companyId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Disable SaaS for locations
		 * @description Disable SaaS for locations for given locationIds
		 */
		post: operations['bulk-disable-saas']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/saas/bulk-enable-saas/{companyId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Bulk Enable SaaS
		 * @description Enable SaaS mode for multiple locations with support for both SaaS v1 and v2
		 */
		post: operations['bulk-enable-saas']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/saas/enable-saas/{locationId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Enable SaaS for Sub-Account (Formerly Location)
		 * @description <div>
		 *                       <p>Enable SaaS for Sub-Account (Formerly Location) based on the data provided</p>
		 *                       <div>
		 *                         <span style= "display: inline-block;
		 *                                     width: 25px; height: 25px;
		 *                                     background-color: yellow;
		 *                                     color: black;
		 *                                     font-weight: bold;
		 *                                     font-size: 24px;
		 *                                     text-align: center;
		 *                                     line-height: 22px;
		 *                                     border: 2px solid black;
		 *                                     border-radius: 10%;
		 *                                     margin-right: 10px;">
		 *                                     !
		 *                           </span>
		 *                           <span>
		 *                             <strong>
		 *                               This feature is only available on Agency Pro ($497) plan.
		 *                             </strong>
		 *                           </span>
		 *                       </div>
		 *                     </div>
		 */
		post: operations['enable-saas-location']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/saas/get-saas-subscription/{locationId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get Location Subscription Details
		 * @description Fetch subscription details for a specific location from location metadata
		 */
		get: operations['get-location-subscription']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/saas/locations': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get locations by stripeId with companyId
		 * @description Get locations by stripeCustomerId or stripeSubscriptionId with companyId
		 */
		get: operations['locations']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/saas/pause/{locationId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Pause location
		 * @description Pause Sub account for given locationId
		 */
		post: operations['pause-location']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/saas/saas-locations/{companyId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get SaaS Locations
		 * @description Fetch all SaaS-activated locations for a company with pagination
		 */
		get: operations['get-saas-locations']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/saas/saas-plan/{planId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get SaaS Plan
		 * @description Fetch a specific SaaS plan by plan ID
		 */
		get: operations['get-saas-plan']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/saas/update-rebilling/{companyId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Update Rebilling
		 * @description Bulk update rebilling for given locationIds
		 */
		post: operations['update-rebilling']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/saas/update-saas-subscription/{locationId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		/**
		 * Update SaaS subscription
		 * @description Update SaaS subscription for given locationId and customerId
		 */
		put: operations['generate-payment-link']
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
		AgencyPlanResponseDto: {
			/**
			 * @description Array of add-ons included in the plan
			 * @example [
			 *       "CONVERSATIONS_AI",
			 *       "CP_BRANDED_APP_49",
			 *       "WORDPRESS_V1"
			 *     ]
			 */
			addOns?: string[]
			/**
			 * @description Category ID for the plan
			 * @example 66911cdc98508ec2731979b9
			 */
			categoryId?: string
			/**
			 * @description Contact limit for the plan
			 * @example 50
			 */
			contactLimit?: number
			/**
			 * @description Creation timestamp
			 * @example 2024-07-31T07:54:41.885Z
			 */
			createdAt: string
			/**
			 * @description Description of the plan
			 * @example AED 1.5
			 */
			description: string
			/**
			 * @description Indicates if this is a SaaS V2 plan
			 * @example true
			 */
			isSaaSV2: boolean
			/**
			 * @description Unique identifier for the plan
			 * @example 66c4d36534f21f900dc2a265
			 */
			planId: string
			/**
			 * @description Level of the plan (0-4)
			 * @example 0
			 */
			planLevel: number
			/** @description Pricing information for the plan */
			prices: {
				/**
				 * @description Indicates if the price is active
				 * @example true
				 */
				active?: boolean
				/**
				 * @description Amount of the price
				 * @example 150
				 */
				amount?: number
				/**
				 * @description Billing interval for the plan
				 * @example month
				 * @enum {string}
				 */
				billingInterval?: 'month' | 'year'
				/**
				 * @description Currency of the price
				 * @example AED
				 */
				currency?: string
				/**
				 * @description ID of the price
				 * @example 66a9edbfcc6c505a22db7976
				 */
				id?: string
				/**
				 * @description Symbol of the price
				 * @example $
				 */
				symbol?: string
			}[]
			/**
			 * @description Product ID for the plan
			 * @example 66a9edbfcc6c5090bedb7974
			 */
			productId?: string
			/**
			 * @description Provider location ID
			 * @example r06mdj4OrrERzYDvsOdh
			 */
			providerLocationId?: string
			/**
			 * @description Array of SaaS products included in the plan
			 * @example [
			 *       "2-way-text-messaging",
			 *       "gmb-messaging",
			 *       "web-chat",
			 *       "reputation-management"
			 *     ]
			 */
			saasProducts: string[]
			/**
			 * @description Snapshot ID for the plan
			 * @example G8KmpIeLnZc7ZMoJoxDx
			 */
			snapshotId?: string
			/**
			 * @description Title of the plan
			 * @example AED 1.5 changed
			 */
			title: string
			/**
			 * @description Trial period in days
			 * @example 16
			 */
			trialPeriod: number
			/**
			 * @description Last update timestamp
			 * @example 2025-04-01T12:27:29.167Z
			 */
			updatedAt: string
			/**
			 * @description User limit for the plan
			 * @example 50
			 */
			userLimit?: number
		}
		BadRequestDTO: {
			/**
			 * @description Error message
			 * @example Bad Request
			 */
			message?: string
			/**
			 * @description Status code
			 * @example 400
			 */
			statusCode?: number
		}
		BulkDisableSaasDto: {
			/**
			 * @description Location IDs
			 * @example [
			 *       "locationId1",
			 *       "locationId2"
			 *     ]
			 */
			locationIds: string[]
		}
		BulkDisableSaasResponseDto: {
			/**
			 * @description Response data from the bulk disable SaaS operation
			 * @example {
			 *       "msg": "success"
			 *     }
			 */
			data: Record<string, never>
		}
		BulkEnableSaasActionPayloadDto: {
			/**
			 * @description Price ID for the SaaS plan
			 * @example price_1QDPY5FpU9DlKp7RQ8BXfywx
			 */
			priceId?: string
			/**
			 * @description Provider location ID
			 * @example r06mdj4OrrERzYDvsOdh
			 */
			providerLocationId?: string
			/**
			 * @description SaaS plan ID
			 * @example 66c4d36534f21f900dc2a265
			 */
			saasPlanId: string
			/**
			 * @description Stripe account ID
			 * @example acct_1QDPY5FpU9DlKp7RQ8BXfywx
			 */
			stripeAccountId?: string
		}
		BulkEnableSaasRequestDto: {
			/** @description Action payload for the bulk enable SaaS operation */
			actionPayload: components['schemas']['BulkEnableSaasActionPayloadDto']
			/**
			 * @description Indicates if the SaaS is V2
			 * @example true
			 */
			isSaaSV2: boolean
			/**
			 * @description Array of location IDs to enable SaaS for
			 * @example [
			 *       "locationId1",
			 *       "locationId2"
			 *     ]
			 */
			locationIds: string[]
		}
		BulkEnableSaasResponseDto: {
			/**
			 * @description URL for the bulk enable SaaS operation
			 * @example https://example.com/bulk-enable-saas
			 */
			bulkActionUrl?: string
			/**
			 * @description Message indicating the bulk enable SaaS operation
			 * @example Bulk enable SaaS operation completed successfully
			 */
			message: string
			/**
			 * @description Indicates if the bulk enable SaaS operation was successful
			 * @example true
			 */
			success: boolean
		}
		EnableSaasDto: {
			companyId: string
			/**
			 * @description Agency subaccount used for payment provider integration(Required Only for SaaS V2)
			 * @example 1QDPY5FpU9DlKp7RQ8BXfywx
			 */
			contactId?: string
			/**
			 * @description Description
			 * @example Description
			 */
			description?: string
			/**
			 * @description Email of the stripe customer(Required only for SaaS V1)
			 * @example john.doe@example.com
			 */
			email?: string
			/**
			 * @description Denotes if it is a saas v2 or v1 sub-account
			 * @example true
			 */
			isSaaSV2: boolean
			/**
			 * @description Name of the stripe customer(Required only for SaaS V1)
			 * @example John Doe
			 */
			name?: string
			/**
			 * @description Required only while pre-configuring saas subscription
			 * @example price_1QDPY5FpU9DlKp7RQ8BXfywx
			 */
			priceId?: string
			/**
			 * @description Agency Subaccount ID
			 * @example r06mdj4OrrERzYDvsOdh
			 */
			providerLocationId?: string
			/**
			 * @description Required only while pre-configuring saas subscription
			 * @example 1QDPY5FpU9DlKp7RQ8BXfywx
			 */
			saasPlanId?: string
			/**
			 * @description Stripe account id(Required only for SaaS V1)
			 * @example acct_1QDPY5FpU9DlKp7RQ8BXfywx
			 */
			stripeAccountId?: string
			/**
			 * @description Stripe customer id if exists(Required only for SaaS V1)
			 * @example cus_1QDPY5FpU9DlKp7RQ8BXfywx
			 */
			stripeCustomerId?: string
		}
		EnableSaasResponseDto: {
			/**
			 * @description Response data from the enable SaaS operation
			 * @example {
			 *       "customer_id": "cus_1QDPY5FpU9DlKp7RQ8BXfywx",
			 *       "ok": true,
			 *       "paymentMethodAdded": true
			 *     }
			 */
			data: Record<string, never>
		}
		GetSaasLocationsResponseDto: {
			/** @description Array of SaaS locations */
			locations: components['schemas']['SaasLocationDto'][]
			pagination: {
				/**
				 * @description Indicates if there is a next page
				 * @example true
				 */
				hasNext?: boolean
				/**
				 * @description Indicates if there is a previous page
				 * @example true
				 */
				hasPrev?: boolean
				/**
				 * @description Number of items per page
				 * @example 10
				 */
				limit?: number
				/**
				 * @description Page number
				 * @example 1
				 */
				page?: number
				/**
				 * @description Total number of items
				 * @example 100
				 */
				total?: number
				/**
				 * @description Total number of pages
				 * @example 10
				 */
				totalPages?: number
			}
		}
		InternalServerErrorDTO: {
			/**
			 * @description Error message
			 * @example Internal Server Error
			 */
			message?: string
			/**
			 * @description Status code
			 * @example 500
			 */
			statusCode?: number
		}
		LocationSubscriptionResponseDto: {
			/**
			 * @description Company ID
			 * @example companyId1
			 */
			companyId: string
			/**
			 * @description Customer ID
			 * @example customerId1
			 */
			customerId?: string
			/**
			 * @description Indicates if the SaaS is V2
			 * @example true
			 */
			isSaaSV2: boolean
			/**
			 * @description Location ID
			 * @example locationId1
			 */
			locationId: string
			/**
			 * @description Price ID
			 * @example priceId1
			 */
			priceId?: string
			/**
			 * @description Product ID
			 * @example productId1
			 */
			productId?: string
			/**
			 * @description SaaS mode
			 * @example saasV2
			 */
			saasMode?: string
			/**
			 * @description SaaS plan ID
			 * @example saasPlanId1
			 */
			saasPlanId?: string
			/**
			 * @description Subscription ID
			 * @example subscriptionId1
			 */
			subscriptionId?: string
			/**
			 * @description Subscription status
			 * @example active
			 */
			subscriptionStatus?: string
		}
		PauseLocationDto: {
			/**
			 * @description Company ID
			 * @example companyId1
			 */
			companyId: string
			/**
			 * @description Paused
			 * @example true
			 */
			paused: boolean
		}
		ResourceNotFoundDTO: {
			/**
			 * @description Error message
			 * @example [
			 *       "Contact not found",
			 *       "User not found",
			 *       "Group not found",
			 *       "Channel not found"
			 *     ]
			 */
			message?: string
			/**
			 * @description Status code
			 * @example 404
			 */
			statusCode?: number
		}
		SaasLocationDto: {
			/**
			 * @description Company ID
			 * @example companyId1
			 */
			companyId: string
			/**
			 * @description Customer ID
			 * @example customerId1
			 */
			customerId?: string
			/**
			 * @description Email
			 * @example john.doe@example.com
			 */
			email?: string
			/**
			 * @description Indicates if the SaaS is V2
			 * @example true
			 */
			isSaaSV2?: boolean
			/**
			 * @description Location ID
			 * @example locationId1
			 */
			locationId: string
			/**
			 * @description Name
			 * @example John Doe
			 */
			name?: string
			/**
			 * @description Provider location ID
			 * @example r06mdj4OrrERzYDvsOdh
			 */
			providerLocationId?: string
			/**
			 * @description SaaS mode
			 * @example saasV2
			 */
			saasMode: string
			/**
			 * @description Subscription ID
			 * @example subscriptionId1
			 */
			subscriptionId: string
			/**
			 * @description Subscription information
			 * @example {
			 *       "priceId": "price_1QDPY5FpU9DlKp7RQ8BXfywx",
			 *       "saasPlanId": "66c4d36534f21f900dc2a265",
			 *       "stripeProductId": "prod_1QDPY5FpU9DlKp7RQ8BXfywx",
			 *       "subscriptionStatus": "active"
			 *     }
			 */
			subscriptionInfo?: Record<string, never>
		}
		SaasPlanResponseDto: {
			/**
			 * @description Array of add-ons included in the plan
			 * @example [
			 *       "YEXT_V2",
			 *       "WHATSAPP_V1",
			 *       "WORDPRESS_V1",
			 *       "AI_EMPLOYEE",
			 *       "Ad_Publishing_Connect_Your_BM"
			 *     ]
			 */
			addOns?: string[]
			/**
			 * @description Category ID for the plan
			 * @example 66911cdc98508ec2731979b9
			 */
			categoryId?: string
			/**
			 * @description Company ID associated with the SaaS plan
			 * @example 66c4d36534f21f900dc2a265
			 */
			companyId: string
			/**
			 * @description Contact limit for the plan
			 * @example 50
			 */
			contactLimit?: number
			/**
			 * Format: date-time
			 * @description Creation timestamp
			 * @example 2024-07-31T07:54:41.885Z
			 */
			createdAt: string
			/**
			 * @description Description of the SaaS plan
			 * @example AED 1.5
			 */
			description: string
			/**
			 * @description Indicates if this is a SaaS V2 plan
			 * @example true
			 */
			isSaaSV2: boolean
			/**
			 * @description Unique identifier for the SaaS plan
			 * @example 66c4d36534f21f900dc2a265
			 */
			planId: string
			/**
			 * @description Level of the plan (0-4)
			 * @example 0
			 */
			planLevel: number
			/** @description Prices for the plan */
			prices: {
				/** @example true */
				active?: boolean
				/** @example 150 */
				amount?: number
				/**
				 * @example month
				 * @enum {string}
				 */
				billingInterval?: 'month' | 'year'
				/** @example AED */
				currency?: string
				/** @example 66a9edbfcc6c505a22db7976 */
				id?: string
				/** @example $ */
				symbol?: string
			}[]
			/**
			 * @description Product ID for the plan
			 * @example 66a9edbfcc6c5090bedb7974
			 */
			productId?: string
			/**
			 * @description Provider location ID
			 * @example r06mdj4OrrERzYDvsOdh
			 */
			providerLocationId?: string
			/**
			 * @description Array of SaaS products included in the plan
			 * @example [
			 *       "2-way-text-messaging",
			 *       "gmb-messaging",
			 *       "web-chat"
			 *     ]
			 */
			saasProducts: string[]
			/**
			 * @description Setup fee for the plan
			 * @example 100
			 */
			setupFee?: number
			/**
			 * @description Snapshot ID for the plan
			 * @example G8KmpIeLnZc7ZMoJoxDx
			 */
			snapshotId?: string
			/**
			 * @description Title of the SaaS plan
			 * @example AED 1.5 changed
			 */
			title: string
			/**
			 * @description Trial period in days
			 * @example 16
			 */
			trialPeriod: number
			/**
			 * Format: date-time
			 * @description Last update timestamp
			 * @example 2025-04-01T12:27:29.167Z
			 */
			updatedAt: string
			/**
			 * @description User limit for the plan
			 * @example 50
			 */
			userLimit?: number
		}
		UnauthorizedDTO: {
			/**
			 * @description Error message
			 * @example Unauthorized
			 */
			error?: string
			/**
			 * @description Error message
			 * @example Invalid token: access token is invalid
			 */
			message?: string
			/**
			 * @description Status code
			 * @example 401
			 */
			statusCode?: number
		}
		UpdateRebillingDto: {
			/** @description Configuration for rebilling settings */
			config: {
				/**
				 * @description Enable the rebilling for the locations
				 * @example true
				 */
				enabled?: boolean
				/**
				 * @description Additional value to be added in terms of percentage. For example, if the product price is $100 and the markup is 5, the amount charged to will be $105.
				 * @example 5
				 */
				markup?: number
				/**
				 * @description Enable the product for the locations
				 * @example true
				 */
				optIn?: boolean
			}
			/**
			 * @description Array of location IDs to update rebilling for
			 * @example [
			 *       "zzyG7A4x6bRJl5SlhQhH",
			 *       "Vygq7VgXCDfg3xnl8TBR"
			 *     ]
			 */
			locationIds: string[]
			/**
			 * @description The product to update rebilling for
			 * @example contentAI
			 * @enum {string}
			 */
			product:
				| 'contentAI'
				| 'workflow_premium_actions'
				| 'workflow_ai'
				| 'conversationAI'
				| 'EmailNotification'
				| 'whatsApp'
				| 'reviewsAI'
				| 'VERIFIED_CALLER_ID'
				| 'WALLET_SALES_TAX'
				| 'NOTIFICATION_SMS'
				| 'EmailSmtp'
				| 'EmailVerification'
				| 'autoCompleteAddress'
				| 'funnelAI'
				| 'domainPurchase'
				| 'Phone'
				| 'Email'
		}
		UpdateRebillingResponseDto: {
			/**
			 * @description Indicates if the rebilling update was successful
			 * @example true
			 */
			success: boolean
		}
		UpdateSubscriptionDto: {
			/**
			 * @description Company ID
			 * @example companyId1
			 */
			companyId: string
			/**
			 * @description Customer ID
			 * @example cus_1QDPY5FpU9DlKp7RQ8BXfywx
			 */
			customerId: string
			/**
			 * @description Subscription ID
			 * @example sub_1QDPY5FpU9DlKp7RQ8BXfywx
			 */
			subscriptionId: string
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
	'get-agency-plans-deprecated': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				/**
				 * @description Company ID to get agency plans for
				 * @example 5DP4iH6HLkQsiKESj6rh
				 */
				companyId: string
			}
			cookie?: never
		}
		requestBody?: never
		responses: {
			/** @description Agency plans retrieved successfully */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['AgencyPlanResponseDto'][]
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
			/** @description Resource not found */
			404: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['ResourceNotFoundDTO']
				}
			}
			/** @description Internal server error */
			500: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['InternalServerErrorDTO']
				}
			}
		}
	}
	'bulk-disable-saas-deprecated': {
		parameters: {
			query?: never
			header: {
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				/**
				 * @description Company ID to disable SaaS for
				 * @example 5DP4iH6HLkQsiKESj6rh
				 */
				companyId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['BulkDisableSaasDto']
			}
		}
		responses: {
			/** @description SaaS disabled successfully for locations */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BulkDisableSaasResponseDto']
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
			/** @description Resource not found */
			404: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['ResourceNotFoundDTO']
				}
			}
			/** @description Internal server error */
			500: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['InternalServerErrorDTO']
				}
			}
		}
	}
	'bulk-enable-saas-deprecated': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				/**
				 * @description Company ID to enable SaaS for
				 * @example 5DP4iH6HLkQsiKESj6rh
				 */
				companyId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['BulkEnableSaasRequestDto']
			}
		}
		responses: {
			/** @description Bulk SaaS enable operation completed successfully */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BulkEnableSaasResponseDto']
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
			/** @description Resource not found */
			404: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['ResourceNotFoundDTO']
				}
			}
			/** @description Internal server error */
			500: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['InternalServerErrorDTO']
				}
			}
		}
	}
	'enable-saas-location-deprecated': {
		parameters: {
			query?: never
			header: {
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				/**
				 * @description Location ID to enable SaaS for
				 * @example AUKAtFVo0lWezBsBQ3FE
				 */
				locationId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['EnableSaasDto']
			}
		}
		responses: {
			/** @description SaaS enabled successfully for location */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['EnableSaasResponseDto']
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
			/** @description Resource not found */
			404: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['ResourceNotFoundDTO']
				}
			}
			/** @description Internal server error */
			500: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['InternalServerErrorDTO']
				}
			}
		}
	}
	'get-location-subscription-deprecated': {
		parameters: {
			query: {
				/**
				 * @description Company ID to filter subscription details
				 * @example 5DP4iH6HLkQsiKESj6rh
				 */
				companyId: string
			}
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				/**
				 * @description Location ID to get subscription details for
				 * @example AUKAtFVo0lWezBsBQ3FE
				 */
				locationId: string
			}
			cookie?: never
		}
		requestBody?: never
		responses: {
			/** @description Location subscription details retrieved successfully */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['LocationSubscriptionResponseDto']
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
			/** @description Resource not found */
			404: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['ResourceNotFoundDTO']
				}
			}
			/** @description Internal server error */
			500: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['InternalServerErrorDTO']
				}
			}
		}
	}
	'locations-deprecated': {
		parameters: {
			query: {
				/**
				 * @description Company ID to filter locations
				 * @example 5DP4iH6HLkQsiKESj6rh
				 */
				companyId: string
				/**
				 * @description Stripe customer ID to find locations for
				 * @example cus_OD2oBjRfKEF6FV
				 */
				customerId?: string
				/**
				 * @description Stripe subscription ID to find locations for
				 * @example sub_1NVqlLByVlfITvRXgirIdpyc
				 */
				subscriptionId?: string
			}
			header: {
				/** @description API Version */
				Version: '2021-04-15'
			}
			path?: never
			cookie?: never
		}
		requestBody?: never
		responses: {
			/** @description Locations retrieved successfully */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': string[]
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
			/** @description Resource not found */
			404: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['ResourceNotFoundDTO']
				}
			}
			/** @description Internal server error */
			500: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['InternalServerErrorDTO']
				}
			}
		}
	}
	'pause-location-deprecated': {
		parameters: {
			query?: never
			header: {
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				/**
				 * @description Location ID to pause/unpause
				 * @example AUKAtFVo0lWezBsBQ3FE
				 */
				locationId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['PauseLocationDto']
			}
		}
		responses: {
			/** @description Location paused/unpaused successfully */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': boolean
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
			/** @description Resource not found */
			404: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['ResourceNotFoundDTO']
				}
			}
			/** @description Internal server error */
			500: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['InternalServerErrorDTO']
				}
			}
		}
	}
	'get-saas-locations-deprecated': {
		parameters: {
			query?: {
				/**
				 * @description Page number for pagination
				 * @example 1
				 */
				page?: number
			}
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				/**
				 * @description Company ID to get SaaS locations for
				 * @example 5DP4iH6HLkQsiKESj6rh
				 */
				companyId: string
			}
			cookie?: never
		}
		requestBody?: never
		responses: {
			/** @description SaaS locations retrieved successfully */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['GetSaasLocationsResponseDto']
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
			/** @description Resource not found */
			404: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['ResourceNotFoundDTO']
				}
			}
			/** @description Internal server error */
			500: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['InternalServerErrorDTO']
				}
			}
		}
	}
	'get-saas-plan-deprecated': {
		parameters: {
			query: {
				/**
				 * @description Company ID to filter SaaS plan
				 * @example 5DP4iH6HLkQsiKESj6rh
				 */
				companyId: string
			}
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				/**
				 * @description Plan ID to get SaaS plan details for
				 * @example 66c4d36534f21f900dc2a265
				 */
				planId: string
			}
			cookie?: never
		}
		requestBody?: never
		responses: {
			/** @description SaaS plan retrieved successfully */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['SaasPlanResponseDto']
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
			/** @description Resource not found */
			404: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['ResourceNotFoundDTO']
				}
			}
			/** @description Internal server error */
			500: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['InternalServerErrorDTO']
				}
			}
		}
	}
	'update-rebilling-deprecated': {
		parameters: {
			query?: never
			header: {
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				/**
				 * @description Company ID to update rebilling for
				 * @example 5DP4iH6HLkQsiKESj6rh
				 */
				companyId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['UpdateRebillingDto']
			}
		}
		responses: {
			/** @description Rebilling updated successfully */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UpdateRebillingResponseDto']
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
			/** @description Resource not found */
			404: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['ResourceNotFoundDTO']
				}
			}
			/** @description Internal server error */
			500: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['InternalServerErrorDTO']
				}
			}
		}
	}
	'update-saas-subscription-deprecated': {
		parameters: {
			query?: never
			header: {
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				/**
				 * @description Location ID to update subscription for
				 * @example AUKAtFVo0lWezBsBQ3FE
				 */
				locationId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['UpdateSubscriptionDto']
			}
		}
		responses: {
			/** @description SaaS subscription updated successfully */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': string
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
			/** @description Resource not found */
			404: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['ResourceNotFoundDTO']
				}
			}
			/** @description Internal server error */
			500: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['InternalServerErrorDTO']
				}
			}
		}
	}
	'get-agency-plans': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				companyId: string
			}
			cookie?: never
		}
		requestBody?: never
		responses: {
			200: {
				headers: {
					[name: string]: unknown
				}
				content?: never
			}
		}
	}
	'bulk-disable-saas': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				companyId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['BulkDisableSaasDto']
			}
		}
		responses: {
			201: {
				headers: {
					[name: string]: unknown
				}
				content?: never
			}
		}
	}
	'bulk-enable-saas': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				companyId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['BulkEnableSaasRequestDto']
			}
		}
		responses: {
			201: {
				headers: {
					[name: string]: unknown
				}
				content?: never
			}
		}
	}
	'enable-saas-location': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				locationId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['EnableSaasDto']
			}
		}
		responses: {
			201: {
				headers: {
					[name: string]: unknown
				}
				content?: never
			}
		}
	}
	'get-location-subscription': {
		parameters: {
			query: {
				companyId: string
			}
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				locationId: string
			}
			cookie?: never
		}
		requestBody?: never
		responses: {
			200: {
				headers: {
					[name: string]: unknown
				}
				content?: never
			}
		}
	}
	locations: {
		parameters: {
			query: {
				companyId: string
				customerId: string
				subscriptionId: string
			}
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path?: never
			cookie?: never
		}
		requestBody?: never
		responses: {
			200: {
				headers: {
					[name: string]: unknown
				}
				content?: never
			}
		}
	}
	'pause-location': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				locationId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['PauseLocationDto']
			}
		}
		responses: {
			201: {
				headers: {
					[name: string]: unknown
				}
				content?: never
			}
		}
	}
	'get-saas-locations': {
		parameters: {
			query: {
				page: number
			}
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				companyId: string
			}
			cookie?: never
		}
		requestBody?: never
		responses: {
			200: {
				headers: {
					[name: string]: unknown
				}
				content?: never
			}
		}
	}
	'get-saas-plan': {
		parameters: {
			query: {
				companyId: string
			}
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				planId: string
			}
			cookie?: never
		}
		requestBody?: never
		responses: {
			200: {
				headers: {
					[name: string]: unknown
				}
				content?: never
			}
		}
	}
	'update-rebilling': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				companyId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['UpdateRebillingDto']
			}
		}
		responses: {
			201: {
				headers: {
					[name: string]: unknown
				}
				content?: never
			}
		}
	}
	'generate-payment-link': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				locationId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['UpdateSubscriptionDto']
			}
		}
		responses: {
			200: {
				headers: {
					[name: string]: unknown
				}
				content?: never
			}
		}
	}
}
