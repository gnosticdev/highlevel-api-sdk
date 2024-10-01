import path from 'node:path'
import kleur from 'kleur'
import openapiTS, { astToString } from 'openapi-typescript'

const OUT_DIR = path.join(process.cwd(), '/src/schemas/types')

if (import.meta.main) {
	await generateApi()
}

async function getSchemaFileUrls() {
	const glob = new Bun.Glob(
		path.join(process.cwd(), '/src/schemas/openapi/*.json'),
	)
	const files = await Array.fromAsync(glob.scan())
	return files
}

/**
 * Generate types from openapi schemas.
 */
async function generateApi() {
	await Bun.$`mkdir -p ${OUT_DIR}`.quiet()

	// use bun glob to get all the schema files
	const schemaFiles = await getSchemaFileUrls()

	// index file will export all types
	const indexFile = path.join(OUT_DIR, 'index.ts')
	let importData = ''
	const exportData: string[] = []

	// create each type file
	for await (const schemaFile of schemaFiles) {
		const { fileName, upperTitle, fileUrl } = parseFile(schemaFile)

		console.log('creating types for', fileName)

		const output = await openapiTS(fileUrl, {
			version: 3.0,
			enum: true,
			defaultNonNullable: true,
			exportType: true,
		})

		const data = astToString(output, { fileName })

		const outFile = path.join(OUT_DIR, `${fileName}.ts`)
		await Bun.write(outFile, data)
		// capitalize the filename and use as export name

		importData += `import * as ${upperTitle} from './${fileName}'\n`
		// now export the type
		exportData.push(upperTitle)
		console.log(kleur.green(`added types for ${upperTitle}`))
	}
	// add export statement
	importData += `\nexport { ${exportData.join(', ')} \n}`

	// create index file
	await Bun.write(indexFile, importData)
	console.log(kleur.green('created index file'))
}

/**
 * Create a title from a filename
 * @param jsonFile
 * @returns
 */
function parseFile(absFilePath: string) {
	const fileUrl = Bun.pathToFileURL(absFilePath)
	const parsed = path.parse(absFilePath)
	const fileName = parsed.name
	const upperTitle = fileName.charAt(0).toUpperCase() + fileName.slice(1)
	return { fileName, upperTitle, absFilePath, fileUrl }
}
