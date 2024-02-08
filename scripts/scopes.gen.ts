import type { BunFile } from 'bun'
import scopesJSON from '../src/schema/scopes/scopes.json'

async function json<T>(this: Blob): Promise<T> {
	try {
		return JSON.parse(await this.text()) as T
	} catch (err) {
		Error.captureStackTrace(err as Error, json)
		throw err
	}
}

type _BunFile = BunFile & { json<T>(): Promise<T> }
const _scopesFile = Bun.file('src/schema/scopes/scopes.json') as _BunFile
const scopes = await _scopesFile.json<typeof scopesJSON>()

// replacer to add 'as const' to the end of accessType arrays
const generatedScopes = `export const scopesSchema = ${JSON.stringify(
	scopesJSON,
	null,
	4,
).replace(/"accessType": \[([^\]]+)\]/g, '"accessType": [$1] as const')}`

console.log(generatedScopes)
// write the generated scopes to a file
// await Bun.write('src/api/types/scopes.ts', generatedScopes)
