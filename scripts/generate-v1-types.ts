import kleur from 'kleur'
import openapiTS, {
	type AnnotatedSchemaObject,
	type OpenAPI3,
	type OperationObject,
	type ParameterObject,
	type ReferenceObject,
	type SchemaObject,
	astToString,
} from 'openapi-typescript'
import { TempFile, objectKeys } from '../src/lib/utils'

if (import.meta.main) {
	await createV1Types()
}

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
function generateSchemaFromExample(example: any): SchemaObject {
	if (Array.isArray(example)) {
		return {
			type: 'array',
			items: generateSchemaFromExample(example[0]),
		}
	}
	if (typeof example === 'object' && example !== null) {
		const properties: Record<string, SchemaObject> = {}
		for (const [key, value] of Object.entries(example)) {
			properties[key] = generateSchemaFromExample(value)
		}
		return { type: 'object', properties }
	}
	return { type: typeof example as 'string' | 'number' | 'boolean' }
}

function addComponentSchemas(openapiJson: OpenAPI3) {
	if (!openapiJson.components) {
		openapiJson.components = {}
	}
	if (!openapiJson.components.schemas) {
		openapiJson.components.schemas = {}
	}

	if (!openapiJson.paths) {
		throw new Error('No paths found in openapi data')
	}

	for (const path of objectKeys(openapiJson.paths)) {
		for (const method of objectKeys(openapiJson.paths[path]!)) {
			const operation = openapiJson.paths[path]![method] as OperationObject
			if (operation.responses) {
				for (const statusCode of objectKeys(operation.responses)) {
					const response = operation.responses[statusCode]
					if (isReferenceObject(response)) {
						continue
					}
					if (response?.content?.['application/json']?.example) {
						const example = response.content['application/json'].example
						if (typeof path === 'number') {
							continue
						}
						const schemaName = `${path.replace(/\//g, '_')}_${method}_${statusCode}_response`
						openapiJson.components.schemas[schemaName] =
							generateSchemaFromExample(example)

						// Replace the example with a reference to the new schema
						response.content['application/json'].schema = {
							$ref: `#/components/schemas/${schemaName}`,
						}
					}
				}
			}
		}
	}
}

export async function createV1Types() {
	const postmanJson = Bun.resolveSync('schemas/v1/postman.json', process.cwd())
	// convert postman json to openapi json using postman-to-openapi
	// const openapiYaml = Bun.pathToFileURL('schemas/v1/openapi.yaml')
	// create temp json options file
	const opts = {
		servers: [
			{
				url: 'https://rest.gohighlevel.com',
				description: 'v1 API base URL',
			},
		],
		auth: {
			bearer: {
				type: 'http',
				scheme: 'bearer',
				name: 'Authorization',
			},
		},
		outputFormat: 'json',
	}

	const requiredParams: ParameterObject = {
		name: 'Authorization',
		in: 'header',
		description: 'Access Token',
		required: false,
		schema: {
			type: 'string',
			example: 'Bearer 9c48df2694a849b6089f9d0d3513efe',
		},
	}

	await using optionsJson = new TempFile(
		'temp-v1-json.json',
		JSON.stringify(opts),
	)
	const openapiJsonFile = 'schemas/v1/openapi.json'

	await Bun.$`bunx --bun postman-to-openapi ${postmanJson} -f ${openapiJsonFile} -o ${optionsJson.path}`.quiet()
	const openapiJson: OpenAPI3 = await Bun.file(openapiJsonFile).json()
	// add the required headers to each path's parameters object
	const paths = openapiJson.paths
	if (!paths) {
		throw new Error('No paths found in openapi data')
	}

	for (const path of objectKeys(paths)) {
		for (const method of objectKeys(paths[path]!)) {
			const methodObj = paths[path]![method]! as OperationObject
			methodObj.parameters?.push(requiredParams)

			if (!methodObj.responses?.['200']) {
				continue
			}
			const response = methodObj.responses['200']
			if (isReferenceObject(response)) {
				continue
			}
			if (!response.content?.['application/json']) {
				continue
			}

			// Add proper schema for responses
			const jsonContent = response.content['application/json']
			if (jsonContent.example && !jsonContent.schema) {
				jsonContent.schema = addExampleAsResponseSchema(jsonContent.example)
			}
		}
	}

	// Add component schemas based on examples
	addComponentSchemas(openapiJson)

	// create the openapi json file for reference
	await Bun.write(openapiJsonFile, JSON.stringify(openapiJson))

	console.log(
		kleur.green('Successfully converted postman json to openapi json'),
	)
	// convert openapi json to typescript types using openapi-typescript
	const openapiTypes = await openapiTS(openapiJson, {
		defaultNonNullable: true,
		version: 3.1,
		alphabetize: true,
		exportType: true,
	})
	const data = astToString(openapiTypes)
	await Bun.write('src/generated/v1/openapi.ts', data)
	console.log(kleur.green('Successfully created openapi types for v1'))
}

function addExampleAsResponseSchema(
	example: AnnotatedSchemaObject,
): SchemaObject {
	if (typeof example !== 'object' || example === null) {
		return { type: typeof example as 'string' | 'number' | 'boolean' }
	}

	if (Array.isArray(example)) {
		return {
			type: 'array',
			items: addExampleAsResponseSchema(example[0]),
		}
	}

	const properties: Record<string, SchemaObject> = {}
	for (const [key, value] of Object.entries(example)) {
		properties[key] = addExampleAsResponseSchema(value)
	}

	return {
		type: 'object',
		properties,
	}
}

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
function isReferenceObject(obj: any): obj is ReferenceObject {
	return typeof obj === 'object' && obj !== null && '$ref' in obj
}
