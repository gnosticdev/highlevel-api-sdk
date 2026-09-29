export interface paths {
	'/affiliate-manager/{locationId}/affiliates': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * List Affiliates
		 * @description Retrieve the list of affiliates for a location.
		 */
		get: operations['list-affiliates']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/affiliate-manager/{locationId}/affiliates/{affiliateId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get Affiliate
		 * @description Retrieve a single affiliate by id for a location.
		 */
		get: operations['get-affiliate']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/affiliate-manager/{locationId}/commissions': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * List Commissions
		 * @description Retrieve the list of commissions for a location.
		 */
		get: operations['list-commissions']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/affiliate-manager/{locationId}/payouts': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * List Payouts
		 * @description Retrieve the list of payouts for a location.
		 */
		get: operations['list-payouts']
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
		AffiliateListMetaResponseDto: {
			/**
			 * @description Total affiliates matching the applied filters
			 * @example 42
			 */
			count: number
		}
		BadRequestDTO: {
			/** @example Bad Request */
			message?: string
			/** @example 400 */
			statusCode?: number
		}
		CommissionAffiliateResponseDto: {
			/**
			 * @description Affiliate id
			 * @example 6385d230f6d19db03eef6fb2
			 */
			_id?: string
			/**
			 * @description Affiliate email
			 * @example affiliate@example.com
			 */
			email?: string
			/**
			 * @description Affiliate display name
			 * @example John Doe
			 */
			name?: string
		}
		CommissionCampaignResponseDto: {
			/**
			 * @description Campaign id
			 * @example 6385d230f6d19db03eef6fb2
			 */
			id?: string
			/**
			 * @description Whether the campaign is in live mode
			 * @example true
			 */
			liveMode?: boolean
			/**
			 * @description Campaign name
			 * @example Summer Promo
			 */
			name?: string
		}
		CommissionCustomerResponseDto: {
			/**
			 * @description Customer id
			 * @example 6385d230f6d19db03eef6fb2
			 */
			_id?: string
			/**
			 * @description Customer email
			 * @example john@example.com
			 */
			email?: string
			/**
			 * @description Customer first name
			 * @example John
			 */
			firstName?: string
			/**
			 * @description Customer last name
			 * @example Doe
			 */
			lastName?: string
			/**
			 * @description Customer type
			 * @example customer
			 */
			type?: string
		}
		CommissionListItemResponseDto: {
			/**
			 * @description Commission id
			 * @example 6385d230f6d19db03eef6fb2
			 */
			_id: string
			/** @description Affiliate details */
			affiliate?: components['schemas']['CommissionAffiliateResponseDto']
			/**
			 * @description Affiliate id
			 * @example 6385d230f6d19db03eef6fb2
			 */
			affiliateId?: string
			/**
			 * @description Base amount
			 * @example 100
			 */
			amount?: number
			/** @description Campaign details */
			campaign?: components['schemas']['CommissionCampaignResponseDto']
			/**
			 * @description Campaign name
			 * @example Summer Promo
			 */
			campaignName?: string
			/**
			 * @description Commission percentage or value
			 * @example 25
			 */
			commission?: number
			/**
			 * @description Commission amount
			 * @example 25
			 */
			commissionAmount?: number
			/**
			 * @description Commission type
			 * @example percentage
			 */
			commissionType?: string
			/**
			 * @description Created at
			 * @example 2024-06-16T00:00:00.000Z
			 */
			createdAt?: string
			/**
			 * @description Currency
			 * @example USD
			 */
			currency?: string
			/** @description Customer details */
			customer?: components['schemas']['CommissionCustomerResponseDto']
			/**
			 * @description Due date
			 * @example 2024-06-30T00:00:00.000Z
			 */
			dueAt?: string
			/**
			 * @description Event id
			 * @example evt_123
			 */
			eventId?: string
			/**
			 * @description Whether the item is a trial commission
			 * @example false
			 */
			isTrial?: boolean
			/**
			 * @description Whether the commission is in live mode
			 * @example true
			 */
			liveMode?: boolean
			/**
			 * @description Payout id
			 * @example 6385d230f6d19db03eef6fb2
			 */
			payoutId?: string
			/**
			 * @description Product commission amount
			 * @example 25
			 */
			productCommission?: number
			/**
			 * @description Product id
			 * @example 6385d230f6d19db03eef6fb2
			 */
			productId?: string
			/**
			 * @description Product name
			 * @example Basic Plan
			 */
			productName?: string
			/**
			 * @description Quantity
			 * @example 1
			 */
			qty?: number
			/**
			 * @description Commission status
			 * @example pending
			 */
			status?: string
			/**
			 * @description Commission tier
			 * @example 1
			 */
			tier?: number
			/**
			 * @description Transaction time
			 * @example 2024-06-16T00:00:00.000Z
			 */
			transactionAt?: string
			/**
			 * @description Transaction id
			 * @example txn_123
			 */
			transactionId?: string
			/**
			 * @description Unit discount
			 * @example 5
			 */
			unitDiscount?: number
		}
		CommissionListMetaResponseDto: {
			/**
			 * @description Total commissions matching the filters
			 * @example 42
			 */
			count: number
		}
		GetAffiliateResponseDto: {
			/**
			 * @description Affiliate id
			 * @example 63d147176c5bbc30e9e091a4
			 */
			_id: string
			/**
			 * @description Whether the affiliate is active
			 * @example true
			 */
			active?: boolean
			/**
			 * @description Affiliate address
			 * @example 123 Main St
			 */
			address?: string
			/**
			 * @description Affiliate avatar URL
			 * @example https://example.com/avatar.png
			 */
			avatar?: string
			/**
			 * @description Campaign ids
			 * @example [
			 *       "650173614761b33c46d33b19"
			 *     ]
			 */
			campaignIds?: string[]
			/**
			 * @description Click count
			 * @example 100
			 */
			clickCount?: number
			/**
			 * @description Contact id associated with the affiliate
			 * @example ve9EPM428h8vShlRW1KT
			 */
			contactId?: string
			/**
			 * @description Created at timestamp
			 * @example 2024-06-16T00:00:00.000Z
			 */
			createdAt?: string
			/** @description Created by audit info */
			createdBy?: Record<string, never>
			/**
			 * @description Currency code
			 * @example USD
			 */
			currency?: string
			/**
			 * @description Customer count
			 * @example 15
			 */
			customer?: number
			/**
			 * @description Whether the affiliate is deleted
			 * @example false
			 */
			deleted?: boolean
			/**
			 * @description Dropped customer count
			 * @example 2
			 */
			droppedCustomer?: number
			/**
			 * @description Affiliate email
			 * @example john.doe@example.com
			 */
			email: string
			/**
			 * @description Facebook URL
			 * @example https://facebook.com/johndoe
			 */
			facebookUrl?: string
			/**
			 * @description Affiliate first name
			 * @example John
			 */
			firstName?: string
			/**
			 * @description Instagram URL
			 * @example https://instagram.com/johndoe
			 */
			instagramUrl?: string
			/**
			 * @description Affiliate last name
			 * @example Doe
			 */
			lastName?: string
			/** @description Last updated by audit info */
			lastUpdatedBy?: Record<string, never>
			/**
			 * @description Lead count
			 * @example 5
			 */
			lead?: number
			/**
			 * @description LinkedIn URL
			 * @example https://linkedin.com/in/johndoe
			 */
			linkedInUrl?: string
			/**
			 * @description Location id
			 * @example ve9EPM428h8vShlRW1KT
			 */
			locationId: string
			/**
			 * @description Owned amount
			 * @example 750
			 */
			owned?: number
			/**
			 * @description Paid amount
			 * @example 500
			 */
			paid?: number
			/**
			 * @description Affiliate phone number
			 * @example +1 888 888-8888
			 */
			phone?: string
			/**
			 * @description Affiliate revenue
			 * @example 1250.5
			 */
			revenue?: number
			/**
			 * @description Twitter URL
			 * @example https://twitter.com/johndoe
			 */
			twitterUrl?: string
			/**
			 * @description Updated at timestamp
			 * @example 2024-06-16T00:00:00.000Z
			 */
			updatedAt?: string
			/**
			 * @description VAT ID
			 * @example VAT123
			 */
			vatId?: string
			/** @description W8 form URL */
			w8Form?: string
			/** @description W9 form URL */
			w9Form?: string
			/**
			 * @description Website URL
			 * @example https://example.com
			 */
			websiteUrl?: string
			/**
			 * @description YouTube URL
			 * @example https://youtube.com/channel
			 */
			youtubeUrl?: string
		}
		GetCommissionListResponseDto: {
			/** @description Commission list */
			commissions: components['schemas']['CommissionListItemResponseDto'][]
			/** @description Pagination metadata */
			meta?: components['schemas']['CommissionListMetaResponseDto']
		}
		GetPayoutListResponseDto: {
			/** @description Pagination metadata */
			meta?: components['schemas']['PayoutListMetaResponseDto']
			/** @description Payout list */
			payouts: components['schemas']['PayoutListItemResponseDto'][]
		}
		ListAffiliatesResponseDto: {
			/** @description Affiliate list */
			affiliates: components['schemas']['OAuthAffiliateListItemResponseDto'][]
			/** @description Pagination metadata */
			meta: components['schemas']['AffiliateListMetaResponseDto']
		}
		OAuthAffiliateListItemResponseDto: {
			/**
			 * @description Affiliate id
			 * @example 63d147176c5bbc30e9e091a4
			 */
			_id: string
			/**
			 * @description Whether the affiliate is active
			 * @example true
			 */
			active?: boolean
			/**
			 * @description Affiliate address
			 * @example 123 Main St
			 */
			address?: string
			/**
			 * @description Affiliate avatar URL
			 * @example https://example.com/avatar.png
			 */
			avatar?: string
			/**
			 * @description Campaign ids
			 * @example [
			 *       "650173614761b33c46d33b19"
			 *     ]
			 */
			campaignIds?: string[]
			/**
			 * @description Click count
			 * @example 100
			 */
			clickCount?: number
			/**
			 * @description Contact id associated with the affiliate
			 * @example ve9EPM428h8vShlRW1KT
			 */
			contactId?: string
			/**
			 * @description Created at timestamp
			 * @example 2024-06-16T00:00:00.000Z
			 */
			createdAt?: string
			/** @description Created by audit info */
			createdBy?: Record<string, never>
			/**
			 * @description Currency code
			 * @example USD
			 */
			currency?: string
			/**
			 * @description Customer count
			 * @example 15
			 */
			customer?: number
			/**
			 * @description Whether the affiliate is deleted
			 * @example false
			 */
			deleted?: boolean
			/**
			 * @description Dropped customer count
			 * @example 2
			 */
			droppedCustomer?: number
			/**
			 * @description Affiliate email
			 * @example john.doe@example.com
			 */
			email: string
			/**
			 * @description Facebook URL
			 * @example https://facebook.com/johndoe
			 */
			facebookUrl?: string
			/**
			 * @description Affiliate first name
			 * @example John
			 */
			firstName?: string
			/**
			 * @description Instagram URL
			 * @example https://instagram.com/johndoe
			 */
			instagramUrl?: string
			/**
			 * @description Affiliate last name
			 * @example Doe
			 */
			lastName?: string
			/** @description Last updated by audit info */
			lastUpdatedBy?: Record<string, never>
			/**
			 * @description Lead count
			 * @example 5
			 */
			lead?: number
			/**
			 * @description LinkedIn URL
			 * @example https://linkedin.com/in/johndoe
			 */
			linkedInUrl?: string
			/**
			 * @description Location id
			 * @example ve9EPM428h8vShlRW1KT
			 */
			locationId: string
			/**
			 * @description Owned amount
			 * @example 750
			 */
			owned?: number
			/**
			 * @description Paid amount
			 * @example 500
			 */
			paid?: number
			/**
			 * @description Affiliate phone number
			 * @example +1 888 888-8888
			 */
			phone?: string
			/**
			 * @description Affiliate revenue
			 * @example 1250.5
			 */
			revenue?: number
			/**
			 * @description Twitter URL
			 * @example https://twitter.com/johndoe
			 */
			twitterUrl?: string
			/**
			 * @description Updated at timestamp
			 * @example 2024-06-16T00:00:00.000Z
			 */
			updatedAt?: string
			/**
			 * @description VAT ID
			 * @example VAT123
			 */
			vatId?: string
			/** @description W8 form URL */
			w8Form?: string
			/** @description W9 form URL */
			w9Form?: string
			/**
			 * @description Website URL
			 * @example https://example.com
			 */
			websiteUrl?: string
			/**
			 * @description YouTube URL
			 * @example https://youtube.com/channel
			 */
			youtubeUrl?: string
		}
		PayoutListItemResponseDto: {
			/**
			 * @description Payout id
			 * @example 65df04201e428a0c5ebb6571
			 */
			_id: string
			/** @description Affiliate details */
			affiliate?: components['schemas']['OAuthAffiliateListItemResponseDto']
			/**
			 * @description Affiliate email
			 * @example john.doe@example.com
			 */
			affiliateEmail?: string
			/**
			 * @description Affiliate id
			 * @example 65df04201e428a0c5ebb6572
			 */
			affiliateId: string
			/**
			 * @description Affiliate display name
			 * @example John Doe
			 */
			affiliateName?: string
			/**
			 * @description Alternate id
			 * @example alt_123
			 */
			altId?: string
			/**
			 * @description Payout amount
			 * @example 150
			 */
			amount: number
			/**
			 * @description Campaign name
			 * @example Summer Promo
			 */
			campaign?: string
			/**
			 * @description Campaign id
			 * @example 65df04201e428a0c5ebb6573
			 */
			campaignId?: string
			/**
			 * @description Created at timestamp
			 * @example 2024-06-16T00:00:00.000Z
			 */
			createdAt?: string
			/**
			 * @description Payout currency
			 * @example USD
			 */
			currency: string
			/**
			 * @description Whether the payout is deleted
			 * @example false
			 */
			deleted?: boolean
			/**
			 * @description Payout due date
			 * @example 2024-06-30T00:00:00.000Z
			 */
			dueAt?: string
			/**
			 * @description Whether the payout is migrated
			 * @example false
			 */
			isMigrated?: boolean
			/**
			 * @description Location id
			 * @example ve9EPM428h8vShlRW1KT
			 */
			locationId: string
			/**
			 * @description Payout paid date
			 * @example 2024-06-30T00:00:00.000Z
			 */
			paidAt?: string
			/** @description Payout metadata */
			paidMeta?: Record<string, never>
			/**
			 * @description Payout paid method
			 * @example manual
			 */
			paidMethod?: string
			/**
			 * @description Primary payout method
			 * @example paypal
			 */
			payoutMethod?: string
			/**
			 * @description Payout month
			 * @example 2024-06-01T00:00:00.000Z
			 */
			payoutMonth?: string
			/**
			 * @description Payout status
			 * @example pending
			 */
			status?: string
			/**
			 * @description Updated at timestamp
			 * @example 2024-06-17T00:00:00.000Z
			 */
			updatedAt?: string
		}
		PayoutListMetaResponseDto: {
			/**
			 * @description Total payouts matching the filters
			 * @example 42
			 */
			count: number
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
	}
	responses: never
	parameters: never
	requestBodies: never
	headers: never
	pathItems: never
}
export type $defs = Record<string, never>
export interface operations {
	'list-affiliates': {
		parameters: {
			query?: {
				active?: string
				campaignId?: string
				fromDate?: string
				/** @description Maximum number of records to return. Maximum allowed value is 100. */
				limit?: number
				query?: string
				skip?: number
				toDate?: string
			}
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description Location Id */
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
					'application/json': components['schemas']['ListAffiliatesResponseDto']
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
	'get-affiliate': {
		parameters: {
			query?: never
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description Affiliate Id */
				affiliateId: string
				/** @description Location Id */
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
					'application/json': components['schemas']['GetAffiliateResponseDto']
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
	'list-commissions': {
		parameters: {
			query?: {
				/** @description Affiliate Id */
				affiliateId?: string
				/** @description Campaign Id */
				campaignId?: string
				fromDate?: string
				/** @description Maximum number of records to return. Maximum allowed value is 100. */
				limit?: number
				/** @description Query */
				query?: string
				skip?: number
				/** @description Status */
				status?: string
				toDate?: string
			}
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description Location Id */
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
					'application/json': components['schemas']['GetCommissionListResponseDto']
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
	'list-payouts': {
		parameters: {
			query?: {
				/** @description Affiliate Id */
				affiliateId?: string
				/** @description Campaign Id */
				campaignId?: string
				end?: string
				limit?: number
				/** @description query */
				query?: string
				skip?: number
				start?: string
				/** @description Payout status */
				status?: string
			}
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description Location Id */
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
					'application/json': components['schemas']['GetPayoutListResponseDto']
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
