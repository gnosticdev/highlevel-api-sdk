import fs from 'node:fs/promises'
import path from 'node:path'
import kleur from 'kleur'
import openapiTS, { astToString } from 'openapi-typescript'
import { OPENAPI_SCHEMAS_DIR, OPENAPI_TYPES_DIR } from '../src/lib/constants'

const TEMP_DIR = 'temp-schemas-types'

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

/**
 * Generate types from openapi schemas. Outputs a file for each openapi schema.
 */
export async function generateOpenApiTypes() {
	await fs.mkdir(TEMP_DIR, { recursive: true })

	const schemaFiles = await getSchemaFileUrls()
	const generatedFiles: string[] = []

	try {
		for (const schemaFile of schemaFiles) {
			const fileName = path.basename(schemaFile.pathname, '.json')
			console.log(kleur.bgBlue(`Creating types for ${fileName}`))

			const output = await openapiTS(schemaFile, {
				version: 3.0,
				defaultNonNullable: true,
				exportType: true,
			})

			const data = astToString(output, { fileName })

			const outFile = path.join(TEMP_DIR, `${fileName}.ts`)
			await Bun.write(outFile, data)
			generatedFiles.push(outFile)

			console.log(kleur.green(`Added types for ${fileName}`))
		}

		// Generate index file in temp directory
		await generateIndexFile(TEMP_DIR)
		console.log(kleur.green('Created index file'))

		// Move files to final directory
		await fs.rm(OPENAPI_TYPES_DIR, { recursive: true, force: true })
		await fs.mkdir(OPENAPI_TYPES_DIR, { recursive: true })

		for (const file of generatedFiles) {
			const fileName = path.basename(file)
			console.log(kleur.green(`Moving ${fileName} to ${OPENAPI_TYPES_DIR}`))
			await fs.rename(file, path.join(OPENAPI_TYPES_DIR, fileName))
		}

		// Move index file
		await fs.rename(
			path.join(TEMP_DIR, 'index.ts'),
			path.join(OPENAPI_TYPES_DIR, 'index.ts'),
		)

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
