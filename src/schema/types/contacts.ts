export interface paths {
    "/contacts/search/duplicate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Duplicate Contact
         * @description Get Duplicate Contact
         */
        get: operations["get-duplicate-contact"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contacts/{contactId}/tasks": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get all Tasks
         * @description Get all Tasks
         */
        get: operations["get-all-tasks"];
        put?: never;
        /**
         * Create Task
         * @description Create Task
         */
        post: operations["create-task"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contacts/{contactId}/tasks/{taskId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Task
         * @description Get Task
         */
        get: operations["get-task"];
        /**
         * Update Task
         * @description Update Task
         */
        put: operations["update-task"];
        post?: never;
        /**
         * Delete Task
         * @description Delete Task
         */
        delete: operations["delete-task"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contacts/{contactId}/tasks/{taskId}/completed": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Update Task Completed
         * @description Update Task Completed
         */
        put: operations["update-task-completed"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contacts/{contactId}/appointments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Appointments for Contact
         * @description Get Appointments for Contact
         */
        get: operations["get-appointments-for-contact"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contacts/{contactId}/tags": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Add Tags
         * @description Add Tags
         */
        post: operations["add-tags"];
        /**
         * Remove Tags
         * @description Remove Tags
         */
        delete: operations["remove-tags"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contacts/{contactId}/notes": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get All Notes
         * @description Get All Notes
         */
        get: operations["get-all-notes"];
        put?: never;
        /**
         * Create Note
         * @description Create Note
         */
        post: operations["create-note"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contacts/{contactId}/notes/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Note
         * @description Get Note
         */
        get: operations["get-note"];
        /**
         * Update Note
         * @description Update Note
         */
        put: operations["update-note"];
        post?: never;
        /**
         * Delete Note
         * @description Delete Note
         */
        delete: operations["delete-note"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contacts/bulk/business": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Add/Remove Contacts From Business
         * @description Add/Remove Contacts From Business
         */
        post: operations["add-remove-contact-from-business"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contacts/{contactId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Contact
         * @description Get Contact
         */
        get: operations["get-contact"];
        /**
         * Update Contact
         * @description Please find the list of acceptable values for the `country` field  <a href="https://highlevel.stoplight.io/docs/integrations/ZG9jOjI4MzUzNDIy-country-list" target="_blank">here</a>
         */
        put: operations["update-contact"];
        post?: never;
        /**
         * Delete Contact
         * @description Delete Contact
         */
        delete: operations["delete-contact"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contacts/upsert": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Upsert Contact
         * @description Please find the list of acceptable values for the `country` field  <a href="https://highlevel.stoplight.io/docs/integrations/ZG9jOjI4MzUzNDIy-country-list" target="_blank">here</a>
         */
        post: operations["upsert-contact"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contacts/business/{businessId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Contacts By BusinessId
         * @description Get Contacts By BusinessId
         */
        get: operations["get-contacts-by-businessId"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contacts/{contactId}/campaigns/{campaignId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Add Contact to Campaign
         * @description Add contact to Campaign
         */
        post: operations["add-contact-to-campaign"];
        /**
         * Remove Contact From Campaign
         * @description Remove Contact From Campaign
         */
        delete: operations["remove-contact-from-campaign"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contacts/{contactId}/campaigns/removeAll": {
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
         * Remove Contact From Every Campaign
         * @description Remove Contact From Every Campaign
         */
        delete: operations["remove-contact-from-every-campaign"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contacts/{contactId}/workflow/{workflowId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Add Contact to Workflow
         * @description Add Contact to Workflow
         */
        post: operations["add-contact-to-workflow"];
        /**
         * Delete Contact to Workflow
         * @description Delete Contact to Workflow
         */
        delete: operations["delete-contact-to-workflow"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contacts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Contacts
         * @description Get Contacts
         */
        get: operations["get-contacts"];
        put?: never;
        /**
         * Create Contact
         * @description Please find the list of acceptable values for the `country` field  <a href="https://highlevel.stoplight.io/docs/integrations/ZG9jOjI4MzUzNDIy-country-list" target="_blank">here</a>
         */
        post: operations["create-contact"];
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
        BadRequestDTO: {
            /** @example 400 */
            statusCode?: number;
            /** @example Bad Request */
            message?: string;
        };
        UnauthorizedDTO: {
            /** @example 401 */
            statusCode?: number;
            /** @example Invalid token: access token is invalid */
            message?: string;
            /** @example Unauthorized */
            error?: string;
        };
        TaskSchema: {
            /** @example lJpzYrWdpkC2hX6t2yue */
            id?: string;
            /** @example test */
            title?: string;
            /** @example testing */
            body?: string;
            /** @example tesTUcmRxWrjqzJS8EjkxNKting */
            assignedTo?: string;
            /** @example 2021-07-08T02:30:00.000Z */
            dueDate?: string;
            /** @example true */
            completed?: boolean;
            /** @example lJpzYrWdpkC2hX6t2yue */
            contactId?: string;
        };
        TasksListSuccessfulResponseDto: {
            tasks?: components["schemas"]["TaskSchema"][];
        };
        TaskByIsSuccessfulResponseDto: {
            task?: components["schemas"]["TaskSchema"];
        };
        CreateTaskParams: {
            /** @example First Task */
            title: string;
            /** @example loram ipsum */
            body?: string;
            /** @example 2020-10-25T11:00:00Z */
            dueDate: string;
            /** @example true */
            completed: boolean;
            /** @example hxHGVRb1YJUscrCB8eXK */
            assignedTo?: string;
        };
        UnprocessableDTO: {
            /** @example 422 */
            statusCode?: number;
            /** @example [
             *       "Unprocessable Entity"
             *     ] */
            message?: string[];
            /** @example Unprocessable Entity */
            error?: string;
        };
        UpdateTaskBody: {
            /** @example First Task */
            title?: string;
            /** @example loram ipsum */
            body?: string;
            /** @example 2020-10-25T11:00:00Z */
            dueDate?: string;
            /** @example true */
            completed?: boolean;
            /** @example hxHGVRb1YJUscrCB8eXK */
            assignedTo?: string;
        };
        UpdateTaskStatusParams: {
            /** @example true */
            completed: boolean;
        };
        DeleteTaskSuccessfulResponseDto: {
            /** @example true */
            succeded?: boolean;
        };
        GetEventSchema: {
            /** @example YS3jaqqeehkR2Is80miy */
            id?: string;
            /** @example YlWd2wuCAZQzh2cH1fVZ */
            calendarId?: string;
            /** @example booked */
            status?: string;
            /** @example Test */
            title?: string;
            /** @example confirmed */
            appoinmentStatus?: string;
            /** @example YlWd2wuCAZQzh2cH1fVZ */
            assignedUserId?: string;
            /** @example test */
            notes?: string;
            /** @example 2021-07-16 11:00:00 */
            startTime?: string;
            /** @example 2021-07-16 11:30:00 */
            endTime?: string;
        };
        GetEventsSuccessfulResponseDto: {
            events?: components["schemas"]["GetEventSchema"][];
        };
        TagsDTO: {
            /** @example [
             *       "minim",
             *       "velit magna"
             *     ] */
            tags: string[];
        };
        CreateDeleteTagSuccessfulResponseDto: {
            /** @example [
             *       "minim",
             *       "velit magna"
             *     ] */
            tags?: string[];
        };
        GetNoteSchema: {
            /** @example HGPcayliwcdoUFzvbTok */
            id?: string;
            /** @example lorem ipsum */
            body?: string;
            /** @example TUcmRxWrjqzJS8EjkxNK */
            userId?: string;
            /** @example 2021-07-08T12:02:11.285Z */
            dateAdded?: string;
            /** @example TUcmRxWrjqzJS8EjkxNK */
            contactId?: string;
        };
        GetNotesListSuccessfulResponseDto: {
            notes?: components["schemas"]["GetNoteSchema"][];
        };
        NotesDTO: {
            /** @example GCs5KuzPqTls7vWclkEV */
            userId?: string;
            /** @example lorem ipsum */
            body: string;
        };
        GetCreateUpdateNoteSuccessfulResponseDto: {
            note?: components["schemas"]["GetNoteSchema"];
        };
        DeleteNoteSuccessfulResponseDto: {
            /** @example true */
            succeded?: boolean;
        };
        ContactsBusinessUpdate: {
            /** @example PX8m5VwxEbcpFlzYEPVG */
            locationId: string;
            /** @example [
             *       "IDqvFHGColiyK6jiatuz",
             *       "pOC0uJ97VYOKH2m3fkMD"
             *     ] */
            ids: string[];
            /** @example 63b7ec34ea409a9a8bd2a4ff */
            businessId: string | null;
        };
        ContactsBulkUpateResponse: {
            /** @example true */
            success: boolean;
            /** @example [
             *       "pOC0uJ97VYOKH2m3fkMD"
             *     ] */
            ids: string[];
        };
        DndSettingSchema: {
            /** @enum {string} */
            status: "active" | "inactive" | "permanent";
            message?: string;
            code?: string;
        };
        DndSettingsSchema: {
            Call?: components["schemas"]["DndSettingSchema"];
            Email?: components["schemas"]["DndSettingSchema"];
            SMS?: components["schemas"]["DndSettingSchema"];
            WhatsApp?: components["schemas"]["DndSettingSchema"];
            GMB?: components["schemas"]["DndSettingSchema"];
            FB?: components["schemas"]["DndSettingSchema"];
        };
        ContactCustomFieldSchema: {
            /** @example MgobCB14YMVKuE4Ka8p1 */
            id?: string;
            /** @example name */
            value?: string;
        };
        GetContectByIdSchema: {
            /** @example seD4PfOuKoVMLkEZqohJ */
            id?: string;
            /** @example rubika deo */
            name?: string;
            /** @example ve9EPM428h8vShlRW1KT */
            locationId?: string;
            /** @example rubika */
            firstName?: string;
            /** @example Deo */
            lastName?: string;
            /** @example rubika@deos.com */
            email?: string;
            /** @example rubika@deos.com */
            emailLowerCase?: string;
            /** @example  */
            timezone?: string;
            /** @example DGS VolMAX */
            companyName?: string;
            /** @example +18832327657 */
            phone?: string;
            /** @example true */
            dnd?: boolean;
            dndSettings?: components["schemas"]["DndSettingsSchema"];
            /** @example read */
            type?: string;
            /** @example public api */
            source?: string;
            /** @example ve9EPM428h8vShlRW1KT */
            assignedTo?: string;
            /** @example 3535 1st St N */
            address1?: string;
            /** @example ruDolomitebika */
            city?: string;
            /** @example AL */
            state?: string;
            /** @example US */
            country?: string;
            /** @example 35061 */
            postalCode?: string;
            /** @example https://www.tesla.com */
            website?: string;
            /** @example [
             *       "nisi sint commodo amet",
             *       "consequat"
             *     ] */
            tags?: string[];
            /** @example 1990-09-25T00:00:00.000Z */
            dateOfBirth?: string;
            /** @example 2021-07-02T05:18:26.704Z */
            dateAdded?: string;
            /** @example 2021-07-02T05:18:26.704Z */
            dateUpdated?: string;
            attachments?: string;
            ssn?: string;
            /** @example male */
            gender?: string;
            /** @example test */
            keyword?: string;
            /** @example rubika */
            firstNameLowerCase?: string;
            /** @example rubika deo */
            fullNameLowerCase?: string;
            /** @example deo */
            lastNameLowerCase?: string;
            /** @example 2021-07-16T11:39:30.564Z */
            lastActivity?: string;
            customFields?: components["schemas"]["ContactCustomFieldSchema"][];
            /** @example 641c094001436dbc2081e642 */
            businessId?: string;
        };
        ContactsByIdSuccessfulResponseDto: {
            contact?: components["schemas"]["GetContectByIdSchema"];
        };
        ContactsCustomFieldsInputArraySchema: {
            /** @example 6dvNaf7VhkQ9snc5vnjJ */
            id: string;
            /** @example [
             *       "test",
             *       "test2"
             *     ] */
            field_value?: string[];
        };
        ContactsCustomFieldsInputObjectSchema: {
            /** @example 6dvNaf7VhkQ9snc5vnjJ */
            id: string;
            /** @example {} */
            field_value?: Record<string, never>;
        };
        ContactsCustomFieldsInputStringSchema: {
            /** @example 6dvNaf7VhkQ9snc5vnjJ */
            id: string;
            /** @example 9039160788 */
            field_value?: string;
        };
        CreateContactDto: {
            /** @example Rosan */
            firstName?: string | null;
            /** @example Deo */
            lastName?: string | null;
            /** @example Rosan Deo */
            name?: string | null;
            /** @example rosan@deos.com */
            email?: string | null;
            /** @example ve9EPM428h8vShlRW1KT */
            locationId: string;
            /** @example male */
            gender?: string;
            /** @example +1 888-888-8888 */
            phone?: string | null;
            /** @example 3535 1st St N */
            address1?: string | null;
            /** @example Dolomite */
            city?: string | null;
            /** @example AL */
            state?: string | null;
            /** @example 35061 */
            postalCode?: string;
            /** @example https://www.tesla.com */
            website?: string | null;
            /** @example America/Chihuahua */
            timezone?: string | null;
            /** @example true */
            dnd?: boolean;
            dndSettings?: components["schemas"]["DndSettingsSchema"];
            /** @example [
             *       "nisi sint commodo amet",
             *       "consequat"
             *     ] */
            tags?: string[];
            customFields?: (components["schemas"]["ContactsCustomFieldsInputStringSchema"] | components["schemas"]["ContactsCustomFieldsInputArraySchema"] | components["schemas"]["ContactsCustomFieldsInputObjectSchema"])[];
            /** @example public api */
            source?: string;
            /** @example US */
            country?: string;
            /** @example DGS VolMAX */
            companyName?: string | null;
        };
        CreateContactSchema: {
            /** @example seD4PfOuKoVMLkEZqohJ */
            id?: string;
            /** @example 2021-08-31T09:59:41.937Z */
            dateAdded?: string;
            /** @example 2021-08-31T09:59:41.937Z */
            dateUpdated?: string;
            /** @example false */
            deleted?: boolean;
            /** @example [
             *       "nisi sint commodo amet",
             *       "consequat"
             *     ] */
            tags?: string[];
            /** @example read */
            type?: string;
            customFields?: components["schemas"]["ContactCustomFieldSchema"][];
            /** @example ve9EPM428h8vShlRW1KT */
            locationId?: string;
            /** @example rubika */
            firstName?: string;
            /** @example rubika */
            firstNameLowerCase?: string;
            /** @example rubika deo */
            fullNameLowerCase?: string;
            /** @example Deo */
            lastName?: string;
            /** @example deo */
            lastNameLowerCase?: string;
            /** @example rubika@deos.com */
            email?: string;
            /** @example rubika@deos.com */
            emailLowerCase?: string;
            /** @example false */
            bounceEmail?: boolean;
            /** @example false */
            unsubscribeEmail?: boolean;
            /** @example true */
            dnd?: boolean;
            dndSettings?: components["schemas"]["DndSettingsSchema"];
            /** @example +18832327657 */
            phone?: string;
            /** @example 3535 1st St N */
            address1?: string;
            /** @example ruDolomitebika */
            city?: string;
            /** @example AL */
            state?: string;
            /** @example US */
            country?: string;
            /** @example 35061 */
            postalCode?: string;
            /** @example https://www.tesla.com */
            website?: string;
            /** @example public api */
            source?: string;
            /** @example DGS VolMAX */
            companyName?: string;
            /** @example 1990-09-25T00:00:00.000Z */
            dateOfBirth?: string;
            /** @example 8 */
            birthMonth?: number;
            /** @example 25 */
            birthDay?: number;
            /** @example 2021-07-16T11:39:30.564Z */
            lastSessionActivityAt?: string;
            /** @example [] */
            offers?: string[];
            /** @example [] */
            products?: string[];
            /** @example 641c094001436dbc2081e642 */
            businessId?: string;
        };
        CreateContactsSuccessfulResponseDto: {
            contact?: components["schemas"]["CreateContactSchema"];
        };
        UpdateContactDto: {
            /** @example rosan */
            firstName?: string | null;
            /** @example Deo */
            lastName?: string | null;
            /** @example rosan Deo */
            name?: string | null;
            /** @example rosan@deos.com */
            email?: string | null;
            /** @example +1 888-888-8888 */
            phone?: string | null;
            /** @example 3535 1st St N */
            address1?: string | null;
            /** @example Dolomite */
            city?: string | null;
            /** @example AL */
            state?: string | null;
            /** @example 35061 */
            postalCode?: string;
            /** @example https://www.tesla.com */
            website?: string | null;
            /** @example America/Chihuahua */
            timezone?: string | null;
            /** @example true */
            dnd?: boolean;
            dndSettings?: components["schemas"]["DndSettingsSchema"];
            /** @example [
             *       "nisi sint commodo amet",
             *       "consequat"
             *     ] */
            tags?: string[];
            customFields?: (components["schemas"]["ContactsCustomFieldsInputStringSchema"] | components["schemas"]["ContactsCustomFieldsInputArraySchema"] | components["schemas"]["ContactsCustomFieldsInputObjectSchema"])[];
            /** @example public api */
            source?: string | null;
            /** @example US */
            country?: string;
        };
        UpdateContactsSuccessfulResponseDto: {
            /** @example true */
            succeded?: boolean;
            contact?: components["schemas"]["GetContectByIdSchema"];
        };
        UpsertContactDto: {
            /** @example Rosan */
            firstName?: string | null;
            /** @example Deo */
            lastName?: string | null;
            /** @example Rosan Deo */
            name?: string | null;
            /** @example rosan@deos.com */
            email?: string | null;
            /** @example ve9EPM428h8vShlRW1KT */
            locationId: string;
            /** @example male */
            gender?: string;
            /** @example +1 888-888-8888 */
            phone?: string | null;
            /** @example 3535 1st St N */
            address1?: string | null;
            /** @example Dolomite */
            city?: string | null;
            /** @example AL */
            state?: string | null;
            /** @example 35061 */
            postalCode?: string;
            /** @example https://www.tesla.com */
            website?: string | null;
            /** @example America/Chihuahua */
            timezone?: string | null;
            /** @example true */
            dnd?: boolean;
            dndSettings?: components["schemas"]["DndSettingsSchema"];
            /** @example [
             *       "nisi sint commodo amet",
             *       "consequat"
             *     ] */
            tags?: string[];
            customFields?: (components["schemas"]["ContactsCustomFieldsInputStringSchema"] | components["schemas"]["ContactsCustomFieldsInputArraySchema"] | components["schemas"]["ContactsCustomFieldsInputObjectSchema"])[];
            /** @example public api */
            source?: string;
            /** @example US */
            country?: string;
            /** @example DGS VolMAX */
            companyName?: string | null;
        };
        UpsertContactsSuccessfulResponseDto: {
            /** @example true */
            new?: boolean;
            contact?: components["schemas"]["GetContectByIdSchema"];
        };
        DeleteContactsSuccessfulResponseDto: {
            /** @example true */
            succeded?: boolean;
        };
        ContactsSearchSchema: {
            /** @example ocQHyuzHvysMo5N5VsXc */
            id?: string;
            /** @example C2QujeCh8ZnC7al2InWR */
            locationId?: string;
            /** @example JohnDeo@gmail.com */
            email?: string;
            /** @example Asia/Calcutta */
            timezone?: string;
            /** @example DE */
            country?: string;
            /** @example xyz form */
            source?: string;
            /** @example 2020-10-29T09:31:30.255Z */
            dateAdded?: string;
            customFields?: components["schemas"]["ContactCustomFieldSchema"][];
            /** @example [
             *       "nisi sint commodo amet",
             *       "consequat"
             *     ] */
            tags?: string[];
            /** @example 641c094001436dbc2081e642 */
            businessId?: string;
        };
        ContactsMetaSchema: {
            /** @example 50 */
            total?: number;
            /** @example http://localhost:5058/contacts/?locationId=ve9EPM428h8vShlRW1KT&startAfter=1631087949919&startAfterId=yd0jdjOavGk2o6Nh5Ndb */
            nextPageUrl?: string;
            /** @example yd0jdjOavGk2o6Nh5Ndb */
            startAfterId?: string;
            /** @example 1631087949919 */
            startAfter?: number;
            /** @example 2 */
            currentPage?: number;
            /** @example 3 */
            nextPage?: number;
            /** @example 1 */
            prevPage?: number | null;
        };
        ContactsSearchSuccessfulResponseDto: {
            contacts?: components["schemas"]["ContactsSearchSchema"][];
            /** @example 10 */
            count?: number;
        };
        AddContactToCampaignDto: Record<string, never>;
        CreateDeleteCantactsCampaignsSuccessfulResponseDto: {
            /** @example true */
            succeded?: boolean;
        };
        CreateWorkflowDto: {
            /** @example 2021-06-23T03:30:00+01:00 */
            eventStartTime?: string;
        };
        ContactsWorkflowSuccessfulResponseDto: {
            /** @example true */
            succeded?: boolean;
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
    "get-duplicate-contact": {
        parameters: {
            query: {
                /**
                 * @description Location Id
                 * @example sadadya1u12basyhasd
                 */
                locationId: string;
                /**
                 * @description Phone Number - Pass in URL Encoded form. i.e +1423164516 will become `%2B1423164516`
                 * @example +1423164516
                 */
                number?: string;
                /**
                 * @description Email - Pass in URL Encoded form. i.e test+abc@gmail.com will become `test%2Babc%40gmail.com`
                 * @example abc@abc.com
                 */
                email?: string;
            };
            header: {
                /** @description Access Token */
                Authorization: string;
                /** @description API Version */
                Version: "2021-07-28";
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BadRequestDTO"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UnauthorizedDTO"];
                };
            };
        };
    };
    "get-all-tasks": {
        parameters: {
            query?: never;
            header: {
                /** @description Access Token */
                Authorization: string;
                /** @description API Version */
                Version: "2021-07-28";
            };
            path: {
                /**
                 * @description Contact Id
                 * @example sx6wyHhbFdRXh302LLNR
                 */
                contactId: string;
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
                    "application/json": components["schemas"]["TasksListSuccessfulResponseDto"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BadRequestDTO"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UnauthorizedDTO"];
                };
            };
        };
    };
    "create-task": {
        parameters: {
            query?: never;
            header: {
                /** @description Access Token */
                Authorization: string;
                /** @description API Version */
                Version: "2021-07-28";
            };
            path: {
                /**
                 * @description Contact Id
                 * @example sx6wyHhbFdRXh302LLNR
                 */
                contactId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateTaskParams"];
            };
        };
        responses: {
            /** @description Successful response */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TaskByIsSuccessfulResponseDto"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BadRequestDTO"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UnauthorizedDTO"];
                };
            };
            /** @description Unprocessable Entity */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UnprocessableDTO"];
                };
            };
        };
    };
    "get-task": {
        parameters: {
            query?: never;
            header: {
                /** @description Access Token */
                Authorization: string;
                /** @description API Version */
                Version: "2021-07-28";
            };
            path: {
                /**
                 * @description Contact Id
                 * @example sx6wyHhbFdRXh302LLNR
                 */
                contactId: string;
                /**
                 * @description Task Id
                 * @example ocQHyuzHvysMo5N5VsXc
                 */
                taskId: string;
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
                    "application/json": components["schemas"]["TaskByIsSuccessfulResponseDto"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BadRequestDTO"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UnauthorizedDTO"];
                };
            };
        };
    };
    "update-task": {
        parameters: {
            query?: never;
            header: {
                /** @description Access Token */
                Authorization: string;
                /** @description API Version */
                Version: "2021-07-28";
            };
            path: {
                /**
                 * @description Contact Id
                 * @example sx6wyHhbFdRXh302LLNR
                 */
                contactId: string;
                /**
                 * @description Task Id
                 * @example ocQHyuzHvysMo5N5VsXc
                 */
                taskId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateTaskBody"];
            };
        };
        responses: {
            /** @description Successful response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TaskByIsSuccessfulResponseDto"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BadRequestDTO"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UnauthorizedDTO"];
                };
            };
            /** @description Unprocessable Entity */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UnprocessableDTO"];
                };
            };
        };
    };
    "delete-task": {
        parameters: {
            query?: never;
            header: {
                /** @description Access Token */
                Authorization: string;
                /** @description API Version */
                Version: "2021-07-28";
            };
            path: {
                /**
                 * @description Contact Id
                 * @example sx6wyHhbFdRXh302LLNR
                 */
                contactId: string;
                /**
                 * @description Task Id
                 * @example ocQHyuzHvysMo5N5VsXc
                 */
                taskId: string;
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
                    "application/json": components["schemas"]["DeleteTaskSuccessfulResponseDto"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BadRequestDTO"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UnauthorizedDTO"];
                };
            };
        };
    };
    "update-task-completed": {
        parameters: {
            query?: never;
            header: {
                /** @description Access Token */
                Authorization: string;
                /** @description API Version */
                Version: "2021-07-28";
            };
            path: {
                /**
                 * @description Contact Id
                 * @example sx6wyHhbFdRXh302LLNR
                 */
                contactId: string;
                /**
                 * @description Task Id
                 * @example ocQHyuzHvysMo5N5VsXc
                 */
                taskId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateTaskStatusParams"];
            };
        };
        responses: {
            /** @description Successful response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TaskByIsSuccessfulResponseDto"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BadRequestDTO"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UnauthorizedDTO"];
                };
            };
            /** @description Unprocessable Entity */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UnprocessableDTO"];
                };
            };
        };
    };
    "get-appointments-for-contact": {
        parameters: {
            query?: never;
            header: {
                /** @description Access Token */
                Authorization: string;
                /** @description API Version */
                Version: "2021-07-28";
            };
            path: {
                /**
                 * @description Contact Id
                 * @example sx6wyHhbFdRXh302LLNR
                 */
                contactId: string;
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
                    "application/json": components["schemas"]["GetEventsSuccessfulResponseDto"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BadRequestDTO"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UnauthorizedDTO"];
                };
            };
            /** @description Unprocessable Entity */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UnprocessableDTO"];
                };
            };
        };
    };
    "add-tags": {
        parameters: {
            query?: never;
            header: {
                /** @description Access Token */
                Authorization: string;
                /** @description API Version */
                Version: "2021-07-28";
            };
            path: {
                /**
                 * @description Contact Id
                 * @example sx6wyHhbFdRXh302LLNR
                 */
                contactId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["TagsDTO"];
            };
        };
        responses: {
            /** @description Successful response */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CreateDeleteTagSuccessfulResponseDto"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BadRequestDTO"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UnauthorizedDTO"];
                };
            };
            /** @description Unprocessable Entity */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UnprocessableDTO"];
                };
            };
        };
    };
    "remove-tags": {
        parameters: {
            query?: never;
            header: {
                /** @description Access Token */
                Authorization: string;
                /** @description API Version */
                Version: "2021-07-28";
            };
            path: {
                /**
                 * @description Contact Id
                 * @example sx6wyHhbFdRXh302LLNR
                 */
                contactId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["TagsDTO"];
            };
        };
        responses: {
            /** @description Successful response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CreateDeleteTagSuccessfulResponseDto"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BadRequestDTO"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UnauthorizedDTO"];
                };
            };
            /** @description Unprocessable Entity */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UnprocessableDTO"];
                };
            };
        };
    };
    "get-all-notes": {
        parameters: {
            query?: never;
            header: {
                /** @description Access Token */
                Authorization: string;
                /** @description API Version */
                Version: "2021-07-28";
            };
            path: {
                /**
                 * @description Contact Id
                 * @example sx6wyHhbFdRXh302LLNR
                 */
                contactId: string;
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
                    "application/json": components["schemas"]["GetNotesListSuccessfulResponseDto"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BadRequestDTO"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UnauthorizedDTO"];
                };
            };
        };
    };
    "create-note": {
        parameters: {
            query?: never;
            header: {
                /** @description Access Token */
                Authorization: string;
                /** @description API Version */
                Version: "2021-07-28";
            };
            path: {
                /**
                 * @description Contact Id
                 * @example sx6wyHhbFdRXh302LLNR
                 */
                contactId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["NotesDTO"];
            };
        };
        responses: {
            /** @description Successful response */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GetCreateUpdateNoteSuccessfulResponseDto"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BadRequestDTO"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UnauthorizedDTO"];
                };
            };
            /** @description Unprocessable Entity */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UnprocessableDTO"];
                };
            };
        };
    };
    "get-note": {
        parameters: {
            query?: never;
            header: {
                /** @description Access Token */
                Authorization: string;
                /** @description API Version */
                Version: "2021-07-28";
            };
            path: {
                /**
                 * @description Contact Id
                 * @example sx6wyHhbFdRXh302LLNR
                 */
                contactId: string;
                /**
                 * @description Note Id
                 * @example ocQHyuzHvysMo5N5VsXc
                 */
                id: string;
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
                    "application/json": components["schemas"]["GetCreateUpdateNoteSuccessfulResponseDto"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BadRequestDTO"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UnauthorizedDTO"];
                };
            };
            /** @description Unprocessable Entity */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UnprocessableDTO"];
                };
            };
        };
    };
    "update-note": {
        parameters: {
            query?: never;
            header: {
                /** @description Access Token */
                Authorization: string;
                /** @description API Version */
                Version: "2021-07-28";
            };
            path: {
                /**
                 * @description Contact Id
                 * @example sx6wyHhbFdRXh302LLNR
                 */
                contactId: string;
                /**
                 * @description Note Id
                 * @example ocQHyuzHvysMo5N5VsXc
                 */
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["NotesDTO"];
            };
        };
        responses: {
            /** @description Successful response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GetCreateUpdateNoteSuccessfulResponseDto"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BadRequestDTO"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UnauthorizedDTO"];
                };
            };
            /** @description Unprocessable Entity */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UnprocessableDTO"];
                };
            };
        };
    };
    "delete-note": {
        parameters: {
            query?: never;
            header: {
                /** @description Access Token */
                Authorization: string;
                /** @description API Version */
                Version: "2021-07-28";
            };
            path: {
                /**
                 * @description Contact Id
                 * @example sx6wyHhbFdRXh302LLNR
                 */
                contactId: string;
                /**
                 * @description Note Id
                 * @example ocQHyuzHvysMo5N5VsXc
                 */
                id: string;
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
                    "application/json": components["schemas"]["DeleteNoteSuccessfulResponseDto"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BadRequestDTO"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UnauthorizedDTO"];
                };
            };
            /** @description Unprocessable Entity */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UnprocessableDTO"];
                };
            };
        };
    };
    "add-remove-contact-from-business": {
        parameters: {
            query?: never;
            header: {
                /** @description Access Token */
                Authorization: string;
                /** @description API Version */
                Version: "2021-07-28";
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ContactsBusinessUpdate"];
            };
        };
        responses: {
            /** @description Successful response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ContactsBulkUpateResponse"];
                };
            };
            /** @description Unprocessable Entity */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UnprocessableDTO"];
                };
            };
        };
    };
    "get-contact": {
        parameters: {
            query?: never;
            header: {
                /** @description Access Token */
                Authorization: string;
                /** @description API Version */
                Version: "2021-07-28";
            };
            path: {
                /**
                 * @description Contact Id
                 * @example ocQHyuzHvysMo5N5VsXc
                 */
                contactId: string;
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
                    "application/json": components["schemas"]["ContactsByIdSuccessfulResponseDto"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BadRequestDTO"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UnauthorizedDTO"];
                };
            };
            /** @description Unprocessable Entity */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UnprocessableDTO"];
                };
            };
        };
    };
    "update-contact": {
        parameters: {
            query?: never;
            header: {
                /** @description Access Token */
                Authorization: string;
                /** @description API Version */
                Version: "2021-07-28";
            };
            path: {
                /**
                 * @description Contact Id
                 * @example ocQHyuzHvysMo5N5VsXc
                 */
                contactId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateContactDto"];
            };
        };
        responses: {
            /** @description Successful response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UpdateContactsSuccessfulResponseDto"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BadRequestDTO"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UnauthorizedDTO"];
                };
            };
            /** @description Unprocessable Entity */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UnprocessableDTO"];
                };
            };
        };
    };
    "delete-contact": {
        parameters: {
            query?: never;
            header: {
                /** @description Access Token */
                Authorization: string;
                /** @description API Version */
                Version: "2021-07-28";
            };
            path: {
                /**
                 * @description Contact Id
                 * @example ocQHyuzHvysMo5N5VsXc
                 */
                contactId: string;
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
                    "application/json": components["schemas"]["DeleteContactsSuccessfulResponseDto"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BadRequestDTO"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UnauthorizedDTO"];
                };
            };
            /** @description Unprocessable Entity */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UnprocessableDTO"];
                };
            };
        };
    };
    "upsert-contact": {
        parameters: {
            query?: never;
            header: {
                /** @description Access Token */
                Authorization: string;
                /** @description API Version */
                Version: "2021-07-28";
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpsertContactDto"];
            };
        };
        responses: {
            /** @description Successful response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UpsertContactsSuccessfulResponseDto"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BadRequestDTO"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UnauthorizedDTO"];
                };
            };
            /** @description Unprocessable Entity */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UnprocessableDTO"];
                };
            };
        };
    };
    "get-contacts-by-businessId": {
        parameters: {
            query: {
                /** @example 10 */
                limit?: string;
                /** @example 5DP4iH6HLkQsiKESj6rh */
                locationId: string;
                /** @example 10 */
                skip?: string;
                /** @example contact name */
                query?: string;
            };
            header: {
                /** @description Access Token */
                Authorization: string;
                /** @description API Version */
                Version: "2021-07-28";
            };
            path: {
                businessId: string;
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
                    "application/json": components["schemas"]["ContactsSearchSuccessfulResponseDto"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BadRequestDTO"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UnauthorizedDTO"];
                };
            };
            /** @description Unprocessable Entity */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UnprocessableDTO"];
                };
            };
        };
    };
    "add-contact-to-campaign": {
        parameters: {
            query?: never;
            header: {
                /** @description Access Token */
                Authorization: string;
                /** @description API Version */
                Version: "2021-07-28";
            };
            path: {
                /**
                 * @description Contact Id
                 * @example 3bZD1nQzbul0MCancbQD
                 */
                contactId: string;
                /**
                 * @description Campaigns Id
                 * @example Y2I9XM7aO1hncuSOlc9L
                 */
                campaignId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["AddContactToCampaignDto"];
            };
        };
        responses: {
            /** @description Successful response */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CreateDeleteCantactsCampaignsSuccessfulResponseDto"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BadRequestDTO"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UnauthorizedDTO"];
                };
            };
            /** @description Unprocessable Entity */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UnprocessableDTO"];
                };
            };
        };
    };
    "remove-contact-from-campaign": {
        parameters: {
            query?: never;
            header: {
                /** @description Access Token */
                Authorization: string;
                /** @description API Version */
                Version: "2021-07-28";
            };
            path: {
                /**
                 * @description Contact Id
                 * @example 3bZD1nQzbul0MCancbQD
                 */
                contactId: string;
                /**
                 * @description Campaigns Id
                 * @example Y2I9XM7aO1hncuSOlc9L
                 */
                campaignId: string;
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
                    "application/json": components["schemas"]["CreateDeleteCantactsCampaignsSuccessfulResponseDto"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BadRequestDTO"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UnauthorizedDTO"];
                };
            };
            /** @description Unprocessable Entity */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UnprocessableDTO"];
                };
            };
        };
    };
    "remove-contact-from-every-campaign": {
        parameters: {
            query?: never;
            header: {
                /** @description Access Token */
                Authorization: string;
                /** @description API Version */
                Version: "2021-07-28";
            };
            path: {
                /**
                 * @description Contact Id
                 * @example 3bZD1nQzbul0MCancbQD
                 */
                contactId: string;
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
                    "application/json": components["schemas"]["CreateDeleteCantactsCampaignsSuccessfulResponseDto"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BadRequestDTO"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UnauthorizedDTO"];
                };
            };
            /** @description Unprocessable Entity */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UnprocessableDTO"];
                };
            };
        };
    };
    "add-contact-to-workflow": {
        parameters: {
            query?: never;
            header: {
                /** @description Access Token */
                Authorization: string;
                /** @description API Version */
                Version: "2021-07-28";
            };
            path: {
                /**
                 * @description Contact Id
                 * @example sx6wyHhbFdRXh302LLNR
                 */
                contactId: string;
                /**
                 * @description Workflow Id
                 * @example sx6wyHhbFdRXh302LLNR
                 */
                workflowId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateWorkflowDto"];
            };
        };
        responses: {
            /** @description Successful response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ContactsWorkflowSuccessfulResponseDto"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BadRequestDTO"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UnauthorizedDTO"];
                };
            };
            /** @description Unprocessable Entity */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UnprocessableDTO"];
                };
            };
        };
    };
    "delete-contact-to-workflow": {
        parameters: {
            query?: never;
            header: {
                /** @description Access Token */
                Authorization: string;
                /** @description API Version */
                Version: "2021-07-28";
            };
            path: {
                /**
                 * @description Contact Id
                 * @example sx6wyHhbFdRXh302LLNR
                 */
                contactId: string;
                /**
                 * @description Workflow Id
                 * @example sx6wyHhbFdRXh302LLNR
                 */
                workflowId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateWorkflowDto"];
            };
        };
        responses: {
            /** @description Successful response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ContactsWorkflowSuccessfulResponseDto"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BadRequestDTO"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UnauthorizedDTO"];
                };
            };
            /** @description Unprocessable Entity */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UnprocessableDTO"];
                };
            };
        };
    };
    "get-contacts": {
        parameters: {
            query: {
                /**
                 * @description Location Id
                 * @example ve9EPM428h8vShlRW1KT
                 */
                locationId: string;
                /**
                 * @description Start After Id
                 * @example UIaE1WjAwWKdlyD7osQI
                 */
                startAfterId?: string;
                /**
                 * @description Start Afte
                 * @example 1603870249758
                 */
                startAfter?: number;
                /**
                 * @description Contact Query
                 * @example John
                 */
                query?: string;
                /**
                 * @description Limit Per Page records count. will allow maximum up to 100 and default will be 20
                 * @example 20
                 */
                limit?: number;
            };
            header: {
                /** @description Access Token */
                Authorization: string;
                /** @description API Version */
                Version: "2021-07-28";
            };
            path?: never;
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
                    "application/json": components["schemas"]["ContactsSearchSuccessfulResponseDto"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BadRequestDTO"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UnauthorizedDTO"];
                };
            };
            /** @description Unprocessable Entity */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UnprocessableDTO"];
                };
            };
        };
    };
    "create-contact": {
        parameters: {
            query?: never;
            header: {
                /** @description Access Token */
                Authorization: string;
                /** @description API Version */
                Version: "2021-07-28";
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateContactDto"];
            };
        };
        responses: {
            /** @description Successful response */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CreateContactsSuccessfulResponseDto"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BadRequestDTO"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UnauthorizedDTO"];
                };
            };
            /** @description Unprocessable Entity */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UnprocessableDTO"];
                };
            };
        };
    };
}
