import path from 'node:path'

export const CUSTOM_V2_SCHEMAS_DIR_OLD = 'schemas/v2/custom'
export const CUSTOM_TYPES_DIR_OLD = 'src/v2/types/custom'
// export const WEBHOOKS_TYPES_DIR = 'src/v2/webhooks/types'
// export const WEBHOOKS_JSON_DIR = 'schemas/v2/webhooks'

export const schemaPathsV2 = {
	jsonDir: 'schemas/v2',
	typesDir: 'src/v2',
	apiEndpoints: 'api-endpoints',
	webhooks: 'webhooks',
	scopes: 'scopes',
	common: 'common',

	get apiEndpointsJsonDir() {
		return path.join(this.jsonDir, this.apiEndpoints)
	},
	get apiEndpointsTypesDir() {
		return path.join(this.typesDir, this.apiEndpoints, 'types')
	},
	get webhooksJsonDir() {
		return path.join(this.jsonDir, this.webhooks)
	},
	get webhooksTypesDir() {
		return path.join(this.typesDir, this.webhooks, 'types')
	},
	get scopesJsonDir() {
		return path.join(this.jsonDir, this.scopes)
	},
	get scopesTypesDir() {
		return path.join(this.typesDir, this.scopes, 'types')
	},
	get commonJsonDir() {
		return path.join(this.jsonDir, this.common)
	},
	// get commonTypesDir() { // uses apiEndpointsTypesDir instead
	// 	return path.join(this.typesDir, this.common)
	// },
} as const
