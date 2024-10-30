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

/**
 * Get the request body from an operation object
 */
export type GetParams<T extends OperationObject> = T['requestBody']

/**
 * Creates a temporary file that auto-deletes when the class is disposed of. (e.g. if used in a function, it would delete at the end of the function)
 */
export class TempFile implements AsyncDisposable {
	filepath: string
	constructor(filepath: string, data?: string) {
		this.filepath = filepath
		if (data) {
			this.write(data)
		}
		console.log(kleur.green(`Created ${this.filepath}`))
	}

	async [Symbol.asyncDispose]() {
		await Bun.$`rm -f ${this.filepath}`
		console.log(kleur.red(`Deleted ${this.filepath}`))
	}
	async write(data: string) {
		await Bun.write(this.filepath, data)
	}
}
/**
 * Converts a string with spaces/dashes/underscores to pascal case.
 * @param str - The string to convert.
 * @returns The pascal case string.
 */
export function toPascalCase(str: string): string {
	const camelCaseStr = toCamelCase(str)
	return camelCaseStr.charAt(0).toUpperCase() + camelCaseStr.slice(1)
}
/**
 * Converts a string with spaces/dashes/underscores to camel case.
 * @param str - The string to convert.
 * @returns The camel case string.
 */
export function toCamelCase(str: string): string {
	return str
		.toLowerCase()
		.replace(/[-_ ]+./g, (match) =>
			match.charAt(match.length - 1).toUpperCase(),
		)
}
