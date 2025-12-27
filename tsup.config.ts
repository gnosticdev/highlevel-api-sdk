import path from 'node:path'
import { defineConfig } from 'tsup'

const apiEndpointTypes: Record<`types/${string}`, string> = Array.from(
	new Bun.Glob('*.ts').scanSync({ cwd: 'src/v2/types' }),
).reduce((acc: Record<`types/${string}`, string>, file) => {
	acc[`types/${path.parse(file).name}`] = path.join('src/v2/types', file)
	return acc
}, {})

// Output esm and cjs bundles
export default defineConfig((_override) => ({
	entry: {
		index: 'src/v2/index.ts',
		oauth: 'src/v2/oauth/impl.ts',
		v1: 'src/v1/index.ts',
		scopes: 'src/v2/scopes/scopes-builder.ts',
		webhooks: 'src/v2/webhooks/webhooks-client.ts',
		...apiEndpointTypes,
	},
	format: ['esm'],
	target: 'es2022',
	splitting: false,
	dts: true,
	outExtension: (_c) => ({ js: '.js', dts: '.d.ts' }),
	keepNames: true,
	clean: true,
	tsconfig: './tsconfig.build.json',
	treeshake: false,
}))
