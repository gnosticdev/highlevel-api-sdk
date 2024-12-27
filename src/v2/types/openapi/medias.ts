export type paths = {
	'/medias/{id}': {
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
		 * Delete File or Folder
		 * @description Deletes specific file or folder from the media library
		 */
		delete: operations['delete-media-content']
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/medias/files': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get List of Files
		 * @description Fetches list of files and folders from the media library
		 */
		get: operations['fetch-media-content']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/medias/upload-file': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Upload File into Media Library
		 * @description If hosted is set to true then fileUrl is required. Else file is required. If adding a file, maximum allowed is 25 MB
		 */
		post: operations['upload-media-content']
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
		GetFilesResponseDTO: {
			/**
			 * @description Array of File Objects
			 * @example {
			 *       "altId": "locationId",
			 *       "altType": "location",
			 *       "name": "file name",
			 *       "parentId": "parent folder id",
			 *       "url": "file url",
			 *       "path": "file path"
			 *     }
			 */
			files: string[]
		}
		UploadFileResponseDTO: {
			/**
			 * @description ID of the uploaded file
			 * @example file.pdf
			 */
			fileId: string
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
	'delete-media-content': {
		parameters: {
			query: {
				/** @description location or agency Id */
				altId: string
				/**
				 * @description AltType
				 * @example location
				 */
				altType: 'agency' | 'location'
			}
			header: {
				/** @description Access Token */
				Authorization: string
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
				content?: never
			}
		}
	}
	'fetch-media-content': {
		parameters: {
			query: {
				/** @description location or agency Id */
				altId: string
				/**
				 * @description AltType
				 * @example location
				 */
				altType: 'agency' | 'location'
				/**
				 * @description Number of files to show in the listing
				 * @example 10
				 */
				limit?: string
				/**
				 * @description Number of files to skip in listing
				 * @example 5
				 */
				offset?: string
				/**
				 * @description Query text
				 * @example Test file
				 */
				query?: string
				/**
				 * @description Field to sorting the file listing by
				 * @example createdAt
				 */
				sortBy: string
				/**
				 * @description Direction in which file needs to be sorted
				 * @example asc
				 */
				sortOrder: string
				/**
				 * @description Type
				 * @example file
				 */
				type?: string
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
					'application/json': components['schemas']['GetFilesResponseDTO']
				}
			}
		}
	}
	'upload-media-content': {
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
				'multipart/form-data': {
					/** Format: binary */
					file?: string
					fileUrl?: string
					hosted?: boolean
					name?: string
				}
			}
		}
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UploadFileResponseDTO']
				}
			}
		}
	}
}
