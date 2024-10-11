import path from 'node:path'
import type { OpenAPI3, SchemaObject } from 'openapi-typescript'
import { objectEntries } from 'src/lib/utils'
import { OTHER_SCHEMAS_DIR, OTHER_TYPES_DIR } from '../src/lib/constants'

interface WebhookSchema {
	title: string
	jsonSchema: {
		type: string
		properties: Record<string, SchemaObject>
	}
}

function isWebhookSchema(webhook: unknown): webhook is WebhookSchema {
	return (
		typeof webhook === 'object' &&
		webhook !== null &&
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
	}

	for (const webhook of webhooks) {
		const schemaName = webhook.title.replace(/\s+/g, '')
		if (openAPISchema.components?.schemas) {
			openAPISchema.components.schemas[schemaName] = {
				type: 'object',
				properties: webhook.jsonSchema.properties,
			}
		}
	}

	return openAPISchema
}

if (import.meta.main) {
	const webhooksJSON = await Bun.file(
		path.join(OTHER_SCHEMAS_DIR, 'webhooks.json'),
	).json()
	if (!Array.isArray(webhooksJSON)) {
		throw new Error('Webhooks JSON is not an array')
	}
	const invalidSchemas = webhooksJSON.filter(
		(webhook) => !isWebhookSchema(webhook),
	)
	if (invalidSchemas.length > 0) {
		throw new Error(
			`Invalid webhook schemas: ${invalidSchemas.map((webhook) => webhook.title).join(', ')}`,
		)
	}
	const openAPISchema = convertWebhooksToOpenAPI(webhooksJSON)

	await Bun.write(
		path.join(OTHER_SCHEMAS_DIR, 'webhooks-openapi.json'),
		JSON.stringify(openAPISchema, null, 2),
	)

	await generateWebhooksModules(openAPISchema)

	console.log('Generated OpenAPI schema for webhooks')
}

export async function generateWebhooksModules(openapiJSON: OpenAPI3) {
	const webhooksComponents = openapiJSON.components?.schemas

	if (!webhooksComponents) {
		throw new Error('No components found in webhooks OpenAPI schema')
	}

	const webhooksModules: string[] = []

	for (const [key] of objectEntries(webhooksComponents)) {
		const webhookName = key.replace(/\s+/g, '')
		const webhookModule = `export type ${webhookName} = import('./webhooks-openapi').components['schemas']['${webhookName}']`
		webhooksModules.push(webhookModule)
	}

	return webhooksModules.join('\n')
}
