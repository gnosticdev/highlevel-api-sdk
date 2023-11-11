import fs from 'fs'
import path from 'path'
import openapiTS, { astToString } from 'openapi-typescript'
import { CoolConsole, coolConsole } from '@gnosticdev/cool-console'

await generateTypes()

async function generateTypes() {
    const SCHEMAS_DIR = path.join(process.cwd(), 'api/schemas/openapi')
    const TYPES_DIR = path.join(process.cwd(), 'api/types')
    const exists = await fs.promises.exists(TYPES_DIR)
    if (!exists) {
        await fs.promises.mkdir(TYPES_DIR)
    }
    if (!TYPES_DIR) throw new Error('Could not create directories')
    // example 1: load [object] as schema (JSON only)
    const schemaFiles = await fs.promises.readdir(SCHEMAS_DIR)
    for await (const fileName of schemaFiles) {
        const fileUrl = Bun.pathToFileURL(path.join(SCHEMAS_DIR, fileName))
        console.log(fileUrl)
        const output = await openapiTS(fileUrl, {
            exportType: true
        })
        const data = astToString(output)

        const outFile = path.join(TYPES_DIR, `${fileName.split('.json')[0]}.ts`)
        await Bun.write(outFile, data)
        coolConsole.green(`added types for ${fileName}`)
    }
}
