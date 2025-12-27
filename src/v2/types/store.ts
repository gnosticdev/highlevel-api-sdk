export interface paths {
	'/store/shipping-carrier': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * List Shipping Carriers
		 * @description The "List Shipping Carrier" API allows to retrieve a list of shipping carrier.
		 */
		get: operations['list-shipping-carriers']
		put?: never
		/**
		 * Create Shipping Carrier
		 * @description The "Create Shipping Carrier" API allows adding a new shipping carrier.
		 */
		post: operations['create-shipping-carrier']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/store/shipping-carrier/{shippingCarrierId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get Shipping Carrier
		 * @description The "List Shipping Carrier" API allows to retrieve a paginated list of shipping carrier.
		 */
		get: operations['get-shipping-carriers']
		/**
		 * Update Shipping Carrier
		 * @description The "update Shipping Carrier" API allows update a shipping carrier to the system.
		 */
		put: operations['update-shipping-carrier']
		post?: never
		/**
		 * Delete shipping carrier
		 * @description Delete specific shipping carrier with Id :shippingCarrierId
		 */
		delete: operations['delete-shipping-carrier']
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/store/shipping-zone': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * List Shipping Zones
		 * @description The "List Shipping Zone" API allows to retrieve a list of shipping zone.
		 */
		get: operations['list-shipping-zones']
		put?: never
		/**
		 * Create Shipping Zone
		 * @description The "Create Shipping Zone" API allows adding a new shipping zone.
		 */
		post: operations['create-shipping-zone']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/store/shipping-zone/{shippingZoneId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get Shipping Zone
		 * @description The "List Shipping Zone" API allows to retrieve a paginated list of shipping zone.
		 */
		get: operations['get-shipping-zones']
		/**
		 * Update Shipping Zone
		 * @description The "update Shipping Zone" API allows update a shipping zone to the system.
		 */
		put: operations['update-shipping-zone']
		post?: never
		/**
		 * Delete shipping zone
		 * @description Delete specific shipping zone with Id :shippingZoneId
		 */
		delete: operations['delete-shipping-zone']
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/store/shipping-zone/{shippingZoneId}/shipping-rate': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * List Shipping Rates
		 * @description The "List Shipping Rate" API allows to retrieve a list of shipping rate.
		 */
		get: operations['list-shipping-rates']
		put?: never
		/**
		 * Create Shipping Rate
		 * @description The "Create Shipping Rate" API allows adding a new shipping rate.
		 */
		post: operations['create-shipping-rate']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/store/shipping-zone/{shippingZoneId}/shipping-rate/{shippingRateId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get Shipping Rate
		 * @description The "List Shipping Rate" API allows to retrieve a paginated list of shipping rate.
		 */
		get: operations['get-shipping-rates']
		/**
		 * Update Shipping Rate
		 * @description The "update Shipping Rate" API allows update a shipping rate to the system.
		 */
		put: operations['update-shipping-rate']
		post?: never
		/**
		 * Delete shipping rate
		 * @description Delete specific shipping rate with Id :shippingRateId
		 */
		delete: operations['delete-shipping-rate']
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/store/shipping-zone/shipping-rates': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Get available shipping rates
		 * @description This return available shipping rates for country based on order amount
		 */
		post: operations['get-available-shipping-zones']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/store/store-setting': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get Store Settings
		 * @description Get store settings by altId and altType.
		 */
		get: operations['get-store-settings']
		put?: never
		/**
		 * Create/Update Store Settings
		 * @description Create or update store settings by altId and altType.
		 */
		post: operations['create-store-setting']
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
		AvailableShippingRate: {
			/**
			 * @description The unique identifier for the product.
			 * @example 655b33a82209e60b6adb87a5
			 */
			_id: string
			/**
			 * @description The amount of the shipping rate if it is normal rate (0 means free ). Fixed Handling fee if it is a carrier rate (it will add to the carrier rate).
			 * @example 99.99
			 */
			amount: number
			/**
			 * @description The currency of the amount of the rate / handling fee
			 * @example USD
			 */
			currency: string
			/**
			 * @description Delivery description
			 * @example Ships next day
			 */
			description?: string
			/**
			 * @description is this a carrier rate
			 * @example true
			 */
			isCarrierRate?: boolean
			/**
			 * @description Name of the shipping zone
			 * @example North zone
			 */
			name: string
			/**
			 * @description Percentage of rate fee if it is a carrier rate.
			 * @example 10.99
			 */
			percentageOfRateFee?: number
			/**
			 * @description Shipping carrier id
			 * @example 655b33a82209e60b6adb87a5
			 */
			shippingCarrierId: string
			/** @description An array of items */
			shippingCarrierServices?: components['schemas']['ShippingCarrierServiceDto'][]
			/**
			 * @description The unique identifier for the shipping zone.
			 * @example 655b33a82209e60b6adb87a5
			 */
			shippingZoneId: string
		}
		BadRequestDTO: {
			/** @example Bad Request */
			message?: string
			/** @example 400 */
			statusCode?: number
		}
		ContactAddress: {
			/**
			 * @description Address line 1 of the customer
			 * @example 123 Main St.
			 */
			addressLine1?: string
			/**
			 * @description City of the customer
			 * @example New York
			 */
			city?: string
			/**
			 * @description Name of the Company
			 * @example ABC Company
			 */
			companyName?: string
			/**
			 * @description Country code of the customer
			 * @example US
			 * @enum {string}
			 */
			country:
				| 'US'
				| 'CA'
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
				| 'KR'
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
				| 'UA'
				| 'AE'
				| 'GB'
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
			/**
			 * @description Email of the customer
			 * @example abu@example.com
			 */
			email?: string
			/**
			 * @description Name of the customer
			 * @example John Doe
			 */
			name?: string
			/**
			 * @description Phone number of the customer
			 * @example 1234567890
			 */
			phone?: string
			/**
			 * @description State code of the customer
			 * @example US
			 * @enum {string}
			 */
			state?:
				| 'AL'
				| 'AK'
				| 'AS'
				| 'AZ'
				| 'AR'
				| 'AA'
				| 'AE'
				| 'AP'
				| 'CA'
				| 'CO'
				| 'CT'
				| 'DE'
				| 'DC'
				| 'FM'
				| 'FL'
				| 'GA'
				| 'GU'
				| 'HI'
				| 'ID'
				| 'IL'
				| 'IN'
				| 'IA'
				| 'KS'
				| 'KY'
				| 'LA'
				| 'ME'
				| 'MH'
				| 'MD'
				| 'MA'
				| 'MI'
				| 'MN'
				| 'MS'
				| 'MO'
				| 'MT'
				| 'NE'
				| 'NV'
				| 'NH'
				| 'NJ'
				| 'NM'
				| 'NY'
				| 'NC'
				| 'ND'
				| 'MP'
				| 'OH'
				| 'OK'
				| 'OR'
				| 'PW'
				| 'PA'
				| 'PR'
				| 'RI'
				| 'SC'
				| 'SD'
				| 'TN'
				| 'TX'
				| 'UT'
				| 'VT'
				| 'VI'
				| 'VA'
				| 'WA'
				| 'WV'
				| 'WI'
				| 'WY'
				| 'AB'
				| 'BC'
				| 'MB'
				| 'NB'
				| 'NL'
				| 'NT'
				| 'NS'
				| 'NU'
				| 'ON'
				| 'PE'
				| 'QC'
				| 'SK'
				| 'YT'
				| 'BA'
				| 'CT'
				| 'CC'
				| 'CH'
				| 'CB'
				| 'CN'
				| 'ER'
				| 'FO'
				| 'JY'
				| 'LP'
				| 'LR'
				| 'MZ'
				| 'MN'
				| 'NQ'
				| 'RN'
				| 'SA'
				| 'SJ'
				| 'SL'
				| 'SC'
				| 'SF'
				| 'SE'
				| 'TF'
				| 'TU'
				| 'ACT'
				| 'NSW'
				| 'NT'
				| 'QLD'
				| 'SA'
				| 'TAS'
				| 'VIC'
				| 'WA'
				| 'AC'
				| 'AL'
				| 'AM'
				| 'AP'
				| 'BA'
				| 'CE'
				| 'DF'
				| 'ES'
				| 'GO'
				| 'MA'
				| 'MG'
				| 'MS'
				| 'MT'
				| 'PA'
				| 'PB'
				| 'PE'
				| 'PI'
				| 'PR'
				| 'RJ'
				| 'RN'
				| 'RO'
				| 'RR'
				| 'RS'
				| 'SC'
				| 'SE'
				| 'SP'
				| 'TO'
				| 'AI'
				| 'AN'
				| 'AP'
				| 'AT'
				| 'BI'
				| 'CO'
				| 'AR'
				| 'LI'
				| 'LL'
				| 'LR'
				| 'MA'
				| 'ML'
				| 'RM'
				| 'TA'
				| 'VS'
				| 'NB'
				| 'AMA'
				| 'ANT'
				| 'ARA'
				| 'ATL'
				| 'BOL'
				| 'BOY'
				| 'CAL'
				| 'CAQ'
				| 'CAS'
				| 'CAU'
				| 'CES'
				| 'CHO'
				| 'CUN'
				| 'COR'
				| 'GUA'
				| 'GUV'
				| 'HUI'
				| 'LAG'
				| 'MAG'
				| 'MET'
				| 'NAR'
				| 'NSA'
				| 'PUT'
				| 'QUI'
				| 'RIS'
				| 'SAP'
				| 'SAN'
				| 'SUC'
				| 'TOL'
				| 'VAC'
				| 'VAU'
				| 'VID'
				| 'CR-A'
				| 'CR-C'
				| 'CR-G'
				| 'CR-H'
				| 'CR-L'
				| 'CR-P'
				| 'CR-SJ'
				| 'GT-16'
				| 'GT-15'
				| 'GT-04'
				| 'GT-20'
				| 'GT-02'
				| 'GT-05'
				| 'GT-01'
				| 'GT-13'
				| 'GT-18'
				| 'GT-21'
				| 'GT-22'
				| 'GT-17'
				| 'GT-09'
				| 'GT-14'
				| 'GT-11'
				| 'GT-03'
				| 'GT-12'
				| 'GT-06'
				| 'GT-07'
				| 'GT-10'
				| 'GT-08'
				| 'GT-19'
				| 'HK'
				| 'KL'
				| 'NT'
				| 'AN'
				| 'AP'
				| 'AR'
				| 'AS'
				| 'BR'
				| 'CH'
				| 'CG'
				| 'DN'
				| 'DD'
				| 'DL'
				| 'GA'
				| 'GJ'
				| 'HR'
				| 'HP'
				| 'JK'
				| 'JH'
				| 'KA'
				| 'KL'
				| 'LA'
				| 'LD'
				| 'MP'
				| 'MH'
				| 'MN'
				| 'ML'
				| 'MZ'
				| 'NL'
				| 'OR'
				| 'PY'
				| 'PB'
				| 'RJ'
				| 'SK'
				| 'TN'
				| 'TS'
				| 'TR'
				| 'UP'
				| 'UK'
				| 'WB'
				| 'CW'
				| 'CN'
				| 'CE'
				| 'CO'
				| 'DL'
				| 'D'
				| 'G'
				| 'KY'
				| 'KE'
				| 'KK'
				| 'LS'
				| 'LM'
				| 'LK'
				| 'LD'
				| 'LH'
				| 'MO'
				| 'MH'
				| 'MN'
				| 'OY'
				| 'RN'
				| 'SO'
				| 'TA'
				| 'WD'
				| 'WH'
				| 'WX'
				| 'WW'
				| 'AG'
				| 'AL'
				| 'AN'
				| 'AO'
				| 'AR'
				| 'AP'
				| 'AT'
				| 'AV'
				| 'BA'
				| 'BT'
				| 'BL'
				| 'BN'
				| 'BG'
				| 'BI'
				| 'BO'
				| 'BZ'
				| 'BS'
				| 'BR'
				| 'CA'
				| 'CL'
				| 'CB'
				| 'CI'
				| 'CE'
				| 'CT'
				| 'CZ'
				| 'CH'
				| 'CO'
				| 'CS'
				| 'CR'
				| 'KR'
				| 'CN'
				| 'EN'
				| 'FM'
				| 'FE'
				| 'FI'
				| 'FG'
				| 'FC'
				| 'FR'
				| 'GE'
				| 'GO'
				| 'GR'
				| 'IM'
				| 'IS'
				| 'AQ'
				| 'SP'
				| 'LT'
				| 'LE'
				| 'LC'
				| 'LI'
				| 'LO'
				| 'LU'
				| 'MC'
				| 'MN'
				| 'MS'
				| 'MT'
				| 'VS'
				| 'ME'
				| 'MI'
				| 'MO'
				| 'MB'
				| 'NA'
				| 'NO'
				| 'NU'
				| 'OG'
				| 'OT'
				| 'OR'
				| 'PD'
				| 'PA'
				| 'PR'
				| 'PV'
				| 'PG'
				| 'PU'
				| 'PE'
				| 'PC'
				| 'PI'
				| 'PT'
				| 'PN'
				| 'PZ'
				| 'PO'
				| 'RG'
				| 'RA'
				| 'RC'
				| 'RE'
				| 'RI'
				| 'RN'
				| 'RM'
				| 'RO'
				| 'SA'
				| 'SS'
				| 'SV'
				| 'SI'
				| 'SR'
				| 'SO'
				| 'TA'
				| 'TE'
				| 'TR'
				| 'TO'
				| 'TP'
				| 'TN'
				| 'TV'
				| 'TS'
				| 'UD'
				| 'VA'
				| 'VE'
				| 'VB'
				| 'VC'
				| 'VR'
				| 'VV'
				| 'VI'
				| 'VT'
				| 'JP-23'
				| 'JP-05'
				| 'JP-02'
				| 'JP-12'
				| 'JP-38'
				| 'JP-18'
				| 'JP-40'
				| 'JP-07'
				| 'JP-21'
				| 'JP-10'
				| 'JP-34'
				| 'JP-01'
				| 'JP-28'
				| 'JP-08'
				| 'JP-17'
				| 'JP-03'
				| 'JP-37'
				| 'JP-46'
				| 'JP-14'
				| 'JP-39'
				| 'JP-43'
				| 'JP-26'
				| 'JP-24'
				| 'JP-04'
				| 'JP-45'
				| 'JP-20'
				| 'JP-42'
				| 'JP-29'
				| 'JP-15'
				| 'JP-44'
				| 'JP-33'
				| 'JP-47'
				| 'JP-27'
				| 'JP-41'
				| 'JP-11'
				| 'JP-25'
				| 'JP-32'
				| 'JP-22'
				| 'JP-09'
				| 'JP-36'
				| 'JP-13'
				| 'JP-31'
				| 'JP-16'
				| 'JP-30'
				| 'JP-06'
				| 'JP-35'
				| 'JP-19'
				| 'JHR'
				| 'KDH'
				| 'KTN'
				| 'KUL'
				| 'LBN'
				| 'MLK'
				| 'NSN'
				| 'PHG'
				| 'PNG'
				| 'PRK'
				| 'PLS'
				| 'PJY'
				| 'SBH'
				| 'SWK'
				| 'SGR'
				| 'TRG'
				| 'AGU'
				| 'BCN'
				| 'BCS'
				| 'CAM'
				| 'CHP'
				| 'CHH'
				| 'CMX'
				| 'COA'
				| 'COL'
				| 'DUR'
				| 'GUA'
				| 'GRO'
				| 'HID'
				| 'JAL'
				| 'MIC'
				| 'MOR'
				| 'MEX'
				| 'NAY'
				| 'NLE'
				| 'OAX'
				| 'PUE'
				| 'QUE'
				| 'ROO'
				| 'SLP'
				| 'SIN'
				| 'SON'
				| 'TAB'
				| 'TAM'
				| 'TLA'
				| 'VER'
				| 'YUC'
				| 'ZAC'
				| 'AUK'
				| 'BOP'
				| 'CAN'
				| 'CIT'
				| 'GIS'
				| 'HKB'
				| 'MWT'
				| 'MBH'
				| 'NSN'
				| 'NTL'
				| 'OTA'
				| 'STL'
				| 'TKI'
				| 'TAS'
				| 'WKO'
				| 'WGN'
				| 'WTC'
				| 'JK'
				| 'BA'
				| 'GB'
				| 'IS'
				| 'KP'
				| 'PB'
				| 'SD'
				| 'AMA'
				| 'ANC'
				| 'APU'
				| 'ARE'
				| 'AYA'
				| 'CAJ'
				| 'CAL'
				| 'CUS'
				| 'HUV'
				| 'HUC'
				| 'ICA'
				| 'JUN'
				| 'LAL'
				| 'LAM'
				| 'LIM'
				| 'LOR'
				| 'MDD'
				| 'MOQ'
				| 'PAS'
				| 'PIU'
				| 'PUN'
				| 'SAM'
				| 'TAC'
				| 'TUM'
				| 'UCA'
				| 'PH-ABR'
				| 'PH-AGN'
				| 'PH-AGS'
				| 'PH-AKL'
				| 'PH-ALB'
				| 'PH-ANT'
				| 'PH-APA'
				| 'PH-AUR'
				| 'PH-BAS'
				| 'PH-BAN'
				| 'PH-BTN'
				| 'PH-BTG'
				| 'PH-BEN'
				| 'PH-BIL'
				| 'PH-BOH'
				| 'PH-BUK'
				| 'PH-BUL'
				| 'PH-CAG'
				| 'PH-CAN'
				| 'PH-CAS'
				| 'PH-CAM'
				| 'PH-CAP'
				| 'PH-CAT'
				| 'PH-CAV'
				| 'PH-CEB'
				| 'PH-NCO'
				| 'PH-DAO'
				| 'PH-DAV'
				| 'PH-DAS'
				| 'PH-EAS'
				| 'PH-GUI'
				| 'PH-IFU'
				| 'PH-ILN'
				| 'PH-ILS'
				| 'PH-ILI'
				| 'PH-ISA'
				| 'PH-KAL'
				| 'PH-LUN'
				| 'PH-LAG'
				| 'PH-LAN'
				| 'PH-LAS'
				| 'PH-LEY'
				| 'PH-MAG'
				| 'PH-MAD'
				| 'PH-MAS'
				| 'PH-00'
				| 'PH-MSC'
				| 'PH-MSR'
				| 'PH-MOU'
				| 'PH-NEC'
				| 'PH-NER'
				| 'PH-NSA'
				| 'PH-NUE'
				| 'PH-NUV'
				| 'PH-MDC'
				| 'PH-MDR'
				| 'PH-PLW'
				| 'PH-PAM'
				| 'PH-PAN'
				| 'PH-QUE'
				| 'PH-QUI'
				| 'PH-RIZ'
				| 'PH-ROM'
				| 'PH-WSA'
				| 'PH-SAR'
				| 'PH-SIG'
				| 'PH-SOR'
				| 'PH-SCO'
				| 'PH-SLE'
				| 'PH-SUK'
				| 'PH-SLU'
				| 'PH-SUN'
				| 'PH-SUR'
				| 'PH-TAR'
				| 'PH-TAW'
				| 'PH-ZMB'
				| 'PH-ZAN'
				| 'PH-ZAS'
				| 'PH-ZSI'
				| 'PT-20'
				| 'PT-01'
				| 'PT-02'
				| 'PT-03'
				| 'PT-04'
				| 'PT-05'
				| 'PT-06'
				| 'PT-07'
				| 'PT-08'
				| 'PT-09'
				| 'PT-10'
				| 'PT-11'
				| 'PT-30'
				| 'PT-12'
				| 'PT-13'
				| 'PT-14'
				| 'PT-15'
				| 'PT-16'
				| 'PT-17'
				| 'PT-18'
				| 'AB'
				| 'AR'
				| 'AG'
				| 'BC'
				| 'BH'
				| 'BN'
				| 'BT'
				| 'BR'
				| 'BV'
				| 'B'
				| 'BZ'
				| 'CL'
				| 'CS'
				| 'CJ'
				| 'CT'
				| 'CV'
				| 'DB'
				| 'DJ'
				| 'GL'
				| 'GR'
				| 'GJ'
				| 'HR'
				| 'HD'
				| 'IL'
				| 'IS'
				| 'IF'
				| 'MM'
				| 'MH'
				| 'MS'
				| 'NT'
				| 'OT'
				| 'PH'
				| 'SJ'
				| 'SM'
				| 'SB'
				| 'SV'
				| 'TR'
				| 'TM'
				| 'TL'
				| 'VL'
				| 'VS'
				| 'VN'
				| 'KR-26'
				| 'KR-43'
				| 'KR-44'
				| 'KR-27'
				| 'KR-30'
				| 'KR-42'
				| 'KR-29'
				| 'KR-47'
				| 'KR-41'
				| 'KR-48'
				| 'KR-28'
				| 'KR-49'
				| 'KR-45'
				| 'KR-46'
				| 'KR-50'
				| 'KR-11'
				| 'KR-31'
				| 'C'
				| 'VI'
				| 'AB'
				| 'A'
				| 'AL'
				| 'O'
				| 'AV'
				| 'BA'
				| 'PM'
				| 'B'
				| 'BU'
				| 'CC'
				| 'CA'
				| 'S'
				| 'CS'
				| 'CE'
				| 'CR'
				| 'CO'
				| 'CU'
				| 'GI'
				| 'GR'
				| 'GU'
				| 'SS'
				| 'H'
				| 'HU'
				| 'J'
				| 'LO'
				| 'GC'
				| 'LE'
				| 'L'
				| 'LU'
				| 'M'
				| 'MA'
				| 'ML'
				| 'MU'
				| 'NA'
				| 'OR'
				| 'P'
				| 'PO'
				| 'SA'
				| 'TF'
				| 'SG'
				| 'SE'
				| 'SO'
				| 'T'
				| 'TE'
				| 'TO'
				| 'V'
				| 'VA'
				| 'BI'
				| 'ZA'
				| 'Z'
				| 'AZ'
				| 'AJ'
				| 'DU'
				| 'FU'
				| 'RK'
				| 'SH'
				| 'UQ'
				| 'BFP'
				| 'ENG'
				| 'NIR'
				| 'SCT'
				| 'WLS'
				| 'AR'
				| 'CA'
				| 'CL'
				| 'CO'
				| 'DU'
				| 'FS'
				| 'FD'
				| 'LA'
				| 'MA'
				| 'MO'
				| 'PA'
				| 'RN'
				| 'RV'
				| 'RO'
				| 'SA'
				| 'SJ'
				| 'SO'
				| 'TA'
				| 'TT'
			/**
			 * @description Zip code of the customer
			 * @example 12345
			 */
			zip?: string
		}
		CreateShippingCarrierDto: {
			/**
			 * @description The seller can choose multiple services while creating shipping rates if this is true.
			 * @example true
			 */
			allowsMultipleServiceSelection?: boolean
			/**
			 * @description Location Id or Agency Id
			 * @example 6578278e879ad2646715ba9c
			 */
			altId: string
			/** @enum {string} */
			altType: 'location'
			/**
			 * @description The URL endpoint that GHL needs to retrieve shipping rates. This must be a public URL.
			 * @example https://example.com/get-shipping-rates
			 */
			callbackUrl: string
			/**
			 * @description Name of the shipping carrier
			 * @example FedEx
			 */
			name: string
			/** @description An array of available shipping carrier services */
			services?: components['schemas']['ShippingCarrierServiceDto'][]
		}
		CreateShippingCarrierResponseDto: {
			/** @description Shipping carrier data */
			data: components['schemas']['ShippingCarrierSchema']
			/**
			 * @description Success message
			 * @example Successfully created
			 */
			message?: string
			/**
			 * @description Status of api action
			 * @example true
			 */
			status: boolean
		}
		CreateShippingRateDto: {
			/**
			 * @description Location Id or Agency Id
			 * @example 6578278e879ad2646715ba9c
			 */
			altId: string
			/** @enum {string} */
			altType: 'location'
			/**
			 * @description The amount of the shipping rate if it is normal rate (0 means free ). Fixed Handling fee if it is a carrier rate (it will add to the carrier rate).
			 * @example 99.99
			 */
			amount: number
			/**
			 * @description Type of condition to provide the conditional pricing
			 * @example price
			 * @enum {string}
			 */
			conditionType: 'none' | 'price' | 'weight'
			/**
			 * @description The currency of the amount of the rate / handling fee
			 * @example USD
			 */
			currency: string
			/**
			 * @description Delivery description
			 * @example Ships next day
			 */
			description?: string
			/**
			 * @description is this a carrier rate
			 * @example true
			 */
			isCarrierRate?: boolean
			/**
			 * @description Maximum condition for applying this price. set 0 or null if there is no maximum
			 * @example 99.99
			 */
			maxCondition: number
			/**
			 * @description Minimum condition for applying this price. set 0 or null if there is no minimum
			 * @example 99.99
			 */
			minCondition: number
			/**
			 * @description Name of the shipping zone
			 * @example North zone
			 */
			name: string
			/**
			 * @description Percentage of rate fee if it is a carrier rate.
			 * @example 10.99
			 */
			percentageOfRateFee?: number
			/**
			 * @description Shipping carrier id
			 * @example 655b33a82209e60b6adb87a5
			 */
			shippingCarrierId: string
			/** @description An array of items */
			shippingCarrierServices?: components['schemas']['ShippingCarrierServiceDto'][]
		}
		CreateShippingRateResponseDto: {
			/** @description Shipping zone data */
			data: components['schemas']['ShippingRateSchema']
			/**
			 * @description Success message
			 * @example Successfully created
			 */
			message?: string
			/**
			 * @description Status of api action
			 * @example true
			 */
			status: boolean
		}
		CreateShippingZoneDto: {
			/**
			 * @description Location Id or Agency Id
			 * @example 6578278e879ad2646715ba9c
			 */
			altId: string
			/** @enum {string} */
			altType: 'location'
			/** @description List of countries that are available */
			countries: components['schemas']['ShippingZoneCountryDto'][]
			/**
			 * @description Name of the shipping zone
			 * @example North zone
			 */
			name: string
		}
		CreateShippingZoneResponseDto: {
			/** @description Shipping zone data */
			data: components['schemas']['ShippingZoneSchema']
			/**
			 * @description Success message
			 * @example Successfully created
			 */
			message?: string
			/**
			 * @description Status of api action
			 * @example true
			 */
			status: boolean
		}
		CreateStoreSettingDto: {
			/**
			 * @description Location Id or Agency Id
			 * @example 6578278e879ad2646715ba9c
			 */
			altId: string
			/** @enum {string} */
			altType: 'location'
			/** @description Shipping origin address */
			shippingOrigin: components['schemas']['StoreShippingOriginDto']
			/** @description Store order fulfillment notification email */
			storeOrderFulfillmentNotification?: components['schemas']['StoreOrderFulfillmentNotificationDto']
			/** @description Store order notification email */
			storeOrderNotification?: components['schemas']['StoreOrderNotificationDto']
		}
		CreateStoreSettingResponseDto: {
			/** @description Shipping carrier data */
			data: components['schemas']['StoreSettingSchema']
			/**
			 * @description Success message
			 * @example Successfully created
			 */
			message?: string
			/**
			 * @description Status of api action
			 * @example true
			 */
			status: boolean
		}
		DeleteShippingCarrierResponseDto: {
			/**
			 * @description Success message
			 * @example Successfully created
			 */
			message?: string
			/**
			 * @description Status of api action
			 * @example true
			 */
			status: boolean
		}
		DeleteShippingRateResponseDto: {
			/**
			 * @description Success message
			 * @example Successfully created
			 */
			message?: string
			/**
			 * @description Status of api action
			 * @example true
			 */
			status: boolean
		}
		DeleteShippingZoneResponseDto: {
			/**
			 * @description Success message
			 * @example Successfully created
			 */
			message?: string
			/**
			 * @description Status of api action
			 * @example true
			 */
			status: boolean
		}
		GetAvailableShippingRates: {
			/** @description Address of the customer */
			address?: components['schemas']['ContactAddress']
			/**
			 * @description Location Id or Agency Id
			 * @example 6578278e879ad2646715ba9c
			 */
			altId: string
			/** @enum {string} */
			altType: 'location'
			/**
			 * @description it will not calculate the order amount form backend if it is true
			 * @example US
			 * @enum {string}
			 */
			amountAvailable?:
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
			/**
			 * @description Country code of the customer
			 * @example US
			 * @enum {string}
			 */
			country:
				| 'US'
				| 'CA'
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
				| 'KR'
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
				| 'UA'
				| 'AE'
				| 'GB'
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
			/**
			 * @description Coupon code
			 * @example TEST
			 */
			couponCode?: string
			/** @description An array of price IDs and quantity */
			products: components['schemas']['ProductItem'][]
			/**
			 * @description Source of the order
			 * @example {
			 *       "type": "order",
			 *       "subType": "store"
			 *     }
			 */
			source: components['schemas']['OrderSource']
			/**
			 * @description The amount of the price. ( min: 0.01 )
			 * @example 99.99
			 */
			totalOrderAmount: number
			/**
			 * @description Estimated weight of the order calculated from the order creation side in kg(s)
			 * @example 10
			 */
			totalOrderWeight: number
			/**
			 * @description Flag to pass when the weight is already calculated and should not calculate again
			 * @example true
			 */
			weightAvailable?: boolean
		}
		GetAvailableShippingRatesResponseDto: {
			/** @description Shipping rate data */
			data: components['schemas']['AvailableShippingRate'][]
			/**
			 * @description Success message
			 * @example Successfully created
			 */
			message?: string
			/**
			 * @description Status of api action
			 * @example true
			 */
			status: boolean
		}
		GetShippingCarrierResponseDto: {
			/** @description Shipping carrier data */
			data: components['schemas']['ShippingCarrierSchema']
			/**
			 * @description Success message
			 * @example Successfully created
			 */
			message?: string
			/**
			 * @description Status of api action
			 * @example true
			 */
			status: boolean
		}
		GetShippingRateResponseDto: {
			/** @description Shipping zone data */
			data: components['schemas']['ShippingRateSchema']
			/**
			 * @description Success message
			 * @example Successfully created
			 */
			message?: string
			/**
			 * @description Status of api action
			 * @example true
			 */
			status: boolean
		}
		GetShippingZoneResponseDto: {
			/** @description Shipping zone data */
			data: components['schemas']['ShippingZoneSchema']
			/**
			 * @description Success message
			 * @example Successfully created
			 */
			message?: string
			/**
			 * @description Status of api action
			 * @example true
			 */
			status: boolean
		}
		GetStoreSettingResponseDto: {
			/** @description Shipping carrier data */
			data: components['schemas']['StoreSettingSchema']
			/**
			 * @description Success message
			 * @example Successfully created
			 */
			message?: string
			/**
			 * @description Status of api action
			 * @example true
			 */
			status: boolean
		}
		ListShippingCarrierResponseDto: {
			/** @description An array of items */
			data: components['schemas']['ShippingCarrierSchema'][]
			/**
			 * @description Success message
			 * @example Successfully created
			 */
			message?: string
			/**
			 * @description Status of api action
			 * @example true
			 */
			status: boolean
		}
		ListShippingRateResponseDto: {
			/** @description An array of items */
			data: components['schemas']['ShippingRateSchema'][]
			/**
			 * @description Total number of items
			 * @example 20
			 */
			total: number
		}
		ListShippingZoneResponseDto: {
			/** @description An array of items */
			data: components['schemas']['ShippingZoneSchema'][]
			/**
			 * @description Total number of items
			 * @example 20
			 */
			total: number
		}
		OrderSource: {
			/**
			 * @description Source subtype of order
			 * @example store
			 * @enum {string}
			 */
			subType?:
				| 'one_step_order_form'
				| 'two_step_order_form'
				| 'upsell'
				| 'tap_to_pay'
				| 'card_payment'
				| 'store'
				| 'contact_view'
				| 'email_campaign'
				| 'payments_dashboard'
				| 'shopify'
				| 'subscription_view'
				| 'store_upsell'
				| 'woocommerce'
				| 'service'
				| 'meeting'
				| 'imported_csv'
				| 'qr_code'
			/**
			 * @description Source of order
			 * @example website
			 * @enum {string}
			 */
			type:
				| 'funnel'
				| 'website'
				| 'invoice'
				| 'calendar'
				| 'text2Pay'
				| 'document_contracts'
				| 'membership'
				| 'mobile_app'
				| 'communities'
				| 'point_of_sale'
				| 'manual'
				| 'form'
				| 'survey'
				| 'payment_link'
				| 'external'
		}
		ProductItem: {
			/** @description id of product */
			id: string
			/** @description No of quantities */
			qty: number
		}
		ShippingCarrierSchema: {
			/**
			 * @description The unique identifier for the product.
			 * @example 655b33a82209e60b6adb87a5
			 */
			_id: string
			/**
			 * @description The seller can choose multiple services while creating shipping rates if this is true.
			 * @example true
			 */
			allowsMultipleServiceSelection?: boolean
			/**
			 * @description Location Id or Agency Id
			 * @example 6578278e879ad2646715ba9c
			 */
			altId: string
			/** @enum {string} */
			altType: 'location'
			/**
			 * @description The URL endpoint that GHL needs to retrieve shipping rates. This must be a public URL.
			 * @example https://example.com/get-shipping-rates
			 */
			callbackUrl: string
			/**
			 * @description created at
			 * @example 2023-12-12T09:27:42.355Z
			 */
			createdAt: string
			/**
			 * @description The unique identifier for the marketplace app.
			 * @example 655b33a82209e60b6adb87a5
			 */
			marketplaceAppId: string
			/**
			 * @description Name of the shipping carrier
			 * @example FedEx
			 */
			name: string
			/** @description An array of available shipping carrier services */
			services?: components['schemas']['ShippingCarrierServiceDto'][]
			/**
			 * @description updated at
			 * @example 2023-12-12T09:27:42.355Z
			 */
			updatedAt: string
		}
		ShippingCarrierServiceDto: {
			/**
			 * @description Name of the shipping carrier service
			 * @example Priority Mail Express International
			 */
			name: string
			/**
			 * @description Value of the shipping carrier service
			 * @example PriorityMailExpressInternational
			 */
			value: string
		}
		ShippingRateSchema: {
			/**
			 * @description The unique identifier for the product.
			 * @example 655b33a82209e60b6adb87a5
			 */
			_id: string
			/**
			 * @description Location Id or Agency Id
			 * @example 6578278e879ad2646715ba9c
			 */
			altId: string
			/** @enum {string} */
			altType: 'location'
			/**
			 * @description The amount of the shipping rate if it is normal rate (0 means free ). Fixed Handling fee if it is a carrier rate (it will add to the carrier rate).
			 * @example 99.99
			 */
			amount: number
			/**
			 * @description Type of condition to provide the conditional pricing
			 * @example price
			 * @enum {string}
			 */
			conditionType: 'none' | 'price' | 'weight'
			/**
			 * @description created at
			 * @example 2023-12-12T09:27:42.355Z
			 */
			createdAt: string
			/**
			 * @description The currency of the amount of the rate / handling fee
			 * @example USD
			 */
			currency: string
			/**
			 * @description Delivery description
			 * @example Ships next day
			 */
			description?: string
			/**
			 * @description is this a carrier rate
			 * @example true
			 */
			isCarrierRate?: boolean
			/**
			 * @description Maximum condition for applying this price. set 0 or null if there is no maximum
			 * @example 99.99
			 */
			maxCondition: number
			/**
			 * @description Minimum condition for applying this price. set 0 or null if there is no minimum
			 * @example 99.99
			 */
			minCondition: number
			/**
			 * @description Name of the shipping zone
			 * @example North zone
			 */
			name: string
			/**
			 * @description Percentage of rate fee if it is a carrier rate.
			 * @example 10.99
			 */
			percentageOfRateFee?: number
			/**
			 * @description Shipping carrier id
			 * @example 655b33a82209e60b6adb87a5
			 */
			shippingCarrierId: string
			/** @description An array of items */
			shippingCarrierServices?: components['schemas']['ShippingCarrierServiceDto'][]
			/**
			 * @description The unique identifier for the shipping zone.
			 * @example 655b33a82209e60b6adb87a5
			 */
			shippingZoneId: string
			/**
			 * @description updated at
			 * @example 2023-12-12T09:27:42.355Z
			 */
			updatedAt: string
		}
		ShippingZoneCountryDto: {
			/**
			 * @description Country code
			 * @example US
			 * @enum {number}
			 */
			code: [
				'US',
				'CA',
				'AF',
				'AX',
				'AL',
				'DZ',
				'AS',
				'AD',
				'AO',
				'AI',
				'AQ',
				'AG',
				'AR',
				'AM',
				'AW',
				'AU',
				'AT',
				'AZ',
				'BS',
				'BH',
				'BD',
				'BB',
				'BY',
				'BE',
				'BZ',
				'BJ',
				'BM',
				'BT',
				'BO',
				'BA',
				'BW',
				'BV',
				'BR',
				'IO',
				'BN',
				'BG',
				'BF',
				'BI',
				'KH',
				'CM',
				'CV',
				'KY',
				'CF',
				'TD',
				'CL',
				'CN',
				'CX',
				'CC',
				'CO',
				'KM',
				'CG',
				'CD',
				'CK',
				'CR',
				'CI',
				'HR',
				'CU',
				'CY',
				'CZ',
				'DK',
				'DJ',
				'DM',
				'DO',
				'EC',
				'EG',
				'SV',
				'GQ',
				'ER',
				'EE',
				'ET',
				'FK',
				'FO',
				'FJ',
				'FI',
				'FR',
				'GF',
				'PF',
				'TF',
				'GA',
				'GM',
				'GE',
				'DE',
				'GH',
				'GI',
				'GR',
				'GL',
				'GD',
				'GP',
				'GU',
				'GT',
				'GG',
				'GN',
				'GW',
				'GY',
				'HT',
				'HM',
				'VA',
				'HN',
				'HK',
				'HU',
				'IS',
				'IN',
				'ID',
				'IR',
				'IQ',
				'IE',
				'IM',
				'IL',
				'IT',
				'JM',
				'JP',
				'JE',
				'JO',
				'KZ',
				'KE',
				'KI',
				'KP',
				'XK',
				'KW',
				'KG',
				'LA',
				'LV',
				'LB',
				'LS',
				'LR',
				'LY',
				'LI',
				'LT',
				'LU',
				'MO',
				'MK',
				'MG',
				'MW',
				'MY',
				'MV',
				'ML',
				'MT',
				'MH',
				'MQ',
				'MR',
				'MU',
				'YT',
				'MX',
				'FM',
				'MD',
				'MC',
				'MN',
				'ME',
				'MS',
				'MA',
				'MZ',
				'MM',
				'NA',
				'NR',
				'NP',
				'NL',
				'AN',
				'NC',
				'NZ',
				'NI',
				'NE',
				'NG',
				'NU',
				'NF',
				'MP',
				'NO',
				'OM',
				'PK',
				'PW',
				'PS',
				'PA',
				'PG',
				'PY',
				'PE',
				'PH',
				'PN',
				'PL',
				'PT',
				'PR',
				'QA',
				'RE',
				'RO',
				'RU',
				'RW',
				'SH',
				'KN',
				'LC',
				'MF',
				'PM',
				'VC',
				'WS',
				'SM',
				'ST',
				'SA',
				'SN',
				'RS',
				'SC',
				'SL',
				'SG',
				'SX',
				'SK',
				'SI',
				'SB',
				'SO',
				'ZA',
				'GS',
				'KR',
				'ES',
				'LK',
				'SD',
				'SR',
				'SJ',
				'SZ',
				'SE',
				'CH',
				'SY',
				'TW',
				'TJ',
				'TZ',
				'TH',
				'TL',
				'TG',
				'TK',
				'TO',
				'TT',
				'TN',
				'TR',
				'TM',
				'TC',
				'TV',
				'UG',
				'UA',
				'AE',
				'GB',
				'UM',
				'UY',
				'UZ',
				'VU',
				'VE',
				'VN',
				'VG',
				'VI',
				'WF',
				'EH',
				'YE',
				'ZM',
				'ZW',
			]
			/** @description List of states that are available. If states is empty, then all states are available */
			states?: components['schemas']['ShippingZoneCountryStateDto'][]
		}
		ShippingZoneCountryStateDto: {
			/**
			 * @description State code
			 * @example VA
			 * @enum {string}
			 */
			code:
				| 'AL'
				| 'AK'
				| 'AS'
				| 'AZ'
				| 'AR'
				| 'AA'
				| 'AE'
				| 'AP'
				| 'CA'
				| 'CO'
				| 'CT'
				| 'DE'
				| 'DC'
				| 'FM'
				| 'FL'
				| 'GA'
				| 'GU'
				| 'HI'
				| 'ID'
				| 'IL'
				| 'IN'
				| 'IA'
				| 'KS'
				| 'KY'
				| 'LA'
				| 'ME'
				| 'MH'
				| 'MD'
				| 'MA'
				| 'MI'
				| 'MN'
				| 'MS'
				| 'MO'
				| 'MT'
				| 'NE'
				| 'NV'
				| 'NH'
				| 'NJ'
				| 'NM'
				| 'NY'
				| 'NC'
				| 'ND'
				| 'MP'
				| 'OH'
				| 'OK'
				| 'OR'
				| 'PW'
				| 'PA'
				| 'PR'
				| 'RI'
				| 'SC'
				| 'SD'
				| 'TN'
				| 'TX'
				| 'UT'
				| 'VT'
				| 'VI'
				| 'VA'
				| 'WA'
				| 'WV'
				| 'WI'
				| 'WY'
				| 'AB'
				| 'BC'
				| 'MB'
				| 'NB'
				| 'NL'
				| 'NT'
				| 'NS'
				| 'NU'
				| 'ON'
				| 'PE'
				| 'QC'
				| 'SK'
				| 'YT'
				| 'BA'
				| 'CT'
				| 'CC'
				| 'CH'
				| 'CB'
				| 'CN'
				| 'ER'
				| 'FO'
				| 'JY'
				| 'LP'
				| 'LR'
				| 'MZ'
				| 'MN'
				| 'NQ'
				| 'RN'
				| 'SA'
				| 'SJ'
				| 'SL'
				| 'SC'
				| 'SF'
				| 'SE'
				| 'TF'
				| 'TU'
				| 'ACT'
				| 'NSW'
				| 'NT'
				| 'QLD'
				| 'SA'
				| 'TAS'
				| 'VIC'
				| 'WA'
				| 'AC'
				| 'AL'
				| 'AM'
				| 'AP'
				| 'BA'
				| 'CE'
				| 'DF'
				| 'ES'
				| 'GO'
				| 'MA'
				| 'MG'
				| 'MS'
				| 'MT'
				| 'PA'
				| 'PB'
				| 'PE'
				| 'PI'
				| 'PR'
				| 'RJ'
				| 'RN'
				| 'RO'
				| 'RR'
				| 'RS'
				| 'SC'
				| 'SE'
				| 'SP'
				| 'TO'
				| 'AI'
				| 'AN'
				| 'AP'
				| 'AT'
				| 'BI'
				| 'CO'
				| 'AR'
				| 'LI'
				| 'LL'
				| 'LR'
				| 'MA'
				| 'ML'
				| 'RM'
				| 'TA'
				| 'VS'
				| 'NB'
				| 'AMA'
				| 'ANT'
				| 'ARA'
				| 'ATL'
				| 'BOL'
				| 'BOY'
				| 'CAL'
				| 'CAQ'
				| 'CAS'
				| 'CAU'
				| 'CES'
				| 'CHO'
				| 'CUN'
				| 'COR'
				| 'GUA'
				| 'GUV'
				| 'HUI'
				| 'LAG'
				| 'MAG'
				| 'MET'
				| 'NAR'
				| 'NSA'
				| 'PUT'
				| 'QUI'
				| 'RIS'
				| 'SAP'
				| 'SAN'
				| 'SUC'
				| 'TOL'
				| 'VAC'
				| 'VAU'
				| 'VID'
				| 'CR-A'
				| 'CR-C'
				| 'CR-G'
				| 'CR-H'
				| 'CR-L'
				| 'CR-P'
				| 'CR-SJ'
				| 'GT-16'
				| 'GT-15'
				| 'GT-04'
				| 'GT-20'
				| 'GT-02'
				| 'GT-05'
				| 'GT-01'
				| 'GT-13'
				| 'GT-18'
				| 'GT-21'
				| 'GT-22'
				| 'GT-17'
				| 'GT-09'
				| 'GT-14'
				| 'GT-11'
				| 'GT-03'
				| 'GT-12'
				| 'GT-06'
				| 'GT-07'
				| 'GT-10'
				| 'GT-08'
				| 'GT-19'
				| 'HK'
				| 'KL'
				| 'NT'
				| 'AN'
				| 'AP'
				| 'AR'
				| 'AS'
				| 'BR'
				| 'CH'
				| 'CG'
				| 'DN'
				| 'DD'
				| 'DL'
				| 'GA'
				| 'GJ'
				| 'HR'
				| 'HP'
				| 'JK'
				| 'JH'
				| 'KA'
				| 'KL'
				| 'LA'
				| 'LD'
				| 'MP'
				| 'MH'
				| 'MN'
				| 'ML'
				| 'MZ'
				| 'NL'
				| 'OR'
				| 'PY'
				| 'PB'
				| 'RJ'
				| 'SK'
				| 'TN'
				| 'TS'
				| 'TR'
				| 'UP'
				| 'UK'
				| 'WB'
				| 'CW'
				| 'CN'
				| 'CE'
				| 'CO'
				| 'DL'
				| 'D'
				| 'G'
				| 'KY'
				| 'KE'
				| 'KK'
				| 'LS'
				| 'LM'
				| 'LK'
				| 'LD'
				| 'LH'
				| 'MO'
				| 'MH'
				| 'MN'
				| 'OY'
				| 'RN'
				| 'SO'
				| 'TA'
				| 'WD'
				| 'WH'
				| 'WX'
				| 'WW'
				| 'AG'
				| 'AL'
				| 'AN'
				| 'AO'
				| 'AR'
				| 'AP'
				| 'AT'
				| 'AV'
				| 'BA'
				| 'BT'
				| 'BL'
				| 'BN'
				| 'BG'
				| 'BI'
				| 'BO'
				| 'BZ'
				| 'BS'
				| 'BR'
				| 'CA'
				| 'CL'
				| 'CB'
				| 'CI'
				| 'CE'
				| 'CT'
				| 'CZ'
				| 'CH'
				| 'CO'
				| 'CS'
				| 'CR'
				| 'KR'
				| 'CN'
				| 'EN'
				| 'FM'
				| 'FE'
				| 'FI'
				| 'FG'
				| 'FC'
				| 'FR'
				| 'GE'
				| 'GO'
				| 'GR'
				| 'IM'
				| 'IS'
				| 'AQ'
				| 'SP'
				| 'LT'
				| 'LE'
				| 'LC'
				| 'LI'
				| 'LO'
				| 'LU'
				| 'MC'
				| 'MN'
				| 'MS'
				| 'MT'
				| 'VS'
				| 'ME'
				| 'MI'
				| 'MO'
				| 'MB'
				| 'NA'
				| 'NO'
				| 'NU'
				| 'OG'
				| 'OT'
				| 'OR'
				| 'PD'
				| 'PA'
				| 'PR'
				| 'PV'
				| 'PG'
				| 'PU'
				| 'PE'
				| 'PC'
				| 'PI'
				| 'PT'
				| 'PN'
				| 'PZ'
				| 'PO'
				| 'RG'
				| 'RA'
				| 'RC'
				| 'RE'
				| 'RI'
				| 'RN'
				| 'RM'
				| 'RO'
				| 'SA'
				| 'SS'
				| 'SV'
				| 'SI'
				| 'SR'
				| 'SO'
				| 'TA'
				| 'TE'
				| 'TR'
				| 'TO'
				| 'TP'
				| 'TN'
				| 'TV'
				| 'TS'
				| 'UD'
				| 'VA'
				| 'VE'
				| 'VB'
				| 'VC'
				| 'VR'
				| 'VV'
				| 'VI'
				| 'VT'
				| 'JP-23'
				| 'JP-05'
				| 'JP-02'
				| 'JP-12'
				| 'JP-38'
				| 'JP-18'
				| 'JP-40'
				| 'JP-07'
				| 'JP-21'
				| 'JP-10'
				| 'JP-34'
				| 'JP-01'
				| 'JP-28'
				| 'JP-08'
				| 'JP-17'
				| 'JP-03'
				| 'JP-37'
				| 'JP-46'
				| 'JP-14'
				| 'JP-39'
				| 'JP-43'
				| 'JP-26'
				| 'JP-24'
				| 'JP-04'
				| 'JP-45'
				| 'JP-20'
				| 'JP-42'
				| 'JP-29'
				| 'JP-15'
				| 'JP-44'
				| 'JP-33'
				| 'JP-47'
				| 'JP-27'
				| 'JP-41'
				| 'JP-11'
				| 'JP-25'
				| 'JP-32'
				| 'JP-22'
				| 'JP-09'
				| 'JP-36'
				| 'JP-13'
				| 'JP-31'
				| 'JP-16'
				| 'JP-30'
				| 'JP-06'
				| 'JP-35'
				| 'JP-19'
				| 'JHR'
				| 'KDH'
				| 'KTN'
				| 'KUL'
				| 'LBN'
				| 'MLK'
				| 'NSN'
				| 'PHG'
				| 'PNG'
				| 'PRK'
				| 'PLS'
				| 'PJY'
				| 'SBH'
				| 'SWK'
				| 'SGR'
				| 'TRG'
				| 'AGU'
				| 'BCN'
				| 'BCS'
				| 'CAM'
				| 'CHP'
				| 'CHH'
				| 'CMX'
				| 'COA'
				| 'COL'
				| 'DUR'
				| 'GUA'
				| 'GRO'
				| 'HID'
				| 'JAL'
				| 'MIC'
				| 'MOR'
				| 'MEX'
				| 'NAY'
				| 'NLE'
				| 'OAX'
				| 'PUE'
				| 'QUE'
				| 'ROO'
				| 'SLP'
				| 'SIN'
				| 'SON'
				| 'TAB'
				| 'TAM'
				| 'TLA'
				| 'VER'
				| 'YUC'
				| 'ZAC'
				| 'AUK'
				| 'BOP'
				| 'CAN'
				| 'CIT'
				| 'GIS'
				| 'HKB'
				| 'MWT'
				| 'MBH'
				| 'NSN'
				| 'NTL'
				| 'OTA'
				| 'STL'
				| 'TKI'
				| 'TAS'
				| 'WKO'
				| 'WGN'
				| 'WTC'
				| 'JK'
				| 'BA'
				| 'GB'
				| 'IS'
				| 'KP'
				| 'PB'
				| 'SD'
				| 'AMA'
				| 'ANC'
				| 'APU'
				| 'ARE'
				| 'AYA'
				| 'CAJ'
				| 'CAL'
				| 'CUS'
				| 'HUV'
				| 'HUC'
				| 'ICA'
				| 'JUN'
				| 'LAL'
				| 'LAM'
				| 'LIM'
				| 'LOR'
				| 'MDD'
				| 'MOQ'
				| 'PAS'
				| 'PIU'
				| 'PUN'
				| 'SAM'
				| 'TAC'
				| 'TUM'
				| 'UCA'
				| 'PH-ABR'
				| 'PH-AGN'
				| 'PH-AGS'
				| 'PH-AKL'
				| 'PH-ALB'
				| 'PH-ANT'
				| 'PH-APA'
				| 'PH-AUR'
				| 'PH-BAS'
				| 'PH-BAN'
				| 'PH-BTN'
				| 'PH-BTG'
				| 'PH-BEN'
				| 'PH-BIL'
				| 'PH-BOH'
				| 'PH-BUK'
				| 'PH-BUL'
				| 'PH-CAG'
				| 'PH-CAN'
				| 'PH-CAS'
				| 'PH-CAM'
				| 'PH-CAP'
				| 'PH-CAT'
				| 'PH-CAV'
				| 'PH-CEB'
				| 'PH-NCO'
				| 'PH-DAO'
				| 'PH-DAV'
				| 'PH-DAS'
				| 'PH-EAS'
				| 'PH-GUI'
				| 'PH-IFU'
				| 'PH-ILN'
				| 'PH-ILS'
				| 'PH-ILI'
				| 'PH-ISA'
				| 'PH-KAL'
				| 'PH-LUN'
				| 'PH-LAG'
				| 'PH-LAN'
				| 'PH-LAS'
				| 'PH-LEY'
				| 'PH-MAG'
				| 'PH-MAD'
				| 'PH-MAS'
				| 'PH-00'
				| 'PH-MSC'
				| 'PH-MSR'
				| 'PH-MOU'
				| 'PH-NEC'
				| 'PH-NER'
				| 'PH-NSA'
				| 'PH-NUE'
				| 'PH-NUV'
				| 'PH-MDC'
				| 'PH-MDR'
				| 'PH-PLW'
				| 'PH-PAM'
				| 'PH-PAN'
				| 'PH-QUE'
				| 'PH-QUI'
				| 'PH-RIZ'
				| 'PH-ROM'
				| 'PH-WSA'
				| 'PH-SAR'
				| 'PH-SIG'
				| 'PH-SOR'
				| 'PH-SCO'
				| 'PH-SLE'
				| 'PH-SUK'
				| 'PH-SLU'
				| 'PH-SUN'
				| 'PH-SUR'
				| 'PH-TAR'
				| 'PH-TAW'
				| 'PH-ZMB'
				| 'PH-ZAN'
				| 'PH-ZAS'
				| 'PH-ZSI'
				| 'PT-20'
				| 'PT-01'
				| 'PT-02'
				| 'PT-03'
				| 'PT-04'
				| 'PT-05'
				| 'PT-06'
				| 'PT-07'
				| 'PT-08'
				| 'PT-09'
				| 'PT-10'
				| 'PT-11'
				| 'PT-30'
				| 'PT-12'
				| 'PT-13'
				| 'PT-14'
				| 'PT-15'
				| 'PT-16'
				| 'PT-17'
				| 'PT-18'
				| 'AB'
				| 'AR'
				| 'AG'
				| 'BC'
				| 'BH'
				| 'BN'
				| 'BT'
				| 'BR'
				| 'BV'
				| 'B'
				| 'BZ'
				| 'CL'
				| 'CS'
				| 'CJ'
				| 'CT'
				| 'CV'
				| 'DB'
				| 'DJ'
				| 'GL'
				| 'GR'
				| 'GJ'
				| 'HR'
				| 'HD'
				| 'IL'
				| 'IS'
				| 'IF'
				| 'MM'
				| 'MH'
				| 'MS'
				| 'NT'
				| 'OT'
				| 'PH'
				| 'SJ'
				| 'SM'
				| 'SB'
				| 'SV'
				| 'TR'
				| 'TM'
				| 'TL'
				| 'VL'
				| 'VS'
				| 'VN'
				| 'KR-26'
				| 'KR-43'
				| 'KR-44'
				| 'KR-27'
				| 'KR-30'
				| 'KR-42'
				| 'KR-29'
				| 'KR-47'
				| 'KR-41'
				| 'KR-48'
				| 'KR-28'
				| 'KR-49'
				| 'KR-45'
				| 'KR-46'
				| 'KR-50'
				| 'KR-11'
				| 'KR-31'
				| 'C'
				| 'VI'
				| 'AB'
				| 'A'
				| 'AL'
				| 'O'
				| 'AV'
				| 'BA'
				| 'PM'
				| 'B'
				| 'BU'
				| 'CC'
				| 'CA'
				| 'S'
				| 'CS'
				| 'CE'
				| 'CR'
				| 'CO'
				| 'CU'
				| 'GI'
				| 'GR'
				| 'GU'
				| 'SS'
				| 'H'
				| 'HU'
				| 'J'
				| 'LO'
				| 'GC'
				| 'LE'
				| 'L'
				| 'LU'
				| 'M'
				| 'MA'
				| 'ML'
				| 'MU'
				| 'NA'
				| 'OR'
				| 'P'
				| 'PO'
				| 'SA'
				| 'TF'
				| 'SG'
				| 'SE'
				| 'SO'
				| 'T'
				| 'TE'
				| 'TO'
				| 'V'
				| 'VA'
				| 'BI'
				| 'ZA'
				| 'Z'
				| 'AZ'
				| 'AJ'
				| 'DU'
				| 'FU'
				| 'RK'
				| 'SH'
				| 'UQ'
				| 'BFP'
				| 'ENG'
				| 'NIR'
				| 'SCT'
				| 'WLS'
				| 'AR'
				| 'CA'
				| 'CL'
				| 'CO'
				| 'DU'
				| 'FS'
				| 'FD'
				| 'LA'
				| 'MA'
				| 'MO'
				| 'PA'
				| 'RN'
				| 'RV'
				| 'RO'
				| 'SA'
				| 'SJ'
				| 'SO'
				| 'TA'
				| 'TT'
		}
		ShippingZoneSchema: {
			/**
			 * @description The unique identifier for the product.
			 * @example 655b33a82209e60b6adb87a5
			 */
			_id: string
			/**
			 * @description Location Id or Agency Id
			 * @example 6578278e879ad2646715ba9c
			 */
			altId: string
			/** @enum {string} */
			altType: 'location'
			/** @description List of countries that are available */
			countries: components['schemas']['ShippingZoneCountryDto'][]
			/**
			 * @description created at
			 * @example 2023-12-12T09:27:42.355Z
			 */
			createdAt: string
			/**
			 * @description Name of the shipping zone
			 * @example North zone
			 */
			name: string
			/** @description Array of shipping rates under this shipping zone */
			shippingRates?: components['schemas']['ShippingRateSchema'][]
			/**
			 * @description updated at
			 * @example 2023-12-12T09:27:42.355Z
			 */
			updatedAt: string
		}
		StoreOrderFulfillmentNotificationDto: {
			/**
			 * @description Default Email Template Id
			 * @example 6788d542f0462ffd6bc29bb9
			 */
			defaultEmailTemplateId: string
			/**
			 * @description Email Template Id
			 * @example 6788d542f0462ffd6bc29bb9
			 */
			emailTemplateId: string
			/**
			 * @description Store order fulfillment notification enabled
			 * @example true
			 */
			enabled: boolean
			/**
			 * @description Store order fulfillment email subject
			 * @example Order fulfilled
			 */
			subject: string
		}
		StoreOrderNotificationDto: {
			/**
			 * @description Default Email Template Id
			 * @example 6788d542f0462ffd6bc29bb9
			 */
			defaultEmailTemplateId: string
			/**
			 * @description Email Template Id
			 * @example 6788d542f0462ffd6bc29bb9
			 */
			emailTemplateId: string
			/**
			 * @description Store order notification enabled
			 * @example true
			 */
			enabled: boolean
			/**
			 * @description Store order email subject
			 * @example Your order is placed !
			 */
			subject: string
		}
		StoreSettingSchema: {
			/**
			 * @description The unique identifier for the settings.
			 * @example 655b33a82209e60b6adb87a5
			 */
			_id: string
			/**
			 * @description Location Id or Agency Id
			 * @example 6578278e879ad2646715ba9c
			 */
			altId: string
			/** @enum {string} */
			altType: 'location'
			/**
			 * @description created at
			 * @example 2023-12-12T09:27:42.355Z
			 */
			createdAt: string
			/** @description Shipping origin address */
			shippingOrigin: components['schemas']['StoreShippingOriginDto']
			/** @description Store order fulfillment notification email */
			storeOrderFulfillmentNotification?: components['schemas']['StoreOrderFulfillmentNotificationDto']
			/** @description Store order notification email */
			storeOrderNotification?: components['schemas']['StoreOrderNotificationDto']
			/**
			 * @description updated at
			 * @example 2023-12-12T09:27:42.355Z
			 */
			updatedAt: string
		}
		StoreShippingOriginDto: {
			/**
			 * @description City name
			 * @example Tokyo
			 */
			city: string
			/**
			 * @description Country code
			 * @example US
			 * @enum {number}
			 */
			country: [
				'US',
				'CA',
				'AF',
				'AX',
				'AL',
				'DZ',
				'AS',
				'AD',
				'AO',
				'AI',
				'AQ',
				'AG',
				'AR',
				'AM',
				'AW',
				'AU',
				'AT',
				'AZ',
				'BS',
				'BH',
				'BD',
				'BB',
				'BY',
				'BE',
				'BZ',
				'BJ',
				'BM',
				'BT',
				'BO',
				'BA',
				'BW',
				'BV',
				'BR',
				'IO',
				'BN',
				'BG',
				'BF',
				'BI',
				'KH',
				'CM',
				'CV',
				'KY',
				'CF',
				'TD',
				'CL',
				'CN',
				'CX',
				'CC',
				'CO',
				'KM',
				'CG',
				'CD',
				'CK',
				'CR',
				'CI',
				'HR',
				'CU',
				'CY',
				'CZ',
				'DK',
				'DJ',
				'DM',
				'DO',
				'EC',
				'EG',
				'SV',
				'GQ',
				'ER',
				'EE',
				'ET',
				'FK',
				'FO',
				'FJ',
				'FI',
				'FR',
				'GF',
				'PF',
				'TF',
				'GA',
				'GM',
				'GE',
				'DE',
				'GH',
				'GI',
				'GR',
				'GL',
				'GD',
				'GP',
				'GU',
				'GT',
				'GG',
				'GN',
				'GW',
				'GY',
				'HT',
				'HM',
				'VA',
				'HN',
				'HK',
				'HU',
				'IS',
				'IN',
				'ID',
				'IR',
				'IQ',
				'IE',
				'IM',
				'IL',
				'IT',
				'JM',
				'JP',
				'JE',
				'JO',
				'KZ',
				'KE',
				'KI',
				'KP',
				'XK',
				'KW',
				'KG',
				'LA',
				'LV',
				'LB',
				'LS',
				'LR',
				'LY',
				'LI',
				'LT',
				'LU',
				'MO',
				'MK',
				'MG',
				'MW',
				'MY',
				'MV',
				'ML',
				'MT',
				'MH',
				'MQ',
				'MR',
				'MU',
				'YT',
				'MX',
				'FM',
				'MD',
				'MC',
				'MN',
				'ME',
				'MS',
				'MA',
				'MZ',
				'MM',
				'NA',
				'NR',
				'NP',
				'NL',
				'AN',
				'NC',
				'NZ',
				'NI',
				'NE',
				'NG',
				'NU',
				'NF',
				'MP',
				'NO',
				'OM',
				'PK',
				'PW',
				'PS',
				'PA',
				'PG',
				'PY',
				'PE',
				'PH',
				'PN',
				'PL',
				'PT',
				'PR',
				'QA',
				'RE',
				'RO',
				'RU',
				'RW',
				'SH',
				'KN',
				'LC',
				'MF',
				'PM',
				'VC',
				'WS',
				'SM',
				'ST',
				'SA',
				'SN',
				'RS',
				'SC',
				'SL',
				'SG',
				'SX',
				'SK',
				'SI',
				'SB',
				'SO',
				'ZA',
				'GS',
				'KR',
				'ES',
				'LK',
				'SD',
				'SR',
				'SJ',
				'SZ',
				'SE',
				'CH',
				'SY',
				'TW',
				'TJ',
				'TZ',
				'TH',
				'TL',
				'TG',
				'TK',
				'TO',
				'TT',
				'TN',
				'TR',
				'TM',
				'TC',
				'TV',
				'UG',
				'UA',
				'AE',
				'GB',
				'UM',
				'UY',
				'UZ',
				'VU',
				'VE',
				'VN',
				'VG',
				'VI',
				'WF',
				'EH',
				'YE',
				'ZM',
				'ZW',
			]
			/**
			 * @description Email
			 * @example john@deo.com
			 */
			email?: string
			/**
			 * @description Name of the store / company
			 * @example ABC Store
			 */
			name: string
			/**
			 * @description Business Phone Number
			 * @example +1-214-559-6993
			 */
			phone?: string
			/**
			 * @description State code
			 * @example VA
			 * @enum {string}
			 */
			state?:
				| 'AL'
				| 'AK'
				| 'AS'
				| 'AZ'
				| 'AR'
				| 'AA'
				| 'AE'
				| 'AP'
				| 'CA'
				| 'CO'
				| 'CT'
				| 'DE'
				| 'DC'
				| 'FM'
				| 'FL'
				| 'GA'
				| 'GU'
				| 'HI'
				| 'ID'
				| 'IL'
				| 'IN'
				| 'IA'
				| 'KS'
				| 'KY'
				| 'LA'
				| 'ME'
				| 'MH'
				| 'MD'
				| 'MA'
				| 'MI'
				| 'MN'
				| 'MS'
				| 'MO'
				| 'MT'
				| 'NE'
				| 'NV'
				| 'NH'
				| 'NJ'
				| 'NM'
				| 'NY'
				| 'NC'
				| 'ND'
				| 'MP'
				| 'OH'
				| 'OK'
				| 'OR'
				| 'PW'
				| 'PA'
				| 'PR'
				| 'RI'
				| 'SC'
				| 'SD'
				| 'TN'
				| 'TX'
				| 'UT'
				| 'VT'
				| 'VI'
				| 'VA'
				| 'WA'
				| 'WV'
				| 'WI'
				| 'WY'
				| 'AB'
				| 'BC'
				| 'MB'
				| 'NB'
				| 'NL'
				| 'NT'
				| 'NS'
				| 'NU'
				| 'ON'
				| 'PE'
				| 'QC'
				| 'SK'
				| 'YT'
				| 'BA'
				| 'CT'
				| 'CC'
				| 'CH'
				| 'CB'
				| 'CN'
				| 'ER'
				| 'FO'
				| 'JY'
				| 'LP'
				| 'LR'
				| 'MZ'
				| 'MN'
				| 'NQ'
				| 'RN'
				| 'SA'
				| 'SJ'
				| 'SL'
				| 'SC'
				| 'SF'
				| 'SE'
				| 'TF'
				| 'TU'
				| 'ACT'
				| 'NSW'
				| 'NT'
				| 'QLD'
				| 'SA'
				| 'TAS'
				| 'VIC'
				| 'WA'
				| 'AC'
				| 'AL'
				| 'AM'
				| 'AP'
				| 'BA'
				| 'CE'
				| 'DF'
				| 'ES'
				| 'GO'
				| 'MA'
				| 'MG'
				| 'MS'
				| 'MT'
				| 'PA'
				| 'PB'
				| 'PE'
				| 'PI'
				| 'PR'
				| 'RJ'
				| 'RN'
				| 'RO'
				| 'RR'
				| 'RS'
				| 'SC'
				| 'SE'
				| 'SP'
				| 'TO'
				| 'AI'
				| 'AN'
				| 'AP'
				| 'AT'
				| 'BI'
				| 'CO'
				| 'AR'
				| 'LI'
				| 'LL'
				| 'LR'
				| 'MA'
				| 'ML'
				| 'RM'
				| 'TA'
				| 'VS'
				| 'NB'
				| 'AMA'
				| 'ANT'
				| 'ARA'
				| 'ATL'
				| 'BOL'
				| 'BOY'
				| 'CAL'
				| 'CAQ'
				| 'CAS'
				| 'CAU'
				| 'CES'
				| 'CHO'
				| 'CUN'
				| 'COR'
				| 'GUA'
				| 'GUV'
				| 'HUI'
				| 'LAG'
				| 'MAG'
				| 'MET'
				| 'NAR'
				| 'NSA'
				| 'PUT'
				| 'QUI'
				| 'RIS'
				| 'SAP'
				| 'SAN'
				| 'SUC'
				| 'TOL'
				| 'VAC'
				| 'VAU'
				| 'VID'
				| 'CR-A'
				| 'CR-C'
				| 'CR-G'
				| 'CR-H'
				| 'CR-L'
				| 'CR-P'
				| 'CR-SJ'
				| 'GT-16'
				| 'GT-15'
				| 'GT-04'
				| 'GT-20'
				| 'GT-02'
				| 'GT-05'
				| 'GT-01'
				| 'GT-13'
				| 'GT-18'
				| 'GT-21'
				| 'GT-22'
				| 'GT-17'
				| 'GT-09'
				| 'GT-14'
				| 'GT-11'
				| 'GT-03'
				| 'GT-12'
				| 'GT-06'
				| 'GT-07'
				| 'GT-10'
				| 'GT-08'
				| 'GT-19'
				| 'HK'
				| 'KL'
				| 'NT'
				| 'AN'
				| 'AP'
				| 'AR'
				| 'AS'
				| 'BR'
				| 'CH'
				| 'CG'
				| 'DN'
				| 'DD'
				| 'DL'
				| 'GA'
				| 'GJ'
				| 'HR'
				| 'HP'
				| 'JK'
				| 'JH'
				| 'KA'
				| 'KL'
				| 'LA'
				| 'LD'
				| 'MP'
				| 'MH'
				| 'MN'
				| 'ML'
				| 'MZ'
				| 'NL'
				| 'OR'
				| 'PY'
				| 'PB'
				| 'RJ'
				| 'SK'
				| 'TN'
				| 'TS'
				| 'TR'
				| 'UP'
				| 'UK'
				| 'WB'
				| 'CW'
				| 'CN'
				| 'CE'
				| 'CO'
				| 'DL'
				| 'D'
				| 'G'
				| 'KY'
				| 'KE'
				| 'KK'
				| 'LS'
				| 'LM'
				| 'LK'
				| 'LD'
				| 'LH'
				| 'MO'
				| 'MH'
				| 'MN'
				| 'OY'
				| 'RN'
				| 'SO'
				| 'TA'
				| 'WD'
				| 'WH'
				| 'WX'
				| 'WW'
				| 'AG'
				| 'AL'
				| 'AN'
				| 'AO'
				| 'AR'
				| 'AP'
				| 'AT'
				| 'AV'
				| 'BA'
				| 'BT'
				| 'BL'
				| 'BN'
				| 'BG'
				| 'BI'
				| 'BO'
				| 'BZ'
				| 'BS'
				| 'BR'
				| 'CA'
				| 'CL'
				| 'CB'
				| 'CI'
				| 'CE'
				| 'CT'
				| 'CZ'
				| 'CH'
				| 'CO'
				| 'CS'
				| 'CR'
				| 'KR'
				| 'CN'
				| 'EN'
				| 'FM'
				| 'FE'
				| 'FI'
				| 'FG'
				| 'FC'
				| 'FR'
				| 'GE'
				| 'GO'
				| 'GR'
				| 'IM'
				| 'IS'
				| 'AQ'
				| 'SP'
				| 'LT'
				| 'LE'
				| 'LC'
				| 'LI'
				| 'LO'
				| 'LU'
				| 'MC'
				| 'MN'
				| 'MS'
				| 'MT'
				| 'VS'
				| 'ME'
				| 'MI'
				| 'MO'
				| 'MB'
				| 'NA'
				| 'NO'
				| 'NU'
				| 'OG'
				| 'OT'
				| 'OR'
				| 'PD'
				| 'PA'
				| 'PR'
				| 'PV'
				| 'PG'
				| 'PU'
				| 'PE'
				| 'PC'
				| 'PI'
				| 'PT'
				| 'PN'
				| 'PZ'
				| 'PO'
				| 'RG'
				| 'RA'
				| 'RC'
				| 'RE'
				| 'RI'
				| 'RN'
				| 'RM'
				| 'RO'
				| 'SA'
				| 'SS'
				| 'SV'
				| 'SI'
				| 'SR'
				| 'SO'
				| 'TA'
				| 'TE'
				| 'TR'
				| 'TO'
				| 'TP'
				| 'TN'
				| 'TV'
				| 'TS'
				| 'UD'
				| 'VA'
				| 'VE'
				| 'VB'
				| 'VC'
				| 'VR'
				| 'VV'
				| 'VI'
				| 'VT'
				| 'JP-23'
				| 'JP-05'
				| 'JP-02'
				| 'JP-12'
				| 'JP-38'
				| 'JP-18'
				| 'JP-40'
				| 'JP-07'
				| 'JP-21'
				| 'JP-10'
				| 'JP-34'
				| 'JP-01'
				| 'JP-28'
				| 'JP-08'
				| 'JP-17'
				| 'JP-03'
				| 'JP-37'
				| 'JP-46'
				| 'JP-14'
				| 'JP-39'
				| 'JP-43'
				| 'JP-26'
				| 'JP-24'
				| 'JP-04'
				| 'JP-45'
				| 'JP-20'
				| 'JP-42'
				| 'JP-29'
				| 'JP-15'
				| 'JP-44'
				| 'JP-33'
				| 'JP-47'
				| 'JP-27'
				| 'JP-41'
				| 'JP-11'
				| 'JP-25'
				| 'JP-32'
				| 'JP-22'
				| 'JP-09'
				| 'JP-36'
				| 'JP-13'
				| 'JP-31'
				| 'JP-16'
				| 'JP-30'
				| 'JP-06'
				| 'JP-35'
				| 'JP-19'
				| 'JHR'
				| 'KDH'
				| 'KTN'
				| 'KUL'
				| 'LBN'
				| 'MLK'
				| 'NSN'
				| 'PHG'
				| 'PNG'
				| 'PRK'
				| 'PLS'
				| 'PJY'
				| 'SBH'
				| 'SWK'
				| 'SGR'
				| 'TRG'
				| 'AGU'
				| 'BCN'
				| 'BCS'
				| 'CAM'
				| 'CHP'
				| 'CHH'
				| 'CMX'
				| 'COA'
				| 'COL'
				| 'DUR'
				| 'GUA'
				| 'GRO'
				| 'HID'
				| 'JAL'
				| 'MIC'
				| 'MOR'
				| 'MEX'
				| 'NAY'
				| 'NLE'
				| 'OAX'
				| 'PUE'
				| 'QUE'
				| 'ROO'
				| 'SLP'
				| 'SIN'
				| 'SON'
				| 'TAB'
				| 'TAM'
				| 'TLA'
				| 'VER'
				| 'YUC'
				| 'ZAC'
				| 'AUK'
				| 'BOP'
				| 'CAN'
				| 'CIT'
				| 'GIS'
				| 'HKB'
				| 'MWT'
				| 'MBH'
				| 'NSN'
				| 'NTL'
				| 'OTA'
				| 'STL'
				| 'TKI'
				| 'TAS'
				| 'WKO'
				| 'WGN'
				| 'WTC'
				| 'JK'
				| 'BA'
				| 'GB'
				| 'IS'
				| 'KP'
				| 'PB'
				| 'SD'
				| 'AMA'
				| 'ANC'
				| 'APU'
				| 'ARE'
				| 'AYA'
				| 'CAJ'
				| 'CAL'
				| 'CUS'
				| 'HUV'
				| 'HUC'
				| 'ICA'
				| 'JUN'
				| 'LAL'
				| 'LAM'
				| 'LIM'
				| 'LOR'
				| 'MDD'
				| 'MOQ'
				| 'PAS'
				| 'PIU'
				| 'PUN'
				| 'SAM'
				| 'TAC'
				| 'TUM'
				| 'UCA'
				| 'PH-ABR'
				| 'PH-AGN'
				| 'PH-AGS'
				| 'PH-AKL'
				| 'PH-ALB'
				| 'PH-ANT'
				| 'PH-APA'
				| 'PH-AUR'
				| 'PH-BAS'
				| 'PH-BAN'
				| 'PH-BTN'
				| 'PH-BTG'
				| 'PH-BEN'
				| 'PH-BIL'
				| 'PH-BOH'
				| 'PH-BUK'
				| 'PH-BUL'
				| 'PH-CAG'
				| 'PH-CAN'
				| 'PH-CAS'
				| 'PH-CAM'
				| 'PH-CAP'
				| 'PH-CAT'
				| 'PH-CAV'
				| 'PH-CEB'
				| 'PH-NCO'
				| 'PH-DAO'
				| 'PH-DAV'
				| 'PH-DAS'
				| 'PH-EAS'
				| 'PH-GUI'
				| 'PH-IFU'
				| 'PH-ILN'
				| 'PH-ILS'
				| 'PH-ILI'
				| 'PH-ISA'
				| 'PH-KAL'
				| 'PH-LUN'
				| 'PH-LAG'
				| 'PH-LAN'
				| 'PH-LAS'
				| 'PH-LEY'
				| 'PH-MAG'
				| 'PH-MAD'
				| 'PH-MAS'
				| 'PH-00'
				| 'PH-MSC'
				| 'PH-MSR'
				| 'PH-MOU'
				| 'PH-NEC'
				| 'PH-NER'
				| 'PH-NSA'
				| 'PH-NUE'
				| 'PH-NUV'
				| 'PH-MDC'
				| 'PH-MDR'
				| 'PH-PLW'
				| 'PH-PAM'
				| 'PH-PAN'
				| 'PH-QUE'
				| 'PH-QUI'
				| 'PH-RIZ'
				| 'PH-ROM'
				| 'PH-WSA'
				| 'PH-SAR'
				| 'PH-SIG'
				| 'PH-SOR'
				| 'PH-SCO'
				| 'PH-SLE'
				| 'PH-SUK'
				| 'PH-SLU'
				| 'PH-SUN'
				| 'PH-SUR'
				| 'PH-TAR'
				| 'PH-TAW'
				| 'PH-ZMB'
				| 'PH-ZAN'
				| 'PH-ZAS'
				| 'PH-ZSI'
				| 'PT-20'
				| 'PT-01'
				| 'PT-02'
				| 'PT-03'
				| 'PT-04'
				| 'PT-05'
				| 'PT-06'
				| 'PT-07'
				| 'PT-08'
				| 'PT-09'
				| 'PT-10'
				| 'PT-11'
				| 'PT-30'
				| 'PT-12'
				| 'PT-13'
				| 'PT-14'
				| 'PT-15'
				| 'PT-16'
				| 'PT-17'
				| 'PT-18'
				| 'AB'
				| 'AR'
				| 'AG'
				| 'BC'
				| 'BH'
				| 'BN'
				| 'BT'
				| 'BR'
				| 'BV'
				| 'B'
				| 'BZ'
				| 'CL'
				| 'CS'
				| 'CJ'
				| 'CT'
				| 'CV'
				| 'DB'
				| 'DJ'
				| 'GL'
				| 'GR'
				| 'GJ'
				| 'HR'
				| 'HD'
				| 'IL'
				| 'IS'
				| 'IF'
				| 'MM'
				| 'MH'
				| 'MS'
				| 'NT'
				| 'OT'
				| 'PH'
				| 'SJ'
				| 'SM'
				| 'SB'
				| 'SV'
				| 'TR'
				| 'TM'
				| 'TL'
				| 'VL'
				| 'VS'
				| 'VN'
				| 'KR-26'
				| 'KR-43'
				| 'KR-44'
				| 'KR-27'
				| 'KR-30'
				| 'KR-42'
				| 'KR-29'
				| 'KR-47'
				| 'KR-41'
				| 'KR-48'
				| 'KR-28'
				| 'KR-49'
				| 'KR-45'
				| 'KR-46'
				| 'KR-50'
				| 'KR-11'
				| 'KR-31'
				| 'C'
				| 'VI'
				| 'AB'
				| 'A'
				| 'AL'
				| 'O'
				| 'AV'
				| 'BA'
				| 'PM'
				| 'B'
				| 'BU'
				| 'CC'
				| 'CA'
				| 'S'
				| 'CS'
				| 'CE'
				| 'CR'
				| 'CO'
				| 'CU'
				| 'GI'
				| 'GR'
				| 'GU'
				| 'SS'
				| 'H'
				| 'HU'
				| 'J'
				| 'LO'
				| 'GC'
				| 'LE'
				| 'L'
				| 'LU'
				| 'M'
				| 'MA'
				| 'ML'
				| 'MU'
				| 'NA'
				| 'OR'
				| 'P'
				| 'PO'
				| 'SA'
				| 'TF'
				| 'SG'
				| 'SE'
				| 'SO'
				| 'T'
				| 'TE'
				| 'TO'
				| 'V'
				| 'VA'
				| 'BI'
				| 'ZA'
				| 'Z'
				| 'AZ'
				| 'AJ'
				| 'DU'
				| 'FU'
				| 'RK'
				| 'SH'
				| 'UQ'
				| 'BFP'
				| 'ENG'
				| 'NIR'
				| 'SCT'
				| 'WLS'
				| 'AR'
				| 'CA'
				| 'CL'
				| 'CO'
				| 'DU'
				| 'FS'
				| 'FD'
				| 'LA'
				| 'MA'
				| 'MO'
				| 'PA'
				| 'RN'
				| 'RV'
				| 'RO'
				| 'SA'
				| 'SJ'
				| 'SO'
				| 'TA'
				| 'TT'
			/**
			 * @description Street address line 1
			 * @example Street 1
			 */
			street1: string
			/**
			 * @description Street address line 2
			 * @example Street 2
			 */
			street2?: string
			/**
			 * @description Zip code
			 * @example 674561
			 */
			zip: string
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
		UpdateShippingCarrierDto: {
			/**
			 * @description The seller can choose multiple services while creating shipping rates if this is true.
			 * @example true
			 */
			allowsMultipleServiceSelection?: boolean
			/**
			 * @description Location Id or Agency Id
			 * @example 6578278e879ad2646715ba9c
			 */
			altId?: string
			/** @enum {string} */
			altType?: 'location'
			/**
			 * @description The URL endpoint that GHL needs to retrieve shipping rates. This must be a public URL.
			 * @example https://example.com/get-shipping-rates
			 */
			callbackUrl?: string
			/**
			 * @description Name of the shipping carrier
			 * @example FedEx
			 */
			name?: string
			/** @description An array of available shipping carrier services */
			services?: components['schemas']['ShippingCarrierServiceDto'][]
		}
		UpdateShippingCarrierResponseDto: {
			/** @description Shipping carrier data */
			data: components['schemas']['ShippingCarrierSchema']
			/**
			 * @description Success message
			 * @example Successfully created
			 */
			message?: string
			/**
			 * @description Status of api action
			 * @example true
			 */
			status: boolean
		}
		UpdateShippingRateDto: {
			/**
			 * @description Location Id or Agency Id
			 * @example 6578278e879ad2646715ba9c
			 */
			altId?: string
			/** @enum {string} */
			altType?: 'location'
			/**
			 * @description The amount of the shipping rate if it is normal rate (0 means free ). Fixed Handling fee if it is a carrier rate (it will add to the carrier rate).
			 * @example 99.99
			 */
			amount?: number
			/**
			 * @description Type of condition to provide the conditional pricing
			 * @example price
			 * @enum {string}
			 */
			conditionType?: 'none' | 'price' | 'weight'
			/**
			 * @description The currency of the amount of the rate / handling fee
			 * @example USD
			 */
			currency?: string
			/**
			 * @description Delivery description
			 * @example Ships next day
			 */
			description?: string
			/**
			 * @description is this a carrier rate
			 * @example true
			 */
			isCarrierRate?: boolean
			/**
			 * @description Maximum condition for applying this price. set 0 or null if there is no maximum
			 * @example 99.99
			 */
			maxCondition?: number
			/**
			 * @description Minimum condition for applying this price. set 0 or null if there is no minimum
			 * @example 99.99
			 */
			minCondition?: number
			/**
			 * @description Name of the shipping zone
			 * @example North zone
			 */
			name?: string
			/**
			 * @description Percentage of rate fee if it is a carrier rate.
			 * @example 10.99
			 */
			percentageOfRateFee?: number
			/**
			 * @description Shipping carrier id
			 * @example 655b33a82209e60b6adb87a5
			 */
			shippingCarrierId?: string
			/** @description An array of items */
			shippingCarrierServices?: components['schemas']['ShippingCarrierServiceDto'][]
		}
		UpdateShippingRateResponseDto: {
			/** @description Shipping zone data */
			data: components['schemas']['ShippingRateSchema']
			/**
			 * @description Success message
			 * @example Successfully created
			 */
			message?: string
			/**
			 * @description Status of api action
			 * @example true
			 */
			status: boolean
		}
		UpdateShippingZoneDto: {
			/**
			 * @description Location Id or Agency Id
			 * @example 6578278e879ad2646715ba9c
			 */
			altId?: string
			/** @enum {string} */
			altType?: 'location'
			/** @description List of countries that are available */
			countries?: components['schemas']['ShippingZoneCountryDto'][]
			/**
			 * @description Name of the shipping zone
			 * @example North zone
			 */
			name?: string
		}
		UpdateShippingZoneResponseDto: {
			/** @description Shipping zone data */
			data: components['schemas']['ShippingZoneSchema']
			/**
			 * @description Success message
			 * @example Successfully created
			 */
			message?: string
			/**
			 * @description Status of api action
			 * @example true
			 */
			status: boolean
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
	'list-shipping-carriers': {
		parameters: {
			query: {
				/** @description Location Id or Agency Id */
				altId: string
				altType: 'location'
			}
			header: {
				/** @description Access Token */
				Authorization: string
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
					'application/json': components['schemas']['ListShippingCarrierResponseDto']
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
	'create-shipping-carrier': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
			}
			path?: never
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['CreateShippingCarrierDto']
			}
		}
		responses: {
			/** @description Successful response */
			201: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['CreateShippingCarrierResponseDto']
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
	'get-shipping-carriers': {
		parameters: {
			query: {
				/** @description Location Id or Agency Id */
				altId: string
				altType: 'location'
			}
			header: {
				/** @description Access Token */
				Authorization: string
			}
			path: {
				/** @description ID of the shipping carrier that needs to be returned */
				shippingCarrierId: string
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
					'application/json': components['schemas']['GetShippingCarrierResponseDto']
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
	'update-shipping-carrier': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
			}
			path: {
				/** @description ID of the shipping carrier that needs to be returned */
				shippingCarrierId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['UpdateShippingCarrierDto']
			}
		}
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UpdateShippingCarrierResponseDto']
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
	'delete-shipping-carrier': {
		parameters: {
			query: {
				/** @description Location Id or Agency Id */
				altId: string
				altType: 'location'
			}
			header: {
				/** @description Access Token */
				Authorization: string
			}
			path: {
				/** @description ID of the shipping carrier that needs to be returned */
				shippingCarrierId: string
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
					'application/json': components['schemas']['DeleteShippingCarrierResponseDto']
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
	'list-shipping-zones': {
		parameters: {
			query: {
				/** @description Location Id or Agency Id */
				altId: string
				altType: 'location'
				/** @description The maximum number of items to be included in a single page of results */
				limit?: number
				/** @description The starting index of the page, indicating the position from which the results should be retrieved. */
				offset?: number
				/** @description Include shipping rates array */
				withShippingRate?: boolean
			}
			header: {
				/** @description Access Token */
				Authorization: string
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
					'application/json': components['schemas']['ListShippingZoneResponseDto']
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
	'create-shipping-zone': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
			}
			path?: never
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['CreateShippingZoneDto']
			}
		}
		responses: {
			/** @description Successful response */
			201: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['CreateShippingZoneResponseDto']
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
	'get-shipping-zones': {
		parameters: {
			query: {
				/** @description Location Id or Agency Id */
				altId: string
				altType: 'location'
				/** @description Include shipping rates array */
				withShippingRate?: boolean
			}
			header: {
				/** @description Access Token */
				Authorization: string
			}
			path: {
				/** @description ID of the item that needs to be returned */
				shippingZoneId: string
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
					'application/json': components['schemas']['GetShippingZoneResponseDto']
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
	'update-shipping-zone': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
			}
			path: {
				/** @description ID of the item that needs to be returned */
				shippingZoneId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['UpdateShippingZoneDto']
			}
		}
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UpdateShippingZoneResponseDto']
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
	'delete-shipping-zone': {
		parameters: {
			query: {
				/** @description Location Id or Agency Id */
				altId: string
				altType: 'location'
			}
			header: {
				/** @description Access Token */
				Authorization: string
			}
			path: {
				/** @description ID of the item that needs to be returned */
				shippingZoneId: string
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
					'application/json': components['schemas']['DeleteShippingZoneResponseDto']
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
	'list-shipping-rates': {
		parameters: {
			query: {
				/** @description Location Id or Agency Id */
				altId: string
				altType: 'location'
				/** @description The maximum number of items to be included in a single page of results */
				limit?: number
				/** @description The starting index of the page, indicating the position from which the results should be retrieved. */
				offset?: number
			}
			header: {
				/** @description Access Token */
				Authorization: string
			}
			path: {
				/** @description ID of the item that needs to be returned */
				shippingZoneId: string
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
					'application/json': components['schemas']['ListShippingRateResponseDto']
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
	'create-shipping-rate': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
			}
			path: {
				/** @description ID of the item that needs to be returned */
				shippingZoneId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['CreateShippingRateDto']
			}
		}
		responses: {
			/** @description Successful response */
			201: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['CreateShippingRateResponseDto']
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
	'get-shipping-rates': {
		parameters: {
			query: {
				/** @description Location Id or Agency Id */
				altId: string
				altType: 'location'
			}
			header: {
				/** @description Access Token */
				Authorization: string
			}
			path: {
				/** @description ID of the shipping rate that needs to be returned */
				shippingRateId: string
				/** @description ID of the shipping zone */
				shippingZoneId: string
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
					'application/json': components['schemas']['GetShippingRateResponseDto']
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
	'update-shipping-rate': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
			}
			path: {
				/** @description ID of the shipping rate that needs to be returned */
				shippingRateId: string
				/** @description ID of the shipping zone */
				shippingZoneId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['UpdateShippingRateDto']
			}
		}
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UpdateShippingRateResponseDto']
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
	'delete-shipping-rate': {
		parameters: {
			query: {
				/** @description Location Id or Agency Id */
				altId: string
				altType: 'location'
			}
			header: {
				/** @description Access Token */
				Authorization: string
			}
			path: {
				/** @description ID of the shipping rate that needs to be returned */
				shippingRateId: string
				/** @description ID of the shipping zone */
				shippingZoneId: string
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
					'application/json': components['schemas']['DeleteShippingRateResponseDto']
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
	'get-available-shipping-zones': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
			}
			path?: never
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['GetAvailableShippingRates']
			}
		}
		responses: {
			/** @description Successful response */
			201: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['GetAvailableShippingRatesResponseDto']
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
	'get-store-settings': {
		parameters: {
			query: {
				/** @description Location Id or Agency Id */
				altId: string
				altType: 'location'
			}
			header: {
				/** @description Access Token */
				Authorization: string
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
					'application/json': components['schemas']['GetStoreSettingResponseDto']
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
	'create-store-setting': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
			}
			path?: never
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['CreateStoreSettingDto']
			}
		}
		responses: {
			/** @description Successful response */
			201: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['CreateStoreSettingResponseDto']
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
