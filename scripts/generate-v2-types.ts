import path from 'node:path'
import kleur from 'kleur'
import openapiTS, { astToString } from 'openapi-typescript'
import { OPENAPI_TYPES_V2_DIR } from '../src/lib/constants'
import { generateClientInterface } from './generate-interface'

const TEMP_DIR = path.join(process.cwd(), 'temp-schema-types')

/**
 * This script uses the json schemas to generate the typescript types. To keep the schemas up to date, run `bun run generate-v2-json` first.
 */
if (import.meta.main) {
	const maybeFunction = process.argv.at(2)
	if (!maybeFunction) {
		// run all the functions if nothing is passed
		await createV2Types()
		await generateClientInterface()
	}
	if (maybeFunction) {
		switch (maybeFunction) {
			case 'createV2Types':
				await createV2Types()
				break
			case 'generateClientInterface':
				await generateClientInterface()
				break
			default:
				console.error(`Unknown function: ${maybeFunction}`)
				process.exit(1)
		}
		process.exit(0)
	}
}

/**
 * Generate types from openapi schemas. Outputs a file for each openapi schema.
 */
export async function createV2Types() {
	await Bun.$`mkdir -p ${TEMP_DIR}`

	const openApiFiles = (await getV2OpenApiFiles()).map(Bun.pathToFileURL)
	/**
	 * The generated types files
	 */
	const generatedTsFiles: string[] = []

	try {
		for (const schemaFile of openApiFiles) {
			const newFileName = path
				.basename(schemaFile.pathname, '.json')
				.replace('.openapi', '')
			console.log(kleur.bgBlue(`Creating types for ${newFileName}`))

			const outFilePath = await createOpenApiTypesFile(schemaFile)
			generatedTsFiles.push(outFilePath)

			console.log(kleur.green(`Added types for ${newFileName}`))
		}

		console.log(kleur.green('Successfully created all types'))

		// use rsync with checksum so we only move the files that have changed
		await Bun.$`rsync -av --delete --checksum ${TEMP_DIR}/ ${OPENAPI_TYPES_V2_DIR}/`

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
 * Get all the schema files as paths starting from the project root.
 *
 * @example
 * ```ts
 * // ['schemas/v2/openapi/oauth.openapi.json', 'schemas/v2/openapi/businesses.openapi.json', ...]
 * ```
 */
export async function getV2OpenApiFiles(): Promise<string[]> {
	// get all json files with openapi in the path somewhere
	const glob = new Bun.Glob('schemas/v2/openapi/*.json')
	const files = await Array.fromAsync(glob.scan())
	if (files.length === 0) {
		throw new Error('No files found in schemas')
	}
	return files
}

/**
 * Create a types file from an openapi schema file.
 *
 * @param schemaFileUrl - The local file url to the openapi json/yaml schema file.
 */
async function createOpenApiTypesFile(schemaFileUrl: URL) {
	// replace the .json or .yaml
	const fileName = path
		.basename(schemaFileUrl.pathname)
		.replace(/\.json|\.yaml/, '')

	const ast = await openapiTS(schemaFileUrl, {
		defaultNonNullable: true,
		version: 3.1,
		alphabetize: true,
		exportType: true,
	})

	const data = astToString(ast, { fileName })

	// the json schema files have .openapi in the filename, lets remove it bc these are typescript types
	const outFilePath = path.join(
		TEMP_DIR,
		`${fileName.replaceAll('.openapi', '')}.ts`,
	)
	await Bun.write(outFilePath, data)
	return outFilePath
}
