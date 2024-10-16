import path from 'node:path'
import kleur from 'kleur'
import openapiTS, {
	astToString,
	type OpenAPI3,
	type OperationObject,
	type ParameterObject,
} from 'openapi-typescript'
import { OPENAPI_TYPES_V2_DIR } from '../src/lib/constants'

class TempJson implements AsyncDisposable {
	path: string
	constructor(path: string, data?: string) {
		this.path = path
		if (data) {
			this.write(data)
		}
	}
	async [Symbol.asyncDispose]() {
		await Bun.$`rm -f ${this.path}`
	}
	async write(data: string) {
		await Bun.write(this.path, data)
	}
}

const TEMP_DIR = 'temp-schema-types'

if (import.meta.main) {
	// dont run this unless the api changes.
	await createV1Types()
	await generateOpenApiTypes()
}

async function createV1Types() {
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
		required: true,
		schema: {
			type: 'string',
			example: 'Bearer 9c48df2694a849b6089f9d0d3513efe',
		},
	}

	const optionsJson = new TempJson('temp-v1-json.json', JSON.stringify(opts))
	const openapiJsonFile = 'schemas/v1/openapi.json'

	await Bun.$`bunx --bun postman-to-openapi ${postmanJson} -f ${openapiJsonFile} -o ${optionsJson.path}`
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
		}
	}

	await Bun.write(openapiJsonFile, JSON.stringify(openapiJson))
	console.log(
		kleur.green('Successfully converted postman json to openapi json'),
	)
	// convert openapi json to typescript types using openapi-typescript
	const openapiTypes = await openapiTS(openapiJson, {
		version: 3.0,
		defaultNonNullable: true,
		alphabetize: true,
		exportType: true,
	})
	const data = astToString(openapiTypes)
	await Bun.write('src/generated/v1/openapi.ts', data)
	console.log(kleur.green('Successfully created openapi types for v1'))
}

/**
 * Get all the schema files as URLs.
 */
async function getV2OpenApiFiles() {
	// get all json files with openapi in the path somewhere
	const glob = new Bun.Glob('schemas/v2/openapi/*.json')
	const files = await Array.fromAsync(glob.scan())
	console.log(files)
	if (files.length === 0) {
		throw new Error('No files found in schemas')
	}
	return files.map((file) => Bun.pathToFileURL(file))
}

async function createOpenApiTypesFile(file: URL) {
	const fileName = path.basename(file.pathname, '.json')
	const output = await openapiTS(file, {
		version: 3.0,
		defaultNonNullable: true,
		exportType: true,
	})

	const data = astToString(output, { fileName })

	const outFile = path.join(TEMP_DIR, `${fileName}.ts`)
	await Bun.write(outFile, data)
	return outFile
}

/**
 * Generate types from openapi schemas. Outputs a file for each openapi schema.
 */
export async function generateOpenApiTypes() {
	await Bun.$`mkdir -p ${TEMP_DIR}`

	const schemaFiles = await getV2OpenApiFiles()
	const generatedFiles: string[] = []

	try {
		for (const schemaFile of schemaFiles) {
			const fileName = path.basename(schemaFile.pathname, '.json')
			console.log(kleur.bgBlue(`Creating types for ${fileName}`))

			const outFile = await createOpenApiTypesFile(schemaFile)
			generatedFiles.push(outFile)

			console.log(kleur.green(`Added types for ${fileName}`))
		}

		console.log(kleur.green('Successfully created all types'))

		// sync files to final directory
		await Bun.$`mkdir -p ${OPENAPI_TYPES_V2_DIR}`
		await Bun.$`rsync -r ${TEMP_DIR}/ ${OPENAPI_TYPES_V2_DIR}/`

		console.log(kleur.green('Successfully moved all files to final directory'))
	} catch (error) {
		console.error(kleur.red('Error generating types:'), error)
		process.exit(1)
	} finally {
		// Clean up temp directory
		await Bun.$`rm -rf ${TEMP_DIR}`
	}
}

function objectKeys<T extends object>(obj: T): (keyof T)[] {
	return Object.keys(obj) as (keyof T)[]
}
