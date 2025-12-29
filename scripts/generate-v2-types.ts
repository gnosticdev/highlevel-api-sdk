import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import kleur from 'kleur'
import type { OpenAPI3 } from 'openapi-typescript'
import openapiTS, { astToString } from 'openapi-typescript'
import { generateClientInterface } from './generate-interface'

const V2_TYPES_DIR = 'src/v2/types'
const TEMP_DIR = fs.mkdtempSync(path.join(os.tmpdir(), 'v2-types'), {
	encoding: 'utf8',
})

/**
 * This script uses the json schemas to generate the typescript types. To keep the schemas up to date, run `bun run generate-v2-json` first.
 */
if (import.meta.main) {
	await fs.promises.mkdir(V2_TYPES_DIR, { recursive: true }).catch(() => {})
	const typeFiles = await generateV2Types()
	await generateClientInterface(typeFiles)
	await fs.promises.rm(TEMP_DIR, { recursive: true, force: true })
}

/**
 * Generate types from openapi schemas. Outputs a file for each openapi schema.
 */
export async function generateV2Types(): Promise<string[]> {
	const IGNORE_FILES = ['common-schemas.json']
	await fs.promises.mkdir(TEMP_DIR, { recursive: true }).catch(() => {
		console.warn(kleur.yellow(`Temp directory already exists: ${TEMP_DIR}`))
		process.exit(0)
	})

	const openApiFiles = (await getV2OpenApiFiles()).map(Bun.pathToFileURL)
	/**
	 * The generated types files
	 */
	const generatedTsFiles: string[] = []

	try {
		for (const schemaFile of openApiFiles) {
			const basename = path.basename(schemaFile.pathname)
			// Check against the original basename first (e.g., 'common-schemas.json')
			if (IGNORE_FILES.includes(basename)) {
				continue
			}
			const newFileName = basename.replace('.json', '').replace('.openapi', '')
			console.log(
				kleur.bgBlue(kleur.black(`Creating types for ${newFileName}`)),
			)

			const outFilePath = await createOpenApiTypesFile(schemaFile)
			generatedTsFiles.push(outFilePath)

			console.log(kleur.green(`Added types for ${newFileName}`))
		}

		console.log(kleur.green('Successfully created all types'))

		// use rsync with checksum so we only move the files that have changed
		await Bun.$`rsync -av --checksum ${TEMP_DIR}/ ${V2_TYPES_DIR}/`
		console.log(kleur.green('Successfully moved all files to final directory'))

		await Bun.$`bun run biome check ${V2_TYPES_DIR} --write --unsafe`
		console.log(kleur.green('Successfully linted all types'))

		return generatedTsFiles
	} catch (error) {
		console.error(kleur.red('Error generating types:'), error)
		process.exit(1)
	} finally {
		// Clean up temp directory
		fs.rmSync(TEMP_DIR, { recursive: true, force: true })
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
	const glob = new Bun.Glob('schemas/v2/{api-endpoints,common}/**/*.json')
	const files = await Array.fromAsync(
		glob.scan({ absolute: true, onlyFiles: true }),
	)
	if (files.length === 0) {
		throw new Error('No files found in schemas/v2/api-endpoints')
	}
	return files
}

/**
 * Resolves external $ref references by inlining them into the schema.
 *
 * This function finds all $ref properties that point to external files
 * (e.g., "../common/common-schemas.json#/components/schemas/UnauthorizedDTO")
 * and inlines the referenced schemas into the main schema's components.schemas.
 *
 * @param schema - The OpenAPI schema object
 * @param schemaDir - The directory containing the schema file (for resolving relative paths)
 * @returns The schema with all external $ref references resolved
 */
async function resolveExternalRefs(
	schema: OpenAPI3,
	schemaDir: string,
): Promise<OpenAPI3> {
	// Ensure components.schemas exists
	if (!schema.components) {
		schema.components = {}
	}
	if (!schema.components.schemas) {
		schema.components.schemas = {}
	}

	// Recursively find and resolve $ref properties
	async function resolveRefs(
		obj: unknown,
		visited = new Set<string>(),
	): Promise<void> {
		if (!obj || typeof obj !== 'object') {
			return
		}

		if (Array.isArray(obj)) {
			for (const item of obj) {
				await resolveRefs(item, visited)
			}
			return
		}

		for (const [key, value] of Object.entries(obj)) {
			if (key === '$ref' && typeof value === 'string') {
				// Check if this is an external reference (not starting with #)
				if (!value.startsWith('#')) {
					const refPath = value.split('#')
					const filePath = refPath[0]
					if (!filePath) {
						continue
					}
					const jsonPath = refPath[1] || ''

					// Resolve the external file path
					const resolvedPath = path.resolve(schemaDir, filePath)

					// Skip if we've already processed this reference
					const refKey = `${resolvedPath}${jsonPath}`
					if (visited.has(refKey)) {
						// Still replace with local reference if we've already inlined it
						if (jsonPath.startsWith('/components/schemas/')) {
							const schemaName = jsonPath.replace('/components/schemas/', '')
							;(obj as { $ref: string }).$ref =
								`#/components/schemas/${schemaName}`
						}
						continue
					}
					visited.add(refKey)

					try {
						// Read the external schema file
						const externalSchemaContent = Bun.file(resolvedPath)
						if (!(await externalSchemaContent.exists())) {
							console.warn(
								kleur.yellow(
									`Warning: External schema file not found: ${resolvedPath}`,
								),
							)
							continue
						}

						const externalSchema: OpenAPI3 = JSON.parse(
							await externalSchemaContent.text(),
						)

						// Extract the referenced schema using the JSON path
						if (jsonPath.startsWith('/components/schemas/')) {
							const schemaName = jsonPath.replace('/components/schemas/', '')
							const referencedSchema =
								externalSchema.components?.schemas?.[schemaName]

							if (referencedSchema) {
								// Inline the schema into the main schema
								// We ensure components.schemas exists at the start of the function
								const schemas = schema.components?.schemas
								if (schemas && !schemas[schemaName]) {
									schemas[schemaName] = referencedSchema
								}
								// Replace the external $ref with a local reference
								;(obj as { $ref: string }).$ref =
									`#/components/schemas/${schemaName}`
							} else {
								console.warn(
									kleur.yellow(
										`Warning: Schema "${schemaName}" not found in ${resolvedPath}`,
									),
								)
							}
						}
					} catch (error) {
						console.warn(
							kleur.yellow(
								`Warning: Failed to resolve external reference ${value}: ${error}`,
							),
						)
					}
				}
			} else if (value && typeof value === 'object') {
				await resolveRefs(value, visited)
			}
		}
	}

	// Resolve all refs in the schema
	await resolveRefs(schema)

	return schema
}

/**
 * Create a types file from an openapi schema file.
 *
 * @param schemaFileUrl - The local file url to the openapi json/yaml schema file.
 */
async function createOpenApiTypesFile(schemaFileUrl: URL) {
	let outFilePath: string
	console.log(
		kleur.yellow('Creating openapi types file for:'),
		schemaFileUrl.href,
	)

	// replace the .json or .yaml
	const fileName = path
		.basename(schemaFileUrl.pathname)
		.replace(/\.json|\.yaml/, '')

	try {
		// Read the schema file
		const schemaFile = Bun.file(schemaFileUrl)
		const schemaContent = await schemaFile.text()
		const schema: OpenAPI3 = JSON.parse(schemaContent)

		// Resolve external $ref references
		const schemaDir = path.dirname(schemaFileUrl.pathname)
		const resolvedSchema = await resolveExternalRefs(schema, schemaDir)

		// Convert resolved schema to string and pass to openapiTS
		const ast = await openapiTS(JSON.stringify(resolvedSchema), {
			defaultNonNullable: true,
			version: 3.1,
			alphabetize: true,
			exportType: false,
		}).catch((error) => {
			console.error(kleur.red('Error creating openapi types file:'), error)
			process.exit(1)
		})

		const data = astToString(ast)

		// the json schema files have .openapi in the filename, lets remove it bc these are typescript types
		outFilePath = path.join(
			TEMP_DIR,
			`${fileName.replaceAll('.openapi', '')}.ts`,
		)
		await Bun.write(outFilePath, data)
	} catch (error) {
		console.error(kleur.red('Error creating openapi types file:'), error)

		process.exit(1)
	}

	return outFilePath
}
