import path from 'node:path'
import type { OpenAPI3, SchemaObject } from 'openapi-typescript'
import { CUSTOM_V2_SCHEMAS_DIR } from './constants'

export interface WebhookSchema {
	title: string
	jsonSchema: {
		type: string
		properties: Record<string, SchemaObject>
	}
}

/**
 * Checks that a json object is the custom webhook schema type
 */
export function isWebhookSchema(webhook: unknown): webhook is WebhookSchema {
	return (
		typeof webhook === 'object' &&
		webhook !== null &&
		'title' in webhook &&
		'jsonSchema' in webhook &&
		typeof (webhook as WebhookSchema).title === 'string' &&
		typeof (webhook as WebhookSchema).jsonSchema === 'object' &&
		(webhook as WebhookSchema).jsonSchema !== null &&
		typeof (webhook as WebhookSchema).jsonSchema.type === 'string' &&
		(webhook as WebhookSchema).jsonSchema.type === 'object' &&
		typeof (webhook as WebhookSchema).jsonSchema.properties === 'object'
	)
}

/**
 * Converts an array of webhook schemas to an OpenAPI3 schema.
 *
 * _NOTE: The webhook schemas are collected from an internal endpoint from the official documentation. It is not an official schema provided by HighLevel.
 * @param webhooks - An array of webhook schemas.
 * @returns An OpenAPI3 schema.
 */
export function convertWebhooksToOpenAPI(webhooks: WebhookSchema[]): OpenAPI3 {
	const openAPISchema: OpenAPI3 = {
		openapi: '3.0.0',
		info: {
			title: 'Webhooks API',
			version: '1.0.0',
		},
		paths: {},
		components: {
			schemas: {},
		},
		webhooks: {},
	}

	for (const webhook of webhooks) {
		const schemaName = webhook.title.replace(/\s+/g, '')
		if (openAPISchema.components?.schemas) {
			openAPISchema.components.schemas[schemaName] = {
				type: 'object',
				properties: webhook.jsonSchema.properties,
			}
		}

		// Add webhook to the webhooks object
		if (openAPISchema.webhooks) {
			openAPISchema.webhooks[schemaName] = {
				post: {
					requestBody: {
						content: {
							'application/json': {
								schema: {
									$ref: `#/components/schemas/${schemaName}`,
								},
							},
						},
					},
					responses: {
						'200': {
							description: 'Webhook processed successfully',
						},
					},
				},
			}
		}
	}

	return openAPISchema
}

/**
 * Validates an array of webhook schemas and separates them into valid and invalid schemas
 */
export function validateWebhooks(webhooksJSON: unknown[]): {
	validSchemas: WebhookSchema[]
	invalidSchemas: unknown[]
} {
	const invalidSchemas: unknown[] = []
	const validSchemas: WebhookSchema[] = []
	for (const webhook of webhooksJSON) {
		if (isWebhookSchema(webhook)) {
			validSchemas.push(webhook)
		} else {
			invalidSchemas.push(webhook)
		}
	}
	return { validSchemas, invalidSchemas }
}

if (import.meta.main) {
	const webhooksJSON = await Bun.file(
		path.join(CUSTOM_V2_SCHEMAS_DIR, 'webhooks.json'),
	).json()
	if (!Array.isArray(webhooksJSON)) {
		throw new Error('Webhooks JSON is not an array')
	}

	const { validSchemas } = validateWebhooks(webhooksJSON)
	const openAPISchema = convertWebhooksToOpenAPI(validSchemas)

	await Bun.write(
		path.join(CUSTOM_V2_SCHEMAS_DIR, 'webhooks.openapi.json'),
		JSON.stringify(openAPISchema, null, 2),
	)

	generateWebhooksModules(openAPISchema)

	console.log('Generated OpenAPI schema for webhooks')
}

export function generateWebhooksModules(openAPISchema: OpenAPI3) {
	const webhooksComponents = openAPISchema.components?.schemas
	if (!webhooksComponents) {
		throw new Error('No components found in webhooks OpenAPI schema')
	}

	const imports = `import type { components } from './webhooks-openapi'\n\n`
	const typeAlias = `type WebhooksOpenAPI = components['schemas']\n\n`

	const exports = Object.keys(webhooksComponents)
		.map((schemaName) => {
			return `export type ${schemaName} = WebhooksOpenAPI['${schemaName}']`
		})
		.join('\n')

	return imports + typeAlias + exports
}
