import fs from 'node:fs'

const packageJsonFile = await Bun.file('package.json')
const packageJson = await packageJsonFile.json()

// run tsc to build the client
await Bun.$`tsc -p tsconfig.build.json`

const clientExports = fs.readdirSync('dist/client')
const openapiExports = fs.readdirSync('dist/generated/openapi')
const otherExports = fs.readdirSync('dist/generated/other')

packageJson.exports['.'] = {
	...packageJson.exports['.'],
	types: './dist/types/index.d.ts',
	import: './dist/client/index.js',
}

const clientExportsMap: Record<string, { import: string; types: string }> = {}
// export each client module
for (const exportName of clientExports) {
	clientExportsMap[exportName] = {
		import: `./dist/client/${exportName}.js`,
		types: `./dist/types/${exportName}.d.ts`,
	}
}

packageJson.exports['./client'] = clientExportsMap

await Bun.write('package.json', JSON.stringify(packageJson, null, 2))
