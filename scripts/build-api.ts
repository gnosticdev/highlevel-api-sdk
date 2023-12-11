import fs from 'fs'
import path from 'path'
import openapiTS, { astToString } from 'openapi-typescript'
import { coolConsole } from '@gnosticdev/cool-console'

const SCHEMAS_DIR = path.resolve(process.cwd(), 'src/schema/openapi')
const OUT_DIR = path.join(process.cwd(), 'src/api/updates')

if (import.meta.main) {
    switch (process.argv[2]) {
        case 'generate':
            await generateApi()
            break
        case 'create-root':
            await createRootFile()
            break
        default:
            console.log('no command')
    }
}

/**
 * Generate types from openapi schemas, and compile them into a single index.ts file
 */
async function generateApi() {
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
        if (path.extname(jsonFile) !== '.json') continue
        const fileUrl = Bun.pathToFileURL(path.join(SCHEMAS_DIR, jsonFile))
        const typeTitle = createTitle(jsonFile)

        console.log('creating types for', jsonFile)
        const fileName = path.parse(jsonFile).name

        const output = await openapiTS(fileUrl, { version: 3.0 })
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

// Start with a base structure for your root OpenAPI file

async function createRootFile() {
    const rootOpenApi = {
        openapi: '3.0.0',
        info: {
            title: 'HighLevel API Documentation',
            description: 'Combined documentation for all APIs',
            version: '1.0',
            contact: {},
            license: {
                name: 'MIT',
                url: 'https://opensource.org/licenses/MIT'
            }
        },
        tags: [],
        servers: [
            {
                url: 'https://services.leadconnectorhq.com'
            }
        ],
        components: {
            schemas: {},
            securitySchemes: {}
        },
        paths: {} as Record<string, any>
    }

    // Read the directory containing the endpoint files
    const files = await fs.promises.readdir(SCHEMAS_DIR)

    // Filter JSON files and construct the paths object
    for await (const file of files) {
        if (path.extname(file) !== '.json') continue
        coolConsole.orange('parsing file ' + file)
        const json = await Bun.file(path.join(SCHEMAS_DIR, file)).json()

        for (const key in json.paths) {
            rootOpenApi.paths[key] = {
                $ref: `./${path.basename(file)}#/paths${key}`
            }
        }
    }
    // Write the root OpenAPI file to disk
    await Bun.write(
        path.join(SCHEMAS_DIR, 'api.json'),
        JSON.stringify(rootOpenApi)
    )
}
