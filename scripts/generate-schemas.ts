import * as fs from 'node:fs/promises'
import * as path from 'node:path'

let API_URL = 'https://highlevel-v2-api.gnosticai.workers.dev'
if (process.env.NODE_ENV === 'development') {
	API_URL = 'http://localhost:8787'
}

const USERNAME = process.env.DOCS_USERNAME
const PASSWORD = process.env.DOCS_PASSWORD
const OUTPUT_DIR = './src/openapi' // Directory to save downloaded schemas

const authHeaders = {
	Authorization: `Basic ${Buffer.from(`${USERNAME}:${PASSWORD}`).toString('base64')}`,
}

async function fetchSchemaList() {
	const response = await fetch(`${API_URL}/list-schemas`, {
		headers: authHeaders,
		verbose: true,
	})
	if (!response.ok) {
		throw new Error(`Failed to fetch schema list: ${response.statusText}`)
	}
	const data = await response.json()
	return data.schemas
}

async function downloadSchema(schemaName: string) {
	const response = await fetch(`${API_URL}/${schemaName}`)
	if (!response.ok) {
		throw new Error(
			`Failed to download schema ${schemaName}: ${response.statusText}`,
		)
	}
	const content = await response.json()
	const filePath = path.join(OUTPUT_DIR, schemaName)
	await Bun.write(filePath, JSON.stringify(content, null, 2))
	console.log(`Downloaded: ${schemaName}`)
}

async function main() {
	try {
		// Ensure output directory exists
		await fs.mkdir(OUTPUT_DIR, { recursive: true })

		// Fetch list of schemas
		const schemas = await fetchSchemaList()
		console.log(`Found ${schemas.length} schemas`)

		// Download each schema
		for (const schema of schemas) {
			await downloadSchema(schema.name)
		}

		console.log('All schemas downloaded successfully')
	} catch (error) {
		console.error('Error downloading schemas', error)
	}
}

main()
