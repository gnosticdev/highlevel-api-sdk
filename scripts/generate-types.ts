import { getOpenApiReader, getTypeScriptWriter, makeConverter } from 'typeconv'
import fs from 'fs/promises'

async function createTypes() {
    const reader = getOpenApiReader()
    const writer = getTypeScriptWriter({
        declaration: true,
        namespaces: 'all',
        filename: `types/${import.meta.path}.ts`
    })
    const { convert } = makeConverter(reader, writer)
    const { data } = await convert({
        data: './specs/contacts.json',
        cwd: import.meta.dir
    })
    console.log(data)
}

export async function iterateThroughOpenApiSchemas() {
    const SCHEMAS_DIR = './schemas'
    const TYPES_DIR = './typings'

    const files = await fs.readdir(SCHEMAS_DIR)
    try {
        await fs.access(TYPES_DIR)
    } catch {
        await fs.mkdir(TYPES_DIR, { recursive: true })
    }
    for (const file of files) {
        const openApiJson = await fs.readFile(`${SCHEMAS_DIR}/${file}`, 'utf8')

        const reader = getOpenApiReader()
        const writer = getTypeScriptWriter()
        const { convert } = makeConverter(reader, writer)
        const { data } = await convert({
            data: openApiJson,
            cwd: import.meta.dir
        })

        await fs.writeFile(`types/${file.split('.json')[0]}.ts`, data, {
            flag: 'w'
        })
        console.log(`added types for ${file}`)
    }
}

iterateThroughOpenApiSchemas()
