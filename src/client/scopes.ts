import { coolConsole } from '@gnosticdev/cool-console'
import { z } from 'zod'
import { objectEntries } from '../lib/utils'
import {
    scopesSchema,
    type AccessType,
    type ReadWrite,
    type ScopeNames,
    type ScopesSchema
} from './scopes-schema'

export class HighLevelClient {
    /** valid scope names for a given access type */
    private _scopes: `${ScopeNames}.${ReadWrite}`[] = []
    private _scopesSchema: Partial<ScopesSchema>
    public accessType: AccessType
    public all: () => Partial<ScopesSchema>[]

    /**
     * @constructor
     * @param appAccessType - the type of app access needed. 'Sub-Account' is same as 'Location' and 'Company' is same as Agency
     */
    constructor(appAccessType: AccessType) {
        this.accessType = appAccessType
        this._scopesSchema = scopesSchema
        this.all = () => {
            for (const [key, val] of objectEntries(scopesSchema)) {
            }
        }
    }

    /** add a scope from the available scopes for this access type */
    public add<T extends AccessType>(scopeName: ScopeNames, type: ReadWrite) {
        if (Object.hasOwn(this._scopes[scopeName], type)) {
            this._scopes.push(`${scopeName}.${type}`)
        }
        return this
    }

    get() {
        return this._scopes
    }

    /**
     * Generate the url to redirect to for the user to authorize the app
     * @param redirectUri - the url to redirect to after the user has authorized the app
     * @param CLIENT_ID - the client id of the app
     * @param accessType - the type of access to request
     *  - Sub-Account (same as Location)
     *  - Company (same as Agency))
     * @returns
     */
    generateRedirectUrl(
        redirectUri: string,
        CLIENT_ID: string,
        scopeOrAccess: 'Sub-Account' | 'Company'
    ) {
        const scopes = generateScopes(scopeOrAccess)

        const baseUrl =
            'https://marketplace.gohighlevel.com/oauth/chooselocation'
        const params = new URLSearchParams({
            response_type: 'code',
            redirect_uri: redirectUri,
            client_id: CLIENT_ID,
            scope: scopes.trim()
        })

        return `${baseUrl}?${params.toString()}`
    }
}

// --- tests ---
