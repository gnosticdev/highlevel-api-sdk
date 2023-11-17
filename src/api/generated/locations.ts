export interface paths {
    "/locations/search": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Search Locations
         * @description Search Locations
         */
        get: operations["search-locations"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/locations/{locationId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Location
         * @description Get details of a location by passing the location id
         */
        get: operations["get-location"];
        /**
         * Put Location
         * @description Update a location/sub-account based on the data provided
         */
        put: operations["put-location"];
        post?: never;
        /**
         * Delete Location
         * @description Delete a location/sub-account from the company
         */
        delete: operations["delete-location"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/locations/{locationId}/tags": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Location Tags
         * @description Get Location Tags
         */
        get: operations["get-location-tags"];
        put?: never;
        /**
         * Create Tag
         * @description Create tag
         */
        post: operations["create-tag"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/locations/{locationId}/tags/{tagId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get tag by id
         * @description Get tag by id
         */
        get: operations["get-tag-by-id"];
        /**
         * Update tag
         * @description Update tag
         */
        put: operations["update-tag"];
        post?: never;
        /**
         * Delete tag
         * @description Delete tag
         */
        delete: operations["delete-tag"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/locations/{locationId}/tasks/search": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Task Search Filter
         * @description Task Search
         */
        post: operations["task-search"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/locations/{locationId}/customFields": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Custom Fields
         * @description Get Custom Fields
         */
        get: operations["get-custom-fields"];
        put?: never;
        /**
         * Create Custom Field
         * @description Create Custom Field
         */
        post: operations["create-custom-field"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/locations/{locationId}/customFields/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Custom Field
         * @description Get Custom Field
         */
        get: operations["get-custom-field"];
        /**
         * Update Custom Field
         * @description Update Custom Field
         */
        put: operations["update-custom-field"];
        post?: never;
        /**
         * Delete Custom Field
         * @description Delete Custom Field
         */
        delete: operations["delete-custom-field"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/locations/{locationId}/customValues": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Custom Values
         * @description Get Custom Values
         */
        get: operations["get-custom-values"];
        put?: never;
        /**
         * Create Custom Value
         * @description Create Custom Value
         */
        post: operations["create-custom-value"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/locations/{locationId}/customValues/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Custom Value
         * @description Get Custom Value
         */
        get: operations["get-custom-value"];
        /**
         * Update Custom Value
         * @description Update Custom Value
         */
        put: operations["update-custom-value"];
        post?: never;
        /**
         * Delete Custom Value
         * @description Delete Custom Value
         */
        delete: operations["delete-custom-value"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/locations/{locationId}/templates": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * GET all or email/sms templates
         * @description GET all or email/sms templates
         */
        get: operations["GET-all-or-email-sms-templates"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/locations/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create Location
         * @description Create a new location/sub-account based on the data provided
         */
        post: operations["create-location"];
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
        SettingsSchema: {
            /** @example false */
            allowDuplicateContact?: boolean;
            /** @example false */
            allowDuplicateOpportunity?: boolean;
            /** @example false */
            allowFacebookNameMerge?: boolean;
            /** @example false */
            disableContactTimezone?: boolean;
        };
        SocialSchema: {
            /**
             * @description Facebook URL
             * @example https://www.facebook.com/
             */
            facebookUrl?: string;
            /**
             * @description Googleplus URL
             * @example https://www.googleplus.com/
             */
            googlePlus?: string;
            /**
             * @description LinkedIn URL
             * @example https://www.linkedIn.com/
             */
            linkedIn?: string;
            /**
             * @description Foursquare URL
             * @example https://www.foursquare.com/
             */
            foursquare?: string;
            /**
             * @description Twitter URL
             * @example https://www.foutwitterrsquare.com/
             */
            twitter?: string;
            /**
             * @description Yelp URL
             * @example https://www.yelp.com/
             */
            yelp?: string;
            /**
             * @description Instagram URL
             * @example https://www.instagram.com/
             */
            instagram?: string;
            /**
             * @description Instagram URL
             * @example https://www.youtube.com/
             */
            youtube?: string;
            /**
             * @description Instagram URL
             * @example https://www.pinterest.com/
             */
            pinterest?: string;
            /**
             * @description Instagram URL
             * @example https://www.blogRss.com/
             */
            blogRss?: string;
            /**
             * @description Google Business Places ID
             * @example ChIJJGPdVbQTrjsRGUkefteUeFk
             */
            googlePlacesId?: string;
        };
        GetLocationSchema: {
            /**
             * @description Location Id
             * @example ve9EPM428h8vShlRW1KT
             */
            id?: string;
            /**
             * @description The name for the sub-account/location
             * @example Mark Shoes
             */
            name?: string;
            /**
             * @description The phone number of the business for which sub-account is created
             * @example +1410039940
             */
            phone?: string;
            /**
             * @description The email for the sub-account/location
             * @example john.doe@mail.com
             */
            email?: string;
            /**
             * @description The address of the business for which sub-account is created
             * @example 4th fleet street
             */
            address?: string;
            /**
             * @description The city where the business is located for which sub-account is created
             * @example New York
             */
            city?: string;
            /**
             * @description The state in which the business operates for which sub-account is created
             * @example Illinois
             */
            state?: string;
            /**
             * @description The country in which the business is present for which sub-account is created
             * @example US
             */
            country?: string;
            /**
             * @description The postal code of the business for which sub-account is created
             * @example 567654
             */
            postalCode?: string;
            /**
             * @description The website of the business for which sub-account is created
             * @example https://yourwebsite.com
             */
            website?: string;
            /**
             * @description The timezone of the business for which sub-account is created
             * @example US/Central
             */
            timezone?: string;
            /** @description The default settings for location */
            settings?: components["schemas"]["SettingsSchema"];
            /** @description The social media links for location */
            social?: components["schemas"]["SocialSchema"];
        };
        SearchSuccessfulResponseDto: {
            locations?: components["schemas"]["GetLocationSchema"][];
        };
        BusinessSchema: {
            /** @example dentist */
            name?: string;
            /** @example MIG 14, Delhi */
            address?: string;
            /** @example delhi */
            city?: string;
            /** @example delhi */
            state?: string;
            /** @example IN */
            country?: string;
            /** @example 567654 */
            postalCode?: string;
            /** @example https://gohighlevel.com/ */
            website?: string;
            /** @example America/Chicago */
            timezone?: string;
            /** @example https://dummyimage.com/o/locationPhotos%2Fve9EPM428h8vShlRW1KT.jpeg */
            logoUrl?: string;
        };
        GetLocationByIdSchema: {
            /** @example ve9EPM428h8vShlRW1KT */
            id?: string;
            /** @example 5DP4iH6HLkQsiKESj6rh */
            companyId?: string;
            /** @example dentist */
            name?: string;
            /** @example ganthi nagar, gyanbabu chauk motihati */
            address?: string;
            /** @example motihari */
            city?: string;
            /** @example Loca */
            state?: string;
            /** @example https://dummyimage.com/o/locationPhotos%2Fve9EPM428h8vShlRW1KT.jpeg */
            logoUrl?: string;
            /** @example IN */
            country?: string;
            /** @example 567654 */
            postalCode?: string;
            /** @example https://gohighlevel.com/ */
            website?: string;
            /** @example America/Chicago */
            timezone?: string;
            /** @example Dr. Rane */
            firstName?: string;
            /** @example deo */
            lastName?: string;
            /** @example rane@due.com */
            email?: string;
            /** @example +919039160788 */
            phone?: string;
            business?: components["schemas"]["BusinessSchema"];
            social?: components["schemas"]["SocialSchema"];
            settings?: components["schemas"]["SettingsSchema"];
            reseller?: Record<string, never>;
        };
        GetLocationByIdSuccessfulResponseDto: {
            location?: components["schemas"]["GetLocationByIdSchema"];
        };
        ProspectInfoDto: {
            /**
             * @description First name of the prospect
             * @example John
             */
            firstName: string;
            /**
             * @description Last name of the prospect
             * @example Doe
             */
            lastName: string;
            /**
             * @description Email of the prospect
             * @example john.doe@mail.com
             */
            email: string;
        };
        TwilioSchema: {
            /**
             * @description SID provided by Twilio
             * @example AC_XXXXXXXXXXX
             */
            sid: string;
            /**
             * @description Auth token provided by Twilio
             * @example 77_XXXXXXXXXXX
             */
            authToken: string;
        };
        MailgunSchema: {
            /**
             * @description API key provided by Mailgun
             * @example key-XXXXXXXXXXX
             */
            apiKey: string;
            /**
             * @description Domain connected with Mailgun
             * @example replies.yourdomain.com
             */
            domain: string;
        };
        CreateLocationDto: {
            /**
             * @description The name for the sub-account/location
             * @example Mark Shoes
             */
            name: string;
            /**
             * @description The phone number of the business for which sub-account is created with the appropriate country-code
             * @example +1410039940
             */
            phone?: string;
            /**
             * @description Company/Agency Id
             * @example UAXssdawIWAWD
             */
            companyId: string;
            /**
             * @description The address of the business for which sub-account is created
             * @example 4th fleet street
             */
            address?: string;
            /**
             * @description The city where the business is located for which sub-account is created
             * @example New York
             */
            city?: string;
            /**
             * @description The state in which the business operates for which sub-account is created
             * @example Illinois
             */
            state?: string;
            /**
             * @description The 2 letter country-code in which the business is present for which sub-account is created
             * @example US
             */
            country?: string;
            /**
             * @description The postal code of the business for which sub-account is created
             * @example 567654
             */
            postalCode?: string;
            /**
             * @description The website of the business for which sub-account is created
             * @example https://yourwebsite.com
             */
            website?: string;
            /**
             * @description The timezone of the business for which sub-account is created
             * @example US/Central
             */
            timezone?: string;
            /** @example {
             *       "firstName": "John",
             *       "lastName": "Doe",
             *       "email": "john.doe@mail.com"
             *     } */
            prospectInfo?: components["schemas"]["ProspectInfoDto"];
            /** @description The default settings for location */
            settings?: components["schemas"]["SettingsSchema"];
            /** @description The social media links for location */
            social?: components["schemas"]["SocialSchema"];
            /** @description The twilio credentials for location */
            twilio?: components["schemas"]["TwilioSchema"];
            /** @description The mailgun credentials for location */
            mailgun?: components["schemas"]["MailgunSchema"];
            /**
             * @description The snapshot ID to be loaded into the location.
             * @example XXXXXXXXXXX
             */
            snapshotId?: string;
        };
        CreateLocationSuccessfulResponseDto: {
            /**
             * @description Location Id
             * @example ve9EPM428h8vShlRW1KT
             */
            id?: string;
            /**
             * @description Company/Agency Id
             * @example UAXssdawIWAWD
             */
            companyId?: string;
            /**
             * @description The name for the sub-account/location
             * @example Mark Shoes
             */
            name?: string;
            /**
             * @description The phone number of the business for which sub-account is created
             * @example +1410039940
             */
            phone?: string;
            /**
             * @description The email for the sub-account/location
             * @example john.doe@mail.com
             */
            email?: string;
            /**
             * @description The address of the business for which sub-account is created
             * @example 4th fleet street
             */
            address?: string;
            /**
             * @description The city where the business is located for which sub-account is created
             * @example New York
             */
            city?: string;
            /**
             * @description The state in which the business operates for which sub-account is created
             * @example Illinois
             */
            state?: string;
            /**
             * @description The country in which the business is present for which sub-account is created
             * @example US
             */
            country?: string;
            /**
             * @description The postal code of the business for which sub-account is created
             * @example 567654
             */
            postalCode?: string;
            /**
             * @description The website of the business for which sub-account is created
             * @example https://yourwebsite.com
             */
            website?: string;
            /**
             * @description The timezone of the business for which sub-account is created
             * @example US/Central
             */
            timezone?: string;
            /** @description The default settings for location */
            settings?: components["schemas"]["SettingsSchema"];
            /** @description The social media links for location */
            social?: components["schemas"]["SocialSchema"];
        };
        SnapshotPutSchema: {
            /**
             * @description Snaptshot ID
             * @example XXXXXXXXXXX
             */
            id: string;
            /**
             * @description If you want override all conflicted assets then pass true. Default value is false.
             * @default false
             * @example false
             */
            override: boolean;
        };
        UpdateLocationDto: {
            /**
             * @description The name for the sub-account/location
             * @example Mark Shoes
             */
            name?: string;
            /**
             * @description The phone number of the business for which sub-account is created
             * @example +1410039940
             */
            phone?: string;
            /**
             * @description Company/Agency Id
             * @example UAXssdawIWAWD
             */
            companyId: string;
            /**
             * @description The address of the business for which sub-account is created
             * @example 4th fleet street
             */
            address?: string;
            /**
             * @description The city where the business is located for which sub-account is created
             * @example New York
             */
            city?: string;
            /**
             * @description The state in which the business operates for which sub-account is created
             * @example Illinois
             */
            state?: string;
            /**
             * @description The country in which the business is present for which sub-account is created
             * @example US
             */
            country?: string;
            /**
             * @description The postal code of the business for which sub-account is created
             * @example 567654
             */
            postalCode?: string;
            /**
             * @description The website of the business for which sub-account is created
             * @example https://yourwebsite.com
             */
            website?: string;
            /**
             * @description The timezone of the business for which sub-account is created
             * @example US/Central
             */
            timezone?: string;
            /** @example {
             *       "firstName": "John",
             *       "lastName": "Doe",
             *       "email": "john.doe@mail.com"
             *     } */
            prospectInfo?: components["schemas"]["ProspectInfoDto"];
            /** @description The default settings for location */
            settings?: components["schemas"]["SettingsSchema"];
            /** @description The social media links for location */
            social?: components["schemas"]["SocialSchema"];
            /** @description The twilio credentials for location */
            twilio?: components["schemas"]["TwilioSchema"];
            /** @description The mailgun credentials for location */
            mailgun?: components["schemas"]["MailgunSchema"];
            /** @description The snapshot to be updated in the location. */
            snapshot?: components["schemas"]["SnapshotPutSchema"];
        };
        LocationDeletedSuccessfulResponseDto: {
            /**
             * @description Success status of the API
             * @example true
             */
            success: boolean;
            /**
             * @description Success message of the API
             * @example Deleted location with id: ve9EPM428h8vShlRW1KT
             */
            message: string;
        };
        LocationTagsSchema: {
            /** @example minim aliquip anim */
            name?: string;
            /** @example ve9EPM428h8vShlRW1KT */
            locationId?: string;
            /** @example flGwEuzsfJOia1i1ikRN */
            id?: string;
        };
        LocationTagsSuccessfulResponseDto: {
            tags?: components["schemas"]["LocationTagsSchema"][];
        };
        LocationTagSuccessfulResponseDto: {
            tag?: components["schemas"]["LocationTagsSchema"];
        };
        tagBody: {
            /**
             * @description Tag name
             * @example Tag
             */
            name: string;
        };
        LocationTagDeleteSuccessfulResponseDto: {
            /** @example true */
            succeded?: boolean;
        };
        TaskSearchParamsDto: {
            /**
             * @description Contact Ids
             * @example [
             *       "dSMo5jnqkJyh8YeGXM7k",
             *       "j5WESpmRj816VtyUuWwh"
             *     ]
             */
            contactId?: string[];
            /**
             * @description Task Completed Or Pending
             * @example true
             */
            completed?: boolean;
            /**
             * @description Assigned User Ids
             * @example [
             *       "0004Mtfsd11SBU1mBPgd"
             *     ]
             */
            assignedTo?: string[];
            /**
             * @description Search Value
             * @example Task Name
             */
            query?: string;
            /**
             * @description Limit To Api
             * @default 25
             * @example 10
             */
            limit: number;
            /**
             * @description Number Of Tasks To Skip
             * @default 0
             * @example 10
             */
            skip: number;
            /**
             * @description Bussiness Id
             * @example 6348240b98722079e5417332
             */
            businessId?: string;
        };
        LocationTaskListSuccessfulResponseDto: {
            tasks?: unknown[][];
        };
        CustomFieldSchema: {
            /** @example 3sv6UEo51C9Bmpo1cKTq */
            id?: string;
            /** @example pincode */
            name?: string;
            /** @example contact.pincode */
            fieldKey?: string;
            /** @example Pin code */
            placeholder?: string;
            /** @example TEXT */
            dataType?: string;
            /** @example 0 */
            position?: number;
            /** @example [
             *       "first option"
             *     ] */
            picklistOptions?: string[];
            /** @example [] */
            picklistImageOptions?: string[];
            /** @example false */
            isAllowedCustomOption?: boolean;
            /** @example true */
            isMultiFileAllowed?: boolean;
            /** @example 4 */
            maxFileLimit?: number;
            /** @example 3sv6UEo51C9Bmpo1cKTq */
            locationId?: string;
        };
        CustomFieldsListSuccessfulResponseDto: {
            customFields?: components["schemas"]["CustomFieldSchema"][];
        };
        CustomFieldSuccessfulResponseDto: {
            customField?: components["schemas"]["CustomFieldSchema"];
        };
        textBoxListOptionsSchema: {
            /** @example First */
            label?: string;
            /** @example  */
            prefillValue?: string;
        };
        CreateCustomFieldsDTO: {
            /** @example Custom Field */
            name: string;
            /** @example TEXT */
            dataType: string;
            /** @example Placeholder Text */
            placeholder?: string;
            /** @example [
             *       ".pdf",
             *       ".docx",
             *       ".jpeg"
             *     ] */
            acceptedFormat?: string[];
            /** @example false */
            isMultipleFile?: boolean;
            /** @example 2 */
            maxNumberOfFiles?: number;
            textBoxListOptions?: (components["schemas"]["textBoxListOptionsSchema"] | components["schemas"]["textBoxListOptionsSchema"])[];
            /**
             * @default 0
             * @example 0
             */
            position: number;
        };
        UpdateCustomFieldsDTO: {
            /** @example Custom Field */
            name: string;
            /** @example Placeholder Text */
            placeholder?: string;
            /** @example [
             *       ".pdf",
             *       ".docx",
             *       ".jpeg"
             *     ] */
            acceptedFormat?: string[];
            /** @example false */
            isMultipleFile?: boolean;
            /** @example 2 */
            maxNumberOfFiles?: number;
            textBoxListOptions?: (components["schemas"]["textBoxListOptionsSchema"] | components["schemas"]["textBoxListOptionsSchema"])[];
            /**
             * @default 0
             * @example 0
             */
            position: number;
        };
        CustomFieldDeleteSuccessfulResponseDto: {
            /** @example true */
            succeded?: boolean;
        };
        CustomValueSchema: {
            /** @example rWQ709Pb62syqGLceg1x */
            id?: string;
            /** @example Custom Field */
            name?: string;
            /** @example {{ custom_values.custom_field }} */
            fieldKey?: string;
            /** @example Value */
            value?: string;
            /** @example rWQ709Pb6dasyqGLceg1x */
            locationId?: string;
        };
        CustomValuesListSuccessfulResponseDto: {
            customValues?: components["schemas"]["CustomValueSchema"][];
        };
        CustomValueIdSuccessfulResponseDto: {
            customValue?: components["schemas"]["CustomValueSchema"];
        };
        customValuesDTO: {
            /** @example Custom Field Name */
            name: string;
            /** @example Value */
            value: string;
        };
        CustomValueDeleteSuccessfulResponseDto: {
            /** @example true */
            succeded?: boolean;
        };
        SmsTemplateSchema: {
            /** @example sms body */
            body?: string;
            /** @example [] */
            attachments?: unknown[][];
        };
        GetSmsTemplateResponseSchema: {
            /** @example 2yMwhgTNO19bpintqrap */
            id?: string;
            /** @example sms template */
            name?: string;
            /** @example sms */
            type?: string;
            template?: components["schemas"]["SmsTemplateSchema"];
            /** @example 2022-01-27T12:31:19.679Z */
            dateAdded?: string;
            /** @example ve9EPM428h8vShlRW1KT */
            locationId?: string;
            /** @example [] */
            urlAttachments?: string[];
        };
        EmailTemplateSchema: {
            /** @example subject text */
            subject?: string;
            /** @example [] */
            attachments?: unknown[][];
            /** @example <html><head><style>body{font-family: sans-serif;}</style></head><body>testing</body></html> */
            html?: string;
        };
        GetEmailTemplateResponseSchema: {
            /** @example 2yMwhgTNO19bpintqrap */
            id?: string;
            /** @example email template */
            name?: string;
            /** @example email */
            type?: string;
            /** @example 2022-01-27T12:31:19.679Z */
            dateAdded?: string;
            template?: components["schemas"]["EmailTemplateSchema"];
            /** @example ve9EPM428h8vShlRW1KT */
            locationId?: string;
        };
        GetTemplatesSuccessfulResponseDto: {
            templates?: (components["schemas"]["GetSmsTemplateResponseSchema"] | components["schemas"]["GetEmailTemplateResponseSchema"])[];
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
    "search-locations": {
        parameters: {
            query?: {
                /**
                 * @description The company/agency id on which you want to perform the search
                 * @example 5DP4iH6HLkQsiKESj6rh
                 */
                companyId?: string;
                /**
                 * @description The value by which the results should be skipped. Default will be 0
                 * @example 1
                 */
                skip?: string;
                /**
                 * @description The value by which the results should be limited. Default will be 10
                 * @example 10
                 */
                limit?: string;
                /**
                 * @description The order in which the results should be returned - Allowed values asc, desc. Default will be asc
                 * @example asc
                 */
                order?: string;
                /** @example johndoe@mail.com */
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
            /** @description Successful response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SearchSuccessfulResponseDto"];
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
    "get-location": {
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
                 * @description Location Id
                 * @example ve9EPM428h8vShlRW1KT
                 */
                locationId: string;
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
                    "application/json": components["schemas"]["GetLocationByIdSuccessfulResponseDto"];
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
    "put-location": {
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
                 * @description Location Id
                 * @example ve9EPM428h8vShlRW1KT
                 */
                locationId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateLocationDto"];
            };
        };
        responses: {
            /** @description Successful update response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CreateLocationSuccessfulResponseDto"];
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
    "delete-location": {
        parameters: {
            query: {
                /**
                 * @description Boolean value to indicate whether to delete Twilio Account or not
                 * @example false
                 */
                deleteTwilioAccount: boolean;
            };
            header: {
                /** @description Access Token */
                Authorization: string;
                /** @description API Version */
                Version: "2021-07-28";
            };
            path: {
                /**
                 * @description Location Id
                 * @example ve9EPM428h8vShlRW1KT
                 */
                locationId: string;
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
                    "application/json": components["schemas"]["LocationDeletedSuccessfulResponseDto"];
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
    "get-location-tags": {
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
                 * @description Location Id
                 * @example ve9EPM428h8vShlRW1KT
                 */
                locationId: string;
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
                    "application/json": components["schemas"]["LocationTagsSuccessfulResponseDto"];
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
    "create-tag": {
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
                 * @description Location Id
                 * @example ve9EPM428h8vShlRW1KT
                 */
                locationId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["tagBody"];
            };
        };
        responses: {
            /** @description Successful response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LocationTagSuccessfulResponseDto"];
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
    "get-tag-by-id": {
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
                 * @description Location Id
                 * @example ve9EPM428h8vShlRW1KT
                 */
                locationId: string;
                /**
                 * @description Tag Id
                 * @example flGwEuzsfJOia1i1ikRN
                 */
                tagId: string;
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
                    "application/json": components["schemas"]["LocationTagSuccessfulResponseDto"];
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
    "update-tag": {
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
                 * @description Location Id
                 * @example ve9EPM428h8vShlRW1KT
                 */
                locationId: string;
                /**
                 * @description Tag Id
                 * @example flGwEuzsfJOia1i1ikRN
                 */
                tagId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["tagBody"];
            };
        };
        responses: {
            /** @description Successful response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LocationTagSuccessfulResponseDto"];
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
    "delete-tag": {
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
                 * @description Location Id
                 * @example ve9EPM428h8vShlRW1KT
                 */
                locationId: string;
                /**
                 * @description Tag Id
                 * @example flGwEuzsfJOia1i1ikRN
                 */
                tagId: string;
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
                    "application/json": components["schemas"]["LocationTagDeleteSuccessfulResponseDto"];
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
    "task-search": {
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
                 * @description Location Id
                 * @example ve9EPM428h8vShlRW1KT
                 */
                locationId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["TaskSearchParamsDto"];
            };
        };
        responses: {
            /** @description Successful response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LocationTaskListSuccessfulResponseDto"];
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
    "get-custom-fields": {
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
                 * @description Location Id
                 * @example ve9EPM428h8vShlRW1KT
                 */
                locationId: string;
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
                    "application/json": components["schemas"]["CustomFieldsListSuccessfulResponseDto"];
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
    "create-custom-field": {
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
                 * @description Location Id
                 * @example ve9EPM428h8vShlRW1KT
                 */
                locationId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateCustomFieldsDTO"];
            };
        };
        responses: {
            /** @description Successful response */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CustomFieldSuccessfulResponseDto"];
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
    "get-custom-field": {
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
                 * @description Location Id
                 * @example ve9EPM428h8vShlRW1KT
                 */
                locationId: string;
                /**
                 * @description Custom Field Id
                 * @example 00NhGCcN1tlO8ZHcu7Wb
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
                    "application/json": components["schemas"]["CustomFieldSuccessfulResponseDto"];
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
    "update-custom-field": {
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
                 * @description Location Id
                 * @example ve9EPM428h8vShlRW1KT
                 */
                locationId: string;
                /**
                 * @description Custom Field Id
                 * @example 00NhGCcN1tlO8ZHcu7Wb
                 */
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateCustomFieldsDTO"];
            };
        };
        responses: {
            /** @description Successful response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CustomFieldSuccessfulResponseDto"];
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
    "delete-custom-field": {
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
                 * @description Location Id
                 * @example ve9EPM428h8vShlRW1KT
                 */
                locationId: string;
                /**
                 * @description Custom Field Id
                 * @example 00NhGCcN1tlO8ZHcu7Wb
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
                    "application/json": components["schemas"]["CustomFieldDeleteSuccessfulResponseDto"];
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
    "get-custom-values": {
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
                 * @description Location Id
                 * @example ve9EPM428h8vShlRW1KT
                 */
                locationId: string;
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
                    "application/json": components["schemas"]["CustomValuesListSuccessfulResponseDto"];
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
    "create-custom-value": {
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
                 * @description Location Id
                 * @example ve9EPM428h8vShlRW1KT
                 */
                locationId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["customValuesDTO"];
            };
        };
        responses: {
            /** @description Successful response */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CustomValueIdSuccessfulResponseDto"];
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
    "get-custom-value": {
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
                 * @description Location Id
                 * @example ve9EPM428h8vShlRW1KT
                 */
                locationId: string;
                /**
                 * @description Custom Value Id
                 * @example kOBjMVAJhFuUeYIojVet
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
                    "application/json": components["schemas"]["CustomValueIdSuccessfulResponseDto"];
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
    "update-custom-value": {
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
                 * @description Location Id
                 * @example ve9EPM428h8vShlRW1KT
                 */
                locationId: string;
                /**
                 * @description Custom Value Id
                 * @example kOBjMVAJhFuUeYIojVet
                 */
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["customValuesDTO"];
            };
        };
        responses: {
            /** @description Successful response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CustomValueIdSuccessfulResponseDto"];
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
    "delete-custom-value": {
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
                 * @description Location Id
                 * @example ve9EPM428h8vShlRW1KT
                 */
                locationId: string;
                /**
                 * @description Custom Value Id
                 * @example kOBjMVAJhFuUeYIojVet
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
                    "application/json": components["schemas"]["CustomValueDeleteSuccessfulResponseDto"];
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
    "GET-all-or-email-sms-templates": {
        parameters: {
            query?: {
                /** @example false */
                deleted?: boolean;
                /** @example 1 */
                skip?: string;
                /** @example 25 */
                limit?: string;
                type?: "sms" | "email" | "whatsapp";
            };
            header: {
                /** @description Access Token */
                Authorization: string;
                /** @description API Version */
                Version: "2021-07-28";
            };
            path: {
                /**
                 * @description Location Id
                 * @example ve9EPM428h8vShlRW1KT
                 */
                locationId: string;
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
                    "application/json": components["schemas"]["GetTemplatesSuccessfulResponseDto"];
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
    "create-location": {
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
                "application/json": components["schemas"]["CreateLocationDto"];
            };
        };
        responses: {
            /** @description Successful response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CreateLocationSuccessfulResponseDto"];
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
