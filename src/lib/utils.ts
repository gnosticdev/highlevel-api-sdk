export function objectEntries<TObj extends object, TKey extends keyof TObj>(
	obj: TObj,
): [TKey, TObj[TKey]][] {
	return Object.entries(obj) as [TKey, TObj[TKey]][]
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
