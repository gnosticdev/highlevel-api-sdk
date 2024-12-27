export type paths = {
	'/courses/courses-exporter/public/import': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Import Courses
		 * @description Import Courses through public channels
		 */
		post: operations['import-courses']
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
		CategoryInterface: {
			posts?: components['schemas']['PostInterface'][]
			subCategories?: components['schemas']['SubCategoryInterface'][]
			thumbnailUrl?: string
			title: string
			visibility: components['schemas']['visibility']
		}
		/** @enum {string} */
		contentType: 'video' | 'assignment' | 'quiz'
		InstructorDetails: {
			description: string
			name: string
		}
		PostInterface: {
			bucketVideoUrl?: string
			contentType: components['schemas']['contentType']
			description: string
			postMaterials?: components['schemas']['PostMaterialInterface'][]
			thumbnailUrl?: string
			title: string
			visibility: components['schemas']['visibility']
		}
		PostMaterialInterface: {
			title: string
			type: components['schemas']['type']
			url: string
		}
		ProductInterface: {
			categories: components['schemas']['CategoryInterface'][]
			description: string
			imageUrl?: string
			instructorDetails?: components['schemas']['InstructorDetails']
			title: string
		}
		PublicExporterPayload: {
			locationId: string
			products: components['schemas']['ProductInterface'][]
			userId?: string
		}
		SubCategoryInterface: {
			posts?: components['schemas']['PostInterface'][]
			thumbnailUrl?: string
			title: string
			visibility: components['schemas']['visibility']
		}
		/** @enum {string} */
		type:
			| 'pdf'
			| 'image'
			| 'docx'
			| 'pptx'
			| 'xlsx'
			| 'html'
			| 'dotx'
			| 'epub'
			| 'webp'
			| 'gdoc'
			| 'mp3'
			| 'doc'
			| 'txt'
			| 'zip'
			| 'ppt'
			| 'key'
			| 'htm'
			| 'xls'
			| 'odp'
			| 'odt'
			| 'rtf'
			| 'm4a'
			| 'ods'
			| 'mp4'
			| 'ai'
			| 'avi'
			| 'mov'
			| 'wmv'
			| 'mkv'
			| 'wav'
			| 'flac'
			| 'ogg'
			| 'png'
			| 'jpeg'
			| 'jpg'
			| 'gif'
			| 'bmp'
			| 'tiff'
			| 'svg'
			| 'odg'
			| 'sxw'
			| 'sxc'
			| 'sxi'
			| 'rar'
			| '7z'
			| 'json'
			| 'xml'
			| 'csv'
			| 'md'
			| 'obj'
			| 'stl'
			| 'woff'
			| 'ttf'
		/** @enum {string} */
		visibility: 'published' | 'draft'
	}
	responses: never
	parameters: never
	requestBodies: never
	headers: never
	pathItems: never
}
export type $defs = Record<string, never>
export interface operations {
	'import-courses': {
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
				'application/json': components['schemas']['PublicExporterPayload']
			}
		}
		responses: {
			201: {
				headers: {
					[name: string]: unknown
				}
				content?: never
			}
		}
	}
}
