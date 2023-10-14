export type paths = {
    "/oauth/token": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Get Access Token
         * @description Use Access Tokens to access GoHighLevel resources on behalf of an authenticated location/company.
         */
        post: operations["get-access-token"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/oauth/locationToken": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Get Location Access Token from Agency Token
         * @description This API allows you to generate locationAccessToken from AgencyAccessToken
         */
        post: operations["get-location-access-token"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/oauth/installedLocations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Location where app is installed
         * @description This API allows you fetch location where app is installed upon
         */
        get: operations["get-installed-location"];
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
        GetAccessCodebodyDto: {
            /** @description The ID provided by GHL for your integration */
            client_id: string;
            client_secret: string;
            /** @enum {string} */
            grant_type: "authorization_code" | "refresh_token";
            code?: string;
            refresh_token?: string;
            /**
             * @description The type of token to be requested
             * @example Location
             * @enum {string}
             */
            user_type?: "Company" | "Location";
            /**
             * @description The redirect URI for your application
             * @example https://myapp.com/oauth/callback/gohighlevel
             */
            redirect_uri?: string;
        };
        GetAccessCodeSuccessfulResponseDto: {
            /** @example ab12dc0ae1234a7898f9ff06d4f69gh */
            access_token?: string;
            /** @example Bearer */
            token_type?: string;
            /** @example 86399 */
            expires_in?: number;
            /** @example xy34dc0ae1234a4858f9ff06d4f66ba */
            refresh_token?: string;
            /** @example conversations/message.readonly conversations/message.write */
            scope?: string;
            /** @example Location */
            userType?: string;
            /**
             * @description Location ID - Present only for Sub-Account Access Token
             * @example l1C08ntBrFjLS0elLIYU
             */
            locationId?: string;
            /**
             * @description Company ID
             * @example l1C08ntBrFjLS0elLIYU
             */
            companyId?: string;
            /**
             * @description Approved locations to generate location access token
             * @example [
             *       "l1C08ntBrFjLS0elLIYU"
             *     ]
             */
            approvedLocations?: string[];
            /**
             * @deprecated
             * @description Hashed companyId - Deprecated (will be removed by July 2023)
             * @example 7db63a0b08e8ac3e5f43f5fef96adc0ce5bef033380c486a9b41c612e4627b7e
             */
            hashedCompanyId?: string;
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
        GetLocationAccessCodeBodyDto: {
            /** @description Company Id of location you want to request token for */
            companyId: string;
            /** @description The location ID for which you want to obtain accessToken */
            locationId: string;
        };
        GetLocationAccessTokenSuccessfulResponseDto: {
            /**
             * @description Location access token which can be used to authenticate & authorize API under following scope
             * @example ab12dc0ae1234a7898f9ff06d4f69gh
             */
            access_token?: string;
            /** @example Bearer */
            token_type?: string;
            /**
             * @description Time in seconds remaining for token to expire
             * @example 86399
             */
            expires_in?: number;
            /**
             * @description Scopes the following accessToken have access to
             * @example conversations/message.readonly conversations/message.write
             */
            scope?: string;
            /**
             * @description Location ID - Present only for Sub-Account Access Token
             * @example l1C08ntBrFjLS0elLIYU
             */
            locationId?: string;
        };
        InstalledLocationSchema: {
            /**
             * @description Location ID
             * @example 0IHuJvc2ofPAAA8GzTRi
             */
            _id: string;
            /**
             * @description Name of the location
             * @example John Deo
             */
            name: string;
            /**
             * @description Address linked to location
             * @example 47 W 13th St, New York, NY 10011, USA
             */
            address: string;
            /**
             * @description Check if the requested app is installed for following location
             * @example true
             */
            isInstalled?: boolean;
        };
        GetInstalledLocationsSuccessfulResponseDto: {
            locations?: components["schemas"]["InstalledLocationSchema"][];
            /**
             * @description Total location count under the company
             * @example 1231
             */
            count?: number;
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
    "get-access-token": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/x-www-form-urlencoded": components["schemas"]["GetAccessCodebodyDto"];
            };
        };
        responses: {
            /** @description Successful response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GetAccessCodeSuccessfulResponseDto"];
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
    "get-location-access-token": {
        parameters: {
            query?: never;
            header: {
                /** @description API Version */
                Version: "2021-07-28";
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/x-www-form-urlencoded": components["schemas"]["GetLocationAccessCodeBodyDto"];
            };
        };
        responses: {
            /** @description Successful response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GetLocationAccessTokenSuccessfulResponseDto"];
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
    "get-installed-location": {
        parameters: {
            query: {
                /**
                 * @description Parameter to skip the number installed locations
                 * @example 1
                 */
                skip?: string;
                /**
                 * @description Parameter to limit the number installed locations
                 * @example 10
                 */
                limit?: string;
                /**
                 * @description Parameter to search for the installed location by name
                 * @example location name
                 */
                query?: string;
                /**
                 * @description Filters out location which are installed for specified app under the specified company
                 * @example true
                 */
                isInstalled?: boolean;
                /**
                 * @description Parameter to search by the companyId
                 * @example tDtDnQdgm2LXpyiqYvZ6
                 */
                companyId: string;
                /**
                 * @description Parameter to search by the appId
                 * @example tDtDnQdgm2LXpyiqYvZ6
                 */
                appId: string;
            };
            header: {
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
                    "application/json": components["schemas"]["GetInstalledLocationsSuccessfulResponseDto"];
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
