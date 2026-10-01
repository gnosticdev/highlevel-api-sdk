import { execFileSync } from 'node:child_process'

type JsonObject = Record<string, unknown>
type Change<T> = { name: string; before?: T; after?: T }
type MapChanges<T> = ReturnType<typeof compareMaps<T>>
type OperationData = { label: string; definition: unknown }

const baseRef = process.argv[2]
if (!baseRef) {
	throw new Error('Pass the latest release tag as the first argument.')
}

function git(...args: string[]): string {
	return execFileSync('git', args, { encoding: 'utf8' })
}

function filesAt(ref: string, directory: string): string[] {
	return git('ls-tree', '-r', '--name-only', '-z', ref, '--', directory)
		.split('\0')
		.filter(Boolean)
}

function jsonAt(ref: string, file: string): unknown {
	return JSON.parse(git('show', `${ref}:${file}`)) as unknown
}

function asObject(value: unknown): JsonObject {
	return value && typeof value === 'object' && !Array.isArray(value)
		? (value as JsonObject)
		: {}
}

function stable(value: unknown): string {
	if (Array.isArray(value)) return `[${value.map(stable).join(',')}]`
	if (value && typeof value === 'object') {
		const object = value as JsonObject
		return `{${Object.keys(object)
			.sort()
			.map((key) => `${JSON.stringify(key)}:${stable(object[key])}`)
			.join(',')}}`
	}
	return JSON.stringify(value) ?? 'undefined'
}

function compareMaps<T>(
	before: Map<string, T>,
	after: Map<string, T>,
): {
	added: Change<T>[]
	changed: Change<T>[]
	removed: Change<T>[]
} {
	const added: Change<T>[] = []
	const changed: Change<T>[] = []
	const removed: Change<T>[] = []

	for (const [name, value] of after) {
		if (!before.has(name)) added.push({ name, after: value })
		else if (stable(before.get(name)) !== stable(value)) {
			changed.push({ name, before: before.get(name), after: value })
		}
	}
	for (const [name, value] of before) {
		if (!after.has(name)) removed.push({ name, before: value })
	}

	return {
		added: added.sort(byName),
		changed: changed.sort(byName),
		removed: removed.sort(byName),
	}
}

function byName<T>(a: Change<T>, b: Change<T>): number {
	return a.name.localeCompare(b.name)
}

function displaySection(title: string, items: string[]): string[] {
	if (items.length === 0) return []
	const visibleItems = items.slice(0, 40)
	const lines = [
		`### ${title} (${items.length})`,
		...visibleItems.map((item) => `- ${item}`),
	]
	if (items.length > visibleItems.length) {
		lines.push(`- And ${items.length - visibleItems.length} more.`)
	}
	return lines
}

function readOpenApiData(
	ref: string,
	files: string[],
): {
	operations: Map<string, OperationData>
	schemas: Map<string, unknown>
} {
	const operations = new Map<string, OperationData>()
	const schemas = new Map<string, unknown>()
	const methods = new Set([
		'get',
		'put',
		'post',
		'delete',
		'patch',
		'options',
		'head',
		'trace',
	])

	for (const file of files.filter((path) => path.endsWith('.json'))) {
		const root = asObject(jsonAt(ref, file))
		const domain =
			file
				.split('/')
				.at(-1)
				?.replace(/(?:\.openapi)?\.json$/, '') ?? file
		const paths = asObject(root.paths)
		for (const [route, pathItemValue] of Object.entries(paths)) {
			const pathItem = asObject(pathItemValue)
			for (const [method, operationValue] of Object.entries(pathItem)) {
				if (!methods.has(method)) continue
				const operation = asObject(operationValue)
				const operationId =
					typeof operation.operationId === 'string'
						? operation.operationId
						: ''
				const summary =
					typeof operation.summary === 'string'
						? operation.summary
						: ''
				const label = [operationId, summary && `“${summary}”`]
					.filter(Boolean)
					.join(' — ')
				operations.set(`${domain} ${method.toUpperCase()} ${route}`, {
					label: label || `${method.toUpperCase()} ${route}`,
					definition: operation,
				})
			}
		}

		const components = asObject(root.components)
		const componentSchemas = asObject(components.schemas)
		for (const [name, schema] of Object.entries(componentSchemas)) {
			schemas.set(`${domain}.${name}`, schema)
		}
	}

	return { operations, schemas }
}

function formatNamedChanges<T>(
	title: string,
	changes: MapChanges<T>,
	describe: (value: T | undefined) => string = () => '',
): string[] {
	return [
		...displaySection(
			`${title} added`,
			changes.added.map(
				(item) =>
					`\`${item.name}\`${describe(item.after) ? ` — ${describe(item.after)}` : ''}`,
			),
		),
		...displaySection(
			`${title} changed`,
			changes.changed.map(
				(item) =>
					`\`${item.name}\`${describe(item.after) ? ` — ${describe(item.after)}` : ''}`,
			),
		),
		...displaySection(
			`${title} removed`,
			changes.removed.map(
				(item) =>
					`\`${item.name}\`${describe(item.before) ? ` — ${describe(item.before)}` : ''}`,
			),
		),
	]
}

const previousSchemaFiles = new Set(filesAt(baseRef, 'schemas/v2'))
const currentSchemaFiles = new Set(filesAt('HEAD', 'schemas/v2'))
const allSchemaFiles = new Set([...previousSchemaFiles, ...currentSchemaFiles])
const changedSchemaFiles = [...allSchemaFiles]
	.filter((file) => {
		const before = previousSchemaFiles.has(file)
			? stable(jsonAt(baseRef, file))
			: undefined
		const after = currentSchemaFiles.has(file)
			? stable(jsonAt('HEAD', file))
			: undefined
		return before !== after
	})
	.sort()

const apiFiles = [...allSchemaFiles].filter(
	(file) =>
		file.startsWith('schemas/v2/api-endpoints/') ||
		file.startsWith('schemas/v2/common/'),
)
const beforeApi = readOpenApiData(
	baseRef,
	apiFiles.filter((file) => previousSchemaFiles.has(file)),
)
const afterApi = readOpenApiData(
	'HEAD',
	apiFiles.filter((file) => currentSchemaFiles.has(file)),
)
const operationChanges = compareMaps(beforeApi.operations, afterApi.operations)
const schemaChanges = compareMaps(beforeApi.schemas, afterApi.schemas)

const webhookFiles = changedSchemaFiles.filter((file) =>
	file.startsWith('schemas/v2/webhooks/'),
)
const webhookChanges = compareMaps(
	new Map(
		webhookFiles
			.filter((file) => previousSchemaFiles.has(file))
			.map((file) => [file, stable(jsonAt(baseRef, file))]),
	),
	new Map(
		webhookFiles
			.filter((file) => currentSchemaFiles.has(file))
			.map((file) => [file, stable(jsonAt('HEAD', file))]),
	),
)

const scopeFiles = changedSchemaFiles
	.filter((file) => file.startsWith('schemas/v2/scopes/'))
	.map((file) => `\`${file.split('/').at(-1)}\``)
const generatedFiles = git(
	'diff',
	'--name-only',
	baseRef,
	'HEAD',
	'--',
	'src/v2',
)
	.split('\n')
	.filter(Boolean)
	.sort()

const lines = [
	'# Generated HighLevel API changes',
	'',
	`Compared with release ${baseRef}. This release includes ${changedSchemaFiles.length} changed schema file${changedSchemaFiles.length === 1 ? '' : 's'}.`,
	'',
	...displaySection(
		'Schema files changed',
		changedSchemaFiles.map(
			(file) => `\`${file.replace('schemas/v2/', '')}\``,
		),
	),
	...formatNamedChanges(
		'API operation',
		operationChanges,
		(value) => value?.label ?? '',
	),
	...formatNamedChanges('API schema', schemaChanges),
	...displaySection(
		'Webhook schemas added',
		webhookChanges.added.map(({ name }) => `\`${name.split('/').at(-1)}\``),
	),
	...displaySection(
		'Webhook schemas changed',
		webhookChanges.changed.map(
			({ name }) => `\`${name.split('/').at(-1)}\``,
		),
	),
	...displaySection(
		'Webhook schemas removed',
		webhookChanges.removed.map(
			({ name }) => `\`${name.split('/').at(-1)}\``,
		),
	),
	...displaySection('Scope schema files changed', scopeFiles),
	...displaySection(
		'SDK TypeScript files changed',
		generatedFiles.map((file) => `\`${file.replace('src/v2/', '')}\``),
	),
]

if (changedSchemaFiles.length === 0 && generatedFiles.length === 0) {
	lines.push('', 'No schema or SDK TypeScript files changed.')
}

console.log(lines.join('\n'))
