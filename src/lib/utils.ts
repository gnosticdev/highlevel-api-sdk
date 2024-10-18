import kleur from 'kleur'
import type { OperationObject } from 'openapi-typescript'

export function objectKeys<T extends object>(obj: T): (keyof T)[] {
	return Object.keys(obj) as (keyof T)[]
}

export function objectEntries<TObj extends object>(
	obj: TObj,
): [keyof TObj, TObj[keyof TObj]][] {
	return Object.entries(obj) as [keyof TObj, TObj[keyof TObj]][]
}

/**
 * Client side method to get the auth code from the query params
 * @returns the auth code from the query params
 */
export async function getAuthCodeFromClient() {
	const url = new URL(window.location.href)
	const authCode = url.searchParams.get('code')
	if (!authCode) {
		throw new Error('No auth code found in query params')
	}
	return authCode
}

export type GetParams<T extends OperationObject> = T['requestBody']

/**
 * Creates a temporary file that auto-deletes when the class is disposed of. (e.g. if used in a function, it would delete at the end of the function)
 */
export class TempFile implements AsyncDisposable {
	path: string
	constructor(path: string, data?: string) {
		this.path = path
		if (data) {
			this.write(data)
		}
	}

	async [Symbol.asyncDispose]() {
		await Bun.$`rm -f ${this.path}`
		console.log(kleur.red(`Deleted ${this.path}`))
	}
	async write(data: string) {
		await Bun.write(this.path, data)
	}
}
