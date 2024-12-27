export type paths = {
	'/conversations/': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Create Conversation
		 * @description Creates a new conversation with the data provided
		 */
		post: operations['create-conversation']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/conversations/{conversationId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get Conversation
		 * @description Get the conversation details based on the conversation ID
		 */
		get: operations['get-conversation']
		/**
		 * Update Conversation
		 * @description Update the conversation details based on the conversation ID
		 */
		put: operations['update-conversation']
		post?: never
		/**
		 * Delete Conversation
		 * @description Delete the conversation details based on the conversation ID
		 */
		delete: operations['delete-conversation']
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/conversations/{conversationId}/messages': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get messages by conversation id
		 * @description Get messages by conversation id.
		 */
		get: operations['get-messages']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/conversations/locations/{locationId}/messages/{messageId}/transcription': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get transcription by Message ID
		 * @description Get the recording transcription for a message by passing the message id
		 */
		get: operations['get-message-transcription']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/conversations/locations/{locationId}/messages/{messageId}/transcription/download': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Download transcription by Message ID
		 * @description Download the recording transcription for a message by passing the message id
		 */
		get: operations['download-message-transcription']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/conversations/messages': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Send a new message
		 * @description Post the necessary fields for the API to send a new message.
		 */
		post: operations['send-a-new-message']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/conversations/messages/{id}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get message by message id
		 * @description Get message by message id.
		 */
		get: operations['get-message']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/conversations/messages/{messageId}/locations/{locationId}/recording': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get Recording by Message ID
		 * @description Get the recording for a message by passing the message id
		 */
		get: operations['get-message-recording']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/conversations/messages/{messageId}/schedule': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		post?: never
		/**
		 * Cancel a scheduled message.
		 * @description Post the messageId for the API to delete a scheduled message. <br />
		 */
		delete: operations['cancel-scheduled-message']
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/conversations/messages/{messageId}/status': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		/**
		 * Update message status
		 * @description Post the necessary fields for the API to update message status.
		 */
		put: operations['update-message-status']
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/conversations/messages/email/{emailMessageId}/schedule': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		post?: never
		/**
		 * Cancel a scheduled email message.
		 * @description Post the messageId for the API to delete a scheduled email message. <br />
		 */
		delete: operations['cancel-scheduled-email-message']
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/conversations/messages/email/{id}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get email by Id
		 * @description Get email by Id
		 */
		get: operations['get-email-by-id']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/conversations/messages/inbound': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Add an inbound message
		 * @description Post the necessary fields for the API to add a new inbound message. <br />
		 */
		post: operations['add-an-inbound-message']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/conversations/messages/outbound': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Add an external outbound call
		 * @description Post the necessary fields for the API to add a new outbound call.
		 */
		post: operations['add-an-outbound-message']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/conversations/messages/upload': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Upload file attachments
		 * @description Post the necessary fields for the API to upload files. The files need to be a buffer with the key "fileAttachment". <br /><br /> The allowed file types are: <br> <ul><li>JPG</li><li>JPEG</li><li>PNG</li><li>MP4</li><li>MPEG</li><li>ZIP</li><li>RAR</li><li>PDF</li><li>DOC</li><li>DOCX</li><li>TXT</li></ul> <br /><br /> The API will return an object with the URLs
		 */
		post: operations['upload-file-attachments']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/conversations/search': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Search Conversations
		 * @description Returns a list of all conversations matching the search criteria along with the sort and filter options selected.
		 */
		get: operations['search-conversation']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
}
export type webhooks = Record<string, never>
export type components = {
	schemas: {
		BadRequestDTO: {
			/** @example Bad Request */
			message?: string
			/** @example 400 */
			statusCode?: number
		}
		CallDataDTO: {
			/**
			 * @description Phone number of the dialer
			 * @example +15037081210
			 */
			from?: string
			/**
			 * @description Call status
			 * @example completed
			 * @enum {string}
			 */
			status?:
				| 'pending'
				| 'completed'
				| 'answered'
				| 'busy'
				| 'no-answer'
				| 'failed'
				| 'canceled'
				| 'voicemail'
			/**
			 * @description Phone number of the receiver
			 * @example +15037081210
			 */
			to?: string
		}
		CancelScheduledResponseDto: {
			/**
			 * @description Error message of the request
			 * @example Failed cancel the scheduled message
			 */
			message: string
			/**
			 * @description HTTP Status code of the request
			 * @example 404
			 */
			status: number
		}
		ConversationDto: {
			/**
			 * @description Assigned User ID as string
			 * @example tDtDnQdgm2LXpyiqYvZ6
			 */
			assignedTo?: string
			/**
			 * @description Contact ID as string
			 * @example tDtDnQdgm2LXpyiqYvZ6
			 */
			contactId: string
			/**
			 * @description Deleted status of the conversation.
			 * @example false
			 */
			deleted: boolean
			/**
			 * @description Contact ID as string
			 * @example tDtDnQdgm2LXpyiqYvZ6
			 */
			id?: string
			/**
			 * @description Inbox status of the conversation.
			 * @example true
			 */
			inbox?: boolean
			/**
			 * @description Last message body as string
			 * @example Hello, this is the message body
			 */
			lastMessageBody?: string
			/**
			 * @description Last message date as UTC
			 * @example 1628008053263
			 */
			lastMessageDate?: string
			/**
			 * @description Type of the last message sent/receieved in the conversation.
			 * @example TYPE_CALL
			 * @enum {string}
			 */
			lastMessageType?:
				| 'TYPE_CALL'
				| 'TYPE_SMS'
				| 'TYPE_EMAIL'
				| 'TYPE_SMS_REVIEW_REQUEST'
				| 'TYPE_WEBCHAT'
				| 'TYPE_SMS_NO_SHOW_REQUEST'
				| 'TYPE_CAMPAIGN_SMS'
				| 'TYPE_CAMPAIGN_CALL'
				| 'TYPE_CAMPAIGN_EMAIL'
				| 'TYPE_CAMPAIGN_VOICEMAIL'
				| 'TYPE_FACEBOOK'
				| 'TYPE_CAMPAIGN_FACEBOOK'
				| 'TYPE_CAMPAIGN_MANUAL_CALL'
				| 'TYPE_CAMPAIGN_MANUAL_SMS'
				| 'TYPE_GMB'
				| 'TYPE_CAMPAIGN_GMB'
				| 'TYPE_REVIEW'
				| 'TYPE_INSTAGRAM'
				| 'TYPE_WHATSAPP'
				| 'TYPE_CUSTOM_SMS'
				| 'TYPE_CUSTOM_EMAIL'
				| 'TYPE_CUSTOM_PROVIDER_SMS'
				| 'TYPE_CUSTOM_PROVIDER_EMAIL'
				| 'TYPE_IVR_CALL'
				| 'TYPE_ACTIVITY_CONTACT'
				| 'TYPE_ACTIVITY_INVOICE'
				| 'TYPE_ACTIVITY_PAYMENT'
				| 'TYPE_ACTIVITY_OPPORTUNITY'
				| 'TYPE_LIVE_CHAT'
				| 'TYPE_LIVE_CHAT_INFO_MESSAGE'
				| 'TYPE_ACTIVITY_APPOINTMENT'
				| 'TYPE_FACEBOOK_COMMENT'
				| 'TYPE_INSTAGRAM_COMMENT'
				| 'TYPE_ACTIVITY'
			/**
			 * @description Location ID as string
			 * @example tDtDnQdgm2LXpyiqYvZ6
			 */
			locationId: string
			/**
			 * @description Starred status of the conversation.
			 * @example true
			 */
			starred?: boolean
			/**
			 * @description Count of unread messages in the conversation
			 * @example 1
			 */
			unreadCount?: number
			/**
			 * @description User ID as string
			 * @example tDtDnQdgm2LXpyiqYvZ6
			 */
			userId?: string
		}
		ConversationSchema: {
			/**
			 * @description Contact Id
			 * @example ABCHkzuJQ8ZMd4Te84GK
			 */
			contactId: string
			/**
			 * @description Name of the contact in case the Full Name is missing, may contain the company name or the contact email
			 * @example John Doe Company
			 */
			contactName: string
			/**
			 * @description Email of the contact
			 * @example johndoe@mailingdomain.com
			 */
			email: string
			/**
			 * @description Full name of the contact
			 * @example John Doe
			 */
			fullName: string
			/**
			 * @description Conversation Id
			 * @example ABCHkzuJQ8ZMd4Te84GK
			 */
			id: string
			/**
			 * @description Last Message Body of the conversation
			 * @example This is a sample message body
			 */
			lastMessageBody: string
			/**
			 * @description Last message type of the conversation
			 * @example TYPE_SMS
			 * @enum {string}
			 */
			lastMessageType:
				| 'TYPE_CALL'
				| 'TYPE_SMS'
				| 'TYPE_EMAIL'
				| 'TYPE_SMS_REVIEW_REQUEST'
				| 'TYPE_WEBCHAT'
				| 'TYPE_SMS_NO_SHOW_REQUEST'
				| 'TYPE_CAMPAIGN_SMS'
				| 'TYPE_CAMPAIGN_CALL'
				| 'TYPE_CAMPAIGN_EMAIL'
				| 'TYPE_CAMPAIGN_VOICEMAIL'
				| 'TYPE_FACEBOOK'
				| 'TYPE_CAMPAIGN_FACEBOOK'
				| 'TYPE_CAMPAIGN_MANUAL_CALL'
				| 'TYPE_CAMPAIGN_MANUAL_SMS'
				| 'TYPE_GMB'
				| 'TYPE_CAMPAIGN_GMB'
				| 'TYPE_REVIEW'
				| 'TYPE_INSTAGRAM'
				| 'TYPE_WHATSAPP'
				| 'TYPE_CUSTOM_SMS'
				| 'TYPE_CUSTOM_EMAIL'
				| 'TYPE_CUSTOM_PROVIDER_SMS'
				| 'TYPE_CUSTOM_PROVIDER_EMAIL'
				| 'TYPE_IVR_CALL'
				| 'TYPE_ACTIVITY_CONTACT'
				| 'TYPE_ACTIVITY_INVOICE'
				| 'TYPE_ACTIVITY_PAYMENT'
				| 'TYPE_ACTIVITY_OPPORTUNITY'
				| 'TYPE_LIVE_CHAT'
				| 'TYPE_LIVE_CHAT_INFO_MESSAGE'
				| 'TYPE_ACTIVITY_APPOINTMENT'
				| 'TYPE_FACEBOOK_COMMENT'
				| 'TYPE_INSTAGRAM_COMMENT'
				| 'TYPE_ACTIVITY'
			/**
			 * @description Location Id
			 * @example ABCHkzuJQ8ZMd4Te84GK
			 */
			locationId: string
			/**
			 * @description Phone number of the contact
			 * @example +15550001234
			 */
			phone: string
			/**
			 * @description Type of the conversation
			 * @example TYPE_PHONE
			 * @enum {string}
			 */
			type: 'TYPE_PHONE' | 'TYPE_EMAIL' | 'TYPE_FB_MESSENGER' | 'TYPE_REVIEW'
			/**
			 * @description Unread count of the messages in the conversation
			 * @example 1
			 */
			unreadCount: number
		}
		CreateConversationDto: {
			/**
			 * @description Contact ID as string
			 * @example tDtDnQdgm2LXpyiqYvZ6
			 */
			contactId: string
			/**
			 * @description Location ID as string
			 * @example tDtDnQdgm2LXpyiqYvZ6
			 */
			locationId: string
		}
		DeleteConversationSuccessfulResponse: {
			/**
			 * @description Boolean value as the API response.
			 * @example true
			 */
			success: boolean
		}
		ErrorDto: {
			/**
			 * @description Error Code
			 * @example 1
			 */
			code: string
			/**
			 * @description Error Message
			 * @example There was an error from the provider
			 */
			message: string
			/**
			 * @description Error Type
			 * @example saas
			 */
			type: string
		}
		GetConversationByIdResponse: {
			assignedTo: string
			contactId: string
			deleted: boolean
			id: string
			inbox: boolean
			locationId: string
			starred?: boolean
			type: number
			unreadCount: number
		}
		GetConversationSuccessfulResponse: {
			/** @description Conversation data of the provided conversation ID. */
			conversation: components['schemas']['ConversationDto']
			/**
			 * @description Boolean value as the API response.
			 * @example true
			 */
			success: boolean
		}
		GetEmailMessageResponseDto: {
			/**
			 * @description External Id
			 * @example ve9EPM428h8vShlRW1KT
			 */
			altId?: string
			/** @description An array of attachment URLs. */
			attachments?: string[]
			/** @description List of email Ids of the people in the bcc field */
			bcc?: string[]
			/** @example Hi there */
			body: string
			/** @description List of email Ids of the people in the cc field */
			cc?: string[]
			/** @example ve9EPM428h8vShlRW1KT */
			contactId: string
			/** @example text/plain */
			contentType: string
			/** @example ve9EPM428h8vShlRW1KT */
			conversationId: string
			/** @example 2024-03-27T18:13:49.000Z */
			dateAdded: string
			/** @enum {string} */
			direction: 'inbound' | 'outbound'
			/** @description Name and Email Id of the sender */
			from: string
			/** @example ve9EPM428h8vShlRW1KT */
			id: string
			/** @example ve9EPM428h8vShlRW1KT */
			locationId: string
			provider?: string
			/** @description In case of reply, email message Id of the reply to email */
			replyToMessageId?: string
			/**
			 * @description Email Message source
			 * @enum {string}
			 */
			source?: 'workflow' | 'bulk_actions' | 'campaign' | 'api' | 'app'
			/** @enum {string} */
			status?:
				| 'pending'
				| 'scheduled'
				| 'sent'
				| 'delivered'
				| 'read'
				| 'undelivered'
				| 'connected'
				| 'failed'
				| 'opened'
			/** @example Order confirm */
			subject?: string
			/**
			 * @description Message Id or thread Id
			 * @example ve9EPM428h8vShlRW1KT
			 */
			threadId: string
			/** @description List of email Ids of the receivers */
			to: string[]
		}
		GetMessageResponseDto: {
			/** @description An array of attachment URLs. Attachments will be empty for Call and Voicemails, type 1 and 10. Please use get call recording API to fetch call recording and voicemails. */
			attachments?: string[]
			/** @example Hi there */
			body?: string
			/** @example ve9EPM428h8vShlRW1KT */
			contactId: string
			/** @example text/plain */
			contentType: string
			/** @example ve9EPM428h8vShlRW1KT */
			conversationId: string
			/** @example 2024-03-27T18:13:49.000Z */
			dateAdded: string
			/** @enum {string} */
			direction: 'inbound' | 'outbound'
			/** @example ve9EPM428h8vShlRW1KT */
			id: string
			/** @example ve9EPM428h8vShlRW1KT */
			locationId: string
			/**
			 * @description Type of the message as a string
			 * @example SMS
			 * @enum {string}
			 */
			messageType:
				| 'TYPE_CALL'
				| 'TYPE_SMS'
				| 'TYPE_EMAIL'
				| 'TYPE_SMS_REVIEW_REQUEST'
				| 'TYPE_WEBCHAT'
				| 'TYPE_SMS_NO_SHOW_REQUEST'
				| 'TYPE_CAMPAIGN_SMS'
				| 'TYPE_CAMPAIGN_CALL'
				| 'TYPE_CAMPAIGN_EMAIL'
				| 'TYPE_CAMPAIGN_VOICEMAIL'
				| 'TYPE_FACEBOOK'
				| 'TYPE_CAMPAIGN_FACEBOOK'
				| 'TYPE_CAMPAIGN_MANUAL_CALL'
				| 'TYPE_CAMPAIGN_MANUAL_SMS'
				| 'TYPE_GMB'
				| 'TYPE_CAMPAIGN_GMB'
				| 'TYPE_REVIEW'
				| 'TYPE_INSTAGRAM'
				| 'TYPE_WHATSAPP'
				| 'TYPE_CUSTOM_SMS'
				| 'TYPE_CUSTOM_EMAIL'
				| 'TYPE_CUSTOM_PROVIDER_SMS'
				| 'TYPE_CUSTOM_PROVIDER_EMAIL'
				| 'TYPE_IVR_CALL'
				| 'TYPE_ACTIVITY_CONTACT'
				| 'TYPE_ACTIVITY_INVOICE'
				| 'TYPE_ACTIVITY_PAYMENT'
				| 'TYPE_ACTIVITY_OPPORTUNITY'
				| 'TYPE_LIVE_CHAT'
				| 'TYPE_LIVE_CHAT_INFO_MESSAGE'
				| 'TYPE_ACTIVITY_APPOINTMENT'
				| 'TYPE_FACEBOOK_COMMENT'
				| 'TYPE_INSTAGRAM_COMMENT'
				| 'TYPE_CUSTOM_CALL'
				| 'TYPE_ACTIVITY'
			/**
			 * @description meta will contain email, for message type 3 (email). messageIds is list of all email message ids under the message thread
			 * @example {
			 *       "email": {
			 *         "messageIds": [
			 *           "p1mRSHeLDhAms5q0LMr4"
			 *         ]
			 *       }
			 *     }
			 */
			meta?: Record<string, never>
			/**
			 * @description Message source
			 * @enum {string}
			 */
			source?: 'workflow' | 'bulk_actions' | 'campaign' | 'api' | 'app'
			/** @enum {string} */
			status?:
				| 'pending'
				| 'scheduled'
				| 'sent'
				| 'delivered'
				| 'read'
				| 'undelivered'
				| 'connected'
				| 'failed'
				| 'opened'
			/** @example 1 */
			type: number
			/**
			 * @description User Id
			 * @example ve9EPM428kjkvShlRW1KT
			 */
			userId?: string
		}
		GetMessagesByConversationResponseDto: {
			/**
			 * @description Id of the last message in the messages array
			 * @example p1mRSHeLDhAms5q0LMr4
			 */
			lastMessageId: string
			/** @description Array of messages */
			messages: components['schemas']['GetMessageResponseDto'][]
			/**
			 * @description Next page value true indicates only 20 message is in the response. Rest of the messages are in the next page. Please use the lastMessageId value in the query to get the next page messages
			 * @example true
			 */
			nextPage: boolean
		}
		GetMessageTranscriptionResponseDto: {
			/**
			 * @description Confidence of the transcription
			 * @example 0.5
			 */
			confidence: number
			/**
			 * @description End time of the sentence in milliseconds
			 * @example 45
			 */
			endTime: number
			/**
			 * @description Media channel describes the user interaction channel
			 * @example 1
			 */
			mediaChannel: number
			/**
			 * @description Index of the sentence in the transcription
			 * @example 1
			 */
			sentenceIndex: number
			/**
			 * @description Start time of the sentence in milliseconds
			 * @example 34
			 */
			startTime: number
			/**
			 * @description Transcript of the sentence
			 * @example This call may be recorded for quality assurance purposes.
			 */
			transcript: string
		}
		ProcessMessageBodyDto: {
			/**
			 * @description external mail provider's message id
			 * @example 61d6d1f9cdac7612faf80753
			 */
			altId?: string
			/** @description Array of attachments */
			attachments?: string[]
			/** @description Phone call dialer and receiver information */
			call?: components['schemas']['CallDataDTO']
			/**
			 * @description Conversation Id
			 * @example ve9EPM428h8vShlRW1KT
			 */
			conversationId: string
			/**
			 * @description Conversation Provider Id
			 * @example 61d6d1f9cdac7612faf80753
			 */
			conversationProviderId: string
			/**
			 * Format: date-time
			 * @description Date of the inbound message
			 */
			date?: string
			/**
			 * @description Message direction, if required can be set manually, default is outbound
			 * @default outbound
			 * @example [
			 *       "outbound",
			 *       "inbound"
			 *     ]
			 */
			direction: Record<string, never>
			/**
			 * @description List of email address to BCC
			 * @example [
			 *       "john1@doe.com",
			 *       "john2@doe.com"
			 *     ]
			 */
			emailBcc?: string[]
			/**
			 * @description List of email address to CC
			 * @example [
			 *       "john1@doe.com",
			 *       "john2@doe.com"
			 *     ]
			 */
			emailCc?: string[]
			/** @description From Email Address */
			emailFrom?: string
			/** @description Send the email message id for which this email should be threaded. This is for replying to a specific email */
			emailMessageId?: string
			/** @description To Email Address */
			emailTo?: string
			/** @description HTML Body of Email */
			html?: string
			/** @description Message Body */
			message?: string
			/** @description Subject of the Email */
			subject?: string
			/**
			 * @description Message Type
			 * @example SMS
			 * @enum {string}
			 */
			type:
				| 'SMS'
				| 'Email'
				| 'WhatsApp'
				| 'GMB'
				| 'IG'
				| 'FB'
				| 'Custom'
				| 'WebChat'
				| 'Live_Chat'
				| 'Call'
		}
		ProcessMessageResponseDto: {
			contactId?: string
			/**
			 * @description Conversation ID.
			 * @example ABC12h2F6uBrIkfXYazb
			 */
			conversationId: string
			/** Format: date-time */
			dateAdded?: string
			emailMessageId?: string
			message: string
			/**
			 * @description This is the main Message ID
			 * @example t22c6DQcTDf3MjRhwf77
			 */
			messageId: string
			success: boolean
		}
		ProcessOutboundMessageBodyDto: {
			/**
			 * @description external mail provider's message id
			 * @example 61d6d1f9cdac7612faf80753
			 */
			altId?: string
			/** @description Array of attachments */
			attachments?: string[]
			/** @description Phone call dialer and receiver information */
			call?: components['schemas']['CallDataDTO']
			/**
			 * @description Conversation Id
			 * @example ve9EPM428h8vShlRW1KT
			 */
			conversationId: string
			/**
			 * @description Conversation Provider Id
			 * @example 61d6d1f9cdac7612faf80753
			 */
			conversationProviderId: string
			/**
			 * Format: date-time
			 * @description Date of the outbound message
			 */
			date?: string
			/**
			 * @description Message Type
			 * @example Call
			 * @enum {string}
			 */
			type: 'Call'
		}
		SendConversationResponseDto: {
			/** @description The list of all conversations found for the given query */
			conversations: components['schemas']['ConversationSchema'][]
			/**
			 * @description Total Number of results found for the given query
			 * @example 100
			 */
			total: number
		}
		SendMessageBodyDto: {
			appointmentId?: string
			attachments?: string[]
			contactId: string
			conversationProviderId?: string
			emailBcc?: string[]
			emailCc?: string[]
			emailFrom?: string
			/** @enum {string} */
			emailReplyMode?: 'reply' | 'reply_all'
			/** @description `emailTo` field is used when you want to send the email to a different email address than the contact's primary email. */
			emailTo?: string
			html?: string
			message?: string
			/** @description Specify the emailId on which the reply needs to go out */
			replyMessageId?: string
			/**
			 * @description UTC Timestamp (in seconds) at which the message should be scheduled
			 * @example 1669287863
			 */
			scheduledTimestamp?: number
			subject?: string
			templateId?: string
			/** @enum {string} */
			type:
				| 'SMS'
				| 'Email'
				| 'WhatsApp'
				| 'GMB'
				| 'IG'
				| 'FB'
				| 'Custom'
				| 'Live_Chat'
		}
		SendMessageResponseDto: {
			/**
			 * @description Conversation ID.
			 * @example ABC12h2F6uBrIkfXYazb
			 */
			conversationId: string
			/**
			 * @description This contains the email message id (only for Email type). Use this ID to send inbound replies to GHL to create a threaded email.
			 * @example rnGyqh2F6uBrIkfhFo9A
			 */
			emailMessageId?: string
			/**
			 * @description This is the main Message ID
			 * @example t22c6DQcTDf3MjRhwf77
			 */
			messageId: string
			/** @description When sending via the GMB channel, we will be returning list of `messageIds` instead of single `messageId`. */
			messageIds?: string[]
			/**
			 * @description Additional response message when sending a workflow message
			 * @example Message queued successfully.
			 */
			msg?: string
		}
		StartAfterArrayNumberSchema: {
			/**
			 * @description Search to begin after the specified date - should contain the sort value of the last document
			 * @example [
			 *       1600854,
			 *       1600851
			 *     ]
			 */
			startAfterDate?: string[]
		}
		StartAfterNumberSchema: {
			/**
			 * @description Search to begin after the specified date - should contain the sort value of the last document
			 * @example 1600854
			 */
			startAfterDate?: number
		}
		UnauthorizedDTO: {
			/** @example Unauthorized */
			error?: string
			/** @example Invalid token: access token is invalid */
			message?: string
			/** @example 401 */
			statusCode?: number
		}
		UpdateConversationDto: {
			feedback?: Record<string, never>
			/**
			 * @description Location ID as string
			 * @example tDtDnQdgm2LXpyiqYvZ6
			 */
			locationId: string
			/**
			 * @description Starred status of the conversation.
			 * @example true
			 */
			starred?: boolean
			/**
			 * @description Count of unread messages in the conversation
			 * @example 1
			 */
			unreadCount?: number
		}
		UpdateMessageStatusDto: {
			/**
			 * @description Email message Id
			 * @example ve9EPM428h8vShlRW1KT
			 */
			emailMessageId?: string
			/** @description Error object from the conversation provider */
			error?: components['schemas']['ErrorDto']
			/** @description Email delivery status for additional email recipients. */
			recipients?: string[]
			/**
			 * @description Message status
			 * @example read
			 * @enum {string}
			 */
			status: 'read' | 'pending' | 'delivered' | 'failed'
		}
		UploadFilesDto: {
			attachmentUrls: string[]
			/**
			 * @description Conversation Id
			 * @example ve9EPM428h8vShlRW1KT
			 */
			conversationId: string
			locationId: string
		}
		UploadFilesErrorResponseDto: {
			/**
			 * @description Error message of the request
			 * @example Failed to upload the files
			 */
			message: string
			/**
			 * @description HTTP Status code of the request
			 * @example 413
			 * @enum {number}
			 */
			status: 400 | 413 | 415
		}
		UploadFilesResponseDto: {
			uploadedFiles: Record<string, never>
		}
	}
	responses: never
	parameters: never
	requestBodies: never
	headers: never
	pathItems: never
}
export type $defs = Record<string, never>
export interface operations {
	'create-conversation': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path?: never
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['CreateConversationDto']
			}
		}
		responses: {
			/** @description Successful response */
			201: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['GetConversationSuccessfulResponse']
				}
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
		}
	}
	'get-conversation': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				/**
				 * @description Conversation ID as string
				 * @example tDtDnQdgm2LXpyiqYvZ6
				 */
				conversationId: string
			}
			cookie?: never
		}
		requestBody?: never
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['GetConversationByIdResponse']
				}
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
		}
	}
	'update-conversation': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				/**
				 * @description Conversation ID as string
				 * @example tDtDnQdgm2LXpyiqYvZ6
				 */
				conversationId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['UpdateConversationDto']
			}
		}
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['GetConversationSuccessfulResponse']
				}
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
		}
	}
	'delete-conversation': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				/**
				 * @description Conversation ID as string
				 * @example tDtDnQdgm2LXpyiqYvZ6
				 */
				conversationId: string
			}
			cookie?: never
		}
		requestBody?: never
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['DeleteConversationSuccessfulResponse']
				}
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
		}
	}
	'get-messages': {
		parameters: {
			query?: {
				/**
				 * @description Message ID of the last message in the list as a string
				 * @example tDtDnQdgm2LXpyiqYvZ6
				 */
				lastMessageId?: string
				/**
				 * @description Number of messages to be fetched from the conversation. Default limit is 20
				 * @example 20
				 */
				limit?: number
				/**
				 * @description Types of message to fetched separated with comma
				 * @example TYPE_SMS,TYPE_CALL
				 */
				type?:
					| 'TYPE_CALL'
					| 'TYPE_SMS'
					| 'TYPE_EMAIL'
					| 'TYPE_FACEBOOK'
					| 'TYPE_GMB'
					| 'TYPE_INSTAGRAM'
					| 'TYPE_WHATSAPP'
					| 'TYPE_ACTIVITY_CONTACT'
					| 'TYPE_ACTIVITY_INVOICE'
					| 'TYPE_ACTIVITY_PAYMENT'
					| 'TYPE_ACTIVITY_OPPORTUNITY'
					| 'TYPE_LIVE_CHAT'
					| 'TYPE_ACTIVITY_APPOINTMENT'
			}
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				/**
				 * @description Conversation ID as string
				 * @example tDtDnQdgm2LXpyiqYvZ6
				 */
				conversationId: string
			}
			cookie?: never
		}
		requestBody?: never
		responses: {
			/** @description List of messages for the conversation id of the given type. */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['GetMessagesByConversationResponseDto']
				}
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
		}
	}
	'get-message-transcription': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				/**
				 * @description Location ID as string
				 * @example tDtDnQdgm2LXpyiqYvZ6
				 */
				locationId: string
				/**
				 * @description Message ID as string
				 * @example tDtDnQdgm2LXpyiqYvZ6
				 */
				messageId: string
			}
			cookie?: never
		}
		requestBody?: never
		responses: {
			/** @description Gives the attached recording transcription to the message */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['GetMessageTranscriptionResponseDto']
				}
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
		}
	}
	'download-message-transcription': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				/**
				 * @description Location ID as string
				 * @example tDtDnQdgm2LXpyiqYvZ6
				 */
				locationId: string
				/**
				 * @description Message ID as string
				 * @example tDtDnQdgm2LXpyiqYvZ6
				 */
				messageId: string
			}
			cookie?: never
		}
		requestBody?: never
		responses: {
			/** @description Downloads the attached transcription of the message */
			200: {
				headers: {
					/** @description Attachment; filename="transcription.txt" */
					'Content-Disposition'?: unknown
					/** @description text/plain */
					'Content-Type'?: unknown
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']
				}
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
		}
	}
	'send-a-new-message': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path?: never
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['SendMessageBodyDto']
			}
		}
		responses: {
			/** @description Created the message */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['SendMessageResponseDto']
				}
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
		}
	}
	'get-message': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path?: never
			cookie?: never
		}
		requestBody?: never
		responses: {
			/** @description Message object for the id given. */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['GetMessageResponseDto']
				}
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
		}
	}
	'get-message-recording': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				/**
				 * @description Location ID as string
				 * @example tDtDnQdgm2LXpyiqYvZ6
				 */
				locationId: string
				/**
				 * @description Message ID as string
				 * @example tDtDnQdgm2LXpyiqYvZ6
				 */
				messageId: string
			}
			cookie?: never
		}
		requestBody?: never
		responses: {
			/** @description Gives the attached recording to the message */
			200: {
				headers: {
					/** @description Attachment; filename=audio.wav */
					'Content-Disposition'?: unknown
					/** @description audio/x-wav */
					'Content-Type'?: unknown
					[name: string]: unknown
				}
				content?: never
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
		}
	}
	'cancel-scheduled-message': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				/**
				 * @description Message Id
				 * @example ve9EPM428h8vShlRW1KT
				 */
				messageId: string
			}
			cookie?: never
		}
		requestBody?: never
		responses: {
			/** @description The scheduled message was cancelled successfully */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['CancelScheduledResponseDto']
				}
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
		}
	}
	'update-message-status': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				/**
				 * @description Message Id
				 * @example ve9EPM428h8vShlRW1KT
				 */
				messageId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['UpdateMessageStatusDto']
			}
		}
		responses: {
			/** @description Created the message */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['SendMessageResponseDto']
				}
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
		}
	}
	'cancel-scheduled-email-message': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
			}
			path: {
				/**
				 * @description Email Message Id
				 * @example ve9EPM428h8vShlRW1KT
				 */
				emailMessageId: string
			}
			cookie?: never
		}
		requestBody?: never
		responses: {
			/** @description The scheduled email message was cancelled successfully */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['CancelScheduledResponseDto']
				}
			}
		}
	}
	'get-email-by-id': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
			}
			path?: never
			cookie?: never
		}
		requestBody?: never
		responses: {
			/** @description Email object for the id given. */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['GetEmailMessageResponseDto']
				}
			}
		}
	}
	'add-an-inbound-message': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path?: never
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['ProcessMessageBodyDto']
			}
		}
		responses: {
			/** @description Created the message */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['ProcessMessageResponseDto']
				}
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
		}
	}
	'add-an-outbound-message': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path?: never
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['ProcessOutboundMessageBodyDto']
			}
		}
		responses: {
			/** @description Created the message */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['ProcessMessageResponseDto']
				}
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
		}
	}
	'upload-file-attachments': {
		parameters: {
			query?: never
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path?: never
			cookie?: never
		}
		requestBody: {
			content: {
				'multipart/form-data': components['schemas']['UploadFilesDto']
			}
		}
		responses: {
			/** @description Uploaded the file successfully */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UploadFilesResponseDto']
				}
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
			/** @description Payload Too Large */
			413: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UploadFilesErrorResponseDto']
				}
			}
			/** @description Unsupported Media Type */
			415: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UploadFilesErrorResponseDto']
				}
			}
		}
	}
	'search-conversation': {
		parameters: {
			query: {
				/**
				 * @description Assigned to user Id. Multiple values are comma separated. "unassigned" is used to fetch all unassigned conversations
				 * @example ABCHkzuJQ8ZMd4Te84GK,fGiae4CHkzoskh8thsik
				 */
				assignedTo?: string
				/**
				 * @description Contact Id
				 * @example 9VEmS0si86GW6gXWU89b
				 */
				contactId?: string
				/**
				 * @description Id of the conversation
				 * @example ABCHkzuJQ8ZMd4Te84GK
				 */
				id?: string
				/**
				 * @description Action of the last outbound message in the conversation as string.
				 * @example manual
				 */
				lastMessageAction?: 'automated' | 'manual'
				/**
				 * @description Direction of the last message in the conversation as string.
				 * @example inbound
				 */
				lastMessageDirection?: 'inbound' | 'outbound'
				/**
				 * @description Type of the last message in the conversation as a string
				 * @example TYPE_SMS
				 */
				lastMessageType?:
					| 'TYPE_CALL'
					| 'TYPE_SMS'
					| 'TYPE_EMAIL'
					| 'TYPE_SMS_REVIEW_REQUEST'
					| 'TYPE_WEBCHAT'
					| 'TYPE_SMS_NO_SHOW_REQUEST'
					| 'TYPE_CAMPAIGN_SMS'
					| 'TYPE_CAMPAIGN_CALL'
					| 'TYPE_CAMPAIGN_EMAIL'
					| 'TYPE_CAMPAIGN_VOICEMAIL'
					| 'TYPE_FACEBOOK'
					| 'TYPE_CAMPAIGN_FACEBOOK'
					| 'TYPE_CAMPAIGN_MANUAL_CALL'
					| 'TYPE_CAMPAIGN_MANUAL_SMS'
					| 'TYPE_GMB'
					| 'TYPE_CAMPAIGN_GMB'
					| 'TYPE_REVIEW'
					| 'TYPE_INSTAGRAM'
					| 'TYPE_WHATSAPP'
					| 'TYPE_CUSTOM_SMS'
					| 'TYPE_CUSTOM_EMAIL'
					| 'TYPE_CUSTOM_PROVIDER_SMS'
					| 'TYPE_CUSTOM_PROVIDER_EMAIL'
					| 'TYPE_IVR_CALL'
					| 'TYPE_ACTIVITY_CONTACT'
					| 'TYPE_ACTIVITY_INVOICE'
					| 'TYPE_ACTIVITY_PAYMENT'
					| 'TYPE_ACTIVITY_OPPORTUNITY'
					| 'TYPE_LIVE_CHAT'
					| 'TYPE_LIVE_CHAT_INFO_MESSAGE'
					| 'TYPE_ACTIVITY_APPOINTMENT'
					| 'TYPE_FACEBOOK_COMMENT'
					| 'TYPE_INSTAGRAM_COMMENT'
					| 'TYPE_ACTIVITY'
				/**
				 * @description Limit of conversations - Default is 20
				 * @example 20
				 */
				limit?: number
				/**
				 * @description Location Id
				 * @example ABCHkzuJQ8ZMd4Te84GK
				 */
				locationId: string
				/**
				 * @description Search paramater as a string
				 * @example Search string
				 */
				query?: string
				/**
				 * @description Id of score profile on which conversations should get filtered out, works with scoreProfileMin & scoreProfileMax
				 * @example ABCHkzuJQ8ZMd4Te84GK
				 */
				scoreProfile?: string
				/**
				 * @description Maximum value for score
				 * @example ABCHkzuJQ8ZMd4Te84GK
				 */
				scoreProfileMax?: number
				/**
				 * @description Minimum value for score
				 * @example ABCHkzuJQ8ZMd4Te84GK
				 */
				scoreProfileMin?: number
				/**
				 * @description Sort paramater - asc or desc
				 * @example asc
				 */
				sort?: 'asc' | 'desc'
				/**
				 * @description The sorting of the conversation to be filtered as - manual messages or all messages
				 * @example last_message_date
				 */
				sortBy?:
					| 'last_manual_message_date'
					| 'last_message_date'
					| 'score_profile'
				/**
				 * @description Id of score profile on which sortBy.ScoreProfile should sort on
				 * @example ABCHkzuJQ8ZMd4Te84GK
				 */
				sortScoreProfile?: string
				/**
				 * @description Search to begin after the specified date - should contain the sort value of the last document
				 * @example 1600854
				 */
				startAfterDate?: Record<string, never>
				/**
				 * @description The status of the conversation to be filtered - all, read, unread, starred
				 * @example all
				 */
				status?: 'all' | 'read' | 'unread' | 'starred' | 'recents'
			}
			header: {
				/** @description Access Token */
				Authorization: string
				/** @description API Version */
				Version: '2021-04-15'
			}
			path?: never
			cookie?: never
		}
		requestBody?: never
		responses: {
			/** @description Successfully fetched the conversations */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['SendConversationResponseDto']
				}
			}
			/** @description Bad Request */
			400: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['BadRequestDTO']
				}
			}
			/** @description Unauthorized */
			401: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnauthorizedDTO']
				}
			}
		}
	}
}
