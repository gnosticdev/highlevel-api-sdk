export type paths = {
	'/forms/submissions': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get Forms Submissions
		 * @description Get Forms Submissions
		 */
		get: operations['get-forms-submissions']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/forms/upload-custom-files': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Upload files to custom fields
		 * @description Post the necessary fields for the API to upload files. The files need to be a buffer with the key "< custom_field_id >_< file_id >". <br /> Here custom field id is the ID of your custom field and file id is a randomly generated id (or uuid) <br /> There is support for multiple file uploads as well. Have multiple fields in the format mentioned.<br />File size is limited to 50 MB.<br /><br /> The allowed file types are: <br> <ul><li>PDF</li><li>DOCX</li><li>DOC</li><li>JPG</li><li>JPEG</li><li>PNG</li><li>GIF</li><li>CSV</li><li>XLSX</li><li>XLS</li><li>MP4</li><li>MPEG</li><li>ZIP</li><li>RAR</li><li>TXT</li><li>SVG</li></ul> <br /><br /> The API will return the updated contact object.
		 */
		post: operations['upload-to-custom-fields']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/forms/': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get Forms
		 * @description Get Forms
		 */
		get: operations['get-forms']
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
		PageDetailsSchema: {
			/** @example https://example.com */
			url?: string
			/** @example Example Page */
			title?: string
		}
		ContactSessionIds: {
			/** @example [
			 *       "session1",
			 *       "session2"
			 *     ] */
			ids?: string[] | null
		}
		EventDataSchema: {
			/** @example fb.1.123456789.987654321 */
			fbc?: string
			/** @example fbp.1.987654321.123456789 */
			fbp?: string
			page?: components['schemas']['PageDetailsSchema']
			/** @example page-visit */
			type?: string
			/** @example example.com */
			domain?: string
			/** @example form */
			medium?: string
			/** @example Direct traffic */
			source?: string
			/** @example v3 */
			version?: string
			/** @example example-ad-source */
			adSource?: string
			/** @example medium-id-123 */
			mediumId?: string
			/** @example parent-id-456 */
			parentId?: string
			/** @example https://staging.gohighlevel.com */
			referrer?: string
			/** @example event-id-789 */
			fbEventId?: string
			/** @example 1234567890 */
			timestamp?: number
			/** @example Parent Form */
			parentName?: string
			/** @example example-fingerprint */
			fingerprint?: string
			/** @example form */
			pageVisitType?: string
			contactSessionIds?: components['schemas']['ContactSessionIds'] | null
		}
		othersSchema: {
			/** @example john@deo.com */
			__submissions_other_field__?: string
			/** @example 20 */
			__custom_field_id__?: string
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
		FormsSubmissionsSubmissionsSchema: {
			/** @example 38303ec7-629a-49e2-888a-cf8bf0b1f97e */
			id?: string
			/** @example DWQ45t2IPVxi9LDu1wBl */
			contactId?: string
			/** @example 2021-06-23T06:07:04.000Z */
			createdAt?: string
			/** @example YSWdvS4Is98wtIDGnpmI */
			formId?: string
			/** @example test */
			name?: string
			/** @example test@test.com */
			email?: string
			others?: components['schemas']['othersSchema']
		}
		metaSchema: {
			/** @example 1 */
			total?: number
			/** @example 1 */
			currentPage?: number
			/** @example null */
			nextPage?: number | null
			/** @example null */
			prevPage?: number | null
		}
		FormsSubmissionsSuccessfulResponseDto: {
			submissions?: components['schemas']['FormsSubmissionsSubmissionsSchema'][]
			meta?: components['schemas']['metaSchema']
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
		FormsParams: {
			/** @example YSWdvS4Is98wtIDGnpmI */
			id?: string
			/** @example Form 1 */
			name?: string
			/** @example ve9EPM428h8vShlRW1KT */
			locationId?: string
		}
		FormsSuccessfulResponseDto: {
			forms?: components['schemas']['FormsParams'][]
			/**
			 * @description Total number of forms
			 * @example 20
			 */
			total?: number
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
	'get-forms-submissions': {
		parameters: {
			query: {
				/** @example ve9EPM428h8vShlRW1KT */
				locationId: string
				/**
				 * @description Page No. By default it will be 1
				 * @example 1
				 */
				page?: number
				/**
				 * @description Limit Per Page records count. will allow maximum up to 100 and default will be 20
				 * @example 20
				 */
				limit?: number
				/**
				 * @description Filter submission by form id
				 * @example jjusM6EOngDExnbo2DbU
				 */
				formId?: string
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
				 * @description Get submission by ending of this date. By default it will be current date(YYYY-MM-DD).
				 * @example 2020-12-14
				 */
				endAt?: string
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
					'application/json': components['schemas']['FormsSubmissionsSuccessfulResponseDto']
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
	'upload-to-custom-fields': {
		parameters: {
			query: {
				/**
				 * @description Contact ID to upload the file to.
				 * @example dtEv6KtI27yF92YPm3Zz
				 */
				contactId: string
				/**
				 * @description Location ID of the contact.
				 * @example quXmPY59n1zgGBabY1bZ
				 */
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
		}
	}
	'get-forms': {
		parameters: {
			query: {
				/** @example ve9EPM428h8vShlRW1KT */
				locationId: string
				/** @example 0 */
				skip?: number
				/**
				 * @description Limit Per Page records count. will allow maximum up to 50 and default will be 10
				 * @example 20
				 */
				limit?: number
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
					'application/json': components['schemas']['FormsSuccessfulResponseDto']
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
