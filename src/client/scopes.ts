import { objectEntries } from '../lib/utils'
import type { HighLevelConfig } from './base'
import {
    type AccessType,
    type ScopeLiterals,
    type FilteredScopeNames,
    type ReadWrite,
    scopesSchema
} from './scopes-schema'

export class ScopesBuilder<T extends AccessType> {
    /** the access level for your app. Sub-Account is same as Location. Company same as Agency. */
    public accessType: T
    /** an array of the scopes that have been added so far */
    public collection = new Set<ScopeLiterals<T>>()

    /**
     * @constructor
     * @param accessType - the type of app access needed. 'Sub-Account' is same as 'Location' and 'Company' is same as Agency
     */
    constructor(config: Pick<HighLevelConfig<T>, 'accessType'>) {
        this.accessType = config.accessType
    }

    /** add a scope from the available scopes for this access type */
    public add(scopes: ScopeLiterals<T>): this
    public add(scopes: ScopeLiterals<T>[]): this
    public add(scopes: ScopeLiterals<T> | ScopeLiterals<T>[]): this {
        if (Array.isArray(scopes)) {
            this.collection = new Set([...this.collection, ...scopes])
        } else {
            this.collection.add(scopes)
        }
        return this
    }

    /** Get the scope parts for the given access type
     * @paramm type - the scope part to return
     * @param array - return the scopes as an array instead of a string
     * - `names` - return the scope names only (e.g. "businesses" instead of "businesses.read")
     * - `readWrite` - return scope names with the access type (e.g. "read" or "write")
     * - `literals` - (same as `all()` method) returns all scopes available to the given accessType in the format required by the authorization redirect uri. e.g. "businesses.read businesses.write locations.read..."
     */
    private _allAvailable(
        type: 'names' | 'readWrite' | 'literals' = 'literals',
        array?: boolean
    ) {
        const names: Array<FilteredScopeNames<T>> = []
        const readWrite: Array<ReadWrite<FilteredScopeNames<T>>> = []
        const literals: Array<ScopeLiterals<T>> = []
        for (const [scopeName, scopeValue] of objectEntries(scopesSchema)) {
            for (const [access, endpoints] of objectEntries(scopeValue)) {
                for (const endpoint of endpoints) {
                    if (
                        (endpoint.accessType as readonly AccessType[]).includes(
                            this.accessType
                        )
                    ) {
                        readWrite.push(
                            access as ReadWrite<FilteredScopeNames<T>>
                        )
                        literals.push(
                            `${scopeName}.${access}` as ScopeLiterals<T>
                        )
                        names.push(
                            scopeName.replace('/', ' ') as FilteredScopeNames<T>
                        )
                    }
                }
            }
        }

        switch (type) {
            case 'names':
                return names
            case 'readWrite':
                return readWrite
            case 'literals':
                return array ? literals : literals.join(' ')
        }
    }

    /**
     * Get all scopes added so far, as a string for use in the authorization redirect uri
     * @returns a string of the scopes joined by a space
     */
    public get() {
        return Array.from(this.collection).join(' ') as ScopeLiterals<T>
    }

    public has(scopes?: ScopeLiterals<T> | ScopeLiterals<T>[]) {
        if (!scopes) {
            return this.collection.size > 0
        }
        if (Array.isArray(scopes)) {
            return scopes.every((scope) => this.collection.has(scope))
        }
        return this.collection.has(scopes)
    }

    /** Get all scopes for the given access type
     * - returns scopes as a string for use in the authorization redirect uri
     */
    public all() {
        return this._allAvailable('literals', true) as ScopeLiterals<T>[]
    }
}
