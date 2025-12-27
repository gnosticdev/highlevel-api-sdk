export interface paths {
	'/medias/{id}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Update File/ Folder
		 * @description Updates a single file or folder by ID
		 */
		post: operations['update-media-object']
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
	'/medias/delete-files': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		/**
		 * Bulk Delete / Trash Files or Folders
		 * @description Soft-deletes or trashes multiple files and folders in a single request
		 */
		put: operations['bulk-delete-media-objects']
		post?: never
		delete?: never
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
		 * Get List of Files/ Folders
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
	'/medias/folder': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Create Folder
		 * @description Creates a new folder in the media library
		 */
		post: operations['create-media-folder']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/medias/update-files': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		/**
		 * Bulk Update Files/ Folders
		 * @description Updates metadata or status of multiple files and folders
		 */
		put: operations['bulk-update-media-objects']
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
export interface components {
	schemas: {
		CreateFolderParams: {
			/**
			 * @description Location Id
			 * @example sx6wyHhbFdRXh302LLNR
			 */
			altId: string
			/**
			 * @description Type of entity (location only)
			 * @example location
			 * @enum {string}
			 */
			altType: 'location'
			/**
			 * @description Name of the folder to be created
			 * @example New Folder
			 */
			name: string
			/**
			 * @description ID of the parent folder (optional)
			 * @example 64af50c42d567a3b4f5989e0
			 */
			parentId?: string
		}
		DeleteMediaObjectItem: {
			/**
			 * @description Unique identifier of the file or folder to be deleted
			 * @example 686f630df0d3166d68fbcec2
			 */
			_id: string
		}
		DeleteMediaObjectsBodyParams: {
			/**
			 * @description Location identifier
			 * @example sx6wyHhbFdRXh302LLNR
			 */
			altId: string
			/**
			 * @description Type of entity that owns the files
			 * @example location
			 * @enum {string}
			 */
			altType: 'location'
			/**
			 * @description Array of file objects to be deleted or trashed
			 * @example [
			 *       {
			 *         "_id": "686f630df0d3166d68fbcec2"
			 *       }
			 *     ]
			 */
			filesToBeDeleted: components['schemas']['DeleteMediaObjectItem'][]
			/**
			 * @description Status to set for the files (deleted or trashed)
			 * @example deleted
			 * @enum {string}
			 */
			status: 'deleted' | 'trashed'
		}
		FolderDTO: {
			/**
			 * @description Location identifier that owns this folder
			 * @example sx6wyHhbFdRXh302LLNR
			 */
			altId: string
			/**
			 * @description Type of entity that owns the folder
			 * @example location
			 * @enum {string}
			 */
			altType: 'location'
			/**
			 * @description Whether this is a system-generated application folder
			 * @example false
			 */
			appFolder?: boolean
			/**
			 * @description Primary category of content stored in the folder
			 * @example image
			 */
			category?: string
			/**
			 * @description Whether the folder has been deleted
			 * @example false
			 */
			deleted?: boolean
			/**
			 * @description Whether the folder is essential and should not be deleted
			 * @example false
			 */
			isEssential?: boolean
			/**
			 * @description Whether the folder is private and not publicly accessible
			 * @example false
			 */
			isPrivate?: boolean
			/**
			 * @description ID of the user who last updated the folder
			 * @example user-uuid-123
			 */
			lastUpdatedBy?: string
			/**
			 * @description Whether the data migration process has been completed for this folder
			 * @example true
			 */
			migrationCompleted?: boolean
			/**
			 * @description Name of the folder
			 * @example New Folder
			 */
			name: string
			/**
			 * @description ID of the parent folder (null for root folders)
			 * @example 64af50c42d567a3b4f5989e0
			 */
			parentId?: string
			/**
			 * @description Whether there are pending uploads to this folder
			 * @example false
			 */
			pendingUpload?: boolean
			/**
			 * @description Whether the folder has been moved from its original location
			 * @example false
			 */
			relocatedFolder?: boolean
			/** @description Current status of the folder */
			status?: string
			/**
			 * @description Sub-category of content stored in the folder
			 * @example logo
			 */
			subCategory?: string
			/**
			 * @description Type of the object (always 'folder' for folders)
			 * @example folder
			 */
			type: string
		}
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
		MoveOrDeleteObjectParams: {
			_id: string
			altId: string
			altType: string
		}
		UpdateMediaObject: {
			/**
			 * @description Unique identifier of the file or folder to be updated
			 * @example 686f9817f0d3165be9fbcef6
			 */
			id: string
			/**
			 * @description New name for the file or folder
			 * @example Updated File Name.pdf
			 */
			name?: string
		}
		UpdateMediaObjects: {
			/**
			 * @description Location identifier
			 * @example sx6wyHhbFdRXh302LLNR
			 */
			altId: string
			/**
			 * @description Type of entity that owns the files
			 * @example location
			 * @enum {string}
			 */
			altType: 'location'
			/**
			 * @description Array of file objects to be updated
			 * @example [
			 *       {
			 *         "id": "686f9817f0d3165be9fbcef6",
			 *         "name": "Updated File Name.pdf"
			 *       }
			 *     ]
			 */
			filesToBeUpdated: components['schemas']['UpdateMediaObject'][]
		}
		UpdateObject: {
			/**
			 * @description Location identifier that owns the file or folder
			 * @example sx6wyHhbFdRXh302LLNR
			 */
			altId: string
			/**
			 * @description Type of entity that owns the file or folder
			 * @example location
			 * @enum {string}
			 */
			altType: 'location'
			/**
			 * @description New name for the file or folder
			 * @example Updated File Name.pdf
			 */
			name: string
		}
		UploadFileResponseDTO: {
			/**
			 * @description ID of the uploaded file
			 * @example file.pdf
			 */
			fileId: string
			/**
			 * @description Google Cloud Storage URL of the uploaded file
			 * @example https://storage.googleapis.com/bucket-name/path/to/file.pdf
			 */
			url: string
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
	'update-media-object': {
		parameters: {
			query?: never
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/**
				 * @description Unique identifier of the file or folder to update
				 * @example 686f9817f0d3165be9fbcef6
				 */
				id: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['UpdateObject']
			}
		}
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': unknown
				}
			}
		}
	}
	'delete-media-content': {
		parameters: {
			query: {
				/** @description location Id */
				altId: string
				/**
				 * @description AltType
				 * @example location
				 */
				altType: 'location'
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
				content?: never
			}
		}
	}
	'bulk-delete-media-objects': {
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
				'application/json': components['schemas']['DeleteMediaObjectsBodyParams']
			}
		}
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': unknown
				}
			}
		}
	}
	'fetch-media-content': {
		parameters: {
			query: {
				/** @description location Id */
				altId: string
				/**
				 * @description AltType
				 * @example location
				 */
				altType: 'location'
				/**
				 * @description Fetch all files or folders
				 * @example false
				 */
				fetchAll?: string
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
				/** @description parent id or folder id */
				parentId?: string
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
				type: string
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
					'application/json': components['schemas']['GetFilesResponseDTO']
				}
			}
		}
	}
	'create-media-folder': {
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
				'application/json': components['schemas']['CreateFolderParams']
			}
		}
		responses: {
			/** @description Returns the newly created folder object */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['FolderDTO']
				}
			}
		}
	}
	'bulk-update-media-objects': {
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
				'application/json': components['schemas']['UpdateMediaObjects']
			}
		}
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': unknown
				}
			}
		}
	}
	'upload-media-content': {
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
				'multipart/form-data': {
					/** Format: binary */
					file?: string
					fileUrl?: string
					hosted?: boolean
					name?: string
					parentId?: string
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
