export type paths = {
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
		 * @description Disable SaaS for locations for given locationIds
		 */
		post: operations['bulk-disable-saas']
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
		 *
		 */
		post: operations['enable-saas-location']
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
		 * @description Pause Sub account for given locationId
		 */
		post: operations['pause-location']
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
		 * @description Bulk update rebilling for given locationIds
		 */
		post: operations['update-rebilling']
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
export type components = {
	schemas: {
		BulkDisableSaasDto: {
			locationIds: string[]
		}
		EnableSaasDto: {
			companyId: string
			/**
			 * @description Agency subaccount used for payment provider integration(Required Only for SaaS V2)
			 * @example 1QDPY5FpU9DlKp7RQ8BXfywx
			 */
			contactId?: string
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
		PauseLocationDto: {
			companyId: string
			paused: boolean
		}
		UpdateRebillingDto: {
			config: Record<string, never>
			locationIds: string[]
			product: string
		}
		UpdateSubscriptionDto: {
			companyId: string
			customerId: string
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
	'bulk-disable-saas': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description Api channel */
				channel: 'OAUTH'
				/** @description Api source */
				source: 'INTEGRATION'
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
	'enable-saas-location': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description Api channel */
				channel: 'OAUTH'
				/** @description Api source */
				source: 'INTEGRATION'
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
				/** @description Api channel */
				channel: 'OAUTH'
				/** @description Api source */
				source: 'INTEGRATION'
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
				/** @description Api channel */
				channel: 'OAUTH'
				/** @description Api source */
				source: 'INTEGRATION'
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
	'update-rebilling': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description Api channel */
				channel: 'OAUTH'
				/** @description Api source */
				source: 'INTEGRATION'
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
				/** @description Api channel */
				channel: 'OAUTH'
				/** @description Api source */
				source: 'INTEGRATION'
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
