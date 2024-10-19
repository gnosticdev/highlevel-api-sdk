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

// Output esm and cjs bundles
export default defineConfig((override) => ({
	entry: {
		index: 'src/clients/v2/index.ts',
		oauth: 'src/clients/oauth/index.ts',
		v1: 'src/clients/v1/index.ts',
		scopes: 'src/lib/scopes.ts',
		webhooks: 'src/generated/v2/custom/webhooks.ts',
		'configs/index': 'src/clients/v2/config.ts',
		'configs/oauth': 'src/clients/oauth/config.ts',
		...openapiTypeEntries,
	},
	format: ['esm', 'cjs'],
	splitting: false,
	outExtension: (c) => ({ js: '.js', dts: '.d.ts' }),
	keepNames: true,
	clean: true,
	tsconfig: './tsconfig.build.json',
	treeshake: false,
	dts:
		override.format === 'cjs'
			? false
			: {
					resolve: true,
				},
	esbuildOptions(opts, ctx) {
		if (ctx.format === 'cjs') {
			opts.outdir = 'dist/cjs'
		}
	},
}))
