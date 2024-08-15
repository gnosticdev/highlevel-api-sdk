export interface paths {
	'/opportunities/search': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Search Opportunity
		 * @description Search Opportunity
		 */
		get: operations['search-opportunity']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/opportunities/pipelines': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get Pipelines
		 * @description Get Pipelines
		 */
		get: operations['get-pipelines']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/opportunities/{id}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get Opportunity
		 * @description Get Opportunity
		 */
		get: operations['get-opportunity']
		/**
		 * Update Opportunity
		 * @description Update Opportunity
		 */
		put: operations['update-opportunity']
		post?: never
		/**
		 * Delete Opportunity
		 * @description Delete Opportunity
		 */
		delete: operations['delete-opportunity']
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/opportunities/{id}/status': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		/**
		 * Update Opportunity Status
		 * @description Update Opportunity Status
		 */
		put: operations['update-opportunity-status']
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/opportunities/upsert': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Upsert Opportunity
		 * @description Upsert Opportunity
		 */
		post: operations['Upsert-opportunity']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/opportunities': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Create Opportunity
		 * @description Create Opportunity
		 */
		post: operations['create-opportunity']
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
		SearchOpportunitiesContactResponseSchema: {
			/** @example byMEV0NQinDhq8ZfiOi2 */
			id?: string
			/** @example John Deo */
			name?: string
			/** @example Tesla Inc */
			companyName?: string
			/** @example john@deo.com */
			email?: string
			/** @example +1202-555-0107 */
			phone?: string
			tags?: string[]
		}
		CustomFieldResponseSchema: {
			/** @example MgobCB14YMVKuE4Ka8p1 */
			id: string
			/** @description The value of the custom field */
			fieldValue:
				| string
				| Record<string, never>
				| string[]
				| Record<string, never>[]
		}
		SearchOpportunitiesResponseSchema: {
			/** @example yWQobCRIhRguQtD2llvk */
			id?: string
			/** @example testing */
			name?: string
			/** @example 500 */
			monetaryValue?: number
			/** @example VDm7RPYC2GLUvdpKmBfC */
			pipelineId?: string
			/** @example e93ba61a-53b3-45e7-985a-c7732dbcdb69 */
			pipelineStageId?: string
			/** @example zT46WSCPbudrq4zhWMk6 */
			assignedTo?: string
			/** @example open */
			status?: string
			/** @example  */
			source?: string
			/** @example 2021-08-03T04:55:17.355Z */
			lastStatusChangeAt?: string
			/** @example 2021-08-03T04:55:17.355Z */
			lastStageChangeAt?: string
			/** @example 2021-08-03T04:55:17.355Z */
			lastActionDate?: string
			/** @example 1 */
			indexVersion?: string
			/** @example 2021-08-03T04:55:17.355Z */
			createdAt?: string
			/** @example 2021-08-03T04:55:17.355Z */
			updatedAt?: string
			/** @example zT46WSCPbudrq4zhWMk6 */
			contactId?: string
			/** @example zT46WSCPbudrq4zhW */
			locationId?: string
			contact?: components['schemas']['SearchOpportunitiesContactResponseSchema']
			notes?: string[]
			tasks?: string[]
			calendarEvents?: string[]
			customFields?: components['schemas']['CustomFieldResponseSchema'][]
		}
		SearchMetaResponseSchema: {
			/** @example 1 */
			total?: number
			/** @example http://localhost:5066/opportunities/search?q=&location_id=ve9EPM428h8vShlRW1KT&pipeline_id=&pipeline_stage_id=&status=&assigned_to+=&campaignId=&id=&order=&endDate=&startAfter=1625203104328&startAfterId=yWQobCRIhRguQtD2llvk&date=&limit=1&country=&page=1 */
			nextPageUrl?: string
			/** @example yWQobCRIhRguQtD2llvk */
			startAfterId?: string
			/** @example 1625203104328 */
			startAfter?: number
			/** @example 2 */
			currentPage?: number
			/** @example 3 */
			nextPage?: number
			/** @example 1 */
			prevPage?: number
		}
		SearchSuccessfulResponseDto: {
			opportunities?: components['schemas']['SearchOpportunitiesResponseSchema'][]
			meta?: components['schemas']['SearchMetaResponseSchema']
			aggregations?: Record<string, never>
		}
		PipelinesResponseSchema: {
			/** @example aWdODOBVOlH1RUFKWQke */
			id?: string
			/** @example new pipeline */
			name?: string
			stages?: unknown[][]
			/** @example false */
			showInFunnel?: boolean
			/** @example true */
			showInPieChart?: boolean
			/** @example dsjddjkndadqaja */
			locationId?: string
		}
		GetPipelinesSuccessfulResponseDto: {
			pipelines?: components['schemas']['PipelinesResponseSchema'][]
		}
		GetPostOpportunitySuccessfulResponseDto: {
			opportunity?: components['schemas']['SearchOpportunitiesResponseSchema']
		}
		DeleteUpdateOpportunitySuccessfulResponseDto: {
			/** @example true */
			succeded?: boolean
		}
		UpdateStatusDto: {
			/** @enum {string} */
			status: 'open' | 'won' | 'lost' | 'abandoned' | 'all'
		}
		OppCustomFieldsInputArraySchema: {
			/** @example 6dvNaf7VhkQ9snc5vnjJ */
			id: string
			/** @example my_custom_field */
			key?: string
			/** @example [
			 *       "test",
			 *       "test2"
			 *     ] */
			field_value?: string[]
		}
		customFieldsInputObjectSchema: {
			/** @example 6dvNaf7VhkQ9snc5vnjJ */
			id: string
			/** @example my_custom_field */
			key?: string
			/** @example {} */
			field_value?: Record<string, never>
		}
		customFieldsInputStringSchema: {
			/**
			 * @description Pass either `id` or `key` of custom field
			 * @example 6dvNaf7VhkQ9snc5vnjJ
			 */
			id?: string
			/**
			 * @description Pass either `id` or `key` of custom field
			 * @example my_custom_field
			 */
			key?: string
			/** @example 9039160788 */
			field_value?: string
		}
		CreateDto: {
			/**
			 * @description pipeline Id
			 * @example VDm7RPYC2GLUvdpKmBfC
			 */
			pipelineId: string
			/** @example ve9EPM428h8vShlRW1KT */
			locationId: string
			/** @example First Opps */
			name: string
			/** @example 7915dedc-8f18-44d5-8bc3-77c04e994a10 */
			pipelineStageId?: string
			/** @enum {string} */
			status: 'open' | 'won' | 'lost' | 'abandoned' | 'all'
			/** @example mTkSCb1UBjb5tk4OvB69 */
			contactId: string
			/** @example 220 */
			monetaryValue?: number
			/** @example 082goXVW3lIExEQPOnd3 */
			assignedTo?: string
			/** @description Add custom fields to opportunities. */
			customFields?: (
				| components['schemas']['customFieldsInputStringSchema']
				| components['schemas']['OppCustomFieldsInputArraySchema']
				| components['schemas']['customFieldsInputObjectSchema']
			)[]
		}
		UpdateOpportunityDto: {
			/**
			 * @description pipeline Id
			 * @example bCkKGpDsyPP4peuKowkG
			 */
			pipelineId?: string
			/** @example First Opps */
			name?: string
			/** @example 7915dedc-8f18-44d5-8bc3-77c04e994a10 */
			pipelineStageId?: string
			/** @enum {string} */
			status?: 'open' | 'won' | 'lost' | 'abandoned' | 'all'
			/** @example 220 */
			monetaryValue?: number
			/** @example 082goXVW3lIExEQPOnd3 */
			assignedTo?: string
			/** @description Update custom fields to opportunities. */
			customFields?: (
				| components['schemas']['customFieldsInputStringSchema']
				| components['schemas']['OppCustomFieldsInputArraySchema']
				| components['schemas']['customFieldsInputObjectSchema']
			)[]
		}
		UpsertOpportunityDto: {
			/**
			 * @description pipeline Id
			 * @example bCkKGpDsyPP4peuKowkG
			 */
			pipelineId: string
			/**
			 * @description locationId
			 * @example CLu7BaljjqrEjBGKTNNe
			 */
			locationId: string
			/**
			 * @description contactId
			 * @example LiKJ2vnRg5ETM8Z19K7
			 */
			contactId: string
			/**
			 * @description name
			 * @example opportunity name
			 */
			name?: string
			/** @enum {string} */
			status?: 'open' | 'won' | 'lost' | 'abandoned' | 'all'
			/** @example 7915dedc-8f18-44d5-8bc3-77c04e994a10 */
			pipelineStageId?: string
			/** @example 220 */
			monetaryValue?: number
			/** @example 082goXVW3lIExEQPOnd3 */
			assignedTo?: string
		}
		UpsertOpportunitySuccessfulResponseDto: {
			/** @description Updated / New Opportunity */
			opportunity: Record<string, never>
			/** @example true */
			new: boolean
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
	'search-opportunity': {
		parameters: {
			query: {
				/** @example john@deo.com */
				q?: string
				/**
				 * @description Location Id
				 * @example i2SpAtBVHSVea1sL6oah
				 */
				location_id: string
				/**
				 * @description Pipeline Id
				 * @example bCkKGpDsyPP4peuKowkG
				 */
				pipeline_id?: string
				/**
				 * @description stage Id
				 * @example 7915dedc-8f18-44d5-8bc3-77c04e994a10
				 */
				pipeline_stage_id?: string
				/**
				 * @description Contact Id
				 * @example WFwVrSSjZ2CNHbZThQX2
				 */
				contact_id?: string
				status?: 'open' | 'won' | 'lost' | 'abandoned' | 'all'
				/** @example 082goXVW3lIExEQPOnd3 */
				assigned_to?: string
				/**
				 * @description Campaign Id
				 * @example Y2I9XM7aO1hncuSOlc9L
				 */
				campaignId?: string
				/**
				 * @description Opportunity Id
				 * @example 123akv4LFn6C9frZoy3e
				 */
				id?: string
				/** @example added_asc */
				order?: string
				/**
				 * @description End date
				 * @example mm-dd-yyyy
				 */
				endDate?: string
				/**
				 * @description Start After
				 * @example 1628008053263
				 */
				startAfter?: string
				/**
				 * @description Start After Id
				 * @example UIaE1WjAwWKdlyD7osQI
				 */
				startAfterId?: string
				/**
				 * @description Start date
				 * @example mm-dd-yyyy
				 */
				date?: string
				/** @example US */
				country?: string
				page?: number
				/** @description Limit Per Page records count. will allow maximum up to 100 and default will be 20 */
				limit?: number
				/**
				 * @description get Tasks in contact
				 * @example false
				 */
				getTasks?: boolean
				/**
				 * @description get Notes in contact
				 * @example false
				 */
				getNotes?: boolean
				/**
				 * @description get Calender event in contact
				 * @example false
				 */
				getCalendarEvents?: boolean
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
	'get-pipelines': {
		parameters: {
			query: {
				/** @example ve9EPM428h8vShlRW1KT */
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
					'application/json': components['schemas']['GetPipelinesSuccessfulResponseDto']
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
	'get-opportunity': {
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
				 * @description Opportunity Id
				 * @example yWQobCRIhRguQtD2llvk
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
					'application/json': components['schemas']['GetPostOpportunitySuccessfulResponseDto']
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
	'update-opportunity': {
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
				 * @description Opportunity Id
				 * @example yWQobCRIhRguQtD2llvk
				 */
				id: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['UpdateOpportunityDto']
			}
		}
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['GetPostOpportunitySuccessfulResponseDto']
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
	'delete-opportunity': {
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
				 * @description Opportunity Id
				 * @example yWQobCRIhRguQtD2llvk
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
					'application/json': components['schemas']['DeleteUpdateOpportunitySuccessfulResponseDto']
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
	'update-opportunity-status': {
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
				 * @description Opportunity Id
				 * @example yWQobCRIhRguQtD2llvk
				 */
				id: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['UpdateStatusDto']
			}
		}
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['DeleteUpdateOpportunitySuccessfulResponseDto']
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
	'Upsert-opportunity': {
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
				'application/json': components['schemas']['UpsertOpportunityDto']
			}
		}
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UpsertOpportunitySuccessfulResponseDto']
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
	'create-opportunity': {
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
				'application/json': components['schemas']['CreateDto']
			}
		}
		responses: {
			/** @description Successful response */
			201: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['GetPostOpportunitySuccessfulResponseDto']
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
