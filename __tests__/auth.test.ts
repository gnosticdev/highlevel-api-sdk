import { Database } from 'bun:sqlite'
import { describe, expect, it } from 'bun:test'
import { createTokensDB } from '../src/examples/db'

const testDB = new Database(':memory:', { create: true })
const db = createTokensDB(testDB)

const USER_ID = '1'
const LOCATION_ID = 'p5'
const TOKEN = '111222333'
const REFRESH = '444555666'
// set expires to 12 am tomorrow
const EXPIRES = new Date().setDate(new Date().getDate() + 1)

describe('auth', () => {
	it('should have a database', () => {
		expect(createTokensDB).toBeDefined()
	})
	it('should insert a token', () => {
		const saved = db.saveTokenResponse({
			userId: USER_ID,
			locationId: LOCATION_ID,
			access_token: TOKEN,
			refresh_token: REFRESH,
			expiresAt: EXPIRES,
		})

		expect(saved).toBeUndefined()
	})
	it('should get the token', () => {
		const token = db.getAccessToken()
		console.log(Bun.inspect({ token }))
		expect(token).toBeDefined()
		expect(token?.access_token).toBe(TOKEN)
		expect(token?.refresh_token).toBe(REFRESH)
		expect(token?.expiresAt).toBe(EXPIRES)
	})
	it('should get the token by userId', () => {
		const token = db.getTokenByUserId(USER_ID)
		console.log(Bun.inspect({ token }))
		expect(token).toBeDefined()
		expect(token?.access_token).toBe(TOKEN)
		expect(token?.refresh_token).toBe(REFRESH)
		expect(token?.expiresAt).toBe(EXPIRES)
	})
	it('should not insert a duplicate token', () => {
		const saved = db.saveTokenResponse({
			userId: USER_ID,
			locationId: LOCATION_ID,
			access_token: TOKEN,
			refresh_token: REFRESH,
			expiresAt: EXPIRES,
		})
		expect(saved).toBeUndefined()
	})
})
