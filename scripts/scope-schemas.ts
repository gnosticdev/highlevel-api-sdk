type PermissionLevel = 'readonly' | 'write'
type AccessType = 'Sub-Account' | 'Agency'

type ScopeEndpoint = {
	scope: string
	permissionLevel: PermissionLevel
	accessType: AccessType[]
	webhookEvents: string[]
	method: string
	endpoint: string
}

type JsonRecord = Record<string, unknown>

const ACCESS_TYPES: AccessType[] = ['Sub-Account', 'Agency']
const PERMISSION_LEVELS: PermissionLevel[] = ['readonly', 'write']

function asRecord(value: unknown, name: string): JsonRecord {
	if (!value || typeof value !== 'object' || Array.isArray(value)) {
		throw new Error(`Expected ${name} to be an object`)
	}
	return value as JsonRecord
}

function normalizeCell(value: string): string {
	return value
		.replace(/<br\s*\/?\s*>/gi, '\n')
		.replace(/&nbsp;/gi, '')
		.replace(/&amp;/gi, '&')
		.replace(/\u00a0/g, ' ')
		.trim()
}

function splitTableRow(line: string): string[] {
	const cells = line.trim().replace(/^\|/, '').replace(/\|$/, '').split('|')
	return cells.map((cell) => normalizeCell(cell.replace(/\\\|/g, '|')))
}

function splitLines(value: string): string[] {
	return value
		.split(/\r?\n+/)
		.map((line) => line.trim())
		.filter(Boolean)
}

function parseScope(
	value: string,
): { scope: string; permissionLevel: PermissionLevel } | null {
	const match = value.match(/^(.*)\.(readonly|write)$/)
	if (!match?.[1] || !match[2]) return null
	return {
		scope: match[1],
		permissionLevel: match[2] as PermissionLevel,
	}
}

function parseAccessTypes(value: string): AccessType[] {
	return value
		.split(/[,\n]+/)
		.map((item) => item.trim())
		.filter((item): item is AccessType =>
			ACCESS_TYPES.includes(item as AccessType),
		)
}

function parseEndpoints(
	value: string,
): Array<{ method: string; endpoint: string }> {
	return splitLines(value)
		.map((line) => {
			const match = line.match(/^([A-Z]+)\s+(.+)$/)
			if (!match?.[1] || !match[2]) return null
			return { method: match[1], endpoint: match[2].trim() }
		})
		.filter(
			(entry): entry is { method: string; endpoint: string } =>
				entry !== null,
		)
}

function parseWebhookEvents(value: string): string[] {
	return splitLines(value).flatMap((line) =>
		line
			.split(',')
			.map((event) => event.trim())
			.filter(Boolean),
	)
}

export function extractScopeEndpoints(markdown: string): ScopeEndpoint[] {
	const lines = markdown.split(/\r?\n/)
	const headerIndex = lines.findIndex(
		(line) =>
			line.includes('|') &&
			/Scope/i.test(line) &&
			/API Endpoints/i.test(line) &&
			/Webhook Events/i.test(line) &&
			/Access Type/i.test(line),
	)
	if (headerIndex === -1) {
		throw new Error(
			'Could not find the scopes table in docs/oauth/Scopes.md',
		)
	}

	let currentScope: {
		scope: string
		permissionLevel: PermissionLevel
	} | null = null
	let currentAccessTypes: AccessType[] = []
	let currentWebhookEvents: string[] = []
	const endpoints: ScopeEndpoint[] = []

	for (const line of lines.slice(headerIndex + 2)) {
		if (!line.trim().startsWith('|')) break

		const cells = splitTableRow(line)
		if (cells.length < 4) continue

		const parsedScope = parseScope(cells[0] ?? '')
		if (parsedScope) currentScope = parsedScope

		const accessTypes = parseAccessTypes(cells[3] ?? '')
		if (accessTypes.length > 0) currentAccessTypes = accessTypes

		const webhookEvents = parseWebhookEvents(cells[2] ?? '')
		if (webhookEvents.length > 0) currentWebhookEvents = webhookEvents

		const rowEndpoints = parseEndpoints(cells[1] ?? '')
		if (!currentScope || rowEndpoints.length === 0) continue

		for (const endpoint of rowEndpoints) {
			endpoints.push({
				...currentScope,
				accessType: currentAccessTypes,
				webhookEvents: currentWebhookEvents,
				...endpoint,
			})
		}
	}

	if (endpoints.length === 0) {
		throw new Error('No endpoints found in the scopes table')
	}

	return endpoints
}

function setEnum(schema: JsonRecord, key: string, values: string[]): void {
	const definitions = asRecord(schema.$defs, 'schema.$defs')
	const definition = asRecord(definitions[key], `schema.$defs.${key}`)
	definition.enum = values.length > 0 ? values : ['']
}

function uniqueSorted(values: string[]): string[] {
	return Array.from(new Set(values)).sort((a, b) => a.localeCompare(b))
}

export function updateScopeSchemas(
	markdown: string,
	scopesSchemaInput: unknown,
	catalogSchemaInput: unknown,
): {
	scopesSchema: JsonRecord
	catalogSchema: JsonRecord
	endpointCount: number
} {
	const endpoints = extractScopeEndpoints(markdown)
	const scopesSchema = asRecord(scopesSchemaInput, 'scopes schema')
	const catalogSchema = asRecord(catalogSchemaInput, 'catalog schema')
	const scopeProperties = asRecord(
		scopesSchema.properties,
		'scopes schema properties',
	)

	for (const accessType of ACCESS_TYPES) {
		const accessSchema = asRecord(
			scopeProperties[accessType],
			`scopes schema properties.${accessType}`,
		)
		const permissionProperties = asRecord(
			accessSchema.properties,
			`scopes schema properties.${accessType}.properties`,
		)

		for (const permissionLevel of PERMISSION_LEVELS) {
			const permissionSchema = asRecord(
				permissionProperties[permissionLevel],
				`scopes schema properties.${accessType}.${permissionLevel}`,
			)
			const names = uniqueSorted(
				endpoints
					.filter(
						(endpoint) =>
							endpoint.permissionLevel === permissionLevel &&
							endpoint.accessType.includes(accessType),
					)
					.map((endpoint) => endpoint.scope),
			)
			const properties: JsonRecord = {}
			for (const name of names) {
				properties[name] = { $ref: '#/$defs/ScopeInfo' }
			}
			permissionSchema.properties = properties
			permissionSchema.required = names
		}
	}

	const allScopes = uniqueSorted(endpoints.map((endpoint) => endpoint.scope))
	const allMethods = uniqueSorted(
		endpoints.map((endpoint) => endpoint.method),
	)
	const allWebhookEvents = uniqueSorted(
		endpoints.flatMap((endpoint) => endpoint.webhookEvents),
	)

	setEnum(scopesSchema, 'HttpMethod', allMethods)
	setEnum(scopesSchema, 'WebhookEventName', allWebhookEvents)
	setEnum(catalogSchema, 'ScopeName', allScopes)
	setEnum(catalogSchema, 'HttpMethod', allMethods)
	setEnum(catalogSchema, 'WebhookEventName', allWebhookEvents)

	return { scopesSchema, catalogSchema, endpointCount: endpoints.length }
}
