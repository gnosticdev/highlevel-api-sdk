import kleur from 'kleur'
import type {
	Method,
	OpenAPI3,
	OperationObject,
	PathItemObject,
	ReferenceObject,
} from 'openapi-typescript'
import { objectEntries, objectKeys } from '../src/lib/utils'

type AccessType = 'Sub-Account' | 'Agency' | 'Private'

/**
 * An object representing an access map
 */
type AccessMapObject = {
	endpoint: string
	accessTypes: AccessType[]
	operationId: string
	method: Method
}

if (import.meta.main) {
	const glob = new Bun.Glob('*.openapi.json')

	const iter = glob.scan({ cwd: 'schemas/v2/openapi', absolute: true })

	const accessMapArray: AccessMapObject[] = []

	for await (const file of iter) {
		const json: OpenAPI3 = await Bun.file(file).json()
		const accessMap = generateAccessMap(json)
		accessMapArray.push(...accessMap)
	}

	await Bun.write(
		'src/generated/v2/custom/access-map.ts',
		`export const accessMap = ${JSON.stringify(accessMapArray, null, 2)} as const`,
	)
	console.log(kleur.green('Access map generated successfully'))
}

/**
 * Parse the security schemes for an endpoint
 * @param operation - The operation object
 * @returns An array of access types
 */
function parseEndpointAccess(operation: OperationObject): AccessType[] {
	const security = operation.security || []
	const accessTypes: AccessType[] = []

	for (const scheme of security) {
		if ('Location-Access' in scheme) {
			accessTypes.push('Sub-Account')
		}
		if ('Agency-Access' in scheme) {
			accessTypes.push('Agency')
		}
		if ('bearer' in scheme) {
			accessTypes.push('Private')
		}
	}

	return accessTypes
}
type PathItem = Record<Method, OperationObject>

/**
 * Check if a path item is valid
 * @param pathItem - The path item
 * @returns A boolean indicating if the path item is valid
 */
function isPathItem(
	pathItem: PathItemObject | ReferenceObject,
): pathItem is PathItem {
	return typeof pathItem === 'object' && pathItem !== null
}

/**
 * Check if an operation object is valid
 * @param operation - The operation object
 * @returns A boolean indicating if the operation object is valid
 */
function isOperationObject(
	operation: OperationObject | ReferenceObject | undefined,
): operation is OperationObject {
	return typeof operation === 'object' && operation !== null
}

/**
 * Generate an access map from an OpenAPI spec
 *
 * The access map is used to determine the access types for each endpoint
 * @param spec - The OpenAPI spec
 * @returns An array of access map objects
 */
export function generateAccessMap(spec: OpenAPI3): AccessMapObject[] {
	const paths = spec.paths
	if (!paths) {
		throw new Error('No paths found in the spec')
	}
	const pathnames = objectKeys(paths).filter(
		(pathname): pathname is string => typeof pathname === 'string',
	)
	const accessMap: AccessMapObject[] = []
	for (const pathname of pathnames) {
		const pathItem = paths[pathname]
		if (pathItem && isPathItem(pathItem)) {
			const methods = objectEntries(pathItem)
			for (const [method, operation] of methods) {
				if (isOperationObject(operation)) {
					accessMap.push({
						endpoint: pathname,
						operationId: operation.operationId!,
						method: method as Method,
						accessTypes: parseEndpointAccess(operation),
					})
				}
			}
		}
	}
	return accessMap
}
