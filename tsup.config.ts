import path from 'node:path'
import { defineConfig } from 'tsup'

const openapiTypeEntries: Record<`types/${string}`, string> = Array.from(
	new Bun.Glob('*.ts').scanSync({ cwd: 'src/v2/types/openapi' }),
).reduce((acc: Record<`types/${string}`, string>, file) => {
	acc[`types/${path.parse(file).name}`] = path.join(
		'src/v2/types/openapi',
		file,
	)
	return acc
}, {})

// Output esm and cjs bundles
export default defineConfig((override) => ({
	entry: {
		index: 'src/v2/index.ts',
		oauth: 'src/v2/oauth/impl.ts',
		v1: 'src/v1/index.ts',
		scopes: 'src/lib/scopes.ts',
		webhooks: 'src/v2/webhooks.ts',
		...openapiTypeEntries,
	},
	format: ['esm', 'cjs'],
	splitting: false,
	outExtension: (_c) => ({ js: '.js', dts: '.d.ts' }),
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
