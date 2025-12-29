import { downloadJsonSchemas } from './download-json-schemas'
import { generateClientInterface } from './generate-interface'
import { generateScopesTypes } from './generate-scopes-types'
// import { generateV1Types } from './generate-v1-types.ts' // deprecated
import { generateV2Types } from './generate-v2-types'
import { generateWebhooksTypes } from './generate-webhooks-types'

if (import.meta.main) {
	await downloadJsonSchemas()
	await generateWebhooksTypes()
	await generateScopesTypes()
	const typeFiles = await generateV2Types()
	await generateClientInterface(typeFiles)
}
