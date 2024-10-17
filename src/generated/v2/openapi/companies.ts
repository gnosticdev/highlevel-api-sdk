export type paths = {
	'/companies/{companyId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get Company
		 * @description Get Comapny
		 */
		get: operations['get-company']
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
		AgencyProAddOnDto: {
			/**
			 * @example agency-pro-plus_monthly_399
			 * @enum {string}
			 */
			agency_pro_addon_active_plan:
				| 'reviews_monthly_150'
				| 'listing_monthly_50'
				| 'conversations_monthly_100'
				| 'priority-support_monthly_300'
				| 'priority-support_annual_300'
				| 'priority-support_monthly_300_legacy'
				| 'priority-support_annual_300_legacy'
				| 'priority-support_monthly_240_july'
				| 'hipaa_monthly_297'
				| 'hipaa_annual_297'
				| 'hipaa_monthly_297_legacy'
				| 'agency-pro-plus_monthly_399'
				| 'agency-pro-plus_annual_399'
			/** @example price_a21hvDAS456asc */
			agency_pro_addon_subscription_id: string
			/** @example true */
			is_active: boolean
		}
		BadRequestDTO: {
			/** @example Bad Request */
			message?: string
			/** @example 400 */
			statusCode?: number
		}
		BillingInfoDto: {
			agency_pro_addon?: components['schemas']['AgencyProAddOnDto']
			coupons_added?: string[]
			downgrade?: components['schemas']['DowngradeDto']
			end_trial_early?: components['schemas']['EndTrialDto']
			/**
			 * Format: date-time
			 * @example 2023-08-02T00:00:00.000Z
			 */
			first_payment_date?: string
			/**
			 * Format: date-time
			 * @example 2023-08-02T00:00:00.000Z
			 */
			first_trial_extension_processed_on?: string
			/** @example Some reason for extending trial */
			first_trial_extension_reason?: string
			pause_subscription_info?: components['schemas']['PauseSubscriptionInfoDto']
			/** @example Some reason for pausing subscription */
			pause_subscription_reason?: string
			/** @example john.doe@example.com */
			pause_subscription_req_by?: string
			/**
			 * Format: date-time
			 * @example 2023-08-02T00:00:00.000Z
			 */
			pause_subscription_req_processed_on?: string
			/**
			 * Format: date-time
			 * @example 2023-08-02T00:00:00.000Z
			 */
			pause_subscription_requested_on?: string
			/**
			 * @example pending
			 * @enum {string}
			 */
			pause_subscription_status?: 'pending' | 'approved' | 'rejected'
			reactivation_attempt?: components['schemas']['ReactivationAttemptDto']
			/**
			 * Format: date-time
			 * @example 2023-08-02T00:00:00.000Z
			 */
			second_trial_extension_processed_on?: string
			/** @example Some reason for extending trial */
			second_trial_extension_reason?: string
		}
		DowngradeDto: {
			/** @example john.doe@example.com */
			attempted_by: string
			/**
			 * Format: date-time
			 * @example 2023-08-02T00:00:00.000Z
			 */
			attempted_on: string
			/** @example $297 / month */
			current_plan: string
			/** @example $497 / month */
			previous_plan: string
			/** @example Expensive */
			reason: string
		}
		EndTrialDto: {
			/** @example  */
			trial_end_req_by: string
			/**
			 * Format: date-time
			 * @example 2023-08-02T00:00:00.000Z
			 */
			trial_ended_on: string
		}
		GetCompanyByIdSchema: {
			/** @example 3500 Deer Creek Road */
			address?: string
			/** @example SDfdf355Dfggdee */
			affiliatePolicyAcceptedBy?: string
			/** @example  */
			affiliatePolicyAcceptedDate?: string
			/** @example 06/01/2022 */
			affiliatePolicyVersion?: string
			/**
			 * @description Flag to set if auto suspend is enabled
			 * @example true
			 */
			autoSuspendEnabled?: boolean
			billingInfo?: components['schemas']['BillingInfoDto']
			/**
			 * @description Flag to set if cancel plan is enabled
			 * @example true
			 */
			cancelEnabledForClients?: boolean
			/** @example Palo Alto */
			city?: string
			/** @example US */
			country?: string
			/** @example  */
			currency?: string
			/** @example agency */
			customerType?: string
			/** @example false */
			disableEmailService?: boolean
			/** @example https://app.myawesomedomain.com */
			domain?: string
			/** @example john@deo.com */
			email?: string
			/** @example true */
			enableDepreciatedFeatures?: boolean
			/** @example https://firebasestorage.googleapis.com/v0/b/highlevel-staging.appspot.com/o/companyPhotos%2F5DP4iH6HLkQsiKESj6rh.gif?alt=media&token=2aec9720-59a7-46af-a187-d4a2774ee873 */
			faviconUrl?: string
			/** @example seD4PfOuKoVMLkEZqohJ */
			id?: string
			/** @example true */
			isReselling?: boolean
			/** @example 10 */
			locationCount?: number
			/** @example https://firebasestorage.googleapis.com/v0/b/highlevel-staging.appspot.com/o/companyPhotos%2F5DP4iH6HLkQsiKESj6rh.gif?alt=media&token=2aec9720-59a7-46af-a187-d4a2774ee873 */
			logoUrl?: string
			/** @example Tesla inc */
			name?: string
			/** @example  */
			onboardingInfo?: components['schemas']['IOnboardingDto']
			/** @example +1202-555-0107 */
			phone?: string
			/** @example 1 */
			plan?: number
			/** @example 94304 */
			postalCode?: string
			/**
			 * @description If you want to enable / disable Priority Support for any agency. Default value is false.
			 * @default false
			 * @example false
			 */
			premiumUpgraded: boolean
			/** @example https://app.gohighlevel.com/privacy_policy */
			privacyPolicy?: string
			/** @example SDfdf355Dfggdee */
			privacyPolicyAcceptedBy?: string
			/** @example  */
			privacyPolicyAcceptedDate?: string
			/** @example 06/01/2022 */
			privacyPolicyVersion?: string
			/** @example x-xxx-xxx */
			relationshipNumber?: string
			/**
			 * @description Saas Settings
			 * @example {
			 *       "agencyDashboardVisibleTo": "string",
			 *       "stripeConnectInitiatedBy": "string"
			 *     }
			 */
			saasSettings?: Record<string, never>
			/** @example link.msgsndr.com */
			spareDomain?: string
			/** @example CA */
			state?: string
			/** @example active-trial */
			status?: string
			/** @example agency_monthly_297 */
			stripeActivePlan?: string
			/** @example  */
			stripeConnectId?: string
			/** @example  */
			stripeId?: string
			/** @example https://app.myawesomedomain.com/subdomain */
			subdomain?: string
			/** @example https://app.gohighlevel.com/terms-of-service */
			termsConditions?: string
			/** @example SDfdf355Dfggdee */
			termsOfServiceAcceptedBy?: string
			/** @example  */
			termsOfServiceAcceptedDate?: string
			/** @example 06/01/2022 */
			termsOfServiceVersion?: string
			/** @example default-dark-v1 */
			theme?: string
			/** @example US/Central */
			timezone?: string
			/** @example 100 */
			twilioFreeCredits?: number
			/** @example true */
			twilioTrialMode?: boolean
			/**
			 * @description Flag to set if upgrade plan is enabled
			 * @example true
			 */
			upgradeEnabledForClients?: boolean
			/** @example https://www.tesla.com */
			website?: string
		}
		GetCompanyByIdSuccessfulResponseDto: {
			company?: components['schemas']['GetCompanyByIdSchema']
		}
		IOnboardingDto: {
			/** @example  */
			conversationDemo?: boolean
			/** @example  */
			customerCount?: string
			/** @example  */
			haveWebsite?: boolean
			/** @example  */
			industryServed?: string
			/** @example  */
			location?: boolean
			/** @example  */
			locationId?: string
			/** @example true */
			pending: boolean
			/** @example  */
			snapshotId?: string
			/** @example  */
			tools?: string[]
			/** @example  */
			websiteUrl?: string
		}
		PauseSubscriptionInfoDto: {
			/**
			 * Format: date-time
			 * @example 2023-08-02T00:00:00.000Z
			 */
			processed_on: string
			/** @example Expensive */
			reason: string
			/** @example request by */
			req_by: string
			/**
			 * Format: date-time
			 * @example 2023-08-02T00:00:00.000Z
			 */
			requested_on: string
			/**
			 * @example pending
			 * @enum {string}
			 */
			status: 'pending' | 'approved' | 'rejected'
		}
		ReactivationAttemptDto: {
			/** @example john.doe@example.com */
			attempted_by: string
			/**
			 * Format: date-time
			 * @example 2023-08-02T00:00:00.000Z
			 */
			attempted_on: string
			/** @example in_1NZoVqFpU9DlKp7RclfCqtIF */
			invoice_id: string
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
			/** @example [
			 *       "Unprocessable Entity"
			 *     ] */
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
	'get-company': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @example ve9EPM428h8vShlRW1KT */
				companyId: string
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
					'application/json': components['schemas']['GetCompanyByIdSuccessfulResponseDto']
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
