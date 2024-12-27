export const HighLevelSDKErrorCodes = {
	INVALID_AUTH_HEADER: 'INVALID_AUTH_HEADER',
	INVALID_AUTH_TYPE: 'INVALID_AUTH_TYPE',
	NO_HANDLER_REGISTERED: 'NO_HANDLER_REGISTERED',
	INVALID_WEBHOOK_PAYLOAD: 'INVALID_WEBHOOK_PAYLOAD',
	API_KEY_REQUIRED: 'API_KEY_REQUIRED',
} as const

// You could even add standardized messages
export const ERROR_MESSAGES = {
	[HighLevelSDKErrorCodes.INVALID_AUTH_HEADER]:
		'Authorization header must start with "Bearer "',
	[HighLevelSDKErrorCodes.INVALID_AUTH_TYPE]:
		'Invalid authentication type provided',
	[HighLevelSDKErrorCodes.NO_HANDLER_REGISTERED]:
		'No handler registered for webhook event: {event}',
	[HighLevelSDKErrorCodes.INVALID_WEBHOOK_PAYLOAD]: 'Invalid webhook payload',
	[HighLevelSDKErrorCodes.API_KEY_REQUIRED]: 'apiKey is required',
} as const

export class HighLevelSDKError extends Error {
	constructor(
		message: keyof typeof ERROR_MESSAGES,
		options?: ErrorOptions & { event?: string },
	) {
		const finalMessage = options?.event
			? ERROR_MESSAGES[message].replace('{event}', options.event)
			: ERROR_MESSAGES[message]
		super(finalMessage, options)
		this.name = 'HighLevelSDKError'
		this.cause = HighLevelSDKErrorCodes[message]
	}
}
