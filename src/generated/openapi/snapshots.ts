export type paths = {
	'/snapshots/': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get Snapshots
		 * @description Get a list of all own and imported Snapshots
		 */
		get: operations['get-custom-snapshots']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/snapshots/share/link': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Create Snapshot Share Link
		 * @description Create a share link for snapshot
		 */
		post: operations['create-snapshot-share-link']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/snapshots/snapshot-status/{snapshotId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get Snapshot Push between Dates
		 * @description Get list of sub-accounts snapshot pushed in time period
		 */
		get: operations['get-snapshot-push']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/snapshots/snapshot-status/{snapshotId}/location/{locationId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get Last Snapshot Push
		 * @description Get Latest Snapshot Push Status for a location id
		 */
		get: operations['get-latest-snapshot-push']
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
		SnapshotsSchema: {
			/**
			 * @description Snapshot Id.
			 * @example 1eM2UgkfaECOYyUdCo9Pa
			 */
			id?: string
			/**
			 * @description Name of the snapshot
			 * @example Martial Arts Snapshot
			 */
			name?: string
			/**
			 * @description Type of snapshot - own or imported.
			 * @example own
			 */
			type?: string
		}
		GetSnapshotsSuccessfulResponseDto: {
			snapshots?: components['schemas']['SnapshotsSchema'][]
		}
		CreateSnapshotShareLinkRequestDTO: {
			/**
			 * @description id for snapshot to be shared
			 * @example 1eM2UgkfaECOYyUdCo9Pa
			 */
			snapshot_id: string
			/**
			 * @description Type of share link to generate
			 * @example permanent_link
			 * @enum {string}
			 */
			share_type: 'link' | 'permanent_link' | 'agency_link' | 'location_link'
			/**
			 * @description Comma separated Relationship number of Agencies to create agency restricted share link
			 * @example 0-128-926,1-208-926,2-008-926
			 */
			relationship_number?: string
			/**
			 * @description Comma separated Sub-Account ids to create sub-account restricted share link
			 * @example l1C08ntBrFjLS0elLIYU, U1C08ntBrFjLS0elKIYP
			 */
			share_location_id?: string
		}
		CreateSnapshotShareLinkSuccessfulResponseDTO: {
			/**
			 * @description id for shared snapshot
			 * @example 1eM2UgkfaECOYyUdCo9Pa
			 */
			id?: string
			/**
			 * @description Share Link for snapshot
			 * @example https://affiliates.gohighlevel.com/?share=1eM2UgkfaECOYyUdCo9Pa
			 */
			shareLink?: string
		}
		SnapshotStatusSchema: {
			/**
			 * @description Document id
			 * @example 1eM2UgkfaECOYyUdCo9Pa
			 */
			id?: string
			/**
			 * @description Sub-account id
			 * @example BrKClvyvdxhJ9Mxz2pzQ
			 */
			locationId?: string
			/**
			 * @description Status of snapshot push
			 * @example processing
			 */
			status?: string
			/**
			 * Format: date-time
			 * @description Timestamp of when snapshot processing starts for sub-account
			 * @example 10/28/2022, 6:24:54 PM
			 */
			dateAdded?: string
		}
		GetSnapshotPushStatusSuccessfulResponseDTO: {
			data?: components['schemas']['SnapshotStatusSchema'][]
		}
		SnapshotStatusSchemaWithAssets: {
			/**
			 * @description Document id
			 * @example 1eM2UgkfaECOYyUdCo9Pa
			 */
			id?: string
			/**
			 * @description Sub-account id
			 * @example BrKClvyvdxhJ9Mxz2pzQ
			 */
			locationId?: string
			/**
			 * @description Status of snapshot push
			 * @example processing
			 */
			status?: string
			/**
			 * @description List of completed assets
			 * @example ['forms', 'surveys', 'funnels', 'workflows']
			 */
			completed?: string[]
			/**
			 * @description List of pending assets
			 * @example ['custom_fields','custom_values','tags']
			 */
			pending?: string[]
		}
		GetLatestSnapshotPushStatusSuccessfulResponseDTO: {
			data?: components['schemas']['SnapshotStatusSchemaWithAssets']
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
	'get-custom-snapshots': {
		parameters: {
			query: {
				/**
				 * @description Company Id
				 * @example 5D112kQsiKESj6rash
				 */
				companyId: string
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
					'application/json': components['schemas']['GetSnapshotsSuccessfulResponseDto']
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
	'create-snapshot-share-link': {
		parameters: {
			query: {
				companyId: string
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
		requestBody: {
			content: {
				'application/json': components['schemas']['CreateSnapshotShareLinkRequestDTO']
			}
		}
		responses: {
			/** @description Successful response */
			201: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['CreateSnapshotShareLinkSuccessfulResponseDTO']
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
	'get-snapshot-push': {
		parameters: {
			query: {
				companyId: string
				from: string
				to: string
				/** @description Id for last document till what you want to skip */
				lastDoc: string
				limit: string
			}
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				snapshotId: string
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
					'application/json': components['schemas']['GetSnapshotPushStatusSuccessfulResponseDTO']
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
	'get-latest-snapshot-push': {
		parameters: {
			query: {
				companyId: string
			}
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				snapshotId: string
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
					'application/json': components['schemas']['GetLatestSnapshotPushStatusSuccessfulResponseDTO']
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
