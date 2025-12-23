import fs from 'node:fs'
import * as path from 'node:path'
import kleur from 'kleur'
import type {
	Method,
	OperationObject,
	PathItemObject,
	ReferenceObject,
} from 'openapi-typescript'

// ---------------------------------
/**
 * This script fetches the OpenAPI schemas from storage and saves them to the schemas/v2 directory.
 *
 * It also ensures that the operationIds are unique.
 */
// ---------------------------------

const API_URL = process.env.DOCS_API_URL
const USERNAME = process.env.DOCS_USERNAME
const PASSWORD = process.env.DOCS_PASSWORD

if (!API_URL || !USERNAME || !PASSWORD) {
	throw new Error('DOCS_API_URL, DOCS_USERNAME, and DOCS_PASSWORD must be set')
}

const CUSTOM_SCHEMA_NAMES = ['scopes', 'webhooks']

const TEMP_DIR = 'temp-schemas-json'

if (import.meta.main) {
	try {
		// Fetch list of schemas
		const schemas = await fetchSchemaList()
		console.log(
			`Found ${schemas.openapi.length} OpenAPI schemas and ${schemas.custom.length} other files`,
		)

		// Download OpenAPI schemas to temp directory
		console.log(kleur.bgBlue('Downloading OpenAPI schemas'))
		for (const openapiSchema of schemas.openapi) {
			await downloadSchema(openapiSchema, path.join(TEMP_DIR, 'openapi'), true)
			console.log(kleur.cyan(`Downloaded ${openapiSchema.name}`))
		}

		// Download custom schemas to temp directory
		console.log(kleur.bgBlue('Downloading custom schemas'))
		for (const customSchema of schemas.custom) {
			await downloadSchema(customSchema, path.join(TEMP_DIR, 'custom'), false)
			console.log(kleur.cyan(`Downloaded ${customSchema.name}`))
		}

		// If we've reached this point, all downloads were successful
		// move the files from the temp dir to the final dir
		await Bun.$`rsync -av --checksum ${TEMP_DIR}/ schemas/v2`
		console.log('All schemas downloaded and moved successfully')

		await Bun.$`bun biome check --write --unsafe schemas/v2`
		console.log('All schemas linted successfully')
	} catch (error) {
		console.error('Error downloading schemas', error)
		// Clean up temp directory in case of error
		fs.rmSync(TEMP_DIR, { recursive: true, force: true })
	} finally {
		await Bun.$`rm -rf ${TEMP_DIR}`
	}
}

type FetchSchemaListResponse = {
	openapi: ListSchemaItem[]
	custom: ListSchemaItem[]
}
/**
 * Fetch the list of schemas from the API, and splits them based on if they are an OpenAPI schema or not (other files).
 */
async function fetchSchemaList(): Promise<FetchSchemaListResponse> {
	// we have a special /schemas/index.json file that contains a list of all the schemas
	const response = await fetch(`${API_URL}/schemas/index.json`)
	if (!response.ok) {
		throw new Error(`Failed to fetch schema list: ${response.statusText}`)
	}
	const data = (await response.json()) as SchemaList
	console.log('data', data)

	const schemas = data.schemas.reduce(
		(acc: FetchSchemaListResponse, schema) => {
			const downloadUrl = new URL(schema.downloadUrl, API_URL)
			schema.downloadUrl = downloadUrl.toString()
			if (CUSTOM_SCHEMA_NAMES.includes(schema.name)) {
				acc.custom.push(schema)
				return acc
			}
			// skip the index.json file
			if (schema.name === 'index') {
				return acc
			}
			acc.openapi.push(schema)
			return acc
		},
		{ openapi: [], custom: [] },
	)
	return schemas
}

/**
 * Download a schema from the API.
 */
async function downloadSchema(
	schema: ListSchemaItem,
	dir: string,
	isOpenApi: boolean,
) {
	if (
		!schema.downloadUrl.startsWith(API_URL) ||
		!schema.downloadUrl.endsWith('.json')
	) {
		throw new Error(`Invalid download URL: ${schema.downloadUrl}`)
	}
	const response = await fetch(schema.downloadUrl)
	if (!response.ok) {
		throw new Error(
			`Failed to download schema ${schema.downloadUrl}: ${response.statusText}`,
		)
	}
	const content = await response.json()
	const processedContent = isOpenApi
		? ensureUniqueOperationIds(content)
		: content

	// Update the filename for OpenAPI schemas. Dont forget to remove the /schemas/ prefix
	const fileName = isOpenApi
		? schema.name.concat('.openapi.json')
		: schema.name.concat('.json')
	console.log('writing file', fileName)
	const filePath = path.join(dir, fileName)
	await Bun.write(filePath, JSON.stringify(processedContent, null, 2))
	console.log(`Downloaded and processed: ${fileName}`)
}

/**
 * Check if the operation is an OperationObject.
 */
function isOperationObject(
	operation: OperationObject | ReferenceObject | undefined,
): operation is OperationObject {
	return (
		typeof operation === 'object' &&
		operation !== null &&
		'operationId' in operation
	)
}

function ensureUniqueOperationIds(
	schema: import('openapi-typescript').OpenAPI3,
) {
	const usedIds = new Set()
	const paths = schema.paths
	if (!paths) {
		return schema
	}

	for (const path in paths) {
		for (const method in paths[path]) {
			const pathItem = paths[path] as PathItemObject
			const operation = pathItem[method as Method]
			if (!isOperationObject(operation)) {
				continue
			}
			// rename operationId if it is not unique
			if (operation.operationId) {
				if (usedIds.has(operation.operationId)) {
					// construct new operationId from original + method
					let newId = `${operation.operationId}_${method}`
					let counter = 1
					// add a counter to the end of the operationId if it already exists
					if (usedIds.has(newId)) {
						while (usedIds.has(newId)) {
							newId = `${operation.operationId}_${method}_${counter}`
							counter++
						}
					}
					operation.operationId = newId
					console.log(`Renamed ${operation.operationId} to ${newId}`)
				}
				usedIds.add(operation.operationId)
			}
		}
	}

	return schema
}

type SchemaList = {
	lastUpdated: string
	totalSchemas: number
	schemas: ListSchemaItem[]
}

type ListSchemaItem = {
	/**
	 * The name of the schema file.
	 *
	 * @example
	 * 'scopes'
	 */
	name: string
	/**
	 * The path to the schema file.
	 *
	 * @example
	 * '/schemas/scopes.json'
	 */
	path: string
	/**
	 * The size of the schema file in bytes.
	 */
	size: number
	/**
	 * The last modified date of the schema file.
	 */
	lastModified: string
	/**
	 * The URL to download the schema file.
	 *
	 * @example
	 * '/download/scopes.json'
	 */
	downloadUrl: string
}
