import { describe, expect, it } from 'bun:test'
import { ScopesBuilder } from '../src/v2/scopes/scopes-builder'
import { ScopesCollection } from '../src/v2/scopes/types/scopes'

describe('ScopesBuilder', () => {
	const scopes = new ScopesBuilder('Sub-Account')
	it('should have the correct methods', () => {
		expect(scopes.collection).toBeInstanceOf(Set)
		expect(scopes.add).toBeFunction()
		expect(scopes.asString).toBeFunction()
		expect(scopes.getAllValid).toBeFunction()
	})
	describe('add', () => {
		const scopes = new ScopesBuilder('Sub-Account')
		it('should add a scope to the collection', () => {
			scopes.add(['businesses.readonly'])
			expect(scopes.add(['businesses.readonly'])).toBe(scopes)
		})
		it('should add an array of scopes to the collection', () => {
			scopes.add(['businesses.write', 'businesses.readonly'])
			expect(scopes.collection.has('businesses.write')).toBe(true)
			expect(scopes.collection.has('businesses.readonly')).toBe(true)
		})

		describe('getAllValid', () => {
			const agencyScopes = new ScopesBuilder('Agency')
			const subAccountScopes = new ScopesBuilder('Sub-Account')
			it('should return all available scopes for agency', () => {
				const allAgencyScopes = agencyScopes.getAllValid()
				expect(allAgencyScopes).toBeArray()
				expect(allAgencyScopes).not.toBeEmpty()
				expect(allAgencyScopes).toEqual(ScopesCollection.Agency)
			})
			it('should return all available scopes for sub-account', () => {
				const scopesArray = subAccountScopes.getAllValid()
				expect(scopesArray).toBeArray()
				expect(scopesArray).not.toBeEmpty()
				expect(scopesArray).toEqual(ScopesCollection['Sub-Account'])
			})
		})
	})
})
