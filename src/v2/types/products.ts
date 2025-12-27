export interface paths {
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
	'/products/bulk-update': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Bulk Update Products
		 * @description API to bulk update products (price, availability, collections, delete)
		 */
		post: operations['bulkUpdate']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/products/bulk-update/edit': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Bulk Edit Products and Prices
		 * @description API to bulk edit products and their associated prices (max 30 entities)
		 */
		post: operations['bulkEdit']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/products/collections': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Fetch Product Collections
		 * @description Internal API to fetch the Product Collections
		 */
		get: operations['get-product-collection']
		put?: never
		/**
		 * Create Product Collection
		 * @description Create a new Product Collection for a specific location
		 */
		post: operations['create-product-collection']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/products/collections/{collectionId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get Details about individual product collection
		 * @description Get Details about individual product collection
		 */
		get: operations['get-product-collection-id']
		/**
		 * Update Product Collection
		 * @description Update a specific product collection with Id :collectionId
		 */
		put: operations['update-product-collection']
		post?: never
		/**
		 * Delete Product Collection
		 * @description Delete specific product collection with Id :collectionId
		 */
		delete: operations['delete-product-collection']
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/products/inventory': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * List Inventory
		 * @description The "List Inventory API allows the user to retrieve a paginated list of inventory items. Use this endpoint to fetch details for multiple items in the inventory based on the provided query parameters.
		 */
		get: operations['get-list-inventory']
		put?: never
		/**
		 * Update Inventory
		 * @description The Update Inventory API allows the user to bulk update the inventory for multiple items. Use this endpoint to update the available quantity and out-of-stock purchase settings for multiple items in the inventory.
		 */
		post: operations['update-inventory']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/products/reviews': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Fetch Product Reviews
		 * @description API to fetch the Product Reviews
		 */
		get: operations['get-product-reviews']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/products/reviews/{reviewId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		/**
		 * Update Product Reviews
		 * @description Update status, reply, etc of a particular review
		 */
		put: operations['update-product-review']
		post?: never
		/**
		 * Delete Product Review
		 * @description Delete specific product review
		 */
		delete: operations['delete-product-review']
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/products/reviews/bulk-update': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Update Product Reviews
		 * @description Update one or multiple product reviews: status, reply, etc.
		 */
		post: operations['bulk-update-product-review']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/products/reviews/count': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Fetch Review Count as per status
		 * @description API to fetch the Review Count as per status
		 */
		get: operations['get-reviews-count']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/products/store/{storeId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Action to include/exclude the product in store
		 * @description API to update the status of products in a particular store
		 */
		post: operations['update-store-status']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/products/store/{storeId}/priority': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Update product display priorities in store
		 * @description API to set the display priority of products in a store
		 */
		post: operations['update-display-priority']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/products/store/{storeId}/stats': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Fetch Product Store Stats
		 * @description API to fetch the total number of products, included in the store, and excluded from the store and other stats
		 */
		get: operations['get-product-store-stats']
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
export interface components {
	schemas: {
		BadRequestDTO: {
			/** @example Bad Request */
			message?: string
			/** @example 400 */
			statusCode?: number
		}
		BulkEditPriceDto: {
			/**
			 * @description Price ID
			 * @example 64a1b2c3d4e5f67890123456
			 */
			_id: string
			/**
			 * @description Allow out of stock purchases
			 * @example false
			 */
			allowOutOfStockPurchases?: boolean
			/**
			 * @description Price amount
			 * @example 99.99
			 */
			amount?: number
			/**
			 * @description Available quantity
			 * @example 100
			 */
			availableQuantity?: number
			/**
			 * @description Compare at price
			 * @example 129.99
			 */
			compareAtPrice?: number
			/**
			 * @description Price currency
			 * @example USD
			 */
			currency?: string
			/**
			 * @description Price name
			 * @example Standard Plan
			 */
			name?: string
			/** @description Recurring details */
			recurring?: components['schemas']['RecurringDto']
			/**
			 * @description Setup fee
			 * @example 25
			 */
			setupFee?: number
			/** @description Shipping options */
			shippingOptions?: components['schemas']['ShippingOptionsDto']
			/**
			 * @description SKU
			 * @example SKU-001
			 */
			sku?: string
			/**
			 * @description Total billing cycles
			 * @example 12
			 */
			totalCycles?: number
			/**
			 * @description Track inventory
			 * @example true
			 */
			trackInventory?: boolean
			/**
			 * @description Trial period in days
			 * @example 7
			 */
			trialPeriod?: number
		}
		BulkEditProductDto: {
			/**
			 * @description Product ID
			 * @example 64a1b2c3d4e5f67890123456
			 */
			_id: string
			/**
			 * @description Automatic tax category ID
			 * @example 64a1b2c3d4e5f67890123460
			 */
			automaticTaxCategoryId?: string
			/**
			 * @description Product availability in store
			 * @example true
			 */
			availableInStore?: boolean
			/**
			 * @description Collection IDs
			 * @example [
			 *       "64a1b2c3d4e5f67890123458",
			 *       "64a1b2c3d4e5f67890123459"
			 *     ]
			 */
			collectionIds?: string[]
			/**
			 * @description Product description
			 * @example A high-quality premium product with excellent features and durability
			 */
			description?: string
			/**
			 * @description Product image
			 * @example https://example.com/product-image.jpg
			 */
			image?: string
			/**
			 * @description Enable product label
			 * @example true
			 */
			isLabelEnabled?: boolean
			/**
			 * @description Enable taxes
			 * @example true
			 */
			isTaxesEnabled?: boolean
			/** @description Product label */
			label?: Record<string, never>
			/** @description Product media */
			medias?: Record<string, never>[]
			/**
			 * @description Product name
			 * @example Premium Product
			 */
			name?: string
			/** @description Array of price variants for the product */
			prices?: components['schemas']['BulkEditPriceDto'][]
			/** @description SEO metadata for the product */
			seo?: components['schemas']['ProductSEODto']
			/**
			 * @description Product URL slug
			 * @example premium-product
			 */
			slug?: string
			/** @description Product taxes */
			taxes?: Record<string, never>[]
			/**
			 * @description Tax inclusive pricing
			 * @example false
			 */
			taxInclusive?: boolean
		}
		BulkEditRequestDto: {
			/**
			 * @description Location Id or Agency Id
			 * @example 6578278e879ad2646715ba9c
			 */
			altId: string
			/** @enum {string} */
			altType: 'location'
			/** @description Array of products to update. Note: The total count includes all prices within each product. */
			products: components['schemas']['BulkEditProductDto'][]
		}
		BulkEditResponseDto: {
			/**
			 * @description Success message
			 * @example Products updated successfully
			 */
			message: string
			/**
			 * @description Operation status
			 * @example true
			 */
			status: boolean
			/**
			 * @description Number of products updated
			 * @example 5
			 */
			updatedCount: number
		}
		BulkUpdateDto: {
			/**
			 * @description Location Id or Agency Id
			 * @example 6578278e879ad2646715ba9c
			 */
			altId: string
			/** @enum {string} */
			altType: 'location'
			/** @description New availability status */
			availability?: boolean
			/** @description Array of collection IDs */
			collectionIds?: string[]
			/** @description Compare at price update configuration */
			compareAtPrice?: components['schemas']['PriceUpdateField']
			/**
			 * @description Currency code
			 * @example USD
			 */
			currency?: string
			/** @description Filters to apply when selectAll is true */
			filters?: components['schemas']['BulkUpdateFilters']
			/** @description Price update configuration */
			price?: components['schemas']['PriceUpdateField']
			/**
			 * @description Array of product IDs
			 * @example [
			 *       "5f8d0d55b54764421b7156c1"
			 *     ]
			 */
			productIds: string[]
			/**
			 * @description Type of bulk update operation
			 * @example bulk-update-price
			 * @enum {string}
			 */
			type:
				| 'bulk-update-price'
				| 'bulk-update-availability'
				| 'bulk-update-product-collection'
				| 'bulk-delete-products'
				| 'bulk-update-currency'
		}
		BulkUpdateFilters: {
			/**
			 * @description Filter by availability status
			 * @example true
			 */
			availableInStore?: boolean
			/**
			 * @description Filter by collection IDs
			 * @example [
			 *       "5f8d0d55b54764421b7156c1",
			 *       "5f8d0d55b54764421b7156c2"
			 *     ]
			 */
			collectionIds?: string[]
			/**
			 * @description Filter by product type
			 * @example one-time
			 */
			productType?: string
			/**
			 * @description Filter by search term
			 * @example blue t-shirt
			 */
			search?: string
		}
		BulkUpdateResponseDto: {
			/**
			 * @description Success message
			 * @example Successfully created
			 */
			message?: string
			/**
			 * @description Status of api action
			 * @example true
			 */
			status: boolean
		}
		CollectionSchema: {
			/**
			 * @description The unique identifier for the collection
			 * @example 655b33a82209e60b6adb87a5
			 */
			_id: string
			/**
			 * @description Location Id to which the collection is associated
			 * @example Z4Bxl8J4SaPEPLq9IQ8g
			 */
			altId: string
			/**
			 * @description Date at which the collection was created
			 * @example 2024-02-22T09:27:19.728Z
			 */
			createdAt: string
			/**
			 * @description The URL of the image that is going to be displayed as the collection Thumbnail
			 * @example http://example.com/watermark.png
			 */
			image: string
			/**
			 * @description Name of the collection
			 * @example Best Sellers
			 */
			name: string
			/** @description The information which will be displayed in SEO previews */
			seo: components['schemas']['CollectionSEODto']
			/**
			 * @description Slug of the collection with which navigation is established. Special Characters and spacing is not allowed and should be unique
			 * @example best-sellers
			 */
			slug: string
		}
		CollectionSEODto: {
			/**
			 * @description The description which would be displayed in preview purposes
			 * @example Collections where all the best products are available
			 */
			description?: string
			/**
			 * @description The title which will be displayed as an SEO format
			 * @example Best Sellers
			 */
			title?: string
		}
		CountReviewsByStatusResponseDto: {
			/** @description Array of review status counts */
			data: unknown[][]
		}
		CreateCollectionResponseDto: {
			/** @description created Collection */
			data: components['schemas']['CollectionSchema']
		}
		CreatePriceDto: {
			/**
			 * @description Continue selling when out of stock
			 * @example true
			 */
			allowOutOfStockPurchases?: boolean
			/**
			 * @description The amount of the price. ( min: 0 )
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
			/** @description Digital delivery options */
			digitalDelivery?: string[]
			/**
			 * @description Is the product a digital product
			 * @example true
			 */
			isDigitalProduct?: boolean
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
			/** @description Shipping options of the Price */
			shippingOptions?: components['schemas']['ShippingOptionsDto']
			/**
			 * @description The unique identifier of the SKU associated with the price
			 * @example sku_123
			 */
			sku?: string
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
		CreateProductCollectionsDto: {
			/**
			 * @description Location Id
			 * @example 6578278e879ad2646715ba9c
			 */
			altId: string
			/**
			 * @description The type of alt. For now it is only LOCATION
			 * @example LOCATION
			 * @enum {string}
			 */
			altType: 'location'
			/**
			 * @description Unique Identifier of the Product Collection, Mongo Id
			 * @example 66057f9d28536eae584ec047
			 */
			collectionId?: string
			/**
			 * @description The URL of the image that is going to be displayed as the collection Thumbnail
			 * @example http://example.com/watermark.png
			 */
			image?: string
			/**
			 * @description Name of the Product Collection
			 * @example Best Sellers
			 */
			name: string
			/** @description The metadata information which will be displayed in SEO previews */
			seo?: components['schemas']['CollectionSEODto']
			/**
			 * @description Slug of the Product Collection which helps in navigation
			 * @example best-sellers
			 */
			slug: string
		}
		CreateProductDto: {
			/**
			 * @description Tax category ID for Automatic taxes calculation.
			 * @example 65d71377c326ea78e1c47df5
			 */
			automaticTaxCategoryId?: string
			/**
			 * @description Indicates whether the product is available in-store.
			 * @example true
			 */
			availableInStore?: boolean
			/**
			 * @description An array of category Ids for the product
			 * @example [
			 *       "65d71377c326ea78e1c47df5",
			 *       "65d71377c326ea78e1c47d34"
			 *     ]
			 */
			collectionIds?: string[]
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
			 * @description Is the product label enabled. If this is true, label object cannot be empty.
			 * @default false
			 * @example true
			 */
			isLabelEnabled: boolean
			/**
			 * @description Are there any taxes attached to the product. If this is true, taxes array cannot be empty.
			 * @default false
			 * @example true
			 */
			isTaxesEnabled: boolean
			/** @description Details for Product Label */
			label?: components['schemas']['ProductLabelDto']
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
			productType: 'DIGITAL' | 'PHYSICAL' | 'SERVICE' | 'PHYSICAL/DIGITAL'
			/** @description SEO data for the product that will be displayed in the preview */
			seo?: components['schemas']['ProductSEODto']
			/**
			 * @description The slug using which the product navigation will be handled
			 * @example awesome-product
			 */
			slug?: string
			/**
			 * @description The statement descriptor for the product.
			 * @example abcde
			 */
			statementDescriptor?: string
			/**
			 * @description List of ids of Taxes attached to the Product. If taxes are passed, isTaxesEnabled should be true.
			 * @example [
			 *       "654492a4e6bef380114de15a"
			 *     ]
			 */
			taxes?: string[]
			/**
			 * @description Whether the taxes should be included in the purchase price
			 * @default false
			 * @example true
			 */
			taxInclusive: boolean
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
			 * @description Tax category ID for Automatic taxes calculation.
			 * @example 65d71377c326ea78e1c47df5
			 */
			automaticTaxCategoryId?: string
			/**
			 * @description Indicates whether the product is available in-store.
			 * @example true
			 */
			availableInStore?: boolean
			/**
			 * @description An array of category Ids for the product
			 * @example [
			 *       "65d71377c326ea78e1c47df5",
			 *       "65d71377c326ea78e1c47d34"
			 *     ]
			 */
			collectionIds?: string[]
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
			 * @description The field indicates whether taxes are enabled for the product or not.
			 * @default false
			 * @example true
			 */
			isTaxesEnabled: boolean
			/** @description The Product label details */
			label?: components['schemas']['ProductLabelDto']
			/**
			 * @description The unique identifier for the location.
			 * @example 3SwdhCsvxI8Au3KsPJt6
			 */
			locationId: string
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
			 * @description The slug of the product by which the product will be navigated
			 * @example washing-machine
			 */
			slug?: string
			/**
			 * @description The statement descriptor for the product.
			 * @example abcde
			 */
			statementDescriptor?: string
			/**
			 * @description An array of ids of Taxes attached to the Product. If the expand query includes tax, the taxes will be of type `ProductTaxDto`. Please refer to the `ProductTaxDto` for additional details.
			 * @example [
			 *       "654492a4e6bef380114de15a"
			 *     ]
			 */
			taxes?: string[]
			/**
			 * Format: date-time
			 * @description The last update timestamp of the product.
			 * @example 2024-01-23T09:57:04.846Z
			 */
			updatedAt: string
			/** @description An array of variants for the product. */
			variants?: components['schemas']['ProductVariantDto'][]
		}
		DefaultCollectionResponseDto: {
			/** @description Collection Data */
			data: components['schemas']['ProductCategories']
			/**
			 * @description Status of the operation
			 * @example true
			 */
			status: boolean
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
			 * @description Tax category ID for Automatic taxes calculation.
			 * @example 65d71377c326ea78e1c47df5
			 */
			automaticTaxCategoryId?: string
			/**
			 * @description Indicates whether the product is available in-store.
			 * @example true
			 */
			availableInStore?: boolean
			/**
			 * @description An array of category Ids for the product
			 * @example [
			 *       "65d71377c326ea78e1c47df5",
			 *       "65d71377c326ea78e1c47d34"
			 *     ]
			 */
			collectionIds?: string[]
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
			 * @description The field indicates whether taxes are enabled for the product or not.
			 * @default false
			 * @example true
			 */
			isTaxesEnabled: boolean
			/** @description The Product label details */
			label?: components['schemas']['ProductLabelDto']
			/**
			 * @description The unique identifier for the location.
			 * @example 3SwdhCsvxI8Au3KsPJt6
			 */
			locationId: string
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
			 * @description The slug of the product by which the product will be navigated
			 * @example washing-machine
			 */
			slug?: string
			/**
			 * @description The statement descriptor for the product.
			 * @example abcde
			 */
			statementDescriptor?: string
			/**
			 * @description An array of ids of Taxes attached to the Product. If the expand query includes tax, the taxes will be of type `ProductTaxDto`. Please refer to the `ProductTaxDto` for additional details.
			 * @example [
			 *       "654492a4e6bef380114de15a"
			 *     ]
			 */
			taxes?: string[]
			/**
			 * Format: date-time
			 * @description The last update timestamp of the product.
			 * @example 2024-01-23T09:57:04.846Z
			 */
			updatedAt: string
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
		DeleteProductCollectionResponseDto: {
			/**
			 * @description Success message
			 * @example Successfully created
			 */
			message?: string
			/**
			 * @description Status of api action
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
		DeleteProductReviewResponseDto: {
			/**
			 * @description Success message
			 * @example Successfully created
			 */
			message?: string
			/**
			 * @description Status of api action
			 * @example true
			 */
			status: boolean
		}
		GetInventoryResponseDto: {
			/** @description List of inventory items */
			inventory: components['schemas']['InventoryItemDto'][]
			/**
			 * @description Total count of inventory items
			 * @example {
			 *       "total": 100
			 *     }
			 */
			total: Record<string, never>
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
			 * @description Tax category ID for Automatic taxes calculation.
			 * @example 65d71377c326ea78e1c47df5
			 */
			automaticTaxCategoryId?: string
			/**
			 * @description Indicates whether the product is available in-store.
			 * @example true
			 */
			availableInStore?: boolean
			/**
			 * @description An array of category Ids for the product
			 * @example [
			 *       "65d71377c326ea78e1c47df5",
			 *       "65d71377c326ea78e1c47d34"
			 *     ]
			 */
			collectionIds?: string[]
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
			 * @description The field indicates whether taxes are enabled for the product or not.
			 * @default false
			 * @example true
			 */
			isTaxesEnabled: boolean
			/** @description The Product label details */
			label?: components['schemas']['ProductLabelDto']
			/**
			 * @description The unique identifier for the location.
			 * @example 3SwdhCsvxI8Au3KsPJt6
			 */
			locationId: string
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
			 * @description The slug of the product by which the product will be navigated
			 * @example washing-machine
			 */
			slug?: string
			/**
			 * @description The statement descriptor for the product.
			 * @example abcde
			 */
			statementDescriptor?: string
			/**
			 * @description An array of ids of Taxes attached to the Product. If the expand query includes tax, the taxes will be of type `ProductTaxDto`. Please refer to the `ProductTaxDto` for additional details.
			 * @example [
			 *       "654492a4e6bef380114de15a"
			 *     ]
			 */
			taxes?: string[]
			/**
			 * Format: date-time
			 * @description The last update timestamp of the product.
			 * @example 2024-01-23T09:57:04.846Z
			 */
			updatedAt: string
			/** @description An array of variants for the product. */
			variants?: components['schemas']['ProductVariantDto'][]
		}
		GetProductStatsResponseDto: {
			/**
			 * @description Number of products excluded from the store
			 * @example 20
			 */
			excludedFromStore: number
			/**
			 * @description Number of products included in the store
			 * @example 80
			 */
			includedInStore: number
			/**
			 * @description Total number of products
			 * @example 100
			 */
			totalProducts: number
		}
		InventoryItemDto: {
			/**
			 * @description The unique identifier for the price
			 * @example 6241712be68f7a98102ba272
			 */
			_id: string
			/**
			 * @description Whether out of stock purchases are allowed
			 * @example false
			 */
			allowOutOfStockPurchases: boolean
			/**
			 * @description Available quantity in inventory
			 * @example 50
			 */
			availableQuantity: number
			/**
			 * @description Product image URL
			 * @example https://example.com/images/product.jpg
			 */
			image?: string
			/**
			 * @description Name of the price/variant
			 * @example Medium T-shirt
			 */
			name: string
			/**
			 * @description Product ID this price belongs to
			 * @example 6241712be68f7a98102ba270
			 */
			product: string
			/**
			 * @description Product name
			 * @example T-shirt
			 */
			productName?: string
			/**
			 * @description SKU for the product variant
			 * @example TSHIRT-MED-001
			 */
			sku: string
			/**
			 * @description Last update timestamp
			 * @example 2023-12-12T09:27:42.355Z
			 */
			updatedAt: string
		}
		ListCollectionResponseDto: {
			/** @description Array of Collections */
			data: unknown[][]
			/** @description The total count of the collections present, which is useful to calculate the pagination */
			total: number
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
		ListProductReviewsResponseDto: {
			/** @description Array of Collections */
			data: unknown[][]
			/** @description The total count of the collections present, which is useful to calculate the pagination */
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
		PriceDimensionsDto: {
			/**
			 * @description Height of the price
			 * @example 10
			 */
			height: number
			/**
			 * @description Length of the price
			 * @example 10
			 */
			length: number
			/**
			 * @description Unit of the price dimensions
			 * @example cm
			 * @enum {string}
			 */
			unit: 'cm' | 'in' | 'm'
			/**
			 * @description Width of the price
			 * @example 10
			 */
			width: number
		}
		PriceMetaDto: {
			/**
			 * @description The internal source of the price.
			 * @example agency_plan
			 * @enum {string}
			 */
			internalSource:
				| 'agency_plan'
				| 'funnel'
				| 'membership'
				| 'communities'
				| 'gokollab'
				| 'calendar'
			/**
			 * @description The source of the price.
			 * @example stripe
			 * @enum {string}
			 */
			source: 'stripe' | 'woocommerce' | 'shopify'
			/**
			 * @description The id of the source of the price from where it is imported
			 * @example 123
			 */
			sourceId?: string
			/**
			 * @description The Stripe price ID associated with the price.
			 * @example price_123
			 */
			stripePriceId: string
		}
		PriceUpdateField: {
			/**
			 * @description Round to nearest whole number
			 * @example true
			 */
			roundToWhole?: boolean
			/**
			 * @description Type of price update
			 * @example INCREASE_BY_AMOUNT
			 * @enum {string}
			 */
			type:
				| 'INCREASE_BY_AMOUNT'
				| 'REDUCE_BY_AMOUNT'
				| 'SET_NEW_PRICE'
				| 'INCREASE_BY_PERCENTAGE'
				| 'REDUCE_BY_PERCENTAGE'
			/**
			 * @description Value to update (amount or percentage based on type)
			 * @example 100
			 */
			value: number
		}
		ProductCategories: Record<string, never>
		ProductLabelDto: {
			/**
			 * @description Start date in YYYY-MM-DDTHH:mm:ssZ format
			 * @example 2024-06-30T05:43:39.000Z
			 */
			endDate?: string
			/**
			 * @description Start date in YYYY-MM-DDTHH:mm:ssZ format
			 * @example 2024-06-26T05:43:35.000Z
			 */
			startDate?: string
			/**
			 * @description The content for the product label.
			 * @example Featured
			 */
			title: string
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
			 * @description Mongo ObjectIds of the prices for which the media is assigned
			 * @example 6578278e879ad2646715ba9c
			 */
			priceIds?: unknown[][]
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
		ProductReviewDto: {
			/**
			 * @description Detailed Review of the product
			 * @example This product exceeded my expectations in terms of quality and performance. Highly recommended!
			 */
			comment: string
			/**
			 * @description Headline of the Review
			 * @example Amazing product with great quality
			 */
			headline: string
			/** @description User who is giving the review/reply */
			user: components['schemas']['UserDetailsDto']
		}
		ProductSEODto: {
			/**
			 * @description SEO description
			 * @example This is the best product you can buy online with amazing features and great value
			 */
			description?: string
			/**
			 * @description SEO title
			 * @example Best Product - Buy Now
			 */
			title?: string
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
		ShippingOptionsDto: {
			/** @description Dimensions of the product */
			dimensions?: components['schemas']['PriceDimensionsDto']
			/** @description Weight options of the product */
			weight?: components['schemas']['WeightOptionsDto']
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
		UpdateDisplayPriorityBodyDto: {
			/**
			 * @description Location Id or Agency Id
			 * @example 6578278e879ad2646715ba9c
			 */
			altId: string
			/** @enum {string} */
			altType: 'location'
			/** @description Array of products with their display priorities */
			products: unknown[][]
		}
		UpdateInventoryDto: {
			/**
			 * @description Location Id or Agency Id
			 * @example 6578278e879ad2646715ba9c
			 */
			altId: string
			/** @enum {string} */
			altType: 'location'
			/** @description Array of items to update in the inventory. */
			items: components['schemas']['UpdateInventoryItemDto'][]
		}
		UpdateInventoryItemDto: {
			/**
			 * @description Whether to continue selling the item when out of stock.
			 * @example false
			 */
			allowOutOfStockPurchases?: boolean
			/**
			 * @description The available quantity of the item.
			 * @example 10
			 */
			availableQuantity?: number
			/**
			 * @description The unique identifier for the price, in MongoDB ID format.
			 * @example 5e9f8f8f8f8f8f8f8f8f8f8
			 */
			priceId: string
		}
		UpdateInventoryResponseDto: {
			/**
			 * @description Success message
			 * @example Successfully created
			 */
			message?: string
			/**
			 * @description Status of api action
			 * @example true
			 */
			status: boolean
		}
		UpdatePriceDto: {
			/**
			 * @description Continue selling when out of stock
			 * @example true
			 */
			allowOutOfStockPurchases?: boolean
			/**
			 * @description The amount of the price. ( min: 0 )
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
			/** @description Digital delivery options */
			digitalDelivery?: string[]
			/**
			 * @description Is the product a digital product
			 * @example true
			 */
			isDigitalProduct?: boolean
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
			/** @description Shipping options of the Price */
			shippingOptions?: components['schemas']['ShippingOptionsDto']
			/**
			 * @description The unique identifier of the SKU associated with the price
			 * @example sku_123
			 */
			sku?: string
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
		UpdateProductCollectionResponseDto: {
			/**
			 * @description Success message
			 * @example Successfully created
			 */
			message?: string
			/**
			 * @description Status of api action
			 * @example true
			 */
			status: boolean
		}
		UpdateProductCollectionsDto: {
			/**
			 * @description Location Id
			 * @example 6578278e879ad2646715ba9c
			 */
			altId: string
			/**
			 * @description The type of alt. For now it is only LOCATION
			 * @example LOCATION
			 * @enum {string}
			 */
			altType: 'location'
			/**
			 * @description The URL of the image that is going to be displayed as the collection Thumbnail
			 * @example http://example.com/watermark.png
			 */
			image?: string
			/**
			 * @description Name of the Product Collection
			 * @example Best Sellers
			 */
			name?: string
			/** @description The metadata information which will be displayed in SEO previews */
			seo?: components['schemas']['CollectionSEODto']
			/**
			 * @description Slug of the Product Collection which helps in navigation
			 * @example best-sellers
			 */
			slug?: string
		}
		UpdateProductDto: {
			/**
			 * @description Tax category ID for Automatic taxes calculation.
			 * @example 65d71377c326ea78e1c47df5
			 */
			automaticTaxCategoryId?: string
			/**
			 * @description Indicates whether the product is available in-store.
			 * @example true
			 */
			availableInStore?: boolean
			/**
			 * @description An array of category Ids for the product
			 * @example [
			 *       "65d71377c326ea78e1c47df5",
			 *       "65d71377c326ea78e1c47d34"
			 *     ]
			 */
			collectionIds?: string[]
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
			 * @description Is the product label enabled. If this is true, label object cannot be empty.
			 * @default false
			 * @example true
			 */
			isLabelEnabled: boolean
			/**
			 * @description Are there any taxes attached to the product. If this is true, taxes array cannot be empty.
			 * @default false
			 * @example true
			 */
			isTaxesEnabled: boolean
			/** @description Details for Product Label */
			label?: components['schemas']['ProductLabelDto']
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
			/** @description The prices of the product */
			prices?: string[]
			/** @enum {string} */
			productType: 'DIGITAL' | 'PHYSICAL' | 'SERVICE' | 'PHYSICAL/DIGITAL'
			/** @description SEO data for the product that will be displayed in the preview */
			seo?: components['schemas']['ProductSEODto']
			/**
			 * @description The slug using which the product navigation will be handled
			 * @example awesome-product
			 */
			slug?: string
			/**
			 * @description The statement descriptor for the product.
			 * @example abcde
			 */
			statementDescriptor?: string
			/**
			 * @description List of ids of Taxes attached to the Product. If taxes are passed, isTaxesEnabled should be true.
			 * @example [
			 *       "654492a4e6bef380114de15a"
			 *     ]
			 */
			taxes?: string[]
			/**
			 * @description Whether the taxes should be included in the purchase price
			 * @default false
			 * @example true
			 */
			taxInclusive: boolean
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
			 * @description Tax category ID for Automatic taxes calculation.
			 * @example 65d71377c326ea78e1c47df5
			 */
			automaticTaxCategoryId?: string
			/**
			 * @description Indicates whether the product is available in-store.
			 * @example true
			 */
			availableInStore?: boolean
			/**
			 * @description An array of category Ids for the product
			 * @example [
			 *       "65d71377c326ea78e1c47df5",
			 *       "65d71377c326ea78e1c47d34"
			 *     ]
			 */
			collectionIds?: string[]
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
			 * @description The field indicates whether taxes are enabled for the product or not.
			 * @default false
			 * @example true
			 */
			isTaxesEnabled: boolean
			/** @description The Product label details */
			label?: components['schemas']['ProductLabelDto']
			/**
			 * @description The unique identifier for the location.
			 * @example 3SwdhCsvxI8Au3KsPJt6
			 */
			locationId: string
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
			 * @description The slug of the product by which the product will be navigated
			 * @example washing-machine
			 */
			slug?: string
			/**
			 * @description The statement descriptor for the product.
			 * @example abcde
			 */
			statementDescriptor?: string
			/**
			 * @description An array of ids of Taxes attached to the Product. If the expand query includes tax, the taxes will be of type `ProductTaxDto`. Please refer to the `ProductTaxDto` for additional details.
			 * @example [
			 *       "654492a4e6bef380114de15a"
			 *     ]
			 */
			taxes?: string[]
			/**
			 * Format: date-time
			 * @description The last update timestamp of the product.
			 * @example 2024-01-23T09:57:04.846Z
			 */
			updatedAt: string
			/** @description An array of variants for the product. */
			variants?: components['schemas']['ProductVariantDto'][]
		}
		UpdateProductReviewDto: {
			/**
			 * @description Location Id or Agency Id
			 * @example 6578278e879ad2646715ba9c
			 */
			altId: string
			/** @enum {string} */
			altType: 'location'
			/**
			 * @description Detailed Review of the product
			 * @example The product is for sure a must and recommended buy
			 */
			detail?: string
			/**
			 * @description Headline of the Review
			 * @example Amazing product with great quality
			 */
			headline?: string
			/**
			 * @description Product Id
			 * @example 6578278e879ad2646715ba9c
			 */
			productId: string
			/**
			 * @description Rating of the product
			 * @example 4.5
			 */
			rating?: number
			/** @description Reply of the review */
			reply?: components['schemas']['ProductReviewDto'][]
			/**
			 * @description Status of the review
			 * @example approved
			 */
			status: string
		}
		UpdateProductReviewObjectDto: {
			/**
			 * @description Product Id
			 * @example 6578278e879ad2646715ba9d
			 */
			productId: string
			/**
			 * @description Review Id
			 * @example 6578278e879ad2646715ba9c
			 */
			reviewId: string
			/**
			 * @description Store Id
			 * @example a1b2c3d4e5f6g7h8i9j0k1l2
			 */
			storeId: string
		}
		UpdateProductReviewsDto: {
			/**
			 * @description Location Id or Agency Id
			 * @example 6578278e879ad2646715ba9c
			 */
			altId: string
			/** @enum {string} */
			altType: 'location'
			/** @description Array of Product Reviews */
			reviews: components['schemas']['UpdateProductReviewObjectDto'][]
			/**
			 * @description Status of the review
			 * @example approved
			 */
			status: Record<string, never>
		}
		UpdateProductReviewsResponseDto: {
			/**
			 * @description Success message
			 * @example Successfully created
			 */
			message?: string
			/**
			 * @description Status of api action
			 * @example true
			 */
			status: boolean
		}
		UpdateProductStoreDto: {
			/**
			 * @description Action to include or exclude the product from the store
			 * @example include
			 * @enum {string}
			 */
			action: 'include' | 'exclude'
			/**
			 * @description Location Id or Agency Id
			 * @example 6578278e879ad2646715ba9c
			 */
			altId: string
			/** @enum {string} */
			altType: 'location'
			/**
			 * @description Array of product IDs
			 * @example [
			 *       "productId1",
			 *       "productId2"
			 *     ]
			 */
			productIds: string[]
		}
		UpdateProductStoreResponseDto: {
			/**
			 * @description Success message
			 * @example Successfully created
			 */
			message?: string
			/**
			 * @description Status of api action
			 * @example true
			 */
			status: boolean
		}
		UserDetailsDto: {
			/**
			 * @description Email of the customer
			 * @example example@example.com
			 */
			email: string
			/**
			 * @description Is the person an admin or customer
			 * @example true
			 */
			isCustomer?: boolean
			/**
			 * @description Name of the customer
			 * @example John Doe
			 */
			name: string
			/**
			 * @description Phone no of the customer
			 * @example +1-555-555-5555
			 */
			phone?: string
		}
		WeightOptionsDto: {
			/**
			 * @description Weight unit of the product
			 * @example kg
			 * @enum {string}
			 */
			unit: 'kg' | 'lb' | 'g' | 'oz'
			/**
			 * @description Actual weight of the product
			 * @example 10
			 */
			value: number
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
				/** @description If the product is included in the online store */
				availableInStore?: boolean
				/** @description Filter by product category Ids. Supports comma separated values */
				collectionIds?: string
				/** @description The slug value of the collection by which the collection would be searched */
				collectionSlug?: string
				/** @description Name of an entity whose data has to be fetched along with product. Possible entities are tax, stripe and paypal. If not mentioned, only ID will be returned in case of taxes */
				expand?: string[]
				/** @description Separate products by which are included in the store and which are not */
				includedInStore?: boolean
				/** @description The maximum number of items to be included in a single page of results */
				limit?: number
				/** @description LocationId is the id of the sub-account */
				locationId: string
				/** @description The starting index of the page, indicating the position from which the results should be retrieved. */
				offset?: number
				/** @description List of product ids to be fetched. */
				productIds?: string[]
				/** @description The name of the product for searching. */
				search?: string
				/** @description The order of sort which should be applied for the date */
				sortOrder?: 'asc' | 'desc'
				/** @description fetch and project products based on the storeId */
				storeId?: string
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
			201: {
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
				/** @description location Id */
				locationId: string
				/** @description Parameter which will decide whether to show the wishlisting status of products */
				sendWishlistStatus?: boolean
			}
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description ID or the slug of the product that needs to be returned */
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
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description ID or the slug of the product that needs to be returned */
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
				/** @description location Id */
				locationId: string
				/** @description Parameter which will decide whether to show the wishlisting status of products */
				sendWishlistStatus?: boolean
			}
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description ID or the slug of the product that needs to be returned */
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
				/** @description To filter the response only with the given price ids, Please provide with comma separated */
				ids?: string
				/** @description The maximum number of items to be included in a single page of results */
				limit?: number
				/** @description The unique identifier for the location. */
				locationId: string
				/** @description The starting index of the page, indicating the position from which the results should be retrieved. */
				offset?: number
			}
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description ID of the product that needs to be used */
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
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description ID of the product that needs to be used */
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
			201: {
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
				/** @description location Id */
				locationId: string
			}
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description ID of the price that needs to be returned */
				priceId: string
				/** @description ID of the product that needs to be used */
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
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description ID of the price that needs to be returned */
				priceId: string
				/** @description ID of the product that needs to be used */
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
				/** @description location Id */
				locationId: string
			}
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description ID of the price that needs to be returned */
				priceId: string
				/** @description ID of the product that needs to be used */
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
	bulkUpdate: {
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
				'application/json': components['schemas']['BulkUpdateDto']
			}
		}
		responses: {
			/** @description Products updated successfully */
			201: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BulkUpdateResponseDto']
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
	bulkEdit: {
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
				'application/json': components['schemas']['BulkEditRequestDto']
			}
		}
		responses: {
			/** @description Products and prices updated successfully */
			201: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BulkEditResponseDto']
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
	'get-product-collection': {
		parameters: {
			query: {
				/** @description Location Id */
				altId: string
				/** @description The type of alt. For now it is only LOCATION */
				altType: 'location'
				/** @description Ids of the collections separated by comma(,) for search purposes */
				collectionIds?: string
				/** @description The maximum number of items to be included in a single page of results */
				limit?: number
				/** @description Query to search collection based on names */
				name?: string
				/** @description The starting index of the page, indicating the position from which the results should be retrieved. */
				offset?: number
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
					'application/json': components['schemas']['ListCollectionResponseDto']
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
	'create-product-collection': {
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
				'application/json': components['schemas']['CreateProductCollectionsDto']
			}
		}
		responses: {
			/** @description Successful response */
			201: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['CreateCollectionResponseDto']
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
	'get-product-collection-id': {
		parameters: {
			query: {
				/** @description Location Id */
				altId: string
			}
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description Collection Id */
				collectionId: string
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
					'application/json': components['schemas']['DefaultCollectionResponseDto']
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
	'update-product-collection': {
		parameters: {
			query?: never
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description MongoId of the collection */
				collectionId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['UpdateProductCollectionsDto']
			}
		}
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UpdateProductCollectionResponseDto']
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
	'delete-product-collection': {
		parameters: {
			query: {
				/** @description Location Id */
				altId: string
				/** @description The type of alt. For now it is only LOCATION */
				altType: 'location'
			}
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description MongoId of the collection */
				collectionId: string
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
					'application/json': components['schemas']['DeleteProductCollectionResponseDto']
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
	'get-list-inventory': {
		parameters: {
			query: {
				/** @description Location Id or Agency Id */
				altId: string
				altType: 'location'
				/** @description The maximum number of items to be included in a single page of results */
				limit?: number
				/** @description The starting index of the page, indicating the position from which the results should be retrieved. */
				offset?: number
				/** @description Search string for Variant Search */
				search?: string
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
					'application/json': components['schemas']['GetInventoryResponseDto']
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
	'update-inventory': {
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
				'application/json': components['schemas']['UpdateInventoryDto']
			}
		}
		responses: {
			/** @description Successful response */
			201: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UpdateInventoryResponseDto']
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
	'get-product-reviews': {
		parameters: {
			query: {
				/** @description Location Id or Agency Id */
				altId: string
				altType: 'location'
				/** @description The end date for filtering reviews */
				endDate?: string
				/** @description The maximum number of items to be included in a single page of results */
				limit?: number
				/** @description The starting index of the page, indicating the position from which the results should be retrieved. */
				offset?: number
				/** @description Comma-separated list of product IDs */
				productId?: string
				/** @description Key to filter the ratings */
				rating?: number
				/** @description The field upon which the sort should be applied */
				sortField?: 'createdAt' | 'rating'
				/** @description The order of sort which should be applied for the sortField */
				sortOrder?: 'asc' | 'desc'
				/** @description The start date for filtering reviews */
				startDate?: string
				/** @description Comma-separated list of store IDs */
				storeId?: string
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
					'application/json': components['schemas']['ListProductReviewsResponseDto']
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
	'update-product-review': {
		parameters: {
			query?: never
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description Review Id */
				reviewId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['UpdateProductReviewDto']
			}
		}
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UpdateProductReviewsResponseDto']
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
	'delete-product-review': {
		parameters: {
			query: {
				/** @description Location Id or Agency Id */
				altId: string
				altType: 'location'
				/** @description Product Id of the product */
				productId: string
			}
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description Review Id */
				reviewId: string
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
					'application/json': components['schemas']['DeleteProductReviewResponseDto']
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
	'bulk-update-product-review': {
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
				'application/json': components['schemas']['UpdateProductReviewsDto']
			}
		}
		responses: {
			/** @description Successful response */
			201: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UpdateProductReviewsResponseDto']
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
	'get-reviews-count': {
		parameters: {
			query: {
				/** @description Location Id or Agency Id */
				altId: string
				altType: 'location'
				/** @description The end date for filtering reviews */
				endDate?: string
				/** @description Comma-separated list of product IDs */
				productId?: string
				/** @description Key to filter the ratings */
				rating?: number
				/** @description The start date for filtering reviews */
				startDate?: string
				/** @description Comma-separated list of store IDs */
				storeId?: string
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
					'application/json': components['schemas']['CountReviewsByStatusResponseDto']
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
	'update-store-status': {
		parameters: {
			query?: never
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description Products related to the store */
				storeId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['UpdateProductStoreDto']
			}
		}
		responses: {
			/** @description Successful response */
			201: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UpdateProductStoreResponseDto']
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
	'update-display-priority': {
		parameters: {
			query?: never
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description Products related to the store */
				storeId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['UpdateDisplayPriorityBodyDto']
			}
		}
		responses: {
			/** @description Successfully updated display priorities */
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
	'get-product-store-stats': {
		parameters: {
			query: {
				/** @description Location Id or Agency Id */
				altId: string
				altType: 'location'
				/** @description Filter by product collection Ids. Supports comma separated values */
				collectionIds?: string
				/** @description The name of the product for searching. */
				search?: string
			}
			header: {
				/** @description API Version */
				Version: '2021-07-28'
			}
			path: {
				/** @description Products related to the store */
				storeId: string
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
					'application/json': components['schemas']['GetProductStatsResponseDto']
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
