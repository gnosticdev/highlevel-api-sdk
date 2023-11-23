import path from 'path'
type Scopes = {
    [key: string]: {
        readonly: {
            methodAndEndpoint: string
            webhookEvents: string
            accessType: string[]
        }[]
        write?: {
            methodAndEndpoint: string
            webhookEvents: string
            accessType: string[]
        }[]
    }
}

const jsonFile = import.meta.resolveSync('../src/api/schemas/scopes.json')
const scopesJson = await Bun.file(jsonFile).json()

function replacer(key: string, value: any) {
    if (key === 'accessType' && value.toString() === 'Sub-Account, Company') {
        return ['Sub-Account', 'Company']
    }
    return value
}

const newScopes = JSON.stringify(scopesJson, replacer, 4)

await Bun.write(
    path.join(process.cwd(), 'src/api/schemas/new-scopes.json'),
    newScopes
)
