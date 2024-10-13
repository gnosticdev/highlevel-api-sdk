import path from 'node:path'
import { CUSTOM_SCHEMAS_DIR, CUSTOM_TYPES_DIR } from '../src/lib/constants'

const SCOPES_OUTPUT_FILE = path.join(CUSTOM_TYPES_DIR, 'scopes.ts')

if (import.meta.main) {
	await generateScopesSchema()
}

async function generateScopesSchema() {
	const scopesJSON = await Bun.file(
		path.join(CUSTOM_SCHEMAS_DIR, 'scopes.json'),
	).json()
	// replacer to add 'as const' to the end of accessType arrays
	const generatedScopes = `export const ScopesSchema = ${JSON.stringify(
		scopesJSON,
		null,
		4,
	).replace(/"accessType": \[([^\]]+)\]/g, '"accessType": [$1] as const')}`

	// write the generated scopes to a file
	await Bun.write(SCOPES_OUTPUT_FILE, generatedScopes)
	console.log('generated scopes')
}
