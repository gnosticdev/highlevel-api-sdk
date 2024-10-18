import path from 'node:path'
import kleur from 'kleur'
import openapiTS, { astToString } from 'openapi-typescript'
import { OPENAPI_TYPES_V2_DIR } from '../src/lib/constants'
import { createV1Types } from './generate-v1-types'

const TEMP_DIR = 'temp-schema-types'

if (import.meta.main) {
	// dont run this unless the api changes.
	await createV1Types()
	await createV2Types()
}

/**
 * Generate types from openapi schemas. Outputs a file for each openapi schema.
 */
export async function createV2Types() {
	await Bun.$`mkdir -p ${TEMP_DIR}`

	const jsonV2Schemas = await getV2OpenApiFiles()
	/**
	 * The generated types files
	 */
	const generatedTsFiles: string[] = []

	try {
		for (const schemaFile of jsonV2Schemas) {
			const newFileName = path
				.basename(schemaFile.pathname, '.json')
				.replace('.openapi', '')
			console.log(kleur.bgBlue(`Creating types for ${newFileName}`))

			const outFile = await createOpenApiTypesFile(schemaFile)
			generatedTsFiles.push(outFile)

			console.log(kleur.green(`Added types for ${newFileName}`))
		}

		console.log(kleur.green('Successfully created all types'))

		// sync files to final directory and remove the .openapi in the name
		await Bun.$`rsync -avr --delete ${TEMP_DIR}/ ${OPENAPI_TYPES_V2_DIR}/`
		await Bun.$`rm -rf ${TEMP_DIR}`

		console.log(kleur.green('Successfully moved all files to final directory'))
	} catch (error) {
		console.error(kleur.red('Error generating types:'), error)
		process.exit(1)
	} finally {
		// Clean up temp directory
		await Bun.$`rm -rf ${TEMP_DIR}`
	}
}

/**
 * Get all the schema files as URLs.
 */
async function getV2OpenApiFiles() {
	// get all json files with openapi in the path somewhere
	const glob = new Bun.Glob('schemas/v2/openapi/*.json')
	const files = await Array.fromAsync(glob.scan())
	if (files.length === 0) {
		throw new Error('No files found in schemas')
	}
	return files.map((file) => Bun.pathToFileURL(file))
}

async function createOpenApiTypesFile(jsonFile: URL) {
	// replace the .json or .yaml
	const fileName = path.basename(jsonFile.pathname).replace(/\.json|\.yaml/, '')
	const output = await openapiTS(jsonFile, {
		defaultNonNullable: true,
		version: 3.1,
		alphabetize: true,
		exportType: true,
	})

	const data = astToString(output, { fileName })

	const outFile = path.join(
		TEMP_DIR,
		`${fileName.replaceAll('.openapi', '')}.ts`,
	)
	await Bun.write(outFile, data)
	return outFile
}
