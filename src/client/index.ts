import createClient from 'openapi-fetch'

export * from './scopes'
export * from './locations'
export * from './oauth'
export const baseUrl = 'https://services.leadconnector.com'
export const ghlClient = createClient
