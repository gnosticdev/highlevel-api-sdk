import type { Client } from 'openapi-fetch'

export type HTTPMethod =
	| 'get'
	| 'post'
	| 'put'
	| 'delete'
	| 'patch'
	| 'head'
	| 'options'
	| 'trace'
type RemoveAuthHeaders<T> = T extends {
	parameters: {
		header: infer H
	}
}
	? H extends {
			Authorization: string
			Version: string
		}
		? {
				parameters: {
					header?: Partial<Pick<H, 'Authorization' | 'Version'>> &
						Omit<H, 'Authorization' | 'Version'>
				} & Omit<T['parameters'], 'header'>
			} & Omit<T, 'parameters'>
		: T
	: never
/**
 * An `openapi-fetch` client with optional Authentication headers.
 *
 * @see {@link createClientWithAuth}
 */
type OptionalAuthParamsClient<T> =
	T extends Client<infer Paths>
		? Client<{
				[P in keyof Paths]: {
					[M in keyof Paths[P]]: M extends 'parameters'
						? Paths[P][M]
						: M extends HTTPMethod
							? RemoveAuthHeaders<Paths[P][M]>
							: Paths[P][M]
				}
			}>
		: never

export interface ClientWithAuth<TPaths extends {}>
	extends OptionalAuthParamsClient<Client<TPaths>> {}

/**
 * Authentication headers for the HighLevel v2 API.
 */
export type AUTH_HEADERS = {
	/**
	 * The token to use for authentication.
	 *
	 * @example `Bearer 1234567890`
	 */
	Authorization: `Bearer ${string}`
	/**
	 * The version of the API to use.
	 *
	 * @default '2021-07-28'
	 */
	Version: '2021-07-28'
}
