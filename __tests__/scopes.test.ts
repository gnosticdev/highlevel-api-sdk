import { describe, expect, it } from 'bun:test'
import { ScopesBuilder } from '../src/client'

const MockCompanyScopesBuilder = class extends ScopesBuilder<'Company'> {}
const MockSubAccountScopesBuilder = class extends ScopesBuilder<'Sub-Account'> {
	getAllScopes(type?: 'names' | 'readWrite' | 'literals', array?: boolean) {
		return super.getAllScopes(type, array)
	}
}

describe('ScopesBuilder', () => {
	const scopes = new MockSubAccountScopesBuilder({ accessType: 'Sub-Account' })
	it('should have an accessType property', () => {
		expect(scopes.accessType).toBe('Sub-Account')
	})
	it('should have a collection property', () => {
		expect(scopes.collection).toBeInstanceOf(Set)
	})
})
describe('add', () => {
	const scopes = new MockSubAccountScopesBuilder({ accessType: 'Sub-Account' })
	it('should add a scope to the collection', () => {
		scopes.add('businesses.readonly')
		expect(scopes.has('businesses.readonly')).toBe(true)
	})
	it('should add an array of scopes to the collection', () => {
		scopes.add(['businesses.write', 'businesses.readonly'])
		expect(scopes.has('businesses.write')).toBe(true)
		expect(scopes.has('businesses.readonly')).toBe(true)
	})
	it('should return the added scopes', () => {
		expect(scopes.get()).toBe('businesses.readonly businesses.write')
	})
})

describe('allAvailable', () => {
	const scopes = new MockSubAccountScopesBuilder({ accessType: 'Sub-Account' })
	it('should return all available scopes', () => {
		expect(scopes.all()).toBeArrayOfSize(35)
	})
	it('should return all available scope names', () => {
		expect(scopes.getAllScopes('names', true)).toBeArrayOfSize(21)
	})
	it('should return all available scope names with access type', () => {
		expect(scopes.getAllScopes('readWrite', true)).toBeArrayOfSize(2)
	})
	it('should return all available scope literals', () => {
		expect(scopes.getAllScopes('literals')).toBeTypeOf('string')
	})
})
