import scopesJSON from '../src/schema/scopes/scopes.json'

const scopes = (await Bun.file(
	'src/schema/scopes/scopes.json',
).json()) as typeof scopesJSON

// replacer to add 'as const' to the end of accessType arrays
const generatedScopes = `export const scopesSchema = ${JSON.stringify(
	scopesJSON,
	null,
	4,
).replace(/"accessType": \[([^\]]+)\]/g, '"accessType": [$1] as const')}`

console.log(generatedScopes)
// write the generated scopes to a file
await Bun.write('src/api/types/scopes.ts', generatedScopes)
