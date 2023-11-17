export interface paths {
    "/calendars/{calendarId}/free-slots": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Free Slots
         * @description Get free slots for a calendar between a date range. Optionally a consumer can also request free slots in a particular timezone and also for a particular user.
         */
        get: operations["get-slots"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/calendars/{calendarId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Calendar
         * @description Get calendar by ID
         */
        get: operations["get-calendar"];
        /**
         * Update Calendar
         * @description Update calendar by ID.
         */
        put: operations["update-calendar"];
        post?: never;
        /**
         * Delete Calendar
         * @description Delete calendar by ID
         */
        delete: operations["delete-calendar"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/calendars/events/appointments/{eventId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Appointment
         * @description Get appointment by ID
         */
        get: operations["get-appointment"];
        /**
         * Edit Appointment
         * @description Edit appointment by ID
         */
        put: operations["edit-appointment"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/calendars/events/appointments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create Appointment
         * @description Create appointment
         */
        post: operations["create-appointment"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/calendars/events/block-slots": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create Block Slot
         * @description Create block slot
         */
        post: operations["create-block-slot"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/calendars/events/block-slots/{eventId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Edit Block Slot
         * @description Edit block slot by ID
         */
        put: operations["edit-block-slot"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/calendars/events/{eventId}": {
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
         * Delete Event
         * @description Delete event by ID
         */
        delete: operations["delete-event"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/calendars/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Calendars
         * @description Get all calendars in a location.
         */
        get: operations["get-calendars"];
        put?: never;
        /**
         * Create Calendar
         * @description Create calendar in a location.
         */
        post: operations["create-calendar"];
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
        SlotsSchema: {
            slots: string[];
        };
        GetSlotsSuccessfulResponseDto: {
            _dates_: components["schemas"]["SlotsSchema"];
        };
        CalendarSchema: {
            /** @example 0TkCdp9PfvLeWKYRRvIz */
            id: string;
            /** @example ocQHyuzHvysMo5N5VsXc */
            locationId: string;
            /**
             * @description Group Id
             * @example BqTwX8QFwXzpegMve9EQ
             */
            groupId?: string;
            /** @example test calendar */
            name: string;
            /** @example this is used for testing */
            description?: string;
            /** @example test1 */
            slug?: string;
            /** @example true */
            isActive?: boolean;
            /** @example [] */
            openHours?: string[];
        };
        CalendarsGetSuccessfulResponseDto: {
            calendars?: components["schemas"]["CalendarSchema"][];
        };
        CalendarNotification: {
            type: string;
            shouldSendToContact: Record<string, never>;
            shouldSendToUser: Record<string, never>;
            shouldSendToSelectedUsers: Record<string, never>;
            selectedUsers: string;
            templateId: string;
        };
        TeamMemeber: {
            /** @example ocQHyuzHvysMo5N5VsXc */
            userId: string;
            /**
             * @default 0.5
             * @enum {number}
             */
            priority: 0 | 0.5 | 1;
            meetingLocation?: string;
        };
        Hour: {
            openHour: number;
            openMinute: number;
            closeHour: number;
            closeMinute: number;
        };
        OpenHour: {
            daysOfTheWeek: number[];
            hours: components["schemas"]["Hour"][];
        };
        CalendarCreateSchema: {
            /** @description Calendar Notifications */
            notifications?: components["schemas"]["CalendarNotification"][];
            /** @example ocQHyuzHvysMo5N5VsXc */
            locationId: string;
            /**
             * @description Group Id
             * @example BqTwX8QFwXzpegMve9EQ
             */
            groupId?: string;
            /** @description Team members */
            teamMembers?: components["schemas"]["TeamMemeber"][];
            /**
             * @default RoundRobin_OptimizeForAvailability
             * @enum {string}
             */
            eventType: "RoundRobin_OptimizeForAvailability" | "RoundRobin_OptimizeForEqualDistribution" | "Collective" | "Group";
            /** @example test calendar */
            name: string;
            /** @example this is used for testing */
            description?: string;
            /** @example test1 */
            slug?: string;
            /** @example test1 */
            widgetSlug?: string;
            /** @example test1 */
            calendarType?: string;
            /** @example classic */
            widgetType?: string;
            /** @default {{contact.name}} */
            eventTitle: string;
            /** @default #039be5 */
            eventColor: string;
            meetingLocation?: string;
            /** @default 30 */
            slotDuration: number;
            /** @default 30 */
            slotInterval: number;
            slotBuffer?: number;
            /** @default 1 */
            appoinmentPerSlot: number;
            appoinmentPerDay?: number;
            openHours?: components["schemas"]["OpenHour"][];
            formId?: string;
            stickyContact?: boolean;
            /** @default true */
            autoConfirm: boolean;
            shouldSendAlertEmailsToAssignedMember?: boolean;
            alertEmail?: string;
            /** @default false */
            googleInvitationEmails: boolean;
            /** @default true */
            allowReschedule: boolean;
            /** @default true */
            allowCancellation: boolean;
            shouldAssignContactToTeamMember?: boolean;
            shouldSkipAssigningContactForExisting?: boolean;
            notes?: string;
            pixelId?: string;
            /**
             * @default ThankYouMessage
             * @enum {string}
             */
            formSubmitType: "RedirectURL" | "ThankYouMessage";
            formSubmitRedirectURL?: string;
            formSubmitThanksMessage?: string;
        };
        CalendarByIdSuccessfulResponseDto: {
            calendar: components["schemas"]["CalendarSchema"];
        };
        Recurring: Record<string, never>;
        Availability: {
            id: string;
            calendarId: Record<string, never>;
            date: string;
            hours: components["schemas"]["Hour"][];
            deleted: boolean;
        };
        CalendarUpdateSchema: {
            /** @description Calendar Notifications */
            notifications?: components["schemas"]["CalendarNotification"][];
            /**
             * @description Group Id
             * @example BqTwX8QFwXzpegMve9EQ
             */
            groupId?: string;
            /** @description Team members */
            teamMembers?: components["schemas"]["TeamMemeber"][];
            /** @enum {string} */
            eventType?: "RoundRobin_OptimizeForAvailability" | "RoundRobin_OptimizeForEqualDistribution" | "Collective" | "Group";
            /** @example test calendar */
            name?: string;
            /** @example this is used for testing */
            description?: string;
            /** @example test1 */
            slug?: string;
            /** @example test1 */
            widgetSlug?: string;
            /** @example test1 */
            calendarType?: string;
            /** @example classic */
            widgetType?: string;
            eventTitle?: string;
            eventColor?: string;
            meetingLocation?: string;
            slotDuration?: number;
            slotInterval?: Record<string, never>;
            slotBuffer?: number;
            appoinmentPerSlot?: number;
            appoinmentPerDay?: number;
            openHours?: components["schemas"]["OpenHour"][];
            enableRecurring?: boolean;
            recurring?: components["schemas"]["Recurring"];
            formId?: string;
            stickyContact?: boolean;
            isLivePaymentMode?: boolean;
            autoConfirm?: boolean;
            shouldSendAlertEmailsToAssignedMember?: boolean;
            alertEmail?: string;
            googleInvitationEmails?: boolean;
            allowReschedule?: boolean;
            allowCancellation?: boolean;
            shouldAssignContactToTeamMember?: boolean;
            shouldSkipAssigningContactForExisting?: boolean;
            notes?: string;
            pixelId?: string;
            /**
             * @default ThankYouMessage
             * @enum {string}
             */
            formSubmitType: "RedirectURL" | "ThankYouMessage";
            formSubmitRedirectURL?: string;
            formSubmitThanksMessage?: string;
            /** @example 0 */
            availabilityType?: number;
            availabilities?: components["schemas"]["Availability"][];
        };
        AppointmentSchemaResponse: {
            /**
             * @description Calendar Id
             * @example CVokAlI8fgw4WYWoCtQz
             */
            calendarId: string;
            /**
             * @description Location Id
             * @example C2QujeCh8ZnC7al2InWR
             */
            locationId: string;
            /**
             * @description Contact Id
             * @example 0007BWpSzSwfiuSl0tR2
             */
            contactId: string;
            /**
             * @description Start Time
             * @example 2021-06-23T03:30:00+05:30
             */
            startTime?: string;
            /**
             * @description End Time
             * @example 2021-06-23T04:30:00+05:30
             */
            endTime?: string;
            /**
             * @description Title
             * @example Test Event
             */
            title?: string;
            /**
             * @example confirmed
             * @enum {string}
             */
            appointmentStatus?: "new" | "confirmed" | "cancelled" | "showed" | "noshow" | "invalid";
            /**
             * @description Assigned User Id
             * @example 0007BWpSzSwfiuSl0tR2
             */
            assignedUserId?: string;
            /**
             * @description Appointment Address
             * @example Zoom
             */
            address?: string;
            /**
             * @description Id
             * @example 0TkCdp9PfvLeWKYRRvIz
             */
            id: string;
        };
        AppointmentCreateSchema: {
            /**
             * @description Calendar Id
             * @example CVokAlI8fgw4WYWoCtQz
             */
            calendarId: string;
            /**
             * @description Location Id
             * @example C2QujeCh8ZnC7al2InWR
             */
            locationId: string;
            /**
             * @description Contact Id
             * @example 0007BWpSzSwfiuSl0tR2
             */
            contactId: string;
            /**
             * @description Start Time
             * @example 2021-06-23T03:30:00+05:30
             */
            startTime: string;
            /**
             * @description End Time
             * @example 2021-06-23T04:30:00+05:30
             */
            endTime?: string;
            /**
             * @description Title
             * @example Test Event
             */
            title?: string;
            /**
             * @example confirmed
             * @enum {string}
             */
            appointmentStatus?: "new" | "confirmed" | "cancelled" | "showed" | "noshow" | "invalid";
            /**
             * @description Assigned User Id
             * @example 0007BWpSzSwfiuSl0tR2
             */
            assignedUserId?: string;
            /**
             * @description Appointment Address
             * @example Zoom
             */
            address?: string;
            /**
             * @description If set to true, the minimum scheduling notice and date range would be ignored
             * @example false
             */
            ignoreDateRange?: boolean;
            /**
             * @description If set to false, the automations will not run
             * @example false
             */
            toNotify?: boolean;
        };
        AppointmentEditSchema: {
            /**
             * @description Calendar Id
             * @example CVokAlI8fgw4WYWoCtQz
             */
            calendarId?: string;
            /**
             * @description Start Time
             * @example 2021-06-23T03:30:00+05:30
             */
            startTime?: string;
            /**
             * @description End Time
             * @example 2021-06-23T04:30:00+05:30
             */
            endTime?: string;
            /**
             * @description Title
             * @example Test Event
             */
            title?: string;
            /**
             * @example confirmed
             * @enum {string}
             */
            appointmentStatus?: "new" | "confirmed" | "cancelled" | "showed" | "noshow" | "invalid";
            /**
             * @description Appointment Address
             * @example Zoom
             */
            address?: string;
            /**
             * @description If set to true, the minimum scheduling notice and date range would be ignored
             * @example false
             */
            ignoreDateRange?: boolean;
            /**
             * @description If set to false, the automations will not run
             * @example false
             */
            toNotify?: boolean;
        };
        BlockSlotCreateSchema: {
            /**
             * @description Calendar Id
             * @example CVokAlI8fgw4WYWoCtQz
             */
            calendarId?: string;
            /**
             * @description Location Id
             * @example C2QujeCh8ZnC7al2InWR
             */
            locationId: string;
            /**
             * @description Start Time
             * @example 2021-06-23T03:30:00+05:30
             */
            startTime: string;
            /**
             * @description End Time
             * @example 2021-06-23T04:30:00+05:30
             */
            endTime: string;
            /**
             * @description Title
             * @example Test Event
             */
            title?: string;
            /**
             * @description Assigned User Id
             * @example CVokAlI8fgw4WYWoCtQz
             */
            assignedUserId?: string;
        };
        CreateBookedSlotSuccessfulResponseDto: {
            /**
             * @description Id
             * @example 0TkCdp9PfvLeWKYRRvIz
             */
            id: string;
            /**
             * @description Location Id
             * @example C2QujeCh8ZnC7al2InWR
             */
            locationId: string;
            /**
             * @description Title
             * @example My event
             */
            title: string;
            /**
             * @description Start Time
             * @example 2021-06-23T03:30:00+05:30
             */
            startTime: string;
            /**
             * @description End Time
             * @example 2021-06-23T04:30:00+05:30
             */
            endTime: string;
            /**
             * @description Calendar id
             * @example CVokAlI8fgw4WYWoCtQz
             */
            calendarId?: string;
            /**
             * @description Assigned User Id
             * @example 0007BWpSzSwfiuSl0tR2
             */
            assignedUserId?: string;
        };
        BlockSlotEditSchema: {
            /**
             * @description Calendar Id
             * @example CVokAlI8fgw4WYWoCtQz
             */
            calendarId?: string;
            /**
             * @description Start Time
             * @example 2021-06-23T03:30:00+05:30
             */
            startTime?: string;
            /**
             * @description End Time
             * @example 2021-06-23T04:30:00+05:30
             */
            endTime?: string;
            /**
             * @description Title
             * @example Test Event
             */
            title?: string;
            /**
             * @description Assigned User Id
             * @example CVokAlI8fgw4WYWoCtQz
             */
            assignedUserId?: string;
        };
        DeleteAppointmentSchema: Record<string, never>;
        DeleteEventSuccessfulResponseDto: {
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
    "get-slots": {
        parameters: {
            query: {
                /**
                 * @description Start Date
                 * @example 1548898600000
                 */
                startDate: string;
                /**
                 * @description End Date
                 * @example 1601490599999
                 */
                endDate: string;
                /**
                 * @description The timezone in which the free slots are returned
                 * @example America/Chihuahua
                 */
                timezone?: string;
                /**
                 * @description The user for whom the free slots are returned
                 * @example 082goXVW3lIExEQPOnd3
                 */
                userId?: string;
            };
            header: {
                /** @description Access Token */
                Authorization: string;
                /** @description Api Version */
                Version: string;
            };
            path: {
                /**
                 * @description Calendar Id
                 * @example ocQHyuzHvysMo5N5VsXc
                 */
                calendarId: string;
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
                    "application/json": components["schemas"]["GetSlotsSuccessfulResponseDto"];
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
    "get-calendar": {
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
                 * @description Calendar Id
                 * @example ocQHyuzHvysMo5N5VsXc
                 */
                calendarId: string;
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
                    "application/json": components["schemas"]["CalendarByIdSuccessfulResponseDto"];
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
    "update-calendar": {
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
                 * @description Calendar Id
                 * @example ocQHyuzHvysMo5N5VsXc
                 */
                calendarId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CalendarUpdateSchema"];
            };
        };
        responses: {
            /** @description Successful response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CalendarByIdSuccessfulResponseDto"];
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
    "delete-calendar": {
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
                 * @description Calendar Id
                 * @example ocQHyuzHvysMo5N5VsXc
                 */
                calendarId: string;
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
                    "application/json": components["schemas"]["CalendarByIdSuccessfulResponseDto"];
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
    "get-appointment": {
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
                 * @description Event Id
                 * @example ocQHyuzHvysMo5N5VsXc
                 */
                eventId: string;
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
                    "application/json": components["schemas"]["AppointmentSchemaResponse"];
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
    "edit-appointment": {
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
                 * @description Event Id
                 * @example ocQHyuzHvysMo5N5VsXc
                 */
                eventId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["AppointmentEditSchema"];
            };
        };
        responses: {
            /** @description Successful response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AppointmentSchemaResponse"];
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
    "create-appointment": {
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
                "application/json": components["schemas"]["AppointmentCreateSchema"];
            };
        };
        responses: {
            /** @description Successful response */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AppointmentSchemaResponse"];
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
    "create-block-slot": {
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
                "application/json": components["schemas"]["BlockSlotCreateSchema"];
            };
        };
        responses: {
            /** @description Successful response */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CreateBookedSlotSuccessfulResponseDto"];
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
    "edit-block-slot": {
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
                 * @description Event Id
                 * @example ocQHyuzHvysMo5N5VsXc
                 */
                eventId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["BlockSlotEditSchema"];
            };
        };
        responses: {
            /** @description Successful response */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CreateBookedSlotSuccessfulResponseDto"];
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
    "delete-event": {
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
                 * @description Event Id
                 * @example ocQHyuzHvysMo5N5VsXc
                 */
                eventId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["DeleteAppointmentSchema"];
            };
        };
        responses: {
            /** @description Successful response */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DeleteEventSuccessfulResponseDto"];
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
    "get-calendars": {
        parameters: {
            query: {
                /**
                 * @description Location Id
                 * @example ve9EPM428h8vShlRW1KT
                 */
                locationId: string;
                /**
                 * @description Group Id
                 * @example BqTwX8QFwXzpegMve9EQ
                 */
                groupId?: string;
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
            /** @description Successful response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CalendarsGetSuccessfulResponseDto"];
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
    "create-calendar": {
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
                "application/json": components["schemas"]["CalendarCreateSchema"];
            };
        };
        responses: {
            /** @description Successful response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CalendarByIdSuccessfulResponseDto"];
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
}
