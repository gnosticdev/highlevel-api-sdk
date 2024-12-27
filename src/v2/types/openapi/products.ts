export type paths = {
	'/products/': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * List Products
		 * @description The "List Products" API allows to retrieve a paginated list of products. Customize your results by filtering products based on name or paginate through the list using the provided query parameters. This endpoint provides a straightforward way to explore and retrieve product information.
		 */
		get: operations['list-invoices']
		put?: never
		/**
		 * Create Product
		 * @description The "Create Product" API allows adding a new product to the system. Use this endpoint to create a product with the specified details. Ensure that the required information is provided in the request payload.
		 */
		post: operations['create-product']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/products/{productId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get Product by ID
		 * @description The "Get Product by ID" API allows to retrieve information for a specific product using its unique identifier. Use this endpoint to fetch details for a single product based on the provided product ID.
		 */
		get: operations['get-product-by-id']
		/**
		 * Update Product by ID
		 * @description The "Update Product by ID" API allows modifying information for a specific product using its unique identifier. Use this endpoint to update details for a single product based on the provided product ID.
		 */
		put: operations['update-product-by-id']
		post?: never
		/**
		 * Delete Product by ID
		 * @description The "Delete Product by ID" API allows deleting a specific product using its unique identifier. Use this endpoint to remove a product from the system.
		 */
		delete: operations['delete-product-by-id']
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/products/{productId}/price': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * List Prices for a Product
		 * @description The "List Prices for a Product" API allows retrieving a paginated list of prices associated with a specific product. Customize your results by filtering prices or paginate through the list using the provided query parameters.
		 */
		get: operations['list-prices-for-product']
		put?: never
		/**
		 * Create Price for a Product
		 * @description The "Create Price for a Product" API allows adding a new price associated with a specific product to the system. Use this endpoint to create a price with the specified details for a particular product. Ensure that the required information is provided in the request payload.
		 */
		post: operations['create-price-for-product']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/products/{productId}/price/{priceId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get Price by ID for a Product
		 * @description The "Get Price by ID for a Product" API allows retrieving information for a specific price associated with a particular product using its unique identifier. Use this endpoint to fetch details for a single price based on the provided price ID and product ID.
		 */
		get: operations['get-price-by-id-for-product']
		/**
		 * Update Price by ID for a Product
		 * @description The "Update Price by ID for a Product" API allows modifying information for a specific price associated with a particular product using its unique identifier. Use this endpoint to update details for a single price based on the provided price ID and product ID.
		 */
		put: operations['update-price-by-id-for-product']
		post?: never
		/**
		 * Delete Price by ID for a Product
		 * @description The "Delete Price by ID for a Product" API allows deleting a specific price associated with a particular product using its unique identifier. Use this endpoint to remove a price from the system.
		 */
		delete: operations['delete-price-by-id-for-product']
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
		CreatePriceDto: {
			/**
			 * @description Continue selling when out of stock
			 * @example true
			 */
			allowOutOfStockPurchases?: boolean
			/**
			 * @description The amount of the price. ( min: 0.01 )
			 * @example 99.99
			 */
			amount: number
			/**
			 * @description Available inventory stock quantity
			 * @example 5
			 */
			availableQuantity?: number
			/**
			 * @description The compare at price for the price.
			 * @example 19.99
			 */
			compareAtPrice?: number
			/**
			 * @description The currency of the price.
			 * @example USD
			 */
			currency: string
			/** @description A brief description of the price. */
			description?: string
			/**
			 * @description The unique identifier of the location associated with the price.
			 * @example 6578278e879ad2646715ba9c
			 */
			locationId: string
			/** @description An array of membership offers associated with the price. */
			membershipOffers?: components['schemas']['MembershipOfferDto'][]
			/** @description Additional metadata associated with the price. */
			meta?: components['schemas']['PriceMetaDto']
			/**
			 * @description The name of the price.
			 * @example Price Name
			 */
			name: string
			/** @description The recurring details of the price (if type is recurring). */
			recurring?: components['schemas']['RecurringDto']
			/**
			 * @description The setup fee for the price.
			 * @example 10.99
			 */
			setupFee?: number
			/**
			 * @description The total number of billing cycles for the price. ( min: 1 )
			 * @example 12
			 */
			totalCycles?: number
			/**
			 * @description Need to track inventory stock quantity
			 * @example true
			 */
			trackInventory?: boolean
			/**
			 * @description The trial period duration in days (if applicable).
			 * @example 7
			 */
			trialPeriod?: number
			/**
			 * @description The type of the price.
			 * @example one_time
			 * @enum {string}
			 */
			type: 'one_time' | 'recurring'
			/**
			 * @description The unique identifier of the user who created the price.
			 * @example 6578278e879ad2646715ba9c
			 */
			userId?: string
			/**
			 * @description An array of variant option IDs associated with the price.
			 * @example [
			 *       "option_id_1",
			 *       "option_id_2"
			 *     ]
			 */
			variantOptionIds?: string[]
		}
		CreatePriceResponseDto: {
			/**
			 * @description The unique identifier for the price.
			 * @example 655b33aa2209e60b6adb87a7
			 */
			_id: string
			/**
			 * @description Continue selling when out of stock
			 * @example true
			 */
			allowOutOfStockPurchases?: boolean
			/**
			 * @description The amount of the price.
			 * @example 199999
			 */
			amount: number
			/**
			 * @description Available inventory stock quantity
			 * @example 5
			 */
			availableQuantity?: number
			/**
			 * @description The compare-at price for comparison purposes.
			 * @example 2000000
			 */
			compareAtPrice?: number
			/**
			 * Format: date-time
			 * @description The creation timestamp of the price.
			 * @example 2023-11-20T10:23:38.645Z
			 */
			createdAt?: string
			/**
			 * @description The currency code for the price.
			 * @example INR
			 */
			currency: string
			/**
			 * @description The unique identifier for the location.
			 * @example 3SwdhCsvxI8Au3KsPJt6
			 */
			locationId?: string
			/** @description An array of membership offers associated with the price. */
			membershipOffers?: components['schemas']['MembershipOfferDto'][]
			/**
			 * @description The name of the price.
			 * @example Red / S
			 */
			name: string
			/**
			 * @description The unique identifier for the associated product.
			 * @example 655b33a82209e60b6adb87a5
			 */
			product?: string
			/** @description The recurring details of the price (if type is recurring). */
			recurring?: components['schemas']['RecurringDto']
			/**
			 * @description Indicates whether inventory tracking is enabled.
			 * @example null
			 */
			trackInventory?: boolean
			/**
			 * @description The type of the price (e.g., one_time).
			 * @example one_time
			 * @enum {string}
			 */
			type: 'one_time' | 'recurring'
			/**
			 * Format: date-time
			 * @description The last update timestamp of the price.
			 * @example 2024-01-23T09:57:04.852Z
			 */
			updatedAt?: string
			/**
			 * @description The unique identifier for the user.
			 * @example 6YAtzfzpmHAdj0e8GkKp
			 */
			userId?: string
			/**
			 * @description An array of variant option IDs associated with the price.
			 * @example [
			 *       "h4z7u0im2q8",
			 *       "h3nst2ltsnn"
			 *     ]
			 */
			variantOptionIds?: string[]
		}
		CreateProductDto: {
			/**
			 * @description Indicates whether the product is available in-store.
			 * @example true
			 */
			availableInStore?: boolean
			/**
			 * @description A brief description of the product.
			 * @example Product description goes here.
			 */
			description?: string
			/**
			 * @description The URL for the product image.
			 * @example https://storage.googleapis.com/ghl-test/3SwdhCsvxI8Au3KsPJt6/media/65af8d5df88bdb4b1022ee90.png
			 */
			image?: string
			/**
			 * @description The unique identifier for the location.
			 * @example 3SwdhCsvxI8Au3KsPJt6
			 */
			locationId: string
			/** @description An array of medias for the product. */
			medias?: components['schemas']['ProductMediaDto'][]
			/**
			 * @description The name of the product.
			 * @example Awesome Product
			 */
			name: string
			/** @enum {string} */
			productType: 'DIGITAL' | 'PHYSICAL' | 'SERVICE'
			/**
			 * @description The statement descriptor for the product.
			 * @example abcde
			 */
			statementDescriptor?: string
			/** @description An array of variants for the product. */
			variants?: components['schemas']['ProductVariantDto'][]
		}
		CreateProductResponseDto: {
			/**
			 * @description The unique identifier for the product.
			 * @example 655b33a82209e60b6adb87a5
			 */
			_id: string
			/**
			 * @description Indicates whether the product is available in-store.
			 * @example true
			 */
			availableInStore?: boolean
			/**
			 * Format: date-time
			 * @description The creation timestamp of the product.
			 * @example 2023-11-20T10:23:36.515Z
			 */
			createdAt: string
			/**
			 * @description product description
			 * @example This is a really awesome product
			 */
			description?: string
			/**
			 * @description The URL for the product image.
			 * @example https://storage.googleapis.com/ghl-test/3SwdhCsvxI8Au3KsPJt6/media/65af8d5df88bdb4b1022ee90.png
			 */
			image?: string
			/**
			 * @description The unique identifier for the location.
			 * @example 3SwdhCsvxI8Au3KsPJt6
			 */
			locationId: string
			/** @description An array of medias for the product. */
			medias?: components['schemas']['ProductMediaDto'][]
			/**
			 * @description The name of the product.
			 * @example Awesome Product
			 */
			name: string
			/**
			 * @description The type of the product (e.g., PHYSICAL).
			 * @example PHYSICAL
			 */
			productType: string
			/**
			 * @description The statement descriptor for the product.
			 * @example abcde
			 */
			statementDescriptor?: string
			/**
			 * Format: date-time
			 * @description The last update timestamp of the product.
			 * @example 2024-01-23T09:57:04.846Z
			 */
			updatedAt: string
			/**
			 * @description The unique identifier for the user who created the product.
			 * @example 6YAtzfzpmHAdj0e8GkKp
			 */
			userId?: string
			/** @description An array of variants for the product. */
			variants?: components['schemas']['ProductVariantDto'][]
		}
		DefaultPriceResponseDto: {
			/**
			 * @description The unique identifier for the price.
			 * @example 655b33aa2209e60b6adb87a7
			 */
			_id: string
			/**
			 * @description Continue selling when out of stock
			 * @example true
			 */
			allowOutOfStockPurchases?: boolean
			/**
			 * @description The amount of the price.
			 * @example 199999
			 */
			amount: number
			/**
			 * @description Available inventory stock quantity
			 * @example 5
			 */
			availableQuantity?: number
			/**
			 * @description The compare-at price for comparison purposes.
			 * @example 2000000
			 */
			compareAtPrice?: number
			/**
			 * Format: date-time
			 * @description The creation timestamp of the price.
			 * @example 2023-11-20T10:23:38.645Z
			 */
			createdAt?: string
			/**
			 * @description The currency code for the price.
			 * @example INR
			 */
			currency: string
			/**
			 * @description The unique identifier for the location.
			 * @example 3SwdhCsvxI8Au3KsPJt6
			 */
			locationId?: string
			/** @description An array of membership offers associated with the price. */
			membershipOffers?: components['schemas']['MembershipOfferDto'][]
			/**
			 * @description The name of the price.
			 * @example Red / S
			 */
			name: string
			/**
			 * @description The unique identifier for the associated product.
			 * @example 655b33a82209e60b6adb87a5
			 */
			product?: string
			/** @description The recurring details of the price (if type is recurring). */
			recurring?: components['schemas']['RecurringDto']
			/**
			 * @description Indicates whether inventory tracking is enabled.
			 * @example null
			 */
			trackInventory?: boolean
			/**
			 * @description The type of the price (e.g., one_time).
			 * @example one_time
			 * @enum {string}
			 */
			type: 'one_time' | 'recurring'
			/**
			 * Format: date-time
			 * @description The last update timestamp of the price.
			 * @example 2024-01-23T09:57:04.852Z
			 */
			updatedAt?: string
			/**
			 * @description The unique identifier for the user.
			 * @example 6YAtzfzpmHAdj0e8GkKp
			 */
			userId?: string
			/**
			 * @description An array of variant option IDs associated with the price.
			 * @example [
			 *       "h4z7u0im2q8",
			 *       "h3nst2ltsnn"
			 *     ]
			 */
			variantOptionIds?: string[]
		}
		DefaultProductResponseDto: {
			/**
			 * @description The unique identifier for the product.
			 * @example 655b33a82209e60b6adb87a5
			 */
			_id: string
			/**
			 * @description Indicates whether the product is available in-store.
			 * @example true
			 */
			availableInStore?: boolean
			/**
			 * Format: date-time
			 * @description The creation timestamp of the product.
			 * @example 2023-11-20T10:23:36.515Z
			 */
			createdAt: string
			/**
			 * @description product description
			 * @example This is a really awesome product
			 */
			description?: string
			/**
			 * @description The URL for the product image.
			 * @example https://storage.googleapis.com/ghl-test/3SwdhCsvxI8Au3KsPJt6/media/65af8d5df88bdb4b1022ee90.png
			 */
			image?: string
			/**
			 * @description The unique identifier for the location.
			 * @example 3SwdhCsvxI8Au3KsPJt6
			 */
			locationId: string
			/** @description An array of medias for the product. */
			medias?: components['schemas']['ProductMediaDto'][]
			/**
			 * @description The name of the product.
			 * @example Awesome Product
			 */
			name: string
			/**
			 * @description The type of the product (e.g., PHYSICAL).
			 * @example PHYSICAL
			 */
			productType: string
			/**
			 * @description The statement descriptor for the product.
			 * @example abcde
			 */
			statementDescriptor?: string
			/**
			 * Format: date-time
			 * @description The last update timestamp of the product.
			 * @example 2024-01-23T09:57:04.846Z
			 */
			updatedAt: string
			/**
			 * @description The unique identifier for the user who created the product.
			 * @example 6YAtzfzpmHAdj0e8GkKp
			 */
			userId?: string
			/** @description An array of variants for the product. */
			variants?: components['schemas']['ProductVariantDto'][]
		}
		DeletePriceResponseDto: {
			/**
			 * @description returns true if the price is successfully deleted
			 * @example true
			 */
			status: boolean
		}
		DeleteProductResponseDto: {
			/**
			 * @description returns true if the product is successfully deleted
			 * @example true
			 */
			status: boolean
		}
		GetPriceResponseDto: {
			/**
			 * @description The unique identifier for the price.
			 * @example 655b33aa2209e60b6adb87a7
			 */
			_id: string
			/**
			 * @description Continue selling when out of stock
			 * @example true
			 */
			allowOutOfStockPurchases?: boolean
			/**
			 * @description The amount of the price.
			 * @example 199999
			 */
			amount: number
			/**
			 * @description Available inventory stock quantity
			 * @example 5
			 */
			availableQuantity?: number
			/**
			 * @description The compare-at price for comparison purposes.
			 * @example 2000000
			 */
			compareAtPrice?: number
			/**
			 * Format: date-time
			 * @description The creation timestamp of the price.
			 * @example 2023-11-20T10:23:38.645Z
			 */
			createdAt?: string
			/**
			 * @description The currency code for the price.
			 * @example INR
			 */
			currency: string
			/**
			 * @description The unique identifier for the location.
			 * @example 3SwdhCsvxI8Au3KsPJt6
			 */
			locationId?: string
			/** @description An array of membership offers associated with the price. */
			membershipOffers?: components['schemas']['MembershipOfferDto'][]
			/**
			 * @description The name of the price.
			 * @example Red / S
			 */
			name: string
			/**
			 * @description The unique identifier for the associated product.
			 * @example 655b33a82209e60b6adb87a5
			 */
			product?: string
			/** @description The recurring details of the price (if type is recurring). */
			recurring?: components['schemas']['RecurringDto']
			/**
			 * @description Indicates whether inventory tracking is enabled.
			 * @example null
			 */
			trackInventory?: boolean
			/**
			 * @description The type of the price (e.g., one_time).
			 * @example one_time
			 * @enum {string}
			 */
			type: 'one_time' | 'recurring'
			/**
			 * Format: date-time
			 * @description The last update timestamp of the price.
			 * @example 2024-01-23T09:57:04.852Z
			 */
			updatedAt?: string
			/**
			 * @description The unique identifier for the user.
			 * @example 6YAtzfzpmHAdj0e8GkKp
			 */
			userId?: string
			/**
			 * @description An array of variant option IDs associated with the price.
			 * @example [
			 *       "h4z7u0im2q8",
			 *       "h3nst2ltsnn"
			 *     ]
			 */
			variantOptionIds?: string[]
		}
		GetProductResponseDto: {
			/**
			 * @description The unique identifier for the product.
			 * @example 655b33a82209e60b6adb87a5
			 */
			_id: string
			/**
			 * @description Indicates whether the product is available in-store.
			 * @example true
			 */
			availableInStore?: boolean
			/**
			 * Format: date-time
			 * @description The creation timestamp of the product.
			 * @example 2023-11-20T10:23:36.515Z
			 */
			createdAt: string
			/**
			 * @description product description
			 * @example This is a really awesome product
			 */
			description?: string
			/**
			 * @description The URL for the product image.
			 * @example https://storage.googleapis.com/ghl-test/3SwdhCsvxI8Au3KsPJt6/media/65af8d5df88bdb4b1022ee90.png
			 */
			image?: string
			/**
			 * @description The unique identifier for the location.
			 * @example 3SwdhCsvxI8Au3KsPJt6
			 */
			locationId: string
			/** @description An array of medias for the product. */
			medias?: components['schemas']['ProductMediaDto'][]
			/**
			 * @description The name of the product.
			 * @example Awesome Product
			 */
			name: string
			/**
			 * @description The type of the product (e.g., PHYSICAL).
			 * @example PHYSICAL
			 */
			productType: string
			/**
			 * @description The statement descriptor for the product.
			 * @example abcde
			 */
			statementDescriptor?: string
			/**
			 * Format: date-time
			 * @description The last update timestamp of the product.
			 * @example 2024-01-23T09:57:04.846Z
			 */
			updatedAt: string
			/**
			 * @description The unique identifier for the user who created the product.
			 * @example 6YAtzfzpmHAdj0e8GkKp
			 */
			userId?: string
			/** @description An array of variants for the product. */
			variants?: components['schemas']['ProductVariantDto'][]
		}
		ListPricesResponseDto: {
			/** @description An array of prices */
			prices: components['schemas']['DefaultPriceResponseDto'][]
			/**
			 * @default Total number of prices available
			 * @example 10
			 */
			total: number
		}
		ListProductsResponseDto: {
			/** @description An array of products */
			products: components['schemas']['DefaultProductResponseDto'][]
			/** @description list products status */
			total: components['schemas']['ListProductsStats'][]
		}
		ListProductsStats: {
			/**
			 * @description Total number of products
			 * @example 20
			 */
			total: number
		}
		MembershipOfferDto: {
			/**
			 * @description The unique identifier for the membership offer.
			 * @example 655b33aa2209e60b6adb87a7
			 */
			_id: string
			/**
			 * @description Membership offer label
			 * @example top_50
			 */
			label: string
			/**
			 * @description Membership offer label
			 * @example 50
			 */
			value: string
		}
		PriceMetaDto: {
			/**
			 * @description The internal source of the price.
			 * @example agency_plan
			 * @enum {string}
			 */
			internalSource: 'agency_plan' | 'funnel' | 'membership'
			/**
			 * @description The source of the price.
			 * @example stripe
			 * @enum {string}
			 */
			source: 'stripe'
			/**
			 * @description The Stripe price ID associated with the price.
			 * @example price_123
			 */
			stripePriceId: string
		}
		ProductMediaDto: {
			/**
			 * @description The unique identifier for the media.
			 * @example fzrgusiuu0m
			 */
			id: string
			/**
			 * @description Indicates whether the media is featured.
			 * @example true
			 */
			isFeatured?: boolean
			/**
			 * @description The title of the media file.
			 * @example 1dd7dcd0-e71d-4cf7-a06b-6d47723d6a29.png
			 */
			title?: string
			/**
			 * @description The type of the media file (e.g., image, video will be supporting soon).
			 * @example image
			 * @enum {string}
			 */
			type: 'image' | 'video'
			/**
			 * @description The URL where the media file is stored.
			 * @example https://storage.googleapis.com/ghl-test/3SwdhCsvxI8Au3KsPJt6/media/sample.png
			 */
			url: string
		}
		ProductVariantDto: {
			/**
			 * @description A unique identifier for the variant.
			 * @example 38s63qmxfr4
			 */
			id: string
			/**
			 * @description The name of the variant.
			 * @example Size
			 */
			name: string
			/** @description An array of options for the variant. */
			options: components['schemas']['ProductVariantOptionDto'][]
		}
		ProductVariantOptionDto: {
			/**
			 * @description The unique identifier for the option.
			 * @example h4z7u0im2q8
			 */
			id: string
			/**
			 * @description The name of the option.
			 * @example XL
			 */
			name: string
		}
		RecurringDto: {
			/**
			 * @description The interval at which the recurring event occurs.
			 * @example day
			 * @enum {string}
			 */
			interval: 'day' | 'month' | 'week' | 'year'
			/**
			 * @description The number of intervals between each occurrence of the event.
			 * @example 1
			 */
			intervalCount: number
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
		UpdatePriceDto: {
			/**
			 * @description Continue selling when out of stock
			 * @example true
			 */
			allowOutOfStockPurchases?: boolean
			/**
			 * @description The amount of the price. ( min: 0.01 )
			 * @example 99.99
			 */
			amount: number
			/**
			 * @description Available inventory stock quantity
			 * @example 5
			 */
			availableQuantity?: number
			/**
			 * @description The compare at price for the price.
			 * @example 19.99
			 */
			compareAtPrice?: number
			/**
			 * @description The currency of the price.
			 * @example USD
			 */
			currency: string
			/** @description A brief description of the price. */
			description?: string
			/**
			 * @description The unique identifier of the location associated with the price.
			 * @example 6578278e879ad2646715ba9c
			 */
			locationId: string
			/** @description An array of membership offers associated with the price. */
			membershipOffers?: components['schemas']['MembershipOfferDto'][]
			/** @description Additional metadata associated with the price. */
			meta?: components['schemas']['PriceMetaDto']
			/**
			 * @description The name of the price.
			 * @example Price Name
			 */
			name: string
			/** @description The recurring details of the price (if type is recurring). */
			recurring?: components['schemas']['RecurringDto']
			/**
			 * @description The setup fee for the price.
			 * @example 10.99
			 */
			setupFee?: number
			/**
			 * @description The total number of billing cycles for the price. ( min: 1 )
			 * @example 12
			 */
			totalCycles?: number
			/**
			 * @description Need to track inventory stock quantity
			 * @example true
			 */
			trackInventory?: boolean
			/**
			 * @description The trial period duration in days (if applicable).
			 * @example 7
			 */
			trialPeriod?: number
			/**
			 * @description The type of the price.
			 * @example one_time
			 * @enum {string}
			 */
			type: 'one_time' | 'recurring'
			/**
			 * @description The unique identifier of the user who created the price.
			 * @example 6578278e879ad2646715ba9c
			 */
			userId?: string
			/**
			 * @description An array of variant option IDs associated with the price.
			 * @example [
			 *       "option_id_1",
			 *       "option_id_2"
			 *     ]
			 */
			variantOptionIds?: string[]
		}
		UpdatePriceResponseDto: {
			/**
			 * @description The unique identifier for the price.
			 * @example 655b33aa2209e60b6adb87a7
			 */
			_id: string
			/**
			 * @description Continue selling when out of stock
			 * @example true
			 */
			allowOutOfStockPurchases?: boolean
			/**
			 * @description The amount of the price.
			 * @example 199999
			 */
			amount: number
			/**
			 * @description Available inventory stock quantity
			 * @example 5
			 */
			availableQuantity?: number
			/**
			 * @description The compare-at price for comparison purposes.
			 * @example 2000000
			 */
			compareAtPrice?: number
			/**
			 * Format: date-time
			 * @description The creation timestamp of the price.
			 * @example 2023-11-20T10:23:38.645Z
			 */
			createdAt?: string
			/**
			 * @description The currency code for the price.
			 * @example INR
			 */
			currency: string
			/**
			 * @description The unique identifier for the location.
			 * @example 3SwdhCsvxI8Au3KsPJt6
			 */
			locationId?: string
			/** @description An array of membership offers associated with the price. */
			membershipOffers?: components['schemas']['MembershipOfferDto'][]
			/**
			 * @description The name of the price.
			 * @example Red / S
			 */
			name: string
			/**
			 * @description The unique identifier for the associated product.
			 * @example 655b33a82209e60b6adb87a5
			 */
			product?: string
			/** @description The recurring details of the price (if type is recurring). */
			recurring?: components['schemas']['RecurringDto']
			/**
			 * @description Indicates whether inventory tracking is enabled.
			 * @example null
			 */
			trackInventory?: boolean
			/**
			 * @description The type of the price (e.g., one_time).
			 * @example one_time
			 * @enum {string}
			 */
			type: 'one_time' | 'recurring'
			/**
			 * Format: date-time
			 * @description The last update timestamp of the price.
			 * @example 2024-01-23T09:57:04.852Z
			 */
			updatedAt?: string
			/**
			 * @description The unique identifier for the user.
			 * @example 6YAtzfzpmHAdj0e8GkKp
			 */
			userId?: string
			/**
			 * @description An array of variant option IDs associated with the price.
			 * @example [
			 *       "h4z7u0im2q8",
			 *       "h3nst2ltsnn"
			 *     ]
			 */
			variantOptionIds?: string[]
		}
		UpdateProductDto: {
			/**
			 * @description Indicates whether the product is available in-store.
			 * @example true
			 */
			availableInStore?: boolean
			/**
			 * @description A brief description of the product.
			 * @example Product description goes here.
			 */
			description?: string
			/**
			 * @description The URL for the product image.
			 * @example https://storage.googleapis.com/ghl-test/3SwdhCsvxI8Au3KsPJt6/media/65af8d5df88bdb4b1022ee90.png
			 */
			image?: string
			/**
			 * @description The unique identifier for the location.
			 * @example 3SwdhCsvxI8Au3KsPJt6
			 */
			locationId: string
			/** @description An array of medias for the product. */
			medias?: components['schemas']['ProductMediaDto'][]
			/**
			 * @description The name of the product.
			 * @example Awesome Product
			 */
			name: string
			/** @enum {string} */
			productType: 'DIGITAL' | 'PHYSICAL' | 'SERVICE'
			/**
			 * @description The statement descriptor for the product.
			 * @example abcde
			 */
			statementDescriptor?: string
			/** @description An array of variants for the product. */
			variants?: components['schemas']['ProductVariantDto'][]
		}
		UpdateProductResponseDto: {
			/**
			 * @description The unique identifier for the product.
			 * @example 655b33a82209e60b6adb87a5
			 */
			_id: string
			/**
			 * @description Indicates whether the product is available in-store.
			 * @example true
			 */
			availableInStore?: boolean
			/**
			 * Format: date-time
			 * @description The creation timestamp of the product.
			 * @example 2023-11-20T10:23:36.515Z
			 */
			createdAt: string
			/**
			 * @description product description
			 * @example This is a really awesome product
			 */
			description?: string
			/**
			 * @description The URL for the product image.
			 * @example https://storage.googleapis.com/ghl-test/3SwdhCsvxI8Au3KsPJt6/media/65af8d5df88bdb4b1022ee90.png
			 */
			image?: string
			/**
			 * @description The unique identifier for the location.
			 * @example 3SwdhCsvxI8Au3KsPJt6
			 */
			locationId: string
			/** @description An array of medias for the product. */
			medias?: components['schemas']['ProductMediaDto'][]
			/**
			 * @description The name of the product.
			 * @example Awesome Product
			 */
			name: string
			/**
			 * @description The type of the product (e.g., PHYSICAL).
			 * @example PHYSICAL
			 */
			productType: string
			/**
			 * @description The statement descriptor for the product.
			 * @example abcde
			 */
			statementDescriptor?: string
			/**
			 * Format: date-time
			 * @description The last update timestamp of the product.
			 * @example 2024-01-23T09:57:04.846Z
			 */
			updatedAt: string
			/**
			 * @description The unique identifier for the user who created the product.
			 * @example 6YAtzfzpmHAdj0e8GkKp
			 */
			userId?: string
			/** @description An array of variants for the product. */
			variants?: components['schemas']['ProductVariantDto'][]
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
	'list-invoices': {
		parameters: {
			query: {
				/**
				 * @description The maximum number of items to be included in a single page of results
				 * @example 20
				 */
				limit?: number
				/**
				 * @description LocationId is the id of the sub-account
				 * @example 3SwdhCu3svxI8AKsPJt6
				 */
				locationId: string
				/**
				 * @description The starting index of the page, indicating the position from which the results should be retrieved.
				 * @example 0
				 */
				offset?: number
				/**
				 * @description The name of the product for searching.
				 * @example Awesome product
				 */
				search?: string
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
					'application/json': components['schemas']['ListProductsResponseDto']
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
	'create-product': {
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
				'application/json': components['schemas']['CreateProductDto']
			}
		}
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['CreateProductResponseDto']
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
	'get-product-by-id': {
		parameters: {
			query: {
				/**
				 * @description location Id
				 * @example 6578278e879ad2646715ba9c
				 */
				locationId: string
			}
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/**
				 * @description ID of the product that needs to be returned
				 * @example 6578278e879ad2646715ba9c
				 */
				productId: string
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
					'application/json': components['schemas']['GetProductResponseDto']
				}
			}
			/** @description Product not found */
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
	'update-product-by-id': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/**
				 * @description ID of the product that needs to be returned
				 * @example 6578278e879ad2646715ba9c
				 */
				productId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['UpdateProductDto']
			}
		}
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UpdateProductResponseDto']
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
	'delete-product-by-id': {
		parameters: {
			query: {
				/**
				 * @description location Id
				 * @example 6578278e879ad2646715ba9c
				 */
				locationId: string
			}
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/**
				 * @description ID of the product that needs to be returned
				 * @example 6578278e879ad2646715ba9c
				 */
				productId: string
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
					'application/json': components['schemas']['DeleteProductResponseDto']
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
	'list-prices-for-product': {
		parameters: {
			query: {
				/**
				 * @description To filter the response only with the given price ids, Please provide with comma separated
				 * @example 6241712be68f7a98102ba272,632027d51f7876cd3020213d
				 */
				ids?: string
				/**
				 * @description The maximum number of items to be included in a single page of results
				 * @example 20
				 */
				limit?: number
				/**
				 * @description The unique identifier for the location.
				 * @example 3SwdhCsvxI8Au3KsPJt6
				 */
				locationId: string
				/**
				 * @description The starting index of the page, indicating the position from which the results should be retrieved.
				 * @example 0
				 */
				offset?: number
			}
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/**
				 * @description ID of the product that needs to be used
				 * @example 6578278e879ad2646715ba9c
				 */
				productId: string
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
					'application/json': components['schemas']['ListPricesResponseDto']
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
	'create-price-for-product': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/**
				 * @description ID of the product that needs to be used
				 * @example 6578278e879ad2646715ba9c
				 */
				productId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['CreatePriceDto']
			}
		}
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['CreatePriceResponseDto']
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
	'get-price-by-id-for-product': {
		parameters: {
			query: {
				/**
				 * @description location Id
				 * @example 6578278e879ad2646715ba9c
				 */
				locationId: string
			}
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/**
				 * @description ID of the price that needs to be returned
				 * @example 6578278e879ad2646715ba9c
				 */
				priceId: string
				/**
				 * @description ID of the product that needs to be used
				 * @example 6578278e879ad2646715ba9c
				 */
				productId: string
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
					'application/json': components['schemas']['GetPriceResponseDto']
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
	'update-price-by-id-for-product': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/**
				 * @description ID of the price that needs to be returned
				 * @example 6578278e879ad2646715ba9c
				 */
				priceId: string
				/**
				 * @description ID of the product that needs to be used
				 * @example 6578278e879ad2646715ba9c
				 */
				productId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['UpdatePriceDto']
			}
		}
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UpdatePriceResponseDto']
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
	'delete-price-by-id-for-product': {
		parameters: {
			query: {
				/**
				 * @description location Id
				 * @example 6578278e879ad2646715ba9c
				 */
				locationId: string
			}
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/**
				 * @description ID of the price that needs to be returned
				 * @example 6578278e879ad2646715ba9c
				 */
				priceId: string
				/**
				 * @description ID of the product that needs to be used
				 * @example 6578278e879ad2646715ba9c
				 */
				productId: string
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
					'application/json': components['schemas']['DeletePriceResponseDto']
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
