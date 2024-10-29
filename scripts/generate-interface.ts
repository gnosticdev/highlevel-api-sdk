import path from 'node:path'
import kleur from 'kleur'
import { toCamelCase } from '../src/lib/utils'
import { getV2OpenApiFiles } from './generate-v2-types'

if (import.meta.main) {
	await generateClientInterface()
}

export async function generateClientInterface() {
	const CLIENT_INTERFACE_FILE = 'src/clients/v2/interface.ts'

	const schemaFiles = (await getV2OpenApiFiles())
		.filter((file) => !file.endsWith('oauth.openapi.json'))
		.map((file) => {
			const fileName = path.basename(file).replace('.openapi.json', '')
			const camelName = toCamelCase(fileName)
			const pascalName = camelName.charAt(0).toUpperCase() + camelName.slice(1)
			return { pascalName, camelName, fileName }
		})

	const importStatements = schemaFiles
		.map((file) => {
			return `import type * as ${file.pascalName} from '../../generated/v2/openapi/${file.fileName}'`
		})
		.join('\n')

	/**
	 * client interfaces for each of the v2 endpoints.
	 */
	const interfaceProperties = schemaFiles.map((file) => {
		return `${file.camelName}: Client<${file.pascalName}.paths, \`\${string}/\${string}\`>`
	})

	const interfaceContent = `
// This file is generated by the ${import.meta.file} script.
// Do not edit directly.

import type { Client } from 'openapi-fetch'
import type { BaseOauthClient, OauthClient } from '../oauth'
${importStatements}
import type { HighLevelClientConfig } from './index'
import type { AccessType } from '../../lib/type-utils'

export interface HighLevelClientInterface<
	T extends AccessType,
	TOAuth extends BaseOauthClient | OauthClient<T>
> {
	/**
	 * Exposed config object for convenience.
	 */
	_clientConfig: HighLevelClientConfig
	oauth: TOAuth
	${interfaceProperties.join('\n  ')}
}
`.trim()

	await Bun.write(CLIENT_INTERFACE_FILE, interfaceContent)
	console.log(
		kleur.green(
			`Successfully generated HighLevelClientInterface in ${CLIENT_INTERFACE_FILE}`,
		),
	)
}
