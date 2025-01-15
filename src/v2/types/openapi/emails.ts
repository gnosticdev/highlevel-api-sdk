export type paths = {
	'/emails/builder': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Fetch email templates
		 * @description Fetch email templates by location id
		 */
		get: operations['fetch-template']
		put?: never
		/**
		 * Create a new template
		 * @description Create a new template
		 */
		post: operations['create-template']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/emails/builder/{locationId}/{templateId}': {
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
		 * Delete a template
		 * @description Delete a template
		 */
		delete: operations['delete-template']
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/emails/builder/data': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Update a template
		 * @description Update a template
		 */
		post: operations['update-template']
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
		BuilderUpdateSuccessfulDTO: {
			/**
			 * @description ok
			 * @example true
			 */
			ok?: string
			/**
			 * @description preview url
			 * @example https://example.com
			 */
			previewUrl?: string
			/**
			 * @description template data download url
			 * @example https://example.com
			 */
			templateDownloadUrl?: string
			/**
			 * @description trace id
			 * @example 0c52e980-41f6-4be7-8c4b-32332ss
			 */
			traceId?: string
		}
		CreateBuilderDto: {
			/**
			 * @default 2
			 * @enum {string}
			 */
			builderVersion: '1' | '2'
			/** @example false */
			isPlainText?: boolean
			/** @example ve9EPM428h8vShlRW1KT */
			locationId: string
			/** @example template title */
			title?: string
			/** @enum {string} */
			type: 'html'
			/** @example zYy3YOUuHxgomU1uYJty */
			updatedBy?: string
		}
		CreateBuilderSuccesfulResponseDto: {
			/**
			 * @description template id
			 * @example 66e811229245fc098765590
			 */
			redirect: string
			/**
			 * @description trace id
			 * @example 0c52e980-41f6-4be7-8c4b-e2c5a13dc3c2
			 */
			traceId: string
		}
		DeleteBuilderSuccesfulResponseDto: {
			/**
			 * @description ok
			 * @example true
			 */
			ok?: string
			/**
			 * @description trace id
			 * @example 0c52e980-41f6-4be7-8c4b-32332ss
			 */
			traceId?: string
		}
		FetchBuilderSuccesfulResponseDto: {
			/**
			 * @description date added
			 * @example 2024-11-12T12:34:36.070Z
			 */
			dateAdded?: string
			/**
			 * @description id
			 * @example 67334b231f2fad724062f52b5
			 */
			id?: string
			/**
			 * @description plain text based template
			 * @example false
			 */
			isPlainText?: boolean
			/**
			 * @description last updated
			 * @example 2024-11-12T12:34:36.070Z
			 */
			lastUpdated?: string
			/**
			 * @description template name
			 * @example New Template
			 */
			name?: string
			/**
			 * @description preview url
			 * @example https://example.com
			 */
			previewUrl?: string
			/**
			 * @description type
			 * @example builder
			 */
			templateType?: string
			/**
			 * @description updated by
			 * @example John Doe
			 */
			updatedBy?: string
			/**
			 * @description version
			 * @example 1
			 */
			version?: string
		}
		IBuilderJsonMapper: {
			attrs: Record<string, never>
			elements: string[]
			templateSettings: components['schemas']['TemplateSettings']
		}
		SaveBuilderDataDto: {
			/**
			 * @description Provide {elements:[], attrs:{}, templateSettings:{}} for this parameter
			 * @example {elements:[], attrs:{}, templateSettings:{}}
			 */
			dnd: components['schemas']['IBuilderJsonMapper']
			/** @enum {string} */
			editorType: 'html'
			/** @example  */
			html: string
			/** @example ve9EPM428h8vShlRW1KT */
			locationId: string
			/** @example zYy3YOUuHxgomU1uYJty */
			templateId: string
			/** @example zYy3YOUuHxgomU1uYJty */
			updatedBy: string
		}
		TemplateSettings: Record<string, never>
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
	'fetch-template': {
		parameters: {
			query: {
				archived?: string
				builderVersion?: '1' | '2'
				/** @description Max limit 100 */
				limit?: string
				/** @example ve9EPM428h8vShlRW1KT */
				locationId: string
				name?: string
				offset?: string
				parentId?: string
				sortByDate?: string
				templatesOnly?: string
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
			/** @description Success */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['FetchBuilderSuccesfulResponseDto']
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
			/** @description Not Found */
			404: {
				headers: {
					[name: string]: unknown
				}
				content?: never
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
	'create-template': {
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
				'application/json': components['schemas']['CreateBuilderDto']
			}
		}
		responses: {
			/** @description Success */
			201: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['CreateBuilderSuccesfulResponseDto']
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
			/** @description Not Found */
			404: {
				headers: {
					[name: string]: unknown
				}
				content?: never
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
	'delete-template': {
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
				locationId: string
				/** @example zYy3YOUuHxgomU1uYJty */
				templateId: string
			}
			cookie?: never
		}
		requestBody?: never
		responses: {
			/** @description Success */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['DeleteBuilderSuccesfulResponseDto']
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
			/** @description Not Found */
			404: {
				headers: {
					[name: string]: unknown
				}
				content?: never
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
	'update-template': {
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
				'application/json': components['schemas']['SaveBuilderDataDto']
			}
		}
		responses: {
			/** @description Success */
			201: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BuilderUpdateSuccessfulDTO']
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
			/** @description Not Found */
			404: {
				headers: {
					[name: string]: unknown
				}
				content?: never
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
