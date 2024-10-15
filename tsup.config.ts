import { readdirSync } from 'node:fs'
import path from 'node:path'
import { defineConfig } from 'tsup'

const openApiEntries = readdirSync('src/generated/v2/openapi')
	.filter((file) => file.endsWith('.ts'))
	.reduce((acc, file) => {
		acc[`types/${path.parse(file).name}`] = `src/generated/v2/openapi/${file}`
		return acc
	}, {})

const clientEntries: Record<string, string> = readdirSync('src/clients')
	.filter((file) => file.endsWith('.ts') && !file.endsWith('.d.ts'))
	.reduce((acc, file) => {
		acc[`clients/${path.parse(file).name}`] = `src/clients/${file}`
		return acc
	}, {})

const mainBundle = defineConfig({
	entry: {
		index: 'src/clients/highlevel/index.ts',
		oauth: 'src/clients/oauth/index.ts',
		scopes: 'src/lib/scopes.ts',
		webhooks: 'src/generated/v2/other/webhooks.ts',
		...clientEntries,
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
