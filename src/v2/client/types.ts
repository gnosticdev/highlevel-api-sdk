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
	parameters: infer P
}
	? P extends object
		? 'header' extends keyof P
			? NonNullable<P['header']> extends infer H
				? H extends object
					? {
							parameters: Omit<P, 'header'> &
								({} extends Pick<P, 'header'>
									? { header?: HeaderWithoutAuth<H> }
									: [
												Exclude<
													RequiredKeys<H>,
													keyof AUTH_HEADERS
												>,
										  ] extends [never]
										? { header?: HeaderWithoutAuth<H> }
										: { header: HeaderWithoutAuth<H> })
						} & Omit<T, 'parameters'>
					: T
				: T
			: T
		: T
	: T

type RequiredKeys<T extends object> = {
	[K in keyof T]-?: {} extends Pick<T, K> ? never : K
}[keyof T]

type HeaderWithoutAuth<T extends object> = Omit<T, keyof AUTH_HEADERS> &
	Partial<Pick<T, Extract<keyof T, keyof AUTH_HEADERS>>>
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

export interface ClientWithAuth<
	TPaths extends {},
> extends OptionalAuthParamsClient<Client<TPaths>> {}

/** A generated endpoint client, with its auth headers set by the SDK when enabled. */
export type ClientForAuth<
	TPaths extends {},
	TWithAuth extends boolean,
> = TWithAuth extends true ? ClientWithAuth<TPaths> : Client<TPaths>

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
