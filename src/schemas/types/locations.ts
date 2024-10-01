export type paths = {
	'/locations/search': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Search
		 * @description Search Sub-Account (Formerly Location)
		 */
		get: operations['search-locations']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/locations/{locationId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get Sub-Account (Formerly Location)
		 * @description Get details of a Sub-Account (Formerly Location) by passing the sub-account id
		 */
		get: operations['get-location']
		/**
		 * Put Sub-Account (Formerly Location)
		 * @description Update a Sub-Account (Formerly Location) based on the data provided
		 */
		put: operations['put-location']
		post?: never
		/**
		 * Delete Sub-Account (Formerly Location)
		 * @description Delete a Sub-Account (Formerly Location) from the Agency
		 */
		delete: operations['delete-location']
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/locations/{locationId}/tags': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get Tags
		 * @description Get Sub-Account (Formerly Location) Tags
		 */
		get: operations['get-location-tags']
		put?: never
		/**
		 * Create Tag
		 * @description Create tag
		 */
		post: operations['create-tag']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/locations/{locationId}/tags/{tagId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get tag by id
		 * @description Get tag by id
		 */
		get: operations['get-tag-by-id']
		/**
		 * Update tag
		 * @description Update tag
		 */
		put: operations['update-tag']
		post?: never
		/**
		 * Delete tag
		 * @description Delete tag
		 */
		delete: operations['delete-tag']
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/locations/{locationId}/tasks/search': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Task Search Filter
		 * @description Task Search
		 */
		post: operations['task-search']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/locations/{locationId}/customFields': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get Custom Fields
		 * @description Get Custom Fields
		 */
		get: operations['get-custom-fields']
		put?: never
		/**
		 * Create Custom Field
		 * @description Create Custom Field
		 */
		post: operations['create-custom-field']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/locations/{locationId}/customFields/{id}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get Custom Field
		 * @description Get Custom Field
		 */
		get: operations['get-custom-field']
		/**
		 * Update Custom Field
		 * @description Update Custom Field
		 */
		put: operations['update-custom-field']
		post?: never
		/**
		 * Delete Custom Field
		 * @description Delete Custom Field
		 */
		delete: operations['delete-custom-field']
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/locations/{locationId}/customFields/upload': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Uploads File to customFields
		 * @description Uploads File to customFields
		 */
		post: operations['upload-file-customFields']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/locations/{locationId}/customValues': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get Custom Values
		 * @description Get Custom Values
		 */
		get: operations['get-custom-values']
		put?: never
		/**
		 * Create Custom Value
		 * @description Create Custom Value
		 */
		post: operations['create-custom-value']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/locations/{locationId}/customValues/{id}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get Custom Value
		 * @description Get Custom Value
		 */
		get: operations['get-custom-value']
		/**
		 * Update Custom Value
		 * @description Update Custom Value
		 */
		put: operations['update-custom-value']
		post?: never
		/**
		 * Delete Custom Value
		 * @description Delete Custom Value
		 */
		delete: operations['delete-custom-value']
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/locations/{locationId}/timezones': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Fetch Timezones
		 * @description Fetch the available timezones
		 */
		get: operations['get-timezones']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/locations/{locationId}/templates': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * GET all or email/sms templates
		 * @description GET all or email/sms templates
		 */
		get: operations['GET-all-or-email-sms-templates']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/locations/{locationId}/templates/{id}': {
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
		 * DELETE an email/sms template
		 * @description DELETE an email/sms template
		 */
		delete: operations['DELETE-an-email-sms-template']
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/locations/': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Create Sub-Account (Formerly Location)
		 * @description <div>
		 *                       <p>Create a new Sub-Account (Formerly Location) based on the data provided</p>
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
		post: operations['create-location']
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
		SettingsSchema: {
			/** @example false */
			allowDuplicateContact?: boolean
			/** @example false */
			allowDuplicateOpportunity?: boolean
			/** @example false */
			allowFacebookNameMerge?: boolean
			/** @example false */
			disableContactTimezone?: boolean
		}
		SocialSchema: {
			/**
			 * @description Facebook URL
			 * @example https://www.facebook.com/
			 */
			facebookUrl?: string
			/**
			 * @description Googleplus URL
			 * @example https://www.googleplus.com/
			 */
			googlePlus?: string
			/**
			 * @description LinkedIn URL
			 * @example https://www.linkedIn.com/
			 */
			linkedIn?: string
			/**
			 * @description Foursquare URL
			 * @example https://www.foursquare.com/
			 */
			foursquare?: string
			/**
			 * @description Twitter URL
			 * @example https://www.foutwitterrsquare.com/
			 */
			twitter?: string
			/**
			 * @description Yelp URL
			 * @example https://www.yelp.com/
			 */
			yelp?: string
			/**
			 * @description Instagram URL
			 * @example https://www.instagram.com/
			 */
			instagram?: string
			/**
			 * @description Instagram URL
			 * @example https://www.youtube.com/
			 */
			youtube?: string
			/**
			 * @description Instagram URL
			 * @example https://www.pinterest.com/
			 */
			pinterest?: string
			/**
			 * @description Instagram URL
			 * @example https://www.blogRss.com/
			 */
			blogRss?: string
			/**
			 * @description Google Business Places ID
			 * @example ChIJJGPdVbQTrjsRGUkefteUeFk
			 */
			googlePlacesId?: string
		}
		GetLocationSchema: {
			/**
			 * @description Location Id
			 * @example ve9EPM428h8vShlRW1KT
			 */
			id?: string
			/**
			 * @description The name for the sub-account/location
			 * @example Mark Shoes
			 */
			name?: string
			/**
			 * @description The phone number of the business for which sub-account is created
			 * @example +1410039940
			 */
			phone?: string
			/**
			 * @description The email for the sub-account/location
			 * @example john.doe@mail.com
			 */
			email?: string
			/**
			 * @description The address of the business for which sub-account is created
			 * @example 4th fleet street
			 */
			address?: string
			/**
			 * @description The city where the business is located for which sub-account is created
			 * @example New York
			 */
			city?: string
			/**
			 * @description The state in which the business operates for which sub-account is created
			 * @example Illinois
			 */
			state?: string
			/**
			 * @description The country in which the business is present for which sub-account is created
			 * @example US
			 */
			country?: string
			/**
			 * @description The postal code of the business for which sub-account is created
			 * @example 567654
			 */
			postalCode?: string
			/**
			 * @description The website of the business for which sub-account is created
			 * @example https://yourwebsite.com
			 */
			website?: string
			/**
			 * @description The timezone of the business for which sub-account is created
			 * @example US/Central
			 */
			timezone?: string
			/** @description The default settings for location */
			settings?: components['schemas']['SettingsSchema']
			/** @description The social media links for location */
			social?: components['schemas']['SocialSchema']
		}
		SearchSuccessfulResponseDto: {
			locations?: components['schemas']['GetLocationSchema'][]
		}
		BusinessSchema: {
			/** @example dentist */
			name?: string
			/** @example MIG 14, Delhi */
			address?: string
			/** @example delhi */
			city?: string
			/** @example delhi */
			state?: string
			/** @example IN */
			country?: string
			/** @example 567654 */
			postalCode?: string
			/** @example https://gohighlevel.com/ */
			website?: string
			/** @example America/Chicago */
			timezone?: string
			/** @example https://dummyimage.com/o/locationPhotos%2Fve9EPM428h8vShlRW1KT.jpeg */
			logoUrl?: string
		}
		GetLocationByIdSchema: {
			/** @example ve9EPM428h8vShlRW1KT */
			id?: string
			/** @example 5DP4iH6HLkQsiKESj6rh */
			companyId?: string
			/** @example dentist */
			name?: string
			/** @example test.msgsndr.com */
			domain?: string
			/** @example ganthi nagar, gyanbabu chauk motihati */
			address?: string
			/** @example motihari */
			city?: string
			/** @example Loca */
			state?: string
			/** @example https://dummyimage.com/o/locationPhotos%2Fve9EPM428h8vShlRW1KT.jpeg */
			logoUrl?: string
			/** @example IN */
			country?: string
			/** @example 567654 */
			postalCode?: string
			/** @example https://gohighlevel.com/ */
			website?: string
			/** @example America/Chicago */
			timezone?: string
			/** @example Dr. Rane */
			firstName?: string
			/** @example deo */
			lastName?: string
			/** @example rane@due.com */
			email?: string
			/** @example +919039160788 */
			phone?: string
			business?: components['schemas']['BusinessSchema']
			social?: components['schemas']['SocialSchema']
			settings?: components['schemas']['SettingsSchema']
			reseller?: Record<string, never>
		}
		GetLocationByIdSuccessfulResponseDto: {
			location?: components['schemas']['GetLocationByIdSchema']
		}
		ProspectInfoDto: {
			/**
			 * @description First name of the prospect
			 * @example John
			 */
			firstName: string
			/**
			 * @description Last name of the prospect
			 * @example Doe
			 */
			lastName: string
			/**
			 * @description Email of the prospect
			 * @example john.doe@mail.com
			 */
			email: string
		}
		TwilioSchema: {
			/**
			 * @description SID provided by Twilio
			 * @example AC_XXXXXXXXXXX
			 */
			sid: string
			/**
			 * @description Auth token provided by Twilio
			 * @example 77_XXXXXXXXXXX
			 */
			authToken: string
		}
		MailgunSchema: {
			/**
			 * @description API key provided by Mailgun
			 * @example key-XXXXXXXXXXX
			 */
			apiKey: string
			/**
			 * @description Domain connected with Mailgun
			 * @example replies.yourdomain.com
			 */
			domain: string
		}
		CreateLocationDto: {
			/**
			 * @description The name for the sub-account/location
			 * @example Mark Shoes
			 */
			name: string
			/**
			 * @description The phone number of the business for which sub-account is created with the appropriate country-code
			 * @example +1410039940
			 */
			phone?: string
			/**
			 * @description Company/Agency Id
			 * @example UAXssdawIWAWD
			 */
			companyId: string
			/**
			 * @description The address of the business for which sub-account is created
			 * @example 4th fleet street
			 */
			address?: string
			/**
			 * @description The city where the business is located for which sub-account is created
			 * @example New York
			 */
			city?: string
			/**
			 * @description The state in which the business operates for which sub-account is created
			 * @example Illinois
			 */
			state?: string
			/**
			 * @description The 2 letter country-code in which the business is present for which sub-account is created
			 * @example US
			 * @enum {string}
			 */
			country?: CreateLocationDtoCountry
			/**
			 * @description The postal code of the business for which sub-account is created
			 * @example 567654
			 */
			postalCode?: string
			/**
			 * @description The website of the business for which sub-account is created
			 * @example https://yourwebsite.com
			 */
			website?: string
			/**
			 * @description The timezone of the business for which sub-account is created
			 * @example US/Central
			 */
			timezone?: string
			/** @example {
			 *       "firstName": "John",
			 *       "lastName": "Doe",
			 *       "email": "john.doe@mail.com"
			 *     } */
			prospectInfo?: components['schemas']['ProspectInfoDto']
			/** @description The default settings for location */
			settings?: components['schemas']['SettingsSchema']
			/** @description The social media links for location */
			social?: components['schemas']['SocialSchema']
			/** @description The twilio credentials for location */
			twilio?: components['schemas']['TwilioSchema']
			/** @description The mailgun credentials for location */
			mailgun?: components['schemas']['MailgunSchema']
			/**
			 * @description The snapshot ID to be loaded into the location.
			 * @example XXXXXXXXXXX
			 */
			snapshotId?: string
		}
		CreateLocationSuccessfulResponseDto: {
			/**
			 * @description Location Id
			 * @example ve9EPM428h8vShlRW1KT
			 */
			id?: string
			/**
			 * @description Company/Agency Id
			 * @example UAXssdawIWAWD
			 */
			companyId?: string
			/**
			 * @description The name for the sub-account/location
			 * @example Mark Shoes
			 */
			name?: string
			/**
			 * @description The phone number of the business for which sub-account is created
			 * @example +1410039940
			 */
			phone?: string
			/**
			 * @description The email for the sub-account/location
			 * @example john.doe@mail.com
			 */
			email?: string
			/**
			 * @description The address of the business for which sub-account is created
			 * @example 4th fleet street
			 */
			address?: string
			/**
			 * @description The city where the business is located for which sub-account is created
			 * @example New York
			 */
			city?: string
			/**
			 * @description The state in which the business operates for which sub-account is created
			 * @example Illinois
			 */
			state?: string
			/** @example test.msgsndr.com */
			domain?: string
			/**
			 * @description The country in which the business is present for which sub-account is created
			 * @example US
			 * @enum {string}
			 */
			country?: CreateLocationSuccessfulResponseDtoCountry
			/**
			 * @description The postal code of the business for which sub-account is created
			 * @example 567654
			 */
			postalCode?: string
			/**
			 * @description The website of the business for which sub-account is created
			 * @example https://yourwebsite.com
			 */
			website?: string
			/**
			 * @description The timezone of the business for which sub-account is created
			 * @example US/Central
			 */
			timezone?: string
			/** @description The default settings for location */
			settings?: components['schemas']['SettingsSchema']
			/** @description The social media links for location */
			social?: components['schemas']['SocialSchema']
		}
		SnapshotPutSchema: {
			/**
			 * @description Snaptshot ID
			 * @example XXXXXXXXXXX
			 */
			id: string
			/**
			 * @description If you want override all conflicted assets then pass true. Default value is false.
			 * @default false
			 * @example false
			 */
			override: boolean
		}
		UpdateLocationDto: {
			/**
			 * @description The name for the sub-account/location
			 * @example Mark Shoes
			 */
			name?: string
			/**
			 * @description The phone number of the business for which sub-account is created
			 * @example +1410039940
			 */
			phone?: string
			/**
			 * @description Company/Agency Id
			 * @example UAXssdawIWAWD
			 */
			companyId: string
			/**
			 * @description The address of the business for which sub-account is created
			 * @example 4th fleet street
			 */
			address?: string
			/**
			 * @description The city where the business is located for which sub-account is created
			 * @example New York
			 */
			city?: string
			/**
			 * @description The state in which the business operates for which sub-account is created
			 * @example Illinois
			 */
			state?: string
			/**
			 * @description The country in which the business is present for which sub-account is created
			 * @example US
			 * @enum {string}
			 */
			country?: UpdateLocationDtoCountry
			/**
			 * @description The postal code of the business for which sub-account is created
			 * @example 567654
			 */
			postalCode?: string
			/**
			 * @description The website of the business for which sub-account is created
			 * @example https://yourwebsite.com
			 */
			website?: string
			/**
			 * @description The timezone of the business for which sub-account is created
			 * @example US/Central
			 */
			timezone?: string
			/** @example {
			 *       "firstName": "John",
			 *       "lastName": "Doe",
			 *       "email": "john.doe@mail.com"
			 *     } */
			prospectInfo?: components['schemas']['ProspectInfoDto']
			/** @description The default settings for location */
			settings?: components['schemas']['SettingsSchema']
			/** @description The social media links for location */
			social?: components['schemas']['SocialSchema']
			/** @description The twilio credentials for location */
			twilio?: components['schemas']['TwilioSchema']
			/** @description The mailgun credentials for location */
			mailgun?: components['schemas']['MailgunSchema']
			/** @description The snapshot to be updated in the location. */
			snapshot?: components['schemas']['SnapshotPutSchema']
		}
		LocationDeletedSuccessfulResponseDto: {
			/**
			 * @description Success status of the API
			 * @example true
			 */
			success: boolean
			/**
			 * @description Success message of the API
			 * @example Deleted location with id: ve9EPM428h8vShlRW1KT
			 */
			message: string
		}
		LocationTagsSchema: {
			/** @example minim aliquip anim */
			name?: string
			/** @example ve9EPM428h8vShlRW1KT */
			locationId?: string
			/** @example flGwEuzsfJOia1i1ikRN */
			id?: string
		}
		LocationTagsSuccessfulResponseDto: {
			tags?: components['schemas']['LocationTagsSchema'][]
		}
		LocationTagSuccessfulResponseDto: {
			tag?: components['schemas']['LocationTagsSchema']
		}
		tagBody: {
			/**
			 * @description Tag name
			 * @example Tag
			 */
			name: string
		}
		LocationTagDeleteSuccessfulResponseDto: {
			/** @example true */
			succeded?: boolean
		}
		TaskSearchParamsDto: {
			/**
			 * @description Contact Ids
			 * @example [
			 *       "dSMo5jnqkJyh8YeGXM7k",
			 *       "j5WESpmRj816VtyUuWwh"
			 *     ]
			 */
			contactId?: string[]
			/**
			 * @description Task Completed Or Pending
			 * @example true
			 */
			completed?: boolean
			/**
			 * @description Assigned User Ids
			 * @example [
			 *       "0004Mtfsd11SBU1mBPgd"
			 *     ]
			 */
			assignedTo?: string[]
			/**
			 * @description Search Value
			 * @example Task Name
			 */
			query?: string
			/**
			 * @description Limit To Api
			 * @default 25
			 * @example 10
			 */
			limit: number
			/**
			 * @description Number Of Tasks To Skip
			 * @default 0
			 * @example 10
			 */
			skip: number
			/**
			 * @description Bussiness Id
			 * @example 6348240b98722079e5417332
			 */
			businessId?: string
		}
		LocationTaskListSuccessfulResponseDto: {
			tasks?: unknown[][]
		}
		CustomFieldSchema: {
			/** @example 3sv6UEo51C9Bmpo1cKTq */
			id?: string
			/** @example pincode */
			name?: string
			/** @example contact.pincode */
			fieldKey?: string
			/** @example Pin code */
			placeholder?: string
			/** @example TEXT */
			dataType?: string
			/** @example 0 */
			position?: number
			/** @example [
			 *       "first option"
			 *     ] */
			picklistOptions?: string[]
			/** @example [] */
			picklistImageOptions?: string[]
			/** @example false */
			isAllowedCustomOption?: boolean
			/** @example true */
			isMultiFileAllowed?: boolean
			/** @example 4 */
			maxFileLimit?: number
			/** @example 3sv6UEo51C9Bmpo1cKTq */
			locationId?: string
			/**
			 * @description Model of the custom field
			 * @example opportunity
			 * @enum {string}
			 */
			model?: CustomFieldSchemaModel
		}
		CustomFieldsListSuccessfulResponseDto: {
			customFields?: components['schemas']['CustomFieldSchema'][]
		}
		CustomFieldSuccessfulResponseDto: {
			customField?: components['schemas']['CustomFieldSchema']
		}
		textBoxListOptionsSchema: {
			/** @example First */
			label?: string
			/** @example  */
			prefillValue?: string
		}
		CreateCustomFieldsDTO: {
			/** @example Custom Field */
			name: string
			/** @example TEXT */
			dataType: string
			/** @example Placeholder Text */
			placeholder?: string
			/** @example [
			 *       ".pdf",
			 *       ".docx",
			 *       ".jpeg"
			 *     ] */
			acceptedFormat?: string[]
			/** @example false */
			isMultipleFile?: boolean
			/** @example 2 */
			maxNumberOfFiles?: number
			textBoxListOptions?: (
				| components['schemas']['textBoxListOptionsSchema']
				| components['schemas']['textBoxListOptionsSchema']
			)[]
			/**
			 * @default 0
			 * @example 0
			 */
			position: number
			/**
			 * @description Model of the custom field you want to create
			 * @example opportunity
			 * @enum {string}
			 */
			model?: CreateCustomFieldsDTOModel
		}
		UpdateCustomFieldsDTO: {
			/** @example Custom Field */
			name: string
			/** @example Placeholder Text */
			placeholder?: string
			/** @example [
			 *       ".pdf",
			 *       ".docx",
			 *       ".jpeg"
			 *     ] */
			acceptedFormat?: string[]
			/** @example false */
			isMultipleFile?: boolean
			/** @example 2 */
			maxNumberOfFiles?: number
			textBoxListOptions?: (
				| components['schemas']['textBoxListOptionsSchema']
				| components['schemas']['textBoxListOptionsSchema']
			)[]
			/**
			 * @default 0
			 * @example 0
			 */
			position: number
			/**
			 * @description Model of the custom field you want to update
			 * @example opportunity
			 * @enum {string}
			 */
			model?: UpdateCustomFieldsDTOModel
		}
		CustomFieldDeleteSuccessfulResponseDto: {
			/** @example true */
			succeded?: boolean
		}
		FileUploadBody: {
			/**
			 * @description Id(Contact Id/Opportunity Id/Custom Field Id)
			 * @example aWdODOBVOlH1RUFKWQke
			 */
			id?: string
			/**
			 * @description Max number of files
			 * @example 15
			 */
			maxFiles?: string
		}
		FileUploadResponseDto: {
			/**
			 * @description Uploaded files
			 * @example {
			 *       "FileName.csv": "https://highlevel-private-staging.storage.googleapis.com/location/Ar4JQgIyuzRsVuwD9RSK/custom-Field/UpZLmohmKEQYn0ymqplY/56e0d7fc-085c-4a07-9e1d-6d8fdac7e710.csv"
			 *     }
			 */
			uploadedFiles?: Record<string, never>
			/**
			 * @description Meta data of uploaded files
			 * @example [
			 *       {
			 *         "fieldname": "FileName.csv",
			 *         "originalname": "FileName.csv",
			 *         "encoding": "7bit",
			 *         "mimetype": "text/csv",
			 *         "size": 2061,
			 *         "url": "https://highlevel-private-staging.storage.googleapis.com/location/Ar4JQgIyuzRsVuwD9RSK/custom-Field/UpZLmohmKEQYn0ymqplY/56e0d7fc-085c-4a07-9e1d-6d8fdac7e710.csv"
			 *       }
			 *     ]
			 */
			meta?: string[]
		}
		CustomValueSchema: {
			/** @example rWQ709Pb62syqGLceg1x */
			id?: string
			/** @example Custom Field */
			name?: string
			/** @example {{ custom_values.custom_field }} */
			fieldKey?: string
			/** @example Value */
			value?: string
			/** @example rWQ709Pb6dasyqGLceg1x */
			locationId?: string
		}
		CustomValuesListSuccessfulResponseDto: {
			customValues?: components['schemas']['CustomValueSchema'][]
		}
		CustomValueIdSuccessfulResponseDto: {
			customValue?: components['schemas']['CustomValueSchema']
		}
		customValuesDTO: {
			/** @example Custom Field Name */
			name: string
			/** @example Value */
			value: string
		}
		CustomValueDeleteSuccessfulResponseDto: {
			/** @example true */
			succeded?: boolean
		}
		SmsTemplateSchema: {
			/** @example sms body */
			body?: string
			/** @example [] */
			attachments?: unknown[][]
		}
		GetSmsTemplateResponseSchema: {
			/** @example 2yMwhgTNO19bpintqrap */
			id?: string
			/** @example sms template */
			name?: string
			/** @example sms */
			type?: string
			template?: components['schemas']['SmsTemplateSchema']
			/** @example 2022-01-27T12:31:19.679Z */
			dateAdded?: string
			/** @example ve9EPM428h8vShlRW1KT */
			locationId?: string
			/** @example [] */
			urlAttachments?: string[]
		}
		EmailTemplateSchema: {
			/** @example subject text */
			subject?: string
			/** @example [] */
			attachments?: unknown[][]
			/** @example <html><head><style>body{font-family: sans-serif;}</style></head><body>testing</body></html> */
			html?: string
		}
		GetEmailTemplateResponseSchema: {
			/** @example 2yMwhgTNO19bpintqrap */
			id?: string
			/** @example email template */
			name?: string
			/** @example email */
			type?: string
			/** @example 2022-01-27T12:31:19.679Z */
			dateAdded?: string
			template?: components['schemas']['EmailTemplateSchema']
			/** @example ve9EPM428h8vShlRW1KT */
			locationId?: string
		}
		GetTemplatesSuccessfulResponseDto: {
			templates?: (
				| components['schemas']['GetSmsTemplateResponseSchema']
				| components['schemas']['GetEmailTemplateResponseSchema']
			)[]
			/** @example 100 */
			totalCount?: number
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
	'search-locations': {
		parameters: {
			query?: {
				/**
				 * @description The company/agency id on which you want to perform the search
				 * @example 5DP4iH6HLkQsiKESj6rh
				 */
				companyId?: string
				/**
				 * @description The value by which the results should be skipped. Default will be 0
				 * @example 1
				 */
				skip?: string
				/**
				 * @description The value by which the results should be limited. Default will be 10
				 * @example 10
				 */
				limit?: string
				/**
				 * @description The order in which the results should be returned - Allowed values asc, desc. Default will be asc
				 * @example asc
				 */
				order?: string
				/** @example johndoe@mail.com */
				email?: string
			}
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: PathsLocationsSearchGetParametersHeaderVersion
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
					'application/json': components['schemas']['SearchSuccessfulResponseDto']
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
	'get-location': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: PathsLocationsLocationIdGetParametersHeaderVersion
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
					'application/json': components['schemas']['GetLocationByIdSuccessfulResponseDto']
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
	'put-location': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: PathsLocationsLocationIdPutParametersHeaderVersion
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
				'application/json': components['schemas']['UpdateLocationDto']
			}
		}
		responses: {
			/** @description Successful update response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['CreateLocationSuccessfulResponseDto']
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
	'delete-location': {
		parameters: {
			query: {
				/**
				 * @description Boolean value to indicate whether to delete Twilio Account or not
				 * @example false
				 */
				deleteTwilioAccount: boolean
			}
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: PathsLocationsLocationIdDeleteParametersHeaderVersion
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
					'application/json': components['schemas']['LocationDeletedSuccessfulResponseDto']
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
	'get-location-tags': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: PathsLocationsLocationIdTagsGetParametersHeaderVersion
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
					'application/json': components['schemas']['LocationTagsSuccessfulResponseDto']
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
	'create-tag': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: PathsLocationsLocationIdTagsPostParametersHeaderVersion
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
				'application/json': components['schemas']['tagBody']
			}
		}
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['LocationTagSuccessfulResponseDto']
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
	'get-tag-by-id': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: PathsLocationsLocationIdTagsTagIdGetParametersHeaderVersion
			}
			path: {
				/**
				 * @description Location Id
				 * @example ve9EPM428h8vShlRW1KT
				 */
				locationId: string
				/**
				 * @description Tag Id
				 * @example flGwEuzsfJOia1i1ikRN
				 */
				tagId: string
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
					'application/json': components['schemas']['LocationTagSuccessfulResponseDto']
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
	'update-tag': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: PathsLocationsLocationIdTagsTagIdPutParametersHeaderVersion
			}
			path: {
				/**
				 * @description Location Id
				 * @example ve9EPM428h8vShlRW1KT
				 */
				locationId: string
				/**
				 * @description Tag Id
				 * @example flGwEuzsfJOia1i1ikRN
				 */
				tagId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['tagBody']
			}
		}
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['LocationTagSuccessfulResponseDto']
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
	'delete-tag': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: PathsLocationsLocationIdTagsTagIdDeleteParametersHeaderVersion
			}
			path: {
				/**
				 * @description Location Id
				 * @example ve9EPM428h8vShlRW1KT
				 */
				locationId: string
				/**
				 * @description Tag Id
				 * @example flGwEuzsfJOia1i1ikRN
				 */
				tagId: string
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
					'application/json': components['schemas']['LocationTagDeleteSuccessfulResponseDto']
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
	'task-search': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: PathsLocationsLocationIdTasksSearchPostParametersHeaderVersion
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
				'application/json': components['schemas']['TaskSearchParamsDto']
			}
		}
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['LocationTaskListSuccessfulResponseDto']
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
	'get-custom-fields': {
		parameters: {
			query?: {
				/**
				 * @description Model of the custom field you want to retrieve
				 * @example opportunity
				 */
				model?: PathsLocationsLocationIdCustomFieldsGetParametersQueryModel
			}
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: PathsLocationsLocationIdCustomFieldsGetParametersHeaderVersion
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
					'application/json': components['schemas']['CustomFieldsListSuccessfulResponseDto']
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
	'create-custom-field': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: PathsLocationsLocationIdCustomFieldsPostParametersHeaderVersion
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
				'application/json': components['schemas']['CreateCustomFieldsDTO']
			}
		}
		responses: {
			/** @description Successful response */
			201: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['CustomFieldSuccessfulResponseDto']
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
	'get-custom-field': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: PathsLocationsLocationIdCustomFieldsIdGetParametersHeaderVersion
			}
			path: {
				/**
				 * @description Location Id
				 * @example ve9EPM428h8vShlRW1KT
				 */
				locationId: string
				/**
				 * @description Custom Field Id
				 * @example 00NhGCcN1tlO8ZHcu7Wb
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
					'application/json': components['schemas']['CustomFieldSuccessfulResponseDto']
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
	'update-custom-field': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: PathsLocationsLocationIdCustomFieldsIdPutParametersHeaderVersion
			}
			path: {
				/**
				 * @description Location Id
				 * @example ve9EPM428h8vShlRW1KT
				 */
				locationId: string
				/**
				 * @description Custom Field Id
				 * @example 00NhGCcN1tlO8ZHcu7Wb
				 */
				id: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['UpdateCustomFieldsDTO']
			}
		}
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['CustomFieldSuccessfulResponseDto']
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
	'delete-custom-field': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: PathsLocationsLocationIdCustomFieldsIdDeleteParametersHeaderVersion
			}
			path: {
				/**
				 * @description Location Id
				 * @example ve9EPM428h8vShlRW1KT
				 */
				locationId: string
				/**
				 * @description Custom Field Id
				 * @example 00NhGCcN1tlO8ZHcu7Wb
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
					'application/json': components['schemas']['CustomFieldDeleteSuccessfulResponseDto']
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
	'upload-file-customFields': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: PathsLocationsLocationIdCustomFieldsUploadPostParametersHeaderVersion
			}
			path: {
				locationId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'multipart/form-data': components['schemas']['FileUploadBody']
			}
		}
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['FileUploadResponseDto']
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
	'get-custom-values': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: PathsLocationsLocationIdCustomValuesGetParametersHeaderVersion
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
					'application/json': components['schemas']['CustomValuesListSuccessfulResponseDto']
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
	'create-custom-value': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: PathsLocationsLocationIdCustomValuesPostParametersHeaderVersion
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
				'application/json': components['schemas']['customValuesDTO']
			}
		}
		responses: {
			/** @description Successful response */
			201: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['CustomValueIdSuccessfulResponseDto']
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
	'get-custom-value': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: PathsLocationsLocationIdCustomValuesIdGetParametersHeaderVersion
			}
			path: {
				/**
				 * @description Location Id
				 * @example ve9EPM428h8vShlRW1KT
				 */
				locationId: string
				/**
				 * @description Custom Value Id
				 * @example kOBjMVAJhFuUeYIojVet
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
					'application/json': components['schemas']['CustomValueIdSuccessfulResponseDto']
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
	'update-custom-value': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: PathsLocationsLocationIdCustomValuesIdPutParametersHeaderVersion
			}
			path: {
				/**
				 * @description Location Id
				 * @example ve9EPM428h8vShlRW1KT
				 */
				locationId: string
				/**
				 * @description Custom Value Id
				 * @example kOBjMVAJhFuUeYIojVet
				 */
				id: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['customValuesDTO']
			}
		}
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['CustomValueIdSuccessfulResponseDto']
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
	'delete-custom-value': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: PathsLocationsLocationIdCustomValuesIdDeleteParametersHeaderVersion
			}
			path: {
				/**
				 * @description Location Id
				 * @example ve9EPM428h8vShlRW1KT
				 */
				locationId: string
				/**
				 * @description Custom Value Id
				 * @example kOBjMVAJhFuUeYIojVet
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
					'application/json': components['schemas']['CustomValueDeleteSuccessfulResponseDto']
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
	'get-timezones': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: PathsLocationsLocationIdTimezonesGetParametersHeaderVersion
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
	'GET-all-or-email-sms-templates': {
		parameters: {
			query: {
				/** @example false */
				deleted?: boolean
				/** @example 1 */
				skip?: string
				/** @example 25 */
				limit?: string
				type?: PathsLocationsLocationIdTemplatesGetParametersQueryType
				/**
				 * @description Origin Id
				 * @example ve9EPM428h8vShlRW1KT
				 */
				originId: string
			}
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: PathsLocationsLocationIdTemplatesGetParametersHeaderVersion
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
					'application/json': components['schemas']['GetTemplatesSuccessfulResponseDto']
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
	'DELETE-an-email-sms-template': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: PathsLocationsLocationIdTemplatesIdDeleteParametersHeaderVersion
			}
			path: {
				/**
				 * @description Location Id
				 * @example ve9EPM428h8vShlRW1KT
				 */
				locationId: string
				/**
				 * @description Template Id
				 * @example ve9EPM428h8vShlRW1KT
				 */
				id: string
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
	'create-location': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: PathsLocationsPostParametersHeaderVersion
			}
			path?: never
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['CreateLocationDto']
			}
		}
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['CreateLocationSuccessfulResponseDto']
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
}
export enum PathsLocationsSearchGetParametersHeaderVersion {
	Value2021_07_28 = '2021-07-28',
}
export enum PathsLocationsLocationIdGetParametersHeaderVersion {
	Value2021_07_28 = '2021-07-28',
}
export enum PathsLocationsLocationIdPutParametersHeaderVersion {
	Value2021_07_28 = '2021-07-28',
}
export enum PathsLocationsLocationIdDeleteParametersHeaderVersion {
	Value2021_07_28 = '2021-07-28',
}
export enum PathsLocationsLocationIdTagsGetParametersHeaderVersion {
	Value2021_07_28 = '2021-07-28',
}
export enum PathsLocationsLocationIdTagsPostParametersHeaderVersion {
	Value2021_07_28 = '2021-07-28',
}
export enum PathsLocationsLocationIdTagsTagIdGetParametersHeaderVersion {
	Value2021_07_28 = '2021-07-28',
}
export enum PathsLocationsLocationIdTagsTagIdPutParametersHeaderVersion {
	Value2021_07_28 = '2021-07-28',
}
export enum PathsLocationsLocationIdTagsTagIdDeleteParametersHeaderVersion {
	Value2021_07_28 = '2021-07-28',
}
export enum PathsLocationsLocationIdTasksSearchPostParametersHeaderVersion {
	Value2021_07_28 = '2021-07-28',
}
export enum PathsLocationsLocationIdCustomFieldsGetParametersQueryModel {
	contact = 'contact',
	opportunity = 'opportunity',
	all = 'all',
}
export enum PathsLocationsLocationIdCustomFieldsGetParametersHeaderVersion {
	Value2021_07_28 = '2021-07-28',
}
export enum PathsLocationsLocationIdCustomFieldsPostParametersHeaderVersion {
	Value2021_07_28 = '2021-07-28',
}
export enum PathsLocationsLocationIdCustomFieldsIdGetParametersHeaderVersion {
	Value2021_07_28 = '2021-07-28',
}
export enum PathsLocationsLocationIdCustomFieldsIdPutParametersHeaderVersion {
	Value2021_07_28 = '2021-07-28',
}
export enum PathsLocationsLocationIdCustomFieldsIdDeleteParametersHeaderVersion {
	Value2021_07_28 = '2021-07-28',
}
export enum PathsLocationsLocationIdCustomFieldsUploadPostParametersHeaderVersion {
	Value2021_07_28 = '2021-07-28',
}
export enum PathsLocationsLocationIdCustomValuesGetParametersHeaderVersion {
	Value2021_07_28 = '2021-07-28',
}
export enum PathsLocationsLocationIdCustomValuesPostParametersHeaderVersion {
	Value2021_07_28 = '2021-07-28',
}
export enum PathsLocationsLocationIdCustomValuesIdGetParametersHeaderVersion {
	Value2021_07_28 = '2021-07-28',
}
export enum PathsLocationsLocationIdCustomValuesIdPutParametersHeaderVersion {
	Value2021_07_28 = '2021-07-28',
}
export enum PathsLocationsLocationIdCustomValuesIdDeleteParametersHeaderVersion {
	Value2021_07_28 = '2021-07-28',
}
export enum PathsLocationsLocationIdTimezonesGetParametersHeaderVersion {
	Value2021_07_28 = '2021-07-28',
}
export enum PathsLocationsLocationIdTemplatesGetParametersQueryType {
	sms = 'sms',
	email = 'email',
	whatsapp = 'whatsapp',
}
export enum PathsLocationsLocationIdTemplatesGetParametersHeaderVersion {
	Value2021_07_28 = '2021-07-28',
}
export enum PathsLocationsLocationIdTemplatesIdDeleteParametersHeaderVersion {
	Value2021_07_28 = '2021-07-28',
}
export enum PathsLocationsPostParametersHeaderVersion {
	Value2021_07_28 = '2021-07-28',
}
export enum CreateLocationDtoCountry {
	AF = 'AF',
	AX = 'AX',
	AL = 'AL',
	DZ = 'DZ',
	AS = 'AS',
	AD = 'AD',
	AO = 'AO',
	AI = 'AI',
	AQ = 'AQ',
	AG = 'AG',
	AR = 'AR',
	AM = 'AM',
	AW = 'AW',
	AU = 'AU',
	AT = 'AT',
	AZ = 'AZ',
	BS = 'BS',
	BH = 'BH',
	BD = 'BD',
	BB = 'BB',
	BY = 'BY',
	BE = 'BE',
	BZ = 'BZ',
	BJ = 'BJ',
	BM = 'BM',
	BT = 'BT',
	BO = 'BO',
	BA = 'BA',
	BW = 'BW',
	BV = 'BV',
	BR = 'BR',
	IO = 'IO',
	BN = 'BN',
	BG = 'BG',
	BF = 'BF',
	BI = 'BI',
	KH = 'KH',
	CM = 'CM',
	CA = 'CA',
	CV = 'CV',
	KY = 'KY',
	CF = 'CF',
	TD = 'TD',
	CL = 'CL',
	CN = 'CN',
	CX = 'CX',
	CC = 'CC',
	CO = 'CO',
	KM = 'KM',
	CG = 'CG',
	CD = 'CD',
	CK = 'CK',
	CR = 'CR',
	CI = 'CI',
	HR = 'HR',
	CU = 'CU',
	CY = 'CY',
	CZ = 'CZ',
	DK = 'DK',
	DJ = 'DJ',
	DM = 'DM',
	DO = 'DO',
	EC = 'EC',
	EG = 'EG',
	SV = 'SV',
	GQ = 'GQ',
	ER = 'ER',
	EE = 'EE',
	ET = 'ET',
	FK = 'FK',
	FO = 'FO',
	FJ = 'FJ',
	FI = 'FI',
	FR = 'FR',
	GF = 'GF',
	PF = 'PF',
	TF = 'TF',
	GA = 'GA',
	GM = 'GM',
	GE = 'GE',
	DE = 'DE',
	GH = 'GH',
	GI = 'GI',
	GR = 'GR',
	GL = 'GL',
	GD = 'GD',
	GP = 'GP',
	GU = 'GU',
	GT = 'GT',
	GG = 'GG',
	GN = 'GN',
	GW = 'GW',
	GY = 'GY',
	HT = 'HT',
	HM = 'HM',
	VA = 'VA',
	HN = 'HN',
	HK = 'HK',
	HU = 'HU',
	IS = 'IS',
	IN = 'IN',
	ID = 'ID',
	IR = 'IR',
	IQ = 'IQ',
	IE = 'IE',
	IM = 'IM',
	IL = 'IL',
	IT = 'IT',
	JM = 'JM',
	JP = 'JP',
	JE = 'JE',
	JO = 'JO',
	KZ = 'KZ',
	KE = 'KE',
	KI = 'KI',
	KP = 'KP',
	KR = 'KR',
	XK = 'XK',
	KW = 'KW',
	KG = 'KG',
	LA = 'LA',
	LV = 'LV',
	LB = 'LB',
	LS = 'LS',
	LR = 'LR',
	LY = 'LY',
	LI = 'LI',
	LT = 'LT',
	LU = 'LU',
	MO = 'MO',
	MK = 'MK',
	MG = 'MG',
	MW = 'MW',
	MY = 'MY',
	MV = 'MV',
	ML = 'ML',
	MT = 'MT',
	MH = 'MH',
	MQ = 'MQ',
	MR = 'MR',
	MU = 'MU',
	YT = 'YT',
	MX = 'MX',
	FM = 'FM',
	MD = 'MD',
	MC = 'MC',
	MN = 'MN',
	ME = 'ME',
	MS = 'MS',
	MA = 'MA',
	MZ = 'MZ',
	MM = 'MM',
	NA = 'NA',
	NR = 'NR',
	NP = 'NP',
	NL = 'NL',
	AN = 'AN',
	NC = 'NC',
	NZ = 'NZ',
	NI = 'NI',
	NE = 'NE',
	NG = 'NG',
	NU = 'NU',
	NF = 'NF',
	MP = 'MP',
	NO = 'NO',
	OM = 'OM',
	PK = 'PK',
	PW = 'PW',
	PS = 'PS',
	PA = 'PA',
	PG = 'PG',
	PY = 'PY',
	PE = 'PE',
	PH = 'PH',
	PN = 'PN',
	PL = 'PL',
	PT = 'PT',
	PR = 'PR',
	QA = 'QA',
	RE = 'RE',
	RO = 'RO',
	RU = 'RU',
	RW = 'RW',
	SH = 'SH',
	KN = 'KN',
	LC = 'LC',
	MF = 'MF',
	PM = 'PM',
	VC = 'VC',
	WS = 'WS',
	SM = 'SM',
	ST = 'ST',
	SA = 'SA',
	SN = 'SN',
	RS = 'RS',
	SC = 'SC',
	SL = 'SL',
	SG = 'SG',
	SX = 'SX',
	SK = 'SK',
	SI = 'SI',
	SB = 'SB',
	SO = 'SO',
	ZA = 'ZA',
	GS = 'GS',
	ES = 'ES',
	LK = 'LK',
	SD = 'SD',
	SR = 'SR',
	SJ = 'SJ',
	SZ = 'SZ',
	SE = 'SE',
	CH = 'CH',
	SY = 'SY',
	TW = 'TW',
	TJ = 'TJ',
	TZ = 'TZ',
	TH = 'TH',
	TL = 'TL',
	TG = 'TG',
	TK = 'TK',
	TO = 'TO',
	TT = 'TT',
	TN = 'TN',
	TR = 'TR',
	TM = 'TM',
	TC = 'TC',
	TV = 'TV',
	UG = 'UG',
	GB = 'GB',
	UA = 'UA',
	AE = 'AE',
	US = 'US',
	UM = 'UM',
	UY = 'UY',
	UZ = 'UZ',
	VU = 'VU',
	VE = 'VE',
	VN = 'VN',
	VG = 'VG',
	VI = 'VI',
	WF = 'WF',
	EH = 'EH',
	YE = 'YE',
	ZM = 'ZM',
	ZW = 'ZW',
}
export enum CreateLocationSuccessfulResponseDtoCountry {
	AF = 'AF',
	AX = 'AX',
	AL = 'AL',
	DZ = 'DZ',
	AS = 'AS',
	AD = 'AD',
	AO = 'AO',
	AI = 'AI',
	AQ = 'AQ',
	AG = 'AG',
	AR = 'AR',
	AM = 'AM',
	AW = 'AW',
	AU = 'AU',
	AT = 'AT',
	AZ = 'AZ',
	BS = 'BS',
	BH = 'BH',
	BD = 'BD',
	BB = 'BB',
	BY = 'BY',
	BE = 'BE',
	BZ = 'BZ',
	BJ = 'BJ',
	BM = 'BM',
	BT = 'BT',
	BO = 'BO',
	BA = 'BA',
	BW = 'BW',
	BV = 'BV',
	BR = 'BR',
	IO = 'IO',
	BN = 'BN',
	BG = 'BG',
	BF = 'BF',
	BI = 'BI',
	KH = 'KH',
	CM = 'CM',
	CA = 'CA',
	CV = 'CV',
	KY = 'KY',
	CF = 'CF',
	TD = 'TD',
	CL = 'CL',
	CN = 'CN',
	CX = 'CX',
	CC = 'CC',
	CO = 'CO',
	KM = 'KM',
	CG = 'CG',
	CD = 'CD',
	CK = 'CK',
	CR = 'CR',
	CI = 'CI',
	HR = 'HR',
	CU = 'CU',
	CY = 'CY',
	CZ = 'CZ',
	DK = 'DK',
	DJ = 'DJ',
	DM = 'DM',
	DO = 'DO',
	EC = 'EC',
	EG = 'EG',
	SV = 'SV',
	GQ = 'GQ',
	ER = 'ER',
	EE = 'EE',
	ET = 'ET',
	FK = 'FK',
	FO = 'FO',
	FJ = 'FJ',
	FI = 'FI',
	FR = 'FR',
	GF = 'GF',
	PF = 'PF',
	TF = 'TF',
	GA = 'GA',
	GM = 'GM',
	GE = 'GE',
	DE = 'DE',
	GH = 'GH',
	GI = 'GI',
	GR = 'GR',
	GL = 'GL',
	GD = 'GD',
	GP = 'GP',
	GU = 'GU',
	GT = 'GT',
	GG = 'GG',
	GN = 'GN',
	GW = 'GW',
	GY = 'GY',
	HT = 'HT',
	HM = 'HM',
	VA = 'VA',
	HN = 'HN',
	HK = 'HK',
	HU = 'HU',
	IS = 'IS',
	IN = 'IN',
	ID = 'ID',
	IR = 'IR',
	IQ = 'IQ',
	IE = 'IE',
	IM = 'IM',
	IL = 'IL',
	IT = 'IT',
	JM = 'JM',
	JP = 'JP',
	JE = 'JE',
	JO = 'JO',
	KZ = 'KZ',
	KE = 'KE',
	KI = 'KI',
	KP = 'KP',
	KR = 'KR',
	XK = 'XK',
	KW = 'KW',
	KG = 'KG',
	LA = 'LA',
	LV = 'LV',
	LB = 'LB',
	LS = 'LS',
	LR = 'LR',
	LY = 'LY',
	LI = 'LI',
	LT = 'LT',
	LU = 'LU',
	MO = 'MO',
	MK = 'MK',
	MG = 'MG',
	MW = 'MW',
	MY = 'MY',
	MV = 'MV',
	ML = 'ML',
	MT = 'MT',
	MH = 'MH',
	MQ = 'MQ',
	MR = 'MR',
	MU = 'MU',
	YT = 'YT',
	MX = 'MX',
	FM = 'FM',
	MD = 'MD',
	MC = 'MC',
	MN = 'MN',
	ME = 'ME',
	MS = 'MS',
	MA = 'MA',
	MZ = 'MZ',
	MM = 'MM',
	NA = 'NA',
	NR = 'NR',
	NP = 'NP',
	NL = 'NL',
	AN = 'AN',
	NC = 'NC',
	NZ = 'NZ',
	NI = 'NI',
	NE = 'NE',
	NG = 'NG',
	NU = 'NU',
	NF = 'NF',
	MP = 'MP',
	NO = 'NO',
	OM = 'OM',
	PK = 'PK',
	PW = 'PW',
	PS = 'PS',
	PA = 'PA',
	PG = 'PG',
	PY = 'PY',
	PE = 'PE',
	PH = 'PH',
	PN = 'PN',
	PL = 'PL',
	PT = 'PT',
	PR = 'PR',
	QA = 'QA',
	RE = 'RE',
	RO = 'RO',
	RU = 'RU',
	RW = 'RW',
	SH = 'SH',
	KN = 'KN',
	LC = 'LC',
	MF = 'MF',
	PM = 'PM',
	VC = 'VC',
	WS = 'WS',
	SM = 'SM',
	ST = 'ST',
	SA = 'SA',
	SN = 'SN',
	RS = 'RS',
	SC = 'SC',
	SL = 'SL',
	SG = 'SG',
	SX = 'SX',
	SK = 'SK',
	SI = 'SI',
	SB = 'SB',
	SO = 'SO',
	ZA = 'ZA',
	GS = 'GS',
	ES = 'ES',
	LK = 'LK',
	SD = 'SD',
	SR = 'SR',
	SJ = 'SJ',
	SZ = 'SZ',
	SE = 'SE',
	CH = 'CH',
	SY = 'SY',
	TW = 'TW',
	TJ = 'TJ',
	TZ = 'TZ',
	TH = 'TH',
	TL = 'TL',
	TG = 'TG',
	TK = 'TK',
	TO = 'TO',
	TT = 'TT',
	TN = 'TN',
	TR = 'TR',
	TM = 'TM',
	TC = 'TC',
	TV = 'TV',
	UG = 'UG',
	GB = 'GB',
	UA = 'UA',
	AE = 'AE',
	US = 'US',
	UM = 'UM',
	UY = 'UY',
	UZ = 'UZ',
	VU = 'VU',
	VE = 'VE',
	VN = 'VN',
	VG = 'VG',
	VI = 'VI',
	WF = 'WF',
	EH = 'EH',
	YE = 'YE',
	ZM = 'ZM',
	ZW = 'ZW',
}
export enum UpdateLocationDtoCountry {
	AF = 'AF',
	AX = 'AX',
	AL = 'AL',
	DZ = 'DZ',
	AS = 'AS',
	AD = 'AD',
	AO = 'AO',
	AI = 'AI',
	AQ = 'AQ',
	AG = 'AG',
	AR = 'AR',
	AM = 'AM',
	AW = 'AW',
	AU = 'AU',
	AT = 'AT',
	AZ = 'AZ',
	BS = 'BS',
	BH = 'BH',
	BD = 'BD',
	BB = 'BB',
	BY = 'BY',
	BE = 'BE',
	BZ = 'BZ',
	BJ = 'BJ',
	BM = 'BM',
	BT = 'BT',
	BO = 'BO',
	BA = 'BA',
	BW = 'BW',
	BV = 'BV',
	BR = 'BR',
	IO = 'IO',
	BN = 'BN',
	BG = 'BG',
	BF = 'BF',
	BI = 'BI',
	KH = 'KH',
	CM = 'CM',
	CA = 'CA',
	CV = 'CV',
	KY = 'KY',
	CF = 'CF',
	TD = 'TD',
	CL = 'CL',
	CN = 'CN',
	CX = 'CX',
	CC = 'CC',
	CO = 'CO',
	KM = 'KM',
	CG = 'CG',
	CD = 'CD',
	CK = 'CK',
	CR = 'CR',
	CI = 'CI',
	HR = 'HR',
	CU = 'CU',
	CY = 'CY',
	CZ = 'CZ',
	DK = 'DK',
	DJ = 'DJ',
	DM = 'DM',
	DO = 'DO',
	EC = 'EC',
	EG = 'EG',
	SV = 'SV',
	GQ = 'GQ',
	ER = 'ER',
	EE = 'EE',
	ET = 'ET',
	FK = 'FK',
	FO = 'FO',
	FJ = 'FJ',
	FI = 'FI',
	FR = 'FR',
	GF = 'GF',
	PF = 'PF',
	TF = 'TF',
	GA = 'GA',
	GM = 'GM',
	GE = 'GE',
	DE = 'DE',
	GH = 'GH',
	GI = 'GI',
	GR = 'GR',
	GL = 'GL',
	GD = 'GD',
	GP = 'GP',
	GU = 'GU',
	GT = 'GT',
	GG = 'GG',
	GN = 'GN',
	GW = 'GW',
	GY = 'GY',
	HT = 'HT',
	HM = 'HM',
	VA = 'VA',
	HN = 'HN',
	HK = 'HK',
	HU = 'HU',
	IS = 'IS',
	IN = 'IN',
	ID = 'ID',
	IR = 'IR',
	IQ = 'IQ',
	IE = 'IE',
	IM = 'IM',
	IL = 'IL',
	IT = 'IT',
	JM = 'JM',
	JP = 'JP',
	JE = 'JE',
	JO = 'JO',
	KZ = 'KZ',
	KE = 'KE',
	KI = 'KI',
	KP = 'KP',
	KR = 'KR',
	XK = 'XK',
	KW = 'KW',
	KG = 'KG',
	LA = 'LA',
	LV = 'LV',
	LB = 'LB',
	LS = 'LS',
	LR = 'LR',
	LY = 'LY',
	LI = 'LI',
	LT = 'LT',
	LU = 'LU',
	MO = 'MO',
	MK = 'MK',
	MG = 'MG',
	MW = 'MW',
	MY = 'MY',
	MV = 'MV',
	ML = 'ML',
	MT = 'MT',
	MH = 'MH',
	MQ = 'MQ',
	MR = 'MR',
	MU = 'MU',
	YT = 'YT',
	MX = 'MX',
	FM = 'FM',
	MD = 'MD',
	MC = 'MC',
	MN = 'MN',
	ME = 'ME',
	MS = 'MS',
	MA = 'MA',
	MZ = 'MZ',
	MM = 'MM',
	NA = 'NA',
	NR = 'NR',
	NP = 'NP',
	NL = 'NL',
	AN = 'AN',
	NC = 'NC',
	NZ = 'NZ',
	NI = 'NI',
	NE = 'NE',
	NG = 'NG',
	NU = 'NU',
	NF = 'NF',
	MP = 'MP',
	NO = 'NO',
	OM = 'OM',
	PK = 'PK',
	PW = 'PW',
	PS = 'PS',
	PA = 'PA',
	PG = 'PG',
	PY = 'PY',
	PE = 'PE',
	PH = 'PH',
	PN = 'PN',
	PL = 'PL',
	PT = 'PT',
	PR = 'PR',
	QA = 'QA',
	RE = 'RE',
	RO = 'RO',
	RU = 'RU',
	RW = 'RW',
	SH = 'SH',
	KN = 'KN',
	LC = 'LC',
	MF = 'MF',
	PM = 'PM',
	VC = 'VC',
	WS = 'WS',
	SM = 'SM',
	ST = 'ST',
	SA = 'SA',
	SN = 'SN',
	RS = 'RS',
	SC = 'SC',
	SL = 'SL',
	SG = 'SG',
	SX = 'SX',
	SK = 'SK',
	SI = 'SI',
	SB = 'SB',
	SO = 'SO',
	ZA = 'ZA',
	GS = 'GS',
	ES = 'ES',
	LK = 'LK',
	SD = 'SD',
	SR = 'SR',
	SJ = 'SJ',
	SZ = 'SZ',
	SE = 'SE',
	CH = 'CH',
	SY = 'SY',
	TW = 'TW',
	TJ = 'TJ',
	TZ = 'TZ',
	TH = 'TH',
	TL = 'TL',
	TG = 'TG',
	TK = 'TK',
	TO = 'TO',
	TT = 'TT',
	TN = 'TN',
	TR = 'TR',
	TM = 'TM',
	TC = 'TC',
	TV = 'TV',
	UG = 'UG',
	GB = 'GB',
	UA = 'UA',
	AE = 'AE',
	US = 'US',
	UM = 'UM',
	UY = 'UY',
	UZ = 'UZ',
	VU = 'VU',
	VE = 'VE',
	VN = 'VN',
	VG = 'VG',
	VI = 'VI',
	WF = 'WF',
	EH = 'EH',
	YE = 'YE',
	ZM = 'ZM',
	ZW = 'ZW',
}
export enum CustomFieldSchemaModel {
	contact = 'contact',
	opportunity = 'opportunity',
}
export enum CreateCustomFieldsDTOModel {
	contact = 'contact',
	opportunity = 'opportunity',
}
export enum UpdateCustomFieldsDTOModel {
	contact = 'contact',
	opportunity = 'opportunity',
}
