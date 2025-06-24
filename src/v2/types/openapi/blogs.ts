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
		 * @description The "Update Blog Post" API allows you update blog post for any given blog site. Please use blogs/post-update.write
		 */
		put: operations['update-blog-post']
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/blogs/posts/all': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get Blog posts by Blog ID
		 * @description The "Get Blog posts by Blog ID" API allows you get blog posts for any given blog site using blog ID.Please use blogs/posts.readonly
		 */
		get: operations['get-blog-post']
		put?: never
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
	'/blogs/site/all': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get Blogs by Location ID
		 * @description The "Get Blogs by Location ID" API allows you get blogs using Location ID.Please use blogs/list.readonly
		 */
		get: operations['get-blogs']
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
		AuthorResponseDTO: {
			/** @example lMOzIQZne5m6zQ528sT6 */
			_id: string
			/** @example https://tryghl.blog/post/technology */
			canonicalLink: string
			/** @example lMOzIQZne5m6zQ528sT6 */
			locationId: string
			/** @example HighLevel */
			name: string
			/** @example 2025-01-03T11:06:35.822Z */
			updatedAt: string
		}
		AuthorsResponseDTO: {
			/** @description Array of authors */
			authors: components['schemas']['AuthorResponseDTO'][]
		}
		BadRequestDTO: {
			/** @example Bad Request */
			message?: string
			/** @example 400 */
			statusCode?: number
		}
		BlogGetResponseWrapperDTO: {
			/** @description Object containing response data of blog */
			data: components['schemas']['BlogResponseDTO'][]
		}
		BlogPostCreateResponseWrapperDTO: {
			/** @description Object containing response data of blog post create. */
			data: components['schemas']['BlogPostResponseDTO']
		}
		BlogPostGetResponseWrapperDTO: {
			/** @description Object containing response data of blog posts */
			blogs: components['schemas']['BlogPostResponseDTO'][]
		}
		BlogPostResponseDTO: {
			/**
			 * @description Unique identifier of the blog post
			 * @example 66c381b38be80858b9af62b6
			 */
			_id: string
			/**
			 * @description Indicates whether the blog post is archived
			 * @example false
			 */
			archived: boolean
			/**
			 * @description Identifier of the author of the blog post
			 * @example 659ec9634a3796e4e47cc360
			 */
			author?: string
			/**
			 * @description Canonical link of the blog post
			 * @example https://blog.chatgpts.agency/post/test-8384
			 */
			canonicalLink?: string
			/**
			 * @description Array of category IDs associated with the blog post
			 * @example [
			 *       "659ecabc4a37969a2b7cc370",
			 *       "6683abde331c041f32c07aee"
			 *     ]
			 */
			categories: string[]
			/**
			 * @description Description of the blog post
			 * @example Description
			 */
			description: string
			/**
			 * @description Alternative text for the blog post image
			 * @example alt
			 */
			imageAltText: string
			/**
			 * @description URL of the image associated with the blog post
			 * @example https://storage.googleapis.com/ghl-test/fACm0Ojm5oC70G3DcFmE/media/66b5aa3b1745b2713a8d033f.jpeg
			 */
			imageUrl: string
			/**
			 * @description Timestamp when the blog post was published
			 * @example 2024-08-19T17:14:57.000Z
			 */
			publishedAt: string
			/**
			 * @description Publication status of the blog post
			 * @example PUBLISHED
			 */
			status: string
			/**
			 * @description Array of tags associated with the blog post
			 * @example [
			 *       "Apple",
			 *       "Banana"
			 *     ]
			 */
			tags?: string[]
			/**
			 * @description Title of the blog post
			 * @example Banana is good source of energy
			 */
			title: string
			/**
			 * @description Timestamp when the blog post was last updated
			 * @example 2024-08-19T17:32:36.182Z
			 */
			updatedAt: string
			/**
			 * @description URL slug for the blog post
			 * @example banana-good-energy
			 */
			urlSlug: string
		}
		BlogPostUpdateResponseWrapperDTO: {
			/** @description Object containing response data of blog post update */
			updatedBlogPost: components['schemas']['BlogPostResponseDTO']
		}
		BlogResponseDTO: {
			/**
			 * @description Unique identifier of the blog
			 * @example lMOzIQZne5m6zQ528sT6
			 */
			_id: string
			/**
			 * @description Name of the blog
			 * @example My blog
			 */
			name: string
		}
		CategoriesResponseDTO: {
			/** @description Array of categories */
			categories: components['schemas']['CategoryResponseDTO'][]
		}
		CategoryResponseDTO: {
			/** @example lMOzIQZne5m6zQ528sT6 */
			_id: string
			/** @example https://tryghl.blog/doc/category/agency-growth */
			canonicalLink: string
			/** @example HighLevel */
			label?: string
			/** @example lMOzIQZne5m6zQ528sT6 */
			locationId: string
			/** @example 2025-01-03T11:06:35.822Z */
			updatedAt: string
			/** @example agency-growth */
			urlSlug: string
		}
		CreateBlogPostParams: {
			/**
			 * @description This needs to be author id, which you can get from the author get api call.
			 * @example 6683abde331c041f32c07aea
			 */
			author: string
			/**
			 * @description You can find the blog id from blog site dashboard link
			 * @example Blog ID
			 */
			blogId: string
			/** @example https://tryghl.blog/post/testing-unsplash */
			canonicalLink?: string
			/**
			 * @description This needs to be array of category ids, which you can get from the category get api call.
			 * @example [
			 *       "9c48df2694a849b6089f9d0d3513efe",
			 *       "6683abde331c041f32c07aee"
			 *     ]
			 */
			categories: string[]
			/** @example A short description */
			description: string
			/** @example Alt text for your blog image */
			imageAltText: string
			/** @example Image URl */
			imageUrl: string
			/** @example Location ID */
			locationId: string
			/**
			 * @description Provide ISO timestamp
			 * @example 2025-02-05T18:30:47.000Z
			 */
			publishedAt: string
			/** @example <h1>Your blog content</h1> */
			rawHTML: string
			/**
			 * @example This can be PUBLISHED OR SCHEDULED OR ARCHIVED OR DRAFT
			 * @enum {string}
			 */
			status: 'DRAFT' | 'PUBLISHED' | 'SCHEDULED' | 'ARCHIVED'
			/** @example [
			 *       "blog",
			 *       "seo"
			 *     ] */
			tags?: string[]
			/** @example Your blog title */
			title: string
			/** @example any-blog-post-url */
			urlSlug: string
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
			/**
			 * @description This needs to be author id, which you can get from the author get api call.
			 * @example 6683abde331c041f32c07aea
			 */
			author: string
			/**
			 * @description You can find the blog id from blog site dashboard link
			 * @example Blog ID
			 */
			blogId: string
			/** @example https://tryghl.blog/post/testing-unsplash */
			canonicalLink?: string
			/**
			 * @description This needs to be array of category ids, which you can get from the category get api call.
			 * @example [
			 *       "9c48df2694a849b6089f9d0d3513efe",
			 *       "6683abde331c041f32c07aee"
			 *     ]
			 */
			categories: string[]
			/** @example A short description */
			description: string
			/** @example Alt text for your blog image */
			imageAltText: string
			/** @example Image URl */
			imageUrl: string
			/** @example Location ID */
			locationId: string
			/**
			 * @description Provide ISO timestamp
			 * @example 2025-02-05T18:30:47.000Z
			 */
			publishedAt: string
			/** @example <h1>Your blog content</h1> */
			rawHTML: string
			/**
			 * @example PUBLISHED
			 * @enum {string}
			 */
			status: 'DRAFT' | 'PUBLISHED' | 'SCHEDULED' | 'ARCHIVED'
			/** @example [
			 *       "blog",
			 *       "seo"
			 *     ] */
			tags?: string[]
			/** @example Your blog title */
			title: string
			/** @example any-blog-post-url */
			urlSlug: string
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
	'get-blog-post': {
		parameters: {
			query: {
				/** @example 66f429b8afdce84227a4610d */
				blogId: string
				/** @example 4 */
				limit: number
				/** @example ve9EPM428h8vShlRW1KT */
				locationId: string
				/** @example 0 */
				offset: number
				/**
				 * @description search for any post by name
				 * @example ai news
				 */
				searchTerm?: string
				/** @example PUBLISHED */
				status?: 'PUBLISHED' | 'SCHEDULED' | 'ARCHIVED' | 'DRAFT'
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
					'application/json': components['schemas']['BlogPostGetResponseWrapperDTO']
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
	'get-blogs': {
		parameters: {
			query: {
				/** @example 4 */
				limit: number
				/** @example ve9EPM428h8vShlRW1KT */
				locationId: string
				/**
				 * @description search for any post by name
				 * @example ai news
				 */
				searchTerm?: string
				/** @example 0 */
				skip: number
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
					'application/json': components['schemas']['BlogGetResponseWrapperDTO']
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
