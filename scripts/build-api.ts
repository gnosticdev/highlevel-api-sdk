import fs from 'fs'
import path from 'path'
import openapiTS, {
    astToString,
    type SchemaObject,
    type TransformNodeOptions
} from 'openapi-typescript'
import { coolConsole } from '@gnosticdev/cool-console'

if (import.meta.main) {
    switch (process.argv[2]) {
        case 'generate':
            generateApi()
            break
        default:
            console.log('no command')
    }
}

const SCHEMAS_DIR = path.resolve(process.cwd(), 'src/api/schemas/openapi')
/**
 * Generate types from openapi schemas, and compile them into a single index.ts file
 */
async function generateApi() {
    const OUT_DIR = path.join(process.cwd(), 'src/api/generated')

    const typesExists = await fs.promises.exists(OUT_DIR)
    if (!typesExists) {
        await fs.promises.mkdir(OUT_DIR)
    }
    if (!OUT_DIR) throw new Error('Could not create directories')

    // example 1: load [object] as schema (JSON only)
    const schemaFiles = await fs.promises.readdir(SCHEMAS_DIR)

    // index file will export all types
    const indexFile = path.join(OUT_DIR, 'index.ts')
    let importData = ''
    let exportData = []

    // create each type file
    for await (const jsonFile of schemaFiles) {
        const fileUrl = Bun.pathToFileURL(path.join(SCHEMAS_DIR, jsonFile))
        const typeTitle = createTitle(jsonFile)

        console.log('creating types for', jsonFile)
        const fileName = path.parse(jsonFile).name

        const output = await openapiTS(fileUrl)
        const data = astToString(output)

        const outFile = path.join(OUT_DIR, `${fileName}.ts`)
        await Bun.write(outFile, data)
        // capitalize the filename and use as export name

        importData += `import * as ${typeTitle} from './${fileName}'\n`
        // now export the type
        exportData.push(typeTitle)
        coolConsole.green(`added types for ${typeTitle}`)
    }
    // add export statement
    importData += `\nexport { ${exportData.join(', ')} \n}`

    // create index file
    await Bun.write(indexFile, importData)
    coolConsole.green('created index file')
}

/**
 * Create a title from a filename
 * @param jsonFile
 * @returns
 */
function createTitle(filePath: string) {
    const fileName = path.parse(filePath).name
    const typeTitle = filePath.charAt(0).toUpperCase() + fileName.slice(1)
    return typeTitle
}
