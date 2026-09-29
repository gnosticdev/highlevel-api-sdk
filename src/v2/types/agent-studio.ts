export interface paths {
	'/agent-studio/agent': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * List Agents
		 * @description Lists all active agents for the specified location. locationId is required parameter to ensure optimal performance. Supports pagination using limit and offset. Optionally filter by isPublished=true to return only agents with a published production version.
		 */
		get: operations['getAgents']
		put?: never
		/**
		 * Create Agent
		 * @description Creates a new agent with staging version. The agent will be created with an initial staging version that can later be promoted to production.
		 */
		post: operations['createAgent']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/agent-studio/agent/{agentId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get Agent
		 * @description Gets a specific agent by its ID for the specified location with all its versions. Returns complete agent metadata and all non-deleted versions (draft, staging, production). locationId is required parameter. The agent must have active status.
		 */
		get: operations['getAgentById']
		put?: never
		post?: never
		/**
		 * Delete Agent
		 * @description Deletes an agent and all its versions.
		 */
		delete: operations['deleteAgent']
		options?: never
		head?: never
		/**
		 * Update Agent Metadata
		 * @description Updates agent metadata such as name, description, and status.
		 */
		patch: operations['updateAgentMetadata']
		trace?: never
	}
	'/agent-studio/agent/{agentId}/execute': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Execute Agent
		 * @description Executes the specified agent and returns a non-streaming JSON response with the complete agent output. The agent must be in active status and belong to the specified location. locationId is required in the request body.
		 *
		 *     **Session Management:**
		 *     - For the first message in a new session, do not include the `executionId` in the request payload.
		 *     - The API will return an `executionId` along with the agent response, which uniquely identifies this conversation session.
		 *     - To continue the conversation within the same session, include the `executionId` from the previous response in subsequent requests. This allows the agent to maintain conversation context and history across multiple interactions.
		 */
		post: operations['executeAgent']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/agent-studio/agent/versions/{versionId}': {
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
		 * Update Agent
		 * @description Updates a specific agent version by versionId. Supports updating nodes, edges, variables, and configuration.
		 */
		patch: operations['updateAgentVersion']
		trace?: never
	}
	'/agent-studio/agent/versions/{versionId}/publish': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Promote to Production
		 * @description Promotes a draft version to production.
		 */
		post: operations['promoteAndPublish']
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/agent-studio/public-api/agents': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * List Agents (Deprecated)
		 * @deprecated
		 * @description **Deprecated endpoint - use GET /agent instead.**
		 *
		 *     Lists all active agents that have a published production version for the specified location. locationId is required parameter. Supports pagination using limit and offset.
		 */
		get: operations['getAgents-deprecated']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/agent-studio/public-api/agents/{agentId}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/**
		 * Get Agent (Deprecated)
		 * @deprecated
		 * @description **Deprecated endpoint - use GET /agent/:agentId instead.**
		 *
		 *     Gets a specific agent by its ID for the specified location with all its versions. locationId is required parameter. The agent must have active status.
		 */
		get: operations['getAgentById-deprecated']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/agent-studio/public-api/agents/{agentId}/execute': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		get?: never
		put?: never
		/**
		 * Execute Agent (Deprecated)
		 * @deprecated
		 * @description **Deprecated endpoint - use POST /agent/:agentId/execute instead.**
		 *
		 *     Executes the specified agent and returns a non-streaming JSON response with the complete agent output. The agent must be in active status and belong to the specified location. locationId is required in the request body.
		 *
		 *     **Session Management:**
		 *     - For the first message in a new session, do not include the `executionId` in the request payload.
		 *     - The API will return an `executionId` along with the agent response, which uniquely identifies this conversation session.
		 *     - To continue the conversation within the same session, include the `executionId` from the previous response in subsequent requests.
		 */
		post: operations['executeAgent-deprecated']
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
		BadRequestDTO: {
			/** @example Bad Request */
			message?: string
			/** @example 400 */
			statusCode?: number
		}
		CreatePublicAgentDTO: {
			/**
			 * @description Agency ID
			 * @example gjL2sFNXJfJYa3d2OYSN
			 */
			agencyId?: string
			/**
			 * @description Author email
			 * @example john@example.com
			 */
			authorEmail?: string
			/**
			 * @description Author ID
			 * @example usr_abc123def456
			 */
			authorId?: string
			/**
			 * @description Author name
			 * @example John Doe
			 */
			authorName?: string
			/**
			 * @description Description of the agent
			 * @example AI agent specialized in handling customer inquiries and support tickets
			 */
			description?: string
			/**
			 * @description Edges array (deprecated, prefer using version.edges)
			 * @example []
			 */
			edges?: string[]
			/**
			 * @description Location ID
			 * @example C2QujeCh8ZnC7al2InWR
			 */
			locationId: string
			/**
			 * @description Name of the agent
			 * @example Customer Support Agent
			 */
			name?: string
			/**
			 * @description Nodes array (deprecated, prefer using version.nodes)
			 * @example []
			 */
			nodes?: string[]
			/**
			 * @description Status of the agent
			 * @example active
			 * @enum {string}
			 */
			status: 'active' | 'inactive' | 'archived'
			/**
			 * @description Version data for the agent including nodes, edges, and configuration
			 * @example {
			 *       "versionName": "Version 1",
			 *       "description": "Initial version",
			 *       "nodes": [],
			 *       "edges": [],
			 *       "uiNodes": [],
			 *       "uiEdges": [],
			 *       "globalVariables": [],
			 *       "inputVariables": [],
			 *       "runtimeVariables": [],
			 *       "scopes": []
			 *     }
			 */
			version: Record<string, never>
		}
		CreatePublicAgentResponseDTO: {
			/**
			 * @description Created agent data with metadata
			 * @example {
			 *       "agentId": "p1q2r3s4t5u6v7w8x9y0z1a2",
			 *       "name": "Customer Support Agent",
			 *       "description": "AI agent specialized in handling customer inquiries and support tickets",
			 *       "locationId": "C2QujeCh8ZnC7al2InWR",
			 *       "agencyId": "gjL2sFNXJfJYa3d2OYSN",
			 *       "status": "active",
			 *       "authorId": "usr_abc123def456",
			 *       "folderId": "C2QujeCh8ZnC7al2InWR",
			 *       "folderName": null,
			 *       "createdAt": "2024-02-27T10:30:00.000Z",
			 *       "updatedAt": "2024-02-27T10:30:00.000Z"
			 *     }
			 */
			agent: Record<string, never>
			/**
			 * @description Response message
			 * @example Agent created successfully with staging version.
			 */
			message: string
			/**
			 * @description Success status
			 * @example true
			 */
			success: boolean
			/**
			 * @description Created versions array (initial staging version)
			 * @example [
			 *       {
			 *         "versionId": "v1a2b3c4d5e6f7g8h9i0",
			 *         "agentId": "p1q2r3s4t5u6v7w8x9y0z1a2",
			 *         "versionName": "Customer Support Agent v1",
			 *         "state": "staging",
			 *         "isPublished": false,
			 *         "version": 1,
			 *         "createdAt": "2024-02-27T10:30:00.000Z"
			 *       }
			 *     ]
			 */
			versions: unknown[]
		}
		DeletePublicAgentResponseDTO: {
			/**
			 * @description Deleted agent ID
			 * @example p1q2r3s4t5u6v7w8x9y0z1a2
			 */
			agentId?: string
			/**
			 * @description Response message
			 * @example Agent deleted successfully
			 */
			message: string
			/**
			 * @description Success status
			 * @example true
			 */
			success: boolean
		}
		ExecutePublicAgentDTO: {
			/** @description Attachments for the message */
			attachments?: components['schemas']['PublicAttachmentSchema'][]
			/**
			 * @description Contact ID to associate with this execution. When provided, contact data will be hydrated and made available to the agent.
			 * @example cid_abc123def456
			 */
			contactId?: string
			/**
			 * @description Unique session identifier that maintains conversational context across multiple interactions within the same agent session. Omit this field for the first message in a new session. Include the executionId returned from the previous response to maintain context in subsequent messages.
			 * @example a1b2c3d4e5f6g7h8i9j0k1l2
			 */
			executionId?: string
			/**
			 * @description Input variables to pass to the agent. These should match the input variables defined in the agent configuration.
			 * @example {
			 *       "customerName": "John Doe",
			 *       "orderNumber": "ORD-12345"
			 *     }
			 */
			inputVariables?: Record<string, never>
			/**
			 * @description Location ID
			 * @example C2QujeCh8ZnC7al2InWR
			 */
			locationId: string
			/**
			 * @description Message to send to the agent
			 * @example How can you help me with my marketing?
			 */
			message: string
			/**
			 * @description Published version ID to execute. If not provided, the latest published production version will be used.
			 * @example b2b1c1d2-3e4f-5a6b-7c8d-9e0f1a2b3c4d
			 */
			versionId?: string
		}
		ExecutePublicAgentResponseDTO: {
			/**
			 * @description Response attachments
			 * @example []
			 */
			attachments: unknown[]
			/**
			 * @description Unique session identifier that maintains conversational context across multiple interactions within the same agent session. Use this ID in subsequent requests to continue the conversation.
			 * @example a1b2c3d4e5f6g7h8i9j0k1l2
			 */
			executionId: string
			/**
			 * @description Execution status
			 * @example completed
			 */
			executionStatus: string
			/**
			 * @description Whether flow was switched
			 * @example false
			 */
			flowSwitch: boolean
			/**
			 * @description Generated outputs
			 * @example []
			 */
			generativeOutputs: unknown[]
			/**
			 * @description When end node is added in the graph, this will be true if the agent reached the end node in the graph
			 * @example false
			 */
			goalCompletion: boolean
			/**
			 * @description Unique identifier for a single interaction cycle, consisting of one user input and the corresponding agent response. Each message exchange generates a new interactionId.
			 * @example m9n8o7p6q5r4s3t2u1v0w9x8
			 */
			interactionId: string
			/**
			 * @description Expected input type for next interaction
			 * @example text
			 */
			nextExpectedInput: string
			/**
			 * @description Agent response text
			 * @example I can help you with various tasks...
			 */
			response: string
			/**
			 * @description Success status
			 * @example true
			 */
			success: boolean
			/**
			 * @description Response type
			 * @example text
			 */
			type: string
		}
		GetAgentByIdResponseDTO: {
			/**
			 * @description Agent metadata with all active versions
			 * @example {
			 *       "id": "d6a6792d-0d50-4e8f-9c3b-ecd8096d0bdd",
			 *       "agentId": "AgfS2JXWsSN8aXb5c4d2",
			 *       "name": "Customer Support Agent",
			 *       "description": "AI agent for customer support",
			 *       "agencyId": "5DP4iH6HLkQsiKESj6rh",
			 *       "locationId": "C2QujeCh8ZnC7al2InWR",
			 *       "productSlug": "agent_studio",
			 *       "productId": "agent_studio",
			 *       "authorId": "usr_123",
			 *       "status": "active",
			 *       "folderId": "vEoIigWSAw1BQA9DEchD",
			 *       "folderName": "Default Agents",
			 *       "createdAt": "2026-03-06T10:37:01.013Z",
			 *       "updatedAt": "2026-03-06T10:37:01.014Z",
			 *       "deleted": false,
			 *       "productionVersion": {
			 *         "versionId": "Ver1K8sSF2nC7al5InWz",
			 *         "versionName": "Content Creation Agent v1",
			 *         "isPublished": true,
			 *         "inputVariables": [],
			 *         "updatedAt": "2026-03-02T06:53:40.570Z"
			 *       },
			 *       "versions": [
			 *         {
			 *           "id": "3f9d9ab7-5ca4-4e64-8472-eab9e77a0fe3",
			 *           "versionId": "Ver1K8sSF2nC7al5InWz",
			 *           "agentId": "AgfS2JXWsSN8aXb5c4d2",
			 *           "agencyId": "5DP4iH6HLkQsiKESj6rh",
			 *           "locationId": "C2QujeCh8ZnC7al2InWR",
			 *           "versionName": "v1",
			 *           "description": "AI agent for customer support",
			 *           "state": "staging",
			 *           "isPublished": false,
			 *           "scopes": [],
			 *           "nodes": [],
			 *           "edges": [],
			 *           "uiNodes": [],
			 *           "uiEdges": [],
			 *           "globalVariables": [],
			 *           "inputVariables": [],
			 *           "runtimeVariables": [],
			 *           "viewport": {
			 *             "x": 0,
			 *             "y": 0,
			 *             "zoom": 1
			 *           },
			 *           "globalConfig": {},
			 *           "createdAt": "2026-03-06T10:37:01.079Z",
			 *           "updatedAt": "2026-03-06T10:37:01.079Z",
			 *           "deleted": false,
			 *           "storedInBucket": true,
			 *           "bucketFilePath": "agent-definitions/5DP4iH6HLkQsiKESj6rh/vEoIigWSAw1BQA9DEchD/d6a6792d-0d50-4e8f-9c3b-ecd8096d0bdd/3f9d9ab7-5ca4-4e64-8472-eab9e77a0fe3.json"
			 *         }
			 *       ]
			 *     }
			 */
			agent: Record<string, never>
			/**
			 * @description Response message
			 * @example Agent retrieved successfully
			 */
			message: string
			/**
			 * @description Success status
			 * @example true
			 */
			success: boolean
			/**
			 * @description Request trace ID for debugging
			 * @example 22dbda99-13d3-4b4d-a30e-c468334e2178
			 */
			traceId?: string
		}
		GetPublishedAgentsResponseDTO: {
			/**
			 * @description List of agents with metadata
			 * @example [
			 *       {
			 *         "agentId": "p1q2r3s4t5u6v7w8x9y0z1a2",
			 *         "name": "Marketing Assistant",
			 *         "description": "AI agent specialized in marketing strategy and content creation",
			 *         "locationId": "C2QujeCh8ZnC7al2InWR",
			 *         "status": "active",
			 *         "createdAt": "2024-01-15T10:30:00.000Z",
			 *         "updatedAt": "2024-02-20T14:45:00.000Z"
			 *       },
			 *       {
			 *         "agentId": "b3c4d5e6f7g8h9i0j1k2l3m4",
			 *         "name": "Customer Support Bot",
			 *         "description": "AI agent for handling customer inquiries and support tickets",
			 *         "locationId": "C2QujeCh8ZnC7al2InWR",
			 *         "status": "active",
			 *         "createdAt": "2024-01-10T09:15:00.000Z",
			 *         "updatedAt": "2024-02-18T16:20:00.000Z"
			 *       }
			 *     ]
			 */
			agents: {
				/** @description Agent ID */
				agentId?: string
				/** @description Creation timestamp */
				createdAt?: string
				/** @description Agent description */
				description?: string
				/** @description Location ID */
				locationId?: string
				/** @description Agent name */
				name?: string
				/** @description Agent status (always "active") */
				status?: string
				/** @description Last update timestamp */
				updatedAt?: string
			}[]
			/**
			 * @description Response message
			 * @example Agents retrieved successfully
			 */
			message: string
			/**
			 * @description Pagination metadata
			 * @example {
			 *       "total": 25,
			 *       "limit": 20,
			 *       "offset": 0,
			 *       "hasMore": true
			 *     }
			 */
			pagination: {
				/** @description Whether more agents exist */
				hasMore?: boolean
				/** @description Number of agents per page */
				limit?: number
				/** @description Starting position */
				offset?: number
				/** @description Total number of agents */
				total?: number
			}
			/**
			 * @description Success status
			 * @example true
			 */
			success: boolean
		}
		InternalServerErrorDTO: {
			/** @example Internal Server Error */
			message?: string
			/** @example 500 */
			statusCode?: number
		}
		PromoteAndPublishDTO: {
			/**
			 * @description Location ID for authorization
			 * @example C2QujeCh8ZnC7al2InWR
			 */
			locationId: string
			/**
			 * @description User email performing the promotion action
			 * @example john.doe@example.com
			 */
			userEmail?: string
			/**
			 * @description User ID performing the promotion action
			 * @example usr_abc123def456
			 */
			userId?: string
			/**
			 * @description User name performing the promotion action
			 * @example John Doe
			 */
			userName?: string
		}
		PromoteAndPublishResponseDTO: {
			/**
			 * @description Result data with production and new draft version details
			 * @example {
			 *       "productionVersion": {
			 *         "versionId": "v1a2b3c4d5e6f7g8h9i0",
			 *         "agentId": "p1q2r3s4t5u6v7w8x9y0z1a2",
			 *         "versionName": "Customer Support Agent v2",
			 *         "state": "prod",
			 *         "isPublished": true,
			 *         "version": 2,
			 *         "publishedAt": "2024-02-27T12:00:00.000Z",
			 *         "publishedBy": "usr_abc123def456",
			 *         "publishedByName": "John Doe",
			 *         "publishedByEmail": "john.doe@example.com"
			 *       },
			 *       "newDraftVersion": {
			 *         "versionId": "v2b3c4d5e6f7g8h9i0j1",
			 *         "agentId": "p1q2r3s4t5u6v7w8x9y0z1a2",
			 *         "versionName": "Customer Support Agent v3",
			 *         "state": "draft",
			 *         "isPublished": false,
			 *         "version": 3,
			 *         "createdAt": "2024-02-27T12:00:00.000Z"
			 *       }
			 *     }
			 */
			data: Record<string, never>
			/**
			 * @description Response message
			 * @example Draft published to production successfully. New draft version created for future edits.
			 */
			message: string
			/**
			 * @description Success status
			 * @example true
			 */
			success: boolean
		}
		PublicAttachmentSchema: {
			/**
			 * @description URL of the image attachment
			 * @example https://example.com/image.png
			 */
			imageUrl: string
			/**
			 * @description Type of attachment
			 * @example image
			 */
			type: string
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
		UpdatePublicAgentMetadataDTO: {
			/**
			 * @description Description of the agent
			 * @example Updated AI agent with enhanced customer support capabilities
			 */
			description?: string
			/**
			 * @description Location ID for authorization (cannot be updated)
			 * @example C2QujeCh8ZnC7al2InWR
			 */
			locationId: string
			/**
			 * @description Name of the agent
			 * @example Updated Customer Support Agent
			 */
			name?: string
			/**
			 * @description Status of the agent
			 * @example active
			 * @enum {string}
			 */
			status?: 'active' | 'inactive' | 'archived'
		}
		UpdatePublicAgentResponseDTO: {
			/**
			 * @description Updated agent or version data
			 * @example {
			 *       "agentId": "p1q2r3s4t5u6v7w8x9y0z1a2",
			 *       "versionId": "v1a2b3c4d5e6f7g8h9i0",
			 *       "name": "Updated Customer Support Agent",
			 *       "description": "Updated AI agent with enhanced customer support capabilities",
			 *       "status": "active",
			 *       "updatedAt": "2024-02-27T11:45:00.000Z"
			 *     }
			 */
			data: Record<string, never>
			/**
			 * @description Response message
			 * @example Agent updated successfully
			 */
			message: string
			/**
			 * @description Success status
			 * @example true
			 */
			success: boolean
		}
		UpdatePublicAgentVersionDTO: {
			/**
			 * @description Description of the version
			 * @example Updated version with improved customer handling logic
			 */
			description?: string
			/**
			 * @description Complete array of edges connecting the nodes. Provide all edges including unchanged ones.
			 * @example [
			 *       {
			 *         "startNode": "node_1",
			 *         "endNode": "node_2"
			 *       }
			 *     ]
			 */
			edges?: Record<string, never>[]
			/**
			 * @description Global configuration including prompts and settings
			 * @example {
			 *       "globalPrompt": {
			 *         "currentPrompt": "You are a helpful customer support assistant.",
			 *         "history": []
			 *       }
			 *     }
			 */
			globalConfig?: Record<string, never>
			/**
			 * @description Global variables accessible throughout the agent workflow
			 * @example [
			 *       {
			 *         "key": "apiKey",
			 *         "type": "string",
			 *         "value": "your-api-key"
			 *       }
			 *     ]
			 */
			globalVariables?: Record<string, never>[]
			/**
			 * @description Input variables required from user at execution time
			 * @example [
			 *       {
			 *         "key": "customerName",
			 *         "type": "string",
			 *         "description": "Customer name for personalization"
			 *       }
			 *     ]
			 */
			inputVariables?: Record<string, never>[]
			/**
			 * @description Location ID for authorization
			 * @example C2QujeCh8ZnC7al2InWR
			 */
			locationId: string
			/**
			 * @description Complete array of nodes for the agent workflow. Provide all nodes including unchanged ones.
			 * @example [
			 *       {
			 *         "nodeId": "node_1",
			 *         "nodeName": "Start",
			 *         "type": "start",
			 *         "isStartNode": true
			 *       },
			 *       {
			 *         "nodeId": "node_2",
			 *         "nodeName": "LLM Node",
			 *         "type": "llm",
			 *         "nodeConfig": {
			 *           "prompt": "How can I help you?",
			 *           "llmProvider": "openai",
			 *           "llmModel": "gpt-4"
			 *         }
			 *       }
			 *     ]
			 */
			nodes?: Record<string, never>[]
			/**
			 * @description Runtime variables generated during agent execution
			 * @example [
			 *       {
			 *         "key": "sessionId",
			 *         "type": "string",
			 *         "description": "Current session identifier"
			 *       }
			 *     ]
			 */
			runtimeVariables?: Record<string, never>[]
			/**
			 * @description User ID performing the update
			 * @example usr_abc123def456
			 */
			userId?: string
			/**
			 * @description User name performing the update
			 * @example John Doe
			 */
			userName?: string
			/**
			 * @description Version name
			 * @example Customer Support Agent v2
			 */
			versionName?: string
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
	getAgents: {
		parameters: {
			query: {
				/**
				 * @description Optional filter to return only agents with a published production version
				 * @example true
				 */
				isPublished?: string
				/** @example 20 */
				limit: string
				/** @example C2QujeCh8ZnC7al2InWR */
				locationId: string
				/** @example 0 */
				offset: string
				/** @example api */
				source?: string
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
			/** @description Agents retrieved successfully */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['GetPublishedAgentsResponseDTO']
				}
			}
			/** @description Bad Request - locationId is required */
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
			/** @description Internal Server Error */
			500: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['InternalServerErrorDTO']
				}
			}
		}
	}
	createAgent: {
		parameters: {
			query?: {
				/** @example api */
				source?: string
			}
			header: {
				/** @description API Version */
				Version: '2021-04-15'
			}
			path?: never
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['CreatePublicAgentDTO']
			}
		}
		responses: {
			/** @description Agent created successfully */
			201: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['CreatePublicAgentResponseDTO']
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
			/** @description Internal Server Error */
			500: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['InternalServerErrorDTO']
				}
			}
		}
	}
	getAgentById: {
		parameters: {
			query: {
				/** @example C2QujeCh8ZnC7al2InWR */
				locationId: string
				/** @example api */
				source?: string
			}
			header: {
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				/** @example p1q2r3s4t5u6v7w8x9y0z1a2 */
				agentId: string
			}
			cookie?: never
		}
		requestBody?: never
		responses: {
			/** @description Agent retrieved successfully */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['GetAgentByIdResponseDTO']
				}
			}
			/** @description Bad Request - locationId is required */
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
			/** @description Agent not found or not available */
			404: {
				headers: {
					[name: string]: unknown
				}
				content?: never
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
			/** @description Internal Server Error */
			500: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['InternalServerErrorDTO']
				}
			}
		}
	}
	deleteAgent: {
		parameters: {
			query: {
				/** @example C2QujeCh8ZnC7al2InWR */
				locationId: string
				/** @example api */
				source?: string
			}
			header: {
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				/** @example p1q2r3s4t5u6v7w8x9y0z1a2 */
				agentId: string
			}
			cookie?: never
		}
		requestBody?: never
		responses: {
			/** @description Agent deleted successfully */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['DeletePublicAgentResponseDTO']
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
			/** @description Agent not found */
			404: {
				headers: {
					[name: string]: unknown
				}
				content?: never
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
			/** @description Internal Server Error */
			500: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['InternalServerErrorDTO']
				}
			}
		}
	}
	updateAgentMetadata: {
		parameters: {
			query?: {
				/** @example api */
				source?: string
			}
			header: {
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				/** @example p1q2r3s4t5u6v7w8x9y0z1a2 */
				agentId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['UpdatePublicAgentMetadataDTO']
			}
		}
		responses: {
			/** @description Agent metadata updated successfully */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UpdatePublicAgentResponseDTO']
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
			/** @description Agent not found */
			404: {
				headers: {
					[name: string]: unknown
				}
				content?: never
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
			/** @description Internal Server Error */
			500: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['InternalServerErrorDTO']
				}
			}
		}
	}
	executeAgent: {
		parameters: {
			query?: {
				/** @example api */
				source?: string
			}
			header: {
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				/** @example p1q2r3s4t5u6v7w8x9y0z1a2 */
				agentId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['ExecutePublicAgentDTO']
			}
		}
		responses: {
			/** @description Agent executed successfully */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['ExecutePublicAgentResponseDTO']
				}
			}
			/** @description Agent is not active or invalid request - locationId is required */
			400: {
				headers: {
					[name: string]: unknown
				}
				content?: never
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
			/** @description User does not have required scopes to execute this agent */
			403: {
				headers: {
					[name: string]: unknown
				}
				content?: never
			}
			/** @description Agent not found */
			404: {
				headers: {
					[name: string]: unknown
				}
				content?: never
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
			/** @description Internal Server Error */
			500: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['InternalServerErrorDTO']
				}
			}
		}
	}
	updateAgentVersion: {
		parameters: {
			query?: {
				/** @example api */
				source?: string
			}
			header: {
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				/** @example v1a2b3c4d5e6f7g8h9i0 */
				versionId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['UpdatePublicAgentVersionDTO']
			}
		}
		responses: {
			/** @description Version updated successfully */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['UpdatePublicAgentResponseDTO']
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
			/** @description Version not found */
			404: {
				headers: {
					[name: string]: unknown
				}
				content?: never
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
			/** @description Internal Server Error */
			500: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['InternalServerErrorDTO']
				}
			}
		}
	}
	promoteAndPublish: {
		parameters: {
			query?: {
				/** @example api */
				source?: string
			}
			header: {
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				/** @example v1a2b3c4d5e6f7g8h9i0 */
				versionId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['PromoteAndPublishDTO']
			}
		}
		responses: {
			/** @description Version promoted and published successfully */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['PromoteAndPublishResponseDTO']
				}
			}
			/** @description Bad Request - Only draft versions can be promoted */
			400: {
				headers: {
					[name: string]: unknown
				}
				content?: never
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
			/** @description Version not found */
			404: {
				headers: {
					[name: string]: unknown
				}
				content?: never
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
			/** @description Internal Server Error */
			500: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['InternalServerErrorDTO']
				}
			}
		}
	}
	'getAgents-deprecated': {
		parameters: {
			query: {
				/** @example 20 */
				limit: string
				/** @example C2QujeCh8ZnC7al2InWR */
				locationId: string
				/** @example 0 */
				offset: string
				/** @example api */
				source?: string
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
			/** @description Agents retrieved successfully */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['GetPublishedAgentsResponseDTO']
				}
			}
			/** @description Bad Request - locationId is required */
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
			/** @description Internal Server Error */
			500: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['InternalServerErrorDTO']
				}
			}
		}
	}
	'getAgentById-deprecated': {
		parameters: {
			query: {
				/** @example C2QujeCh8ZnC7al2InWR */
				locationId: string
				/** @example api */
				source?: string
			}
			header: {
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				/** @example p1q2r3s4t5u6v7w8x9y0z1a2 */
				agentId: string
			}
			cookie?: never
		}
		requestBody?: never
		responses: {
			/** @description Agent retrieved successfully */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['GetAgentByIdResponseDTO']
				}
			}
			/** @description Bad Request - locationId is required */
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
			/** @description Agent not found or not available */
			404: {
				headers: {
					[name: string]: unknown
				}
				content?: never
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
			/** @description Internal Server Error */
			500: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['InternalServerErrorDTO']
				}
			}
		}
	}
	'executeAgent-deprecated': {
		parameters: {
			query?: {
				/** @example api */
				source?: string
			}
			header: {
				/** @description API Version */
				Version: '2021-04-15'
			}
			path: {
				/** @example p1q2r3s4t5u6v7w8x9y0z1a2 */
				agentId: string
			}
			cookie?: never
		}
		requestBody: {
			content: {
				'application/json': components['schemas']['ExecutePublicAgentDTO']
			}
		}
		responses: {
			/** @description Agent executed successfully */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['ExecutePublicAgentResponseDTO']
				}
			}
			/** @description Agent is not active or invalid request - locationId is required */
			400: {
				headers: {
					[name: string]: unknown
				}
				content?: never
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
			/** @description User does not have required scopes to execute this agent */
			403: {
				headers: {
					[name: string]: unknown
				}
				content?: never
			}
			/** @description Agent not found */
			404: {
				headers: {
					[name: string]: unknown
				}
				content?: never
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
			/** @description Internal Server Error */
			500: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['InternalServerErrorDTO']
				}
			}
		}
	}
}
