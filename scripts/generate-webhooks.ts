import path from 'node:path'
import openapiTS, { astToString } from 'openapi-typescript'
import { CUSTOM_TYPES_DIR, CUSTOM_V2_SCHEMAS_DIR } from './constants'
import {
	convertWebhooksToOpenAPI,
	generateWebhooksModules,
	validateWebhooks,
} from './webhooks-to-openapi'

const WEBHOOKS_OPENAPI_TYPES = path.join(
	CUSTOM_TYPES_DIR,
	'webhooks-openapi.ts',
) as `${string}/webhooks-openapi.ts`

const WEBHOOKS_OUTPUT_TYPES = path.join(
	CUSTOM_TYPES_DIR,
	'webhooks.ts',
) as `${string}/webhooks.ts`

if (import.meta.main) {
	await generateWebhooksTypes()
}
/**
 * First generates the webhook types using openapi-typescript, then uses the output to generate the webhook modules
 */
async function generateWebhooksTypes() {
	const webhooksJSON = await Bun.file(
		path.join(CUSTOM_V2_SCHEMAS_DIR, 'webhooks.json'),
	).json()
	if (!Array.isArray(webhooksJSON)) {
		throw new Error('Webhooks JSON is not an array')
	}
	console.log('read webhooks json', webhooksJSON[0]?.title)

	const { validSchemas, invalidSchemas } = validateWebhooks(webhooksJSON)
	if (invalidSchemas.length > 0) {
		console.warn('Found invalid webhook schemas:', invalidSchemas)
	}

	const openAPISchema = convertWebhooksToOpenAPI(validSchemas)
	console.log('converted webhooks to openapi schema')

	/**
	 * The webhooks.openapi.json file will still stay in the custom schemas directory bc we dont want to mix in with the endpoint schemas.
	 */
	const webhooksOpenapiJson = path.join(
		CUSTOM_V2_SCHEMAS_DIR,
		'webhooks.openapi.json',
	)
	await Bun.write(webhooksOpenapiJson, JSON.stringify(openAPISchema, null, 2))

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

	const webhooksModules = generateWebhooksModules(openAPISchema)

	// write the webhook modules to a file
	await Bun.write(WEBHOOKS_OUTPUT_TYPES, webhooksModules)

	console.log('✨ Generated webhook types and modules')
}
