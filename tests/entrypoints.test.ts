import { generateRedirectUrl } from '../src/lib/utils'
import { describe, expect, test } from 'bun:test'

describe('generateRedirectUrl', () => {
    const url = generateRedirectUrl(
        'https://localhost:3000',
        '123',
        'Sub-Account'
    )
    test('should return a url', () => {
        expect(url).toBe(
            'https://marketplace.gohighlevel.com/oauth/chooselocation?response_type=code&redirect_uri=https%3A%2F%2Flocalhost%3A3000&client_id=123&scope=location:read location:write location:delete location:read:all location:write:all location:delete:all'
        )
    })
})
