export type paths = {
    "/users/{userId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get User
         * @description Get User
         */
        get: operations["get-user"];
        /**
         * Update User
         * @description Update User
         */
        put: operations["update-user"];
        post?: never;
        /**
         * Delete User
         * @description Delete User
         */
        delete: operations["delete-user"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get User by Location
         * @description Get User by Location
         */
        get: operations["get-user-by-location"];
        put?: never;
        /**
         * Create User
         * @description Create User
         */
        post: operations["create-user"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
};
export type webhooks = Record<string, never>;
export type components = {
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
        PermissionsDto: {
            /** @example true */
            campaignsEnabled?: boolean;
            /** @example false */
            campaignsReadOnly?: boolean;
            /** @example true */
            contactsEnabled?: boolean;
            /** @example true */
            workflowsEnabled?: boolean;
            /** @example true */
            workflowsReadOnly?: boolean;
            /** @example true */
            triggersEnabled?: boolean;
            /** @example true */
            funnelsEnabled?: boolean;
            /** @example false */
            websitesEnabled?: boolean;
            /** @example true */
            opportunitiesEnabled?: boolean;
            /** @example true */
            dashboardStatsEnabled?: boolean;
            /** @example true */
            bulkRequestsEnabled?: boolean;
            /** @example true */
            appointmentsEnabled?: boolean;
            /** @example true */
            reviewsEnabled?: boolean;
            /** @example true */
            onlineListingsEnabled?: boolean;
            /** @example true */
            phoneCallEnabled?: boolean;
            /** @example true */
            conversationsEnabled?: boolean;
            /** @example false */
            assignedDataOnly?: boolean;
            /** @example false */
            adwordsReportingEnabled?: boolean;
            /** @example false */
            membershipEnabled?: boolean;
            /** @example false */
            facebookAdsReportingEnabled?: boolean;
            /** @example false */
            attributionsReportingEnabled?: boolean;
            /** @example true */
            settingsEnabled?: boolean;
            /** @example true */
            tagsEnabled?: boolean;
            /** @example true */
            leadValueEnabled?: boolean;
            /** @example true */
            marketingEnabled?: boolean;
            /** @example true */
            agentReportingEnabled?: boolean;
            /** @example true */
            botService?: boolean;
            /** @example true */
            socialPlanner?: boolean;
            /** @example true */
            bloggingEnabled?: boolean;
            /** @example true */
            invoiceEnabled?: boolean;
        };
        RoleSchema: {
            /** @example account */
            type?: string;
            /** @example admin */
            role?: string;
            /** @example [
             *       "ve9EPM428h8vShlRW1KT"
             *     ] */
            locationIds?: string[];
        };
        UserSchema: {
            /** @example 0IHuJvc2ofPAAA8GzTRi */
            id?: string;
            /** @example John Deo */
            name?: string;
            /** @example John */
            firstName?: string;
            /** @example Deo */
            lastName?: string;
            /** @example john@deo.com */
            email?: string;
            /** @example +1 808-868-8888 */
            phone?: string;
            /** @example  */
            extension?: string;
            permissions?: components["schemas"]["PermissionsDto"];
            roles?: components["schemas"]["RoleSchema"];
            /** @example false */
            deleted?: boolean;
        };
        LocationSuccessfulResponseDto: {
            users?: components["schemas"]["UserSchema"][];
        };
        UserSuccessfulResponseDto: {
            /** @example 0IHuJvc2ofPAAA8GzTRi */
            id?: string;
            /** @example John Deo */
            name?: string;
            /** @example John */
            firstName?: string;
            /** @example Deo */
            lastName?: string;
            /** @example john@deo.com */
            email?: string;
            /** @example +1 808-868-8888 */
            phone?: string;
            /** @example  */
            extension?: string;
            permissions?: components["schemas"]["PermissionsDto"];
            roles?: components["schemas"]["RoleSchema"];
        };
        unprocessableDto: {
            /** @example 422 */
            statusCode?: number;
            /** @example [
             *       "Unprocessable Entity"
             *     ] */
            message?: string[];
            /** @example Unprocessable Entity */
            error?: string;
        };
        CreateUserDto: {
            /** @example ve9EPM428h8vShlRW1KT */
            companyId: string;
            /** @example John */
            firstName: string;
            /** @example Deo */
            lastName: string;
            /** @example john@deo.com */
            email: string;
            /** @example ******* */
            password: string;
            /** @example +18832327657 */
            phone?: string;
            /** @example account */
            type: string;
            /** @example admin */
            role: string;
            /** @example [
             *       "C2QujeCh8ZnC7al2InWR"
             *     ] */
            locationIds: string[];
            permissions: components["schemas"]["PermissionsDto"];
            /** @example https://img.png */
            profilePhoto?: string;
        };
        UpdateUserDto: {
            /** @example John */
            firstName?: string;
            /** @example Deo */
            lastName?: string;
            /** @example john@deo.com */
            email?: string;
            /** @example ******* */
            password?: string;
            /** @example +18832327657 */
            phone?: string;
            /** @example account */
            type?: string;
            /** @example admin */
            role?: string;
            /** @example [
             *       "C2QujeCh8ZnC7al2InWR"
             *     ] */
            locationIds?: string[];
            permissions?: components["schemas"]["PermissionsDto"];
            /** @example https://img.png */
            profilePhoto?: string;
        };
        DeleteUserSuccessfulResponseDto: {
            /** @example true */
            succeded?: boolean;
            /** @example Queued deleting user with e-mail john@deo.com and name John Deo. Will take effect in a few minutes. */
            message?: string;
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
};
export type $defs = Record<string, never>;
export interface operations {
    "get-user": {
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
                 * @description User Id
                 * @example ve9EPM428h8vShlRW1KT
                 */
                userId: string;
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
                    "application/json": components["schemas"]["UserSuccessfulResponseDto"];
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
            /** @description Unprocessable Entity */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["unprocessableDto"];
                };
            };
        };
    };
    "update-user": {
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
                 * @description User Id
                 * @example ve9EPM428h8vShlRW1KT
                 */
                userId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateUserDto"];
            };
        };
        responses: {
            /** @description Successful response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UserSuccessfulResponseDto"];
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
            /** @description Unprocessable Entity */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["unprocessableDto"];
                };
            };
        };
    };
    "delete-user": {
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
                 * @description User Id
                 * @example ve9EPM428h8vShlRW1KT
                 */
                userId: string;
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
                    "application/json": components["schemas"]["DeleteUserSuccessfulResponseDto"];
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
            /** @description Unprocessable Entity */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["unprocessableDto"];
                };
            };
        };
    };
    "get-user-by-location": {
        parameters: {
            query: {
                /** @example ve9EPM428h8vShlRW1KT */
                locationId: string;
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
                    "application/json": components["schemas"]["LocationSuccessfulResponseDto"];
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
    "create-user": {
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
                "application/json": components["schemas"]["CreateUserDto"];
            };
        };
        responses: {
            /** @description Successful response */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UserSuccessfulResponseDto"];
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
            /** @description Unprocessable Entity */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["unprocessableDto"];
                };
            };
        };
    };
}
