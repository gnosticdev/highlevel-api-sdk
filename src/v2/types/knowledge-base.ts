export interface paths {
	'/knowledge-bases/': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/** Get all knowledge bases for a location by location Id (paginated) */
		get: operations['listAllKnowledgeBasesPaginated']
		put?: never
		/** Create a new knowledge base (max 15 knowledge bases per location) */
		post: operations['createKnowledgeBase']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/knowledge-bases/{id}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		/** Update a knowledge base */
		put: operations['updateKnowledgeBase']
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/knowledge-bases/{knowledgeBaseId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/** Get knowledge base by ID */
		get: operations['getKnowledgeBaseById']
		put?: never
		post?: never
		/** Delete a knowledge base */
		delete: operations['deleteKnowledgeBase']
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/knowledge-bases/crawler': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/** Get all trained page links by knowledge base */
		get: operations['getAllWebsiteUrlsDataByKnowledgeBase']
		put?: never
		/** Start crawling and discover pages for training */
		post: operations['discoverWebsite']
		/** Delete trained pages */
		delete: operations['deleteTrainedUrlsForKnowledgeBase']
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/knowledge-bases/crawler/status': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/** Get crawling status for the latest operation */
		get: operations['getCrawlingStatusForLatestOperation']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/knowledge-bases/crawler/train': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/** Train discovered website pages and ingest into the knowledge base */
		post: operations['trainDiscoveredUrls']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/knowledge-bases/faqs': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get all FAQs by knowledge base with pagination support
		 * @description Retrieves FAQs for a knowledge base. Supports pagination using limit and lastFaqId parameters.
		 */
		get: operations['list']
		put?: never
		/** Create a new FAQ inside knowledge base */
		post: operations['create']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/knowledge-bases/faqs/{id}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		/** Update an existing knowledge base FAQ */
		put: operations['update']
		post?: never
		/** Delete an existing knowledge base FAQ */
		delete: operations['delete']
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
}
export type webhooks = Record<string, never>
export interface components {
	schemas: {
		AddFaqDTO: {
			/**
			 * @description faq answer as a string
			 * @example The capital of France is Paris.
			 */
			answer: string
			/**
			 * @description knowledge base ID as string
			 * @example 710KoEzy793Fxubft0bc
			 */
			knowledgeBaseId: string
			/**
			 * @description location ID as string
			 * @example HqDZpF8GH3qvgJTmKCoL
			 */
			locationId: string
			/**
			 * @description faq question as a string
			 * @example What is the capital of France?
			 */
			question: string
		}
		BadRequestDTO: {
			/** @example Bad Request */
			message?: string
			/** @example 400 */
			statusCode?: number
		}
		CrawledUrlDTO: {
			/**
			 * @description URL to the stored content file
			 * @example https://storage.googleapis.com/crm-conversations-ai-staging/conversationAI/2025/8/1/locations/qIyivCmsuEOSnyoFYEej/688c739c88c89f21ad30f63e-4IseusbZ3vDXMT8WNw9M.txt
			 */
			content: string
			/**
			 * @description Whether the content was edited by user
			 * @example false
			 */
			contentEditedByUser: boolean
			/**
			 * @description Unique identifier for the URL
			 * @example 688c73a25275c513f5f3a7de
			 */
			id: string
			/**
			 * @description Knowledge base ID this URL belongs to
			 * @example Arc9QRauPKkSuMJO8D0m
			 */
			knowledgeBaseId: string
			/**
			 * @description Location ID associated with this URL
			 * @example qIyivCmsuEOSnyoFYEej
			 */
			locationId: string
			/**
			 * @description Current processing status of the URL
			 * @example Successful
			 * @enum {string}
			 */
			status:
				| 'Pending'
				| 'Processing'
				| 'Successful'
				| 'Failed'
				| 'Existing'
				| 'Restricted'
				| 'Cancelled'
				| 'Aborted'
				| 'Training'
			/**
			 * @description Title of the webpage
			 * @example MDN Blog
			 */
			title: string
			/**
			 * @description Last updated timestamp
			 * @example 2025-08-01T07:58:29.858Z
			 */
			updatedAt: string
			/**
			 * @description The actual URL that was crawled
			 * @example https://developer.mozilla.org/en-US/blog
			 */
			url: string
		}
		CrawlingAggregateDTO: {
			/**
			 * @description Status grouping identifier
			 * @example Failed
			 * @enum {string}
			 */
			_id:
				| 'Pending'
				| 'Processing'
				| 'Successful'
				| 'Failed'
				| 'Existing'
				| 'Restricted'
				| 'Cancelled'
				| 'Aborted'
				| 'Training'
			/** @description Array of records for this status */
			records: components['schemas']['CrawlingRecordDTO'][]
		}
		CrawlingRecordDTO: {
			/** @description Error details (for failed records) */
			error?: components['schemas']['ErrorDetailsDTO']
			/**
			 * @description Unique record identifier
			 * @example 688e41118a188704914d13c0
			 */
			id: string
			/**
			 * @description Page title (for successful/pending records)
			 * @example JavaScript Temporal is coming | MDN Blog
			 */
			title?: string
			/**
			 * @description URL being crawled
			 * @example https://developer.mozilla.org/en-US/blog/rss.xml
			 */
			url: string
		}
		CrawlingStatusDataDTO: {
			/** @description Aggregated crawling results by status */
			aggregate: components['schemas']['CrawlingAggregateDTO'][]
			/** @description Detailed operation information */
			operationDetails: components['schemas']['OperationDetailsDTO']
		}
		CrawlingStatusResponseDTO: {
			/** @description Detailed crawling status data */
			data: components['schemas']['CrawlingStatusDataDTO']
			/**
			 * @description Indicates if the operation was successful
			 * @example true
			 */
			success: boolean
		}
		CreateFaqResponseDTO: {
			/** @description Created FAQ details */
			faq: components['schemas']['FaqResponseDTO']
			/**
			 * @description Success status of the operation
			 * @example true
			 */
			success: boolean
		}
		CreateKnowledgeBaseDTO: {
			description?: string
			locationId: string
			name: string
		}
		CreateKnowledgeBaseResponseDTO: {
			/** @description Created knowledge base details */
			data: components['schemas']['KnowledgeBaseDataDTO']
			/**
			 * @description Success status of the operation
			 * @example true
			 */
			success: boolean
		}
		DeleteFaqResponseDTO: {
			/**
			 * @description Success status of the delete operation
			 * @example true
			 */
			success: boolean
		}
		DeleteKnowledgeBaseResponseDTO: {
			success: boolean
		}
		DeleteWebsiteUrlRequestDTO: {
			/**
			 * @description knowledge base ID as string
			 * @example tDtDnQdgm2LXpyiqYvZ6
			 */
			knowledgeBaseId: string
			/**
			 * @description location ID as string
			 * @example tDtDnQdgm2LXpyiqYvZ6
			 */
			locationId: string
			/**
			 * @description List of trained urls ids ( fetched from the Get all trained page links by knowledge base endpoint)
			 * @example [tDtDnQdgm2LXpyiqYvZ6]
			 */
			urlIds: string[]
		}
		DeleteWebsiteUrlResponseDTO: {
			/**
			 * @description Indicates if the operation was successful
			 * @example true
			 */
			success: boolean
		}
		DiscoverWebsiteDataDTO: {
			/**
			 * @description Operation ID for tracking the discovery process
			 * @example 688e410c8a18870ecf4d13bb
			 */
			operationId: string
			/**
			 * @description Current status of the website discovery operation
			 * @example Processing
			 * @enum {string}
			 */
			status:
				| 'Pending'
				| 'Processing'
				| 'Successful'
				| 'Failed'
				| 'Existing'
				| 'Restricted'
				| 'Cancelled'
				| 'Aborted'
				| 'Training'
			/**
			 * @description The URL being discovered/crawled
			 * @example https://developer.mozilla.org/en-US/blog/
			 */
			url: string
		}
		DiscoverWebsiteRequestDTO: {
			/**
			 * @description knowledge base ID as string
			 * @example tDtDnQdgm2LXpyiqYvZ6
			 */
			knowledgeBaseId: string
			/**
			 * @description Location ID as string
			 * @example tDtDnQdgm2LXpyiqYvZ6
			 */
			locationId: string
			/**
			 * @description Mode as string
			 * @example Exact
			 * @enum {string}
			 */
			option: 'Exact' | 'Path' | 'Domain'
			/**
			 * @description Website URL as string
			 * @example https://kubernetes.io/tDtDnQdgm2LXpyiqYvZ6
			 */
			url: string
		}
		DiscoverWebsiteResponseDTO: {
			/** @description Data containing operation details */
			data: components['schemas']['DiscoverWebsiteDataDTO']
			/**
			 * @description Indicates if the operation was successful
			 * @example true
			 */
			success: boolean
		}
		ErrorDetailsDTO: {
			/**
			 * @description Error message
			 * @example Failed to fetch HTML content
			 */
			message: string
			/**
			 * @description Error name/type
			 * @example HttpException
			 */
			name: string
			/**
			 * @description Additional options (nullable)
			 * @example null
			 */
			options?: Record<string, never>
			/**
			 * @description Error response message
			 * @example Failed to fetch HTML content
			 */
			response: string
			/**
			 * @description Error stack trace
			 * @example HttpException: Failed to fetch HTML content
			 *         at getHtml (/app/dist/apps/conversations-ai/crm-conversations-ai-discover-worker.js:2531:15)
			 */
			stack: string
			/**
			 * @description HTTP status code
			 * @example 500
			 */
			status: number
		}
		FaqResponseDTO: {
			/**
			 * @description FAQ answer
			 * @example 3
			 */
			answer: string
			/**
			 * @description Date when FAQ was created
			 * @example 2025-08-02T19:47:57.243Z
			 */
			createdAt: string
			/**
			 * @description Whether the FAQ is deleted
			 * @example false
			 */
			deleted: boolean
			/**
			 * @description FAQ ID as string
			 * @example 3rzeElC1FOVY91veVBkp
			 */
			id: string
			/**
			 * @description Knowledge base ID
			 * @example I1rITlYLJofFosIqC4Np
			 */
			knowledgeBaseId: string
			/**
			 * @description Location ID
			 * @example qIyivCmsuEOSnyoFYEej
			 */
			locationId: string
			/**
			 * @description FAQ question
			 * @example What is 1+2?
			 */
			question: string
			/**
			 * @description FAQ question in lowercase
			 * @example what is 1+2?
			 */
			questionLowerCase: string
			/**
			 * @description Trained URL ID
			 * @example 688e6b6d8a1887e6d94d1475
			 */
			trainedUrlId: string
			/**
			 * @description Date when FAQ was last updated
			 * @example 2025-08-02T19:47:57.243Z
			 */
			updatedAt: string
		}
		GetAllKnowledgeBasesPaginatedDataDTO: {
			/**
			 * @description Total count of all active knowledge bases
			 * @example 16
			 */
			activeCount: number
			/**
			 * @description Whether there are more knowledge bases available
			 * @example true
			 */
			hasMore: boolean
			/** @description Array of knowledge bases */
			knowledgeBases: components['schemas']['KnowledgeBaseListItemDTO'][]
			/**
			 * @description ID of the last knowledge base in this page (use for next page request)
			 * @example ZwTB8S0yo0FIBY6OPZTD
			 */
			lastKnowledgeBaseId?: string
		}
		GetAllKnowledgeBasesPaginatedResponseDTO: {
			/** @description Paginated knowledge bases data */
			data: components['schemas']['GetAllKnowledgeBasesPaginatedDataDTO']
			/**
			 * @description Success status of the operation
			 * @example true
			 */
			success: boolean
		}
		GetAllUrlsByKnowledgeBaseResponseDTO: {
			/**
			 * @description Total count of URLs in the knowledge base
			 * @example 64
			 */
			count: number
			/** @description Array of crawled URLs with their details */
			urls: components['schemas']['CrawledUrlDTO'][]
		}
		GetKnowledgeBaseByIdDataDTO: {
			/**
			 * @description Date when knowledge base was created
			 * @example 2025-08-01T07:50:41.244Z
			 */
			createdAt: string
			/**
			 * @description Whether the knowledge base is deleted
			 * @example false
			 */
			deleted: boolean
			/**
			 * @description Knowledge base ID
			 * @example Arc9QRauPKkSuMJO8D0m
			 */
			id: string
			/**
			 * @description Whether the knowledge base is default or not
			 * @example false
			 */
			isDefault?: boolean
			/** @description Knowledge base metadata with content counts */
			kbMetadata: components['schemas']['KnowledgeBaseMetadataDTO']
			/**
			 * @description Location ID
			 * @example qIyivCmsuEOSnyoFYEej
			 */
			locationId: string
			/**
			 * @description Knowledge base name
			 * @example KB for Bot Training
			 */
			name: string
			/**
			 * @description Knowledge base name in lowercase
			 * @example kb for bot training
			 */
			nameLowerCase: string
			/**
			 * @description Date when knowledge base was last updated
			 * @example 2025-08-01T10:05:58.694Z
			 */
			updatedAt: string
		}
		GetKnowledgeBaseByIdResponseDTO: {
			/** @description Knowledge base details */
			data: components['schemas']['GetKnowledgeBaseByIdDataDTO']
			/**
			 * @description Success status of the operation
			 * @example true
			 */
			success: boolean
		}
		InternalServerErrorDTO: {
			/** @example Internal Server Error */
			message?: string
			/** @example 500 */
			statusCode?: number
		}
		KnowledgeBaseDataDTO: {
			/**
			 * @description Date when knowledge base was created
			 * @example 2025-08-02T20:26:57.057Z
			 */
			createdAt: string
			/**
			 * @description Whether the knowledge base is deleted
			 * @example false
			 */
			deleted: boolean
			/**
			 * @description Knowledge base ID
			 * @example ZwTB8S0yo0FIBY6OPZTD
			 */
			id: string
			/**
			 * @description Knowledge base metadata
			 * @example {}
			 */
			kbMetadata: Record<string, never>
			/**
			 * @description Location ID
			 * @example qIyivCmsuEOSnyoFYEej
			 */
			locationId: string
			/**
			 * @description Knowledge base name
			 * @example KB for Bot Training
			 */
			name: string
			/**
			 * @description Knowledge base name in lowercase
			 * @example kb for bot training
			 */
			nameLowerCase: string
			/**
			 * @description Date when knowledge base was last updated
			 * @example 2025-08-02T20:26:57.057Z
			 */
			updatedAt: string
		}
		KnowledgeBaseListItemDTO: {
			/**
			 * @description Date when knowledge base was created
			 * @example 2025-08-02T20:26:57.057Z
			 */
			createdAt: string
			/**
			 * @description Knowledge base ID
			 * @example ZwTB8S0yo0FIBY6OPZTD
			 */
			id: string
			/**
			 * @description Knowledge base name
			 * @example bot training kb
			 */
			name: string
		}
		KnowledgeBaseMetadataDTO: {
			/**
			 * @description Number of FAQs in the knowledge base
			 * @example 2
			 */
			faqs: number
			/**
			 * @description Number of files in the knowledge base
			 * @example 0
			 */
			files: number
			/**
			 * @description Number of rich text documents in the knowledge base
			 * @example 0
			 */
			richText: number
			/**
			 * @description Number of tables in the knowledge base
			 * @example 0
			 */
			tables: number
			/**
			 * @description Number of URLs in the knowledge base
			 * @example 64
			 */
			urls: number
			/**
			 * @description Number of web searche configs in the knowledge base
			 * @example 0
			 */
			webSearches: number
		}
		ListFaqsResponseDTO: {
			/**
			 * @description Total count of all FAQs in the knowledge base
			 * @example 150
			 */
			count: number
			/** @description Array of FAQ objects */
			faqs: components['schemas']['FaqResponseDTO'][]
			/**
			 * @description Whether there are more FAQs available
			 * @example true
			 */
			hasMore?: boolean
			/**
			 * @description Last FAQ ID for pagination (use as lastFaqId in next request)
			 * @example 3rzeElC1FOVY91veVBkp
			 */
			lastFaqId?: string
		}
		OperationDetailsDTO: {
			/**
			 * @description Version field
			 * @example 0
			 */
			__v: number
			/**
			 * @description Operation unique identifier
			 * @example 688e410c8a18870ecf4d13bb
			 */
			_id: string
			/**
			 * @description Operation creation timestamp
			 * @example 2025-08-02T16:47:08.182Z
			 */
			createdAt: string
			/**
			 * @description Number of URLs discovered
			 * @example 66
			 */
			discoveredUrlsCount: number
			/**
			 * @description Knowledge base ID
			 * @example CCNPhKqSCkTOG8O7dtbq
			 */
			knowledgeBaseId: string
			/**
			 * @description Associated location ID
			 * @example nnAzVJqSv6PJ1p6zrhvC
			 */
			locationId: string
			/**
			 * @description Crawling mode used
			 * @example Path
			 * @enum {string}
			 */
			mode: 'Exact' | 'Path' | 'Domain'
			/**
			 * @description Robots.txt file content
			 * @example User-agent: *
			 *     Sitemap: https://developer.mozilla.org/sitemap.xml
			 *     Disallow: /api/
			 */
			robotsFileData?: string
			/**
			 * @description Current operation status
			 * @example Pending
			 * @enum {string}
			 */
			status:
				| 'Pending'
				| 'Processing'
				| 'Successful'
				| 'Failed'
				| 'Existing'
				| 'Restricted'
				| 'Cancelled'
				| 'Aborted'
				| 'Training'
			/**
			 * @description Number of URLs successfully trained
			 * @example 0
			 */
			trainedUrlsCount: number
			/**
			 * @description Last update timestamp
			 * @example 2025-08-02T16:48:43.635Z
			 */
			updatedAt: string
			/**
			 * @description Base URL being crawled
			 * @example https://developer.mozilla.org/en-US/blog/
			 */
			url: string
		}
		TrainDiscoveredUrlsDTO: {
			/**
			 * @description knowledge base id
			 * @example jjkkxftgvbhjmn,
			 */
			knowledgeBaseId: string
			/**
			 * @description Location ID as string
			 * @example tDtDnQdgm2LXpyiqYvZ6
			 */
			locationId: string
			/**
			 * @description operation id as string
			 * @example 688b640bcb02d498102a13f0,
			 */
			operationId: string
			/**
			 * @description List of Object ids of the discovered urls
			 * @example [
			 *       "688b640bcb02d498102a13ec",
			 *       "688b640bcb02d498102a13ea"
			 *     ]
			 */
			urlIds: string[]
		}
		TrainDiscoveredUrlsResponseDTO: {
			/**
			 * @description Indicates if the operation was successful
			 * @example true
			 */
			success: boolean
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
		UpdateFaqBodyDTO: {
			/**
			 * @description faq answer as a string
			 * @example The capital of France is Paris.
			 */
			answer: string
			/**
			 * @description faq question as a string
			 * @example What is the capital of France?
			 */
			question: string
		}
		UpdateFaqResponseDTO: {
			/**
			 * @description Success status of the update operation
			 * @example true
			 */
			success: boolean
		}
		UpdateKnowledgeBaseDTO: {
			/** @description field to update the description of the knowledge base */
			description?: string
			/** @description field to update the name of the knowledge base */
			name?: string
		}
		UpdateKnowledgeBaseResponseDTO: {
			success: boolean
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
	listAllKnowledgeBasesPaginated: {
		parameters: {
			query: {
				/** @description ID of the last knowledge base from the previous page (for pagination) */
				lastKnowledgeBaseId?: string
				/** @description Maximum number of knowledge bases to return */
				limit?: number
				locationId: string
				/** @description search query for knowledge base name */
				query?: string
			}
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path?: never
			cookie?: never
		}
		requestBody?: never
		responses: {
			/** @description Paginated knowledge bases retrieved successfully */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['GetAllKnowledgeBasesPaginatedResponseDTO']
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
	createKnowledgeBase: {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path?: never
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['CreateKnowledgeBaseDTO']
			}
		}
		responses: {
			/** @description Knowledge base created successfully */
			201: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['CreateKnowledgeBaseResponseDTO']
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
	updateKnowledgeBase: {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				id: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['UpdateKnowledgeBaseDTO']
			}
		}
		responses: {
			/** @description Knowledge base updated successfully */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UpdateKnowledgeBaseResponseDTO']
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
	getKnowledgeBaseById: {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				knowledgeBaseId: string
			}
			cookie?: never
		}
		requestBody?: never
		responses: {
			/** @description Knowledge base by ID retrieved successfully */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['GetKnowledgeBaseByIdResponseDTO']
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
	deleteKnowledgeBase: {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				knowledgeBaseId: string
			}
			cookie?: never
		}
		requestBody?: never
		responses: {
			/** @description Knowledge base deleted successfully */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['DeleteKnowledgeBaseResponseDTO']
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
	getAllWebsiteUrlsDataByKnowledgeBase: {
		parameters: {
			query: {
				/** @description knowledge base ID as string */
				knowledgeBaseId: string
				/** @description location ID as string */
				locationId: string
				/** @description Page number */
				page?: number
				/** @description Records per page */
				pageLength?: number
				/** @description query to filter on url links */
				query?: string
			}
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path?: never
			cookie?: never
		}
		requestBody?: never
		responses: {
			/** @description Trained page links retrieved successfully */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['GetAllUrlsByKnowledgeBaseResponseDTO']
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
			/** @description Internal Server Error */
			500: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['InternalServerErrorDTO']
				}
			}
		}
	}
	discoverWebsite: {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path?: never
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['DiscoverWebsiteRequestDTO']
			}
		}
		responses: {
			/** @description Crawling and discovery started successfully */
			201: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['DiscoverWebsiteResponseDTO']
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
			/** @description Internal Server Error */
			500: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['InternalServerErrorDTO']
				}
			}
		}
	}
	deleteTrainedUrlsForKnowledgeBase: {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path?: never
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['DeleteWebsiteUrlRequestDTO']
			}
		}
		responses: {
			/** @description Selected pages deleted successfully */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['DeleteWebsiteUrlResponseDTO']
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
			/** @description Internal Server Error */
			500: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['InternalServerErrorDTO']
				}
			}
		}
	}
	getCrawlingStatusForLatestOperation: {
		parameters: {
			query: {
				/** @description knowledge base id */
				knowledgeBaseId: string
				/** @description Location ID as string */
				locationId: string
				/** @description operation id as string */
				operationId: string
			}
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path?: never
			cookie?: never
		}
		requestBody?: never
		responses: {
			/** @description Operation status fetched successfully */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['CrawlingStatusResponseDTO']
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
			/** @description Internal Server Error */
			500: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['InternalServerErrorDTO']
				}
			}
		}
	}
	trainDiscoveredUrls: {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path?: never
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['TrainDiscoveredUrlsDTO']
			}
		}
		responses: {
			/** @description Pages trained successfully */
			201: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['TrainDiscoveredUrlsResponseDTO']
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
			/** @description Internal Server Error */
			500: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['InternalServerErrorDTO']
				}
			}
		}
	}
	list: {
		parameters: {
			query: {
				/** @description knowledge base ID as string */
				knowledgeBaseId: string
				/** @description Last FAQ ID for pagination (cursor-based) */
				lastFaqId?: string
				/** @description Limit the number of FAQs returned */
				limit?: number
				/** @description location ID as string */
				locationId: string
			}
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path?: never
			cookie?: never
		}
		requestBody?: never
		responses: {
			/** @description FAQs retrieved successfully */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['ListFaqsResponseDTO']
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
			/** @description Internal Server Error */
			500: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['InternalServerErrorDTO']
				}
			}
		}
	}
	create: {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path?: never
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['AddFaqDTO']
			}
		}
		responses: {
			/** @description FAQ created successfully */
			201: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['CreateFaqResponseDTO']
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
			/** @description Internal Server Error */
			500: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['InternalServerErrorDTO']
				}
			}
		}
	}
	update: {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				/** @description faq ID as string */
				id: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['UpdateFaqBodyDTO']
			}
		}
		responses: {
			/** @description FAQ updated successfully */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UpdateFaqResponseDTO']
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
			/** @description Internal Server Error */
			500: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['InternalServerErrorDTO']
				}
			}
		}
	}
	delete: {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				/** @description faq ID as string */
				id: string
			}
			cookie?: never
		}
		requestBody?: never
		responses: {
			/** @description FAQ deleted successfully */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['DeleteFaqResponseDTO']
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
			/** @description Internal Server Error */
			500: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['InternalServerErrorDTO']
				}
			}
		}
	}
}
