export interface paths {
    "/conversations/search": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Search Conversations
         * @description Returns a list of all conversations matching the search criteria along with the sort and filter options selected.
         */
        get: operations["search-conversation"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/conversations/{conversationId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Conversation
         * @description Get the conversation details based on the conversation ID
         */
        get: operations["get-conversation"];
        /**
         * Update Conversation
         * @description Update the conversation details based on the conversation ID
         */
        put: operations["update-conversation"];
        post?: never;
        /**
         * Delete Conversation
         * @description Delete the conversation details based on the conversation ID
         */
        delete: operations["delete-conversation"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/conversations/messages/email/{emailMessageId}/schedule": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /**
         * Cancel a scheduled email message.
         * @description Post the messageId for the API to delete a scheduled email message. <br />
         */
        delete: operations["cancel-scheduled-email-message"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/conversations/messages": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Send a new message
         * @description Post the necessary fields for the API to send a new message.
         */
        post: operations["send-a-new-message"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/conversations/messages/inbound": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Add an inbound message
         * @description Post the necessary fields for the API to add a new inbound message. <br />
         */
        post: operations["add-an-inbound-message"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/conversations/messages/{messageId}/schedule": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /**
         * Cancel a scheduled message.
         * @description Post the messageId for the API to delete a scheduled message. <br />
         */
        delete: operations["cancel-scheduled-message"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/conversations/messages/upload": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Upload file attachments
         * @description Post the necessary fields for the API to upload files. The files need to be a buffer with the key "fileAttachment" <br /><br /> The API will return an object with the URLs
         */
        post: operations["upload-file-attachments"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/conversations/messages/{messageId}/status": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Update message status
         * @description Post the necessary fields for the API to update message status.
         */
        put: operations["update-message-status"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/conversations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create Conversation
         * @description Creates a new conversation with the data provided
         */
        post: operations["create-conversation"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        BadRequestDto: {
            /** @example 400 */
            statusCode?: number;
            /** @example Bad Request */
            message?: string;
        };
        UnauthorizedDto: {
            /** @example 401 */
            statusCode?: number;
            /** @example Invalid token: access token is invalid */
            message?: string;
            /** @example Unauthorized */
            error?: string;
        };
        ConversationSchema: {
            /**
             * @description Conversation Id
             * @example ABCHkzuJQ8ZMd4Te84GK
             */
            id: string;
            /**
             * @description Contact Id
             * @example ABCHkzuJQ8ZMd4Te84GK
             */
            contactId: string;
            /**
             * @description Location Id
             * @example ABCHkzuJQ8ZMd4Te84GK
             */
            locationId: string;
            /**
             * @description Last Message Body of the conversation
             * @example This is a sample message body
             */
            lastMessageBody: string;
            /**
             * @description Last message type of the conversation
             * @example TYPE_SMS
             * @enum {string}
             */
            lastMessageType: "TYPE_CALL" | "TYPE_SMS" | "TYPE_EMAIL" | "TYPE_SMS_REVIEW_REQUEST" | "TYPE_WEBCHAT" | "TYPE_SMS_NO_SHOW_REQUEST" | "TYPE_CAMPAIGN_SMS" | "TYPE_CAMPAIGN_CALL" | "TYPE_CAMPAIGN_EMAIL" | "TYPE_CAMPAIGN_VOICEMAIL" | "TYPE_FACEBOOK" | "TYPE_CAMPAIGN_FACEBOOK" | "TYPE_CAMPAIGN_MANUAL_CALL" | "TYPE_CAMPAIGN_MANUAL_SMS" | "TYPE_GMB" | "TYPE_CAMPAIGN_GMB" | "TYPE_REVIEW" | "TYPE_INSTAGRAM" | "TYPE_WHATSAPP" | "TYPE_CUSTOM_SMS" | "TYPE_CUSTOM_EMAIL";
            /**
             * @description Type of the conversation
             * @example TYPE_PHONE
             * @enum {string}
             */
            type: "TYPE_PHONE" | "TYPE_EMAIL" | "TYPE_FB_MESSENGER" | "TYPE_REVIEW";
            /**
             * @description Unread count of the messages in the conversation
             * @example 1
             */
            unreadCount: number;
            /**
             * @description Full name of the contact
             * @example John Doe
             */
            fullName: string;
            /**
             * @description Name of the contact in case the Full Name is missing, may contain the company name or the contact email
             * @example John Doe Company
             */
            contactName: string;
            /**
             * @description Email of the contact
             * @example johndoe@mailingdomain.com
             */
            email: string;
            /**
             * @description Phone number of the contact
             * @example +15550001234
             */
            phone: string;
        };
        SendConversationResponseDto: {
            /** @description The list of all conversations found for the given query */
            conversations: components["schemas"]["ConversationSchema"][];
            /**
             * @description Total Number of results found for the given query
             * @example 100
             */
            total: number;
        };
        CreateConversationDto: {
            /**
             * @description Location ID as string
             * @example tDtDnQdgm2LXpyiqYvZ6
             */
            locationId: string;
            /**
             * @description Contact ID as string
             * @example tDtDnQdgm2LXpyiqYvZ6
             */
            contactId: string;
        };
        ConversationDto: {
            /**
             * @description Location ID as string
             * @example tDtDnQdgm2LXpyiqYvZ6
             */
            locationId: string;
            /**
             * @description Contact ID as string
             * @example tDtDnQdgm2LXpyiqYvZ6
             */
            contactId: string;
            /**
             * @description Assigned User ID as string
             * @example tDtDnQdgm2LXpyiqYvZ6
             */
            assignedTo?: string;
            /**
             * @description User ID as string
             * @example tDtDnQdgm2LXpyiqYvZ6
             */
            userId?: string;
            /**
             * @description Last message body as string
             * @example Hello, this is the message body
             */
            lastMessageBody?: string;
            /**
             * @description Last message date as UTC
             * @example 1628008053263
             */
            lastMessageDate?: string;
            /**
             * @description Type of the last message sent/receieved in the conversation.
             * @example TYPE_CALL
             * @enum {string}
             */
            lastMessageType?: "TYPE_CALL" | "TYPE_SMS" | "TYPE_EMAIL" | "TYPE_SMS_REVIEW_REQUEST" | "TYPE_WEBCHAT" | "TYPE_SMS_NO_SHOW_REQUEST" | "TYPE_CAMPAIGN_SMS" | "TYPE_CAMPAIGN_CALL" | "TYPE_CAMPAIGN_EMAIL" | "TYPE_CAMPAIGN_VOICEMAIL" | "TYPE_FACEBOOK" | "TYPE_CAMPAIGN_FACEBOOK" | "TYPE_CAMPAIGN_MANUAL_CALL" | "TYPE_CAMPAIGN_MANUAL_SMS" | "TYPE_GMB" | "TYPE_CAMPAIGN_GMB" | "TYPE_REVIEW" | "TYPE_INSTAGRAM" | "TYPE_WHATSAPP" | "TYPE_CUSTOM_SMS" | "TYPE_CUSTOM_EMAIL";
            /**
             * @description Count of unread messages in the conversation
             * @example 1
             */
            unreadCount?: number;
            /**
             * @description Inbox status of the conversation.
             * @example true
             */
            inbox?: boolean;
            /**
             * @description Starred status of the conversation.
             * @example true
             */
            starred?: boolean;
            /**
             * @description Deleted status of the conversation.
             * @example false
             */
            deleted: boolean;
        };
        GetConversationSuccessfulResponse: {
            /**
             * @description Boolean value as the API response.
             * @example true
             */
            success: boolean;
            /** @description Conversation data of the provided conversation ID. */
            conversation: components["schemas"]["ConversationDto"];
        };
        UpdateConversationDto: {
            /**
             * @description Location ID as string
             * @example tDtDnQdgm2LXpyiqYvZ6
             */
            locationId: string;
            /**
             * @description Count of unread messages in the conversation
             * @example 1
             */
            unreadCount?: number;
            /**
             * @description Starred status of the conversation.
             * @example true
             */
            starred?: boolean;
        };
        DeleteConversationSuccessfulResponse: {
            /**
             * @description Boolean value as the API response.
             * @example true
             */
            success: boolean;
        };
        CancelScheduledResponseDto: {
            /**
             * @description HTTP Status code of the request
             * @example 404
             */
            status: number;
            /**
             * @description Error message of the request
             * @example Failed cancel the scheduled message
             */
            message: string;
        };
        SendMessageBodyDto: {
            /** @enum {string} */
            type: "SMS" | "Email" | "WhatsApp" | "GMB" | "IG" | "FB";
            contactId: string;
            appointmentId?: string;
            attachments?: string[];
            emailFrom?: string;
            html?: string;
            message?: string;
            subject?: string;
            templateId?: string;
            /**
             * @description UTC Timestamp (in seconds) at which the message should be scheduled
             * @example 1669287863
             */
            scheduledTimestamp?: number;
        };
        SendMessageResponseDto: {
            /**
             * @description Conversation ID.
             * @example ABC12h2F6uBrIkfXYazb
             */
            conversationId: string;
            /**
             * @description This contains the email message id (only for Email type). Use this ID to send inbound replies to GHL to create a threaded email.
             * @example rnGyqh2F6uBrIkfhFo9A
             */
            emailMessageId?: string;
            /**
             * @description This is the main Message ID
             * @example t22c6DQcTDf3MjRhwf77
             */
            messageId: string;
            /** @description When sending via the GMB channel, we will be returning list of `messageIds` instead of single `messageId`. */
            messageIds?: string[];
            /**
             * @description Additional response message when sending a workflow message
             * @example Message queued successfully.
             */
            msg?: string;
        };
        ProcessMessageBodyDto: {
            /**
             * @description Message Type
             * @example SMS
             * @enum {string}
             */
            type: "SMS" | "Email" | "WhatsApp" | "GMB" | "IG" | "FB";
            /** @description Array of attachments */
            attachments?: string[];
            /** @description Message Body */
            message?: string;
            /**
             * @description Conversation Id
             * @example ve9EPM428h8vShlRW1KT
             */
            conversationId: string;
            /**
             * @description Conversation Provider Id
             * @example 61d6d1f9cdac7612faf80753
             */
            conversationProviderId: string;
            /** @description HTML Body of Email */
            html?: string;
            /** @description Subject of the Email */
            subject?: string;
            /** @description From Email Address */
            emailFrom?: string;
            /** @description To Email Address */
            emailTo?: string;
            /** @description Send the email message id for which this email should be threaded. This is for replying to a specific email */
            emailMessageId?: string;
        };
        UploadFilesDto: {
            /**
             * @description Conversation Id
             * @example ve9EPM428h8vShlRW1KT
             */
            conversationId: string;
        };
        UploadFilesResponseDto: {
            uploadedFiles: Record<string, never>;
        };
        UploadFilesErrorResponseDto: {
            /**
             * @description HTTP Status code of the request
             * @example 413
             * @enum {number}
             */
            status: 400 | 413 | 415;
            /**
             * @description Error message of the request
             * @example Failed to upload the files
             */
            message: string;
        };
        ErrorDto: {
            /**
             * @description Error Code
             * @example 1
             */
            code: string;
            /**
             * @description Error Type
             * @example saas
             */
            type: string;
            /**
             * @description Error Message
             * @example There was an error from the provider
             */
            message: string;
        };
        UpdateMessageStatusDto: {
            /**
             * @description Message status
             * @example read
             * @enum {string}
             */
            status: "read" | "pending" | "delivered" | "failed";
            /** @description Error object from the conversation provider */
            error?: components["schemas"]["ErrorDto"];
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    "search-conversation": {
        parameters: {
            query: {
                /**
                 * @description Location Id
                 * @example ABCHkzuJQ8ZMd4Te84GK
                 */
                locationId: string;
                /**
                 * @description Contact Id
                 * @example 9VEmS0si86GW6gXWU89b
                 */
                contactId?: string;
                /**
                 * @description Assigned to user Id. Multiple values are comma separated. "unassigned" is used to fetch all unassigned conversations
                 * @example ABCHkzuJQ8ZMd4Te84GK,fGiae4CHkzoskh8thsik
                 */
                assignedTo?: string;
                /**
                 * @description Search paramater as a string
                 * @example Search string
                 */
                query?: string;
                /**
                 * @description Sort paramater - asc or desc
                 * @example asc
                 */
                sort?: "asc" | "desc";
                /**
                 * @description Search to begin after the specified date - should contain the sort value of the last document
                 * @example 1600854
                 */
                startAfterDate?: number;
                /**
                 * @description Id of the conversation
                 * @example ABCHkzuJQ8ZMd4Te84GK
                 */
                id?: string;
                /**
                 * @description Limit of conversations - Default is 20
                 * @example 20
                 */
                limit?: number;
                /**
                 * @description Type of the last message in the conversation as a string
                 * @example TYPE_SMS
                 */
                lastMessageType?: "TYPE_CALL" | "TYPE_SMS" | "TYPE_EMAIL" | "TYPE_SMS_REVIEW_REQUEST" | "TYPE_WEBCHAT" | "TYPE_SMS_NO_SHOW_REQUEST" | "TYPE_CAMPAIGN_SMS" | "TYPE_CAMPAIGN_CALL" | "TYPE_CAMPAIGN_EMAIL" | "TYPE_CAMPAIGN_VOICEMAIL" | "TYPE_FACEBOOK" | "TYPE_CAMPAIGN_FACEBOOK" | "TYPE_CAMPAIGN_MANUAL_CALL" | "TYPE_CAMPAIGN_MANUAL_SMS" | "TYPE_GMB" | "TYPE_CAMPAIGN_GMB" | "TYPE_REVIEW" | "TYPE_INSTAGRAM" | "TYPE_WHATSAPP" | "TYPE_CUSTOM_SMS" | "TYPE_CUSTOM_EMAIL";
                /**
                 * @description Action of the last outbound message in the conversation as string.
                 * @example manual
                 */
                lastMessageAction?: "automated" | "manual";
                /**
                 * @description Direction of the last message in the conversation as string.
                 * @example inbound
                 */
                lastMessageDirection?: "inbound" | "outbound";
                /**
                 * @description The status of the conversation to be filtered - all, read, unread, starred
                 * @example all
                 */
                status?: "all" | "read" | "unread" | "starred";
            };
            header: {
                /** @description Access Token */
                Authorization: string;
                /** @description Api Version */
                Version: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully fetched the conversations */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SendConversationResponseDto"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BadRequestDto"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UnauthorizedDto"];
                };
            };
        };
    };
    "get-conversation": {
        parameters: {
            query?: never;
            header: {
                /** @description Access Token */
                Authorization: string;
                /** @description Api Version */
                Version: string;
            };
            path: {
                /**
                 * @description Conversation ID as string
                 * @example tDtDnQdgm2LXpyiqYvZ6
                 */
                conversationId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GetConversationSuccessfulResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BadRequestDto"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UnauthorizedDto"];
                };
            };
        };
    };
    "update-conversation": {
        parameters: {
            query?: never;
            header: {
                /** @description Access Token */
                Authorization: string;
                /** @description Api Version */
                Version: string;
            };
            path: {
                /**
                 * @description Conversation ID as string
                 * @example tDtDnQdgm2LXpyiqYvZ6
                 */
                conversationId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateConversationDto"];
            };
        };
        responses: {
            /** @description Successful response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GetConversationSuccessfulResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BadRequestDto"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UnauthorizedDto"];
                };
            };
        };
    };
    "delete-conversation": {
        parameters: {
            query?: never;
            header: {
                /** @description Access Token */
                Authorization: string;
                /** @description Api Version */
                Version: string;
            };
            path: {
                /**
                 * @description Conversation ID as string
                 * @example tDtDnQdgm2LXpyiqYvZ6
                 */
                conversationId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DeleteConversationSuccessfulResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BadRequestDto"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UnauthorizedDto"];
                };
            };
        };
    };
    "cancel-scheduled-email-message": {
        parameters: {
            query?: never;
            header: {
                /** @description Access Token */
                Authorization: string;
            };
            path: {
                /**
                 * @description Email Message Id
                 * @example ve9EPM428h8vShlRW1KT
                 */
                emailMessageId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The scheduled email message was cancelled successfully */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CancelScheduledResponseDto"];
                };
            };
        };
    };
    "send-a-new-message": {
        parameters: {
            query?: never;
            header: {
                /** @description Access Token */
                Authorization: string;
                /** @description Api Version */
                Version: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["SendMessageBodyDto"];
            };
        };
        responses: {
            /** @description Created the message */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SendMessageResponseDto"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BadRequestDto"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UnauthorizedDto"];
                };
            };
        };
    };
    "add-an-inbound-message": {
        parameters: {
            query?: never;
            header: {
                /** @description Access Token */
                Authorization: string;
                /** @description Api Version */
                Version: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ProcessMessageBodyDto"];
            };
        };
        responses: {
            /** @description Created the message */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SendMessageResponseDto"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BadRequestDto"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UnauthorizedDto"];
                };
            };
        };
    };
    "cancel-scheduled-message": {
        parameters: {
            query?: never;
            header: {
                /** @description Access Token */
                Authorization: string;
                /** @description Api Version */
                Version: string;
            };
            path: {
                /**
                 * @description Message Id
                 * @example ve9EPM428h8vShlRW1KT
                 */
                messageId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The scheduled message was cancelled successfully */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CancelScheduledResponseDto"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BadRequestDto"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UnauthorizedDto"];
                };
            };
        };
    };
    "upload-file-attachments": {
        parameters: {
            query?: never;
            header: {
                /** @description Access Token */
                Authorization: string;
                /** @description Api Version */
                Version: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "multipart/form-data": components["schemas"]["UploadFilesDto"];
            };
        };
        responses: {
            /** @description Uploaded the file successfully */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UploadFilesResponseDto"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BadRequestDto"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UnauthorizedDto"];
                };
            };
            /** @description Payload Too Large */
            413: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UploadFilesErrorResponseDto"];
                };
            };
            /** @description Unsupported Media Type */
            415: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UploadFilesErrorResponseDto"];
                };
            };
        };
    };
    "update-message-status": {
        parameters: {
            query?: never;
            header: {
                /** @description Access Token */
                Authorization: string;
                /** @description Api Version */
                Version: string;
            };
            path: {
                /**
                 * @description Message Id
                 * @example ve9EPM428h8vShlRW1KT
                 */
                messageId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateMessageStatusDto"];
            };
        };
        responses: {
            /** @description Created the message */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SendMessageResponseDto"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BadRequestDto"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UnauthorizedDto"];
                };
            };
        };
    };
    "create-conversation": {
        parameters: {
            query?: never;
            header: {
                /** @description Access Token */
                Authorization: string;
                /** @description Api Version */
                Version: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateConversationDto"];
            };
        };
        responses: {
            /** @description Successful response */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GetConversationSuccessfulResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BadRequestDto"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UnauthorizedDto"];
                };
            };
        };
    };
}
