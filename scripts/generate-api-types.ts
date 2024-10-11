import fs from 'node:fs/promises'
import path from 'node:path'
import kleur from 'kleur'
import openapiTS, { astToString } from 'openapi-typescript'
import { OPENAPI_SCHEMAS_DIR, OPENAPI_TYPES_DIR } from '../src/lib/constants'

const TEMP_DIR = path.join(process.cwd(), 'temp-schemas-types')

/**
 * Get all the schema files. These are absolute paths.
 */
export async function getSchemaFileUrls() {
	const glob = new Bun.Glob(`${OPENAPI_SCHEMAS_DIR}/*.json`)
	const files = await Array.fromAsync(glob.scan())
	if (files.length === 0) {
		throw new Error('No files found in schemas/apis')
	}
	return files.map((file) => Bun.pathToFileURL(file))
}

/**
 * Generate an index file for the schemas.
 */
async function generateIndexFile(directory: string) {
	const schemaFiles = await fs.readdir(directory)

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
	await fs.mkdir(TEMP_DIR)

	const schemaFiles = await getSchemaFileUrls()
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
		await fs.mkdir(OPENAPI_TYPES_DIR).catch(() => {})
		await Bun.$`rsync ${TEMP_DIR}/ ${OPENAPI_TYPES_DIR}/`

		console.log(kleur.green('Successfully moved all files to final directory'))
	} catch (error) {
		console.error(kleur.red('Error generating types:'), error)
		process.exit(1)
	} finally {
		// Clean up temp directory
		await fs.rm(TEMP_DIR, { recursive: true, force: true })
	}
}

if (import.meta.main) {
	await generateOpenApiTypes()
}
