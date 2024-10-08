import fs from 'node:fs'
import path from 'node:path'
import kleur from 'kleur'
import openapiTS, { astToString } from 'openapi-typescript'

const OUT_DIR = path.join(process.cwd(), 'src/schema/updates')

if (import.meta.main) {
	switch (process.argv[2]) {
		case 'generate':
			await generateApi()
			break
		default:
			console.log('no command')
	}
}

async function getSchemaFileUrls() {
	const tsGlob = new Bun.Glob('*.json')
	const files = await Array.fromAsync(
		tsGlob.scan({ cwd: 'src/schema/openapi', absolute: true }),
	)
	return files
}

/**
 * Generate types from openapi schemas.
 */
async function generateApi() {
	const typesExists = await fs.promises.exists(OUT_DIR)
	if (!typesExists) {
		await fs.promises.mkdir(OUT_DIR)
	}

	// use bun glob to get all the schema files
	const schemaFiles = await getSchemaFileUrls()

	// index file will export all types
	const indexFile = path.join(OUT_DIR, 'index.ts')
	let importData = ''
	const exportData: string[] = []

	// create each type file
	for await (const schemaFile of schemaFiles) {
		const { fileName, upperTitle, absFilePath, fileUrl } = parseFile(schemaFile)

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
