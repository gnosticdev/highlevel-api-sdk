// Define common types used across the SDK
import type { AccessType, ScopeLiterals } from './types/scopes-builder'

export interface OAuthClientInterface {
	getAccessToken(): Promise<string>
	// Add other necessary methods
}

export type HighLevelConfig<T extends AccessType> = {
	baseUrl?: string
	accessType: T
	scopes?: ScopeLiterals<T> | ScopeLiterals<T>[] | (string & {})
	// Remove OAuth-specific fields
}

// ... other type definitions
