import createClient, {
	type Client,
	type HeadersOptions,
	mergeHeaders,
} from 'openapi-fetch'
import type { AUTH_HEADERS } from './types'

type MaybeAuth = Partial<AUTH_HEADERS> & HeadersOptions

export function withAuth<TPaths extends {}>(
	client: Client<TPaths>,
	authHeaders: AUTH_HEADERS,
): Client<TPaths> {
	return createClient<TPaths>({
		headers: mergeHeaders(authHeaders),
		...client,
	})
}
