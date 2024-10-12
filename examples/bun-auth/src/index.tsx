/** @jsx jsx */
/** @jsxImportSource hono/jsx */

import { Database } from 'bun:sqlite'
import { type HighLevelConfig, createHighLevelClient } from '@gnosticdev/highlevel-sdk'
import { ScopesBuilder } from '@gnosticdev/highlevel-sdk/scopes'
import type { Serve } from 'bun'
import { Hono, type MiddlewareHandler } from 'hono'
import { cors } from 'hono/cors'
import { logger } from 'hono/logger'
import { prettyJSON } from 'hono/pretty-json'
import kleur from 'kleur'
import { Home, Links, Result } from './components'
import { createTokensDB } from './db'

export const db = createTokensDB(new Database('./db.sqlite', { create: true }))

type HLVariables = HighLevelConfig<'Sub-Account'> & {
  accessToken: string
}

const app = new Hono<{ Variables: HLVariables }>()

const scopes = new ScopesBuilder({ accessType: 'Sub-Account' })
scopes.add([
  'businesses.readonly',
  'businesses.write',
  'calendars.readonly',
  'calendars.write',
  'calendars/events.readonly',
  'calendars/events.write',
  'calendars/groups.readonly',
  'calendars/groups.write',
  'campaigns.readonly',
  'contacts.readonly',
  'contacts.write',
  'conversations.readonly',
  'conversations.write',
  'conversations/message.readonly',
  'conversations/message.write',
  'forms.readonly',
  'links.readonly',
  'links.write',
  'locations.readonly',
  'locations/customFields.readonly',
  'locations/customFields.write',
  'locations/customValues.readonly',
  'locations/customValues.write',
  'locations/tags.readonly',
  'locations/tags.write',
  'locations/tasks.readonly',
  'locations/templates.readonly',
  'medias.readonly',
  'medias.write',
  'opportunities.readonly',
  'opportunities.write',
  'surveys.readonly',
  'users.readonly',
  'users.write',
  'workflows.readonly',
])

const client = createHighLevelClient({
  accessType: 'Sub-Account',
  clientId: process.env.CLIENT_ID!,
  clientSecret: process.env.CLIENT_SECRET!,
  scopes: scopes.get(),
  redirectUri: 'http://localhost:3000/auth/callback',
  storageFunction: async (tokenData) => {
    db.saveTokenResponse({
      access_token: tokenData.access_token,
      expiresAt: tokenData.expiresAt,
      refresh_token: tokenData.refresh_token,
      locationId: tokenData.locationId,
      userId: tokenData.userId,
    })
    return tokenData
  },
})

// Middleware to check accessToken, excluding /auth and /auth/callback
const checkForAccessToken: MiddlewareHandler = async (c, next) => {
  // dont check for /auth or /auth/callback
  if (c.req.path.startsWith('/auth')) {
    await next()
  } else {
    console.log(kleur.red('------ checking token -----'))
    console.log(kleur.blue(`${c.req.url}`))

    let accessToken = await client.oauth().getAccessToken()
    const _storedToken = db.getAccessToken()
    if (_storedToken) {
      console.log(kleur.blue(`${Bun.inspect(_storedToken)}`))
      client.oauth().updateTokenData(_storedToken)
      accessToken = _storedToken.access_token
    }
    if (!accessToken) {
      console.log(kleur.red('No access token found! -> redirecting to /auth'))
      return c.redirect('/auth')
    }
    c.set('accessToken', accessToken)
    await next()
  }
}

// Global Middleware
app.use('*', cors(), prettyJSON(), logger(), checkForAccessToken)
app.onError((err, c) => {
  console.error(err)
  return c.html(<Result message='An error occurred' />)
})

// start the login flow
app.get('/auth', async (c) => {
  return c.html(<Home buttonLink={client.oauth().getAuthorizationURL} />)
})

app.get('/locations', async (c) => {
  const accessToken = c.get('accessToken')
  if (!accessToken) {
    return c.redirect('/auth')
  }
  const locationId = client.oauth().tokenData.locationId
  if (!locationId) throw new Error('Need a location ID to get locations installed!')
  const { data, error } = await client.locations.GET('/locations/{locationId}', {
    params: {
      header: {
        Authorization: `Bearer ${accessToken}`,
        Version: '2021-07-28',
      },
      path: {
        locationId,
      },
    },
  })
  if (error) {
    console.error(error)
    return c.html(<Result message={error.message ?? 'Unknown error'} />)
  }
  return c.json(data)
})
/**
 * OAuth callback Middleware
 * - intercept the auth code from the query string
 * - exchange
 */
app.get('/auth/callback', async (c, next) => {
  const authCode = c.req.query('code')
  console.log(kleur.blue(`authCode: ${authCode}`))
  if (!authCode) {
    console.log(kleur.red('No auth code found!'))
    return await c.html(<Result message='Invalid auth code' />)
  }
  try {
    const tokenData = await client.oauth().exchangeToken(authCode)

    const tokenResponse = await client.oauth().storeTokenData(tokenData)
    c.set('accessToken', tokenResponse.access_token)
    await next()
  } catch (e) {
    console.error(e)
    return c.html(<Result message={(e as Error).message ?? 'Unknown error'} />)
  }
})
app.get('/auth/callback', async (c) => {
  const accessToken = c.get('accessToken')
  if (!accessToken) {
    return c.redirect('/auth')
  }

  return c.redirect('/authorized')
})

app.get('/authorized', async (c) => {
  const accessToken = db.getAccessToken()?.access_token
  return c.html(
    <Result
      message={accessToken ? 'You are authorized' : 'No token found!'}
      accessToken={accessToken}
      routes={allRoutes}
    />,
  )
})

app.get('/', (c) => {
  const paths = new Set(allRoutes)
  return c.html(<Links routes={Array.from(paths)} />)
})

app.onError((err, c) => {
  console.error(err)
  return c.html(<Result message='An error occurred' />)
})

const allRoutes = app.routes.filter((r) => !r.path.includes('*') && !r.path.match(/^\/auth(\/)?/)).map((r) => r.path)

export default {
  fetch: app.fetch,
  port: 3000,
} satisfies Serve
