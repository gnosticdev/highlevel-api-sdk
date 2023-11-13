export type paths = {
    "/links/{linkId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Update Link
         * @description Update Link
         */
        put: operations["update-link"];
        post?: never;
        /**
         * Delete Link
         * @description Delete Link
         */
        delete: operations["delete-link"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/links/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Links
         * @description Get Links
         */
        get: operations["get-links"];
        put?: never;
        /**
         * Create Link
         * @description Create Link
         */
        post: operations["create-link"];
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
        LinkSchema: {
            /** @example n4AriwEnFrGh3tu08W0U */
            id?: string;
            /** @example first tag */
            name?: string;
            /** @example https://www.google.com/ */
            redirectTo?: string;
            /** @example {{trigger_link.n4AriwEnFrGh3tu08W0U}} */
            fieldKey?: string;
            /** @example ve9EPM428h8vShlRW1KT */
            locationId?: string;
        };
        GetLinksSuccessfulResponseDto: {
            links?: components["schemas"]["LinkSchema"][];
        };
        LinksDto: {
            /** @example ve9EPM428h8vShlRW1KT */
            locationId: string;
            /** @example first tag */
            name: string;
            /** @example https://www.google.com/ */
            redirectTo: string;
        };
        GetLinkSuccessfulResponseDto: {
            link?: components["schemas"]["LinkSchema"];
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
        LinkUpdateDto: {
            /** @example first tag */
            name: string;
            /** @example https://www.google.com/ */
            redirectTo: string;
        };
        DeleteLinksSuccessfulResponseDto: {
            /** @example true */
            succeded?: boolean;
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
    "update-link": {
        parameters: {
            query?: never;
            header: {
                /** @description Access Token */
                Authorization: string;
                /** @description Api Version */
                Version: string;
            };
            path: {
                /** @description Link Id */
                linkId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["LinkUpdateDto"];
            };
        };
        responses: {
            /** @description Successful response */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GetLinkSuccessfulResponseDto"];
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
    "delete-link": {
        parameters: {
            query?: never;
            header: {
                /** @description Access Token */
                Authorization: string;
                /** @description Api Version */
                Version: string;
            };
            path: {
                /** @description Link Id */
                linkId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful response */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DeleteLinksSuccessfulResponseDto"];
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
    "get-links": {
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
                    "application/json": components["schemas"]["GetLinksSuccessfulResponseDto"];
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
    "create-link": {
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
                "application/json": components["schemas"]["LinksDto"];
            };
        };
        responses: {
            /** @description Successful response */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GetLinkSuccessfulResponseDto"];
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
