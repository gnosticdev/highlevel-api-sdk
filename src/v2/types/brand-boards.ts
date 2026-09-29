export interface paths {
	'/brand-boards/': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Create a new brand board
		 * @description Creates a new brand board with logos, colors, and fonts
		 */
		post: operations['createBrandBoard']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/brand-boards/{locationId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get Brand Boards
		 * @description Retrieves all Brand Boards for a specific location
		 */
		get: operations['getBrandBoardsByLocation']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/brand-boards/{locationId}/{id}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get Brand Board
		 * @description Retrieves a specific Brand Board by its ID
		 */
		get: operations['getBrandBoardById']
		put?: never
		post?: never
		/**
		 * Delete a Brand Board
		 * @description Deletes a Brand Board
		 */
		delete: operations['deleteBrandBoard']
		options?: never
		head?: never
		/**
		 * Update a Brand Board
		 * @description Updates an existing Brand Board
		 */
		patch: operations['updateBrandBoard']
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
		BrandBoardListItemDTO: {
			/**
			 * @description Brand board ID
			 * @example 507f1f77bcf86cd799439011
			 */
			_id: string
			/**
			 * @description Whether this is the default brand board for the location
			 * @example false
			 */
			default?: boolean
			/** @description Metadata about the brand board */
			meta?: components['schemas']['MetaData']
			/**
			 * @description Brand board name
			 * @example My Brand Board
			 */
			name: string
			/**
			 * @description Last update timestamp
			 * @example 2024-01-05T12:00:00.000Z
			 */
			updatedAt: string
		}
		Color: {
			/**
			 * @description Color in HEX format
			 * @example #FF5733
			 */
			hex: string
			/**
			 * @description Color in HEXA format (with alpha)
			 * @example #FF5733FF
			 */
			hexa: string
			/**
			 * @description Unique identifier for the color
			 * @example color_xyz789
			 */
			id: string
			/**
			 * @description Display label for the color
			 * @example Brand Orange
			 */
			label: string
			/**
			 * @description Color in RGB format
			 * @example rgb(255, 87, 51)
			 */
			rgb: string
			/**
			 * @description Color in RGBA format
			 * @example rgba(255, 87, 51, 1)
			 */
			rgba: string
		}
		CreateBrandBoardParam: {
			/**
			 * @description Source brand board ID to copy from (creates a new brand board based on this template)
			 * @example 507f1f77bcf86cd799439011
			 */
			brandBoardId?: string
			/** @description Array of colors for the brand board */
			colors?: components['schemas']['Color'][]
			/**
			 * @description Set as the default brand board for this location
			 * @example true
			 */
			default?: boolean
			/** @description Array of fonts for the brand board */
			fonts?: components['schemas']['Font'][]
			/**
			 * @description Location ID where the brand board will be created
			 * @example ve9EPM428h8vShlRW1KT
			 */
			locationId: string
			/** @description Array of logos for the brand board */
			logos?: components['schemas']['Logo'][]
			/**
			 * @description Name of the brand board
			 * @example My Brand Board
			 */
			name: string
			/**
			 * @description Parent folder ID in media library for organizing brand boards
			 * @example 507f1f77bcf86cd799439011
			 */
			parentId?: string
			/**
			 * @description Source type indicating how the brand board was created
			 * @example blank
			 * @enum {string}
			 */
			type?: 'template' | 'blank' | 'snapshot'
		}
		Font: {
			/**
			 * @description Fallback font family
			 * @example sans-serif
			 */
			fallback: string
			/**
			 * @description Font family name
			 * @example Montserrat
			 */
			font: string
			/**
			 * @description Unique identifier for the font
			 * @example font_def456
			 */
			id: string
			/**
			 * @description Display label for the font
			 * @example Heading Font
			 */
			label: string
		}
		GetBrandBoardsByLocationSuccessDTO: {
			/** @description Array of brand boards for the location */
			brandBoards: components['schemas']['BrandBoardListItemDTO'][]
			/**
			 * @description Total number of brand boards matching the query
			 * @example 42
			 */
			totalCount: number
		}
		GetBrandBoardSuccessDTO: {
			/**
			 * @description Brand board ID
			 * @example 507f1f77bcf86cd799439011
			 */
			_id: string
			/** @description Array of brand colors */
			colors?: components['schemas']['Color'][]
			/**
			 * @description Creation timestamp
			 * @example 2024-01-05T12:00:00.000Z
			 */
			createdAt?: string
			/**
			 * @description Whether this is the default brand board for the location
			 * @example false
			 */
			default: boolean
			/**
			 * @description Whether the brand board has been soft deleted
			 * @example false
			 */
			deleted: boolean
			/**
			 * @description Media library folder ID for this brand board
			 * @example 507f1f77bcf86cd799439011
			 */
			folderId?: string
			/** @description Array of brand fonts */
			fonts?: components['schemas']['Font'][]
			/**
			 * @description Location ID
			 * @example ve9EPM428h8vShlRW1KT
			 */
			locationId: string
			/** @description Array of logos */
			logos?: components['schemas']['Logo'][]
			/** @description Metadata about the brand board */
			meta?: components['schemas']['MetaData']
			/**
			 * @description Brand board name
			 * @example My Brand Board
			 */
			name: string
			/**
			 * @description Original brand board ID if cloned from snapshot
			 * @example 507f1f77bcf86cd799439011
			 */
			originId?: string
			/**
			 * @description Parent folder ID in media library
			 * @example 507f1f77bcf86cd799439011
			 */
			parentId?: string
			/**
			 * @description Last update timestamp
			 * @example 2024-01-05T12:00:00.000Z
			 */
			updatedAt?: string
		}
		InvalidLocationDTO: {
			/** @example The token does not have access to this location */
			message?: string
			/** @example 403 */
			statusCode?: number
		}
		Logo: {
			/**
			 * @description Unique identifier for the logo
			 * @example logo_abc123
			 */
			id: string
			/**
			 * @description Display label for the logo (e.g., Primary, Secondary)
			 * @example Primary Logo
			 */
			label: string
			/**
			 * @description Storage path of the logo in the media library
			 * @example /locations/ve9EPM428h8vShlRW1KT/logos/my-logo.png
			 */
			path: string
			/**
			 * @description Public URL of the logo image. Used for uploading to the brand board folder in media library
			 * @example https://storage.googleapis.com/bucket/logos/my-logo.png
			 */
			url: string
		}
		MetaData: {
			/**
			 * @description Last action performed on the brand board
			 * @example UPDATE
			 */
			lastAction?: string
			/**
			 * @description Source brand board ID if created from a template
			 * @example 507f1f77bcf86cd799439011
			 */
			sourceId?: string
			/**
			 * @description How the brand board was created
			 * @example blank
			 * @enum {string}
			 */
			sourceType?: 'template' | 'blank' | 'snapshot'
			/**
			 * @description User ID who last updated the brand board
			 * @example user_abc123
			 */
			updatedBy?: string
		}
		NotFoundDTO: {
			/** @example The requested resource was not found */
			error?: string
			/** @example Not Found */
			message?: string
			/** @example 404 */
			statusCode?: number
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
		UpdateBrandBoardBody: {
			/** @description Array of colors for the brand board */
			colors?: components['schemas']['Color'][]
			/**
			 * @description Set as the default brand board for this location
			 * @example true
			 */
			default?: boolean
			/** @description Array of fonts for the brand board */
			fonts?: components['schemas']['Font'][]
			/** @description Array of logos for the brand board */
			logos?: components['schemas']['Logo'][]
			/**
			 * @description Name of the brand board
			 * @example My Brandboard 2
			 */
			name?: string
			/**
			 * @description Parent folder ID in media library (reserved for future use)
			 * @example 507f1f77bcf86cd799439011
			 */
			parentId?: string
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
	createBrandBoard: {
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
				'application/json': components['schemas']['CreateBrandBoardParam']
			}
		}
		responses: {
			/** @description Created */
			201: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['GetBrandBoardSuccessDTO']
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
			/** @description The token does not have access to this location */
			403: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['InvalidLocationDTO']
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
	getBrandBoardsByLocation: {
		parameters: {
			query?: {
				/** @description Include deleted brand boards in results */
				deleted?: boolean
				/** @description Maximum number of brand boards to return */
				limit?: number
				/** @description Number of brand boards to skip for pagination */
				offset?: number
				/** @description Search term to filter brand boards by name */
				search?: string
			}
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				locationId: string
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
					'application/json': components['schemas']['GetBrandBoardsByLocationSuccessDTO']
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
			/** @description The token does not have access to this location */
			403: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['InvalidLocationDTO']
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
	getBrandBoardById: {
		parameters: {
			query?: never
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description Brand board ID to update, retrieve, or delete */
				id: string
				/** @description Location ID where the brand board exists */
				locationId: string
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
					'application/json': components['schemas']['GetBrandBoardSuccessDTO']
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
			/** @description The token does not have access to this location */
			403: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['InvalidLocationDTO']
				}
			}
			/** @description Not Found */
			404: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['NotFoundDTO']
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
	deleteBrandBoard: {
		parameters: {
			query?: never
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description Brand board ID to update, retrieve, or delete */
				id: string
				/** @description Location ID where the brand board exists */
				locationId: string
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
					'application/json': components['schemas']['GetBrandBoardSuccessDTO']
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
			/** @description The token does not have access to this location */
			403: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['InvalidLocationDTO']
				}
			}
			/** @description Not Found */
			404: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['NotFoundDTO']
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
	updateBrandBoard: {
		parameters: {
			query?: never
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description Brand board ID to update, retrieve, or delete */
				id: string
				/** @description Location ID where the brand board exists */
				locationId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['UpdateBrandBoardBody']
			}
		}
		responses: {
			/** @description Success */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['GetBrandBoardSuccessDTO']
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
			/** @description The token does not have access to this location */
			403: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['InvalidLocationDTO']
				}
			}
			/** @description Not Found */
			404: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['NotFoundDTO']
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
