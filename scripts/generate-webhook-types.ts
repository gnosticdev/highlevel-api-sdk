import path from 'node:path'
import openapiTS, { astToString } from 'openapi-typescript'
import { OTHER_SCHEMAS_DIR, OTHER_TYPES_DIR } from '../src/lib/constants'
import {
	convertWebhooksToOpenAPI,
	generateWebhooksModules,
} from './webhooks-to-openapi'

const WEBHOOKS_OPENAPI_TYPES = path.join(OTHER_TYPES_DIR, 'webhooks-openapi.ts')
const WEBHOOKS_OUTPUT_TYPES = path.join(OTHER_TYPES_DIR, 'webhooks.ts')

if (import.meta.main) {
	await generateWebhooksTypes()
}
/**
 * First generates the webhook types using openapi-typescript, then uses the output to generate the webhook modules
 */
async function generateWebhooksTypes() {
	const webhooksJSON = await Bun.file(
		path.join(OTHER_SCHEMAS_DIR, 'webhooks.json'),
	).json()
	const openAPISchema = convertWebhooksToOpenAPI(webhooksJSON)

	const openapiTypes = await openapiTS(openAPISchema, {
		exportType: true,
		defaultNonNullable: true,
		version: 3.0,
	})
	// write the openapi types to a file
	await Bun.write(
		WEBHOOKS_OPENAPI_TYPES,
		astToString(openapiTypes, { fileName: 'webhooks' }),
	)

	const webhooksModules = await generateWebhooksModules(openAPISchema)

	// write the webhook modules to a file
	await Bun.write(WEBHOOKS_OUTPUT_TYPES, webhooksModules)

	console.log('generated webhooks')
}
