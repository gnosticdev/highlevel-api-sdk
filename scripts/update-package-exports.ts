import fs from 'node:fs'
import kleur from 'kleur'

const packageJsonPath = './package.json'
const generatedTypesPath = './dist/generated/v2/openapi'
const clientDistPath = './dist/client'

// Ensure dist directory is removed
await Bun.$`rm -rf dist`.catch(() => {})

// run tsc to ensure types are built
await Bun.$`tsc -p tsconfig.build.json`.catch((err) => {
	console.error('Error building types:', err)
	process.exit(1)
})

console.log(kleur.green('Types built successfully'))

// Read package.json
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'))

// Get all type files from dist/generated/v2/openapi
const typeFiles = fs
	.readdirSync(generatedTypesPath)
	.filter((file) => file.endsWith('.d.ts'))
	.map((file) => file.replace('.d.ts', ''))

// Get all files from dist/client
const clientFiles = fs
	.readdirSync(clientDistPath)
	.filter((file) => file.endsWith('.js'))
	.map((file) => file.replace('.js', ''))

// Create exports object
const exports: Record<string, { import: string; types: string }> = {
	'.': {
		import: './dist/client/main.js',
		types: './dist/client/main.d.ts',
	},
}

// Add type exports
for (const file of typeFiles) {
	exports[`./types/${file}`] = {
		import: `./dist/generated/v2/openapi/${file}.d.ts`,
		types: `./dist/generated/v2/openapi/${file}.d.ts`,
	}
}

// Add client file exports
for (const file of clientFiles) {
	if (file === 'index') continue
	exports[`./${file}`] = {
		import: `./dist/client/${file}.js`,
		types: `./dist/client/${file}.d.ts`,
	}
}

// Update package.json
packageJson.exports = exports

// Write updated package.json
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2))

console.log(kleur.green('package.json exports updated'))
