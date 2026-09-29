import fs from 'node:fs/promises'
import path from 'node:path'
import kleur from 'kleur'
import { jsonrepair } from 'jsonrepair'
import type {
	Method,
	OperationObject,
	PathItemObject,
	ReferenceObject,
} from 'openapi-typescript'
import type { OpenAPI3 } from 'openapi-typescript'
import { updateScopeSchemas } from './scope-schemas'
import { formatAndLint } from './script-utils'

const HIGHLEVEL_REPOSITORY = 'GoHighLevel/highlevel-api-docs'
const WEBHOOK_PATCHES_DIR = path.join(
	process.cwd(),
	'scripts/patched-schemas/webhooks',
)

type GitHubTreeItem = {
	path: string
	type: string
}

type GitHubCommit = {
	sha: string
}

type GitHubTree = {
	tree: GitHubTreeItem[]
	truncated?: boolean
}

type StagedFile = {
	path: string
	content: unknown
}

if (import.meta.main) {
	await downloadJsonSchemas()
	await formatAndLint('schemas/v2')
}

export async function downloadJsonSchemas(): Promise<void> {
	const commit = await fetchGitHubJson<GitHubCommit>(
		`https://api.github.com/repos/${HIGHLEVEL_REPOSITORY}/commits/main`,
	)
	const tree = await fetchGitHubJson<GitHubTree>(
		`https://api.github.com/repos/${HIGHLEVEL_REPOSITORY}/git/trees/${commit.sha}?recursive=1`,
	)
	if (tree.truncated) {
		throw new Error('HighLevel API docs repository tree was truncated')
	}

	const paths = tree.tree
		.filter((item) => item.type === 'blob')
		.map((item) => item.path)
	const endpointPaths = paths.filter((item) =>
		/^apps\/[^/]+\.json$/.test(item),
	)
	const webhookPaths = paths.filter(
		(item) =>
			item.startsWith('docs/webhook events/') && item.endsWith('.md'),
	)
	const commonSchemaPath = 'common/common-schemas.json'
	const scopesMarkdownPath = 'docs/oauth/Scopes.md'

	if (endpointPaths.length === 0 || webhookPaths.length === 0) {
		throw new Error('The HighLevel API docs repository has no v2 schemas')
	}
	for (const requiredPath of [commonSchemaPath, scopesMarkdownPath]) {
		if (!paths.includes(requiredPath)) {
			throw new Error(
				`The HighLevel API docs repository is missing ${requiredPath}`,
			)
		}
	}

	console.log(kleur.cyan(`Reading HighLevel schemas at ${commit.sha}`))
	const apiDocuments = await mapWithConcurrency(
		endpointPaths,
		8,
		async (filePath) => {
			const document = await fetchJsonFile<OpenAPI3>(filePath, commit.sha)
			if (!document.openapi || !document.paths) {
				throw new Error(`Invalid OpenAPI schema at ${filePath}`)
			}
			return {
				path: `schemas/v2/api-endpoints/${path.posix
					.basename(filePath)
					.replace(/\.json$/, '.openapi.json')}`,
				content: ensureUniqueOperationIds(document),
			}
		},
	)
	const commonSchema = await fetchJsonFile<OpenAPI3>(
		commonSchemaPath,
		commit.sha,
	)
	const webhookDocuments = await mapWithConcurrency(
		webhookPaths,
		8,
		async (filePath) => {
			const markdown = await fetchTextFile(filePath, commit.sha)
			const filename = `${path.posix.basename(filePath, '.md')}.json`
			return {
				path: `schemas/v2/webhooks/${filename}`,
				content: await parseWebhookSchema(filename, markdown),
			}
		},
	)
	const scopesMarkdown = await fetchTextFile(scopesMarkdownPath, commit.sha)
	const scopesSchemaPath = 'schemas/v2/scopes/scopes.json'
	const catalogSchemaPath = 'schemas/v2/scopes/catalog.json'
	const [scopesSchema, catalogSchema] = await Promise.all([
		Bun.file(scopesSchemaPath).json(),
		Bun.file(catalogSchemaPath).json(),
	])
	const updatedScopes = updateScopeSchemas(
		scopesMarkdown,
		scopesSchema,
		catalogSchema,
	)

	const stagedFiles: StagedFile[] = [
		...apiDocuments,
		{
			path: 'schemas/v2/common/common-schemas.json',
			content: commonSchema,
		},
		{
			path: 'schemas/v2/api-endpoints/common-schemas.openapi.json',
			content: commonSchema,
		},
		...webhookDocuments,
		{ path: scopesSchemaPath, content: updatedScopes.scopesSchema },
		{ path: catalogSchemaPath, content: updatedScopes.catalogSchema },
	]

	await Promise.all(
		stagedFiles.map(async (file) => {
			const outputPath = path.join(process.cwd(), file.path)
			await fs.mkdir(path.dirname(outputPath), { recursive: true })
			await Bun.write(outputPath, JSON.stringify(file.content, null, 2))
		}),
	)

	console.log(
		kleur.green(
			`Downloaded ${apiDocuments.length} API schemas, ${webhookDocuments.length} webhook schemas, and ${updatedScopes.endpointCount} scope endpoints`,
		),
	)
}

async function fetchGitHubJson<T>(url: string): Promise<T> {
	const response = await fetch(url, {
		headers: {
			Accept: 'application/vnd.github+json',
			'User-Agent': '@gnosticdev/highlevel-sdk',
			'X-GitHub-Api-Version': '2022-11-28',
		},
	})
	if (!response.ok) {
		throw new Error(
			`Failed to fetch GitHub API ${url}: ${response.statusText}`,
		)
	}
	return (await response.json()) as T
}

async function fetchTextFile(
	filePath: string,
	commitSha: string,
): Promise<string> {
	const encodedPath = filePath
		.split('/')
		.map((part) => encodeURIComponent(part))
		.join('/')
	const url = `https://raw.githubusercontent.com/${HIGHLEVEL_REPOSITORY}/${commitSha}/${encodedPath}`
	const response = await fetch(url)
	if (!response.ok) {
		throw new Error(
			`Failed to download ${filePath}: ${response.statusText}`,
		)
	}
	return response.text()
}

async function fetchJsonFile<T>(
	filePath: string,
	commitSha: string,
): Promise<T> {
	const content = await fetchTextFile(filePath, commitSha)
	try {
		return JSON.parse(content) as T
	} catch (error) {
		throw new Error(`Invalid JSON in ${filePath}`, { cause: error })
	}
}

async function parseWebhookSchema(
	filename: string,
	markdown: string,
): Promise<Record<string, unknown>> {
	const schemaMatch = markdown.match(
		/```json(?:\s+json_schema)?\s*\n([\s\S]+?)\n```/,
	)
	if (!schemaMatch?.[1]) {
		throw new Error(`No JSON schema block found in ${filename}`)
	}

	const patchPath = path.join(WEBHOOK_PATCHES_DIR, filename)
	if (await Bun.file(patchPath).exists()) {
		return (await Bun.file(patchPath).json()) as Record<string, unknown>
	}

	try {
		const repaired = jsonrepair(schemaMatch[1])
		const schema = JSON.parse(repaired) as unknown
		if (!schema || typeof schema !== 'object' || Array.isArray(schema)) {
			throw new Error('The schema root must be an object')
		}
		return schema as Record<string, unknown>
	} catch (error) {
		throw new Error(`Invalid JSON schema in ${filename}`, { cause: error })
	}
}

async function mapWithConcurrency<T, R>(
	items: T[],
	concurrency: number,
	mapper: (item: T) => Promise<R>,
): Promise<R[]> {
	const results: R[] = []
	let nextIndex = 0
	const workerCount = Math.min(concurrency, items.length)

	await Promise.all(
		Array.from({ length: workerCount }, async () => {
			while (nextIndex < items.length) {
				const index = nextIndex++
				const item = items[index]
				if (item !== undefined) results[index] = await mapper(item)
			}
		}),
	)

	return results
}

function isOperationObject(
	operation: OperationObject | ReferenceObject | undefined,
): operation is OperationObject {
	return (
		typeof operation === 'object' &&
		operation !== null &&
		'operationId' in operation
	)
}

function ensureUniqueOperationIds(schema: OpenAPI3): OpenAPI3 {
	const usedIds = new Set<string>()
	const paths = schema.paths
	if (!paths) return schema

	for (const pathName in paths) {
		const pathItem = paths[pathName] as PathItemObject
		for (const method in pathItem) {
			const operation = pathItem[method as Method]
			if (!isOperationObject(operation) || !operation.operationId)
				continue

			const originalId = operation.operationId
			if (usedIds.has(originalId)) {
				let newId = `${originalId}_${method}`
				let counter = 1
				while (usedIds.has(newId)) {
					newId = `${originalId}_${method}_${counter}`
					counter++
				}
				operation.operationId = newId
				console.log(
					`Renamed duplicate operationId ${originalId} to ${newId}`,
				)
			}
			usedIds.add(operation.operationId)
		}
	}

	return schema
}
