import path from 'node:path'
import { defineConfig } from 'tsup'

const openapiTypeEntries: Record<`types/${string}`, string> = Array.from(
	new Bun.Glob('*.ts').scanSync({ cwd: 'src/generated/v2/openapi' }),
).reduce((acc, file) => {
	acc[`types/${path.parse(file).name}`] = path.join(
		'src/generated/v2/openapi',
		file,
	)
	return acc
}, {})

console.log(openapiTypeEntries)

const mainBundle = defineConfig({
	entry: {
		index: 'src/clients/highlevel/index.ts',
		oauth: 'src/clients/oauth/index.ts',
		v1: 'src/clients/v1/index.ts',
		scopes: 'src/lib/scopes.ts',
		webhooks: 'src/generated/v2/custom/webhooks.ts',
		'configs/highlevel': 'src/clients/highlevel/config.ts',
		'configs/oauth': 'src/clients/oauth/config.ts',
		...openapiTypeEntries,
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
