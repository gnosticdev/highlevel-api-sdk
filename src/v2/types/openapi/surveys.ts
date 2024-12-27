export type paths = {
	'/surveys/': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get Surveys
		 * @description Get Surveys
		 */
		get: operations['get-surveys']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/surveys/submissions': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get Surveys Submissions
		 * @description Get Surveys Submissions
		 */
		get: operations['get-surveys-submissions']
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
		ContactSessionIds: {
			/** @example [
			 *       "session1",
			 *       "session2"
			 *     ] */
			ids?: string[] | null
		}
		EventDataSchema: {
			/** @example example-ad-source */
			adSource?: string
			contactSessionIds?: components['schemas']['ContactSessionIds'] | null
			/** @example example.com */
			domain?: string
			/** @example fb.1.123456789.987654321 */
			fbc?: string
			/** @example event-id-789 */
			fbEventId?: string
			/** @example fbp.1.987654321.123456789 */
			fbp?: string
			/** @example example-fingerprint */
			fingerprint?: string
			/** @example survey */
			medium?: string
			/** @example medium-id-123 */
			mediumId?: string
			page?: components['schemas']['PageDetailsSchema']
			/** @example survey */
			pageVisitType?: string
			/** @example parent-id-456 */
			parentId?: string
			/** @example Parent Survey */
			parentName?: string
			/** @example https://staging.gohighlevel.com */
			referrer?: string
			/** @example Direct traffic */
			source?: string
			/** @example 1234567890 */
			timestamp?: number
			/** @example page-visit */
			type?: string
			/** @example v3 */
			version?: string
		}
		GetSurveysSchema: {
			/** @example I5GFa3d3cKjojpe4VVUx */
			id?: string
			/** @example ve9EPM428h8vShlRW1KT */
			locationId?: string
			/** @example Survey 1 */
			name?: string
		}
		GetSurveysSubmissionSuccessfulResponseDto: {
			meta?: components['schemas']['metaSchema']
			submissions?: components['schemas']['SubmissionSchema'][]
		}
		GetSurveysSuccessfulResponseDto: {
			surveys?: components['schemas']['GetSurveysSchema'][]
			/**
			 * @description Number of surveys
			 * @example 20
			 */
			total?: number
		}
		metaSchema: {
			/** @example 1 */
			currentPage?: number
			/** @example null */
			nextPage?: number | null
			/** @example null */
			prevPage?: number | null
			/** @example 1 */
			total?: number
		}
		othersSchema: {
			/** @example 20 */
			__custom_field_id__?: string
			/** @example john@deo.com */
			__submissions_other_field__?: string
			eventData?: components['schemas']['EventDataSchema']
			/** @example [
			 *       "full_name",
			 *       "first_name",
			 *       "last_name",
			 *       "phone",
			 *       "email"
			 *     ] */
			fieldsOriSequance?: string[]
		}
		PageDetailsSchema: {
			/** @example Example Page */
			title?: string
			/** @example https://example.com */
			url?: string
		}
		SubmissionSchema: {
			/** @example 9NkT25Vor1v4aQatFsv2 */
			contactId?: string
			/** @example 2020-11-01T18:02:21.000Z */
			createdAt?: string
			/** @example test@test.com */
			email?: string
			/** @example be759b9a-c3ec-4b29-ba07-fc3c89c77673 */
			id?: string
			/** @example test */
			name?: string
			others?: components['schemas']['othersSchema']
			/** @example jjusM6EOngDExnbo2DbU */
			surveyId?: string
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
	}
	responses: never
	parameters: never
	requestBodies: never
	headers: never
	pathItems: never
}
export type $defs = Record<string, never>
export interface operations {
	'get-surveys': {
		parameters: {
			query: {
				/**
				 * @description Limit Per Page records count. will allow maximum up to 50 and default will be 10
				 * @example 20
				 */
				limit?: number
				/** @example ve9EPM428h8vShlRW1KT */
				locationId: string
				/** @example 0 */
				skip?: number
				/** @example folder */
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
					'application/json': components['schemas']['GetSurveysSuccessfulResponseDto']
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
	'get-surveys-submissions': {
		parameters: {
			query: {
				/**
				 * @description Get submission by ending of this date. By default it will be current date(YYYY-MM-DD).
				 * @example 2020-12-14
				 */
				endAt?: string
				/**
				 * @description Limit Per Page records count. will allow maximum up to 100 and default will be 20
				 * @example 20
				 */
				limit?: number
				/** @example ve9EPM428h8vShlRW1KT */
				locationId: string
				/**
				 * @description Page No. By default it will be 1
				 * @example 1
				 */
				page?: number
				/**
				 * @description Filter by contactId, name, email or phone no.
				 * @example john@deo.com
				 */
				q?: string
				/**
				 * @description Get submission by starting of this date. By default it will be same date of last month(YYYY-MM-DD).
				 * @example 2020-11-14
				 */
				startAt?: string
				/**
				 * @description Filter submission by survey id
				 * @example jjusM6EOngDExnbo2DbU
				 */
				surveyId?: string
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
					'application/json': components['schemas']['GetSurveysSubmissionSuccessfulResponseDto']
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
