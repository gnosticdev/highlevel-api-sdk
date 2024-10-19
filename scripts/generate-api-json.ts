import fs from 'node:fs'
import * as path from 'node:path'
import type {
	Method,
	OperationObject,
	PathItemObject,
	ReferenceObject,
} from 'openapi-typescript'

const API_URL = process.env.DOCS_API_URL
const USERNAME = process.env.DOCS_USERNAME
const PASSWORD = process.env.DOCS_PASSWORD

if (!API_URL || !USERNAME || !PASSWORD) {
	throw new Error('DOCS_API_URL, DOCS_USERNAME, and DOCS_PASSWORD must be set')
}

const TEMP_DIR = 'temp-schemas-json'

if (import.meta.main) {
	main().catch((error) => {
		console.error('Error downloading schemas', error)
		process.exit(1)
	})
}

/**
 * Fetch the list of schemas from the API, and splits them based on if they are an OpenAPI schema or not (other files).
 */
async function fetchSchemaList() {
	const authHeaders = {
		Authorization: `Basic ${Buffer.from(`${USERNAME}:${PASSWORD}`).toString('base64')}`,
	}
	const response = await fetch(`${API_URL}/list-schemas`, {
		headers: authHeaders,
	})
	if (!response.ok) {
		throw new Error(`Failed to fetch schema list: ${response.statusText}`)
	}
	const data = (await response.json()) as ListSchemas
	const schemas = data.schemas.reduce(
		(acc: { openapi: string[]; custom: string[] }, schema) => {
			if (['scopes.json', 'webhooks.json'].includes(schema.name)) {
				acc.custom.push(schema.name)
			} else {
				acc.openapi.push(schema.name)
			}
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
	schemaName: string,
	dir: string,
	isOpenApi: boolean,
) {
	const response = await fetch(`${API_URL}/${schemaName}`)
	if (!response.ok) {
		throw new Error(
			`Failed to download schema ${schemaName}: ${response.statusText}`,
		)
	}
	const content = await response.json()
	const processedContent = isOpenApi
		? ensureUniqueOperationIds(content)
		: content

	// Update the filename for OpenAPI schemas
	const fileName = isOpenApi
		? `${path.basename(schemaName, '.json')}.openapi.json`
		: schemaName

	const filePath = path.join(dir, fileName)
	await Bun.write(filePath, JSON.stringify(processedContent, null, 2))
	console.log(`Downloaded and processed: ${fileName}`)
}

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

async function main() {
	try {
		// Fetch list of schemas
		const schemas = await fetchSchemaList()
		console.log(
			`Found ${schemas.openapi.length} OpenAPI schemas and ${schemas.custom.length} other files`,
		)

		// Download OpenAPI schemas to temp directory
		for (const schema of schemas.openapi) {
			await downloadSchema(schema, path.join(TEMP_DIR, 'openapi'), true)
		}

		// Download custom schemas to temp directory
		for (const file of schemas.custom) {
			await downloadSchema(file, path.join(TEMP_DIR, 'custom'), false)
		}

		// If we've reached this point, all downloads were successful
		// move the files from the temp dir to the final dir
		await Bun.$`rsync -av --delete ${TEMP_DIR}/ schemas/v2`
		await Bun.$`rm -rf ${TEMP_DIR}`

		console.log('All schemas downloaded and moved successfully')
	} catch (error) {
		console.error('Error downloading schemas', error)
		// Clean up temp directory in case of error
		fs.rmSync(TEMP_DIR, { recursive: true, force: true })
	}
}

type ListSchemas = {
	schemas: {
		name: string
		size: number
		uploaded: string
	}[]
}
