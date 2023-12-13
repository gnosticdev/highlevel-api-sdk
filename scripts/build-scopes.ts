import scopes from "../src/schema/scopes.json"

type Scopes = {
	[key: string]: {
		readonly: {
			methodAndEndpoint: string
			webhookEvents: string
			accessType: string[]
		}[]
		write?: {
			methodAndEndpoint: string
			webhookEvents: string
			accessType: string[]
		}[]
	}
}

// replacer to add 'as const' to the end of accessType arrays
const scopesBuild = `export const scopesSchema = ${JSON.stringify(
	scopes,
	null,
	4,
).replace(/"accessType": \[([^\]]+)\]/g, '"accessType": [$1] as const')}`
await Bun.write("src/api/types/scopes.ts", scopesBuild)
