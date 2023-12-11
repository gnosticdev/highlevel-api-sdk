import { diff, applyChangeset } from 'json-diff-ts'
import newScopes from '../schema/latest-scopes.json'
import currentScopes from '../schema/scopes.json'

if (import.meta.main) {
    switch (process.argv[2]) {
        case 'diff':
            await diffScopes()
            break
        default:
            console.log('no arguments provided')
    }
}
async function diffScopes() {
    const changes = diff(currentScopes, newScopes)
    if (changes.length === 0) {
        console.log('no changes')
        return
    }
    const result = applyChangeset(currentScopes, changes)
    await Bun.write('src/schema/scopes.json', JSON.stringify(result, null, 2))
}
