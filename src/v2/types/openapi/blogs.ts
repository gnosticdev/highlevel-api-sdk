export type paths = {
	'/blogs/authors': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get all authors
		 * @description The "Get all authors" Api return the blog authors for a given location ID. Please use "blogs/author.readonly"
		 */
		get: operations['get-all-blog-authors-by-location']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/blogs/categories': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get all categories
		 * @description The "Get all categories" Api return the blog categoies for a given location ID. Please use "blogs/category.readonly"
		 */
		get: operations['get-all-categories-by-location']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/blogs/posts': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Create Blog Post
		 * @description The "Create Blog Post" API allows you create blog post for any given blog site. Please use blogs/post.write
		 */
		post: operations['create-blog-post']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/blogs/posts/{postId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		/**
		 * Update Blog Post
		 * @description The "Update Blog Post" API allows you create blog post for any given blog site. Please use blogs/post-update.write
		 */
		put: operations['update-blog-post']
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/blogs/posts/url-slug-exists': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Check url slug
		 * @description The "Check url slug" API allows check the blog slug validation which is needed before publishing any blog post. Please use blogs/check-slug.readonly. you can find the POST ID from the post edit url.
		 */
		get: operations['check-url-slug-exists']
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
		AuthorsResponseDTO: {
			/** @description Array of authors */
			authors: unknown[]
		}
		BadRequestDTO: {
			/** @example Bad Request */
			message?: string
			/** @example 400 */
			statusCode?: number
		}
		BlogPostCreateResponseWrapperDTO: {
			/** @description Object containing response data of blog post create. */
			data: Record<string, never>
		}
		BlogPostUpdateResponseWrapperDTO: {
			/** @description Object containing response data of blog post update */
			updatedBlogPost: Record<string, never>
		}
		CategoriesResponseDTO: {
			/** @description Array of categories */
			categories: unknown[]
		}
		CreateBlogPostParams: {
			archived?: boolean
			author: string
			/** @description You can find the blog id from blog site dashboard link */
			blogId: string
			canonicalLink: string
			categories: string[]
			currentVersion?: string
			description: string
			imageAltText: string
			imageUrl: string
			locationId: string
			metaData?: Record<string, never>
			publishedAt: string
			/** @example <h1>Your blog content</h1> */
			rawHTML: string
			readTimeInMinutes: number
			status: string
			tags: string[]
			title: string
			urlSlug: string
			wordCount: number
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
		UpdateBlogPostParams: {
			author?: string
			/** @example ZiMMOp3ZEdnsZ4qPAjW0 */
			blogId?: string
			canonicalLink?: string
			categories?: string[]
			/** @example blog post description for SEO */
			description?: string
			/** @example Alt text for blog image for SEO */
			imageAltText?: string
			/** @example https://storage.googleapis.com/ghl-test/rLu1WubT5lUfPEHMhIWK/media/62c2f2df18f2ab8db2a77b98.jpeg */
			imageUrl?: string
			/** @example fACm0Ojm5oC70G3DcFmE */
			locationId: string
			/** @example 2024-09-25T11:31:58.045Z */
			publishedAt?: string
			/** @example Plain HTML/TEXT for blog post */
			rawHTML?: string
			/** @example 4.16 */
			readTimeInMinutes?: number
			status: string
			tags?: string[]
			/** @example Title of the blog */
			title: string
			urlSlug?: string
			/** @example 550 */
			wordCount?: number
		}
		UrlSlugCheckResponseDTO: {
			/** @description Indicates whether the url slug exists or not */
			exists: boolean
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
	'get-all-blog-authors-by-location': {
		parameters: {
			query: {
				/**
				 * @description Number of authors to show in the listing
				 * @example 5
				 */
				limit: number
				/**
				 * @description Location Id
				 * @example ve9EPM428h8vShlRW1KT
				 */
				locationId: string
				/**
				 * @description Number of authors to skip in listing
				 * @example 0
				 */
				offset: number
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
					'application/json': components['schemas']['AuthorsResponseDTO']
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
	'get-all-categories-by-location': {
		parameters: {
			query: {
				/** @description Number of categories to show in the listing */
				limit: number
				/** @example ve9EPM428h8vShlRW1KT */
				locationId: string
				/** @description Number of categories to skip in listing */
				offset: number
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
					'application/json': components['schemas']['CategoriesResponseDTO']
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
	'create-blog-post': {
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
				'application/json': components['schemas']['CreateBlogPostParams']
			}
		}
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BlogPostCreateResponseWrapperDTO']
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
	'update-blog-post': {
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
				'application/json': components['schemas']['UpdateBlogPostParams']
			}
		}
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BlogPostUpdateResponseWrapperDTO']
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
	'check-url-slug-exists': {
		parameters: {
			query: {
				/** @example ve9EPM428h8vShlRW1KT */
				locationId: string
				/** @example 66f429b8afdce84227a4610d */
				postId?: string
				urlSlug: string
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
					'application/json': components['schemas']['UrlSlugCheckResponseDTO']
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
