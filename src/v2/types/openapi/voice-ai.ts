export interface paths {
	'/voice-ai/actions': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Create Agent Action
		 * @description Create a new action for a voice AI agent. Actions define specific behaviors and capabilities for the agent during calls.
		 */
		post: operations['create-action']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/voice-ai/actions/{actionId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get Agent Action
		 * @description Retrieve details of a specific action by its ID. Returns the action configuration including actionParameters.
		 */
		get: operations['get-action']
		/**
		 * Update Agent Action
		 * @description Update an existing action for a voice AI agent. Modifies the behavior and configuration of an agent action.
		 */
		put: operations['update-action']
		post?: never
		/**
		 * Delete Agent Action
		 * @description Delete an existing action from a voice AI agent. This permanently removes the action and its configuration.
		 */
		delete: operations['delete-action']
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/voice-ai/agents': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * List Agents
		 * @description Retrieve a paginated list of agents for given location.
		 */
		get: operations['get-agents']
		put?: never
		/**
		 * Create Agent
		 * @description Create a new voice AI agent configuration and settings
		 */
		post: operations['create-agent']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/voice-ai/agents/{agentId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get Agent
		 * @description Retrieve detailed configuration and settings for a specific voice AI agent
		 */
		get: operations['get-agent']
		put?: never
		post?: never
		/**
		 * Delete Agent
		 * @description Delete a voice AI agent and all its configurations
		 */
		delete: operations['delete-agent']
		options?: never
		head?: never
		/**
		 * Patch Agent
		 * @description Partially update an existing voice AI agent
		 */
		patch: operations['patch-agent']
		trace?: never
	}
	'/voice-ai/dashboard/call-logs': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * List Call Logs
		 * @description Returns call logs for Voice AI agents scoped to a location. Supports filtering by agent, contact, call type, action types, and date range (interpreted in the provided IANA timezone). Also supports sorting and 1-based pagination.
		 */
		get: operations['get-call-logs']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/voice-ai/dashboard/call-logs/{callId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get Call Log
		 * @description Returns a call log by callId.
		 */
		get: operations['getCallLog']
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
export interface components {
	schemas: {
		AgentActionResponseDTO: {
			/** @description Action parameters - structure varies by actionType */
			actionParameters:
				| components['schemas']['CallTransferActionParameters']
				| components['schemas']['DataExtractionActionParameters']
				| components['schemas']['InCallDataExtractionActionParameters']
				| components['schemas']['WorkflowTriggerParameters']
				| components['schemas']['SMSParameters']
				| components['schemas']['AppointmentBookingActionParameters']
				| components['schemas']['CustomActionParameters']
			/**
			 * @description Type of action
			 * @example CALL_TRANSFER
			 * @enum {string}
			 */
			actionType:
				| 'CALL_TRANSFER'
				| 'DATA_EXTRACTION'
				| 'IN_CALL_DATA_EXTRACTION'
				| 'WORKFLOW_TRIGGER'
				| 'SMS'
				| 'APPOINTMENT_BOOKING'
				| 'CUSTOM_ACTION'
			/**
			 * @description Unique identifier for this action
			 * @example 507f1f77bcf86cd799439011
			 */
			id: string
			/**
			 * @description Human-readable name for this action
			 * @example Transfer to Manager
			 */
			name: string
		}
		AgentCreationRequestDTO: {
			/**
			 * @description Display name for the voice AI agent, between 1-40 characters. Default: "My Agent {random 3 digit number}"
			 * @example Customer Support Agent
			 */
			agentName?: string
			/**
			 * @description Custom instructions defining the agent's behavior and personality. Default: Basic prompt generated automatically
			 * @example You are a helpful customer service representative. Always be polite and professional.
			 */
			agentPrompt?: string
			/** @description Time intervals defining when the agent accepts calls, organized by day of week. Default: [] (available 24/7) */
			agentWorkingHours?: components['schemas']['AgentWorkingHoursDTO'][]
			/**
			 * @description Name of the business this agent represents. Default: Uses location name
			 * @example Acme Corporation
			 */
			businessName?: string
			/**
			 * @description Array of workflow IDs to trigger automatically when calls end. Default: []
			 * @example [
			 *       "wf_507f1f77bcf86cd799439011",
			 *       "wf_507f1f77bcf86cd799439012"
			 *     ]
			 */
			callEndWorkflowIds?: string[]
			/**
			 * @description Phone number for receiving inbound calls to this agent. Default: null
			 * @example +1234567890
			 */
			inboundNumber?: string
			/**
			 * @description Prevents this agent from being used as a fallback option. Default: false (Available as backup agent)
			 * @example false
			 */
			isAgentAsBackupDisabled?: boolean
			/** @example en-US */
			language?: components['schemas']['VoiceAILanguage']
			/**
			 * @description Unique identifier for the location where this agent will operate
			 * @example LOC123456789ABCDEF
			 */
			locationId?: string
			/**
			 * @description Maximum call duration in seconds, between 180-900 (3-15 minutes). Default: 300 seconds (5 minutes)
			 * @example 600
			 */
			maxCallDuration?: number
			/**
			 * @description Identifier for the number pool managing phone number allocation. Default: null
			 * @example pool_507f1f77bcf86cd799439011
			 */
			numberPoolId?: string
			/** @example low */
			patienceLevel?: components['schemas']['PatienceLevel']
			/**
			 * @description Seconds to wait before sending idle reminders, between 1-20. Default: 8 seconds
			 * @example 5
			 */
			reminderAfterIdleTimeSeconds?: number
			/** @description Configuration for post-call email notifications to various recipients. Default: [] */
			sendPostCallNotificationTo?: components['schemas']['SendPostCallNotificationDTO']
			/**
			 * @description Enables automatic reminders when callers are silent. Default: true
			 * @example true
			 */
			sendUserIdleReminders?: boolean
			/**
			 * @description IANA timezone identifier affecting working hours and scheduling. Default: Location timezone
			 * @example America/New_York
			 */
			timezone?: string
			/** @description Language translation settings including enablement flag and target language code. Rules: (1) translation.enabled can only be true if the agent's language is not en-US; (2) when enabled, translation.language must be either the agent's language or en-US; (3) when enabled, translation.language is required. */
			translation?: components['schemas']['TranslationDTO']
			/**
			 * @description Identifier for the speech synthesis voice from available voice options. Default: Auto generated
			 * @example 507f1f77bcf86cd799439011
			 */
			voiceId?: string
			/**
			 * @description Initial greeting spoken when the agent answers calls. Default: Auto generated
			 * @example Hello! Thank you for calling Acme Corporation. How can I assist you today?
			 */
			welcomeMessage?: string
		}
		AgentWorkingHoursDTO: {
			/**
			 * @description Day of the week for this working hours configuration (Monday=1 to Sunday=7)
			 * @example 1
			 * @enum {number}
			 */
			dayOfTheWeek: 1 | 2 | 3 | 4 | 5 | 6 | 7
			/**
			 * @description Array of time intervals when the agent is available on this day
			 * @example [
			 *       {
			 *         "startHour": 9,
			 *         "startMinute": 0,
			 *         "endHour": 17,
			 *         "endMinute": 30
			 *       }
			 *     ]
			 */
			intervals: components['schemas']['IntervalDTO'][]
		}
		AppointmentBookingActionParameters: {
			/**
			 * @description Calendar ID to book appointments in
			 * @example 507f1f77bcf86cd799439011
			 */
			calendarId: string
			/**
			 * @description Number of days ahead to offer booking dates
			 * @example 3
			 */
			daysOfOfferingDates: number
			/**
			 * @description Hours between available slots
			 * @example 1
			 */
			hoursBetweenSlots: number
			/**
			 * @description Number of available slots per day
			 * @example 3
			 */
			slotsPerDay: number
		}
		BadRequestDTO: {
			/** @example Bad Request */
			message?: string
			/** @example 400 */
			statusCode?: number
		}
		CallActionSchema: {
			/**
			 * @description Action ID reference
			 * @example 507f1f77bcf86cd799439015
			 */
			actionId?: string
			/**
			 * @description Action name
			 * @example Send SMS Confirmation
			 */
			actionName: string
			/** @description Action parameters - structure varies by actionType */
			actionParameters?:
				| components['schemas']['CallTransferActionParameters']
				| components['schemas']['DataExtractionActionParameters']
				| components['schemas']['InCallDataExtractionActionParameters']
				| components['schemas']['WorkflowTriggerParameters']
				| components['schemas']['SMSParameters']
				| components['schemas']['AppointmentBookingActionParameters']
				| components['schemas']['CustomActionParameters']
				| components['schemas']['KnowledgeBaseParameters']
			/**
			 * @description Action type
			 * @example SMS
			 * @enum {string}
			 */
			actionType:
				| 'CALL_TRANSFER'
				| 'DATA_EXTRACTION'
				| 'IN_CALL_DATA_EXTRACTION'
				| 'WORKFLOW_TRIGGER'
				| 'SMS'
				| 'APPOINTMENT_BOOKING'
				| 'CUSTOM_ACTION'
			/**
			 * @description Action description
			 * @example When caller asks for booking confirmation
			 */
			description?: string
			/**
			 * Format: date-time
			 * @description When the action was executed
			 * @example 2024-01-15T10:32:00.000Z
			 */
			executedAt?: string
			/**
			 * Format: date-time
			 * @description When the trigger was received
			 * @example 2024-01-15T10:31:45.000Z
			 */
			triggerReceivedAt?: string
		}
		CallLogDTO: {
			/**
			 * @description Agent ID associated with the call
			 * @example 507f1f77bcf86cd799439013
			 */
			agentId: string
			/**
			 * @description Associated contact ID
			 * @example 507f1f77bcf86cd799439012
			 */
			contactId?: string
			/**
			 * Format: date-time
			 * @description Timestamp when the call was created
			 * @example 2024-01-15T10:30:00.000Z
			 */
			createdAt: string
			/**
			 * @description Call duration in seconds
			 * @example 180
			 */
			duration: number
			/**
			 * @description Actions performed during the call
			 * @example [
			 *       {
			 *         "actionId": "507f1f77bcf86cd799439015",
			 *         "actionType": "CALL_TRANSFER",
			 *         "actionName": "Transfer to Manager",
			 *         "description": "Transfers call to a manager when customer requests escalation",
			 *         "actionParameters": {
			 *           "transferToType": "number",
			 *           "transferToValue": "+12345678901",
			 *           "triggerMessage": "Let me transfer you to a manager right away",
			 *           "hearWhisperMessage": true
			 *         },
			 *         "executedAt": "2024-01-15T10:32:00.000Z"
			 *       },
			 *       {
			 *         "actionId": "507f1f77bcf86cd799439016",
			 *         "actionType": "SMS",
			 *         "actionName": "Send Confirmation SMS",
			 *         "description": "Sends SMS confirmation to customer",
			 *         "actionParameters": {
			 *           "triggerPrompt": "When caller asks for booking confirmation",
			 *           "triggerMessage": "I'll send you a confirmation text",
			 *           "messageBody": "Your appointment is confirmed for tomorrow at 2 PM"
			 *         },
			 *         "executedAt": "2024-01-15T10:33:30.000Z"
			 *       },
			 *       {
			 *         "actionId": "507f1f77bcf86cd799439017",
			 *         "actionType": "DATA_EXTRACTION",
			 *         "actionName": "Extract Phone Number",
			 *         "description": "Extracts customer phone number for contact record",
			 *         "actionParameters": {
			 *           "contactFieldId": "507f1f77bcf86cd799439018",
			 *           "description": "Customer's phone number",
			 *           "examples": [
			 *             "+1234567890",
			 *             "+9876543210"
			 *           ],
			 *           "overwriteExistingValue": false
			 *         },
			 *         "executedAt": "2024-01-15T10:34:15.000Z"
			 *       },
			 *       {
			 *         "actionId": "507f1f77bcf86cd799439019",
			 *         "actionType": "WORKFLOW_TRIGGER",
			 *         "actionName": "Start Follow-up Workflow",
			 *         "description": "Triggers follow-up workflow for lead nurturing",
			 *         "actionParameters": {
			 *           "triggerPrompt": "When caller requests a quote",
			 *           "triggerMessage": "Let me start that process for you",
			 *           "workflowId": "507f1f77bcf86cd799439020"
			 *         },
			 *         "executedAt": "2024-01-15T10:35:00.000Z"
			 *       },
			 *       {
			 *         "actionId": "507f1f77bcf86cd799439021",
			 *         "actionType": "APPOINTMENT_BOOKING",
			 *         "actionName": "Book Consultation",
			 *         "description": "Books consultation appointment with sales team",
			 *         "actionParameters": {
			 *           "calendarId": "507f1f77bcf86cd799439022",
			 *           "daysOfOfferingDates": 3,
			 *           "slotsPerDay": 3,
			 *           "hoursBetweenSlots": 1
			 *         },
			 *         "executedAt": "2024-01-15T10:36:45.000Z"
			 *       },
			 *       {
			 *         "actionId": "507f1f77bcf86cd799439023",
			 *         "actionType": "CUSTOM_ACTION",
			 *         "actionName": "Check Order Status",
			 *         "description": "Checks order status via external API",
			 *         "actionParameters": {
			 *           "triggerPrompt": "When caller provides order number",
			 *           "triggerMessage": "Let me check that order status",
			 *           "apiDetails": {
			 *             "url": "https://api.example.com/orders",
			 *             "method": "GET",
			 *             "authenticationRequired": true,
			 *             "authenticationValue": "token123",
			 *             "headers": [
			 *               {
			 *                 "key": "Content-Type",
			 *                 "value": "application/json"
			 *               }
			 *             ],
			 *             "parameters": [
			 *               {
			 *                 "name": "orderId",
			 *                 "description": "Order ID to look up",
			 *                 "type": "string",
			 *                 "example": "ORD-12345"
			 *               }
			 *             ]
			 *           },
			 *           "responsePathsToExtract": [
			 *             "data.orderId",
			 *             "status"
			 *           ]
			 *         },
			 *         "executedAt": "2024-01-15T10:37:20.000Z"
			 *       },
			 *       {
			 *         "actionId": "507f1f77bcf86cd799439024",
			 *         "actionType": "IN_CALL_DATA_EXTRACTION",
			 *         "actionName": "Extract Email During Call",
			 *         "description": "Extracts customer email during the call",
			 *         "actionParameters": {
			 *           "contactFieldId": "507f1f77bcf86cd799439025",
			 *           "description": "Customer's email address",
			 *           "examples": [
			 *             "john@example.com",
			 *             "jane@company.com"
			 *           ],
			 *           "overwriteExistingValue": true
			 *         },
			 *         "executedAt": "2024-01-15T10:31:45.000Z"
			 *       },
			 *       {
			 *         "actionId": "507f1f77bcf86cd799439026",
			 *         "actionType": "KNOWLEDGE_BASE",
			 *         "actionName": "Query Product Info",
			 *         "description": "Queries knowledge base for product information",
			 *         "actionParameters": {
			 *           "triggerPrompt": "When caller asks about pricing",
			 *           "triggerMessage": "Let me look that up for you",
			 *           "knowledgeBaseId": "507f1f77bcf86cd799439027",
			 *           "parameters": [
			 *             {
			 *               "name": "category",
			 *               "description": "Product category to search",
			 *               "type": "string",
			 *               "example": "pricing"
			 *             }
			 *           ]
			 *         },
			 *         "executedAt": "2024-01-15T10:38:10.000Z"
			 *       }
			 *     ]
			 */
			executedCallActions: components['schemas']['CallActionSchema'][]
			/**
			 * @description Dynamic data extracted from the call based on agent configuration
			 * @example {
			 *       "phoneNumber": "+1234567890",
			 *       "customerName": "John Doe",
			 *       "email": "john.doe@example.com",
			 *       "companyName": "Acme Corp",
			 *       "customField1": "Custom value",
			 *       "customField2": "Another value"
			 *     }
			 */
			extractedData?: {
				[key: string]: unknown
			} & components['schemas']['ExtractedDataSchema']
			/**
			 * @description Caller phone number
			 * @example +1234567890
			 */
			fromNumber?: string
			/**
			 * @description Unique identifier for the call
			 * @example 507f1f77bcf86cd799439011
			 */
			id: string
			/**
			 * @description Whether the agent is deleted
			 * @example false
			 */
			isAgentDeleted: boolean
			/**
			 * @description Message identifier associated with the call
			 * @example 507f1f77bcf86cd799439014
			 */
			messageId?: string
			/**
			 * @description Call summary
			 * @example Customer called to inquire about product pricing and was transferred to sales team.
			 */
			summary: string
			/**
			 * @description Call transcript
			 * @example bot: Hello, how can I help you today?
			 *     human: I would like to know about your pricing...
			 */
			transcript: string
			/**
			 * @description Transcript translation details
			 * @example {
			 *       "translatedTranscript": "Translated version of the call transcript"
			 *     }
			 */
			translation?: components['schemas']['TranslationSchema']
			/**
			 * @description Whether this call was a trial call
			 * @example false
			 */
			trialCall: boolean
		}
		CallLogsResponseDTO: {
			/** @description Array of call logs */
			callLogs: components['schemas']['CallLogDTO'][]
			/**
			 * @description Page number starting from 1
			 * @example 2
			 */
			page: number
			/**
			 * @description Number of items per page
			 * @example 10
			 */
			pageSize: number
			/**
			 * @description Total number of items
			 * @example 150
			 */
			total: number
		}
		CallTransferActionParameters: {
			/**
			 * @description Whether to play whisper message to the receiving party
			 * @example true
			 */
			hearWhisperMessage?: boolean
			/**
			 * @description Type of transfer destination (currently only "number" is supported)
			 * @example number
			 * @enum {string}
			 */
			transferToType: 'number'
			/**
			 * @description Phone number to transfer to. Must start with +, include country code, contain only numbers, and be 11-16 characters long (e.g., +12345678901).
			 * @example +12345678901
			 */
			transferToValue: string
			/**
			 * @description Message to tell the caller before transferring
			 * @example Let me transfer you to a manager right away
			 */
			triggerMessage?: string
			/**
			 * @description When to trigger this action during the call
			 * @example When the caller asks to speak to a manager
			 */
			triggerPrompt: string
		}
		CreateActionResponseDTO: {
			/** @description Action parameters - structure varies by actionType */
			actionParameters:
				| components['schemas']['CallTransferActionParameters']
				| components['schemas']['DataExtractionActionParameters']
				| components['schemas']['InCallDataExtractionActionParameters']
				| components['schemas']['WorkflowTriggerParameters']
				| components['schemas']['SMSParameters']
				| components['schemas']['AppointmentBookingActionParameters']
				| components['schemas']['CustomActionParameters']
			/**
			 * @description Type of action
			 * @example CALL_TRANSFER
			 * @enum {string}
			 */
			actionType:
				| 'CALL_TRANSFER'
				| 'DATA_EXTRACTION'
				| 'IN_CALL_DATA_EXTRACTION'
				| 'WORKFLOW_TRIGGER'
				| 'SMS'
				| 'APPOINTMENT_BOOKING'
				| 'CUSTOM_ACTION'
			/**
			 * @description Unique identifier for the created action
			 * @example 507f1f77bcf86cd799439011
			 */
			id: string
			/**
			 * @description Human-readable name for this action
			 * @example Transfer to Manager
			 */
			name: string
		}
		CreateAgentResponseDTO: {
			/**
			 * @description Display name of the voice AI agent
			 * @example Customer Support Agent
			 */
			agentName: string
			/**
			 * @description Custom instructions defining the agent's behavior
			 * @example You are a helpful customer service representative.
			 */
			agentPrompt: string
			/**
			 * @description Time intervals when the agent accepts calls, organized by day of week
			 * @example []
			 */
			agentWorkingHours?: components['schemas']['AgentWorkingHoursDTO'][]
			/**
			 * @description Name of the business this agent represents
			 * @example Acme Corporation
			 */
			businessName: string
			/**
			 * @description Array of workflow IDs triggered automatically when calls end
			 * @example []
			 */
			callEndWorkflowIds?: string[]
			/**
			 * @description Unique identifier for the created agent
			 * @example 507f1f77bcf86cd799439011
			 */
			id: string
			/**
			 * @description Phone number for receiving inbound calls
			 * @example +1234567890
			 */
			inboundNumber?: string
			/**
			 * @description Indicates whether this agent is excluded from backup scenarios
			 * @example false
			 */
			isAgentAsBackupDisabled: boolean
			/**
			 * @description Language code for the agent's speech and understanding
			 * @example en-US
			 */
			language: string
			/**
			 * @description Unique identifier for the location where this agent operates
			 * @example LOC123456789ABCDEF
			 */
			locationId: string
			/**
			 * @description Maximum call duration in seconds, between 180-900
			 * @example 600
			 */
			maxCallDuration: number
			/**
			 * @description Identifier for the number pool managing this agent's phone allocation
			 * @example pool_507f1f77bcf86cd799439011
			 */
			numberPoolId?: string
			/**
			 * @description Current tolerance level for caller response delays
			 * @example medium
			 */
			patienceLevel: string
			/**
			 * @description Seconds to wait before sending idle reminders, between 1-20
			 * @example 5
			 */
			reminderAfterIdleTimeSeconds: number
			/** @description Current post-call notification settings including recipient configuration */
			sendPostCallNotificationTo?: components['schemas']['SendPostCallNotificationSchema']
			/**
			 * @description Indicates whether automatic idle reminders are enabled
			 * @example true
			 */
			sendUserIdleReminders: boolean
			/**
			 * @description IANA timezone identifier for working hours and scheduling
			 * @example America/New_York
			 */
			timezone: string
			/** @description Current language translation settings including enablement status and target language */
			translation?: components['schemas']['TranslationSchema']
			/**
			 * @description Identifier for the speech synthesis voice being used
			 * @example 507f1f77bcf86cd799439011
			 */
			voiceId: string
			/**
			 * @description Greeting message spoken when the agent answers calls
			 * @example Hello! Thank you for calling. How can I assist you today?
			 */
			welcomeMessage: string
		}
		CreateSingleActionDTO: {
			/** @description Action parameters - structure varies by actionType */
			actionParameters:
				| components['schemas']['CallTransferActionParameters']
				| components['schemas']['DataExtractionActionParameters']
				| components['schemas']['InCallDataExtractionActionParameters']
				| components['schemas']['WorkflowTriggerParameters']
				| components['schemas']['SMSParameters']
				| components['schemas']['AppointmentBookingActionParameters']
				| components['schemas']['CustomActionParameters']
			/**
			 * @description Type of action
			 * @example CALL_TRANSFER
			 * @enum {string}
			 */
			actionType:
				| 'CALL_TRANSFER'
				| 'DATA_EXTRACTION'
				| 'IN_CALL_DATA_EXTRACTION'
				| 'WORKFLOW_TRIGGER'
				| 'SMS'
				| 'APPOINTMENT_BOOKING'
				| 'CUSTOM_ACTION'
			/**
			 * @description Agent ID to attach the action to
			 * @example 507f1f77bcf86cd799439011
			 */
			agentId: string
			/**
			 * @description Location ID
			 * @example 507f1f77bcf86cd799439012
			 */
			locationId: string
			/**
			 * @description Human-readable name for this action
			 * @example Transfer to Manager
			 */
			name: string
		}
		CustomActionApiDetailsDTO: {
			/**
			 * @description Whether authentication is required
			 * @example true
			 */
			authenticationRequired?: boolean
			/**
			 * @description Authentication token or API key (required if authenticationRequired is true)
			 * @example token123
			 */
			authenticationValue?: string
			/** @description HTTP headers to include */
			headers?: components['schemas']['CustomActionHeaderDTO'][]
			/**
			 * @description HTTP method
			 * @example GET
			 * @enum {string}
			 */
			method: 'POST' | 'GET'
			/** @description API parameters to send */
			parameters?: components['schemas']['CustomActionParameterDTO'][]
			/**
			 * @description API endpoint URL
			 * @example https://api.example.com/orders
			 */
			url: string
		}
		CustomActionHeaderDTO: {
			/**
			 * @description HTTP header name
			 * @example id
			 */
			key: string
			/**
			 * @description HTTP header value
			 * @example 1234567890
			 */
			value: string
		}
		CustomActionParameterDTO: {
			/**
			 * @description Parameter description
			 * @example Order ID to look up
			 */
			description?: string
			/**
			 * @description Example parameter value
			 * @example ORD-12345
			 */
			example?: string
			/**
			 * @description Parameter name
			 * @example orderId
			 */
			name: string
			/**
			 * @description Parameter type
			 * @example string
			 */
			type?: string
		}
		CustomActionParameters: {
			/** @description API endpoint configuration */
			apiDetails: components['schemas']['CustomActionApiDetailsDTO']
			/**
			 * @description Selected response paths to extract from API response. Required: at least 1 value if the method is GET. Should be empty if the method is POST.
			 * @example [
			 *       "data.orderId",
			 *       "status"
			 *     ]
			 */
			selectedPaths?: string[]
			/**
			 * @description Message to tell the caller
			 * @example Let me check that order status
			 */
			triggerMessage?: string
			/**
			 * @description When to call the custom API
			 * @example When caller provides order number
			 */
			triggerPrompt: string
		}
		DataExtractionActionParameters: {
			/**
			 * @description ID of the contact field to be updated with the extracted data
			 * @example 507f1f77bcf86cd799439011
			 */
			contactFieldId: string
			/**
			 * @description Description of what data to extract
			 * @example Caller's phone number
			 */
			description: string
			/**
			 * @description Example values to help Agent understand the expected format. At least one example is required, maximum 5 examples allowed.
			 * @example [
			 *       "+1234567890",
			 *       "+9876543210"
			 *     ]
			 */
			examples: string[]
			/**
			 * @description Whether to overwrite existing field value if already set, default is false
			 * @default false
			 * @example false
			 */
			overwriteExistingValue: boolean
		}
		ExtractedDataSchema: Record<string, never>
		GetActionResponseDTO: {
			/** @description Action parameters - structure varies by actionType */
			actionParameters:
				| components['schemas']['CallTransferActionParameters']
				| components['schemas']['DataExtractionActionParameters']
				| components['schemas']['InCallDataExtractionActionParameters']
				| components['schemas']['WorkflowTriggerParameters']
				| components['schemas']['SMSParameters']
				| components['schemas']['AppointmentBookingActionParameters']
				| components['schemas']['CustomActionParameters']
			/**
			 * @description Type of action
			 * @example CALL_TRANSFER
			 * @enum {string}
			 */
			actionType:
				| 'CALL_TRANSFER'
				| 'DATA_EXTRACTION'
				| 'IN_CALL_DATA_EXTRACTION'
				| 'WORKFLOW_TRIGGER'
				| 'SMS'
				| 'APPOINTMENT_BOOKING'
				| 'CUSTOM_ACTION'
			/**
			 * @description Unique identifier for the action
			 * @example 507f1f77bcf86cd799439011
			 */
			id: string
			/**
			 * @description Human-readable name for this action
			 * @example Transfer to Manager
			 */
			name: string
		}
		GetAgentResponseDTO: {
			/**
			 * @description Raw actions configured for this agent with complete actionParameters structure
			 * @example [
			 *       {
			 *         "_id": "507f1f77bcf86cd799439011",
			 *         "actionType": "CALL_TRANSFER",
			 *         "name": "Transfer to Manager",
			 *         "actionParameters": {
			 *           "triggerPrompt": "When caller asks for manager",
			 *           "triggerMessage": "Let me transfer you",
			 *           "transferToType": "number",
			 *           "transferToValue": "+1234567890"
			 *         }
			 *       }
			 *     ]
			 */
			actions: components['schemas']['AgentActionResponseDTO'][]
			/**
			 * @description Display name of the voice AI agent
			 * @example Customer Support Agent
			 */
			agentName: string
			/**
			 * @description Custom instructions defining the agent's behavior
			 * @example You are a helpful customer service representative.
			 */
			agentPrompt: string
			/**
			 * @description Time intervals when the agent accepts calls, organized by day of week
			 * @example []
			 */
			agentWorkingHours?: components['schemas']['AgentWorkingHoursDTO'][]
			/**
			 * @description Name of the business this agent represents
			 * @example Acme Corporation
			 */
			businessName: string
			/**
			 * @description Array of workflow IDs triggered automatically when calls end
			 * @example []
			 */
			callEndWorkflowIds?: string[]
			/**
			 * @description Unique identifier for the created agent
			 * @example 507f1f77bcf86cd799439011
			 */
			id: string
			/**
			 * @description Phone number for receiving inbound calls
			 * @example +1234567890
			 */
			inboundNumber?: string
			/**
			 * @description Indicates whether this agent is excluded from backup scenarios
			 * @example false
			 */
			isAgentAsBackupDisabled: boolean
			/**
			 * @description Language code for the agent's speech and understanding
			 * @example en-US
			 */
			language: string
			/**
			 * @description Unique identifier for the location where this agent operates
			 * @example LOC123456789ABCDEF
			 */
			locationId: string
			/**
			 * @description Maximum call duration in seconds, between 180-900
			 * @example 600
			 */
			maxCallDuration: number
			/**
			 * @description Identifier for the number pool managing this agent's phone allocation
			 * @example pool_507f1f77bcf86cd799439011
			 */
			numberPoolId?: string
			/**
			 * @description Current tolerance level for caller response delays
			 * @example medium
			 */
			patienceLevel: string
			/**
			 * @description Seconds to wait before sending idle reminders, between 1-20
			 * @example 5
			 */
			reminderAfterIdleTimeSeconds: number
			/** @description Current post-call notification settings including recipient configuration */
			sendPostCallNotificationTo?: components['schemas']['SendPostCallNotificationSchema']
			/**
			 * @description Indicates whether automatic idle reminders are enabled
			 * @example true
			 */
			sendUserIdleReminders: boolean
			/**
			 * @description IANA timezone identifier for working hours and scheduling
			 * @example America/New_York
			 */
			timezone: string
			/** @description Current language translation settings including enablement status and target language */
			translation?: components['schemas']['TranslationSchema']
			/**
			 * @description Identifier for the speech synthesis voice being used
			 * @example 507f1f77bcf86cd799439011
			 */
			voiceId: string
			/**
			 * @description Greeting message spoken when the agent answers calls
			 * @example Hello! Thank you for calling. How can I assist you today?
			 */
			welcomeMessage: string
		}
		GetAgentsResponseDTO: {
			agents: components['schemas']['GetAgentResponseDTO'][]
			/**
			 * @description Page number starting from 1
			 * @example 2
			 */
			page: number
			/**
			 * @description Number of items per page
			 * @example 10
			 */
			pageSize: number
			/**
			 * @description Total number of items
			 * @example 150
			 */
			total: number
		}
		InCallDataExtractionActionParameters: {
			/**
			 * @description ID of the contact field to be updated with the extracted data
			 * @example 507f1f77bcf86cd799439011
			 */
			contactFieldId: string
			/**
			 * @description Description of what data to extract
			 * @example Caller's phone number
			 */
			description: string
			/**
			 * @description Example values to help Agent understand the expected format. At least one example is required, maximum 5 examples allowed.
			 * @example [
			 *       "+1234567890",
			 *       "+9876543210"
			 *     ]
			 */
			examples: string[]
			/**
			 * @description Whether to overwrite existing field value if already set, default is false
			 * @default false
			 * @example false
			 */
			overwriteExistingValue: boolean
		}
		IntervalDTO: {
			/**
			 * @description Ending hour of the working interval in 24-hour format (0-23)
			 * @example 17
			 */
			endHour: number
			/**
			 * @description Ending minute of the working interval (0-59)
			 * @example 30
			 */
			endMinute: number
			/**
			 * @description Starting hour of the working interval in 24-hour format (0-23)
			 * @example 9
			 */
			startHour: number
			/**
			 * @description Starting minute of the working interval (0-59)
			 * @example 0
			 */
			startMinute: number
		}
		KnowledgeBaseParameters: {
			/**
			 * @description Knowledge base ID to query
			 * @example 507f1f77bcf86cd799439011
			 */
			knowledgeBaseId: string
			/** @description Additional parameters for the knowledge base query */
			parameters?: components['schemas']['CustomActionParameterDTO'][]
			/**
			 * @description Message to tell the caller
			 * @example Let me look that up for you
			 */
			triggerMessage: string
			/**
			 * @description When to query the knowledge base
			 * @example When caller asks about pricing
			 */
			triggerPrompt?: string
		}
		PatchAgentDTO: {
			/**
			 * @description Display name for the voice AI agent, between 1-40 characters. Default: "My Agent {random 3 digit number}"
			 * @example Customer Support Agent
			 */
			agentName?: string
			/**
			 * @description Custom instructions defining the agent's behavior and personality. Default: Basic prompt generated automatically
			 * @example You are a helpful customer service representative. Always be polite and professional.
			 */
			agentPrompt?: string
			/** @description Time intervals defining when the agent accepts calls, organized by day of week. Default: [] (available 24/7) */
			agentWorkingHours?: components['schemas']['AgentWorkingHoursDTO'][]
			/**
			 * @description Name of the business this agent represents. Default: Uses location name
			 * @example Acme Corporation
			 */
			businessName?: string
			/**
			 * @description Array of workflow IDs to trigger automatically when calls end. Default: []
			 * @example [
			 *       "wf_507f1f77bcf86cd799439011",
			 *       "wf_507f1f77bcf86cd799439012"
			 *     ]
			 */
			callEndWorkflowIds?: string[]
			/**
			 * @description Phone number for receiving inbound calls to this agent. Default: null
			 * @example +1234567890
			 */
			inboundNumber?: string
			/**
			 * @description Prevents this agent from being used as a fallback option. Default: false (Available as backup agent)
			 * @example false
			 */
			isAgentAsBackupDisabled?: boolean
			/** @example en-US */
			language?: components['schemas']['VoiceAILanguage']
			/**
			 * @description Maximum call duration in seconds, between 180-900 (3-15 minutes). Default: 300 seconds (5 minutes)
			 * @example 600
			 */
			maxCallDuration?: number
			/**
			 * @description Identifier for the number pool managing phone number allocation. Default: null
			 * @example pool_507f1f77bcf86cd799439011
			 */
			numberPoolId?: string
			/** @example low */
			patienceLevel?: components['schemas']['PatienceLevel']
			/**
			 * @description Seconds to wait before sending idle reminders, between 1-20. Default: 8 seconds
			 * @example 5
			 */
			reminderAfterIdleTimeSeconds?: number
			/** @description Configuration for post-call email notifications to various recipients. Default: [] */
			sendPostCallNotificationTo?: components['schemas']['SendPostCallNotificationDTO']
			/**
			 * @description Enables automatic reminders when callers are silent. Default: true
			 * @example true
			 */
			sendUserIdleReminders?: boolean
			/**
			 * @description IANA timezone identifier affecting working hours and scheduling. Default: Location timezone
			 * @example America/New_York
			 */
			timezone?: string
			/** @description Language translation settings including enablement flag and target language code. Rules: (1) translation.enabled can only be true if the agent's language is not en-US; (2) when enabled, translation.language must be either the agent's language or en-US; (3) when enabled, translation.language is required. */
			translation?: components['schemas']['TranslationDTO']
			/**
			 * @description Identifier for the speech synthesis voice from available voice options. Default: Auto generated
			 * @example 507f1f77bcf86cd799439011
			 */
			voiceId?: string
			/**
			 * @description Initial greeting spoken when the agent answers calls. Default: Auto generated
			 * @example Hello! Thank you for calling Acme Corporation. How can I assist you today?
			 */
			welcomeMessage?: string
		}
		PatchAgentResponseDTO: {
			/**
			 * @description Display name of the voice AI agent
			 * @example Customer Support Agent
			 */
			agentName: string
			/**
			 * @description Custom instructions defining the agent's behavior
			 * @example You are a helpful customer service representative.
			 */
			agentPrompt: string
			/**
			 * @description Time intervals when the agent accepts calls, organized by day of week
			 * @example []
			 */
			agentWorkingHours?: components['schemas']['AgentWorkingHoursDTO'][]
			/**
			 * @description Name of the business this agent represents
			 * @example Acme Corporation
			 */
			businessName: string
			/**
			 * @description Array of workflow IDs triggered automatically when calls end
			 * @example []
			 */
			callEndWorkflowIds?: string[]
			/**
			 * @description Unique identifier for the created agent
			 * @example 507f1f77bcf86cd799439011
			 */
			id: string
			/**
			 * @description Phone number for receiving inbound calls
			 * @example +1234567890
			 */
			inboundNumber?: string
			/**
			 * @description Indicates whether this agent is excluded from backup scenarios
			 * @example false
			 */
			isAgentAsBackupDisabled: boolean
			/**
			 * @description Language code for the agent's speech and understanding
			 * @example en-US
			 */
			language: string
			/**
			 * @description Unique identifier for the location where this agent operates
			 * @example LOC123456789ABCDEF
			 */
			locationId: string
			/**
			 * @description Maximum call duration in seconds, between 180-900
			 * @example 600
			 */
			maxCallDuration: number
			/**
			 * @description Identifier for the number pool managing this agent's phone allocation
			 * @example pool_507f1f77bcf86cd799439011
			 */
			numberPoolId?: string
			/**
			 * @description Current tolerance level for caller response delays
			 * @example medium
			 */
			patienceLevel: string
			/**
			 * @description Seconds to wait before sending idle reminders, between 1-20
			 * @example 5
			 */
			reminderAfterIdleTimeSeconds: number
			/** @description Current post-call notification settings including recipient configuration */
			sendPostCallNotificationTo?: components['schemas']['SendPostCallNotificationSchema']
			/**
			 * @description Indicates whether automatic idle reminders are enabled
			 * @example true
			 */
			sendUserIdleReminders: boolean
			/**
			 * @description IANA timezone identifier for working hours and scheduling
			 * @example America/New_York
			 */
			timezone: string
			/** @description Current language translation settings including enablement status and target language */
			translation?: components['schemas']['TranslationSchema']
			/**
			 * @description Identifier for the speech synthesis voice being used
			 * @example 507f1f77bcf86cd799439011
			 */
			voiceId: string
			/**
			 * @description Greeting message spoken when the agent answers calls
			 * @example Hello! Thank you for calling. How can I assist you today?
			 */
			welcomeMessage: string
		}
		/**
		 * @description Tolerance level for caller response delays. Default: "high"
		 * @enum {string}
		 */
		PatienceLevel: 'low' | 'medium' | 'high'
		SendPostCallNotificationDTO: {
			/**
			 * @description Enables post-call notifications to all admin users in the location. Default: true
			 * @example true
			 */
			admins: boolean
			/**
			 * @description Enables post-call notifications to all users in the location. Default: false
			 * @example false
			 */
			allUsers: boolean
			/**
			 * @description Enables post-call notifications to the user assigned to the contact. Default: false
			 * @example false
			 */
			contactAssignedUser: boolean
			/**
			 * @description Array of custom email addresses to receive post-call notifications. Default: []
			 * @example [
			 *       "manager@company.com"
			 *     ]
			 */
			customEmails: string[]
			/**
			 * @description Array of specific user IDs to receive post-call notifications. Default: []
			 * @example [
			 *       "user_507f1f77bcf86cd799439011"
			 *     ]
			 */
			specificUsers: string[]
		}
		SendPostCallNotificationSchema: {
			/**
			 * @description Send notifications to admins
			 * @example true
			 */
			admins?: boolean
			/**
			 * @description Send notifications to all users
			 * @example false
			 */
			allUsers?: boolean
			/**
			 * @description Send notifications to contact assigned user
			 * @example false
			 */
			contactAssignedUser?: boolean
			/**
			 * @description Custom email addresses to notify
			 * @example []
			 */
			customEmails?: string[]
			/**
			 * @description Specific user IDs to notify
			 * @example []
			 */
			specificUsers?: string[]
		}
		SMSParameters: {
			/**
			 * @description SMS message content to send
			 * @example Your appointment is confirmed for tomorrow at 2 PM
			 */
			messageBody: string
			/**
			 * @description Message to tell the caller
			 * @example I'll send you a confirmation text
			 */
			triggerMessage: string
			/**
			 * @description When to send the SMS
			 * @example When caller asks for booking confirmation
			 */
			triggerPrompt: string
		}
		TranslationDTO: {
			/**
			 * @description Enables language translation for agent conversations. Default: false
			 * @example false
			 */
			enabled: boolean
			/**
			 * @description Target language code for translation (e.g., "es" for Spanish, "fr" for French).
			 * @example es
			 */
			language?: string
		}
		TranslationSchema: {
			/**
			 * @description Whether translation is enabled
			 * @example false
			 */
			enabled?: boolean
			/**
			 * @description Translation language code
			 * @example es
			 */
			language?: string
		}
		UnauthorizedDTO: {
			/** @example Unauthorized */
			error?: string
			/** @example Invalid token: access token is invalid */
			message?: string
			/** @example 401 */
			statusCode?: number
		}
		UnprocessableDTO: {
			/** @example Unprocessable Entity */
			error?: string
			/**
			 * @example [
			 *       "Unprocessable Entity"
			 *     ]
			 */
			message?: string[]
			/** @example 422 */
			statusCode?: number
		}
		UpdateActionResponseDTO: {
			/** @description Action parameters - structure varies by actionType */
			actionParameters:
				| components['schemas']['CallTransferActionParameters']
				| components['schemas']['DataExtractionActionParameters']
				| components['schemas']['InCallDataExtractionActionParameters']
				| components['schemas']['WorkflowTriggerParameters']
				| components['schemas']['SMSParameters']
				| components['schemas']['AppointmentBookingActionParameters']
				| components['schemas']['CustomActionParameters']
			/**
			 * @description Type of action
			 * @example CALL_TRANSFER
			 * @enum {string}
			 */
			actionType:
				| 'CALL_TRANSFER'
				| 'DATA_EXTRACTION'
				| 'IN_CALL_DATA_EXTRACTION'
				| 'WORKFLOW_TRIGGER'
				| 'SMS'
				| 'APPOINTMENT_BOOKING'
				| 'CUSTOM_ACTION'
			/**
			 * @description Unique identifier for the created action
			 * @example 507f1f77bcf86cd799439011
			 */
			id: string
			/**
			 * @description Human-readable name for this action
			 * @example Transfer to Manager
			 */
			name: string
		}
		UpdateSingleActionDTO: {
			/** @description Action parameters - structure varies by actionType */
			actionParameters:
				| components['schemas']['CallTransferActionParameters']
				| components['schemas']['DataExtractionActionParameters']
				| components['schemas']['InCallDataExtractionActionParameters']
				| components['schemas']['WorkflowTriggerParameters']
				| components['schemas']['SMSParameters']
				| components['schemas']['AppointmentBookingActionParameters']
				| components['schemas']['CustomActionParameters']
			/**
			 * @description Type of action
			 * @example CALL_TRANSFER
			 * @enum {string}
			 */
			actionType:
				| 'CALL_TRANSFER'
				| 'DATA_EXTRACTION'
				| 'IN_CALL_DATA_EXTRACTION'
				| 'WORKFLOW_TRIGGER'
				| 'SMS'
				| 'APPOINTMENT_BOOKING'
				| 'CUSTOM_ACTION'
			/**
			 * @description Agent ID to attach the action to
			 * @example 507f1f77bcf86cd799439011
			 */
			agentId: string
			/**
			 * @description Location ID
			 * @example 507f1f77bcf86cd799439012
			 */
			locationId: string
			/**
			 * @description Human-readable name for this action
			 * @example Transfer to Manager
			 */
			name: string
		}
		/**
		 * @description Language code for the agent's speech and understanding. Default: "en-US"
		 * @enum {string}
		 */
		VoiceAILanguage:
			| 'en-US'
			| 'pt-BR'
			| 'es'
			| 'fr'
			| 'de'
			| 'it'
			| 'nl-NL'
			| 'multi'
		WorkflowTriggerParameters: {
			/**
			 * @description Message to tell the caller
			 * @example Let me start that process for you
			 */
			triggerMessage: string
			/**
			 * @description When to trigger this workflow
			 * @example When caller requests a quote
			 */
			triggerPrompt: string
			/**
			 * @description Workflow ID to trigger
			 * @example 507f1f77bcf86cd799439011
			 */
			workflowId: string
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
	'create-action': {
		parameters: {
			query?: never
			header: {
				/** @description API Version */
				Version: '2021-04-15'
			}
			path?: never
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['CreateSingleActionDTO']
			}
		}
		responses: {
			/** @description Action created successfully */
			201: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['CreateActionResponseDTO']
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
			/** @description Unprocessable Entity */
			422: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnprocessableDTO']
				}
			}
		}
	}
	'get-action': {
		parameters: {
			query: {
				/** @description Location ID */
				locationId: string
			}
			header: {
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				/** @description Unique identifier for the action */
				actionId: string
			}
			cookie?: never
		}
		requestBody?: never
		responses: {
			/** @description Action details retrieved successfully */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['GetActionResponseDTO']
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
			/** @description Unprocessable Entity */
			422: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnprocessableDTO']
				}
			}
		}
	}
	'update-action': {
		parameters: {
			query?: never
			header: {
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				/** @description Unique identifier for the action */
				actionId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['UpdateSingleActionDTO']
			}
		}
		responses: {
			/** @description Action updated successfully */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UpdateActionResponseDTO']
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
			/** @description Unprocessable Entity */
			422: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnprocessableDTO']
				}
			}
		}
	}
	'delete-action': {
		parameters: {
			query: {
				/** @description Agent ID the action is attached to */
				agentId: string
				/** @description Location ID */
				locationId: string
			}
			header: {
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				/** @description Unique identifier for the action */
				actionId: string
			}
			cookie?: never
		}
		requestBody?: never
		responses: {
			/** @description Action deleted successfully */
			204: {
				headers: {
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
			/** @description Unprocessable Entity */
			422: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnprocessableDTO']
				}
			}
		}
	}
	'get-agents': {
		parameters: {
			query: {
				/** @description Location ID */
				locationId: string
				/** @description Page number starting from 1 */
				page?: number
				/** @description Number of items per page */
				pageSize?: number
				/** @description Query */
				query?: string
			}
			header: {
				/** @description API Version */
				Version: '2021-04-15'
			}
			path?: never
			cookie?: never
		}
		requestBody?: never
		responses: {
			/** @description Agent list retrieved successfully. */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['GetAgentsResponseDTO']
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
			/** @description Unprocessable Entity */
			422: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnprocessableDTO']
				}
			}
		}
	}
	'create-agent': {
		parameters: {
			query?: never
			header: {
				/** @description API Version */
				Version: '2021-04-15'
			}
			path?: never
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['AgentCreationRequestDTO']
			}
		}
		responses: {
			/** @description Agent created successfully */
			201: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['CreateAgentResponseDTO']
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
			/** @description Unprocessable Entity */
			422: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnprocessableDTO']
				}
			}
		}
	}
	'get-agent': {
		parameters: {
			query: {
				/** @description Location ID */
				locationId: string
			}
			header: {
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				/** @description Unique agent identifier */
				agentId: string
			}
			cookie?: never
		}
		requestBody?: never
		responses: {
			/** @description Agent details retrieved successfully */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['GetAgentResponseDTO']
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
			/** @description Unprocessable Entity */
			422: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnprocessableDTO']
				}
			}
		}
	}
	'delete-agent': {
		parameters: {
			query: {
				/** @description Location ID */
				locationId: string
			}
			header: {
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				/** @description Unique agent identifier */
				agentId: string
			}
			cookie?: never
		}
		requestBody?: never
		responses: {
			/** @description Agent deleted successfully */
			204: {
				headers: {
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
			/** @description Unprocessable Entity */
			422: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnprocessableDTO']
				}
			}
		}
	}
	'patch-agent': {
		parameters: {
			query: {
				/** @description Location ID */
				locationId: string
			}
			header: {
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				/** @description Unique agent identifier */
				agentId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['PatchAgentDTO']
			}
		}
		responses: {
			/** @description Agent updated successfully */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['PatchAgentResponseDTO']
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
			/** @description Unprocessable Entity */
			422: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UnprocessableDTO']
				}
			}
		}
	}
	'get-call-logs': {
		parameters: {
			query: {
				/** @description Action type filter for call logs (comma-separated ACTION_TYPE values) */
				actionType?:
					| 'CALL_TRANSFER'
					| 'DATA_EXTRACTION'
					| 'IN_CALL_DATA_EXTRACTION'
					| 'WORKFLOW_TRIGGER'
					| 'SMS'
					| 'APPOINTMENT_BOOKING'
					| 'CUSTOM_ACTION'
					| 'KNOWLEDGE_BASE'
				/** @description Agent identifier. When provided, returns logs for this agent only. */
				agentId?: string
				/** @description Call type filter. */
				callType?: 'LIVE' | 'TRIAL'
				/** @description Contact IDs (comma-separated) to filter by. */
				contactId?: string
				/** @description End date filter (Unix timestamp). Must be greater than startDate. Both startDate and endDate must be provided together. */
				endDate?: number
				/** @description Location identifier. Filters results to this location. */
				locationId: string
				/** @description Page number (1-based). */
				page?: number
				/** @description Page size (max 50). */
				pageSize?: number
				/** @description Sort direction. Applies only when sortBy is provided. */
				sort?: 'ascend' | 'descend'
				/** @description Field to sort by. Defaults to newest if omitted. */
				sortBy?: 'duration' | 'createdAt'
				/** @description Start date filter (Unix timestamp). Must be less than endDate. Both startDate and endDate must be provided together. */
				startDate?: number
			}
			header: {
				/** @description API Version */
				Version: '2021-04-15'
			}
			path?: never
			cookie?: never
		}
		requestBody?: never
		responses: {
			/** @description Successfully retrieved call logs */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['CallLogsResponseDTO']
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
	getCallLog: {
		parameters: {
			query: {
				/** @description Location ID */
				locationId: string
			}
			header: {
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				/** @description Call ID */
				callId: string
			}
			cookie?: never
		}
		requestBody?: never
		responses: {
			/** @description Successfully retrieved call log */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['CallLogDTO']
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
