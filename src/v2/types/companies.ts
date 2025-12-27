export interface paths {
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
export interface components {
	schemas: {
		BadRequestDTO: {
			/** @example Bad Request */
			message?: string
			/** @example 400 */
			statusCode?: number
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
			/**
			 * @description The affinity group of the agency
			 * @example Vehicle Dealerships
			 */
			businessAffinityGroup?: string
			/**
			 * @description Business category
			 * @example Automotive
			 */
			businessCategory?: string
			/**
			 * @description The business niche in which the agency is operating
			 * @example Accounting School
			 */
			businessNiche?: string
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
			/**
			 * @description Flag to determine if new sub-accounts should use default data
			 * @example false
			 */
			enableNewSubAccountDefaultData?: boolean
			/** @example seD4PfOuKoVMLkEZqohJ */
			id?: string
			/** @example true */
			isEnterpriseAccount?: boolean
			/** @example true */
			isReselling?: boolean
			/** @example true */
			isSandboxAccount?: boolean
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
			/** @example john-doe-21 */
			referralId?: string
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
			/** @example  */
			stripeConnectId?: string
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
			/**
			 * @description Set to true if it is from affiliate
			 * @example true
			 */
			affiliateSignup?: boolean
			/** @example  */
			conversationDemo?: boolean
			/** @example  */
			customerCount?: string
			/**
			 * @description Set to true if user joined implementation call
			 * @example true
			 */
			hasJoinedImplementationCall?: boolean
			/**
			 * @description Set to true if user joined onboarding call
			 * @example true
			 */
			hasJoinedKickoffCall?: boolean
			/** @example  */
			haveWebsite?: boolean
			/** @example  */
			industryServed?: string
			/**
			 * @description Set to true if user joined onboarding call
			 * @example true
			 */
			kickoffActionTaken?: boolean
			/** @example  */
			location?: boolean
			/** @example  */
			locationId?: string
			/**
			 * @description metaData for onboarding
			 * @example true
			 */
			metaData?: Record<string, never>
			/** @example true */
			pending: boolean
			/**
			 * @description Selected agency plan unique plan Id
			 * @example plan_EOi37NLV12u68i
			 */
			planId?: string
			/** @example  */
			snapshotId?: string
			/** @example  */
			tools?: string[]
			/**
			 * @description This helps in A/B tracking of onboarding flow
			 * @example 1
			 */
			version?: string
			/** @example  */
			websiteUrl?: string
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
	'get-company': {
		parameters: {
			query?: never
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
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
