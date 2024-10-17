export type paths = {
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
		BusinessSchema: {
			/** @example MIG 14, Delhi */
			address?: string
			/** @example delhi */
			city?: string
			/** @example IN */
			country?: string
			/** @example https://dummyimage.com/o/locationPhotos%2Fve9EPM428h8vShlRW1KT.jpeg */
			logoUrl?: string
			/** @example dentist */
			name?: string
			/** @example 567654 */
			postalCode?: string
			/** @example delhi */
			state?: string
			/** @example America/Chicago */
			timezone?: string
			/** @example https://gohighlevel.com/ */
			website?: string
		}
		CreateCustomFieldsDTO: {
			/** @example [
			 *       ".pdf",
			 *       ".docx",
			 *       ".jpeg"
			 *     ] */
			acceptedFormat?: string[]
			/** @example TEXT */
			dataType: string
			/** @example false */
			isMultipleFile?: boolean
			/** @example 2 */
			maxNumberOfFiles?: number
			/**
			 * @description Model of the custom field you want to create
			 * @example opportunity
			 * @enum {string}
			 */
			model?: 'contact' | 'opportunity'
			/** @example Custom Field */
			name: string
			/** @example Placeholder Text */
			placeholder?: string
			/**
			 * @default 0
			 * @example 0
			 */
			position: number
			textBoxListOptions?: (
				| components['schemas']['textBoxListOptionsSchema']
				| components['schemas']['textBoxListOptionsSchema']
			)[]
		}
		CreateLocationDto: {
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
			 * @description Company/Agency Id
			 * @example UAXssdawIWAWD
			 */
			companyId: string
			/**
			 * @description The 2 letter country-code in which the business is present for which sub-account is created
			 * @example US
			 * @enum {string}
			 */
			country?:
				| 'AF'
				| 'AX'
				| 'AL'
				| 'DZ'
				| 'AS'
				| 'AD'
				| 'AO'
				| 'AI'
				| 'AQ'
				| 'AG'
				| 'AR'
				| 'AM'
				| 'AW'
				| 'AU'
				| 'AT'
				| 'AZ'
				| 'BS'
				| 'BH'
				| 'BD'
				| 'BB'
				| 'BY'
				| 'BE'
				| 'BZ'
				| 'BJ'
				| 'BM'
				| 'BT'
				| 'BO'
				| 'BA'
				| 'BW'
				| 'BV'
				| 'BR'
				| 'IO'
				| 'BN'
				| 'BG'
				| 'BF'
				| 'BI'
				| 'KH'
				| 'CM'
				| 'CA'
				| 'CV'
				| 'KY'
				| 'CF'
				| 'TD'
				| 'CL'
				| 'CN'
				| 'CX'
				| 'CC'
				| 'CO'
				| 'KM'
				| 'CG'
				| 'CD'
				| 'CK'
				| 'CR'
				| 'CI'
				| 'HR'
				| 'CU'
				| 'CY'
				| 'CZ'
				| 'DK'
				| 'DJ'
				| 'DM'
				| 'DO'
				| 'EC'
				| 'EG'
				| 'SV'
				| 'GQ'
				| 'ER'
				| 'EE'
				| 'ET'
				| 'FK'
				| 'FO'
				| 'FJ'
				| 'FI'
				| 'FR'
				| 'GF'
				| 'PF'
				| 'TF'
				| 'GA'
				| 'GM'
				| 'GE'
				| 'DE'
				| 'GH'
				| 'GI'
				| 'GR'
				| 'GL'
				| 'GD'
				| 'GP'
				| 'GU'
				| 'GT'
				| 'GG'
				| 'GN'
				| 'GW'
				| 'GY'
				| 'HT'
				| 'HM'
				| 'VA'
				| 'HN'
				| 'HK'
				| 'HU'
				| 'IS'
				| 'IN'
				| 'ID'
				| 'IR'
				| 'IQ'
				| 'IE'
				| 'IM'
				| 'IL'
				| 'IT'
				| 'JM'
				| 'JP'
				| 'JE'
				| 'JO'
				| 'KZ'
				| 'KE'
				| 'KI'
				| 'KP'
				| 'KR'
				| 'XK'
				| 'KW'
				| 'KG'
				| 'LA'
				| 'LV'
				| 'LB'
				| 'LS'
				| 'LR'
				| 'LY'
				| 'LI'
				| 'LT'
				| 'LU'
				| 'MO'
				| 'MK'
				| 'MG'
				| 'MW'
				| 'MY'
				| 'MV'
				| 'ML'
				| 'MT'
				| 'MH'
				| 'MQ'
				| 'MR'
				| 'MU'
				| 'YT'
				| 'MX'
				| 'FM'
				| 'MD'
				| 'MC'
				| 'MN'
				| 'ME'
				| 'MS'
				| 'MA'
				| 'MZ'
				| 'MM'
				| 'NA'
				| 'NR'
				| 'NP'
				| 'NL'
				| 'AN'
				| 'NC'
				| 'NZ'
				| 'NI'
				| 'NE'
				| 'NG'
				| 'NU'
				| 'NF'
				| 'MP'
				| 'NO'
				| 'OM'
				| 'PK'
				| 'PW'
				| 'PS'
				| 'PA'
				| 'PG'
				| 'PY'
				| 'PE'
				| 'PH'
				| 'PN'
				| 'PL'
				| 'PT'
				| 'PR'
				| 'QA'
				| 'RE'
				| 'RO'
				| 'RU'
				| 'RW'
				| 'SH'
				| 'KN'
				| 'LC'
				| 'MF'
				| 'PM'
				| 'VC'
				| 'WS'
				| 'SM'
				| 'ST'
				| 'SA'
				| 'SN'
				| 'RS'
				| 'SC'
				| 'SL'
				| 'SG'
				| 'SX'
				| 'SK'
				| 'SI'
				| 'SB'
				| 'SO'
				| 'ZA'
				| 'GS'
				| 'ES'
				| 'LK'
				| 'SD'
				| 'SR'
				| 'SJ'
				| 'SZ'
				| 'SE'
				| 'CH'
				| 'SY'
				| 'TW'
				| 'TJ'
				| 'TZ'
				| 'TH'
				| 'TL'
				| 'TG'
				| 'TK'
				| 'TO'
				| 'TT'
				| 'TN'
				| 'TR'
				| 'TM'
				| 'TC'
				| 'TV'
				| 'UG'
				| 'GB'
				| 'UA'
				| 'AE'
				| 'US'
				| 'UM'
				| 'UY'
				| 'UZ'
				| 'VU'
				| 'VE'
				| 'VN'
				| 'VG'
				| 'VI'
				| 'WF'
				| 'EH'
				| 'YE'
				| 'ZM'
				| 'ZW'
			/** @description The mailgun credentials for location */
			mailgun?: components['schemas']['MailgunSchema']
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
			 * @description The postal code of the business for which sub-account is created
			 * @example 567654
			 */
			postalCode?: string
			/** @example {
			 *       "firstName": "John",
			 *       "lastName": "Doe",
			 *       "email": "john.doe@mail.com"
			 *     } */
			prospectInfo?: components['schemas']['ProspectInfoDto']
			/** @description The default settings for location */
			settings?: components['schemas']['SettingsSchema']
			/**
			 * @description The snapshot ID to be loaded into the location.
			 * @example XXXXXXXXXXX
			 */
			snapshotId?: string
			/** @description The social media links for location */
			social?: components['schemas']['SocialSchema']
			/**
			 * @description The state in which the business operates for which sub-account is created
			 * @example Illinois
			 */
			state?: string
			/**
			 * @description The timezone of the business for which sub-account is created
			 * @example US/Central
			 */
			timezone?: string
			/** @description The twilio credentials for location */
			twilio?: components['schemas']['TwilioSchema']
			/**
			 * @description The website of the business for which sub-account is created
			 * @example https://yourwebsite.com
			 */
			website?: string
		}
		CreateLocationSuccessfulResponseDto: {
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
			 * @description Company/Agency Id
			 * @example UAXssdawIWAWD
			 */
			companyId?: string
			/**
			 * @description The country in which the business is present for which sub-account is created
			 * @example US
			 * @enum {string}
			 */
			country?:
				| 'AF'
				| 'AX'
				| 'AL'
				| 'DZ'
				| 'AS'
				| 'AD'
				| 'AO'
				| 'AI'
				| 'AQ'
				| 'AG'
				| 'AR'
				| 'AM'
				| 'AW'
				| 'AU'
				| 'AT'
				| 'AZ'
				| 'BS'
				| 'BH'
				| 'BD'
				| 'BB'
				| 'BY'
				| 'BE'
				| 'BZ'
				| 'BJ'
				| 'BM'
				| 'BT'
				| 'BO'
				| 'BA'
				| 'BW'
				| 'BV'
				| 'BR'
				| 'IO'
				| 'BN'
				| 'BG'
				| 'BF'
				| 'BI'
				| 'KH'
				| 'CM'
				| 'CA'
				| 'CV'
				| 'KY'
				| 'CF'
				| 'TD'
				| 'CL'
				| 'CN'
				| 'CX'
				| 'CC'
				| 'CO'
				| 'KM'
				| 'CG'
				| 'CD'
				| 'CK'
				| 'CR'
				| 'CI'
				| 'HR'
				| 'CU'
				| 'CY'
				| 'CZ'
				| 'DK'
				| 'DJ'
				| 'DM'
				| 'DO'
				| 'EC'
				| 'EG'
				| 'SV'
				| 'GQ'
				| 'ER'
				| 'EE'
				| 'ET'
				| 'FK'
				| 'FO'
				| 'FJ'
				| 'FI'
				| 'FR'
				| 'GF'
				| 'PF'
				| 'TF'
				| 'GA'
				| 'GM'
				| 'GE'
				| 'DE'
				| 'GH'
				| 'GI'
				| 'GR'
				| 'GL'
				| 'GD'
				| 'GP'
				| 'GU'
				| 'GT'
				| 'GG'
				| 'GN'
				| 'GW'
				| 'GY'
				| 'HT'
				| 'HM'
				| 'VA'
				| 'HN'
				| 'HK'
				| 'HU'
				| 'IS'
				| 'IN'
				| 'ID'
				| 'IR'
				| 'IQ'
				| 'IE'
				| 'IM'
				| 'IL'
				| 'IT'
				| 'JM'
				| 'JP'
				| 'JE'
				| 'JO'
				| 'KZ'
				| 'KE'
				| 'KI'
				| 'KP'
				| 'KR'
				| 'XK'
				| 'KW'
				| 'KG'
				| 'LA'
				| 'LV'
				| 'LB'
				| 'LS'
				| 'LR'
				| 'LY'
				| 'LI'
				| 'LT'
				| 'LU'
				| 'MO'
				| 'MK'
				| 'MG'
				| 'MW'
				| 'MY'
				| 'MV'
				| 'ML'
				| 'MT'
				| 'MH'
				| 'MQ'
				| 'MR'
				| 'MU'
				| 'YT'
				| 'MX'
				| 'FM'
				| 'MD'
				| 'MC'
				| 'MN'
				| 'ME'
				| 'MS'
				| 'MA'
				| 'MZ'
				| 'MM'
				| 'NA'
				| 'NR'
				| 'NP'
				| 'NL'
				| 'AN'
				| 'NC'
				| 'NZ'
				| 'NI'
				| 'NE'
				| 'NG'
				| 'NU'
				| 'NF'
				| 'MP'
				| 'NO'
				| 'OM'
				| 'PK'
				| 'PW'
				| 'PS'
				| 'PA'
				| 'PG'
				| 'PY'
				| 'PE'
				| 'PH'
				| 'PN'
				| 'PL'
				| 'PT'
				| 'PR'
				| 'QA'
				| 'RE'
				| 'RO'
				| 'RU'
				| 'RW'
				| 'SH'
				| 'KN'
				| 'LC'
				| 'MF'
				| 'PM'
				| 'VC'
				| 'WS'
				| 'SM'
				| 'ST'
				| 'SA'
				| 'SN'
				| 'RS'
				| 'SC'
				| 'SL'
				| 'SG'
				| 'SX'
				| 'SK'
				| 'SI'
				| 'SB'
				| 'SO'
				| 'ZA'
				| 'GS'
				| 'ES'
				| 'LK'
				| 'SD'
				| 'SR'
				| 'SJ'
				| 'SZ'
				| 'SE'
				| 'CH'
				| 'SY'
				| 'TW'
				| 'TJ'
				| 'TZ'
				| 'TH'
				| 'TL'
				| 'TG'
				| 'TK'
				| 'TO'
				| 'TT'
				| 'TN'
				| 'TR'
				| 'TM'
				| 'TC'
				| 'TV'
				| 'UG'
				| 'GB'
				| 'UA'
				| 'AE'
				| 'US'
				| 'UM'
				| 'UY'
				| 'UZ'
				| 'VU'
				| 'VE'
				| 'VN'
				| 'VG'
				| 'VI'
				| 'WF'
				| 'EH'
				| 'YE'
				| 'ZM'
				| 'ZW'
			/** @example test.msgsndr.com */
			domain?: string
			/**
			 * @description The email for the sub-account/location
			 * @example john.doe@mail.com
			 */
			email?: string
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
			 * @description The postal code of the business for which sub-account is created
			 * @example 567654
			 */
			postalCode?: string
			/** @description The default settings for location */
			settings?: components['schemas']['SettingsSchema']
			/** @description The social media links for location */
			social?: components['schemas']['SocialSchema']
			/**
			 * @description The state in which the business operates for which sub-account is created
			 * @example Illinois
			 */
			state?: string
			/**
			 * @description The timezone of the business for which sub-account is created
			 * @example US/Central
			 */
			timezone?: string
			/**
			 * @description The website of the business for which sub-account is created
			 * @example https://yourwebsite.com
			 */
			website?: string
		}
		CustomFieldDeleteSuccessfulResponseDto: {
			/** @example true */
			succeded?: boolean
		}
		CustomFieldSchema: {
			/** @example TEXT */
			dataType?: string
			/** @example contact.pincode */
			fieldKey?: string
			/** @example 3sv6UEo51C9Bmpo1cKTq */
			id?: string
			/** @example false */
			isAllowedCustomOption?: boolean
			/** @example true */
			isMultiFileAllowed?: boolean
			/** @example 3sv6UEo51C9Bmpo1cKTq */
			locationId?: string
			/** @example 4 */
			maxFileLimit?: number
			/**
			 * @description Model of the custom field
			 * @example opportunity
			 * @enum {string}
			 */
			model?: 'contact' | 'opportunity'
			/** @example pincode */
			name?: string
			/** @example [] */
			picklistImageOptions?: string[]
			/** @example [
			 *       "first option"
			 *     ] */
			picklistOptions?: string[]
			/** @example Pin code */
			placeholder?: string
			/** @example 0 */
			position?: number
		}
		CustomFieldsListSuccessfulResponseDto: {
			customFields?: components['schemas']['CustomFieldSchema'][]
		}
		CustomFieldSuccessfulResponseDto: {
			customField?: components['schemas']['CustomFieldSchema']
		}
		CustomValueDeleteSuccessfulResponseDto: {
			/** @example true */
			succeded?: boolean
		}
		CustomValueIdSuccessfulResponseDto: {
			customValue?: components['schemas']['CustomValueSchema']
		}
		CustomValueSchema: {
			/** @example {{ custom_values.custom_field }} */
			fieldKey?: string
			/** @example rWQ709Pb62syqGLceg1x */
			id?: string
			/** @example rWQ709Pb6dasyqGLceg1x */
			locationId?: string
			/** @example Custom Field */
			name?: string
			/** @example Value */
			value?: string
		}
		customValuesDTO: {
			/** @example Custom Field Name */
			name: string
			/** @example Value */
			value: string
		}
		CustomValuesListSuccessfulResponseDto: {
			customValues?: components['schemas']['CustomValueSchema'][]
		}
		EmailTemplateSchema: {
			/** @example [] */
			attachments?: unknown[][]
			/** @example <html><head><style>body{font-family: sans-serif;}</style></head><body>testing</body></html> */
			html?: string
			/** @example subject text */
			subject?: string
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
			/**
			 * @description Uploaded files
			 * @example {
			 *       "FileName.csv": "https://highlevel-private-staging.storage.googleapis.com/location/Ar4JQgIyuzRsVuwD9RSK/custom-Field/UpZLmohmKEQYn0ymqplY/56e0d7fc-085c-4a07-9e1d-6d8fdac7e710.csv"
			 *     }
			 */
			uploadedFiles?: Record<string, never>
		}
		GetEmailTemplateResponseSchema: {
			/** @example 2022-01-27T12:31:19.679Z */
			dateAdded?: string
			/** @example 2yMwhgTNO19bpintqrap */
			id?: string
			/** @example ve9EPM428h8vShlRW1KT */
			locationId?: string
			/** @example email template */
			name?: string
			template?: components['schemas']['EmailTemplateSchema']
			/** @example email */
			type?: string
		}
		GetLocationByIdSchema: {
			/** @example ganthi nagar, gyanbabu chauk motihati */
			address?: string
			business?: components['schemas']['BusinessSchema']
			/** @example motihari */
			city?: string
			/** @example 5DP4iH6HLkQsiKESj6rh */
			companyId?: string
			/** @example IN */
			country?: string
			/** @example test.msgsndr.com */
			domain?: string
			/** @example rane@due.com */
			email?: string
			/** @example Dr. Rane */
			firstName?: string
			/** @example ve9EPM428h8vShlRW1KT */
			id?: string
			/** @example deo */
			lastName?: string
			/** @example https://dummyimage.com/o/locationPhotos%2Fve9EPM428h8vShlRW1KT.jpeg */
			logoUrl?: string
			/** @example dentist */
			name?: string
			/** @example +919039160788 */
			phone?: string
			/** @example 567654 */
			postalCode?: string
			reseller?: Record<string, never>
			settings?: components['schemas']['SettingsSchema']
			social?: components['schemas']['SocialSchema']
			/** @example Loca */
			state?: string
			/** @example America/Chicago */
			timezone?: string
			/** @example https://gohighlevel.com/ */
			website?: string
		}
		GetLocationByIdSuccessfulResponseDto: {
			location?: components['schemas']['GetLocationByIdSchema']
		}
		GetLocationSchema: {
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
			 * @description The country in which the business is present for which sub-account is created
			 * @example US
			 */
			country?: string
			/**
			 * @description The email for the sub-account/location
			 * @example john.doe@mail.com
			 */
			email?: string
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
			 * @description The postal code of the business for which sub-account is created
			 * @example 567654
			 */
			postalCode?: string
			/** @description The default settings for location */
			settings?: components['schemas']['SettingsSchema']
			/** @description The social media links for location */
			social?: components['schemas']['SocialSchema']
			/**
			 * @description The state in which the business operates for which sub-account is created
			 * @example Illinois
			 */
			state?: string
			/**
			 * @description The timezone of the business for which sub-account is created
			 * @example US/Central
			 */
			timezone?: string
			/**
			 * @description The website of the business for which sub-account is created
			 * @example https://yourwebsite.com
			 */
			website?: string
		}
		GetSmsTemplateResponseSchema: {
			/** @example 2022-01-27T12:31:19.679Z */
			dateAdded?: string
			/** @example 2yMwhgTNO19bpintqrap */
			id?: string
			/** @example ve9EPM428h8vShlRW1KT */
			locationId?: string
			/** @example sms template */
			name?: string
			template?: components['schemas']['SmsTemplateSchema']
			/** @example sms */
			type?: string
			/** @example [] */
			urlAttachments?: string[]
		}
		GetTemplatesSuccessfulResponseDto: {
			templates?: (
				| components['schemas']['GetSmsTemplateResponseSchema']
				| components['schemas']['GetEmailTemplateResponseSchema']
			)[]
			/** @example 100 */
			totalCount?: number
		}
		LocationDeletedSuccessfulResponseDto: {
			/**
			 * @description Success message of the API
			 * @example Deleted location with id: ve9EPM428h8vShlRW1KT
			 */
			message: string
			/**
			 * @description Success status of the API
			 * @example true
			 */
			success: boolean
		}
		LocationTagDeleteSuccessfulResponseDto: {
			/** @example true */
			succeded?: boolean
		}
		LocationTagsSchema: {
			/** @example flGwEuzsfJOia1i1ikRN */
			id?: string
			/** @example ve9EPM428h8vShlRW1KT */
			locationId?: string
			/** @example minim aliquip anim */
			name?: string
		}
		LocationTagsSuccessfulResponseDto: {
			tags?: components['schemas']['LocationTagsSchema'][]
		}
		LocationTagSuccessfulResponseDto: {
			tag?: components['schemas']['LocationTagsSchema']
		}
		LocationTaskListSuccessfulResponseDto: {
			tasks?: unknown[][]
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
		ProspectInfoDto: {
			/**
			 * @description Email of the prospect
			 * @example john.doe@mail.com
			 */
			email: string
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
		}
		SearchSuccessfulResponseDto: {
			locations?: components['schemas']['GetLocationSchema'][]
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
		SmsTemplateSchema: {
			/** @example [] */
			attachments?: unknown[][]
			/** @example sms body */
			body?: string
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
		SocialSchema: {
			/**
			 * @description Instagram URL
			 * @example https://www.blogRss.com/
			 */
			blogRss?: string
			/**
			 * @description Facebook URL
			 * @example https://www.facebook.com/
			 */
			facebookUrl?: string
			/**
			 * @description Foursquare URL
			 * @example https://www.foursquare.com/
			 */
			foursquare?: string
			/**
			 * @description Google Business Places ID
			 * @example ChIJJGPdVbQTrjsRGUkefteUeFk
			 */
			googlePlacesId?: string
			/**
			 * @description Googleplus URL
			 * @example https://www.googleplus.com/
			 */
			googlePlus?: string
			/**
			 * @description Instagram URL
			 * @example https://www.instagram.com/
			 */
			instagram?: string
			/**
			 * @description LinkedIn URL
			 * @example https://www.linkedIn.com/
			 */
			linkedIn?: string
			/**
			 * @description Instagram URL
			 * @example https://www.pinterest.com/
			 */
			pinterest?: string
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
			 * @example https://www.youtube.com/
			 */
			youtube?: string
		}
		tagBody: {
			/**
			 * @description Tag name
			 * @example Tag
			 */
			name: string
		}
		TaskSearchParamsDto: {
			/**
			 * @description Assigned User Ids
			 * @example [
			 *       "0004Mtfsd11SBU1mBPgd"
			 *     ]
			 */
			assignedTo?: string[]
			/**
			 * @description Bussiness Id
			 * @example 6348240b98722079e5417332
			 */
			businessId?: string
			/**
			 * @description Task Completed Or Pending
			 * @example true
			 */
			completed?: boolean
			/**
			 * @description Contact Ids
			 * @example [
			 *       "dSMo5jnqkJyh8YeGXM7k",
			 *       "j5WESpmRj816VtyUuWwh"
			 *     ]
			 */
			contactId?: string[]
			/**
			 * @description Limit To Api
			 * @default 25
			 * @example 10
			 */
			limit: number
			/**
			 * @description Search Value
			 * @example Task Name
			 */
			query?: string
			/**
			 * @description Number Of Tasks To Skip
			 * @default 0
			 * @example 10
			 */
			skip: number
		}
		textBoxListOptionsSchema: {
			/** @example First */
			label?: string
			/** @example  */
			prefillValue?: string
		}
		TwilioSchema: {
			/**
			 * @description Auth token provided by Twilio
			 * @example 77_XXXXXXXXXXX
			 */
			authToken: string
			/**
			 * @description SID provided by Twilio
			 * @example AC_XXXXXXXXXXX
			 */
			sid: string
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
		UpdateCustomFieldsDTO: {
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
			/**
			 * @description Model of the custom field you want to update
			 * @example opportunity
			 * @enum {string}
			 */
			model?: 'contact' | 'opportunity'
			/** @example Custom Field */
			name: string
			/** @example Placeholder Text */
			placeholder?: string
			/**
			 * @default 0
			 * @example 0
			 */
			position: number
			textBoxListOptions?: (
				| components['schemas']['textBoxListOptionsSchema']
				| components['schemas']['textBoxListOptionsSchema']
			)[]
		}
		UpdateLocationDto: {
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
			 * @description Company/Agency Id
			 * @example UAXssdawIWAWD
			 */
			companyId: string
			/**
			 * @description The country in which the business is present for which sub-account is created
			 * @example US
			 * @enum {string}
			 */
			country?:
				| 'AF'
				| 'AX'
				| 'AL'
				| 'DZ'
				| 'AS'
				| 'AD'
				| 'AO'
				| 'AI'
				| 'AQ'
				| 'AG'
				| 'AR'
				| 'AM'
				| 'AW'
				| 'AU'
				| 'AT'
				| 'AZ'
				| 'BS'
				| 'BH'
				| 'BD'
				| 'BB'
				| 'BY'
				| 'BE'
				| 'BZ'
				| 'BJ'
				| 'BM'
				| 'BT'
				| 'BO'
				| 'BA'
				| 'BW'
				| 'BV'
				| 'BR'
				| 'IO'
				| 'BN'
				| 'BG'
				| 'BF'
				| 'BI'
				| 'KH'
				| 'CM'
				| 'CA'
				| 'CV'
				| 'KY'
				| 'CF'
				| 'TD'
				| 'CL'
				| 'CN'
				| 'CX'
				| 'CC'
				| 'CO'
				| 'KM'
				| 'CG'
				| 'CD'
				| 'CK'
				| 'CR'
				| 'CI'
				| 'HR'
				| 'CU'
				| 'CY'
				| 'CZ'
				| 'DK'
				| 'DJ'
				| 'DM'
				| 'DO'
				| 'EC'
				| 'EG'
				| 'SV'
				| 'GQ'
				| 'ER'
				| 'EE'
				| 'ET'
				| 'FK'
				| 'FO'
				| 'FJ'
				| 'FI'
				| 'FR'
				| 'GF'
				| 'PF'
				| 'TF'
				| 'GA'
				| 'GM'
				| 'GE'
				| 'DE'
				| 'GH'
				| 'GI'
				| 'GR'
				| 'GL'
				| 'GD'
				| 'GP'
				| 'GU'
				| 'GT'
				| 'GG'
				| 'GN'
				| 'GW'
				| 'GY'
				| 'HT'
				| 'HM'
				| 'VA'
				| 'HN'
				| 'HK'
				| 'HU'
				| 'IS'
				| 'IN'
				| 'ID'
				| 'IR'
				| 'IQ'
				| 'IE'
				| 'IM'
				| 'IL'
				| 'IT'
				| 'JM'
				| 'JP'
				| 'JE'
				| 'JO'
				| 'KZ'
				| 'KE'
				| 'KI'
				| 'KP'
				| 'KR'
				| 'XK'
				| 'KW'
				| 'KG'
				| 'LA'
				| 'LV'
				| 'LB'
				| 'LS'
				| 'LR'
				| 'LY'
				| 'LI'
				| 'LT'
				| 'LU'
				| 'MO'
				| 'MK'
				| 'MG'
				| 'MW'
				| 'MY'
				| 'MV'
				| 'ML'
				| 'MT'
				| 'MH'
				| 'MQ'
				| 'MR'
				| 'MU'
				| 'YT'
				| 'MX'
				| 'FM'
				| 'MD'
				| 'MC'
				| 'MN'
				| 'ME'
				| 'MS'
				| 'MA'
				| 'MZ'
				| 'MM'
				| 'NA'
				| 'NR'
				| 'NP'
				| 'NL'
				| 'AN'
				| 'NC'
				| 'NZ'
				| 'NI'
				| 'NE'
				| 'NG'
				| 'NU'
				| 'NF'
				| 'MP'
				| 'NO'
				| 'OM'
				| 'PK'
				| 'PW'
				| 'PS'
				| 'PA'
				| 'PG'
				| 'PY'
				| 'PE'
				| 'PH'
				| 'PN'
				| 'PL'
				| 'PT'
				| 'PR'
				| 'QA'
				| 'RE'
				| 'RO'
				| 'RU'
				| 'RW'
				| 'SH'
				| 'KN'
				| 'LC'
				| 'MF'
				| 'PM'
				| 'VC'
				| 'WS'
				| 'SM'
				| 'ST'
				| 'SA'
				| 'SN'
				| 'RS'
				| 'SC'
				| 'SL'
				| 'SG'
				| 'SX'
				| 'SK'
				| 'SI'
				| 'SB'
				| 'SO'
				| 'ZA'
				| 'GS'
				| 'ES'
				| 'LK'
				| 'SD'
				| 'SR'
				| 'SJ'
				| 'SZ'
				| 'SE'
				| 'CH'
				| 'SY'
				| 'TW'
				| 'TJ'
				| 'TZ'
				| 'TH'
				| 'TL'
				| 'TG'
				| 'TK'
				| 'TO'
				| 'TT'
				| 'TN'
				| 'TR'
				| 'TM'
				| 'TC'
				| 'TV'
				| 'UG'
				| 'GB'
				| 'UA'
				| 'AE'
				| 'US'
				| 'UM'
				| 'UY'
				| 'UZ'
				| 'VU'
				| 'VE'
				| 'VN'
				| 'VG'
				| 'VI'
				| 'WF'
				| 'EH'
				| 'YE'
				| 'ZM'
				| 'ZW'
			/** @description The mailgun credentials for location */
			mailgun?: components['schemas']['MailgunSchema']
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
			 * @description The postal code of the business for which sub-account is created
			 * @example 567654
			 */
			postalCode?: string
			/** @example {
			 *       "firstName": "John",
			 *       "lastName": "Doe",
			 *       "email": "john.doe@mail.com"
			 *     } */
			prospectInfo?: components['schemas']['ProspectInfoDto']
			/** @description The default settings for location */
			settings?: components['schemas']['SettingsSchema']
			/** @description The snapshot to be updated in the location. */
			snapshot?: components['schemas']['SnapshotPutSchema']
			/** @description The social media links for location */
			social?: components['schemas']['SocialSchema']
			/**
			 * @description The state in which the business operates for which sub-account is created
			 * @example Illinois
			 */
			state?: string
			/**
			 * @description The timezone of the business for which sub-account is created
			 * @example US/Central
			 */
			timezone?: string
			/** @description The twilio credentials for location */
			twilio?: components['schemas']['TwilioSchema']
			/**
			 * @description The website of the business for which sub-account is created
			 * @example https://yourwebsite.com
			 */
			website?: string
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
	'create-location': {
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
	'get-location': {
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
	'get-custom-fields': {
		parameters: {
			query?: {
				/**
				 * @description Model of the custom field you want to retrieve
				 * @example opportunity
				 */
				model?: 'contact' | 'opportunity' | 'all'
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
				Version: '2021-07-28'
			}
			path: {
				/**
				 * @description Custom Field Id
				 * @example 00NhGCcN1tlO8ZHcu7Wb
				 */
				id: string
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
				Version: '2021-07-28'
			}
			path: {
				/**
				 * @description Custom Field Id
				 * @example 00NhGCcN1tlO8ZHcu7Wb
				 */
				id: string
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
				Version: '2021-07-28'
			}
			path: {
				/**
				 * @description Custom Field Id
				 * @example 00NhGCcN1tlO8ZHcu7Wb
				 */
				id: string
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
				Version: '2021-07-28'
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
				Version: '2021-07-28'
			}
			path: {
				/**
				 * @description Custom Value Id
				 * @example kOBjMVAJhFuUeYIojVet
				 */
				id: string
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
				Version: '2021-07-28'
			}
			path: {
				/**
				 * @description Custom Value Id
				 * @example kOBjMVAJhFuUeYIojVet
				 */
				id: string
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
				Version: '2021-07-28'
			}
			path: {
				/**
				 * @description Custom Value Id
				 * @example kOBjMVAJhFuUeYIojVet
				 */
				id: string
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
	'get-location-tags': {
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
				Version: '2021-07-28'
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
				Version: '2021-07-28'
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
				Version: '2021-07-28'
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
	'GET-all-or-email-sms-templates': {
		parameters: {
			query: {
				/** @example false */
				deleted?: boolean
				/** @example 25 */
				limit?: string
				/**
				 * @description Origin Id
				 * @example ve9EPM428h8vShlRW1KT
				 */
				originId: string
				/** @example 1 */
				skip?: string
				type?: 'sms' | 'email' | 'whatsapp'
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
				Version: '2021-07-28'
			}
			path: {
				/**
				 * @description Template Id
				 * @example ve9EPM428h8vShlRW1KT
				 */
				id: string
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
	'get-timezones': {
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
	'search-locations': {
		parameters: {
			query?: {
				/**
				 * @description The company/agency id on which you want to perform the search
				 * @example 5DP4iH6HLkQsiKESj6rh
				 */
				companyId?: string
				/** @example johndoe@mail.com */
				email?: string
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
				/**
				 * @description The value by which the results should be skipped. Default will be 0
				 * @example 1
				 */
				skip?: string
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
}
