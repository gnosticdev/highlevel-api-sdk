import type { OperationObject } from 'openapi-typescript'

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
