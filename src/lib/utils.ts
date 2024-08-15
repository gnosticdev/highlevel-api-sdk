export function objectEntries<
	TOuter extends { [K in keyof TOuter]: TOuter[K] },
>(obj: TOuter): [keyof TOuter, TOuter[keyof TOuter]][] {
	return Object.entries(obj) as [keyof TOuter, TOuter[keyof TOuter]][]
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
