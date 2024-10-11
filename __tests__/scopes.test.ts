import { describe, expect, it } from 'bun:test'
import { ScopesBuilder } from '../src/client/scopes'

const MockAgencyScopesBuilder = ScopesBuilder<'Agency'>
const MockSubAccountScopesBuilder = ScopesBuilder<'Sub-Account'>

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
		scopes.add(['businesses.readonly'])
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
	const agencyScopes = new MockAgencyScopesBuilder({ accessType: 'Agency' })
	const subAccountScopes = new MockSubAccountScopesBuilder({
		accessType: 'Sub-Account',
	})
	it('should return all available scopes for agency', () => {
		expect(agencyScopes.allAvailable()).toBeString()
		expect(agencyScopes.allAvailable()).not.toBeEmpty()
		expect(agencyScopes.allAvailable()).toInclude('oauth.write')
	})
	it('should return all available scopes for sub-account', () => {
		expect(subAccountScopes.allAvailable()).toBeString()
		expect(subAccountScopes.allAvailable()).not.toBeEmpty()
		expect(subAccountScopes.allAvailable()).toInclude('businesses.readonly')
	})
})
