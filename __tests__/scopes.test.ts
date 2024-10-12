import { describe, expect, it } from 'bun:test'
import { ScopesBuilder } from '../src/oauth/scopes'

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

describe('allAvailableScopes', () => {
	const agencyScopes = new MockAgencyScopesBuilder({ accessType: 'Agency' })
	const subAccountScopes = new MockSubAccountScopesBuilder({
		accessType: 'Sub-Account',
	})
	it('should return all available scopes for agency', () => {
		const scopesString = agencyScopes.all().join(' ')
		expect(scopesString).toBeString()
		expect(scopesString).not.toBeEmpty()
		expect(scopesString).toInclude('oauth.readonly oauth.write')
	})
	it('should return all available scopes for sub-account', () => {
		const scopesArray = subAccountScopes.all()
		expect(scopesArray).toBeArray()
		expect(scopesArray).not.toBeEmpty()
		expect(scopesArray).toContain('businesses.readonly')
	})
})
