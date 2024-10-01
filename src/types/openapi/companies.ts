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
		IOnboardingDto: {
			/** @example true */
			pending: boolean
			/** @example  */
			haveWebsite?: boolean
			/** @example  */
			websiteUrl?: string
			/** @example  */
			industryServed?: string
			/** @example  */
			customerCount?: string
			/** @example  */
			tools?: string[]
			/** @example  */
			location?: boolean
			/** @example  */
			conversationDemo?: boolean
			/** @example  */
			locationId?: string
			/** @example  */
			snapshotId?: string
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
		AgencyProAddOnDto: {
			/** @example true */
			is_active: boolean
			/** @example price_a21hvDAS456asc */
			agency_pro_addon_subscription_id: string
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
		}
		ReactivationAttemptDto: {
			/**
			 * Format: date-time
			 * @example 2023-08-02T00:00:00.000Z
			 */
			attempted_on: string
			/** @example john.doe@example.com */
			attempted_by: string
			/** @example in_1NZoVqFpU9DlKp7RclfCqtIF */
			invoice_id: string
		}
		DowngradeDto: {
			/**
			 * Format: date-time
			 * @example 2023-08-02T00:00:00.000Z
			 */
			attempted_on: string
			/** @example john.doe@example.com */
			attempted_by: string
			/** @example $497 / month */
			previous_plan: string
			/** @example $297 / month */
			current_plan: string
			/** @example Expensive */
			reason: string
		}
		PauseSubscriptionInfoDto: {
			/**
			 * Format: date-time
			 * @example 2023-08-02T00:00:00.000Z
			 */
			requested_on: string
			/** @example request by */
			req_by: string
			/** @example Expensive */
			reason: string
			/**
			 * @example pending
			 * @enum {string}
			 */
			status: 'pending' | 'approved' | 'rejected'
			/**
			 * Format: date-time
			 * @example 2023-08-02T00:00:00.000Z
			 */
			processed_on: string
		}
		BillingInfoDto: {
			/**
			 * Format: date-time
			 * @example 2023-08-02T00:00:00.000Z
			 */
			first_trial_extension_processed_on?: string
			/** @example Some reason for extending trial */
			first_trial_extension_reason?: string
			/**
			 * Format: date-time
			 * @example 2023-08-02T00:00:00.000Z
			 */
			second_trial_extension_processed_on?: string
			/** @example Some reason for extending trial */
			second_trial_extension_reason?: string
			/**
			 * Format: date-time
			 * @example 2023-08-02T00:00:00.000Z
			 */
			pause_subscription_requested_on?: string
			/** @example Some reason for pausing subscription */
			pause_subscription_reason?: string
			/**
			 * @example pending
			 * @enum {string}
			 */
			pause_subscription_status?: 'pending' | 'approved' | 'rejected'
			/**
			 * Format: date-time
			 * @example 2023-08-02T00:00:00.000Z
			 */
			pause_subscription_req_processed_on?: string
			/** @example john.doe@example.com */
			pause_subscription_req_by?: string
			end_trial_early?: components['schemas']['EndTrialDto']
			agency_pro_addon?: components['schemas']['AgencyProAddOnDto']
			coupons_added?: string[]
			reactivation_attempt?: components['schemas']['ReactivationAttemptDto']
			downgrade?: components['schemas']['DowngradeDto']
			/**
			 * Format: date-time
			 * @example 2023-08-02T00:00:00.000Z
			 */
			first_payment_date?: string
			pause_subscription_info?: components['schemas']['PauseSubscriptionInfoDto']
		}
		GetCompanyByIdSchema: {
			/** @example seD4PfOuKoVMLkEZqohJ */
			id?: string
			/** @example Tesla inc */
			name?: string
			/** @example john@deo.com */
			email?: string
			/** @example https://firebasestorage.googleapis.com/v0/b/highlevel-staging.appspot.com/o/companyPhotos%2F5DP4iH6HLkQsiKESj6rh.gif?alt=media&token=2aec9720-59a7-46af-a187-d4a2774ee873 */
			logoUrl?: string
			/** @example +1202-555-0107 */
			phone?: string
			/** @example https://www.tesla.com */
			website?: string
			/** @example https://app.myawesomedomain.com */
			domain?: string
			/** @example link.msgsndr.com */
			spareDomain?: string
			/** @example https://app.gohighlevel.com/privacy_policy */
			privacyPolicy?: string
			/** @example https://app.gohighlevel.com/terms-of-service */
			termsConditions?: string
			/** @example default-dark-v1 */
			theme?: string
			/** @example 3500 Deer Creek Road */
			address?: string
			/** @example Palo Alto */
			city?: string
			/** @example 94304 */
			postalCode?: string
			/** @example US */
			country?: string
			/** @example CA */
			state?: string
			/** @example US/Central */
			timezone?: string
			/** @example x-xxx-xxx */
			relationshipNumber?: string
			/** @example https://firebasestorage.googleapis.com/v0/b/highlevel-staging.appspot.com/o/companyPhotos%2F5DP4iH6HLkQsiKESj6rh.gif?alt=media&token=2aec9720-59a7-46af-a187-d4a2774ee873 */
			faviconUrl?: string
			/** @example https://app.myawesomedomain.com/subdomain */
			subdomain?: string
			/** @example 1 */
			plan?: number
			/** @example  */
			currency?: string
			/** @example agency */
			customerType?: string
			/** @example 06/01/2022 */
			termsOfServiceVersion?: string
			/** @example SDfdf355Dfggdee */
			termsOfServiceAcceptedBy?: string
			/** @example true */
			twilioTrialMode?: boolean
			/** @example 100 */
			twilioFreeCredits?: number
			/** @example  */
			termsOfServiceAcceptedDate?: string
			/** @example 06/01/2022 */
			privacyPolicyVersion?: string
			/** @example SDfdf355Dfggdee */
			privacyPolicyAcceptedBy?: string
			/** @example  */
			privacyPolicyAcceptedDate?: string
			/** @example 06/01/2022 */
			affiliatePolicyVersion?: string
			/** @example SDfdf355Dfggdee */
			affiliatePolicyAcceptedBy?: string
			/** @example  */
			affiliatePolicyAcceptedDate?: string
			/** @example true */
			isReselling?: boolean
			/** @example  */
			onboardingInfo?: components['schemas']['IOnboardingDto']
			/** @example  */
			stripeId?: string
			/**
			 * @description Flag to set if upgrade plan is enabled
			 * @example true
			 */
			upgradeEnabledForClients?: boolean
			/**
			 * @description Flag to set if cancel plan is enabled
			 * @example true
			 */
			cancelEnabledForClients?: boolean
			/**
			 * @description Flag to set if auto suspend is enabled
			 * @example true
			 */
			autoSuspendEnabled?: boolean
			/**
			 * @description Saas Settings
			 * @example {
			 *       "agencyDashboardVisibleTo": "string",
			 *       "stripeConnectInitiatedBy": "string"
			 *     }
			 */
			saasSettings?: Record<string, never>
			/** @example agency_monthly_297 */
			stripeActivePlan?: string
			/** @example  */
			stripeConnectId?: string
			/** @example true */
			enableDepreciatedFeatures?: boolean
			/**
			 * @description If you want to enable / disable Priority Support for any agency. Default value is false.
			 * @default false
			 * @example false
			 */
			premiumUpgraded: boolean
			/** @example active-trial */
			status?: string
			/** @example 10 */
			locationCount?: number
			/** @example false */
			disableEmailService?: boolean
			billingInfo?: components['schemas']['BillingInfoDto']
		}
		GetCompanyByIdSuccessfulResponseDto: {
			company?: components['schemas']['GetCompanyByIdSchema']
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
