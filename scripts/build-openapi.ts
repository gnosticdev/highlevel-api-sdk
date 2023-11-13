import fs from 'fs'
import path from 'path'
import openapiTS, { astToString } from 'openapi-typescript'
import { coolConsole } from '@gnosticdev/cool-console'

if (import.meta.main) {
    await generateTypes()
}

/**
 * Generate types from openapi schemas, and compile them into a single index.ts file
 */
async function generateTypes() {
    const SCHEMAS_DIR = path.resolve(process.cwd(), 'src/api/schemas/openapi')
    const TYPES_DIR = path.join(process.cwd(), 'src/api/generated')

    const typesExists = await fs.promises.exists(TYPES_DIR)
    if (!typesExists) {
        await fs.promises.mkdir(TYPES_DIR)
    }
    if (!TYPES_DIR) throw new Error('Could not create directories')

    // example 1: load [object] as schema (JSON only)
    const schemaFiles = await fs.promises.readdir(SCHEMAS_DIR)

    // index file will export all types
    const indexFile = path.join(TYPES_DIR, 'index.ts')
    let importData = ''
    let exportData = []

    // create each type file
    for await (const jsonFile of schemaFiles) {
        const fileUrl = Bun.pathToFileURL(path.join(SCHEMAS_DIR, jsonFile))
        console.log('creating types for', jsonFile)
        const output = await openapiTS(fileUrl, {
            exportType: true
        })
        const data = astToString(output)
        const fileName = jsonFile.split('.json')[0]!
        const outFile = path.join(TYPES_DIR, `${fileName}.ts`)
        await Bun.write(outFile, data)
        // capitalize the filename and use as export name
        const typeTitle = fileName.charAt(0).toUpperCase() + fileName.slice(1)
        importData += `import * as ${typeTitle} from './${fileName}'\n`
        // now export the type
        exportData.push(typeTitle)
        coolConsole.green(`added types for ${typeTitle}`)
    }
    // add export statement
    importData += `\nexport { ${exportData.join(', ')} }`

    // create index file
    await Bun.write(indexFile, importData)
    coolConsole.green('created index file')
}
