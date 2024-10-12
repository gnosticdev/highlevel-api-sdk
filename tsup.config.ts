import { readdirSync } from 'node:fs'
import path from 'node:path'
import { defineConfig } from 'tsup'

const typeEntries = readdirSync('src/types')
	.filter((file) => file.endsWith('.ts') && !file.endsWith('.d.ts'))
	.reduce((acc, file) => {
		const name = path.parse(file).name
		acc[`types/${name}`] = `src/types/${file}`
		return acc
	}, {})

const openApiEntries = readdirSync('src/generated/v2/openapi')
	.filter((file) => file.endsWith('.ts'))
	.reduce((acc, file) => {
		acc[`types/${path.parse(file).name}`] = `src/generated/v2/openapi/${file}`
		return acc
	}, {})

const clientEntries: Record<string, string> = readdirSync('src/client')
	.filter((file) => file.endsWith('.ts') && !file.endsWith('.d.ts'))
	.reduce((acc, file) => {
		acc[`client/${path.parse(file).name}`] = `src/client/${file}`
		return acc
	}, {})

const mainBundle = defineConfig({
	entry: {
		index: 'src/index.ts',
		oauth: 'src/oauth/index.ts',
		scopes: 'src/oauth/scopes.ts',
		webhooks: 'src/generated/v2/other/webhooks.ts',
		...clientEntries,
		...typeEntries,
		...openApiEntries,
	},
	format: ['esm'],
	sourcemap: true,
	splitting: false,
	clean: true,
	tsconfig: './tsconfig.build.json',
	outDir: 'dist',
	treeshake: false,
	dts: {
		resolve: true,
	},
})

export default [mainBundle]
