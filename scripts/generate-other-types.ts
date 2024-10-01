import path from 'node:path'
import { OTHER_SCHEMAS_DIR, OTHER_TYPES_DIR } from '../src/lib/constants'
import { convertWebhooksToOpenAPI } from './convert-webhooks-to-openapi'

const SCOPES_OUTPUT_FILE = path.join(OTHER_TYPES_DIR, 'scopes.ts')
const WEBHOOKS_OUTPUT_FILE = path.join(OTHER_TYPES_DIR, 'webhooks.ts')

if (import.meta.main) {
	await generateScopesTypes()
	await generateWebhooksTypes()
}

async function generateScopesTypes() {
	const scopesJSON = await Bun.file(
		path.join(OTHER_SCHEMAS_DIR, 'scopes.json'),
	).json()
	// replacer to add 'as const' to the end of accessType arrays
	const generatedScopes = `export const scopesSchema = ${JSON.stringify(
		scopesJSON,
		null,
		4,
	).replace(/"accessType": \[([^\]]+)\]/g, '"accessType": [$1] as const')}`

	// write the generated scopes to a file
	await Bun.write(SCOPES_OUTPUT_FILE, generatedScopes)
	console.log('generated scopes')
}

async function generateWebhooksTypes() {
	const webhooksJSON = await Bun.file(
		path.join(OTHER_SCHEMAS_DIR, 'webhooks.json'),
	).json()
	const openAPISchema = convertWebhooksToOpenAPI(webhooksJSON)

	const generatedWebhooks = `export const webhooksSchema = ${JSON.stringify(
		openAPISchema,
		null,
		4,
	)}`

	await Bun.write(WEBHOOKS_OUTPUT_FILE, generatedWebhooks)
	console.log('generated webhooks')
}
