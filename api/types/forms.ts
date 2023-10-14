export type paths = {
    "/forms/submissions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Forms Submissions
         * @description Get Forms Submissions
         */
        get: operations["get-forms-submissions"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/forms/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Forms
         * @description Get Forms
         */
        get: operations["get-forms"];
        put?: never;
        post?: never;
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
        pageDetailsSchema: {
            /** @example https://chaitanya-staging.dentistsnear.me/widget/form/YSWdvS4Is98wtIDGnpmI */
            url?: string;
            /** @example Direct traffic */
            source?: string;
            /** @example https://staging.gohighlevel.com */
            referrer?: string;
            /** @example 14247f97-f43e-488b-998a-165181a13018 */
            fbEventId?: string;
        };
        FormsSubmissionsSubmissionsSchema: {
            /** @example 38303ec7-629a-49e2-888a-cf8bf0b1f97e */
            id?: string;
            /** @example DWQ45t2IPVxi9LDu1wBl */
            contactId?: string;
            /** @example john@deo.com */
            __submissions_other_field__?: string;
            /** @example 20 */
            __custom_field_id__?: string;
            /** @example 2021-06-23T06:07:04.000Z */
            createdAt?: string;
            /** @example YSWdvS4Is98wtIDGnpmI */
            formId?: string;
            pageDetails?: components["schemas"]["pageDetailsSchema"];
        };
        metaSchema: {
            /** @example 1 */
            total?: number;
            /** @example 1 */
            currentPage?: number;
            /** @example null */
            nextPage?: number | null;
            /** @example null */
            prevPage?: number | null;
        };
        FormsSubmissionsSuccessfulResponseDto: {
            submissions?: components["schemas"]["FormsSubmissionsSubmissionsSchema"][];
            meta?: components["schemas"]["metaSchema"];
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
        FormsParams: {
            /** @example YSWdvS4Is98wtIDGnpmI */
            id?: string;
            /** @example Form 1 */
            name?: string;
            /** @example ve9EPM428h8vShlRW1KT */
            locationId?: string;
        };
        FormsSuccessfulResponseDto: {
            forms?: components["schemas"]["FormsParams"][];
            /**
             * @description Total number of forms
             * @example 20
             */
            total?: number;
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
    "get-forms-submissions": {
        parameters: {
            query: {
                /** @example ve9EPM428h8vShlRW1KT */
                locationId: string;
                /**
                 * @description Page No. By default it will be 1
                 * @example 1
                 */
                page?: number;
                /**
                 * @description Limit Per Page records count. will allow maximum up to 100 and default will be 20
                 * @example 20
                 */
                limit?: number;
                /**
                 * @description Filter submission by form id
                 * @example jjusM6EOngDExnbo2DbU
                 */
                formId?: string;
                /**
                 * @description Filter by contactId, name, email or phone no.
                 * @example john@deo.com
                 */
                q?: string;
                /**
                 * @description Get submission by starting of this date. By default it will be same date of last month(YYYY-MM-DD).
                 * @example 2020-11-14
                 */
                startAt?: string;
                /**
                 * @description Get submission by ending of this date. By default it will be current date(YYYY-MM-DD).
                 * @example 2020-12-14
                 */
                endAt?: string;
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
                    "application/json": components["schemas"]["FormsSubmissionsSuccessfulResponseDto"];
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
    "get-forms": {
        parameters: {
            query: {
                /** @example ve9EPM428h8vShlRW1KT */
                locationId: string;
                /** @example 0 */
                skip?: number;
                /**
                 * @description Limit Per Page records count. will allow maximum up to 50 and default will be 10
                 * @example 20
                 */
                limit?: number;
                /** @example folder */
                type?: string;
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
                    "application/json": components["schemas"]["FormsSuccessfulResponseDto"];
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
