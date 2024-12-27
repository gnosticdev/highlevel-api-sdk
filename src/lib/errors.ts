export const HighLevelSDKErrorCodes = {
	INVALID_AUTH_HEADER: 'INVALID_AUTH_HEADER',
	INVALID_AUTH_TYPE: 'INVALID_AUTH_TYPE',
	NO_HANDLER_REGISTERED: 'NO_HANDLER_REGISTERED',
	INVALID_WEBHOOK_PAYLOAD: 'INVALID_WEBHOOK_PAYLOAD',
	API_KEY_REQUIRED: 'API_KEY_REQUIRED',
} as const

// You could even add standardized messages
const ERROR_MESSAGES = {
	[HighLevelSDKErrorCodes.INVALID_AUTH_HEADER]:
		'Authorization header must start with "Bearer "',
	[HighLevelSDKErrorCodes.INVALID_AUTH_TYPE]:
		'Invalid authentication type provided',
	[HighLevelSDKErrorCodes.NO_HANDLER_REGISTERED]:
		'No handler registered for webhook event',
	[HighLevelSDKErrorCodes.INVALID_WEBHOOK_PAYLOAD]: 'Invalid webhook payload',
	[HighLevelSDKErrorCodes.API_KEY_REQUIRED]: 'apiKey is required',
} as const

export class HighLevelSDKError extends Error {
	constructor(message: keyof typeof ERROR_MESSAGES, options?: ErrorOptions) {
		super(ERROR_MESSAGES[message], options)
		this.name = 'HighLevelSDKError'
		this.cause = HighLevelSDKErrorCodes[message]
	}
}
