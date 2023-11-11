import { generateRedirectUrl } from '@/lib/utils'
import { describe, expect, test } from 'bun:test'

describe('generateRedirectUrl', () => {
    const url = generateRedirectUrl(
        'https://localhost:3000',
        '123',
        'Sub-Account'
    )
    test('should return a url', () => {
        expect(url).toBeDefined()
    })
})
