export interface paths {
	'/ad-publishing/facebook/ad-accounts': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get ad accounts
		 * @description Retrieve Facebook ad accounts available for the connected user
		 */
		get: operations['fb-get-ad-accounts']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/ad-publishing/facebook/ad-accounts/{adAccountId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get ad account details
		 * @description Retrieve details of a specific Facebook ad account
		 */
		get: operations['fb-get-ad-account']
		put?: never
		post?: never
		/**
		 * Delete ad account
		 * @description Remove a Facebook ad account connection from a location
		 */
		delete: operations['fb-delete-ad-account']
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/ad-publishing/facebook/ads-v2': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		/**
		 * Upsert ad
		 * @description Create or update a Facebook ad (v2)
		 */
		put: operations['fb-upsert-ad']
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/ad-publishing/facebook/ads/{adId}': {
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
		 * Delete ad
		 * @description Delete a Facebook ad by ID
		 */
		delete: operations['fb-delete-ad']
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/ad-publishing/facebook/ads/{adId}/duplicate': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Duplicate ad
		 * @description Duplicate an existing Facebook ad
		 */
		post: operations['fb-duplicate-ad']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/ad-publishing/facebook/ads/{adId}/pause': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Pause ad
		 * @description Pause a running Facebook ad
		 */
		post: operations['fb-pause-ad']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/ad-publishing/facebook/ads/{adId}/resume': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Resume ad
		 * @description Resume a paused Facebook ad
		 */
		post: operations['fb-resume-ad']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/ad-publishing/facebook/adsets': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		/**
		 * Upsert adset
		 * @description Create or update a Facebook ad set
		 */
		put: operations['fb-upsert-adset']
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/ad-publishing/facebook/adsets/{adsetId}': {
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
		 * Delete ad set
		 * @description Delete a Facebook ad set by ID
		 */
		delete: operations['fb-delete-adset']
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/ad-publishing/facebook/adsets/{adsetId}/duplicate': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Duplicate ad set
		 * @description Duplicate an existing Facebook ad set
		 */
		post: operations['fb-duplicate-adset']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/ad-publishing/facebook/adsets/{adsetId}/pause': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Pause ad set
		 * @description Pause a running Facebook ad set
		 */
		post: operations['fb-pause-adset']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/ad-publishing/facebook/adsets/{adsetId}/resume': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Resume ad set
		 * @description Resume a paused Facebook ad set
		 */
		post: operations['fb-resume-adset']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/ad-publishing/facebook/campaign/{campaignId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get campaign with linked entities
		 * @description Retrieve a Facebook campaign with its linked adsets and ads
		 */
		get: operations['fb-get-campaign']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/ad-publishing/facebook/campaigns': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		/**
		 * Upsert campaign
		 * @description Create or update a Facebook campaign
		 */
		put: operations['fb-upsert-campaign']
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/ad-publishing/facebook/campaigns/{campaignId}': {
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
		 * Delete campaign
		 * @description Delete a Facebook campaign by ID
		 */
		delete: operations['fb-delete-campaign']
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/ad-publishing/facebook/campaigns/{campaignId}/duplicate': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Duplicate campaign
		 * @description Duplicate an existing Facebook campaign
		 */
		post: operations['fb-duplicate-campaign']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/ad-publishing/facebook/campaigns/{campaignId}/pause': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Pause campaign
		 * @description Pause a running Facebook campaign
		 */
		post: operations['fb-pause-campaign']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/ad-publishing/facebook/campaigns/{campaignId}/publish': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Publish campaign
		 * @description Publish a Facebook campaign and push it live to Facebook
		 */
		post: operations['fb-publish-campaign']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/ad-publishing/facebook/campaigns/{campaignId}/resume': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Resume campaign
		 * @description Resume a paused Facebook campaign
		 */
		post: operations['fb-resume-campaign']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/ad-publishing/facebook/conversation-forms': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get conversation forms
		 * @description Retrieve Facebook conversation lead forms for a location
		 */
		get: operations['fb-get-conversation-forms']
		put?: never
		/**
		 * Create conversation form
		 * @description Create a new Facebook conversation lead form
		 */
		post: operations['fb-create-conversation-form']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/ad-publishing/facebook/custom-audience': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get custom audiences
		 * @description Retrieve Facebook custom audiences for a location
		 */
		get: operations['fb-get-custom-audiences']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/ad-publishing/facebook/custom-audience/{audienceId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get custom audience by ID
		 * @description Retrieve a specific Facebook custom audience by its ID
		 */
		get: operations['fb-get-custom-audience-by-id']
		/**
		 * Update custom audience
		 * @description Update name or description of a Facebook custom audience
		 */
		put: operations['fb-update-custom-audience']
		post?: never
		/**
		 * Delete custom audience
		 * @description Delete a Facebook custom audience by ID
		 */
		delete: operations['fb-delete-custom-audience']
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/ad-publishing/facebook/custom-audience/{audienceId}/member': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		/**
		 * Add custom audience member
		 * @description Add a member to a Facebook custom audience
		 */
		put: operations['fb-add-custom-audience-member']
		post?: never
		/**
		 * Remove custom audience member
		 * @description Remove a member from a Facebook custom audience
		 */
		delete: operations['fb-remove-custom-audience-member']
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/ad-publishing/facebook/custom-audience/{audienceId}/member/batch': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		/**
		 * Batch update audience members
		 * @description Add or remove members in bulk from a Facebook custom audience via CSV or smart lists
		 */
		put: operations['fb-batch-update-audience-members']
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/ad-publishing/facebook/entity': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get entities
		 * @description Retrieve Facebook campaigns, adsets, or ads based on entity type
		 */
		get: operations['fb-get-entity']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/ad-publishing/facebook/integration': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get Facebook integration
		 * @description Retrieve the Facebook ad integration details for a location
		 */
		get: operations['fb-get-integration']
		put?: never
		/**
		 * Create Facebook integration
		 * @description Create a Facebook ad integration for a location with page and ad account
		 */
		post: operations['fb-create-integration']
		/**
		 * Delete Facebook integration
		 * @description Remove the Facebook ad integration from a location
		 */
		delete: operations['fb-delete-integration']
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/ad-publishing/facebook/lead-form/{leadFormId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get lead form by ID
		 * @description Retrieve a specific Facebook lead form by its ID
		 */
		get: operations['fb-get-lead-form']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/ad-publishing/facebook/me': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get current Facebook user
		 * @description Retrieve the authenticated Facebook user profile for a location
		 */
		get: operations['fb-get-current-user']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/ad-publishing/facebook/page': {
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
		 * Delete page connection
		 * @description Remove a Facebook page connection from a location
		 */
		delete: operations['fb-delete-page']
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/ad-publishing/facebook/page/{pageId}/forms': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get page lead forms
		 * @description Retrieve lead gen forms for a specific Facebook page
		 */
		get: operations['fb-get-page-lead-forms']
		put?: never
		/**
		 * Create page lead form
		 * @description Create a new lead gen form on a Facebook page
		 */
		post: operations['fb-create-page-lead-form']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/ad-publishing/facebook/page/{pageId}/instagram': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get Instagram accounts for page
		 * @description Retrieve Instagram accounts linked to a specific Facebook page
		 */
		get: operations['fb-get-instagram-accounts']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/ad-publishing/facebook/page/default': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		/**
		 * Set default page
		 * @description Set the default Facebook page for a location
		 */
		put: operations['fb-set-default-page']
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/ad-publishing/facebook/pages': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get Facebook pages
		 * @description Retrieve Facebook pages associated with the connected account
		 */
		get: operations['fb-get-pages']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/ad-publishing/facebook/pixels': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get conversion pixels
		 * @description Retrieve Facebook conversion pixels for a location
		 */
		get: operations['fb-get-pixels']
		/**
		 * Upsert conversion pixel
		 * @description Create or update a Facebook conversion pixel configuration
		 */
		put: operations['fb-upsert-pixel']
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/ad-publishing/facebook/reporting': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get reporting data
		 * @description Retrieve aggregated Facebook ad reporting metrics for a location
		 */
		get: operations['fb-get-reporting']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/ad-publishing/facebook/reporting/campaign/{campaignId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get campaign reporting
		 * @description Retrieve reporting metrics for a specific Facebook campaign
		 */
		get: operations['fb-get-campaign-reporting']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/ad-publishing/facebook/reporting/list': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get reporting list
		 * @description Retrieve a list of Facebook campaigns, adsets, or ads with reporting data
		 */
		get: operations['fb-get-reporting-list']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/ad-publishing/facebook/targeting/search': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Search targeting options
		 * @description Search Facebook geo-locations and interests for ad targeting
		 */
		get: operations['fb-search-targeting']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/ad-publishing/google/ad-accounts': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get Google ad accounts
		 * @description Retrieve Google Ads accounts available for the connected user
		 */
		get: operations['google-get-ad-accounts']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/ad-publishing/google/ad-accounts/{adAccountId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get ad account details
		 * @description Retrieve details of a specific Google Ads account
		 */
		get: operations['google-get-ad-account-details']
		put?: never
		post?: never
		/**
		 * Delete ad account
		 * @description Remove a Google Ads account connection from a location
		 */
		delete: operations['google-delete-ad-account']
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/ad-publishing/google/ads': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		/**
		 * Upsert Google campaign
		 * @description Create or update a full Google Ads campaign structure
		 */
		put: operations['google-upsert-campaign']
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/ad-publishing/google/ads/{adId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get Google campaign by ID
		 * @description Retrieve a specific Google Ads campaign by ID
		 */
		get: operations['google-get-campaign-by-id']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/ad-publishing/google/ads/{adId}/publish': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Publish ad
		 * @description Publish a Google ad and push it live
		 */
		post: operations['google-publish-ad']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/ad-publishing/google/assets': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get assets
		 * @description Retrieve Google Ads creative assets for a location
		 */
		get: operations['google-get-assets']
		put?: never
		/**
		 * Upsert assets
		 * @description Create or update Google Ads creative assets
		 */
		post: operations['google-upsert-assets']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/ad-publishing/google/audiences': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get audiences
		 * @description Retrieve Google Ads combined audiences for a location
		 */
		get: operations['google-get-audiences']
		/**
		 * Upsert audience
		 * @description Create or update a Google Ads combined audience
		 */
		put: operations['google-upsert-audience']
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/ad-publishing/google/audiences/{audienceId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get audience by ID
		 * @description Retrieve a specific Google Ads combined audience by ID
		 */
		get: operations['google-get-audience-by-id']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/ad-publishing/google/conversion-goals': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get conversion goals
		 * @description Retrieve Google Ads conversion goals for a location
		 */
		get: operations['google-get-conversion-goals']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/ad-publishing/google/conversions': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get conversions
		 * @description Retrieve Google Ads conversion actions for a location
		 */
		get: operations['google-get-conversions']
		/**
		 * Upsert conversion
		 * @description Create or update a Google Ads conversion action
		 */
		put: operations['google-upsert-conversion']
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/ad-publishing/google/conversions/{conversionId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get conversion by ID
		 * @description Retrieve a specific Google Ads conversion action by ID
		 */
		get: operations['google-get-conversion-by-id']
		put?: never
		post?: never
		/**
		 * Delete conversion
		 * @description Delete a Google Ads conversion action by ID
		 */
		delete: operations['google-delete-conversion']
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/ad-publishing/google/entity': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get entities
		 * @description Retrieve Google campaigns, ad groups, or ads based on entity type
		 */
		get: operations['google-get-entity']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/ad-publishing/google/integration': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get Google integration
		 * @description Retrieve the Google Ads integration details for a location
		 */
		get: operations['google-get-integration']
		put?: never
		/**
		 * Create Google integration
		 * @description Create a Google Ads integration for a location
		 */
		post: operations['google-create-integration']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/ad-publishing/google/keyword-ideas': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Get keyword ideas
		 * @description Retrieve keyword suggestions for Google Ads campaigns
		 */
		post: operations['google-get-keyword-ideas']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/ad-publishing/google/me': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get current Google user
		 * @description Retrieve the authenticated Google user info for a location
		 */
		get: operations['google-get-current-user']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/ad-publishing/google/reporting': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get reporting data
		 * @description Retrieve aggregated Google Ads reporting metrics for a location
		 */
		get: operations['google-get-reporting']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/ad-publishing/google/reporting/campaign/{campaignId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get campaign reporting
		 * @description Retrieve reporting metrics for a specific Google campaign
		 */
		get: operations['google-get-campaign-reporting']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/ad-publishing/google/reporting/list': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get reporting list
		 * @description Retrieve a list of Google campaigns or ad groups with reporting data
		 */
		get: operations['google-get-reporting-list']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/ad-publishing/google/segments': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get segments
		 * @description Retrieve Google Ads audience segments for a location
		 */
		get: operations['google-get-segments']
		/**
		 * Upsert segment
		 * @description Create or update a Google Ads audience segment
		 */
		put: operations['google-upsert-segment']
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/ad-publishing/google/segments/{segmentId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get segment by ID
		 * @description Retrieve a specific Google Ads audience segment by ID
		 */
		get: operations['google-get-segment-by-id']
		put?: never
		post?: never
		/**
		 * Delete segment
		 * @description Delete a Google Ads audience segment by ID
		 */
		delete: operations['google-delete-segment']
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/ad-publishing/google/segments/offline-user-list-job': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Create offline user list job
		 * @description Create a job to upload users to a Google customer match list
		 */
		post: operations['google-create-offline-user-list-job']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/ad-publishing/google/target-interests': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get target interests
		 * @description Retrieve affinity and in-market audience options for Google Ads targeting
		 */
		get: operations['google-get-target-interests']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/ad-publishing/google/targeting/search': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Search targeting options
		 * @description Search Google geo-locations for ad targeting
		 */
		get: operations['google-search-targeting']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/ad-publishing/linkedin/{accountId}/form': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Create lead form
		 * @description Create a new LinkedIn lead gen form for an ad account
		 */
		post: operations['li-create-lead-form']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/ad-publishing/linkedin/{accountId}/forms': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get lead forms
		 * @description Retrieve LinkedIn lead gen forms for an ad account
		 */
		get: operations['li-get-lead-forms']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/ad-publishing/linkedin/{adId}/status': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		/**
		 * Update ad status
		 * @description Pause or resume a LinkedIn ad, campaign, or ad group
		 */
		patch: operations['li-update-ad-status']
		trace?: never
	}
	'/ad-publishing/linkedin/ad-account': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get ad account details
		 * @description Retrieve details of a specific LinkedIn ad account
		 */
		get: operations['li-get-ad-account-details']
		put?: never
		post?: never
		/**
		 * Delete ad account
		 * @description Remove a LinkedIn ad account connection from a location
		 */
		delete: operations['li-delete-ad-account']
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/ad-publishing/linkedin/ad-accounts': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get LinkedIn ad accounts
		 * @description Retrieve LinkedIn Ads accounts available for the connected user
		 */
		get: operations['li-get-ad-accounts']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/ad-publishing/linkedin/ads': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		/**
		 * Upsert ad campaign group
		 * @description Create or update a LinkedIn ad campaign group with campaigns and ads
		 */
		put: operations['li-upsert-campaign-group']
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/ad-publishing/linkedin/ads/{adId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get ad campaign group
		 * @description Retrieve a LinkedIn ad campaign group by ID
		 */
		get: operations['li-get-campaign-group']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/ad-publishing/linkedin/ads/{adId}/publish': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Publish ad campaign group
		 * @description Publish a LinkedIn ad campaign group and push it live
		 */
		post: operations['li-publish-campaign-group']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/ad-publishing/linkedin/integration': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get LinkedIn integration
		 * @description Retrieve the LinkedIn Ads integration details for a location
		 */
		get: operations['li-get-integration']
		put?: never
		/**
		 * Create LinkedIn integration
		 * @description Create a LinkedIn Ads integration for a location with ad account details
		 */
		post: operations['li-create-integration']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/ad-publishing/linkedin/me': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get current LinkedIn user
		 * @description Retrieve the authenticated LinkedIn user info for a location
		 */
		get: operations['li-get-current-user']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/ad-publishing/linkedin/reporting': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get ad analytics
		 * @description Retrieve LinkedIn Ads analytics data with configurable pivot and time grouping
		 */
		get: operations['li-get-ad-analytics']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/ad-publishing/linkedin/reporting/campaign-group/{campaignGroupId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get campaign group reporting
		 * @description Retrieve reporting metrics for a specific LinkedIn campaign group
		 */
		get: operations['li-get-campaign-group-reporting']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/ad-publishing/linkedin/reporting/list': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get reporting list
		 * @description Retrieve a list of LinkedIn campaigns or campaign groups with reporting data
		 */
		get: operations['li-get-reporting-list']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/ad-publishing/linkedin/targeting/search': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Search targeting options
		 * @description Search LinkedIn targeting facets such as locations, industries, and job titles
		 */
		get: operations['li-search-targeting']
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
		AdCampaignDTO: {
			adCampaignGroupId?: string
			adCampaignId?: string
			ads?: components['schemas']['LinkedInAdDTO'][]
			/** @description Campaign audience targeting */
			audience?: components['schemas']['AudienceDTO']
			campaignType?: string
			id?: string
			/** @description LinkedIn API error message */
			linkedInError?: string
			/** @description Campaign locale */
			locale?: components['schemas']['LocaleDTO']
			/**
			 * @description Campaign audience targeting
			 * @enum {string}
			 */
			mediaType?: 'STANDARD_UPDATE' | 'SINGLE_VIDEO' | 'CAROUSEL'
			meta?: Record<string, never>
			name?: string
			/** @enum {string} */
			publishingStatus?:
				| 'DRAFT'
				| 'SCHEDULED'
				| 'PUBLISHED'
				| 'PUBLISHING'
				| 'FAILED'
				| 'IN_REVIEW'
				| 'PAUSED'
				| 'ARCHIVED'
				| 'WITH_ISSUES'
				| 'REJECTED'
			/** @description Bid unit cost */
			unitCost?: components['schemas']['UnitCostDTO']
		}
		AdCampaignGroupDataDTO: {
			/** @enum {string} */
			adBudgetOptimization?: 'MAXIMUM_DELIVERY' | 'COST_CAP'
			adCampaignGroupId?: string
			adCampaigns?: components['schemas']['AdCampaignDTO'][]
			budget?: components['schemas']['LinkedInBudgetDTO']
			id?: string
			linkedInAdAccountId?: string
			linkedInError?: string
			/** @description Location ID */
			locationId: string
			meta?: Record<string, never>
			name?: string
			/** @enum {string} */
			objectiveType?: 'LEAD_GENERATION' | 'WEBSITE_VISIT'
			/** @enum {string} */
			publishingStatus?:
				| 'DRAFT'
				| 'SCHEDULED'
				| 'PUBLISHED'
				| 'PUBLISHING'
				| 'FAILED'
				| 'IN_REVIEW'
				| 'PAUSED'
				| 'ARCHIVED'
				| 'WITH_ISSUES'
				| 'REJECTED'
			unpublishedChanges?: boolean
		}
		AdScheduleTargetDTO: {
			/**
			 * @description Day of the week for this schedule
			 * @example MONDAY
			 * @enum {string}
			 */
			dayOfWeek:
				| 'MONDAY'
				| 'TUESDAY'
				| 'WEDNESDAY'
				| 'THURSDAY'
				| 'FRIDAY'
				| 'SATURDAY'
				| 'SUNDAY'
			/**
			 * @description End hour in 24h format (0-23)
			 * @example 17
			 */
			endHour: number
			/**
			 * @description Minute mark the schedule ends at
			 * @example ZERO
			 * @enum {string}
			 */
			endMinute: 'ZERO' | 'FIFTEEN' | 'THIRTY' | 'FORTY_FIVE'
			/**
			 * @description Start hour in 24h format (0-23)
			 * @example 9
			 */
			startHour: number
			/**
			 * @description Minute mark the schedule starts at
			 * @example ZERO
			 * @enum {string}
			 */
			startMinute: 'ZERO' | 'FIFTEEN' | 'THIRTY' | 'FORTY_FIVE'
		}
		AudienceCustomAudienceItemDTO: {
			/**
			 * @description Custom audience ID
			 * @example 23851234567890
			 */
			id: string
			/**
			 * @description Custom audience name
			 * @example Website Visitors - Last 30 Days
			 */
			name: string
		}
		AudienceDimensionDTO: {
			/**
			 * @description Age range filters
			 * @example [
			 *       {
			 *         "minAge": 25,
			 *         "maxAge": 34
			 *       }
			 *     ]
			 */
			ageRanges?: string[]
			/** @description Audience segment references used for targeting */
			audienceSegments?: components['schemas']['AudienceSegmentsDTO']
			/**
			 * @description Gender targets
			 * @example [
			 *       "MALE",
			 *       "FEMALE"
			 *     ]
			 */
			genders?: string[]
			/**
			 * @description Include unknown age
			 * @example false
			 */
			isAgeUnknown?: boolean
			/**
			 * @description Parental status targets
			 * @example [
			 *       "PARENT"
			 *     ]
			 */
			parentalStatuses?: string[]
		}
		AudienceDTO: {
			/** @description Geographic location targets */
			geo_locations?: components['schemas']['GeoLocationDTO'][]
			/** @description Target audience attribute selections */
			targetAudience?: components['schemas']['TargetAudienceDTO']
		}
		AudienceInterestDTO: {
			/**
			 * @description Interest ID
			 * @example 6003139266461
			 */
			id: string
			/**
			 * @description Interest name
			 * @example Fitness and wellness
			 */
			name: string
			/**
			 * @description Interest category type (defaults to "interests" if omitted)
			 * @example interests
			 */
			type?: string
		}
		AudienceLocaleDTO: {
			/**
			 * @description Facebook locale key
			 * @example 6
			 */
			key: number
			/**
			 * @description Locale display name
			 * @example English (US)
			 */
			name: string
		}
		AudienceLocationDTO: {
			/** @description Geometry data for address-based targeting */
			geometry?: components['schemas']['AudienceLocationGeometry']
			/**
			 * @description Facebook location key
			 * @example US
			 */
			key: string
			/**
			 * @description Location display name
			 * @example United States
			 */
			name: string
			/**
			 * @description Targeting radius around the location (for city/address types)
			 * @example 25
			 */
			radius?: number
			/**
			 * @description Unit for the targeting radius
			 * @example mi
			 * @enum {string}
			 */
			radiusUnit?: 'km' | 'mi'
			/**
			 * @description Whether the location is included or excluded from targeting
			 * @example include
			 * @enum {string}
			 */
			selectionType: 'include' | 'exclude'
			/**
			 * @description Geographic location type
			 * @example country
			 * @enum {string}
			 */
			type:
				| 'country'
				| 'city'
				| 'region'
				| 'country_group'
				| 'geo_market'
				| 'large_geo_area'
				| 'medium_geo_area'
				| 'small_geo_area'
				| 'subcity'
				| 'neighborhood'
				| 'zip'
				| 'address'
		}
		AudienceLocationGeometry: {
			/**
			 * @description Geographic coordinates
			 * @example {
			 *       "lat": 40.7128,
			 *       "lng": -74.006
			 *     }
			 */
			location: Record<string, never>
			/**
			 * @description Geocoding result type
			 * @example APPROXIMATE
			 */
			location_type: string
		}
		AudiencePlacementsDTO: {
			/**
			 * @description Facebook placement positions
			 * @example [
			 *       "feed",
			 *       "right_hand_column",
			 *       "marketplace"
			 *     ]
			 */
			facebook?: string[]
			/**
			 * @description Instagram placement positions
			 * @example [
			 *       "stream",
			 *       "story",
			 *       "explore"
			 *     ]
			 */
			instagram?: string[]
			/**
			 * @description Messenger placement positions
			 * @example [
			 *       "messenger_home"
			 *     ]
			 */
			messenger?: string[]
		}
		AudienceSegmentsDTO: {
			/**
			 * @description Resource names of custom audience segments
			 * @example [
			 *       "customers/123/customAudiences/456"
			 *     ]
			 */
			customAudiences?: string[]
			/**
			 * @description Resource names of user interest segments (in-market or affinity audiences)
			 * @example [
			 *       "customers/123/userInterests/321"
			 *     ]
			 */
			userInterests?: string[]
			/**
			 * @description Resource names of user lists (remarketing lists, customer match lists, etc.)
			 * @example [
			 *       "customers/123/userLists/789"
			 *     ]
			 */
			userLists?: string[]
		}
		BadRequestDTO: {
			/** @example Bad Request */
			message?: string
			/** @example 400 */
			statusCode?: number
		}
		Budget: {
			/**
			 * @description Budget amount
			 * @example 1000
			 */
			amount: number
			/**
			 * @description Budget type
			 * @example DAILY
			 * @enum {string}
			 */
			budgetType: 'DAILY' | 'LIFETIME'
			/**
			 * @description Schedule end date
			 * @example 2024-01-31
			 */
			scheduleEndDate?: string
			/**
			 * @description Schedule start date
			 * @example 2024-01-01
			 */
			scheduleStartDate?: string
		}
		CallAssetPayloadDTO: {
			/**
			 * @description Ad schedule targets restricting when the call asset is shown
			 * @example [
			 *       {
			 *         "startMinute": "ZERO",
			 *         "endMinute": "ZERO",
			 *         "dayOfWeek": "MONDAY",
			 *         "startHour": 9,
			 *         "endHour": 17
			 *       }
			 *     ]
			 */
			adScheduleTargets?: components['schemas']['AdScheduleTargetDTO'][]
			/**
			 * @description Call conversion action resource name
			 * @example customers/123/conversionActions/456
			 */
			callConversionAction?: string
			/**
			 * @description Two-letter ISO country code
			 * @example US
			 */
			countryCode: string
			/**
			 * @description Phone number for call ads
			 * @example +14155551234
			 */
			phoneNumber: string
			/**
			 * @description Google Ads resource name for an existing call asset
			 * @example customers/123/assets/456
			 */
			resourceName?: string
		}
		CampaignDTO: {
			/** @description Campaign ad groups */
			adGroups?: components['schemas']['GoogleAdGroupDTO'][]
			/** @description Ad schedule rules */
			adSchedule?: components['schemas']['GoogleAdScheduleDTO'][]
			/** @description Advanced options */
			advancedOptions?: Record<string, never>
			/**
			 * @description Channel sub type
			 * @enum {string}
			 */
			advertisingChannelSubType?: 'DEMAND_GEN'
			/**
			 * @description Advertising channel
			 * @enum {string}
			 */
			advertisingChannelType:
				| 'SEARCH'
				| 'DISCOVERY'
				| 'DISPLAY'
				| 'HOTEL'
				| 'LOCAL'
				| 'MULTI_CHANNEL'
				| 'PERFORMANCE_MAX'
				| 'DEMAND_GEN'
			/** @description Campaign assets */
			assets?: components['schemas']['GoogleAssetsDTO']
			/** @description Campaign audience targeting */
			audience?: components['schemas']['GoogleCampaignAudienceDTO']
			/** @description Bidding strategy config */
			biddingStrategy?: components['schemas']['GoogleBiddingStrategyDTO']
			/** @description Campaign budget */
			budget?: components['schemas']['GoogleBudgetDTO']
			/** @description Campaign goal config */
			campaignGoal?: components['schemas']['GoogleCampaignGoalDTO']
			/**
			 * @description Goal type
			 * @enum {string}
			 */
			goalType?: 'WEBSITE_TRAFFIC' | 'LEAD'
			/** @description Google Ad account identifier */
			googleAdAccountId?: string
			/** @description Google Ads campaign resource ID */
			googleCampaignId?: string
			/** @description Campaign identifier */
			id?: string
			/**
			 * @description EU political ads flag
			 * @example false
			 */
			isEuPoliticalAds?: boolean
			/**
			 * @description Location identifier
			 * @example loc_abc123
			 */
			locationId: string
			/** @description Maximum CPC bid in micros */
			maximumCpc?: number
			/**
			 * @description Campaign name
			 * @example My Campaign
			 */
			name: string
			/** @description Network settings */
			networkSettings?: components['schemas']['GoogleNetworkSettingsDTO']
			/**
			 * @description Publishing status
			 * @enum {string}
			 */
			publishingStatus?:
				| 'DRAFT'
				| 'SCHEDULED'
				| 'PUBLISHED'
				| 'PUBLISHING'
				| 'FAILED'
				| 'IN_REVIEW'
				| 'PAUSED'
				| 'ARCHIVED'
				| 'WITH_ISSUES'
				| 'REJECTED'
			/**
			 * @description Traffic source
			 * @example WEBSITE
			 */
			source?: string
			/** @description Whether the campaign has unpublished changes */
			unpublishedChanges?: boolean
		}
		ConsentDTO: {
			/**
			 * @description Whether consent checkbox is required
			 * @example true
			 */
			checkRequired: boolean
			/** @description Consent text */
			consent: components['schemas']['LocalizedStringDTO']
			/**
			 * @description Consent identifier
			 * @example 1
			 */
			id: number
		}
		ConversionValueSettings: {
			/**
			 * @description When true, always uses the default value even if a transaction-specific value is provided
			 * @example false
			 */
			alwaysUseDefaultValue: boolean
			/**
			 * @description ISO 4217 currency code for the default value
			 * @example USD
			 */
			defaultCurrencyCode: string
			/**
			 * @description Default monetary value assigned to each conversion
			 * @example 10
			 */
			defaultValue: number
		}
		CreateConversationFormDTO: {
			/**
			 * @description Location identifier
			 * @example loc_abc123
			 */
			locationId: string
			/**
			 * @description Conversation form name
			 * @example Welcome Form
			 */
			name: string
			/**
			 * @description Quick-reply questions shown in the welcome message of the conversation form
			 * @example [
			 *       {
			 *         "question": "How can we help?",
			 *         "response": "Thanks for reaching out! A team member will assist you shortly."
			 *       },
			 *       {
			 *         "question": "I want to learn more",
			 *         "response": "Great! Here is a link to our services."
			 *       }
			 *     ]
			 */
			questions: components['schemas']['WelcomeMessageQuestion'][]
			/**
			 * @description Welcome message text
			 * @example Hi! How can we help?
			 */
			text: string
		}
		CreateGoogleIntegrationDTO: {
			/**
			 * @description Ad account identifier
			 * @example 123-456-7890
			 */
			adAccountId: string
			/**
			 * @description Location identifier
			 * @example loc_abc123
			 */
			locationId: string
			/**
			 * @description MCC identifier
			 * @example 987-654-3210
			 */
			mccId: string
		}
		CreateIntegrationDTO: {
			/**
			 * @description Ad account identifier
			 * @example act_123456
			 */
			adAccountId?: string
			/**
			 * @description Location identifier
			 * @example loc_abc123
			 */
			locationId: string
			/**
			 * @description Facebook page ID
			 * @example 123456789
			 */
			pageId: string
		}
		CreateLeadFormDTO: {
			/** @description Custom disclaimer config */
			customDisclaimer?: components['schemas']['CustomDisclaimer']
			/** @description Greeting card config */
			greetingCard?: components['schemas']['GreetingCard']
			/**
			 * @description Location identifier
			 * @example loc_abc123
			 */
			locationId: string
			/**
			 * @description Lead form name
			 * @example Contact Form
			 */
			name: string
			/**
			 * @description Privacy policy URL
			 * @example https://example.com/privacy
			 */
			privacyPolicyLink: string
			/**
			 * @description Privacy policy text
			 * @example We respect your privacy
			 */
			privacyPolicyText?: string
			/**
			 * @description Question page headline
			 * @example Tell us about yourself
			 */
			questionPageHeadline?: string
			/**
			 * @description List of questions displayed on the lead form
			 * @example [
			 *       {
			 *         "key": "full_name",
			 *         "type": "FULL_NAME",
			 *         "options": []
			 *       },
			 *       {
			 *         "key": "email_address",
			 *         "type": "EMAIL",
			 *         "options": []
			 *       },
			 *       {
			 *         "key": "are_you_interested",
			 *         "label": "Are you interested?",
			 *         "type": "CUSTOM",
			 *         "options": [
			 *           {
			 *             "value": "Yes"
			 *           },
			 *           {
			 *             "value": "No"
			 *           }
			 *         ]
			 *       }
			 *     ]
			 */
			questions: components['schemas']['FormQuestion'][]
			/** @description Thank you page config */
			thankYouPage: components['schemas']['ThankYouPage']
			/**
			 * @description Lead form type
			 * @example MORE_VOLUME
			 * @enum {string}
			 */
			type: 'MORE_VOLUME' | 'HIGHER_INTENT'
		}
		CreateLinkedinIntegrationDTO: {
			/**
			 * @description Ad account identifier
			 * @example 12345678
			 */
			adAccountId: string
			/**
			 * @description Ad account name
			 * @example My Ad Account
			 */
			adAccountName: string
			/**
			 * @description Currency code
			 * @example USD
			 */
			currencyCode: string
			/**
			 * @description Location identifier
			 * @example loc_123
			 */
			locationId: string
			/**
			 * @description Organization identifier
			 * @example 12345678
			 */
			organizationId: string
		}
		CreateOfflineUserListJobDTO: {
			/**
			 * @description CSV file path
			 * @example /uploads/users.csv
			 */
			csvPath?: string
			/**
			 * @description Dynamic list flag
			 * @example false
			 */
			isDynamic?: boolean
			/**
			 * @description Location identifier
			 * @example loc_abc123
			 */
			locationId: string
			/**
			 * @description Smart list IDs
			 * @example [
			 *       "sl_123"
			 *     ]
			 */
			smartListIds?: string[]
			/**
			 * @description User list identifier
			 * @example ul_123
			 */
			userListId?: string
		}
		CreationLocaleDTO: {
			/**
			 * @description Country code
			 * @example US
			 */
			country: string
			/**
			 * @description Language code
			 * @example en
			 */
			language: string
		}
		CustomDisclaimer: {
			/**
			 * @description Disclaimer body text
			 * @example By submitting...
			 */
			body: string
			/**
			 * @description Consent checkboxes the user must agree to before submitting the form
			 * @example [
			 *       {
			 *         "is_required": true,
			 *         "text": "I agree to the Terms & Conditions",
			 *         "key": "terms_checkbox"
			 *       },
			 *       {
			 *         "is_required": false,
			 *         "text": "I would like to receive marketing emails",
			 *         "key": "marketing_optin"
			 *       }
			 *     ]
			 */
			checkboxes?: components['schemas']['CustomDisclaimerCheckbox'][]
			/**
			 * @description Disclaimer title
			 * @example Terms & Conditions
			 */
			title: string
		}
		CustomDisclaimerCheckbox: {
			/**
			 * @description Checkbox required flag
			 * @example true
			 */
			is_required: boolean
			/**
			 * @description Checkbox unique key
			 * @example terms_checkbox
			 */
			key: string
			/**
			 * @description Checkbox text label
			 * @example I agree to terms
			 */
			text: string
		}
		CustomQuestionFieldDTO: {
			/**
			 * @description Custom question text shown to the user
			 * @example What service are you interested in?
			 */
			customQuestionText: string
			/**
			 * @description Answer choices for the custom question
			 * @example [
			 *       {
			 *         "answerTexts": [
			 *           "Web Design",
			 *           "SEO",
			 *           "PPC"
			 *         ]
			 *       }
			 *     ]
			 */
			singleChoiceAnswers: string[]
		}
		FacebookAudienceDTO: {
			/**
			 * @description Maximum age for targeting
			 * @example 65
			 */
			age_max?: number
			/**
			 * @description Minimum age for targeting
			 * @example 18
			 */
			age_min?: number
			/**
			 * @description Gender targeting (1 = male, 2 = female)
			 * @example [
			 *       1,
			 *       2
			 *     ]
			 */
			genders?: number[]
			/**
			 * @description Geographic locations to target or exclude
			 * @example [
			 *       {
			 *         "key": "US",
			 *         "name": "United States",
			 *         "type": "country",
			 *         "selectionType": "include"
			 *       },
			 *       {
			 *         "key": "2421836",
			 *         "name": "New York",
			 *         "type": "city",
			 *         "selectionType": "include",
			 *         "radius": 25,
			 *         "radiusUnit": "mile"
			 *       }
			 *     ]
			 */
			geo_locations: components['schemas']['AudienceLocationDTO'][]
			/**
			 * @description Interest-based targeting criteria
			 * @example [
			 *       {
			 *         "id": "6003139266461",
			 *         "name": "Fitness and wellness",
			 *         "type": "interests"
			 *       }
			 *     ]
			 */
			interests?: components['schemas']['AudienceInterestDTO'][]
			/**
			 * @description Language locales to target
			 * @example [
			 *       {
			 *         "name": "English (US)",
			 *         "key": 6
			 *       }
			 *     ]
			 */
			locales?: components['schemas']['AudienceLocaleDTO'][]
			/**
			 * @description Lookalike audiences to target
			 * @example [
			 *       {
			 *         "id": "23851234567890",
			 *         "name": "Lookalike - Website Visitors"
			 *       }
			 *     ]
			 */
			lookalike?: components['schemas']['AudienceCustomAudienceItemDTO'][]
			/** @description Ad placement positions per platform (only used when placementType is "manual") */
			placements?: components['schemas']['AudiencePlacementsDTO']
			/**
			 * @description Placement strategy — "auto" lets Facebook choose, "manual" uses the placements config
			 * @example auto
			 * @enum {string}
			 */
			placementType?: 'auto' | 'manual'
			/**
			 * @description Retargeting custom audiences to target
			 * @example [
			 *       {
			 *         "id": "23851234567891",
			 *         "name": "Website Visitors - Last 30 Days"
			 *       }
			 *     ]
			 */
			retargeting?: components['schemas']['AudienceCustomAudienceItemDTO'][]
		}
		FbSetDefaultPageBodyDTO: {
			/**
			 * @description Facebook page identifier
			 * @example 103456789012345
			 */
			pageId: string
		}
		FbUpdateAudienceBodyDTO: {
			/**
			 * @description Audience description
			 * @example Lookalike audience from website visitors
			 */
			description: string
			/**
			 * @description Location identifier
			 * @example HChooFuiyPpVYzeJ4HMe
			 */
			locationId: string
			/**
			 * @description Audience name
			 * @example My Custom Audience
			 */
			name: string
		}
		FlexibleRuleUserListDTO: {
			/** @description Exclusive rule operands */
			exclusiveOperands: components['schemas']['RuleOperandDTO'][]
			/** @description Inclusive rule operands */
			inclusiveOperands: components['schemas']['RuleOperandDTO'][]
			/**
			 * @description Operator for combining inclusive operands
			 * @example AND
			 */
			inclusiveRuleOperator?: string
		}
		FormQuestion: {
			/**
			 * @description Question key
			 * @example name
			 */
			key: string
			/**
			 * @description Question label text shown to the user
			 * @example What is your name?
			 */
			label?: string
			/**
			 * @description Answer options for multiple-choice questions (only applies to CUSTOM type)
			 * @example [
			 *       {
			 *         "value": "Yes"
			 *       },
			 *       {
			 *         "value": "No"
			 *       }
			 *     ]
			 */
			options?: components['schemas']['FormQuestionOption'][]
			/**
			 * @description Question input type — use a prefilled type for standard fields or CUSTOM / SHORT_ANSWER for freeform questions
			 * @example SHORT_ANSWER
			 * @enum {string}
			 */
			type:
				| 'CUSTOM'
				| 'CITY'
				| 'COMPANY_NAME'
				| 'COUNTRY'
				| 'DATE_OF_BIRTH'
				| 'EMAIL'
				| 'FIRST_NAME'
				| 'FULL_NAME'
				| 'GENDER'
				| 'JOB_TITLE'
				| 'LAST_NAME'
				| 'MARITAL_STATUS'
				| 'MILITARY_STATUS'
				| 'PHONE'
				| 'POST_CODE'
				| 'RELATIONSHIP_STATUS'
				| 'STATE'
				| 'STREET_ADDRESS'
				| 'WORK_EMAIL'
				| 'WORK_PHONE_NUMBER'
				| 'ZIP'
				| 'SHORT_ANSWER'
		}
		FormQuestionOption: {
			/**
			 * @description Option key
			 * @example option 1
			 */
			key: string
			/**
			 * @description Option value
			 * @example Option 1
			 */
			value: string
		}
		GeoAddressComponentDTO: {
			/** @description Full name of the address component */
			long_name?: string
			/** @description Abbreviated name of the address component */
			short_name?: string
			/**
			 * @description Address component types
			 * @example [
			 *       "locality",
			 *       "political"
			 *     ]
			 */
			types?: string[]
		}
		GeoGeometryDTO: {
			/** @description Location coordinates */
			location?: components['schemas']['GeoLatLngDTO']
			/** @description Location type (e.g. APPROXIMATE) */
			location_type?: string
			/** @description Viewport bounding box */
			viewport?: components['schemas']['GeoViewportDTO']
		}
		GeoLatLngDTO: {
			/** @description Latitude */
			lat?: number
			/** @description Longitude */
			lng?: number
		}
		GeoLocationDTO: {
			/**
			 * @description Facet URN
			 * @example urn:li:adTargetingFacet:locations
			 */
			facetUrn: string
			/**
			 * @description Location display name
			 * @example India
			 */
			name: string
			/**
			 * @description Selection type
			 * @example include
			 * @enum {string}
			 */
			selectionType: 'include' | 'exclude'
			/**
			 * @description Location URN
			 * @example urn:li:geo:12321321
			 */
			urn: string
		}
		GeoViewportDTO: {
			/** @description Northeast corner of the viewport */
			northeast?: components['schemas']['GeoLatLngDTO']
			/** @description Southwest corner of the viewport */
			southwest?: components['schemas']['GeoLatLngDTO']
		}
		GoogleAdContentDTO: {
			/** @description Ad campaign identifier */
			adCampaignId?: string
			/** @description Ad-level error message from Google */
			adError?: string
			/** @description Ad group identifier */
			adGroupId?: string
			/** @description Internal ad identifier */
			adId?: string
			/**
			 * @description Business name
			 * @example Acme Corp
			 */
			businessName?: string
			/**
			 * @description Call to action label
			 * @enum {string}
			 */
			callToActionLabel?:
				| 'AUTOMATED'
				| 'LEARN_MORE'
				| 'GET_QUOTE'
				| 'APPLY_NOW'
				| 'SIGN_UP'
				| 'CONTACT_US'
				| 'SUBSCRIBE'
				| 'DOWNLOAD'
				| 'BOOK_NOW'
				| 'SHOP_NOW'
				| 'BUY_NOW'
				| 'DONATE_NOW'
				| 'ORDER_NOW'
				| 'PLAY_NOW'
				| 'SEE_MORE'
			/** @description Carousel cards */
			carouselCards?: components['schemas']['GoogleCarouselCardDTO'][]
			/** @description Custom channels flag */
			customChannels?: boolean
			/**
			 * @description Ad descriptions
			 * @example [
			 *       "Great products"
			 *     ]
			 */
			descriptions?: string[]
			/**
			 * @description Final URL
			 * @example https://example.com
			 */
			finalUrl?: string
			/** @description Google Ads ad resource ID */
			googleAdId?: string
			/**
			 * @description Ad headlines
			 * @example [
			 *       "Buy Now",
			 *       "Best Deals"
			 *     ]
			 */
			headlines?: string[]
			/** @description Ad identifier */
			id?: string
			/** @description Whether the ad is soft-deleted */
			isDeleted?: boolean
			/**
			 * @description Long headlines
			 * @example [
			 *       "Discover Great Deals Today"
			 *     ]
			 */
			longHeadlines?: string[]
			/** @description Ad media items */
			media?: components['schemas']['GoogleMediaDTO'][]
			/**
			 * @description Media type
			 * @enum {string}
			 */
			mediaType?: 'IMAGE' | 'VIDEO' | 'CAROUSEL'
			/** @description Ad name */
			name?: string
			/**
			 * @description Display path 1
			 * @example products
			 */
			path1?: string
			/**
			 * @description Display path 2
			 * @example deals
			 */
			path2?: string
			/** @description Channel placements */
			placements?: (
				| 'GMAIL'
				| 'YOUTUBE_IN_STREAM'
				| 'YOUTUBE_SHORTS'
				| 'YOUTUBE_IN_FEED'
				| 'DISCOVER'
				| 'DISPLAY'
			)[]
			/**
			 * @description Ad publishing status
			 * @enum {string}
			 */
			publishingStatus?:
				| 'DRAFT'
				| 'SCHEDULED'
				| 'PUBLISHED'
				| 'PUBLISHING'
				| 'FAILED'
				| 'IN_REVIEW'
				| 'PAUSED'
				| 'ARCHIVED'
				| 'WITH_ISSUES'
				| 'REJECTED'
			/** @description YouTube video links */
			youtubeVideoLinks?: components['schemas']['GoogleYouTubeVideoLinkDTO'][]
		}
		GoogleAdGroupAudienceDTO: {
			/** @description Geo-location targeting */
			geo_locations?: components['schemas']['GoogleGeoLocationDTO'][]
			/** @description Language/locale targeting */
			locales?: components['schemas']['GoogleLocaleDTO'][]
		}
		GoogleAdGroupDTO: {
			/** @description Ad campaign identifier */
			adCampaignId?: string
			/** @description Ad content items */
			adContent?: components['schemas']['GoogleAdContentDTO'][]
			/** @description Ad group-level error from Google */
			adGroupError?: string
			/** @description Google ad group identifier */
			adGroupId?: string
			/** @description Ad group audience targeting */
			audience?: components['schemas']['GoogleAdGroupAudienceDTO']
			/** @description Custom channels flag */
			customChannels?: boolean
			/** @description Google Ads ad group resource ID */
			googleAdGroupId?: string
			/** @description Google audience resource ID */
			googleAudienceId?: string
			/** @description Ad group identifier */
			id?: string
			/** @description Keyword targeting */
			keywords?: components['schemas']['GoogleKeywordsDTO']
			/**
			 * @description Ad group name
			 * @example Ad Group 1
			 */
			name?: string
			/**
			 * @description Ad group publishing status
			 * @enum {string}
			 */
			publishingStatus?:
				| 'DRAFT'
				| 'SCHEDULED'
				| 'PUBLISHED'
				| 'PUBLISHING'
				| 'FAILED'
				| 'IN_REVIEW'
				| 'PAUSED'
				| 'ARCHIVED'
				| 'WITH_ISSUES'
				| 'REJECTED'
			/** @description Selected channel placements */
			selectedChannels?: (
				| 'GMAIL'
				| 'YOUTUBE_IN_STREAM'
				| 'YOUTUBE_SHORTS'
				| 'YOUTUBE_IN_FEED'
				| 'DISCOVER'
				| 'DISPLAY'
			)[]
		}
		GoogleAdScheduleDTO: {
			/**
			 * @description Day of week
			 * @enum {string}
			 */
			dayOfWeek:
				| 'FRIDAY'
				| 'MONDAY'
				| 'SATURDAY'
				| 'SUNDAY'
				| 'THURSDAY'
				| 'TUESDAY'
				| 'UNKNOWN'
				| 'UNSPECIFIED'
				| 'WEDNESDAY'
				| 'ALL_DAYS'
				| 'MONDAY_TO_FRIDAY'
				| 'SATURDAY_AND_SUNDAY'
			/**
			 * @description Start time (HH:MM)
			 * @example 09:00
			 */
			from: string
			/**
			 * @description End time (HH:MM)
			 * @example 17:00
			 */
			to: string
		}
		GoogleAssetImageDTO: {
			/** @description Error message if asset upload failed */
			error?: string
			/** @description Asset name */
			name?: string
			/** @description Google Ads resource name */
			resourceName?: string
			/** @description Image URL */
			url: string
		}
		GoogleAssetsDTO: {
			/** @description Business logo asset */
			businessLogo?: components['schemas']['GoogleAssetImageDTO']
			/** @description Call extension asset resource names */
			calls?: string[]
			/** @description Image assets */
			images?: components['schemas']['GoogleAssetImageDTO'][]
			/** @description Lead form asset resource name */
			leadForm?: string
			/** @description Sitelink asset resource names */
			sitelinks?: string[]
		}
		GoogleBiddingStrategyDTO: {
			/** @description Bidding strategy type */
			type?: string
			/** @description Bid value in micros */
			value?: number
		}
		GoogleBudgetDTO: {
			/**
			 * @description Budget amount in micros
			 * @example 5000
			 */
			amount?: number
			/**
			 * @description Budget type
			 * @enum {string}
			 */
			budgetType?: 'DAILY' | 'LIFETIME'
			/**
			 * @description Schedule end date
			 * @example 2024-12-31
			 */
			scheduleEndDate?: string
			/**
			 * @description Schedule start date
			 * @example 2024-01-01
			 */
			scheduleStartDate?: string
		}
		GoogleCampaignAudienceDTO: {
			/** @description Age range targeting */
			ageRange?: components['schemas']['GoogleDemographicTargetDTO'][]
			/** @description Gender targeting */
			gender?: components['schemas']['GoogleDemographicTargetDTO'][]
			/** @description Geo-location targeting */
			geo_locations?: components['schemas']['GoogleGeoLocationDTO'][]
			/** @description Language/locale targeting */
			locales?: components['schemas']['GoogleLocaleDTO'][]
			/** @description Audience segment targeting */
			segments?: components['schemas']['GoogleSegmentTargetDTO'][]
			/** @description Interest-based targeting */
			targetInterests?: components['schemas']['GoogleTargetInterestsDTO']
		}
		GoogleCampaignGoalDTO: {
			/** @description Whether this is a custom conversion goal */
			isCustomConversionGoal?: boolean
			/**
			 * @description Campaign goal type
			 * @enum {string}
			 */
			type: 'CONVERSIONS' | 'CLICK' | 'YOUTUBE_ENGAGEMENT'
			/** @description Goal value (e.g. conversion action resource name) */
			value?: string
		}
		GoogleCarouselCardDTO: {
			/** @description Call to action label */
			callToActionLabel?: string
			/**
			 * @description Card final URL
			 * @example https://example.com
			 */
			finalUrl?: string
			/**
			 * @description Card headline
			 * @example Shop Now
			 */
			headline?: string
			/** @description Card media items */
			media?: components['schemas']['GoogleMediaDTO'][]
		}
		GoogleDemographicTargetDTO: {
			/** @description Demographic enum value */
			enum: string
			/** @description Whether this is a negative target */
			negative: boolean
		}
		GoogleGeoLocationDTO: {
			/** @description Address components from Google Geocoding API */
			address_components?: components['schemas']['GeoAddressComponentDTO'][]
			/** @description Country name */
			country_name?: string
			/** @description Full formatted address string */
			formatted_address?: string
			/** @description Geometry data from Google Geocoding API */
			geometry?: components['schemas']['GeoGeometryDTO']
			/** @description Location identifier (place_id) */
			id?: string
			/** @description Geo target constant resource name */
			key?: string
			/** @description Location display name */
			name?: string
			/** @description Google place ID */
			place_id?: string
			/** @description Radius for proximity targeting */
			radius?: number
			/**
			 * @description Radius unit
			 * @enum {string}
			 */
			radiusUnit?: 'km' | 'mi'
			/** @description Google Ads resource name */
			resourceName?: string
			/**
			 * @description Include or exclude this location
			 * @enum {string}
			 */
			selectionType?: 'include' | 'exclude'
			/** @description Location type (city, region, country, address, etc.) */
			type?: string
		}
		GoogleKeywordItemDTO: {
			/** @description Keyword text */
			keyword: string
			/** @description Match type (BROAD, PHRASE, EXACT) */
			matchType: string
		}
		GoogleKeywordsDTO: {
			/** @description Negative keywords */
			negatives?: components['schemas']['GoogleKeywordItemDTO'][]
			/** @description Positive keywords */
			positives?: components['schemas']['GoogleKeywordItemDTO'][]
		}
		GoogleLocaleDTO: {
			/** @description Language identifier */
			id?: string
			/** @description Language key */
			key?: string
			/** @description Language display name */
			name?: string
			/** @description Language resource name */
			resourceName?: string
		}
		GoogleMediaDTO: {
			/** @description Error message if media failed */
			error?: string
			/** @description Image type classification */
			imageType?: string
			/**
			 * @description Is logo flag
			 * @example false
			 */
			isLogo?: boolean
			/**
			 * @description Media source URL
			 * @example https://example.com/image.jpg
			 */
			src?: string
			/**
			 * @description Media type
			 * @enum {string}
			 */
			type?: 'IMAGE'
			/** @description Public URL of the media */
			url?: string
		}
		GoogleNetworkSettingsDTO: {
			/** @description Target Google Display Network */
			targetContentNetwork: boolean
			/** @description Target Google Search Network */
			targetSearchNetwork: boolean
		}
		GoogleSegmentTargetDTO: {
			/** @description Segment identifier */
			id: string
			/** @description Segment type */
			type: string
		}
		GoogleTargetInterestsDTO: {
			/** @description Affinity audience IDs */
			affinity?: string[]
			/** @description In-market audience IDs */
			inMarket?: string[]
		}
		GoogleYouTubeVideoLinkDTO: {
			/** @description YouTube video ID */
			youtubeVideoId: string
		}
		GreetingCard: {
			/**
			 * @description Greeting card content
			 * @example [
			 *       "Learn more about our services"
			 *     ]
			 */
			content: string[]
			/**
			 * @description Greeting card style
			 * @example LIST_STYLE
			 */
			style: string
			/**
			 * @description Greeting card title
			 * @example Welcome!
			 */
			title: string
		}
		HiddenFieldDTO: {
			/**
			 * @description Field name
			 * @example utm_source
			 */
			name: string
			/**
			 * @description Field value
			 * @example linkedin
			 */
			value: string
		}
		KeywordSuggestionDTO: {
			/**
			 * @description Seed keywords
			 * @example [
			 *       "marketing"
			 *     ]
			 */
			keywords?: string[]
			/**
			 * @description Language code
			 * @example en
			 */
			languageCode?: string
			/**
			 * @description Target locations
			 * @example [
			 *       "US",
			 *       "CA"
			 *     ]
			 */
			locations?: string[]
			/**
			 * @description Target URL
			 * @example https://example.com
			 */
			url: string
		}
		LeadFormAssetPayloadDTO: {
			/**
			 * @description Background image asset resource name
			 * @example customers/123/assets/789
			 */
			backgroundImageAsset?: string
			/**
			 * @description Business name shown on the form
			 * @example Acme Corp
			 */
			businessName: string
			/**
			 * @description Description text for the CTA button
			 * @example Request your free quote now
			 */
			callToActionDescription?: string
			/**
			 * @description Call to action button type
			 * @example GET_QUOTE
			 * @enum {string}
			 */
			callToActionType:
				| 'LEARN_MORE'
				| 'GET_QUOTE'
				| 'APPLY_NOW'
				| 'SIGN_UP'
				| 'CONTACT_US'
				| 'SUBSCRIBE'
				| 'DOWNLOAD'
				| 'BOOK_NOW'
				| 'GET_OFFER'
				| 'REGISTER'
				| 'GET_INFO'
				| 'REQUEST_DEMO'
				| 'JOIN_NOW'
				| 'GET_STARTED'
				| 'VISIT_SITE'
			/** @description Custom question fields appended after standard fields */
			customQuestionFields?: components['schemas']['CustomQuestionFieldDTO'][]
			/**
			 * @description Lead form description
			 * @example Fill out this form and we will contact you within 24 hours
			 */
			description: string
			/**
			 * @description Desired lead intent level
			 * @example HIGH_INTENT
			 * @enum {string}
			 */
			desiredIntent?: 'LOW_INTENT' | 'HIGH_INTENT'
			/**
			 * @description Form fields to collect user input
			 * @example [
			 *       {
			 *         "inputType": "FULL_NAME",
			 *         "singleChoiceAnswers": []
			 *       },
			 *       {
			 *         "inputType": "EMAIL",
			 *         "singleChoiceAnswers": []
			 *       }
			 *     ]
			 */
			fields: components['schemas']['LeadFormFieldDTO'][]
			/**
			 * @description Final URL shown after form submission
			 * @example https://example.com/thank-you
			 */
			finalUrls?: string
			/**
			 * @description Lead form headline
			 * @example Get a free quote
			 */
			headline: string
			/**
			 * @description Post-submit CTA button type
			 * @example VISIT_SITE
			 * @enum {string}
			 */
			postSubmitCallToActionType?:
				| 'VISIT_SITE'
				| 'DOWNLOAD'
				| 'LEARN_MORE'
				| 'SHOP_NOW'
			/**
			 * @description Description shown after form submission
			 * @example We will be in touch shortly
			 */
			postSubmitDescription?: string
			/**
			 * @description Headline shown after form submission
			 * @example Thank you!
			 */
			postSubmitHeadline?: string
			/**
			 * @description Privacy policy URL
			 * @example https://example.com/privacy
			 */
			privacyPolicyUrl: string
			/**
			 * @description Google Ads resource name for an existing lead form asset
			 * @example customers/123/assets/456
			 */
			resourceName?: string
		}
		LeadFormContentDTO: {
			/** @description Form description */
			description?: components['schemas']['LocalizedStringDTO']
			/** @description Form headline */
			headline: components['schemas']['LocalizedStringDTO']
			/** @description Legal information */
			legalInfo: components['schemas']['LegalInfoDTO']
			/** @description Post-submission info */
			postSubmissionInfo: components['schemas']['PostSubmissionInfoDTO']
			/** @description Form questions */
			questions: components['schemas']['LeadFormQuestionDTO'][]
		}
		LeadFormFieldDTO: {
			/**
			 * @description Field input type from Google Ads LeadFormFieldUserInputType
			 * @example FULL_NAME
			 */
			inputType: string
			/**
			 * @description Single-choice answer options for the field
			 * @example [
			 *       {
			 *         "key": "option_1",
			 *         "value": "Yes"
			 *       }
			 *     ]
			 */
			singleChoiceAnswers?: string[]
		}
		LeadFormQuestionDTO: {
			/**
			 * @description Question field name
			 * @example firstName
			 */
			name: string
			/**
			 * @description Predefined field identifier
			 * @example FIRST_NAME
			 */
			predefinedField?: string
			/** @description Question text */
			question: components['schemas']['LocalizedStringDTO']
			/** @description Question type details */
			questionDetails: components['schemas']['QuestionDetailsDTO']
		}
		LegalInfoDTO: {
			/** @description Consent entries */
			consents: components['schemas']['ConsentDTO'][]
			/** @description Legal disclaimer text */
			legalDisclaimer?: components['schemas']['LocalizedStringDTO']
			/**
			 * @description Privacy policy URL
			 * @example https://example.com/privacy
			 */
			privacyPolicyUrl: string
		}
		LinkedInAdDTO: {
			adCampaignGroupId?: string
			adCampaignId?: string
			adId?: string
			callToActionLabel?: string
			contentReferenceString?: string
			description?: string
			destinationFormId?: string
			destinationUrl?: string
			headline?: string
			id?: string
			introductoryText?: string
			/** @description LinkedIn API error message */
			linkedInError?: string
			media?: components['schemas']['LinkedInMediaDTO'][]
			meta?: Record<string, never>
			name?: string
			/** @enum {string} */
			publishingStatus?:
				| 'DRAFT'
				| 'SCHEDULED'
				| 'PUBLISHED'
				| 'PUBLISHING'
				| 'FAILED'
				| 'IN_REVIEW'
				| 'PAUSED'
				| 'ARCHIVED'
				| 'WITH_ISSUES'
				| 'REJECTED'
		}
		LinkedInBudgetDTO: {
			amount?: number
			/** @enum {string} */
			budgetType?: 'DAILY' | 'LIFETIME'
			/**
			 * @description Schedule end date (ISO 8601)
			 * @example 2025-12-31
			 */
			scheduleEndDate?: string
			/**
			 * @description Schedule start date (ISO 8601)
			 * @example 2025-01-01
			 */
			scheduleStartDate?: string
		}
		LinkedInCreateLeadFormBodyDTO: {
			/** @description Form content */
			content: components['schemas']['LeadFormContentDTO']
			/** @description Creation locale */
			creationLocale: components['schemas']['CreationLocaleDTO']
			/** @description Hidden fields */
			hiddenFields?: components['schemas']['HiddenFieldDTO'][]
			/**
			 * @description Form name
			 * @example Contact Us
			 */
			name: string
			/** @description Form owner */
			owner: components['schemas']['SponsoredAccountOwnerDTO']
			/**
			 * @description Form state
			 * @example PUBLISHED
			 * @enum {string}
			 */
			state: 'PUBLISHED'
		}
		LinkedInMediaDTO: {
			/** @description Click-through destination URL */
			destinationUrl?: string
			/** @description File size in bytes */
			fileSizeBytes?: number
			/** @description Video frame URLs */
			frames?: string[]
			/** @description Media headline */
			headline?: string
			/** @description Media name */
			name?: string
			/** @description Selected poster frame index */
			selectedPoster?: number
			/** @description Media source URL */
			src?: string
			/** @description Thumbnail URL */
			thumbnailUrl?: string
			/**
			 * @description Media type
			 * @enum {string}
			 */
			type?: 'video' | 'image'
		}
		LinkedInUpdateAdStatusBodyDTO: {
			/**
			 * @description Update operation
			 * @example PAUSED
			 * @enum {string}
			 */
			operationType: 'PAUSED' | 'ARCHIVED' | 'RESUME'
			/**
			 * @description Ad object type
			 * @example adCampaign
			 * @enum {string}
			 */
			type: 'adGroup' | 'adCampaign' | 'ad'
		}
		LocaleDTO: {
			/**
			 * @description Country code
			 * @example US
			 */
			country: string
			/**
			 * @description Language code
			 * @example en
			 */
			language: string
		}
		LocalizedStringDTO: {
			/**
			 * @description Locale-keyed string map
			 * @example {
			 *       "en_US": "Hello"
			 *     }
			 */
			localized: Record<string, never>
		}
		LocationIdBodyDTO: {
			/**
			 * @description Location identifier
			 * @example HChooFuiyPpVYzeJ4HMe
			 */
			locationId: string
		}
		MediaDTO: {
			/**
			 * @description Media description
			 * @example Click to learn more
			 */
			description?: string
			/**
			 * @description Media headline
			 * @example Great Offer
			 */
			headline?: string
			/**
			 * @description Media destination link
			 * @example https://example.com
			 */
			link?: string
			/**
			 * @description Media file name
			 * @example ad_image.jpg
			 */
			name?: string
			/**
			 * @description Selected poster index (required when type is video)
			 * @example 0
			 */
			selectedPoster?: number
			/**
			 * @description Media source URL
			 * @example https://example.com/image.jpg
			 */
			src: string
			/**
			 * @description Thumbnail URL (required when type is video)
			 * @example https://example.com/thumb.jpg
			 */
			thumbnailUrl?: string
			/**
			 * @description Media content type
			 * @example IMAGE
			 * @enum {string}
			 */
			type: 'image' | 'video'
		}
		MemberDTO: {
			/**
			 * @description App identifier
			 * @example com.example.app
			 */
			app?: string
			/**
			 * @description Keyword value
			 * @example marketing
			 */
			keyword?: string
			/**
			 * @description Member type
			 * @example KEYWORD
			 * @enum {string}
			 */
			memberType: 'KEYWORD' | 'URL' | 'APP'
			/**
			 * @description URL value
			 * @example https://example.com
			 */
			url?: string
		}
		MultipleChoiceOptionDTO: {
			/**
			 * @description Option ID
			 * @example 1
			 */
			id: number
			/** @description Option text */
			text: components['schemas']['LocalizedStringDTO']
		}
		MultipleChoiceQuestionDetailsDTO: {
			/** @description Choice options */
			options: components['schemas']['MultipleChoiceOptionDTO'][]
		}
		PostSubmissionCallToActionDTO: {
			/**
			 * @description Call to action label
			 * @enum {string}
			 */
			callToActionLabel:
				| 'VISIT_COMPANY_WEBSITE'
				| 'DOWNLOAD_NOW'
				| 'TRY_NOW'
				| 'VIEW_NOW'
				| 'LEARN_MORE'
			/** @description Call to action target */
			callToActionTarget: components['schemas']['PostSubmissionCallToActionTargetDTO']
		}
		PostSubmissionCallToActionTargetDTO: {
			/**
			 * @description Landing page URL
			 * @example https://example.com/thank-you
			 */
			landingPageUrl: string
		}
		PostSubmissionInfoDTO: {
			/** @description Post-submission call to action */
			callToAction: components['schemas']['PostSubmissionCallToActionDTO']
			/** @description Thank-you message */
			message: components['schemas']['LocalizedStringDTO']
		}
		PublishAdDTO: {
			/**
			 * @description Location identifier
			 * @example loc_abc123
			 */
			locationId: string
		}
		QuestionDetailsDTO: {
			/** @description Multiple choice question details */
			multipleChoiceQuestionDetails?: components['schemas']['MultipleChoiceQuestionDetailsDTO']
			/** @description Text question details (empty object for text questions) */
			textQuestionDetails?: Record<string, never>
		}
		RuleBasedUserListDTO: {
			/** @description Flexible rule user list configuration */
			flexibleRuleUserList: components['schemas']['FlexibleRuleUserListDTO']
			/**
			 * @description Prepopulation status
			 * @example REQUESTED
			 * @enum {string}
			 */
			prepopulationStatus?: 'REQUESTED'
		}
		RuleDTO: {
			/** @description List of rule item groups */
			ruleItemGroups: components['schemas']['RuleItemGroupDTO'][]
		}
		RuleItemDTO: {
			/**
			 * @description Rule item name
			 * @example url__
			 * @enum {string}
			 */
			name: 'url__' | 'referrer__'
			/** @description String rule item condition */
			stringRuleItem: components['schemas']['StringRuleItemDTO']
		}
		RuleItemGroupDTO: {
			/** @description List of rule items */
			ruleItems: components['schemas']['RuleItemDTO'][]
		}
		RuleOperandDTO: {
			/**
			 * @description Lookback window in days
			 * @example 30
			 */
			lookbackWindowDays: number
			/** @description Rule definition */
			rule: components['schemas']['RuleDTO']
		}
		SelectedAttributeDTO: {
			/** @description Category name */
			categoryName: string
			/** @description Facet identifier */
			facet: string
			/** @description Display name */
			name: string
			/** @description Targeting attribute URN */
			urn: string
		}
		SitelinkAssetPayloadDTO: {
			/** @description Ad schedule targets restricting when the sitelink is shown */
			adScheduleTargets?: components['schemas']['AdScheduleTargetDTO'][]
			/**
			 * @description First description line
			 * @example See our plans and pricing
			 */
			description1?: string
			/**
			 * @description Second description line
			 * @example Starting at $9/month
			 */
			description2?: string
			/**
			 * @description End date for the sitelink (YYYY-MM-DD)
			 * @example 2024-12-31
			 */
			endDate?: string
			/**
			 * @description Final landing page URL
			 * @example https://example.com/pricing
			 */
			finalUrls: string
			/**
			 * @description Sitelink display text
			 * @example Pricing
			 */
			linkText: string
			/**
			 * @description Google Ads resource name for an existing sitelink asset
			 * @example customers/123/assets/456
			 */
			resourceName?: string
			/**
			 * @description Start date for the sitelink (YYYY-MM-DD)
			 * @example 2024-01-01
			 */
			startDate?: string
		}
		SponsoredAccountOwnerDTO: {
			/**
			 * @description Sponsored account URN
			 * @example urn:li:sponsoredAccount:123456
			 */
			sponsoredAccount: string
		}
		StringRuleItemDTO: {
			/**
			 * @description Rule operator
			 * @example CONTAINS
			 */
			operator: string
			/**
			 * @description Rule value
			 * @example /products
			 */
			value: string
		}
		TargetAudienceDTO: {
			/** @description Excluded targeting attributes */
			exclude?: components['schemas']['SelectedAttributeDTO'][][]
			/** @description Included targeting attributes (groups of ANDed attributes, ORed together) */
			include?: components['schemas']['SelectedAttributeDTO'][][]
		}
		ThankYouPage: {
			/**
			 * @description Thank you page body
			 * @example We will contact you soon
			 */
			body: string
			/**
			 * @description Business phone number
			 * @example +1234567890
			 */
			businessPhone?: string
			/**
			 * @description Button destination link
			 * @example https://example.com
			 */
			buttonLink?: string
			/**
			 * @description Button text label
			 * @example Visit Website
			 */
			buttonText: string
			/**
			 * @description Button action type
			 * @example VIEW_WEBSITE
			 */
			buttonType: string
			/**
			 * @description Phone country code
			 * @example US
			 */
			countryCode?: string
			/**
			 * @description Thank you page title
			 * @example Thank You!
			 */
			title: string
		}
		UnauthorizedDTO: {
			/** @example Unauthorized */
			error?: string
			/** @example Invalid token: access token is invalid */
			message?: string
			/** @example 401 */
			statusCode?: number
		}
		UnitCostDTO: {
			/**
			 * @description Bid amount in currency minor units
			 * @example 500
			 */
			amount: number
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
		UpdateCustomAudienceBatchDTO: {
			/**
			 * @description CSV file path
			 * @example /uploads/audience.csv
			 */
			csvPath?: string
			/**
			 * @description Dynamic audience flag
			 * @example true
			 */
			dynamicAudience?: string
			/**
			 * @description Location identifier
			 * @example loc_abc123
			 */
			locationId: string
			/**
			 * @description Batch operation type
			 * @example ADD
			 */
			operationType: string
			/**
			 * @description Smartlist IDs array
			 * @example [
			 *       "list_1",
			 *       "list_2"
			 *     ]
			 */
			smartlistIds?: string[]
		}
		UpdateCustomAudienceDTO: {
			/**
			 * @description Contact identifier
			 * @example contact_123
			 */
			contactId: string
			/**
			 * @description Facebook ad account ID
			 * @example act_123456
			 */
			fbAdAccountId?: string
			/**
			 * @description Location identifier
			 * @example loc_abc123
			 */
			locationId: string
		}
		UpsertAdDTO: {
			/**
			 * @description Parent ad set ID
			 * @example adset_123
			 */
			adsetId: string
			/**
			 * @description Parent campaign ID
			 * @example camp_123
			 */
			campaignId: string
			/**
			 * @description Conversation form ID
			 * @example conv_123
			 */
			conversationFormId?: string
			/**
			 * @description Call to action type
			 * @example LEARN_MORE
			 */
			cta?: string
			/**
			 * @description Ad description text
			 * @example Limited time offer
			 */
			description?: string
			/**
			 * @description Destination form ID
			 * @example form_123
			 */
			destinationFormId?: string
			/**
			 * @description Destination link URL
			 * @example https://example.com
			 */
			destinationLink?: string
			/**
			 * @description Ad headline text
			 * @example Great Deal
			 */
			headline?: string
			/**
			 * @description Ad identifier
			 * @example ad_123
			 */
			id?: string
			/**
			 * @description Ad image URL
			 * @example https://example.com/img.jpg
			 */
			imageUrl?: string
			/**
			 * @description Location identifier
			 * @example loc_abc123
			 */
			locationId: string
			/**
			 * @description Media items (images or videos) attached to the ad creative
			 * @example [
			 *       {
			 *         "src": "https://example.com/image.jpg",
			 *         "thumbnailUrl": "https://example.com/thumb.jpg",
			 *         "selectedPoster": 0,
			 *         "type": "IMAGE",
			 *         "name": "ad_image.jpg"
			 *       }
			 *     ]
			 */
			media?: components['schemas']['MediaDTO'][]
			/**
			 * @description Ad media type
			 * @enum {string}
			 */
			mediaType?: 'SINGLE' | 'CAROUSEL'
			/**
			 * @description Enable multi-advertiser ads
			 * @example false
			 */
			multiAdvertiserAds?: boolean
			/**
			 * @description Ad name
			 * @example My Ad Creative
			 */
			name?: string
			/**
			 * @description Ad primary text
			 * @example Check out our offer!
			 */
			primaryText?: string
		}
		UpsertAdsetDTO: {
			/** @description Targeting audience configuration including geo-locations, locales, placements, and custom audiences */
			audience?: components['schemas']['FacebookAudienceDTO']
			/** @description Ad set budget config */
			budget?: components['schemas']['Budget']
			/**
			 * @description Parent campaign ID
			 * @example camp_123
			 */
			campaignId: string
			/**
			 * @description Conversion location
			 * @example website
			 */
			conversionLocation?: string
			/**
			 * @description Custom event type
			 * @example Purchase
			 */
			customEventType?: string
			/**
			 * @description Ad set identifier
			 * @example adset_123
			 */
			id?: string
			/**
			 * @description Instagram actor ID
			 * @example ig_123
			 */
			instagramActorId?: string
			/**
			 * @description Location identifier
			 * @example loc_abc123
			 */
			locationId: string
			/**
			 * @description Messaging platforms
			 * @enum {string}
			 */
			messagingPlatforms?: 'WHATSAPP' | 'MESSENGER' | 'INSTAGRAM_DIRECT'
			/**
			 * @description Ad set name
			 * @example Targeting Group A
			 */
			name?: string
			/**
			 * @description Facebook page ID
			 * @example 123456789
			 */
			pageId?: string
			/**
			 * @description Conversion pixel ID
			 * @example px_123
			 */
			pixelId?: string
			/**
			 * @description WhatsApp phone number
			 * @example +1234567890
			 */
			whatsappNumber?: string
		}
		UpsertAssetsDTO: {
			/**
			 * @description Location identifier
			 * @example loc_abc123
			 */
			locationId: string
			/** @description Asset payload — shape depends on the type field: CallAssetPayload (CALL), SitelinkAssetPayload (SITELINK), or LeadFormAssetPayload (LEAD_FORM) */
			payload:
				| components['schemas']['CallAssetPayloadDTO']
				| components['schemas']['SitelinkAssetPayloadDTO']
				| components['schemas']['LeadFormAssetPayloadDTO']
			/**
			 * @description Asset type to create or update
			 * @example CALL
			 * @enum {string}
			 */
			type: 'CALL' | 'SITELINK' | 'LEAD_FORM'
		}
		UpsertAudienceDTO: {
			/** @description Audience dimensions */
			dimensions?: components['schemas']['AudienceDimensionDTO']
			/** @description Exclusion dimensions */
			exclusionDimension?: components['schemas']['AudienceDimensionDTO']
			/**
			 * @description Location identifier
			 * @example loc_abc123
			 */
			locationId: string
			/**
			 * @description Audience name
			 * @example My Audience
			 */
			name: string
			/**
			 * @description Audience resource name
			 * @example customers/123/audiences/456
			 */
			resourceName?: string
		}
		UpsertCampaignDTO: {
			/**
			 * @description Campaign identifier
			 * @example camp_123
			 */
			id?: string
			/**
			 * @description Location identifier
			 * @example loc_abc123
			 */
			locationId: string
			/**
			 * @description Campaign name
			 * @example Summer Campaign
			 */
			name?: string
			/**
			 * @description Campaign objective
			 * @example LEAD_GENERATION
			 * @enum {string}
			 */
			objective?:
				| 'OUTCOME_LEADS'
				| 'OUTCOME_TRAFFIC'
				| 'OUTCOME_ENGAGEMENT'
				| 'OUTCOME_SALES'
			/**
			 * @description Campaign data source
			 * @example facebook
			 */
			source?: string
			/**
			 * @description Special ad categories
			 * @enum {string}
			 */
			specialAdCategories?:
				| 'EMPLOYMENT'
				| 'CREDIT'
				| 'FINANCIAL_PRODUCTS_SERVICES'
				| 'HOUSING'
				| 'ISSUES_ELECTIONS_POLITICS'
				| 'ONLINE_GAMBLING_AND_GAMING'
				| 'NONE'
		}
		UpsertConversionDTO: {
			/**
			 * @description Attribution model used to credit conversions
			 * @example GOOGLE_ADS_LAST_CLICK
			 * @enum {string}
			 */
			attributionModel:
				| 'GOOGLE_SEARCH_ATTRIBUTION_DATA_DRIVEN'
				| 'GOOGLE_ADS_LAST_CLICK'
			/**
			 * @description Conversion category
			 * @example PURCHASE
			 */
			category: string
			/**
			 * @description Click-through conversion window in days
			 * @example 30
			 */
			clickThroughWindow: number
			/**
			 * @description Conversion identifier
			 * @example conv_456
			 */
			conversionId?: string
			/**
			 * @description How conversions are counted per interaction
			 * @example ONE_PER_CLICK
			 * @enum {string}
			 */
			countingType: 'ONE_PER_CLICK' | 'MANY_PER_CLICK'
			/**
			 * @description Location identifier
			 * @example loc_abc123
			 */
			locationId: string
			/**
			 * @description Conversion name
			 * @example Purchase Conversion
			 */
			name: string
			/**
			 * @description Conversion type
			 * @example WEBPAGE
			 * @enum {string}
			 */
			type:
				| 'UPLOAD_CLICKS'
				| 'UPLOAD_CALLS'
				| 'WEBPAGE'
				| 'LEAD_FORM_SUBMIT'
			/**
			 * @description Value settings that control how monetary value is attributed to conversions
			 * @example {
			 *       "defaultValue": "10.00",
			 *       "defaultCurrencyCode": "USD",
			 *       "alwaysUseDefaultValue": false
			 *     }
			 */
			valueSettings: components['schemas']['ConversionValueSettings']
		}
		UpsertConversionPixelDTO: {
			/**
			 * @description Conversion pixel ID
			 * @example px_123
			 */
			conversionPixelId?: string
			/**
			 * @description Instagram user ID
			 * @example ig_user_123
			 */
			igUserId?: string
			/**
			 * @description Location identifier
			 * @example loc_abc123
			 */
			locationId: string
			/**
			 * @description Pixel name
			 * @example My Pixel
			 */
			name?: string
			/**
			 * @description Pixel event type
			 * @example LEAD_EVENT
			 */
			type: string
		}
		UpsertSegmentDTO: {
			/**
			 * @description Country codes
			 * @example [
			 *       "US",
			 *       "CA"
			 *     ]
			 */
			countryCodes?: string[]
			/**
			 * @description Segment description
			 * @example Target audience segment
			 */
			description?: string
			/**
			 * @description Expansion level
			 * @example BALANCED
			 * @enum {string}
			 */
			expansionLevel?: 'BALANCED' | 'BROAD' | 'NARROW'
			/**
			 * @description Segment identifier
			 * @example seg_123
			 */
			id?: string
			/**
			 * @description Segment members — keywords, URLs, or apps that define the custom segment
			 * @example [
			 *       {
			 *         "memberType": "KEYWORD",
			 *         "keyword": "digital marketing"
			 *       },
			 *       {
			 *         "memberType": "URL",
			 *         "url": "https://example.com"
			 *       },
			 *       {
			 *         "memberType": "APP",
			 *         "app": "com.example.app"
			 *       }
			 *     ]
			 */
			members?: components['schemas']['MemberDTO'][]
			/**
			 * @description Membership life span
			 * @example 30
			 */
			membershipLifeSpan?: number
			/**
			 * @description Membership status
			 * @example OPEN
			 */
			membershipStatus?: string
			/**
			 * @description Segment name
			 * @example My Segment
			 */
			name: string
			/** @description Rule-based user list config */
			ruleBasedUserList?: components['schemas']['RuleBasedUserListDTO']
			/**
			 * @description Seed user list IDs
			 * @example [
			 *       "list_1"
			 *     ]
			 */
			seedUserListIds?: string[]
			/**
			 * @description Segment status
			 * @example ENABLED
			 */
			status?: string
			/**
			 * @description Segment type
			 * @example CUSTOM_SEGMENTS
			 */
			type?: string
		}
		WelcomeMessageQuestion: {
			/**
			 * @description Question title text
			 * @example How can we help?
			 */
			question: string
			/**
			 * @description Auto-response message
			 * @example Thanks for reaching out
			 */
			response?: string
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
	'fb-get-ad-accounts': {
		parameters: {
			query: {
				/** @description Fetch all accounts */
				fetchAll?: string
				/** @description Results page limit */
				limit?: string
				/** @description Location identifier */
				locationId: string
				/** @description Pagination cursor */
				next?: string
				/** @description Account source type */
				type?: string
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
	'fb-get-ad-account': {
		parameters: {
			query: {
				/** @description Location identifier */
				locationId: string
			}
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description Ad account identifier */
				adAccountId: string
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
	'fb-delete-ad-account': {
		parameters: {
			query?: never
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description Ad account identifier */
				adAccountId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['LocationIdBodyDTO']
			}
		}
		responses: {
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
	'fb-upsert-ad': {
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
				'application/json': components['schemas']['UpsertAdDTO']
			}
		}
		responses: {
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
	'fb-delete-ad': {
		parameters: {
			query?: never
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				adId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['LocationIdBodyDTO']
			}
		}
		responses: {
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
	'fb-duplicate-ad': {
		parameters: {
			query?: never
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				adId: string
			}
			cookie?: never
		}
		requestBody?: never
		responses: {
			201: {
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
	'fb-pause-ad': {
		parameters: {
			query?: never
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				adId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['LocationIdBodyDTO']
			}
		}
		responses: {
			201: {
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
	'fb-resume-ad': {
		parameters: {
			query?: never
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				adId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['LocationIdBodyDTO']
			}
		}
		responses: {
			201: {
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
	'fb-upsert-adset': {
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
				'application/json': components['schemas']['UpsertAdsetDTO']
			}
		}
		responses: {
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
	'fb-delete-adset': {
		parameters: {
			query?: never
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				adsetId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['LocationIdBodyDTO']
			}
		}
		responses: {
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
	'fb-duplicate-adset': {
		parameters: {
			query?: never
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				adsetId: string
			}
			cookie?: never
		}
		requestBody?: never
		responses: {
			201: {
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
	'fb-pause-adset': {
		parameters: {
			query?: never
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				adsetId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['LocationIdBodyDTO']
			}
		}
		responses: {
			201: {
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
	'fb-resume-adset': {
		parameters: {
			query?: never
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				adsetId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['LocationIdBodyDTO']
			}
		}
		responses: {
			201: {
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
	'fb-get-campaign': {
		parameters: {
			query: {
				/** @description Comma-separated field names */
				fields?: string
				/** @description Location identifier */
				locationId: string
				/** @description Campaign data source */
				source?: string
			}
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description Campaign identifier */
				campaignId: string
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
	'fb-upsert-campaign': {
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
				'application/json': components['schemas']['UpsertCampaignDTO']
			}
		}
		responses: {
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
	'fb-delete-campaign': {
		parameters: {
			query?: never
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				campaignId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['LocationIdBodyDTO']
			}
		}
		responses: {
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
	'fb-duplicate-campaign': {
		parameters: {
			query?: never
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				campaignId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['LocationIdBodyDTO']
			}
		}
		responses: {
			201: {
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
	'fb-pause-campaign': {
		parameters: {
			query?: never
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				campaignId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['LocationIdBodyDTO']
			}
		}
		responses: {
			201: {
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
	'fb-publish-campaign': {
		parameters: {
			query?: never
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description Campaign identifier */
				campaignId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['PublishAdDTO']
			}
		}
		responses: {
			201: {
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
	'fb-resume-campaign': {
		parameters: {
			query?: never
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				campaignId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['LocationIdBodyDTO']
			}
		}
		responses: {
			201: {
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
	'fb-get-conversation-forms': {
		parameters: {
			query: {
				/** @description Location identifier */
				locationId: string
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
	'fb-create-conversation-form': {
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
				'application/json': components['schemas']['CreateConversationFormDTO']
			}
		}
		responses: {
			201: {
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
	'fb-get-custom-audiences': {
		parameters: {
			query: {
				/** @description Ad account identifier */
				adAccountId: string
				/** @description Location identifier */
				locationId: string
				/** @description Audience data source */
				source?: 'ad_manager' | 'integration'
				/** @description Audience list type */
				type: 'lookalike' | 'custom' | 'all'
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
	'fb-get-custom-audience-by-id': {
		parameters: {
			query: {
				/** @description Location identifier */
				locationId: string
			}
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description Custom audience identifier */
				audienceId: string
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
	'fb-update-custom-audience': {
		parameters: {
			query?: never
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description Custom audience identifier */
				audienceId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['FbUpdateAudienceBodyDTO']
			}
		}
		responses: {
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
	'fb-delete-custom-audience': {
		parameters: {
			query: {
				/** @description Location identifier */
				locationId: string
			}
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description Custom audience identifier */
				audienceId: string
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
	'fb-add-custom-audience-member': {
		parameters: {
			query?: never
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description Custom audience identifier */
				audienceId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['UpdateCustomAudienceDTO']
			}
		}
		responses: {
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
	'fb-remove-custom-audience-member': {
		parameters: {
			query?: never
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description Custom audience identifier */
				audienceId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['UpdateCustomAudienceDTO']
			}
		}
		responses: {
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
	'fb-batch-update-audience-members': {
		parameters: {
			query?: never
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description Custom audience identifier */
				audienceId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['UpdateCustomAudienceBatchDTO']
			}
		}
		responses: {
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
	'fb-get-entity': {
		parameters: {
			query: {
				/** @description Ad set identifier */
				adSetId?: string
				/** @description Campaign identifier */
				campaignId?: string
				/** @description Entity type to fetch */
				entityType: 'CAMPAIGN' | 'ADSET' | 'AD'
				/** @description Fetch all entities */
				fetchAll?: string
				/** @description Location identifier */
				locationId: string
				/** @description Pagination cursor */
				next?: string
				/** @description Search identifier */
				searchId?: string
				/** @description Selected ad account ID */
				selectedAdAccountId?: string
				/** @description Integration source type */
				type: 'AD_MANAGER' | 'INTEGRATION'
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
	'fb-get-integration': {
		parameters: {
			query: {
				/** @description Location identifier */
				locationId: string
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
	'fb-create-integration': {
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
				'application/json': components['schemas']['CreateIntegrationDTO']
			}
		}
		responses: {
			201: {
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
	'fb-delete-integration': {
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
				'application/json': components['schemas']['LocationIdBodyDTO']
			}
		}
		responses: {
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
	'fb-get-lead-form': {
		parameters: {
			query: {
				/** @description Location identifier */
				locationId: string
			}
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description Lead form identifier */
				leadFormId: string
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
	'fb-get-current-user': {
		parameters: {
			query: {
				/** @description Location identifier */
				locationId: string
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
	'fb-delete-page': {
		parameters: {
			query: {
				/** @description Location identifier */
				locationId: string
				/** @description Facebook page ID */
				pageId: string
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
	'fb-get-page-lead-forms': {
		parameters: {
			query: {
				/** @description Location identifier */
				locationId: string
			}
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description Facebook page identifier */
				pageId: string
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
	'fb-create-page-lead-form': {
		parameters: {
			query?: never
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description Facebook page identifier */
				pageId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['CreateLeadFormDTO']
			}
		}
		responses: {
			201: {
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
	'fb-get-instagram-accounts': {
		parameters: {
			query: {
				/** @description Location identifier */
				locationId: string
				/** @description Integration type */
				type?: 'INTEGRATION' | 'AD_MANAGER'
			}
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description Facebook page identifier */
				pageId: string
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
	'fb-set-default-page': {
		parameters: {
			query: {
				/** @description Location identifier */
				locationId: string
			}
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path?: never
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['FbSetDefaultPageBodyDTO']
			}
		}
		responses: {
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
	'fb-get-pages': {
		parameters: {
			query: {
				/** @description Fetch existing pages flag */
				fetchExisting?: string
				/** @description Location identifier */
				locationId: string
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
	'fb-get-pixels': {
		parameters: {
			query: {
				/** @description Channel type */
				channel?: string
				/** @description Instagram user ID */
				igUserId?: string
				/** @description Location identifier */
				locationId: string
				/** @description Facebook page ID */
				pageId?: string
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
	'fb-upsert-pixel': {
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
				'application/json': components['schemas']['UpsertConversionPixelDTO']
			}
		}
		responses: {
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
	'fb-get-reporting': {
		parameters: {
			query: {
				/** @description Report end date */
				endDate: string
				/** @description Comma-separated reporting fields */
				fields: (
					| 'impressions'
					| 'clicks'
					| 'spend'
					| 'cpc'
					| 'cost_per_conversion'
					| 'conversions'
					| 'cpm'
					| 'reach'
					| 'frequency'
				)[]
				/** @description Time grouping interval */
				groupBy: 'day' | 'week' | 'month'
				/** @description Location identifier */
				locationId: string
				/** @description Report start date */
				startDate: string
				/** @description Integration source type */
				type: 'AD_MANAGER' | 'INTEGRATION'
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
	'fb-get-campaign-reporting': {
		parameters: {
			query: {
				/** @description Report end date */
				endDate: string
				/** @description Location identifier */
				locationId: string
				/** @description Report start date */
				startDate: string
			}
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description Campaign identifier */
				campaignId: string
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
	'fb-get-reporting-list': {
		parameters: {
			query: {
				/** @description Campaign identifier */
				campaignId: string
				/** @description Report end date */
				endDate: string
				/** @description Reporting list type */
				listType: string
				/** @description Location identifier */
				locationId: string
				/** @description Report start date */
				startDate: string
				/** @description Integration source type */
				type: 'AD_MANAGER' | 'INTEGRATION'
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
	'fb-search-targeting': {
		parameters: {
			query: {
				/** @description Search query string */
				query: string
				/** @description Specific search subtype */
				searchType?: string
				/** @description Targeting search type */
				type: string
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
	'google-get-ad-accounts': {
		parameters: {
			query: {
				/** @description Location identifier */
				locationId: string
				/** @description Account type */
				type?: 'INTEGRATION' | 'AD_MANAGER'
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
	'google-get-ad-account-details': {
		parameters: {
			query: {
				/** @description Location identifier */
				locationId: string
			}
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description Ad account identifier */
				adAccountId: string
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
	'google-delete-ad-account': {
		parameters: {
			query?: never
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description Ad account identifier */
				adAccountId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['LocationIdBodyDTO']
			}
		}
		responses: {
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
	'google-upsert-campaign': {
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
				'application/json': components['schemas']['CampaignDTO']
			}
		}
		responses: {
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
	'google-get-campaign-by-id': {
		parameters: {
			query: {
				/** @description Location identifier */
				locationId: string
			}
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description Ad identifier */
				adId: string
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
	'google-publish-ad': {
		parameters: {
			query?: never
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description Ad identifier */
				adId: string
			}
			cookie?: never
		}
		requestBody?: never
		responses: {
			201: {
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
	'google-get-assets': {
		parameters: {
			query: {
				/** @description Advertiser only flag */
				advertiserOnly?: string
				/** @description Asset identifier */
				id?: string
				/** @description Location identifier */
				locationId: string
				/** @description Asset type to retrieve */
				type: 'CALL' | 'SITELINK' | 'LEAD_FORM' | 'IMAGE' | 'TEXT'
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
	'google-upsert-assets': {
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
				'application/json': components['schemas']['UpsertAssetsDTO']
			}
		}
		responses: {
			201: {
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
	'google-get-audiences': {
		parameters: {
			query: {
				/** @description Location identifier */
				locationId: string
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
	'google-upsert-audience': {
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
				'application/json': components['schemas']['UpsertAudienceDTO']
			}
		}
		responses: {
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
	'google-get-audience-by-id': {
		parameters: {
			query: {
				/** @description Location identifier */
				locationId: string
			}
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description Audience identifier */
				audienceId: string
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
	'google-get-conversion-goals': {
		parameters: {
			query: {
				/** @description Location identifier */
				locationId: string
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
	'google-get-conversions': {
		parameters: {
			query: {
				/** @description Conversion category */
				category?: string
				/** @description Conversion type */
				conversionType?: string
				/** @description Filter end date */
				endDate?: string
				/** @description Location identifier */
				locationId: string
				/** @description Filter start date */
				startDate?: string
				/** @description Integration type */
				type?: 'AD_MANAGER' | 'AD_WORDS'
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
	'google-upsert-conversion': {
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
				'application/json': components['schemas']['UpsertConversionDTO']
			}
		}
		responses: {
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
	'google-get-conversion-by-id': {
		parameters: {
			query: {
				/** @description Location identifier */
				locationId: string
			}
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description Conversion identifier */
				conversionId: string
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
	'google-delete-conversion': {
		parameters: {
			query: {
				/** @description Location identifier */
				locationId: string
			}
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description Conversion identifier */
				conversionId: string
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
	'google-get-entity': {
		parameters: {
			query: {
				/** @description Ad group identifier */
				adGroupId?: string
				/** @description Campaign identifier */
				campaignId?: string
				/** @description Filter end date */
				endDate?: string
				/** @description Entity type */
				entityType: 'CAMPAIGN' | 'ADGROUP' | 'AD'
				/** @description Location identifier */
				locationId: string
				/** @description Search identifier */
				searchId?: string
				/** @description Selected ad account ID */
				selectedAdAccountId?: string
				/** @description Filter start date */
				startDate?: string
				/** @description Integration type */
				type: 'AD_MANAGER' | 'INTEGRATION'
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
	'google-get-integration': {
		parameters: {
			query: {
				/** @description Location identifier */
				locationId: string
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
	'google-create-integration': {
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
				'application/json': components['schemas']['CreateGoogleIntegrationDTO']
			}
		}
		responses: {
			201: {
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
	'google-get-keyword-ideas': {
		parameters: {
			query: {
				/** @description Location identifier */
				locationId: string
			}
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path?: never
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['KeywordSuggestionDTO']
			}
		}
		responses: {
			201: {
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
	'google-get-current-user': {
		parameters: {
			query: {
				/** @description Location identifier */
				locationId: string
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
	'google-get-reporting': {
		parameters: {
			query: {
				/** @description Report end date */
				endDate: string
				/** @description Comma-separated reporting fields */
				fields: (
					| 'impressions'
					| 'clicks'
					| 'cost_micros'
					| 'average_cpc'
					| 'conversions'
					| 'average_cpm'
					| 'cost_per_conversion'
					| 'ctr'
				)[]
				/** @description Group by period */
				groupBy?: 'date' | 'week' | 'month'
				/** @description Location identifier */
				locationId: string
				/** @description Report start date */
				startDate: string
				/** @description Integration type */
				type: 'AD_MANAGER' | 'INTEGRATION'
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
	'google-get-campaign-reporting': {
		parameters: {
			query: {
				/** @description Report end date */
				endDate: string
				/** @description Location identifier */
				locationId: string
				/** @description Report start date */
				startDate: string
			}
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description Campaign identifier */
				campaignId: string
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
	'google-get-reporting-list': {
		parameters: {
			query: {
				/** @description Campaign identifier */
				campaignId?: string
				/** @description Report end date */
				endDate: string
				/** @description Report list type */
				listType: string
				/** @description Location identifier */
				locationId: string
				/** @description Report start date */
				startDate: string
				/** @description Integration type */
				type: 'AD_MANAGER' | 'INTEGRATION'
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
	'google-get-segments': {
		parameters: {
			query: {
				/** @description Location identifier */
				locationId: string
				/** @description Segment type */
				type?: string
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
	'google-upsert-segment': {
		parameters: {
			query: {
				/** @description Location identifier */
				locationId: string
				/** @description Segment type */
				type:
					| 'CUSTOM_SEGMENTS'
					| 'WEBSITE_VISITOR'
					| 'CUSTOMER_MATCH'
					| 'LOOKALIKE'
			}
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path?: never
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['UpsertSegmentDTO']
			}
		}
		responses: {
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
	'google-get-segment-by-id': {
		parameters: {
			query: {
				/** @description Location identifier */
				locationId: string
				/** @description Segment type */
				type: 'CUSTOM_SEGMENTS' | 'DATA_SEGMENTS'
			}
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description Segment identifier */
				segmentId: string
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
	'google-delete-segment': {
		parameters: {
			query: {
				/** @description Location identifier */
				locationId: string
				/** @description Segment type */
				type: 'CUSTOM_SEGMENTS' | 'DATA_SEGMENTS'
			}
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description Segment identifier */
				segmentId: string
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
	'google-create-offline-user-list-job': {
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
				'application/json': components['schemas']['CreateOfflineUserListJobDTO']
			}
		}
		responses: {
			201: {
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
	'google-get-target-interests': {
		parameters: {
			query: {
				/** @description Channel type */
				advertisingChannelType: string
				/** @description Location identifier */
				locationId: string
				/** @description Interest type */
				type: 'AFFINITY' | 'IN_MARKET'
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
	'google-search-targeting': {
		parameters: {
			query: {
				/** @description Location identifier */
				locationId: string
				/** @description Search query */
				query?: string
				/** @description Search type */
				type: string
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
	'li-create-lead-form': {
		parameters: {
			query: {
				/** @description Location identifier */
				locationId: string
			}
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path?: never
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['LinkedInCreateLeadFormBodyDTO']
			}
		}
		responses: {
			201: {
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
	'li-get-lead-forms': {
		parameters: {
			query: {
				/** @description Location identifier */
				locationId: string
			}
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description Account identifier */
				accountId: string
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
	'li-update-ad-status': {
		parameters: {
			query: {
				/** @description Location identifier */
				locationId: string
			}
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description Ad identifier */
				adId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['LinkedInUpdateAdStatusBodyDTO']
			}
		}
		responses: {
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
	'li-get-ad-account-details': {
		parameters: {
			query: {
				/** @description Ad account identifier */
				adAccountId: string
				/** @description Location identifier */
				locationId: string
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
	'li-delete-ad-account': {
		parameters: {
			query: {
				/** @description Ad account identifier */
				adAccountId: string
				/** @description Location identifier */
				locationId: string
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
	'li-get-ad-accounts': {
		parameters: {
			query: {
				/** @description Location identifier */
				locationId: string
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
	'li-upsert-campaign-group': {
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
				'application/json': components['schemas']['AdCampaignGroupDataDTO']
			}
		}
		responses: {
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
	'li-get-campaign-group': {
		parameters: {
			query: {
				/** @description Location identifier */
				locationId: string
			}
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description Ad identifier */
				adId: string
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
	'li-publish-campaign-group': {
		parameters: {
			query?: never
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description Ad identifier */
				adId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['LocationIdBodyDTO']
			}
		}
		responses: {
			201: {
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
	'li-get-integration': {
		parameters: {
			query: {
				/** @description Location identifier */
				locationId: string
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
	'li-create-integration': {
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
				'application/json': components['schemas']['CreateLinkedinIntegrationDTO']
			}
		}
		responses: {
			201: {
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
	'li-get-current-user': {
		parameters: {
			query: {
				/** @description Location identifier */
				locationId: string
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
	'li-get-ad-analytics': {
		parameters: {
			query: {
				/** @description End date in yyyy-mm-dd format */
				endDate: string
				/** @description Comma-separated list of entity URNs */
				entityUrns?: string
				/** @description Comma-separated list of fields to retrieve */
				fields?: string[]
				/** @description Time granularity for analytics */
				groupBy?: 'day' | 'month' | 'year'
				/** @description Location ID */
				locationId: string
				/** @description Analytics pivot type */
				pivot?: 'ACCOUNT' | 'CAMPAIGN' | 'CAMPAIGN_GROUP' | 'CREATIVE'
				/** @description Start date in yyyy-mm-dd format */
				startDate: string
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
	'li-get-campaign-group-reporting': {
		parameters: {
			query: {
				/** @description Campaign group ID */
				campaignGroupId?: string
				/** @description End date in yyyy-mm-dd format */
				endDate: string
				/** @description Comma-separated list of fields to retrieve */
				fields?: string[]
				/** @description Location ID */
				locationId: string
				/** @description Start date in yyyy-mm-dd format */
				startDate: string
			}
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description Campaign group identifier */
				campaignGroupId: string
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
	'li-get-reporting-list': {
		parameters: {
			query: {
				/** @description Campaign group ID */
				campaignGroupId: string
				/** @description Campaign ID */
				campaignId: string
				/** @description End date in yyyy-mm-dd format */
				endDate: string
				/** @description Comma-separated list of fields to retrieve */
				fields?: string[]
				/** @description List type */
				listType: string
				/** @description Location ID */
				locationId: string
				/** @description Start date in yyyy-mm-dd format */
				startDate: string
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
	'li-search-targeting': {
		parameters: {
			query: {
				/** @description Targeting facet */
				facet: string
				/** @description Location identifier */
				locationId: string
				/** @description Query parameter */
				q?: string
				/** @description Search query */
				query?: string
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
}
