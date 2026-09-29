export interface paths {
	'/conversation-ai/agents': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Create an Agent
		 * @description Creates a new AI agent for the location. The agent will be created with the specified configuration including name, role, actions, and behavior settings.
		 */
		post: operations['create-agent']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/conversation-ai/agents/{agentId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get Agent
		 * @description Retrieves a specific AI agent by its ID. Returns the complete agent configuration including name, status, actions, and settings.
		 */
		get: operations['get-agent']
		/**
		 * Update Agent
		 * @description Updates an existing AI agent's configuration. All fields in the agent configuration can be updated including name, status, actions, and behavior settings.
		 */
		put: operations['update-agent']
		post?: never
		/**
		 * Delete Agent
		 * @description Deletes an AI agent permanently. This action cannot be undone. All associated configurations and conversation history will be removed.
		 */
		delete: operations['delete-agent']
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/conversation-ai/agents/{agentId}/actions': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Attach Action to Agent
		 * @description Creates and attach a new action for an AI agent. Actions define specific tasks or behaviors that the agent can perform, such as booking appointments, sending follow-ups, or collecting information.
		 */
		post: operations['create-action']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/conversation-ai/agents/{agentId}/actions/{actionId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get Action by ID
		 * @description Retrieves detailed information about a specific action using its unique identifier. Returns the action configuration, associated agents, and performance metrics.
		 */
		get: operations['get-action-by-id']
		/**
		 * Update Action
		 * @description Updates an existing action's configuration. This includes modifying the action name, description, trigger conditions, and behavior settings.
		 */
		put: operations['update-action']
		post?: never
		/**
		 * Remove Action from Agent
		 * @description Permanently deletes an action. This will remove the action from all associated agents and cannot be undone.
		 */
		delete: operations['delete-action']
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/conversation-ai/agents/{agentId}/actions/list': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * List Actions for an Agent
		 * @description List for actions for an agent
		 */
		get: operations['list-actions']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/conversation-ai/agents/{agentId}/followup-settings': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		/**
		 * Update Followup Settings
		 * @description Update the followup settings for an action
		 */
		patch: operations['update-followup-settings']
		trace?: never
	}
	'/conversation-ai/agents/search': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Search Agents
		 * @description Searches for AI agents based on various criteria including name, status, and configuration. Supports advanced filtering and full-text search capabilities.
		 */
		get: operations['search-agent']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/conversation-ai/generations': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get the generation details
		 * @description Retrieves detailed information about AI responses including the System Prompt, Conversation history, Knowledge base, website, FAQ chunks, and Rich Text chunks.
		 */
		get: operations['get-generation-details']
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
		ActionDataDTO: {
			/**
			 * @description Agent ID where the action belongs
			 * @example agentId123
			 */
			agentId?: string
			/** @description Action-specific details. The structure depends on the action type. For TRIGGER_WORKFLOW use triggerWorkflowDto, for UPDATE_CONTACT_FIELD use updateContactFieldDto, for APPOINTMENT_BOOKING use appointmentBookingDto, for STOP_BOT use stopBotDto, for HUMAN_HAND_OVER use humanHandOverDto, for ADVANCED_FOLLOWUP use advancedFollowupDto, and for TRANSFER_BOT use transferBotDto. */
			details:
				| components['schemas']['triggerWorkflowDto']
				| components['schemas']['updateContactFieldDto']
				| components['schemas']['appointmentBookingDto']
				| components['schemas']['stopBotDto']
				| components['schemas']['humanHandOverDto']
				| components['schemas']['advancedFollowupDto']
				| components['schemas']['transferBotDto']
			/**
			 * @description Unique identifier for the action
			 * @example actionId123
			 */
			id: string
			/**
			 * @description Name of the action
			 * @example Trigger Workflow
			 */
			name: string
			/**
			 * @description Type of the action
			 * @example triggerWorkflow
			 * @enum {string}
			 */
			type:
				| 'triggerWorkflow'
				| 'updateContactField'
				| 'appointmentBooking'
				| 'stopBot'
				| 'humanHandOver'
				| 'advancedFollowup'
				| 'transferBot'
		}
		ActionsIdDto: {
			/**
			 * @description Unique identifier for the action.
			 * @example actionId123
			 */
			id: string
			/**
			 * @description type of action.
			 * @example triggerWorkflow
			 * @enum {string}
			 */
			type:
				| 'triggerWorkflow'
				| 'updateContactField'
				| 'appointmentBooking'
				| 'stopBot'
				| 'humanHandOver'
				| 'advancedFollowup'
				| 'transferBot'
		}
		advancedFollowupDto: {
			/**
			 * @description Whether advanced followup is enabled
			 * @example true
			 */
			enabled: boolean
			/** @description Sequence of followup actions to perform */
			followupSequence: components['schemas']['FollowupSequence'][]
			/** @description Additional settings for followup behavior */
			followupSettings?: components['schemas']['FollowupSettings']
			/**
			 * @description ID of the followup scenario
			 * @example contactIsBusy
			 * @enum {string}
			 */
			scenarioId:
				| 'contactStoppedReplying'
				| 'contactIsBusy'
				| 'contactRequested'
		}
		appointmentBookingDto: {
			/**
			 * @description Optional action ID reference
			 * @example action123
			 */
			actionId?: string
			/**
			 * @description Calendar ID for appointment booking
			 * @example calendar123
			 */
			calendarId: string
			/**
			 * @description Whether to allow appointment cancellation (cannot be true when onlySendLink is true)
			 * @default false
			 * @example true
			 */
			cancelEnabled: boolean
			/**
			 * @description If true, only sends the appointment link without booking
			 * @example false
			 */
			onlySendLink: boolean
			/**
			 * @description Whether to allow appointment rescheduling (cannot be true when onlySendLink is true)
			 * @default false
			 * @example true
			 */
			rescheduleEnabled: boolean
			/**
			 * @description Whether to put the agent to sleep after booking (cannot be true when onlySendLink is true)
			 * @example true
			 */
			sleepAfterBooking: boolean
			/**
			 * @description Sleep duration (required when sleepAfterBooking is true)
			 * @example 24
			 */
			sleepTime?: number
			/**
			 * @description Unit for sleep time (required when sleepAfterBooking is true)
			 * @example hours
			 * @enum {string}
			 */
			sleepTimeUnit?: 'days' | 'hours' | 'minutes'
			/**
			 * @description Agent ID to transfer to (required when transferBot is true)
			 * @example employee456
			 */
			transferAgent?: string
			/**
			 * @description Whether to transfer to another agent after booking (cannot be true when onlySendLink is true)
			 * @example false
			 */
			transferBot: boolean
			/**
			 * @description Whether to trigger a workflow after booking (cannot be true when onlySendLink is true)
			 * @example true
			 */
			triggerWorkflow: boolean
			/**
			 * @description Workflow IDs to trigger after booking (required when triggerWorkflow is true)
			 * @example [
			 *       "workflow123"
			 *     ]
			 */
			workflowIds?: string[]
		}
		BadRequestDTO: {
			/** @example Bad Request */
			message?: string
			/** @example 400 */
			statusCode?: number
		}
		CreateActionDTO: {
			/** @description Action-specific details. The structure depends on the action type. For TRIGGER_WORKFLOW use triggerWorkflowDto, for UPDATE_CONTACT_FIELD use updateContactFieldDto, for APPOINTMENT_BOOKING use appointmentBookingDto, for STOP_BOT use stopBotDto, for HUMAN_HAND_OVER use humanHandOverDto, for ADVANCED_FOLLOWUP use advancedFollowupDto, and for TRANSFER_BOT use transferBotDto. */
			details:
				| components['schemas']['triggerWorkflowDto']
				| components['schemas']['updateContactFieldDto']
				| components['schemas']['appointmentBookingDto']
				| components['schemas']['stopBotDto']
				| components['schemas']['humanHandOverDto']
				| components['schemas']['advancedFollowupDto']
				| components['schemas']['transferBotDto']
			/** @example Trigger a Workflow */
			name: string
			/**
			 * @example triggerWorkflow
			 * @enum {string}
			 */
			type:
				| 'triggerWorkflow'
				| 'updateContactField'
				| 'appointmentBooking'
				| 'stopBot'
				| 'humanHandOver'
				| 'advancedFollowup'
				| 'transferBot'
		}
		createActionResponseDTO: {
			/** @description Created action details */
			data: components['schemas']['ActionDataDTO']
			/**
			 * @description Success status of the request
			 * @example true
			 */
			success: boolean
		}
		CreateEmployeeDto: {
			/**
			 * @description Maximum number of messages in auto-pilot mode before requiring human intervention. (max: 100, min: 1)
			 * @default 75
			 * @example 75
			 */
			autoPilotMaxMessages: number
			/**
			 * @description Name of the business the agent represents.
			 * @example Tech Corp
			 */
			businessName?: string
			/**
			 * @description Communication channels the agent can operate on
			 * @example [
			 *       "SMS",
			 *       "Live_Chat",
			 *       "WhatsApp"
			 *     ]
			 */
			channels?: (
				| 'IG'
				| 'FB'
				| 'SMS'
				| 'WebChat'
				| 'WhatsApp'
				| 'Live_Chat'
			)[]
			/**
			 * @description The goal of the agent.
			 * @example Assist customers with inquiries.
			 */
			goal: string
			/**
			 * @description Instructions for the agent.
			 * @example Provide  customer service.
			 */
			instructions: string
			/**
			 * @description Indicates if this agent is a primary agent.
			 * @default false
			 * @example true
			 */
			isPrimary: boolean
			/** @description Array of knowledge base IDs associated with this agent. */
			knowledgeBaseIds?: string[]
			/**
			 * @description Mode of operation - OFF, SUGGESTIVE, or AUTO_PILOT
			 * @default off
			 * @example auto-pilot
			 * @enum {string}
			 */
			mode: 'off' | 'suggestive' | 'auto-pilot'
			/**
			 * @description Name of the agent.
			 * @example John Doe
			 */
			name: string
			/**
			 * @description Personality traits of the agent.
			 * @example Friendly and helpful
			 */
			personality: string
			/**
			 * @description Allow agent to respond to audio
			 * @default false
			 * @example true
			 */
			respondToAudio: boolean
			/**
			 * @description Allow agent to respond to images
			 * @default false
			 * @example true
			 */
			respondToImages: boolean
			/**
			 * @deprecated
			 * @description Indicates if sleep functionality is enabled.
			 * @default false
			 * @example false
			 */
			sleepEnabled: boolean
			/**
			 * @description Enable sleep when a manual outbound message is sent.
			 * @example false
			 */
			sleepOnManualMessage?: boolean
			/**
			 * @description Enable sleep when a workflow outbound message is sent.
			 * @example false
			 */
			sleepOnWorkflowMessage?: boolean
			/**
			 * @description Duration of sleep period (required if sleepEnabled is true). Set to null for indefinite sleep. (max 2880 for minutes, 172800 for seconds, 48 for hours)
			 * @example 2
			 */
			sleepTime?: number
			/**
			 * @description Unit of sleep time - HOURS, MINUTES, or SECONDS (required if sleepEnabled is true). Set to null for indefinite sleep.
			 * @example hours
			 * @enum {string}
			 */
			sleepTimeUnit?: 'hours' | 'minutes' | 'seconds'
			/**
			 * @description Wait time before agent responds (max 5 for minutes, 300 for seconds)
			 * @default 2
			 * @example 2
			 */
			waitTime: number
			/**
			 * @description Unit for wait time - SECONDS or MINUTES
			 * @default seconds
			 * @example seconds
			 * @enum {string}
			 */
			waitTimeUnit: 'minutes' | 'seconds'
		}
		DeleteActionDataDTO: {
			/**
			 * @description ID of the deleted action
			 * @example actionId123
			 */
			id: string
		}
		deleteActionResponseDTO: {
			/** @description Deleted action information */
			data: components['schemas']['DeleteActionDataDTO']
			/**
			 * @description Success status of the request
			 * @example true
			 */
			success: boolean
		}
		DeleteEmployeeResponseDTO: {
			/**
			 * @description Unique identifier of the deleted agent.
			 * @example emp_123
			 */
			id: string
			/**
			 * @description Indicates if the agent was deleted successfully.
			 * @example true
			 */
			success: boolean
		}
		EmployeeListItemDTO: {
			/**
			 * @description List of actions associated with this agent.
			 * @example [
			 *       {
			 *         "id": "action_123",
			 *         "type": "triggerWorkflow"
			 *       }
			 *     ]
			 */
			actions: Record<string, never>[]
			/**
			 * @description Maximum number of messages in auto-pilot mode before requiring human intervention.
			 * @example 25
			 */
			autoPilotMaxMessages: number
			/**
			 * @description Name of the business the agent represents.
			 * @example Tech Corp
			 */
			businessName?: string
			/**
			 * @description Communication channels the agent operates on.
			 * @example [
			 *       "SMS",
			 *       "LIVE_CHAT"
			 *     ]
			 */
			channels: string[]
			/**
			 * @description Timestamp when the agent was created.
			 * @example 2024-01-01T00:00:00Z
			 */
			createdAt: string
			/**
			 * @description Goal configuration for the agent.
			 * @example {
			 *       "prompt": "Assist customers",
			 *       "type": "custom",
			 *       "actionId": null
			 *     }
			 */
			goal?: Record<string, never>
			/**
			 * @description Unique identifier for the agent.
			 * @example emp_123
			 */
			id: string
			/**
			 * @description Indicates if this agent is a primary agent. (First agent created for a location is primary by default)
			 * @example false
			 */
			isPrimary: boolean
			/**
			 * @description Array of knowledge base IDs associated with this agent.
			 * @example [
			 *       "kb_123",
			 *       "kb_456"
			 *     ]
			 */
			knowledgeBaseIds?: string[]
			/**
			 * @description Current operating mode of the agent.
			 * @example auto-pilot
			 * @enum {string}
			 */
			mode: 'off' | 'suggestive' | 'auto-pilot'
			/**
			 * @description Name of the agent.
			 * @example John Doe
			 */
			name: string
			/**
			 * @deprecated
			 * @description Indicates if sleep functionality is enabled.
			 * @example false
			 */
			sleepEnabled: boolean
			/**
			 * @description Whether the bot sleeps on manual outbound messages.
			 * @example false
			 */
			sleepOnManualMessage?: boolean
			/**
			 * @description Whether the bot sleeps on workflow outbound messages.
			 * @example false
			 */
			sleepOnWorkflowMessage?: boolean
			/**
			 * @description Duration of sleep period.
			 * @example 2
			 */
			sleepTime?: number
			/**
			 * @description Unit of sleep time.
			 * @example hours
			 * @enum {string}
			 */
			sleepTimeUnit?: 'hours' | 'minutes' | 'seconds'
			/**
			 * @description Timestamp when the agent was last updated.
			 * @example 2024-01-01T00:00:00Z
			 */
			updatedAt: string
			/**
			 * @description Wait time before agent responds.
			 * @example 30
			 */
			waitTime: number
			/**
			 * @description Unit for wait time.
			 * @example seconds
			 * @enum {string}
			 */
			waitTimeUnit: 'minutes' | 'seconds'
		}
		EmployeeResponseDTO: {
			/** @description List of actions associated with this agent. */
			actions: components['schemas']['ActionsIdDto'][]
			/**
			 * @description Maximum number of messages in auto-pilot mode before requiring human intervention.
			 * @example 25
			 */
			autoPilotMaxMessages: number
			/**
			 * @description Name of the business the agent represents.
			 * @example Tech Corp
			 */
			businessName?: string
			/**
			 * @description Communication channels the agent operates on.
			 * @example [
			 *       "SMS",
			 *       "Live_Chat"
			 *     ]
			 */
			channels: (
				| 'IG'
				| 'FB'
				| 'SMS'
				| 'WebChat'
				| 'WhatsApp'
				| 'Live_Chat'
			)[]
			/**
			 * @description The goal of the agent.
			 * @example Assist customers with inquiries
			 */
			goal?: string
			/**
			 * @description Unique identifier for the agent.
			 * @example emp_123
			 */
			id: string
			/**
			 * @description Instructions for the agent.
			 * @example Provide excellent customer service
			 */
			instructions?: string
			/**
			 * @description Indicates if this agent is a primary agent.
			 * @example false
			 */
			isPrimary: boolean
			/**
			 * @description Array of knowledge base IDs associated with this agent.
			 * @example [
			 *       "kb_123",
			 *       "kb_456"
			 *     ]
			 */
			knowledgeBaseIds?: string[]
			/**
			 * @description Current operating mode of the agent.
			 * @example auto-pilot
			 * @enum {string}
			 */
			mode: 'off' | 'suggestive' | 'auto-pilot'
			/**
			 * @description Name of the agent.
			 * @example John Doe
			 */
			name: string
			/**
			 * @description Personality traits of the agent.
			 * @example Friendly and helpful
			 */
			personality?: string
			/**
			 * @deprecated
			 * @description Indicates if sleep functionality is enabled.
			 * @example false
			 */
			sleepEnabled: boolean
			/**
			 * @description Whether the bot sleeps on manual outbound messages.
			 * @example false
			 */
			sleepOnManualMessage?: boolean
			/**
			 * @description Whether the bot sleeps on workflow outbound messages.
			 * @example false
			 */
			sleepOnWorkflowMessage?: boolean
			/**
			 * @description Duration of sleep period.
			 * @example 2
			 */
			sleepTime?: number
			/**
			 * @description Unit of sleep time.
			 * @example hours
			 * @enum {string}
			 */
			sleepTimeUnit?: 'hours' | 'minutes' | 'seconds'
			/**
			 * @description Wait time before agent responds.
			 * @example 30
			 */
			waitTime: number
			/**
			 * @description Unit for wait time.
			 * @example seconds
			 * @enum {string}
			 */
			waitTimeUnit: 'minutes' | 'seconds'
		}
		fetchActionDetailsResponseDTO: {
			/** @description Action details */
			data: components['schemas']['ActionDataDTO']
			/**
			 * @description Success status of the request
			 * @example true
			 */
			success: boolean
		}
		fetchActionsForEmployeeResponseDTO: {
			/** @description Grouped actions by type */
			data: components['schemas']['ActionDataDTO'][]
			/**
			 * @description Success status of the request
			 * @example true
			 */
			success: boolean
		}
		FetchAIResponseDetailsResponseDTO: {
			/**
			 * @description List of actions taken during this interaction.
			 * @example [
			 *       {
			 *         "contactUpdateAction": [
			 *           {
			 *             "fieldId": "field_123",
			 *             "value": "John Doe"
			 *           }
			 *         ]
			 *       }
			 *     ]
			 */
			actionLogs: unknown[]
			/**
			 * @description ID of the employee/agent that generated the response.
			 * @example emp_123
			 */
			agentId?: string
			/**
			 * @description FAQ chunks used in generating the response from fine-tuned data.
			 * @example [
			 *       {
			 *         "id": "chunk_123",
			 *         "content": "Our return policy allows returns within 30 days of purchase.",
			 *         "title": "Return Policy FAQ"
			 *       }
			 *     ]
			 */
			faqs?: unknown[]
			/**
			 * @description Conversation history leading up to this response.
			 * @example [
			 *       {
			 *         "role": "user",
			 *         "content": "Hi, I have a question about returns"
			 *       },
			 *       {
			 *         "role": "assistant",
			 *         "content": "I'll be happy to help you with information about our return policy."
			 *       }
			 *     ]
			 */
			history: unknown[]
			/**
			 * @description The original input message that triggered this response.
			 * @example What is your return policy?
			 */
			input?: string
			/**
			 * @description The intent/goal extracted from location prompt.
			 * @example Assist customers with product inquiries and support
			 */
			intent?: string
			/**
			 * @description Mode of operation during this interaction.
			 * @example auto-pilot
			 */
			mode?: string
			/**
			 * @description The complete prompt used for the AI response.
			 * @example Personality:
			 *     Friendly and professional,
			 *
			 *     Intent:
			 *     Assist customers with inquiries
			 *
			 *     Additional Information:
			 *     Handle basic support queries
			 */
			prompt: string
			/**
			 * @description The response message generated by the AI.
			 * @example Hello! I understand you're interested in our products. How can I assist you today?
			 */
			responseMessage: string
			/**
			 * @description Website content chunks used in generating the response.
			 * @example [
			 *       {
			 *         "id": "chunk_456",
			 *         "content": "We offer free shipping on orders over $50.",
			 *         "url": "https://example.com/shipping"
			 *       }
			 *     ]
			 */
			website?: unknown[]
		}
		FollowupSequence: {
			/**
			 * @description Whether to use AI to generate the followup message
			 * @default true
			 * @example true
			 */
			aiEnabledMessage: boolean
			/**
			 * @description Whether contact was requested in this followup
			 * @example false
			 */
			contactRequested?: boolean
			/**
			 * @description Custom message to send (when aiEnabledMessage is false)
			 * @example Hi! Just following up on our previous conversation. Do you have any questions?
			 */
			customMessage?: string
			/**
			 * @description Time duration before followup (max: 60 minutes, 24 hours, or 180 days depending on unit)
			 * @example 2
			 */
			followupTime: number
			/**
			 * @description Time unit for followup delay
			 * @example hours
			 * @enum {string}
			 */
			followupTimeUnit: 'days' | 'hours' | 'minutes'
			/**
			 * @description Unique identifier for this followup step
			 * @example 1
			 */
			id: number
			/**
			 * @description Whether to trigger a workflow during this followup
			 * @default false
			 * @example false
			 */
			triggerWorkflow: boolean
			/**
			 * @description Workflow ID to trigger (when triggerWorkflow is true)
			 * @example workflow789
			 */
			workflowId?: string
		}
		FollowupSettings: {
			/**
			 * @description Whether to dynamically switch channels for followups
			 * @default true
			 * @example true
			 */
			dynamicChannelSwitching: boolean
			/**
			 * @description Whether to respect working hours for followups
			 * @example true
			 */
			followUpHours?: boolean
			/**
			 * @description Timezone to use for followups, contact or location
			 * @enum {string}
			 */
			timezoneToUse?: 'contact' | 'business'
			/** @description Working hours configuration for followups */
			workingHours?: components['schemas']['WorkingHours'][]
		}
		humanHandOverDto: {
			/**
			 * @description ID of the user to assign the conversation to
			 * @example user123
			 */
			assignToUserId?: string
			/**
			 * @description Whether to create a task when handing over
			 * @example true
			 */
			createTask?: boolean
			/**
			 * @description Whether human handover action is enabled
			 * @example true
			 */
			enabled: boolean
			/**
			 * @description Example phrases that trigger human handover (required when handoverType is custom or contactRequest)
			 * @example [
			 *       "speak to human",
			 *       "talk to agent",
			 *       "need help from person"
			 *     ]
			 */
			examples?: string[]
			/**
			 * @description Final message sent when handing over to human
			 * @example I am transferring you to a human agent who will assist you shortly.
			 */
			finalMessage: string
			/**
			 * @description Type of human handover detection
			 * @example contactRequest
			 * @enum {string}
			 */
			handoverType:
				| 'contactRequest'
				| 'lackOfInformation'
				| 'failedToResolveIssue'
				| 'custom'
			/**
			 * @description Whether the agent can be reactivated after handover
			 * @example true
			 */
			reactivateEnabled: boolean
			/**
			 * @description Whether to skip assigning to a specific user
			 * @example false
			 */
			skipAssignToUser?: boolean
			/**
			 * @description Time duration before reactivation (required when reactivateEnabled is true)
			 * @example 24
			 */
			sleepTime?: number
			/**
			 * @description Time unit for reactivation delay (required when reactivateEnabled is true)
			 * @example hours
			 * @enum {string}
			 */
			sleepTimeUnit?: 'days' | 'hours' | 'minutes'
			/**
			 * @description Tags to apply during handover
			 * @example [
			 *       "escalated",
			 *       "human-requested"
			 *     ]
			 */
			tags?: string[]
			/**
			 * @description Condition that triggers human handover
			 * @example When the user requests to speak with a human agent or expresses frustration
			 */
			triggerCondition: string
		}
		Interval: {
			/**
			 * @description End hour (24-hour format)
			 * @example 17
			 */
			endHour: number
			/**
			 * @description End minute
			 * @example 30
			 */
			endMinute: number
			/**
			 * @description Start hour (24-hour format)
			 * @example 9
			 */
			startHour: number
			/**
			 * @description Start minute
			 * @example 0
			 */
			startMinute: number
		}
		SearchEmployeeResponseDTO: {
			/** @description List of agents matching the search criteria. */
			agents: components['schemas']['EmployeeListItemDTO'][]
			/**
			 * @description Number of agents in the current response (filtered/paginated count).
			 * @example 25
			 */
			count: number
			/**
			 * @description Total number of agents in the location (unfiltered count).
			 * @example 100
			 */
			totalCount: number
		}
		stopBotDto: {
			/**
			 * @description Whether this action is enabled for the agent
			 * @example true
			 */
			enabled: boolean
			/**
			 * @description Final message sent when stopping the bot
			 * @example Thank you for contacting us. Have a great day!
			 */
			finalMessage: string
			/**
			 * @description Whether the bot can be reactivated after being stopped
			 * @example true
			 */
			reactivateEnabled: boolean
			/**
			 * @description Time duration before reactivation (required when reactivateEnabled is true)
			 * @example 24
			 */
			sleepTime?: number
			/**
			 * @description Time unit for reactivation delay (required when reactivateEnabled is true)
			 * @example hours
			 * @enum {string}
			 */
			sleepTimeUnit?: 'days' | 'hours' | 'minutes'
			/**
			 * @description Type of stop bot detection - Goodbye or Custom
			 * @example Custom
			 * @enum {string}
			 */
			stopBotDetectionType: 'Goodbye' | 'Custom'
			/**
			 * @description Example phrases that trigger stop bot action (minimum 2 required)
			 * @example [
			 *       "goodbye",
			 *       "thank you",
			 *       "no more questions"
			 *     ]
			 */
			stopBotExamples: string[]
			/**
			 * @description Condition that triggers stopping the bot
			 * @example When the user says they no longer need assistance or want to end the conversation
			 */
			stopBotTriggerCondition: string
			/**
			 * @description Tags to apply when stopping the bot
			 * @example [
			 *       "resolved",
			 *       "no-response"
			 *     ]
			 */
			tags?: string[]
		}
		transferBotDto: {
			/**
			 * @description Whether this transfer action is enabled
			 * @example true
			 */
			enabled: boolean
			/**
			 * @description Example phrases that trigger transfer (required for Custom type, minimum 2)
			 * @example [
			 *       "talk to sales",
			 *       "pricing information",
			 *       "speak to specialist"
			 *     ]
			 */
			transferBotExamples?: string[]
			/**
			 * @description Condition that triggers the transfer (required for Custom type)
			 * @example When the user asks to speak with sales or needs pricing information
			 */
			transferBotTriggerCondition?: string
			/**
			 * @description Type of transfer - Default or Custom
			 * @example Custom
			 * @enum {string}
			 */
			transferBotType: 'Default' | 'Custom'
			/**
			 * @description ID of the bot/agent to transfer to
			 * @example employee789
			 */
			transferToBot: string
		}
		triggerWorkflowDto: {
			/**
			 * @description Condition that triggers the workflow
			 * @example When user requests appointment
			 */
			triggerCondition: string
			/**
			 * @description Optional message to send when triggering the workflow
			 * @example Workflow triggered successfully
			 */
			triggerMessage?: string
			/**
			 * @description Array of workflow IDs to trigger
			 * @example [
			 *       "workflow123",
			 *       "workflow456"
			 *     ]
			 */
			workflowIds: string[]
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
		updateActionResponseDTO: {
			/** @description Updated action details */
			data: components['schemas']['ActionDataDTO']
			/**
			 * @description Success status of the request
			 * @example true
			 */
			success: boolean
		}
		updateContactFieldDto: {
			/**
			 * @description ID of the contact field in Contacts Table
			 * @example 123
			 */
			contactFieldId: string
			/**
			 * @description Contact update examples in Contacts Table. Not required when using standard fields, Monetory or Date Custom fields.
			 * @default []
			 * @example [
			 *       "Example 1"
			 *     ]
			 */
			contactUpdateExamples: string[]
			/**
			 * @description Description of the contact field in Contacts Table
			 * @example Business Name
			 */
			description: string
		}
		UpdateEmployeeDto: {
			/**
			 * @description Maximum number of messages in auto-pilot mode before requiring human intervention. (max: 100, min: 1)
			 * @default 75
			 */
			autoPilotMaxMessages: number
			/**
			 * @description Name of the business the agent represents.
			 * @example Tech Corp
			 */
			businessName?: string
			/** @description Channels the agent can use. */
			channels?: (
				| 'IG'
				| 'FB'
				| 'SMS'
				| 'WebChat'
				| 'WhatsApp'
				| 'Live_Chat'
			)[]
			/**
			 * @description The goal of the agent.
			 * @example You are an AI assistant and you are helping customers with inquiries.
			 */
			goal?: string
			/**
			 * @description Instructions for the agent.
			 * @example Provide excellent customer service.
			 */
			instructions?: string
			/**
			 * @description Indicates if this agent is a primary agent.
			 * @example true
			 */
			isPrimary?: boolean
			/** @description Array of knowledge base IDs associated with this agent. */
			knowledgeBaseIds?: string[]
			/**
			 * @description Mode of operation for the agent, required if primary is enabled.
			 * @enum {string}
			 */
			mode?: 'off' | 'suggestive' | 'auto-pilot'
			/**
			 * @description Name of the agent.
			 * @example John Doe
			 */
			name?: string
			/**
			 * @description Personality traits of the agent.
			 * @example You re an AI assistant and you are friendly and helpful
			 */
			personality?: string
			/**
			 * @description Allow agent to respond to audio
			 * @default false
			 * @example true
			 */
			respondToAudio: boolean
			/**
			 * @description Allow agent to respond to images
			 * @default false
			 * @example true
			 */
			respondToImages: boolean
			/**
			 * @deprecated
			 * @description Indicates if sleep functionality is enabled.
			 * @example false
			 */
			sleepEnabled?: boolean
			/**
			 * @description Enable sleep when a manual outbound message is sent.
			 * @example false
			 */
			sleepOnManualMessage?: boolean
			/**
			 * @description Enable sleep when a workflow outbound message is sent.
			 * @example false
			 */
			sleepOnWorkflowMessage?: boolean
			/**
			 * @description Duration of sleep period (required if sleepEnabled is true). Set to null for indefinite sleep. (max 2880 for minutes, 172800 for seconds, 48 for hours)
			 * @example 10
			 */
			sleepTime?: number
			/**
			 * @description Unit of sleep time - HOURS, MINUTES, or SECONDS (required if sleepEnabled is true). Set to null for indefinite sleep.
			 * @enum {string}
			 */
			sleepTimeUnit?: 'hours' | 'minutes' | 'seconds'
			/**
			 * @description Wait time before agent responds (max 5 for minutes, 300 for seconds).
			 * @example 30
			 */
			waitTime?: number
			/**
			 * @description Unit for wait time - SECONDS or MINUTES
			 * @example seconds
			 * @enum {string}
			 */
			waitTimeUnit?: 'minutes' | 'seconds'
		}
		UpdateFollowupSettingsDTO: {
			/**
			 * @example [
			 *       "edxcfghbnjkimd"
			 *     ]
			 */
			actionIds: string[]
			followupSettings: components['schemas']['FollowupSettings']
		}
		WorkingHours: {
			/**
			 * @description Day of the week (0=Sunday, 1=Monday, etc.)
			 * @example 1
			 */
			dayOfTheWeek: number
			/** @description Time intervals for this day */
			intervals?: components['schemas']['Interval'][]
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
				'application/json': components['schemas']['CreateEmployeeDto']
			}
		}
		responses: {
			/** @description Successful response */
			201: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['EmployeeResponseDTO']
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
			query?: never
			header: {
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				/** @description Conversations AI agent id */
				agentId: string
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
					'application/json': components['schemas']['EmployeeResponseDTO']
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
	'update-agent': {
		parameters: {
			query?: never
			header: {
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				/** @description Conversations AI agent id */
				agentId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['UpdateEmployeeDto']
			}
		}
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['EmployeeResponseDTO']
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
			query?: never
			header: {
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				/** @description Conversations AI agent id */
				agentId: string
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
					'application/json': components['schemas']['DeleteEmployeeResponseDTO']
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
	'create-action': {
		parameters: {
			query?: never
			header: {
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				agentId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['CreateActionDTO']
			}
		}
		responses: {
			/** @description Successful response */
			201: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['createActionResponseDTO']
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
	'get-action-by-id': {
		parameters: {
			query?: never
			header: {
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				/** @description The unique identifier of the action ID Attached to the agent */
				actionId: string
				agentId: string
			}
			cookie?: never
		}
		requestBody?: never
		responses: {
			/** @description Success */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['fetchActionDetailsResponseDTO']
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
				/** @description The unique identifier of the action ID Attached to the agent */
				actionId: string
				agentId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['CreateActionDTO']
			}
		}
		responses: {
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['updateActionResponseDTO']
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
			query?: never
			header: {
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				/** @description The unique identifier of the action ID Attached to the agent */
				actionId: string
				agentId: string
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
					'application/json': components['schemas']['deleteActionResponseDTO']
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
	'list-actions': {
		parameters: {
			query?: never
			header: {
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				agentId: string
			}
			cookie?: never
		}
		requestBody?: never
		responses: {
			/** @description Success */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['fetchActionsForEmployeeResponseDTO']
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
	'update-followup-settings': {
		parameters: {
			query?: never
			header: {
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				agentId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['UpdateFollowupSettingsDTO']
			}
		}
		responses: {
			/** @description Success */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['updateActionResponseDTO']
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
	'search-agent': {
		parameters: {
			query?: {
				/** @description Records per page */
				limit?: number
				/** @description query to search on agent name, must be provided in lowercase */
				query?: string
				/** @description Start after is the agent id to start after, Serving as skip, send empty when first page */
				startAfter?: string
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
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['SearchEmployeeResponseDTO']
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
	'get-generation-details': {
		parameters: {
			query: {
				/** @description Message Id */
				messageId: string
				source: 'conversation' | 'workflow'
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
			/** @description Successful response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['FetchAIResponseDetailsResponseDTO']
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
}
