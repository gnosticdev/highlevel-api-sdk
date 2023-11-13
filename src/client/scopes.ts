import { coolConsole } from '@gnosticdev/cool-console'
import scopesJson from '../api/schemas/scopes.json'
import { z } from 'zod'

const accessTypeLiterals = z.literal('Sub-Account').or(z.literal('Company'))

const endpointSchema = z.object({
    methodAndEndpoint: z.string(),
    webhookEvents: z.string(),
    accessType: z
        .array(z.string())
        .refine(
            (val) =>
                val.length === 1 &&
                accessTypeLiterals.transform((arg) => val.includes(arg)),
            {
                message:
                    'accessType must be an array of length 1, containing a string'
            }
        )
})
const readWriteSchema = z.object({
    readonly: z.array(endpointSchema).optional(),
    write: z.array(endpointSchema).optional()
})

const scopesSchema = z.object({
    businesses: readWriteSchema,
    calendars: readWriteSchema,
    'calendars/groups': readWriteSchema,
    'calendars/events': readWriteSchema,
    campaigns: readWriteSchema,
    contacts: readWriteSchema,
    conversations: readWriteSchema,
    'conversations/message': readWriteSchema,
    forms: readWriteSchema,
    links: readWriteSchema,
    locations: readWriteSchema,
    'locations/customValues': readWriteSchema,
    'locations/customFields': readWriteSchema,
    'locations/tags': readWriteSchema,
    'locations/templates': readWriteSchema,
    'locations/tasks': readWriteSchema,
    medias: readWriteSchema,
    opportunities: readWriteSchema,
    oauth: readWriteSchema,
    snapshots: readWriteSchema,
    surveys: readWriteSchema,
    users: readWriteSchema,
    workflows: readWriteSchema
})

type ReadWriteSchema = z.infer<typeof readWriteSchema>
type ScopesSchema = z.infer<typeof scopesSchema>
type AccessType = z.infer<typeof accessTypeLiterals>

export class ScopesBuilder {
    private scopeNames = scopesSchema.keyof()
    private scopesHolder: Array<`${keyof ScopesSchema}.${keyof ReadWriteSchema}`> =
        []
    private _accessType: AccessType
    /**
     * @constructor
     * @param appAccessType - the type of app access needed. 'Sub-Account' is same as 'Location' and 'Company' is same as Agency
     */
    constructor(appAccessType: AccessType) {
        this._accessType = appAccessType
    }

    add(
        scopeName: z.infer<typeof this.scopeNames>,
        type: keyof ReadWriteSchema
    ) {
        const parsed = scopesSchema.partial().safeParse(scopesJson)
        if (!parsed.success) {
            coolConsole.red('zod parsing error').obj(parsed.error.message)
            return this
        }

        if (
            parsed.data?.[scopeName]?.[type]?.some((ep) =>
                ep.accessType.includes(this._accessType)
            )
        )
            this.scopesHolder.push(`${scopeName}.${type}`)

        return this
    }

    build() {
        return this.scopesHolder.join(' ')
    }
}
