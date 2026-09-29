export interface paths {
	'/opportunities/': {
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
	'/opportunities/{id}/followers': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Add Followers
		 * @description Add Followers
		 */
		post: operations['add-followers-opportunity']
		/**
		 * Remove Followers
		 * @description Allows removal of one or all followers from an opportunity.
		 */
		delete: operations['remove-followers-opportunity']
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
	'/opportunities/lost-reason': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get lost reason
		 * @description Get lost reason
		 */
		get: operations['get-lost-reason']
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
		/**
		 * Search Opportunities
		 * @description Search Opportunities based on combinations of advanced filters. Documentation Link - https://doc.clickup.com/8631005/d/h/87cpx-424216/7bf11bc9b94f80f
		 */
		post: operations['search-opportunities-advanced']
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
}
export type webhooks = Record<string, never>
export interface components {
	schemas: {
		AdditionalDetailsDTO: {
			calendarEvents: boolean
			notes: boolean
			tasks: boolean
			unReadConversations: boolean
		}
		BadRequestDTO: {
			/** @example Bad Request */
			message?: string
			/** @example 400 */
			statusCode?: number
		}
		CreateAddFollowersSuccessfulResponseDto: {
			/**
			 * @example [
			 *       "sx6wyHhbFdRXh302Lunr",
			 *       "sx6wyHhbFdRXh302LLss"
			 *     ]
			 */
			followers?: string[]
			/**
			 * @example [
			 *       "Mx6wyHhbFdRXh302Luer",
			 *       "Ka6wyHhbFdRXh302LLsAm"
			 *     ]
			 */
			followersAdded?: string[]
		}
		CreateDto: {
			/** @example 082goXVW3lIExEQPOnd3 */
			assignedTo?: string
			/** @example mTkSCb1UBjb5tk4OvB69 */
			contactId: string
			/** @description Add custom fields to opportunities. */
			customFields?: (
				| components['schemas']['customFieldsInputStringSchema']
				| components['schemas']['customFieldsInputArraySchema']
				| components['schemas']['customFieldsInputObjectSchema']
			)[]
			/** @example ve9EPM428h8vShlRW1KT */
			locationId: string
			/** @example 220 */
			monetaryValue?: number
			/** @example First Opps */
			name: string
			/**
			 * @description pipeline Id
			 * @example VDm7RPYC2GLUvdpKmBfC
			 */
			pipelineId: string
			/** @example 7915dedc-8f18-44d5-8bc3-77c04e994a10 */
			pipelineStageId?: string
			/** @enum {string} */
			status: 'open' | 'won' | 'lost' | 'abandoned' | 'all'
		}
		CustomFieldResponseSchema: {
			/** @description The value of the custom field */
			fieldValue:
				| string
				| Record<string, never>
				| string[]
				| Record<string, never>[]
			/** @example MgobCB14YMVKuE4Ka8p1 */
			id: string
		}
		customFieldsInputArraySchema: {
			/**
			 * @example [
			 *       "test",
			 *       "test2"
			 *     ]
			 */
			field_value?: string[]
			/** @example 6dvNaf7VhkQ9snc5vnjJ */
			id: string
			/** @example my_custom_field */
			key?: string
		}
		customFieldsInputObjectSchema: {
			/** @example {} */
			field_value?: Record<string, never>
			/** @example 6dvNaf7VhkQ9snc5vnjJ */
			id: string
			/** @example my_custom_field */
			key?: string
		}
		customFieldsInputStringSchema: {
			/** @example 9039160788 */
			field_value?: string
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
		}
		DeleteFollowersSuccessfulResponseDto: {
			/**
			 * @example [
			 *       "sx6wyHhbFdRXh302Lunr",
			 *       "sx6wyHhbFdRXh302LLss"
			 *     ]
			 */
			followers?: string[]
			/**
			 * @example [
			 *       "Mx6wyHhbFdRXh302Luer",
			 *       "Ka6wyHhbFdRXh302LLsAm"
			 *     ]
			 */
			followersRemoved?: string[]
		}
		DeleteUpdateOpportunitySuccessfulResponseDto: {
			/** @example true */
			succeded?: boolean
		}
		FollowersDTO: {
			/**
			 * @example [
			 *       "sx6wyHhbFdRXh302Lunr",
			 *       "sx6wyHhbFdRXh302Lunr"
			 *     ]
			 */
			followers: string[]
		}
		GetPipelinesSuccessfulResponseDto: {
			pipelines?: components['schemas']['PipelinesResponseSchema'][]
		}
		GetPostOpportunitySuccessfulResponseDto: {
			opportunity?: components['schemas']['SearchOpportunitiesResponseSchema']
		}
		LostReasonResponseSchema: {
			/**
			 * Format: date-time
			 * @description created at
			 * @example 2023-06-19T12:04:22.488Z
			 */
			createdAt?: string
			/**
			 * @description lost reason id
			 * @example ve9EPM428h8vShlRW1KT
			 */
			id?: string
			/**
			 * @description location id
			 * @example location_id
			 */
			locationId?: string
			/**
			 * @description lost reason name
			 * @example lost reason
			 */
			name?: string
			/**
			 * Format: date-time
			 * @description updated at
			 * @example 2023-06-19T12:04:22.488Z
			 */
			updatedAt?: string
		}
		LostReasonsResponseSchema: {
			lostReasons?: components['schemas']['LostReasonResponseSchema'][]
			/** @example 100 */
			total?: number
		}
		OpportunitySearchBodyDTO: {
			additionalDetails: components['schemas']['AdditionalDetailsDTO']
			limit: number
			/**
			 * @description Location Id
			 * @example i2SpAtBVHSVea1sL6oah
			 */
			locationId: string
			page: number
			query: string
			searchAfter: string[]
		}
		PipelinesResponseSchema: {
			/**
			 * @description How pipeline/stage colors are rendered
			 * @enum {string}
			 */
			colorRenderMode?: 'dot' | 'bg-tint' | 'none'
			/** @example aWdODOBVOlH1RUFKWQke */
			id?: string
			/** @example dsjddjkndadqaja */
			locationId?: string
			/** @example new pipeline */
			name?: string
			/** @example false */
			showInFunnel?: boolean
			/** @example true */
			showInPieChart?: boolean
			stages?: unknown[][]
		}
		PostSearchSuccessfulResponseDto: {
			aggregations?: Record<string, never>
			opportunities?: components['schemas']['SearchOpportunitiesResponseSchema'][]
			/** @example 100 */
			total: number
		}
		SearchMetaResponseSchema: {
			/** @example 2 */
			currentPage?: number
			/** @example 3 */
			nextPage?: number
			/** @example http://localhost:5066/opportunities/search?q=&location_id=ve9EPM428h8vShlRW1KT&pipeline_id=&pipeline_stage_id=&status=&assigned_to+=&campaignId=&id=&order=&endDate=&startAfter=1625203104328&startAfterId=yWQobCRIhRguQtD2llvk&date=&limit=1&country=&page=1 */
			nextPageUrl?: string
			/** @example 1 */
			prevPage?: number
			/** @example 1625203104328 */
			startAfter?: number
			/** @example yWQobCRIhRguQtD2llvk */
			startAfterId?: string
			/** @example 1 */
			total?: number
		}
		SearchOpportunitiesContactResponseSchema: {
			/** @example Tesla Inc */
			companyName?: string
			/** @example john@deo.com */
			email?: string
			/** @example byMEV0NQinDhq8ZfiOi2 */
			id?: string
			/** @example John Deo */
			name?: string
			/** @example +1202-555-0107 */
			phone?: string
			tags?: string[]
		}
		SearchOpportunitiesResponseSchema: {
			/** @example zT46WSCPbudrq4zhWMk6 */
			assignedTo?: string
			calendarEvents?: unknown[][]
			contact?: components['schemas']['SearchOpportunitiesContactResponseSchema']
			/** @example zT46WSCPbudrq4zhWMk6 */
			contactId?: string
			/** @example 2021-08-03T04:55:17.355Z */
			createdAt?: string
			customFields?: components['schemas']['CustomFieldResponseSchema'][]
			externalObjectId?: string
			followers?: unknown[][]
			/** @example yWQobCRIhRguQtD2llvk */
			id?: string
			/** @example 1 */
			indexVersion?: string
			/** @example 2021-08-03T04:55:17.355Z */
			lastActionDate?: string
			/** @example 2021-08-03T04:55:17.355Z */
			lastStageChangeAt?: string
			/** @example 2021-08-03T04:55:17.355Z */
			lastStatusChangeAt?: string
			/** @example zT46WSCPbudrq4zhW */
			locationId?: string
			/** @example zT46WSCPbudrq4zhWMk6 */
			lostReasonId?: string
			/** @example 500 */
			monetaryValue?: number
			/** @example testing */
			name?: string
			notes?: unknown[][]
			/** @example VDm7RPYC2GLUvdpKmBfC */
			pipelineId?: string
			/** @example e93ba61a-53b3-45e7-985a-c7732dbcdb69 */
			pipelineStageId?: string
			/** @example  */
			source?: string
			/** @example open */
			status?: string
			tasks?: unknown[][]
			/** @example 2021-08-03T04:55:17.355Z */
			updatedAt?: string
		}
		SearchSuccessfulResponseDto: {
			aggregations?: Record<string, never>
			meta?: components['schemas']['SearchMetaResponseSchema']
			opportunities?: components['schemas']['SearchOpportunitiesResponseSchema'][]
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
		UpdateOpportunityDto: {
			/** @example 082goXVW3lIExEQPOnd3 */
			assignedTo?: string
			/** @description Update custom fields to opportunities. */
			customFields?: (
				| components['schemas']['customFieldsInputStringSchema']
				| components['schemas']['customFieldsInputArraySchema']
				| components['schemas']['customFieldsInputObjectSchema']
			)[]
			/** @example 220 */
			monetaryValue?: number
			/** @example First Opps */
			name?: string
			/**
			 * @description pipeline Id
			 * @example bCkKGpDsyPP4peuKowkG
			 */
			pipelineId?: string
			/** @example 7915dedc-8f18-44d5-8bc3-77c04e994a10 */
			pipelineStageId?: string
			/** @enum {string} */
			status?: 'open' | 'won' | 'lost' | 'abandoned' | 'all'
		}
		UpdateStatusDto: {
			/**
			 * @description lost reason Id
			 * @example CLu7BaljjqrEjBGKTNNe
			 */
			lostReasonId?: string
			/** @enum {string} */
			status: 'open' | 'won' | 'lost' | 'abandoned' | 'all'
		}
		UpsertOpportunityDto: {
			/** @example 082goXVW3lIExEQPOnd3 */
			assignedTo?: string
			/**
			 * @description contactId
			 * @example LiKJ2vnRg5ETM8Z19K7
			 */
			followers: string[]
			/**
			 * @description followers action type
			 * @example add
			 * @enum {string}
			 */
			followersActionType: 'add' | 'remove'
			/**
			 * @description opportunityId
			 * @example yWQobCRIhRguQtD2llvk
			 */
			id?: string
			/**
			 * @description isRemoveAllFollowers
			 * @example true
			 */
			isRemoveAllFollowers: boolean
			/**
			 * @description locationId
			 * @example CLu7BaljjqrEjBGKTNNe
			 */
			locationId: string
			/**
			 * @description lost reason Id
			 * @example CLu7BaljjqrEjBGKTNNe
			 */
			lostReasonId?: string
			/** @example 220 */
			monetaryValue?: Record<string, never>
			/**
			 * @description name
			 * @example opportunity name
			 */
			name?: string
			/**
			 * @description pipeline Id
			 * @example bCkKGpDsyPP4peuKowkG
			 */
			pipelineId: string
			/** @example 7915dedc-8f18-44d5-8bc3-77c04e994a10 */
			pipelineStageId?: string
			/** @enum {string} */
			status?: 'open' | 'won' | 'lost' | 'abandoned' | 'all'
		}
		UpsertOpportunitySuccessfulResponseDto: {
			/** @example true */
			new: boolean
			/** @description Updated / New Opportunity */
			opportunity: Record<string, never>
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
	'create-opportunity': {
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
	'get-opportunity': {
		parameters: {
			query?: never
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description Opportunity Id */
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
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description Opportunity Id */
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
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description Opportunity Id */
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
	'add-followers-opportunity': {
		parameters: {
			query?: never
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description Opportunity Id */
				id: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['FollowersDTO']
			}
		}
		responses: {
			/** @description Successful response */
			201: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['CreateAddFollowersSuccessfulResponseDto']
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
	'remove-followers-opportunity': {
		parameters: {
			query?: {
				isRemoveAllFollowers?: boolean
			}
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description Opportunity Id */
				id: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['FollowersDTO']
			}
		}
		responses: {
			/** @description Followers successfully removed. */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['DeleteFollowersSuccessfulResponseDto']
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
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description Opportunity Id */
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
	'get-lost-reason': {
		parameters: {
			query: {
				/** @description deleted */
				deleted?: boolean
				/** @description get count */
				getCount?: boolean
				/** @description limit */
				limit?: number
				locationId: string
				/** @description lost reason name */
				name?: string
				/** @description search query */
				query?: string
				/** @description skip */
				skip?: number
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
					'application/json': components['schemas']['LostReasonsResponseSchema']
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
	'search-opportunity': {
		parameters: {
			query: {
				assigned_to?: string
				/** @description Campaign Id */
				campaignId?: string
				/** @description Contact Id */
				contact_id?: string
				country?: string
				/** @description Start date */
				date?: string
				/** @description End date */
				endDate?: string
				/** @description get Calender event in contact */
				getCalendarEvents?: boolean
				/** @description get Notes in contact */
				getNotes?: boolean
				/** @description get Tasks in contact */
				getTasks?: boolean
				/** @description Opportunity Id */
				id?: string
				/** @description Limit Per Page records count. will allow maximum up to 100 and default will be 20 */
				limit?: number
				/** @description Location Id */
				location_id: string
				order?: string
				page?: number
				/** @description Pipeline Id */
				pipeline_id?: string
				/** @description stage Id */
				pipeline_stage_id?: string
				q?: string
				/** @description Start After */
				startAfter?: string
				/** @description Start After Id */
				startAfterId?: string
				status?: 'open' | 'won' | 'lost' | 'abandoned' | 'all'
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
	'search-opportunities-advanced': {
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
				'application/json': components['schemas']['OpportunitySearchBodyDTO']
			}
		}
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['PostSearchSuccessfulResponseDto']
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
}
