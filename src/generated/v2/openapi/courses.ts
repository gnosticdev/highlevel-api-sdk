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
		/** @enum {string} */
		visibility: 'published' | 'draft'
		/** @enum {string} */
		contentType: 'video' | 'assignment' | 'quiz'
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
		PostMaterialInterface: {
			title: string
			type: components['schemas']['type']
			url: string
		}
		PostInterface: {
			title: string
			visibility: components['schemas']['visibility']
			thumbnailUrl?: string
			contentType: components['schemas']['contentType']
			description: string
			bucketVideoUrl?: string
			postMaterials?: components['schemas']['PostMaterialInterface'][]
		}
		SubCategoryInterface: {
			title: string
			visibility: components['schemas']['visibility']
			thumbnailUrl?: string
			posts?: components['schemas']['PostInterface'][]
		}
		CategoryInterface: {
			title: string
			visibility: components['schemas']['visibility']
			thumbnailUrl?: string
			posts?: components['schemas']['PostInterface'][]
			subCategories?: components['schemas']['SubCategoryInterface'][]
		}
		InstructorDetails: {
			name: string
			description: string
		}
		ProductInterface: {
			title: string
			description: string
			imageUrl?: string
			categories: components['schemas']['CategoryInterface'][]
			instructorDetails?: components['schemas']['InstructorDetails']
		}
		PublicExporterPayload: {
			locationId: string
			userId?: string
			products: components['schemas']['ProductInterface'][]
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
