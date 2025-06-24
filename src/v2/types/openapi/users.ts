export type paths = {
	'/users/': {
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
}
export type webhooks = Record<string, never>
export type components = {
	schemas: {
		BadRequestDTO: {
			/** @example Bad Request */
			message?: string
			/** @example 400 */
			statusCode?: number
		}
		CreateUserDto: {
			/** @example ve9EPM428h8vShlRW1KT */
			companyId: string
			/** @example john@deo.com */
			email: string
			/** @example John */
			firstName: string
			/** @example Deo */
			lastName: string
			/** @example [
			 *       "C2QujeCh8ZnC7al2InWR"
			 *     ] */
			locationIds: string[]
			/** @example ******* */
			password: string
			permissions?: components['schemas']['PermissionsDto']
			/** @example +18832327657 */
			phone?: string
			/** @example https://img.png */
			profilePhoto?: string
			/** @example admin */
			role: string
			/**
			 * @description Scopes allowed for users. Only scopes that have been passed will be enabled. Note:- If passed empty all the scopes will be get disabled
			 * @example [
			 *       "contacts.write",
			 *       "campaigns.readonly"
			 *     ]
			 */
			scopes?: (
				| 'campaigns.readonly'
				| 'campaigns.write'
				| 'calendars/events.write'
				| 'calendars/events.readonly'
				| 'contacts.write'
				| 'contacts/bulkActions.write'
				| 'workflows.readonly'
				| 'workflows.write'
				| 'triggers.write'
				| 'funnels.write'
				| 'websites.write'
				| 'medias.write'
				| 'medias.readonly'
				| 'opportunities.write'
				| 'opportunities/leadValue.readonly'
				| 'opportunities/bulkActions.write'
				| 'reporting/phone.readonly'
				| 'reporting/adwords.readonly'
				| 'reporting/facebookAds.readonly'
				| 'reporting/attributions.readonly'
				| 'reporting/agent.readonly'
				| 'reporting/reports.write'
				| 'reporting/reports.readonly'
				| 'payments.write'
				| 'payments/refunds.write'
				| 'payments/records.write'
				| 'payments/exports.write'
				| 'payments/subscriptionsCancel.write'
				| 'invoices.write'
				| 'invoices.readonly'
				| 'invoices/schedule.readonly'
				| 'invoices/schedule.write'
				| 'invoices/template.readonly'
				| 'invoices/template.write'
				| 'reputation/review.write'
				| 'reputation/listing.write'
				| 'conversations.write'
				| 'conversations.readonly'
				| 'conversations/message.readonly'
				| 'conversations/message.write'
				| 'contentAI.write'
				| 'dashboard/stats.readonly'
				| 'locations/tags.write'
				| 'locations/tags.readonly'
				| 'marketing.write'
				| 'eliza.write'
				| 'settings.write'
				| 'socialplanner/post.write'
				| 'socialplanner/account.readonly'
				| 'socialplanner/account.write'
				| 'socialplanner/category.readonly'
				| 'socialplanner/category.write'
				| 'socialplanner/csv.readonly'
				| 'socialplanner/csv.write'
				| 'socialplanner/group.write'
				| 'socialplanner/hashtag.readonly'
				| 'socialplanner/hashtag.write'
				| 'socialplanner/oauth.readonly'
				| 'socialplanner/oauth.write'
				| 'socialplanner/post.readonly'
				| 'socialplanner/recurring.readonly'
				| 'socialplanner/recurring.write'
				| 'socialplanner/review.readonly'
				| 'socialplanner/review.write'
				| 'socialplanner/rss.readonly'
				| 'socialplanner/rss.write'
				| 'socialplanner/search.readonly'
				| 'socialplanner/setting.readonly'
				| 'socialplanner/setting.write'
				| 'socialplanner/stat.readonly'
				| 'socialplanner/tag.readonly'
				| 'socialplanner/tag.write'
				| 'socialplanner/filters.readonly'
				| 'socialplanner/medias.readonly'
				| 'socialplanner/medias.write'
				| 'socialplanner/watermarks.readonly'
				| 'socialplanner/watermarks.write'
				| 'socialplanner/metatag.readonly'
				| 'socialplanner/facebook.readonly'
				| 'socialplanner/linkedin.readonly'
				| 'socialplanner/twitter.readonly'
				| 'socialplanner/notification.readonly'
				| 'socialplanner/notification.write'
				| 'socialplanner/snapshot.readonly'
				| 'socialplanner/snapshot.write'
				| 'marketing/affiliate.write'
				| 'blogs.write'
				| 'membership.write'
				| 'communities.write'
				| 'certificates.write'
				| 'certificates.readonly'
				| 'adPublishing.write'
				| 'adPublishing.readonly'
				| 'prospecting.write'
				| 'prospecting.readonly'
				| 'prospecting/reports.readonly'
				| 'private-integration-location.readonly'
				| 'private-integration-location.write'
				| 'private-integration-company.readonly'
				| 'private-integration-company.write'
				| 'native-integrations.readonly'
				| 'native-integrations.write'
				| 'wordpress.write'
				| 'wordpress.read'
				| 'custom-menu-link.write'
				| 'users/team-management.write'
				| 'users/team-management.readonly'
			)[]
			/**
			 * @description Assigned Scopes allowed for users. Only scopes that have been passed will be enabled. If passed empty all the assigned scopes will be get disabled
			 * @example [
			 *       "contacts.write",
			 *       "campaigns.readonly"
			 *     ]
			 */
			scopesAssignedToOnly?: (
				| 'campaigns.readonly'
				| 'campaigns.write'
				| 'calendars/events.write'
				| 'calendars/events.readonly'
				| 'contacts.write'
				| 'contacts/bulkActions.write'
				| 'workflows.readonly'
				| 'workflows.write'
				| 'triggers.write'
				| 'funnels.write'
				| 'websites.write'
				| 'medias.write'
				| 'medias.readonly'
				| 'opportunities.write'
				| 'opportunities/leadValue.readonly'
				| 'opportunities/bulkActions.write'
				| 'reporting/phone.readonly'
				| 'reporting/adwords.readonly'
				| 'reporting/facebookAds.readonly'
				| 'reporting/attributions.readonly'
				| 'reporting/agent.readonly'
				| 'reporting/reports.write'
				| 'reporting/reports.readonly'
				| 'payments.write'
				| 'payments/refunds.write'
				| 'payments/records.write'
				| 'payments/exports.write'
				| 'payments/subscriptionsCancel.write'
				| 'invoices.write'
				| 'invoices.readonly'
				| 'invoices/schedule.readonly'
				| 'invoices/schedule.write'
				| 'invoices/template.readonly'
				| 'invoices/template.write'
				| 'reputation/review.write'
				| 'reputation/listing.write'
				| 'conversations.write'
				| 'conversations.readonly'
				| 'conversations/message.readonly'
				| 'conversations/message.write'
				| 'contentAI.write'
				| 'dashboard/stats.readonly'
				| 'locations/tags.write'
				| 'locations/tags.readonly'
				| 'marketing.write'
				| 'eliza.write'
				| 'settings.write'
				| 'socialplanner/post.write'
				| 'socialplanner/account.readonly'
				| 'socialplanner/account.write'
				| 'socialplanner/category.readonly'
				| 'socialplanner/category.write'
				| 'socialplanner/csv.readonly'
				| 'socialplanner/csv.write'
				| 'socialplanner/group.write'
				| 'socialplanner/hashtag.readonly'
				| 'socialplanner/hashtag.write'
				| 'socialplanner/oauth.readonly'
				| 'socialplanner/oauth.write'
				| 'socialplanner/post.readonly'
				| 'socialplanner/recurring.readonly'
				| 'socialplanner/recurring.write'
				| 'socialplanner/review.readonly'
				| 'socialplanner/review.write'
				| 'socialplanner/rss.readonly'
				| 'socialplanner/rss.write'
				| 'socialplanner/search.readonly'
				| 'socialplanner/setting.readonly'
				| 'socialplanner/setting.write'
				| 'socialplanner/stat.readonly'
				| 'socialplanner/tag.readonly'
				| 'socialplanner/tag.write'
				| 'socialplanner/filters.readonly'
				| 'socialplanner/medias.readonly'
				| 'socialplanner/medias.write'
				| 'socialplanner/watermarks.readonly'
				| 'socialplanner/watermarks.write'
				| 'socialplanner/metatag.readonly'
				| 'socialplanner/facebook.readonly'
				| 'socialplanner/linkedin.readonly'
				| 'socialplanner/twitter.readonly'
				| 'socialplanner/notification.readonly'
				| 'socialplanner/notification.write'
				| 'socialplanner/snapshot.readonly'
				| 'socialplanner/snapshot.write'
				| 'marketing/affiliate.write'
				| 'blogs.write'
				| 'membership.write'
				| 'communities.write'
				| 'certificates.write'
				| 'certificates.readonly'
				| 'adPublishing.write'
				| 'adPublishing.readonly'
				| 'prospecting.write'
				| 'prospecting.readonly'
				| 'prospecting/reports.readonly'
				| 'private-integration-location.readonly'
				| 'private-integration-location.write'
				| 'private-integration-company.readonly'
				| 'private-integration-company.write'
				| 'native-integrations.readonly'
				| 'native-integrations.write'
				| 'wordpress.write'
				| 'wordpress.read'
				| 'custom-menu-link.write'
				| 'users/team-management.write'
				| 'users/team-management.readonly'
			)[]
			/** @example account */
			type: string
		}
		DeleteUserSuccessfulResponseDto: {
			/** @example Queued deleting user with e-mail john@deo.com and name John Deo. Will take effect in a few minutes. */
			message?: string
			/** @example true */
			succeded?: boolean
		}
		LocationSuccessfulResponseDto: {
			users?: components['schemas']['UserSchema'][]
		}
		PermissionsDto: {
			/**
			 * @default false
			 * @example false
			 */
			adwordsReportingEnabled: boolean
			/**
			 * @default true
			 * @example true
			 */
			affiliateManagerEnabled: boolean
			/**
			 * @default true
			 * @example true
			 */
			agentReportingEnabled: boolean
			/**
			 * @default true
			 * @example true
			 */
			appointmentsEnabled: boolean
			/**
			 * @default false
			 * @example false
			 */
			assignedDataOnly: boolean
			/**
			 * @default false
			 * @example false
			 */
			attributionsReportingEnabled: boolean
			/**
			 * @default true
			 * @example true
			 */
			bloggingEnabled: boolean
			/**
			 * @default false
			 * @example false
			 */
			botService: boolean
			/**
			 * @default true
			 * @example true
			 */
			bulkRequestsEnabled: boolean
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
			cancelSubscriptionEnabled: boolean
			/**
			 * @default true
			 * @example true
			 */
			communitiesEnabled: boolean
			/**
			 * @default true
			 * @example true
			 */
			contactsEnabled: boolean
			/**
			 * @default true
			 * @example true
			 */
			contentAiEnabled: boolean
			/**
			 * @default true
			 * @example true
			 */
			conversationsEnabled: boolean
			/**
			 * @default true
			 * @example true
			 */
			dashboardStatsEnabled: boolean
			/**
			 * @default true
			 * @example true
			 */
			exportPaymentsEnabled: boolean
			/**
			 * @default false
			 * @example false
			 */
			facebookAdsReportingEnabled: boolean
			/**
			 * @default true
			 * @example true
			 */
			funnelsEnabled: boolean
			/**
			 * @default true
			 * @example true
			 */
			invoiceEnabled: boolean
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
			 * @default false
			 * @example false
			 */
			membershipEnabled: boolean
			/**
			 * @default true
			 * @example true
			 */
			onlineListingsEnabled: boolean
			/**
			 * @default true
			 * @example true
			 */
			opportunitiesEnabled: boolean
			/**
			 * @default true
			 * @example true
			 */
			paymentsEnabled: boolean
			/**
			 * @default true
			 * @example true
			 */
			phoneCallEnabled: boolean
			/**
			 * @default true
			 * @example true
			 */
			recordPaymentEnabled: boolean
			/**
			 * @default true
			 * @example true
			 */
			refundsEnabled: boolean
			/**
			 * @default true
			 * @example true
			 */
			reviewsEnabled: boolean
			/**
			 * @default true
			 * @example true
			 */
			settingsEnabled: boolean
			/**
			 * @default true
			 * @example true
			 */
			socialPlanner: boolean
			/**
			 * @default true
			 * @example true
			 */
			tagsEnabled: boolean
			/**
			 * @default true
			 * @example true
			 */
			triggersEnabled: boolean
			/**
			 * @default false
			 * @example false
			 */
			websitesEnabled: boolean
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
		}
		RoleSchema: {
			/** @example [
			 *       "ve9EPM428h8vShlRW1KT"
			 *     ] */
			locationIds?: string[]
			/** @example true */
			restrictSubAccount?: boolean
			/** @example admin */
			role?: string
			/** @example account */
			type?: string
		}
		SearchUserSuccessfulResponseDto: {
			/** @example 1231 */
			count?: number
			users?: components['schemas']['UserSchema'][]
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
		UpdateUserDto: {
			/**
			 * @description Company/Agency Id. Required for Agency Level access
			 * @example UAXssdawIWAWD
			 */
			companyId?: string
			/**
			 * @deprecated
			 * @description Email update is no longer supported due to security reasons.
			 * @example john@deo.com
			 */
			email?: string
			/**
			 * @description OTP to change the email ID of the user
			 * @example 191344
			 */
			emailChangeOTP?: string
			/** @example John */
			firstName?: string
			/** @example true */
			isEjectedUser: boolean
			/** @example Deo */
			lastName?: string
			/** @example [
			 *       "C2QujeCh8ZnC7al2InWR"
			 *     ] */
			locationIds?: string[]
			/** @example ******* */
			password?: string
			permissions?: components['schemas']['PermissionsDto']
			/** @example +18832327657 */
			phone?: string
			/** @example https://img.png */
			profilePhoto?: string
			/** @example admin */
			role?: string
			/**
			 * @description Scopes allowed for users. Only scopes that have been passed will be enabled. If passed empty all the scopes will be get disabled
			 * @example [
			 *       "contacts.write",
			 *       "campaigns.readonly"
			 *     ]
			 */
			scopes?: (
				| 'campaigns.readonly'
				| 'campaigns.write'
				| 'calendars/events.write'
				| 'calendars/events.readonly'
				| 'contacts.write'
				| 'contacts/bulkActions.write'
				| 'workflows.readonly'
				| 'workflows.write'
				| 'triggers.write'
				| 'funnels.write'
				| 'websites.write'
				| 'medias.write'
				| 'medias.readonly'
				| 'opportunities.write'
				| 'opportunities/leadValue.readonly'
				| 'opportunities/bulkActions.write'
				| 'reporting/phone.readonly'
				| 'reporting/adwords.readonly'
				| 'reporting/facebookAds.readonly'
				| 'reporting/attributions.readonly'
				| 'reporting/agent.readonly'
				| 'reporting/reports.write'
				| 'reporting/reports.readonly'
				| 'payments.write'
				| 'payments/refunds.write'
				| 'payments/records.write'
				| 'payments/exports.write'
				| 'payments/subscriptionsCancel.write'
				| 'invoices.write'
				| 'invoices.readonly'
				| 'invoices/schedule.readonly'
				| 'invoices/schedule.write'
				| 'invoices/template.readonly'
				| 'invoices/template.write'
				| 'reputation/review.write'
				| 'reputation/listing.write'
				| 'conversations.write'
				| 'conversations.readonly'
				| 'conversations/message.readonly'
				| 'conversations/message.write'
				| 'contentAI.write'
				| 'dashboard/stats.readonly'
				| 'locations/tags.write'
				| 'locations/tags.readonly'
				| 'marketing.write'
				| 'eliza.write'
				| 'settings.write'
				| 'socialplanner/post.write'
				| 'socialplanner/account.readonly'
				| 'socialplanner/account.write'
				| 'socialplanner/category.readonly'
				| 'socialplanner/category.write'
				| 'socialplanner/csv.readonly'
				| 'socialplanner/csv.write'
				| 'socialplanner/group.write'
				| 'socialplanner/hashtag.readonly'
				| 'socialplanner/hashtag.write'
				| 'socialplanner/oauth.readonly'
				| 'socialplanner/oauth.write'
				| 'socialplanner/post.readonly'
				| 'socialplanner/recurring.readonly'
				| 'socialplanner/recurring.write'
				| 'socialplanner/review.readonly'
				| 'socialplanner/review.write'
				| 'socialplanner/rss.readonly'
				| 'socialplanner/rss.write'
				| 'socialplanner/search.readonly'
				| 'socialplanner/setting.readonly'
				| 'socialplanner/setting.write'
				| 'socialplanner/stat.readonly'
				| 'socialplanner/tag.readonly'
				| 'socialplanner/tag.write'
				| 'socialplanner/filters.readonly'
				| 'socialplanner/medias.readonly'
				| 'socialplanner/medias.write'
				| 'socialplanner/watermarks.readonly'
				| 'socialplanner/watermarks.write'
				| 'socialplanner/metatag.readonly'
				| 'socialplanner/facebook.readonly'
				| 'socialplanner/linkedin.readonly'
				| 'socialplanner/twitter.readonly'
				| 'socialplanner/notification.readonly'
				| 'socialplanner/notification.write'
				| 'socialplanner/snapshot.readonly'
				| 'socialplanner/snapshot.write'
				| 'marketing/affiliate.write'
				| 'blogs.write'
				| 'membership.write'
				| 'communities.write'
				| 'certificates.write'
				| 'certificates.readonly'
				| 'adPublishing.write'
				| 'adPublishing.readonly'
				| 'prospecting.write'
				| 'prospecting.readonly'
				| 'prospecting/reports.readonly'
				| 'private-integration-location.readonly'
				| 'private-integration-location.write'
				| 'private-integration-company.readonly'
				| 'private-integration-company.write'
				| 'native-integrations.readonly'
				| 'native-integrations.write'
				| 'wordpress.write'
				| 'wordpress.read'
				| 'custom-menu-link.write'
				| 'users/team-management.write'
				| 'users/team-management.readonly'
			)[]
			/**
			 * @description Assigned Scopes allowed for users. Only scopes that have been passed will be enabled. If passed empty all the assigned scopes will be get disabled
			 * @example [
			 *       "contacts.write",
			 *       "campaigns.readonly"
			 *     ]
			 */
			scopesAssignedToOnly?: (
				| 'campaigns.readonly'
				| 'campaigns.write'
				| 'calendars/events.write'
				| 'calendars/events.readonly'
				| 'contacts.write'
				| 'contacts/bulkActions.write'
				| 'workflows.readonly'
				| 'workflows.write'
				| 'triggers.write'
				| 'funnels.write'
				| 'websites.write'
				| 'medias.write'
				| 'medias.readonly'
				| 'opportunities.write'
				| 'opportunities/leadValue.readonly'
				| 'opportunities/bulkActions.write'
				| 'reporting/phone.readonly'
				| 'reporting/adwords.readonly'
				| 'reporting/facebookAds.readonly'
				| 'reporting/attributions.readonly'
				| 'reporting/agent.readonly'
				| 'reporting/reports.write'
				| 'reporting/reports.readonly'
				| 'payments.write'
				| 'payments/refunds.write'
				| 'payments/records.write'
				| 'payments/exports.write'
				| 'payments/subscriptionsCancel.write'
				| 'invoices.write'
				| 'invoices.readonly'
				| 'invoices/schedule.readonly'
				| 'invoices/schedule.write'
				| 'invoices/template.readonly'
				| 'invoices/template.write'
				| 'reputation/review.write'
				| 'reputation/listing.write'
				| 'conversations.write'
				| 'conversations.readonly'
				| 'conversations/message.readonly'
				| 'conversations/message.write'
				| 'contentAI.write'
				| 'dashboard/stats.readonly'
				| 'locations/tags.write'
				| 'locations/tags.readonly'
				| 'marketing.write'
				| 'eliza.write'
				| 'settings.write'
				| 'socialplanner/post.write'
				| 'socialplanner/account.readonly'
				| 'socialplanner/account.write'
				| 'socialplanner/category.readonly'
				| 'socialplanner/category.write'
				| 'socialplanner/csv.readonly'
				| 'socialplanner/csv.write'
				| 'socialplanner/group.write'
				| 'socialplanner/hashtag.readonly'
				| 'socialplanner/hashtag.write'
				| 'socialplanner/oauth.readonly'
				| 'socialplanner/oauth.write'
				| 'socialplanner/post.readonly'
				| 'socialplanner/recurring.readonly'
				| 'socialplanner/recurring.write'
				| 'socialplanner/review.readonly'
				| 'socialplanner/review.write'
				| 'socialplanner/rss.readonly'
				| 'socialplanner/rss.write'
				| 'socialplanner/search.readonly'
				| 'socialplanner/setting.readonly'
				| 'socialplanner/setting.write'
				| 'socialplanner/stat.readonly'
				| 'socialplanner/tag.readonly'
				| 'socialplanner/tag.write'
				| 'socialplanner/filters.readonly'
				| 'socialplanner/medias.readonly'
				| 'socialplanner/medias.write'
				| 'socialplanner/watermarks.readonly'
				| 'socialplanner/watermarks.write'
				| 'socialplanner/metatag.readonly'
				| 'socialplanner/facebook.readonly'
				| 'socialplanner/linkedin.readonly'
				| 'socialplanner/twitter.readonly'
				| 'socialplanner/notification.readonly'
				| 'socialplanner/notification.write'
				| 'socialplanner/snapshot.readonly'
				| 'socialplanner/snapshot.write'
				| 'marketing/affiliate.write'
				| 'blogs.write'
				| 'membership.write'
				| 'communities.write'
				| 'certificates.write'
				| 'certificates.readonly'
				| 'adPublishing.write'
				| 'adPublishing.readonly'
				| 'prospecting.write'
				| 'prospecting.readonly'
				| 'prospecting/reports.readonly'
				| 'private-integration-location.readonly'
				| 'private-integration-location.write'
				| 'private-integration-company.readonly'
				| 'private-integration-company.write'
				| 'native-integrations.readonly'
				| 'native-integrations.write'
				| 'wordpress.write'
				| 'wordpress.read'
				| 'custom-menu-link.write'
				| 'users/team-management.write'
				| 'users/team-management.readonly'
			)[]
			/** @example account */
			type?: string
		}
		UserSchema: {
			/** @example false */
			deleted?: boolean
			/** @example john@deo.com */
			email?: string
			/** @example  */
			extension?: string
			/** @example John */
			firstName?: string
			/** @example 0IHuJvc2ofPAAA8GzTRi */
			id?: string
			/** @example Deo */
			lastName?: string
			/**
			 * @description LC Phone Inbound Phone Numbers
			 * @example {
			 *       "locationId": "+1234556677"
			 *     }
			 */
			lcPhone?: Record<string, never>
			/** @example John Deo */
			name?: string
			permissions?: components['schemas']['PermissionsDto']
			/** @example +1 808-868-8888 */
			phone?: string
			roles?: components['schemas']['RoleSchema']
			/** @enum {string} */
			scopes?:
				| 'campaigns.readonly'
				| 'campaigns.write'
				| 'calendars/events.write'
				| 'calendars/events.readonly'
				| 'contacts.write'
				| 'contacts/bulkActions.write'
				| 'workflows.readonly'
				| 'workflows.write'
				| 'triggers.write'
				| 'funnels.write'
				| 'websites.write'
				| 'medias.write'
				| 'medias.readonly'
				| 'opportunities.write'
				| 'opportunities/leadValue.readonly'
				| 'opportunities/bulkActions.write'
				| 'reporting/phone.readonly'
				| 'reporting/adwords.readonly'
				| 'reporting/facebookAds.readonly'
				| 'reporting/attributions.readonly'
				| 'reporting/agent.readonly'
				| 'reporting/reports.write'
				| 'reporting/reports.readonly'
				| 'payments.write'
				| 'payments/refunds.write'
				| 'payments/records.write'
				| 'payments/exports.write'
				| 'payments/subscriptionsCancel.write'
				| 'invoices.write'
				| 'invoices.readonly'
				| 'invoices/schedule.readonly'
				| 'invoices/schedule.write'
				| 'invoices/template.readonly'
				| 'invoices/template.write'
				| 'reputation/review.write'
				| 'reputation/listing.write'
				| 'conversations.write'
				| 'conversations.readonly'
				| 'conversations/message.readonly'
				| 'conversations/message.write'
				| 'contentAI.write'
				| 'dashboard/stats.readonly'
				| 'locations/tags.write'
				| 'locations/tags.readonly'
				| 'marketing.write'
				| 'eliza.write'
				| 'settings.write'
				| 'socialplanner/post.write'
				| 'socialplanner/account.readonly'
				| 'socialplanner/account.write'
				| 'socialplanner/category.readonly'
				| 'socialplanner/category.write'
				| 'socialplanner/csv.readonly'
				| 'socialplanner/csv.write'
				| 'socialplanner/group.write'
				| 'socialplanner/hashtag.readonly'
				| 'socialplanner/hashtag.write'
				| 'socialplanner/oauth.readonly'
				| 'socialplanner/oauth.write'
				| 'socialplanner/post.readonly'
				| 'socialplanner/recurring.readonly'
				| 'socialplanner/recurring.write'
				| 'socialplanner/review.readonly'
				| 'socialplanner/review.write'
				| 'socialplanner/rss.readonly'
				| 'socialplanner/rss.write'
				| 'socialplanner/search.readonly'
				| 'socialplanner/setting.readonly'
				| 'socialplanner/setting.write'
				| 'socialplanner/stat.readonly'
				| 'socialplanner/tag.readonly'
				| 'socialplanner/tag.write'
				| 'socialplanner/filters.readonly'
				| 'socialplanner/medias.readonly'
				| 'socialplanner/medias.write'
				| 'socialplanner/watermarks.readonly'
				| 'socialplanner/watermarks.write'
				| 'socialplanner/metatag.readonly'
				| 'socialplanner/facebook.readonly'
				| 'socialplanner/linkedin.readonly'
				| 'socialplanner/twitter.readonly'
				| 'socialplanner/notification.readonly'
				| 'socialplanner/notification.write'
				| 'socialplanner/snapshot.readonly'
				| 'socialplanner/snapshot.write'
				| 'marketing/affiliate.write'
				| 'blogs.write'
				| 'membership.write'
				| 'communities.write'
				| 'certificates.write'
				| 'certificates.readonly'
				| 'adPublishing.write'
				| 'adPublishing.readonly'
				| 'prospecting.write'
				| 'prospecting.readonly'
				| 'prospecting/reports.readonly'
				| 'private-integration-location.readonly'
				| 'private-integration-location.write'
				| 'private-integration-company.readonly'
				| 'private-integration-company.write'
				| 'native-integrations.readonly'
				| 'native-integrations.write'
				| 'wordpress.write'
				| 'wordpress.read'
				| 'custom-menu-link.write'
				| 'users/team-management.write'
				| 'users/team-management.readonly'
		}
		UserSuccessfulResponseDto: {
			/** @example john@deo.com */
			email?: string
			/** @example  */
			extension?: string
			/** @example John */
			firstName?: string
			/** @example 0IHuJvc2ofPAAA8GzTRi */
			id?: string
			/** @example Deo */
			lastName?: string
			/**
			 * @description LC Phone Inbound Phone Numbers
			 * @example {
			 *       "locationId": "+1234556677"
			 *     }
			 */
			lcPhone?: Record<string, never>
			/** @example John Deo */
			name?: string
			permissions?: components['schemas']['PermissionsDto']
			/** @example +1 808-868-8888 */
			phone?: string
			roles?: components['schemas']['RoleSchema']
			/** @enum {string} */
			scopes?:
				| 'campaigns.readonly'
				| 'campaigns.write'
				| 'calendars/events.write'
				| 'calendars/events.readonly'
				| 'contacts.write'
				| 'contacts/bulkActions.write'
				| 'workflows.readonly'
				| 'workflows.write'
				| 'triggers.write'
				| 'funnels.write'
				| 'websites.write'
				| 'medias.write'
				| 'medias.readonly'
				| 'opportunities.write'
				| 'opportunities/leadValue.readonly'
				| 'opportunities/bulkActions.write'
				| 'reporting/phone.readonly'
				| 'reporting/adwords.readonly'
				| 'reporting/facebookAds.readonly'
				| 'reporting/attributions.readonly'
				| 'reporting/agent.readonly'
				| 'reporting/reports.write'
				| 'reporting/reports.readonly'
				| 'payments.write'
				| 'payments/refunds.write'
				| 'payments/records.write'
				| 'payments/exports.write'
				| 'payments/subscriptionsCancel.write'
				| 'invoices.write'
				| 'invoices.readonly'
				| 'invoices/schedule.readonly'
				| 'invoices/schedule.write'
				| 'invoices/template.readonly'
				| 'invoices/template.write'
				| 'reputation/review.write'
				| 'reputation/listing.write'
				| 'conversations.write'
				| 'conversations.readonly'
				| 'conversations/message.readonly'
				| 'conversations/message.write'
				| 'contentAI.write'
				| 'dashboard/stats.readonly'
				| 'locations/tags.write'
				| 'locations/tags.readonly'
				| 'marketing.write'
				| 'eliza.write'
				| 'settings.write'
				| 'socialplanner/post.write'
				| 'socialplanner/account.readonly'
				| 'socialplanner/account.write'
				| 'socialplanner/category.readonly'
				| 'socialplanner/category.write'
				| 'socialplanner/csv.readonly'
				| 'socialplanner/csv.write'
				| 'socialplanner/group.write'
				| 'socialplanner/hashtag.readonly'
				| 'socialplanner/hashtag.write'
				| 'socialplanner/oauth.readonly'
				| 'socialplanner/oauth.write'
				| 'socialplanner/post.readonly'
				| 'socialplanner/recurring.readonly'
				| 'socialplanner/recurring.write'
				| 'socialplanner/review.readonly'
				| 'socialplanner/review.write'
				| 'socialplanner/rss.readonly'
				| 'socialplanner/rss.write'
				| 'socialplanner/search.readonly'
				| 'socialplanner/setting.readonly'
				| 'socialplanner/setting.write'
				| 'socialplanner/stat.readonly'
				| 'socialplanner/tag.readonly'
				| 'socialplanner/tag.write'
				| 'socialplanner/filters.readonly'
				| 'socialplanner/medias.readonly'
				| 'socialplanner/medias.write'
				| 'socialplanner/watermarks.readonly'
				| 'socialplanner/watermarks.write'
				| 'socialplanner/metatag.readonly'
				| 'socialplanner/facebook.readonly'
				| 'socialplanner/linkedin.readonly'
				| 'socialplanner/twitter.readonly'
				| 'socialplanner/notification.readonly'
				| 'socialplanner/notification.write'
				| 'socialplanner/snapshot.readonly'
				| 'socialplanner/snapshot.write'
				| 'marketing/affiliate.write'
				| 'blogs.write'
				| 'membership.write'
				| 'communities.write'
				| 'certificates.write'
				| 'certificates.readonly'
				| 'adPublishing.write'
				| 'adPublishing.readonly'
				| 'prospecting.write'
				| 'prospecting.readonly'
				| 'prospecting/reports.readonly'
				| 'private-integration-location.readonly'
				| 'private-integration-location.write'
				| 'private-integration-company.readonly'
				| 'private-integration-company.write'
				| 'native-integrations.readonly'
				| 'native-integrations.write'
				| 'wordpress.write'
				| 'wordpress.read'
				| 'custom-menu-link.write'
				| 'users/team-management.write'
				| 'users/team-management.readonly'
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
	'get-user-by-location': {
		parameters: {
			query: {
				/** @example s4BtzHFWmT28mbb85uPa */
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
	'get-user': {
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
			path?: never
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
	'search-users': {
		parameters: {
			query: {
				/**
				 * @description Company ID in which the search needs to be performed
				 * @example 5DP41231LkQsiKESj6rh
				 */
				companyId: string
				enabled2waySync?: boolean
				/**
				 * @description List of User IDs to be filtered in the search
				 * @example 5DP4iH6HLkQsiKESj6rh,5DP4iH6HLkQsiKESj34h
				 */
				ids?: string
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
				 * @description The search term for the user is matched based on the user full name, email or phone
				 * @example John
				 */
				query?: string
				/**
				 * @description Role of the users to be filtered in the search
				 * @example admin
				 */
				role?: string
				/**
				 * @description No of results to be skipped before returning the result
				 * @example 1
				 */
				skip?: string
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
				/**
				 * @description Type of the users to be filtered in the search
				 * @example agency
				 */
				type?: string
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
}
