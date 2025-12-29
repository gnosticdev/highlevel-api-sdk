import fs from 'node:fs'
import { tmpdir } from 'node:os'
import * as path from 'node:path'
import kleur from 'kleur'
import type {
	Method,
	OperationObject,
	PathItemObject,
	ReferenceObject,
} from 'openapi-typescript'

/**
 * The response from the Docs API for the /schemas/index.json file.
 */
type ListSchemaItem = {
	name: string
	path: string
	size: number
	lastModified: string
	downloadUrl: string
}

type SchemaList = {
	lastUpdated: string
	totalSchemas: number
	schemas: ListSchemaItem[]
}

// ---------------------------------
// This script fetches the OpenAPI schemas from storage and saves them to the schemas/v2 directory.
// It also ensures that the operationIds are unique.
// ---------------------------------

if (import.meta.main) {
	await downloadJsonSchemas()

	// format and lint to ensure any changes are to the content only
	await Bun.$`bun run biome check schemas/v2 --write --unsafe`
}

export async function downloadJsonSchemas() {
	const TEMP_DIR = fs.mkdtempSync(path.join(tmpdir(), 'schemas-json-'))
	const API_URL = process.env.DOCS_API_URL
	const USERNAME = process.env.DOCS_USERNAME
	const PASSWORD = process.env.DOCS_PASSWORD

	if (!API_URL || !USERNAME || !PASSWORD) {
		throw new Error(
			'DOCS_API_URL, DOCS_USERNAME, and DOCS_PASSWORD must be set',
		)
	}
	try {
		// Fetch list of schemas
		const listResult = await fetchSchemaList(API_URL)
		console.log(
			console.log(kleur.green(`Found ${listResult.totalSchemas} schemas`)),
		)

		await Promise.all(
			listResult.schemas.map(async (schema) => {
				const downloadUrl = new URL(schema.downloadUrl, API_URL)
				console.log(
					kleur.yellow(`Downloading ${schema.name} from ${downloadUrl.href}`),
				)

				await downloadSchema(downloadUrl.href, path.join(TEMP_DIR, schema.name))
			}),
		)

		// If we've reached this point, all downloads were successful
		// move the files from the temp dir to the final dir using rsync with checksum so we only move the files that have changed
		await Bun.$`rsync -av --checksum ${TEMP_DIR}/ schemas/v2`
		console.log(kleur.green('All schemas downloaded and moved successfully'))

		console.log(kleur.green('All schemas linted successfully'))
	} catch (error) {
		console.error('Error downloading schemas', error)
	} finally {
		fs.rmSync(TEMP_DIR, { recursive: true, force: true })
	}
}

/**
 * Fetch the list of schemas from the API, and splits them based on if they are an OpenAPI schema or not (other files).
 */
async function fetchSchemaList(apiUrl: string): Promise<SchemaList> {
	// we have a special /schemas/index.json file that contains a list of all the schemas
	const response = await fetch(`${apiUrl}/index.json`)
	if (!response.ok) {
		throw new Error(`Failed to fetch schema list: ${response.statusText}`)
	}
	const schemaList = (await response.json()) as SchemaList
	if (schemaList.schemas.length === 0) {
		throw new Error('No schemas found')
	}

	return schemaList
}

/**
 * Download a schema from the API.
 */
async function downloadSchema(downloadUrl: string, downloadToPath: string) {
	const response = await fetch(downloadUrl)
	if (!response.ok) {
		throw new Error(
			`Failed to download schema ${downloadUrl}: ${response.statusText}`,
		)
	}
	const content = await response.json()
	// only api-endpoints come as openapi schemas
	const isOpenApi = downloadUrl.includes('api-endpoints')
	const processedContent = isOpenApi
		? ensureUniqueOperationIds(content)
		: content

	let finalDownloadToPath = downloadToPath

	// make openapi schema files use the .openapi.json extension
	if (isOpenApi) {
		finalDownloadToPath = downloadToPath.replace('.json', '.openapi.json')
	}

	await Bun.write(
		finalDownloadToPath,
		JSON.stringify(processedContent, null, 2),
	)
	console.log(kleur.green(`Downloaded and processed: ${finalDownloadToPath}`))
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

/**
 * OperationIds must be unique within the schema to produce valid typescript types with `openapi-ts`. This function iterates through them and updates the operationId if it is not unique.
 */
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
