export interface paths {
	'/objects/': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get all objects for a location
		 * @description Get all objects for a location. Supported Objects are contact, opportunity, business and custom objects.To understand objects and records, please have a look at the documentation here : https://doc.clickup.com/8631005/d/h/87cpx-277156/93bf0c2e23177b0
		 */
		get: operations['get-object-by-location-id']
		put?: never
		/**
		 * Create Custom Object
		 * @description Allows you to create a custom object schema. To understand objects and records, please have a look at the documentation here : https://doc.clickup.com/8631005/d/h/87cpx-277156/93bf0c2e23177b0
		 */
		post: operations['create-custom-object-schema']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/objects/{key}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get Object Schema by key / id
		 * @description Retrieve Object Schema by key or ID. This will return the schema of the custom object, including all its fields and properties. Supported objects include contact, opportunity, business and custom objects.To understand objects and records, please have a look the documentation here : https://doc.clickup.com/8631005/d/h/87cpx-277156/93bf0c2e23177b0
		 */
		get: operations['get-object-schema-by-key']
		/**
		 * Update Object Schema By Key / Id
		 * @description Update Custom Object Schema  or standard object's like contact, opportunity, business searchable fields. To understand objects and records, please have a look at the documentation here : https://doc.clickup.com/8631005/d/h/87cpx-277156/93bf0c2e23177b0
		 */
		put: operations['update-custom-object']
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/objects/{schemaKey}/records': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Create Record
		 * @description Create a Custom Object Record. Supported Objects business and custom objects. Documentation Link - https://doc.clickup.com/8631005/d/h/87cpx-277156/93bf0c2e23177b0/87cpx-376296
		 */
		post: operations['create-object-record']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/objects/{schemaKey}/records/{id}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get Record By Id
		 * @description Allows you to get a Standard Object like business and custom object record by Id
		 */
		get: operations['get-record-by-id']
		/**
		 * Update Record
		 * @description Update a Custom Object Record by Id. Supported Objects are business and custom objects. Documentation Link - https://doc.clickup.com/8631005/d/h/87cpx-277156/93bf0c2e23177b0/87cpx-376296
		 */
		put: operations['update-object-record']
		post?: never
		/**
		 * Delete Record
		 * @description Delete Record By Id . Supported Objects are business and custom objects.
		 */
		delete: operations['delete-object-record']
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/objects/{schemaKey}/records/search': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Search Object Records
		 * @description Supported Objects are custom objects and standard objects like "business". Documentation Link - https://doc.clickup.com/8631005/d/h/87cpx-277156/93bf0c2e23177b0/87cpx-379336
		 */
		post: operations['search-object-records']
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
		CreateCustomObjectRecordDto: Record<string, never>
		CreateCustomObjectSchemaDTO: {
			/**
			 * @description Pet Object`s description
			 * @example These are non vaccinated pets
			 */
			description?: string
			/**
			 * @description key that would be used to refer the Custom Object internally (lowercase + underscore_separated). 'custom_objects.' would be added as prefix by default
			 * @example custom_objects.pet
			 */
			key: string
			/**
			 * @description This is what your custom object will be called. These labels will be used to display your custom object on the UI
			 * @example {
			 *       "singular": "Pet",
			 *       "plural": "Pets"
			 *     }
			 */
			labels: components['schemas']['CustomObjectLabelDto']
			/**
			 * @description Location Id
			 * @example ve9EPM428h8vShlRW1KT
			 */
			locationId: string
			/** @description Primary property which will be displayed on the record page */
			primaryDisplayPropertyDetails: components['schemas']['CustomObjectDisplayPropertyDetails']
		}
		CreatedByResponseDTO: {
			/**
			 * @description Creation Channel
			 * @example WEB_USER
			 */
			channel: string
			/**
			 * @description Created At
			 * @example 2025-01-02T09:35:39.032Z
			 */
			createdAt: string
			/**
			 * @description From where the record was created
			 * @example PUBLIC_API
			 */
			source: string
			/**
			 * @description User/Resource Id
			 * @example 26653146-ec82-435d-8a99-84ecdb7fde13
			 */
			sourceId: string
		}
		CustomObjectByIdResponseDTO: {
			/**
			 * @description Is the response served from cache
			 * @example true
			 */
			cache: boolean
			fields?: components['schemas']['ICustomField'][]
			object?: components['schemas']['ICustomObjectSchema']
		}
		CustomObjectDisplayPropertyDetails: {
			/**
			 * @description Primary property data Type (it can either be TEXT or NUMERICAL type)
			 * @example TEXT
			 */
			dataType: string
			/**
			 * @description key that would be used to refer the custom field internally (lowercase + underscore_separated). 'custom_objects.{{objectKey}}' would be added as prefix by default is not passed
			 * @example custom_objects.pet.name
			 */
			key: string
			/**
			 * @description Name of the Primary property name which will be displayed on the record page
			 * @example Pet name
			 */
			name: string
		}
		CustomObjectLabelDto: {
			/**
			 * @description Plural name of the custom object
			 * @example Pets
			 */
			plural: string
			/**
			 * @description Singular name of the custom object
			 * @example Pet
			 */
			singular: string
		}
		CustomObjectLabelUpdateDto: {
			/**
			 * @description Plural name of the custom object
			 * @example Cars
			 */
			plural?: string
			/**
			 * @description Singular name of the custom object
			 * @example Car
			 */
			singular?: string
		}
		CustomObjectListResponseDTO: {
			objects?: components['schemas']['ICustomObjectSchema'][]
		}
		CustomObjectResponseDTO: {
			object?: components['schemas']['ICustomObjectSchema']
		}
		ICustomField: {
			/**
			 * @description Allowed file formats for uploads. Options include: .pdf, .docx, .doc, .jpg, .jpeg, .png, .gif, .csv, .xlsx, .xls, all
			 * @enum {string}
			 */
			acceptedFormats?:
				| '.pdf'
				| '.docx'
				| '.doc'
				| '.jpg'
				| '.jpeg'
				| '.png'
				| '.gif'
				| '.csv'
				| '.xlsx'
				| '.xls'
				| 'all'
			/**
			 * @description Determines if users can add a custom option value different from the predefined options in records for RADIO type fields. A custom value added in one record does not automatically become an option and will not appear as an option for other records.
			 * @example true
			 */
			allowCustomOption?: boolean
			/**
			 * @description Type of field that you are trying to create
			 * @enum {string}
			 */
			dataType:
				| 'TEXT'
				| 'LARGE_TEXT'
				| 'NUMERICAL'
				| 'PHONE'
				| 'MONETORY'
				| 'CHECKBOX'
				| 'SINGLE_OPTIONS'
				| 'MULTIPLE_OPTIONS'
				| 'DATE'
				| 'TEXTBOX_LIST'
				| 'FILE_UPLOAD'
				| 'RADIO'
			/**
			 * Format: date-time
			 * @description Date and time when the object was added
			 */
			dateAdded: string
			/**
			 * Format: date-time
			 * @description Date and time when the object was last updated
			 */
			dateUpdated: string
			/** @description Description of the field */
			description?: string
			/**
			 * @description Field key. For Custom Object it's formatted as "custom_object.{objectKey}.{fieldKey}". "custom_object" is a fixed prefix, "{objectKey}" is your custom object's identifier, and "{fieldName}" is the unique field name within that object. Example: "custom_object.pet.name" for a "name" field in a "pet" custom object.
			 * @example custom_object.pet.name
			 */
			fieldKey: string
			/** @description Unique identifier of the object */
			id: string
			/**
			 * @description Location Id
			 * @example ve9EPM428h8vShlRW1KT
			 */
			locationId: string
			/**
			 * @description Maximum file limit for uploads
			 * @example 2
			 */
			maxFileLimit?: number
			/**
			 * @description Field name
			 * @example Name
			 */
			name?: string
			/**
			 * @description The key for your custom / standard object. This key uniquely identifies the custom object. Example: "custom_object.pet" for a custom object related to pets.
			 * @example custom_object.pet
			 */
			objectKey: string
			/** @description Options for the field (Optional, valid only for SINGLE_OPTIONS, MULTIPLE_OPTIONS, RADIO, CHECKBOX, TEXTBOX_LIST type) */
			options?: components['schemas']['OptionDTO'][]
			/**
			 * @description ID of the parent folder
			 * @example 3v34PM428h8vShlRW1KT
			 */
			parentId: string
			/** @description Placeholder text for the field */
			placeholder?: string
			/** @description Whether the field should be shown in forms */
			showInForms: boolean
		}
		ICustomObjectSchema: {
			/**
			 * Format: date-time
			 * @description Date and time when the object was added
			 */
			dateAdded: string
			/**
			 * Format: date-time
			 * @description Date and time when the object was last updated
			 */
			dateUpdated: string
			/**
			 * @description Custom / Standard  Object Descriptions for example , Pet Object`s description
			 * @example These are non vaccinated pets
			 */
			description?: string
			/**
			 * @description id of the custom / standard object schema
			 * @example 661c06b4ffde146bdb469442
			 */
			id: string
			/**
			 * @description key that would be used to refer the custom / standard Object internally (lowercase + underscore_separated). For custom objects, 'custom_objects.' would be added as prefix by default
			 * @example custom_objects.pet
			 */
			key: string
			/**
			 * @description This is what your custom / standard  object will be called. These labels will be used to display your custom object on the UI
			 * @example {
			 *       "singular": "Pet",
			 *       "plural": "Pets"
			 *     }
			 */
			labels: components['schemas']['CustomObjectLabelDto']
			/**
			 * @description location's id
			 * @example Q9DT3OAqEXDLYuob1G32
			 */
			locationId: string
			/**
			 * @description Primary property for the custom / standard  Object. This would be used as primary data when rendering the UI. 'custom_objects.{{object_key}} or business.{{object_key}} (for company)' would be added as prefix by default for all the custom / standard objects
			 * @example custom_objects.pet.name
			 */
			primaryDisplayProperty: string
			/**
			 * @description false in case of custom objects and true in case of standard objects like contacts and opportunities
			 * @example false
			 */
			standard: boolean
			/**
			 * @description Object`s Type
			 * @example The Object type can either USER_DEFINED or SYSTEM_DEFINED
			 */
			type?: Record<string, never>
		}
		IRecordSchema: {
			/**
			 * Format: date-time
			 * @description Date and time when the object was added
			 */
			dateAdded: string
			/**
			 * Format: date-time
			 * @description Date and time when the object was last updated
			 */
			dateUpdated: string
			/**
			 * @description Follower (User's ids). Limited to 10 for now
			 * @example [
			 *       "sx6wyHhbFdRXh302Lunr",
			 *       "v5cEPM428h8vShlRW1KT"
			 *     ]
			 */
			followers: string[]
			/**
			 * @description id of the record
			 * @example 661c06b4ffde146bdb469442
			 */
			id: string
			/**
			 * @description Owner (User's id). Limited to 1 for now. Only Supported with custom objects
			 * @example [
			 *       "sx6wyHhbFdRXh302Lunr"
			 *     ]
			 */
			owner: string[]
			/**
			 * @description Properties of the record
			 * @example {
			 *       "customer_number": 1424,
			 *       "ticket_name": "Customer not able login",
			 *       "phone_number": "+917000000000",
			 *       "money": {
			 *         "currency": "default",
			 *         "value": 100
			 *       },
			 *       "type_of_ticket": "doubt",
			 *       "section_of_app": [
			 *         "contacts",
			 *         "smartlist"
			 *       ],
			 *       "recieved_on": "2024-07-11",
			 *       "my_files": [
			 *         {
			 *           "url": "---url_of_file---"
			 *         }
			 *       ],
			 *       "my_textbox_list.option_a": "Value 1",
			 *       "my_textbox_list.option_b": "Value 2"
			 *     }
			 */
			properties: string
		}
		ObjectRecordDeleteResponseDTO: {
			/**
			 * @description id of the deleted object
			 * @example 661c06b4ffde146bdb469442
			 */
			id?: string
			/**
			 * @description boolean that defines if the operation was a success or not
			 * @example true
			 */
			success?: boolean
		}
		OptionDTO: {
			/** @description Key of the option (Included in Create and Response, excluded in Update) */
			key: string
			/** @description Value of the option */
			label: string
			/** @description URL associated with the option (Optional, valid only for RADIO type) */
			url?: string
		}
		RecordByIdResponseDTO: {
			record?: components['schemas']['IRecordSchema']
		}
		RecordResponseDTO: {
			/**
			 * Format: date-time
			 * @description Date and time when the object was added
			 */
			createdAt: string
			/** @description Created By Meta */
			createdBy: components['schemas']['CreatedByResponseDTO']
			/**
			 * @description Follower (User's ids). Limited to 10 and supported for custom objects for now
			 * @example [
			 *       "sx6wyHhbFdRXh302Lunr",
			 *       "v5cEPM428h8vShlRW1KT"
			 *     ]
			 */
			followers: string[]
			/**
			 * @description id of the record
			 * @example 661c06b4ffde146bdb469442
			 */
			id: string
			/** @description Last Updated By Meta */
			lastUpdatedBy: components['schemas']['CreatedByResponseDTO']
			/**
			 * @description Location Id
			 * @example ve9EPM428h8vShlRW1KT
			 */
			locationId: string
			/**
			 * @description ObjectId Id
			 * @example 6d6f6e676f5f6576656e7473
			 */
			objectId: string
			/**
			 * @description ObjectId key
			 * @example custom_objects.pet
			 */
			objectKey: string
			/**
			 * @description Owner (User's id). Limited to 1 for now . Only supported for custom objects for now
			 * @example [
			 *       "sx6wyHhbFdRXh302Lunr"
			 *     ]
			 */
			owner: string[]
			/**
			 * @description Properties of the record
			 * @example {
			 *       "customer_number": 1424,
			 *       "ticket_name": "Customer not able login",
			 *       "phone_number": "+917000000000",
			 *       "money": {
			 *         "currency": "default",
			 *         "value": 100
			 *       },
			 *       "type_of_ticket": "doubt",
			 *       "section_of_app": [
			 *         "contacts",
			 *         "smartlist"
			 *       ],
			 *       "recieved_on": "2024-07-11",
			 *       "my_files": [
			 *         {
			 *           "url": "---url_of_file---"
			 *         }
			 *       ],
			 *       "my_textbox_list.option_a": "Value 1",
			 *       "my_textbox_list.option_b": "Value 2"
			 *     }
			 */
			properties: string
			/**
			 * @example [
			 *       1738683828372,
			 *       "67a235b49b289431bcf657f8"
			 *     ]
			 */
			searchAfter: number[]
			/**
			 * Format: date-time
			 * @description Date and time when the object was last updated
			 */
			updatedAt: string
		}
		SearchRecordResponseDTO: {
			/** @description Records */
			records?: components['schemas']['RecordResponseDTO'][]
			/**
			 * @description Total Number of records
			 * @example 20
			 */
			total: number
		}
		SearchRecordsBody: {
			/**
			 * @description Location Id
			 * @example ve9EPM428h8vShlRW1KT
			 */
			locationId: string
			/**
			 * @description Page
			 * @example 1
			 */
			page: number
			/**
			 * @description Page Limit
			 * @example 10
			 */
			pageLimit: number
			/**
			 * @description Pass this query parameter to search using your searchable properties. For example, if you have a custom object called “Pets” and have configured “name” as a searchable property, you can pass name:Buddy to search for pets with the name “Buddy.”
			 * @example Buddy
			 */
			query: string
			/**
			 * @example [
			 *       "sx6wyHhbFdRXh302Lunr",
			 *       "sx6wyHhbFdRXh302Lunr"
			 *     ]
			 */
			searchAfter: string[]
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
		UpdateCustomObjectRecordDto: Record<string, never>
		UpdateCustomObjectSchemaDTO: {
			/**
			 * @description Pet Object`s description
			 * @example These are non vaccinated pets
			 */
			description?: string | null
			/**
			 * @description This is how your custom object will  be  displayed
			 * @example {
			 *       "singular": "Pet",
			 *       "plural": "Pets"
			 *     }
			 */
			labels?: components['schemas']['CustomObjectLabelUpdateDto']
			/**
			 * @description location id
			 * @example 632c34b4c9b7da3358ac9891
			 */
			locationId: string
			/**
			 * @description Searchable Fields: Provide the field key of your object that you want to search on, using the format (custom_object.<object_name>.<field_key>).
			 * @example [
			 *       "custom_objects.mad.mad",
			 *       "custom_objects.mad.record_1",
			 *       "custom_objects.mad.nn"
			 *     ]
			 */
			searchableProperties: string[]
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
	'get-object-by-location-id': {
		parameters: {
			query: {
				/** @description location id */
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
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['CustomObjectListResponseDTO']
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
	'create-custom-object-schema': {
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
				'application/json': components['schemas']['CreateCustomObjectSchemaDTO']
			}
		}
		responses: {
			/** @description Successful response */
			201: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['CustomObjectResponseDTO']
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
	'get-object-schema-by-key': {
		parameters: {
			query: {
				/** @description Fetch Properties , Fetches all the standard / custom fields of the object when set to true */
				fetchProperties?: string
				/** @description location id of the sub account */
				locationId: string
			}
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description key of the custom or standard object. For custom objects, the key must include the prefix “custom_objects.”. This key can be found on the Object Details page under Settings in the UI. */
				key: string
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
					'application/json': components['schemas']['CustomObjectByIdResponseDTO']
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
	'update-custom-object': {
		parameters: {
			query?: never
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description key of the custom or standard object. For custom objects, the key must include the prefix “custom_objects.”. This key can be found on the Object Details page under Settings in the UI. */
				key: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['UpdateCustomObjectSchemaDTO']
			}
		}
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['CustomObjectResponseDTO']
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
	'create-object-record': {
		parameters: {
			query?: never
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description The key of the Custom Object / Standard Object Schema. For custom objects, the key must include the “custom_objects.” prefix, while standard objects use their respective object keys. This information is available on the Custom Objects Details page under Settings. */
				schemaKey: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['CreateCustomObjectRecordDto']
			}
		}
		responses: {
			/** @description Successful response */
			201: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['RecordByIdResponseDTO']
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
	'get-record-by-id': {
		parameters: {
			query?: never
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description id of the record to be updated. Available on the Record details page under the 3 dots or in the url */
				id: string
				/** @description The key of the Custom Object / Standard Object Schema. For custom objects, the key must include the “custom_objects.” prefix, while standard objects use their respective object keys. This information is available on the Custom Objects Details page under Settings. */
				schemaKey: string
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
					'application/json': components['schemas']['RecordByIdResponseDTO']
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
	'update-object-record': {
		parameters: {
			query: {
				locationId: string
			}
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description id of the record to be updated. Available on the Record details page under the 3 dots or in the url */
				id: string
				/** @description The key of the Custom Object / Standard Object Schema. For custom objects, the key must include the “custom_objects.” prefix, while standard objects use their respective object keys. This information is available on the Custom Objects Details page under Settings. */
				schemaKey: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['UpdateCustomObjectRecordDto']
			}
		}
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['RecordByIdResponseDTO']
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
	'delete-object-record': {
		parameters: {
			query?: never
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description id of the record to be updated. Available on the Record details page under the 3 dots or in the url */
				id: string
				/** @description The key of the Custom Object / Standard Object Schema. For custom objects, the key must include the “custom_objects.” prefix, while standard objects use their respective object keys. This information is available on the Custom Objects Details page under Settings. */
				schemaKey: string
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
					'application/json': components['schemas']['ObjectRecordDeleteResponseDTO']
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
	'search-object-records': {
		parameters: {
			query?: never
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description custom object key */
				schemaKey: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['SearchRecordsBody']
			}
		}
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['SearchRecordResponseDTO']
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
