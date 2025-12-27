import type { HighLevelAPIScopes } from './types/scopes'

export type AgencyScopes =
	| `${keyof HighLevelAPIScopes['Agency']['readonly']}.readonly`
	| `${keyof HighLevelAPIScopes['Agency']['write']}.write`
export type SubAccountScopes =
	| `${keyof HighLevelAPIScopes['Sub-Account']['readonly']}.readonly`
	| `${keyof HighLevelAPIScopes['Sub-Account']['write']}.write`

/**
 * Get the scopes for a given access type.
 * @param accessType - the access type to get the scopes for
 */
export type Scopes<T extends AccessType> = T extends 'Agency'
	? AgencyScopes
	: SubAccountScopes

export type AccessType = 'Sub-Account' | 'Agency'
