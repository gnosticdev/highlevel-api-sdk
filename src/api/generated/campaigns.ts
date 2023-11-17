export interface paths {
    "/campaigns/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Campaigns
         * @description Get Campaigns
         */
        get: operations["get-campaigns"];
        put?: never;
        post?: never;
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
        campaignsSchema: {
            /** @example mIVALPYuTD7YjUHnFEx4 */
            id?: string;
            /** @example test */
            name?: string;
            /** @example published */
            status?: string;
            /** @example ve9EPM428h8vShlRW1KT */
            locationId?: string;
        };
        CampaignsSuccessfulResponseDto: {
            campaigns?: components["schemas"]["campaignsSchema"][];
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
    "get-campaigns": {
        parameters: {
            query: {
                /** @example ve9EPM428h8vShlRW1KT */
                locationId: string;
                /** @example draft */
                status?: string;
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
                    "application/json": components["schemas"]["CampaignsSuccessfulResponseDto"];
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
