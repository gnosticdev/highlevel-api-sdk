import fs from 'fs'
import path from 'path'
import { coolConsole } from '@gnosticdev/cool-console'
import YAML from 'js-yaml'
import SwaggerParser from '@apidevtools/swagger-parser'

// Define the security requirement to add
const licenseField = {
    license: {
        name: '',
        url: 'https://opensource.org/licenses/MIT'
    }
}

const SCHEMA_DIR = path.join(process.cwd(), 'src/api/schemas/openapi')
const YAML_DIR = path.join(SCHEMA_DIR, 'yaml')
const JSON_DIR = path.join(SCHEMA_DIR, 'json')
const UPDATED_DIR = path.join(SCHEMA_DIR, 'updated')

const JSON_FILES = fs.readdirSync(JSON_DIR)
const YAML_FILES = fs.readdirSync(YAML_DIR)

await main()

async function main() {
    for await (const yamlFiles of YAML_FILES) {
        const file = await convert(path.join(YAML_DIR, yamlFiles), 'yaml')
        coolConsole.blue('file updated' + file)
    }
}

async function bundle() {
    const parser = new SwaggerParser()
    const api = await parser.bundle(path.join(YAML_DIR, 'api.yaml'))
    await Bun.write(
        path.join(UPDATED_DIR, 'api.yaml'),
        JSON.stringify(api, null, 2)
    )
}

async function convert(filePath: string, to: 'yaml' | 'json') {
    const fileContent = await Bun.file(filePath).text()
    const doc = (await YAML.load(fileContent, { json: true })) as Record<
        string,
        any
    >
    for (const key in doc.components.securitySchemes) {
        const schema = doc.components.securitySchemes[key]
        for (const securityKey in schema) {
            if (securityKey === '$ref') {
                schema[securityKey] = schema[securityKey].replace(
                    to === 'json' ? '.yaml' : '.json',
                    to === 'json' ? '.json' : '.yaml'
                )
            }
        }
    }
    coolConsole.blue('new security schemes').obj(doc.components.securitySchemes)

    if (to === 'json') {
        const jsonDoc = await Bun.file(filePath).json()
        await Bun.write(
            path.join(
                UPDATED_DIR,
                path.basename(filePath, '.yaml').replace('.yaml', '.json')
            ),
            JSON.stringify(jsonDoc, null, 2)
        )
        return jsonDoc
    }
    const yamlDoc = YAML.dump(doc)
    await Bun.write(
        path.join(
            UPDATED_DIR,
            path.basename(filePath, '.json').replace('.json', '.yaml')
        ),
        yamlDoc
    )
    return yamlDoc
}

async function updateSchema(FILES: string[]) {
    coolConsole.orange('FILES').obj(FILES)

    for await (const file of FILES) {
        const fileContent = (await Bun.file(
            path.join(YAML_DIR, file)
        ).json()) as Record<string, any>

        const ext = path.extname(file).replace('.', '') as 'yaml' | 'json'
        const updatedFileContent = updateInfo(fileContent, ext)

        await Bun.write(
            path.join(UPDATED_DIR, file),
            JSON.stringify(fileContent, null, 2)
        )
    }
}

function updateInfo(fileContent: Record<string, any>, ext: 'yaml' | 'json') {
    const infoSection = fileContent['info']
    const updatedInfoSection = {
        ...infoSection,
        ...licenseField
    }
    fileContent['info'] = updatedInfoSection
    // update the $ref to security
    Object.keys(fileContent.components.securitySchemes).forEach((key) => {
        const securityScheme = fileContent.components.securitySchemes[key]
        if (securityScheme.$ref) {
            ext === 'json'
                ? (securityScheme.$ref = securityScheme.$ref.replace(
                      'oauth.yaml',
                      'oauth.json'
                  ))
                : (securityScheme.$ref = securityScheme.$ref.replace(
                      'oauth.json',
                      'oauth.yaml'
                  ))
        }
    })
    return fileContent
}
