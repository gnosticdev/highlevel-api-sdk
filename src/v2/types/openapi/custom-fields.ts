export interface paths {
	'/custom-fields/': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Create Custom Field
		 * @description <div>
		 *                       <p> Create Custom Field </p>
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
		 *                             Only supports Custom Objects and Company (Business) today. Will be extended to other Standard Objects in the future.
		 *                             </strong>
		 *                           </span>
		 *                       </div>
		 *                     </div>
		 */
		post: operations['create-custom-field']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/custom-fields/{id}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get Custom Field / Folder By Id
		 * @description <div>
		 *                       <p> Get Custom Field / Folder By Id.</p>
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
		 *                             Only supports Custom Objects and Company (Business) today. Will be extended to other Standard Objects in the future.
		 *                             </strong>
		 *                           </span>
		 *                       </div>
		 *                     </div>
		 */
		get: operations['get-custom-field-by-id']
		/**
		 * Update Custom Field By Id
		 * @description <div>
		 *         <p> Update Custom Field By Id </p>
		 *         <div>
		 *           <span style= "display: inline-block;
		 *                       width: 25px; height: 25px;
		 *                       background-color: yellow;
		 *                       color: black;
		 *                       font-weight: bold;
		 *                       font-size: 24px;
		 *                       text-align: center;
		 *                       line-height: 22px;
		 *                       border: 2px solid black;
		 *                       border-radius: 10%;
		 *                       margin-right: 10px;">
		 *                       !
		 *             </span>
		 *             <span>
		 *               <strong>
		 *               Only supports Custom Objects and Company (Business) today. Will be extended to other Standard Objects in the future.
		 *               </strong>
		 *             </span>
		 *         </div>
		 *       </div>
		 */
		put: operations['update-custom-field']
		post?: never
		/**
		 * Delete Custom Field By Id
		 * @description <div>
		 *         <p> Delete Custom Field By Id </p>
		 *         <div>
		 *           <span style= "display: inline-block;
		 *                       width: 25px; height: 25px;
		 *                       background-color: yellow;
		 *                       color: black;
		 *                       font-weight: bold;
		 *                       font-size: 24px;
		 *                       text-align: center;
		 *                       line-height: 22px;
		 *                       border: 2px solid black;
		 *                       border-radius: 10%;
		 *                       margin-right: 10px;">
		 *                       !
		 *             </span>
		 *             <span>
		 *               <strong>
		 *               Only supports Custom Objects and Company (Business) today. Will be extended to other Standard Objects in the future.
		 *               </strong>
		 *             </span>
		 *         </div>
		 *       </div>
		 */
		delete: operations['delete-custom-field']
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/custom-fields/folder': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Create Custom Field Folder
		 * @description <div>
		 *         <p> Create Custom Field Folder </p>
		 *         <div>
		 *           <span style= "display: inline-block;
		 *                       width: 25px; height: 25px;
		 *                       background-color: yellow;
		 *                       color: black;
		 *                       font-weight: bold;
		 *                       font-size: 24px;
		 *                       text-align: center;
		 *                       line-height: 22px;
		 *                       border: 2px solid black;
		 *                       border-radius: 10%;
		 *                       margin-right: 10px;">
		 *                       !
		 *             </span>
		 *             <span>
		 *               <strong>
		 *               Only supports Custom Objects and Company (Business) today. Will be extended to other Standard Objects in the future.
		 *               </strong>
		 *             </span>
		 *         </div>
		 *       </div>
		 */
		post: operations['create-custom-field-folder']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/custom-fields/folder/{id}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		/**
		 * Update Custom Field Folder Name
		 * @description <div>
		 *         <p> Create Custom Field Folder </p>
		 *         <div>
		 *           <span style= "display: inline-block;
		 *                       width: 25px; height: 25px;
		 *                       background-color: yellow;
		 *                       color: black;
		 *                       font-weight: bold;
		 *                       font-size: 24px;
		 *                       text-align: center;
		 *                       line-height: 22px;
		 *                       border: 2px solid black;
		 *                       border-radius: 10%;
		 *                       margin-right: 10px;">
		 *                       !
		 *             </span>
		 *             <span>
		 *               <strong>
		 *               Only supports Custom Objects and Company (Business) today. Will be extended to other Standard Objects in the future.
		 *               </strong>
		 *             </span>
		 *         </div>
		 *       </div>
		 */
		put: operations['update-custom-field-folder']
		post?: never
		/**
		 * Delete Custom Field Folder
		 * @description <div>
		 *         <p> Create Custom Field Folder </p>
		 *         <div>
		 *           <span style= "display: inline-block;
		 *                       width: 25px; height: 25px;
		 *                       background-color: yellow;
		 *                       color: black;
		 *                       font-weight: bold;
		 *                       font-size: 24px;
		 *                       text-align: center;
		 *                       line-height: 22px;
		 *                       border: 2px solid black;
		 *                       border-radius: 10%;
		 *                       margin-right: 10px;">
		 *                       !
		 *             </span>
		 *             <span>
		 *               <strong>
		 *               Only supports Custom Objects and Company (Business) today. Will be extended to other Standard Objects in the future.
		 *               </strong>
		 *             </span>
		 *         </div>
		 *       </div>
		 */
		delete: operations['delete-custom-field-folder']
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/custom-fields/object-key/{objectKey}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get Custom Fields By Object Key
		 * @description <div>
		 *                       <p> Get Custom Fields By Object Key</p>
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
		 *                             Only supports Custom Objects and Company (Business) today. Will be extended to other Standard Objects in the future.
		 *                             </strong>
		 *                           </span>
		 *                       </div>
		 *                     </div>
		 */
		get: operations['get-custom-fields-by-object-key']
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
		CreateCustomFieldsDTO: {
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
				| 'EMAIL'
			/** @description Description of the field */
			description?: string
			/**
			 * @description Field key. For Custom Object it's formatted as "custom_object.{objectKey}.{fieldKey}". "custom_object" is a fixed prefix, "{objectKey}" is your custom object's identifier, and "{fieldKey}" is the unique field name within that object. Example: "custom_object.pet.name" for a "name" field in a "pet" custom object.
			 * @example custom_object.pet.name
			 */
			fieldKey: string
			/**
			 * @description Location Id
			 * @example ve9EPM428h8vShlRW1KT
			 */
			locationId: string
			/**
			 * @description Maximum file limit for uploads. Applicable only for fields with a data type of FILE_UPLOAD.
			 * @example 2
			 */
			maxFileLimit?: number
			/**
			 * @description Field name
			 * @example Name
			 */
			name?: string
			/**
			 * @description The key for your custom object. This key uniquely identifies the custom object. Example: "custom_object.pet" for a custom object related to pets.
			 * @example custom_object.pet
			 */
			objectKey: string
			/** @description Options for the field (Optional, valid only for SINGLE_OPTIONS, MULTIPLE_OPTIONS, RADIO, CHECKBOX, TEXTBOX_LIST type) */
			options?: components['schemas']['OptionDTO'][]
			/** @description ID of the parent folder */
			parentId: string
			/** @description Placeholder text for the field */
			placeholder?: string
			/** @description Whether the field should be shown in forms */
			showInForms: boolean
		}
		CreateFolder: {
			/**
			 * @description Location Id
			 * @example ve9EPM428h8vShlRW1KT
			 */
			locationId: string
			/**
			 * @description Field name
			 * @example Name
			 */
			name: string
			/**
			 * @description The key for your custom object. This key uniquely identifies the custom object. Example: "custom_object.pet" for a custom object related to pets.
			 * @example custom_object.pet
			 */
			objectKey: string
		}
		CustomFieldsResponseDTO: {
			/** @description Custom Fields for the object. */
			fields?: components['schemas']['ICustomField'][]
			/** @description Custom Fields folder for the object. */
			folders?: components['schemas']['ICustomField'][]
		}
		CustomFieldSuccessfulResponseDto: {
			field?: components['schemas']['ICustomField']
		}
		CustomFolderDeleteResponseDto: {
			/** @example 3v34PM428h8vShlRW1KT */
			id: string
			/** @example custom_object.pet.name */
			key: string
			/** @example true */
			succeded: boolean
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
		ICustomFieldFolder: {
			/** @description Unique identifier of the object */
			id: string
			/**
			 * @description Location Id
			 * @example ve9EPM428h8vShlRW1KT
			 */
			locationId: string
			/**
			 * @description Field name
			 * @example Name
			 */
			name: string
			/**
			 * @description The key for your custom object. This key uniquely identifies the custom object. Example: "custom_object.pet" for a custom object related to pets.
			 * @example custom_object.pet
			 */
			objectKey: string
		}
		OptionDTO: {
			/** @description Key of the option (Included in Create and Response, excluded in Update) */
			key: string
			/** @description Value of the option */
			label: string
			/** @description URL associated with the option (Optional, valid only for RADIO type) */
			url?: string
		}
		UnauthorizedDTO: {
			/** @example Unauthorized */
			error?: string
			/** @example Invalid token: access token is invalid */
			message?: string
			/** @example 401 */
			statusCode?: number
		}
		UpdateCustomFieldsDTO: {
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
			/** @description Description of the field */
			description?: string
			/**
			 * @description Location Id
			 * @example ve9EPM428h8vShlRW1KT
			 */
			locationId: string
			/**
			 * @description Maximum file limit for uploads. Applicable only for fields with a data type of FILE_UPLOAD.
			 * @example 2
			 */
			maxFileLimit?: number
			/**
			 * @description Field name
			 * @example Name
			 */
			name?: string
			/** @description Options for the field. Important: Providing options will completely replace the existing options array. You must include all existing options alongside any new options you wish to add. Removal of options is not supported through this update. Applicable only for SINGLE_OPTIONS, MULTIPLE_OPTIONS, RADIO, CHECKBOX, TEXTBOX_LIST types. */
			options?: components['schemas']['OptionDTO'][]
			/** @description Placeholder text for the field */
			placeholder?: string
			/** @description Whether the field should be shown in forms */
			showInForms: boolean
		}
		UpdateFolder: {
			/**
			 * @description Location Id
			 * @example ve9EPM428h8vShlRW1KT
			 */
			locationId: string
			/**
			 * @description Field name
			 * @example Name
			 */
			name: string
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
	'create-custom-field': {
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
		}
	}
	'get-custom-field-by-id': {
		parameters: {
			query?: never
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
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
		}
	}
	'update-custom-field': {
		parameters: {
			query?: never
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
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
		}
	}
	'delete-custom-field': {
		parameters: {
			query?: never
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
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
					'application/json': components['schemas']['CustomFolderDeleteResponseDto']
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
	'create-custom-field-folder': {
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
				'application/json': components['schemas']['CreateFolder']
			}
		}
		responses: {
			/** @description Successful response */
			201: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['ICustomFieldFolder']
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
	'update-custom-field-folder': {
		parameters: {
			query?: never
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				id: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['UpdateFolder']
			}
		}
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['ICustomFieldFolder']
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
	'delete-custom-field-folder': {
		parameters: {
			query: {
				/** @description Location Id */
				locationId: string
			}
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
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
					'application/json': components['schemas']['CustomFolderDeleteResponseDto']
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
	'get-custom-fields-by-object-key': {
		parameters: {
			query: {
				/** @example Location Id */
				locationId: string
			}
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/**
				 * @description key of the Object. Must include "custom_objects." prefix for custom objects. Available on the Custom Objects details Page under settings
				 * @example custom_objects.pet
				 */
				objectKey: string
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
					'application/json': components['schemas']['CustomFieldsResponseDTO']
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
