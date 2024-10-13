import path from 'node:path'
import kleur from 'kleur'
import openapiTS, { astToString } from 'openapi-typescript'
import { OPENAPI_TYPES_V2_DIR } from '../src/lib/constants'

const TEMP_DIR = 'temp-schema-types'

if (import.meta.main) {
	await createV1Types()
	await generateOpenApiTypes()
}

async function createV1Types() {
	const postmanJson = Bun.resolveSync('schemas/v1/postman.json', process.cwd())
	// convert postman json to openapi json using postman-to-openapi
	const openapiYaml = Bun.pathToFileURL('schemas/v1/openapi.yaml')
	console.log('openapiYaml', openapiYaml.pathname)
	// change the openapi version to 3.1.0 then write to file
	const yaml =
		await Bun.$`bunx --bun postman-to-openapi ${postmanJson} | sed 's/3.0.0/3.1.0/'`.blob()
	await Bun.write(openapiYaml.pathname, yaml)
	console.log(
		kleur.green('Successfully converted postman json to openapi json'),
	)
	// convert openapi json to typescript types using openapi-typescript
	const openapiTypes = await openapiTS(openapiYaml, {
		version: 3.0,
		defaultNonNullable: true,
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

/**
 * Generate an index file for the schemas.
 */
async function generateIndexFile(directory: string) {
	const glob = new Bun.Glob(`${directory}/*.ts`)
	const schemaFiles = await Array.fromAsync(glob.scan())

	let importData = ''
	const exportData: {
		fileName: string
		upperCamelCaseExportName: string
	}[] = []

	for (const file of schemaFiles) {
		if (!file.endsWith('.ts') || file === 'index.ts') {
			continue
		}
		const fileName = path.basename(file, '.ts')
		const upperCamelCaseExportName = fileName
			.split(/[-\s]/)
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
			.join('')
		importData += `export * as ${upperCamelCaseExportName} from './${fileName}'\n`
		exportData.push({ fileName, upperCamelCaseExportName })
	}

	await Bun.write(path.join(directory, 'index.ts'), importData)
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

		// Generate index file in temp directory
		await generateIndexFile(TEMP_DIR)
		console.log(kleur.green('Created index file'))

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
