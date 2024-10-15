/** @jsx jsx */
/** @jsxImportSource hono/jsx */

import { Database } from 'bun:sqlite'
import { createHighLevelClient } from '@gnosticdev/highlevel-sdk'
import type { HighLevelOauthConfig } from '@gnosticdev/highlevel-sdk/config'
import { ScopesBuilder } from '@gnosticdev/highlevel-sdk/scopes'
import type { Serve } from 'bun'
import { Hono, type MiddlewareHandler } from 'hono'
import { cors } from 'hono/cors'
import { logger } from 'hono/logger'
import { prettyJSON } from 'hono/pretty-json'
import kleur from 'kleur'
import { Home, Links, Result } from './components'
import { createTokensDB } from './db'

/**
 * Our database with custom methods for storing and retrieving tokens
 */
const db = createTokensDB(new Database('db.sqlite'))

/**
 * Hono variables that can be accessed from anywhere in the app
 */
type HLVariables = HighLevelOauthConfig<'Sub-Account'> & {
  accessToken: string
}

/**
 * Initialize Hono
 */
const app = new Hono<{ Variables: HLVariables }>()

/**
 * Scopes for the app - can't have anything not set in the app settings
 */
const scopes = new ScopesBuilder({ accessType: 'Sub-Account' })
scopes.add(['locations.readonly', 'users.readonly'])

/**
 * Create a single instance of the OauthClient to be used throughout the application
 */
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

/**
 * Middleware to check, refresh, and set the access token
 * - Excludes /auth and /auth/callback from the check
 */
const accessTokenMiddleware: MiddlewareHandler = async (c, next) => {
  if (c.req.path.startsWith('/auth')) {
    await next()
  } else {
    console.log(kleur.red('------ checking token -----'))
    console.log(kleur.blue(`${c.req.url}`))

    const accessToken = await client.oauth.getAccessToken()
    if (!accessToken) {
      console.log(kleur.red('No access token found! -> redirecting to /auth'))
      return c.redirect('/auth')
    }
    c.set('accessToken', accessToken)
    await next()
  }
}

// Global Middleware
app.use('*', cors(), prettyJSON(), logger(), accessTokenMiddleware)
app.onError((err, c) => {
  console.error(err)
  return c.html(<Result message='An error occurred' />)
})

// start the login flow
app.get('/auth', async (c) => {
  return c.html(<Home buttonLink={client.oauth.getAuthorizationURL()} />)
})

/**
 * OAuth callback Middleware
 * - intercept the auth code from the query string
 * - exchange
 */
app.get('/auth/callback', async (c, next) => {
  const authCode = c.req.query('code')
  if (!authCode) {
    console.error('No auth code found!')
    return await c.html(<Result message='Invalid auth code' />)
  }
  try {
    const tokenData = await client.oauth.exchangeToken(authCode)
    const tokenResponse = await client.oauth.storeTokenData(tokenData)
    if (!tokenResponse) throw new Error('No token response found!')
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

/**
 * Get the locations for the account
 */
app.get('/locations', async (c) => {
  const accessToken = c.get('accessToken')
  if (!accessToken) {
    return c.redirect('/auth')
  }

  const tokenData = client.oauth.tokenData
  if (!tokenData) throw new Error('No token data found!')
  const locationId = tokenData.locationId
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
 * Get the users for the account
 */
app.get('/users', async (c) => {
  const accessToken = c.get('accessToken')
  if (!accessToken) {
    return c.redirect('/auth')
  }
  const tokenData = client.oauth.tokenData
  if (!tokenData) throw new Error('No token data found!')
  const locationId = tokenData.locationId
  if (!locationId) throw new Error('Need a location ID to get users installed!')

  const { data, error } = await client.users.GET('/users/', {
    params: {
      header: {
        Authorization: `Bearer ${accessToken}`,
        Version: '2021-07-28',
      },
      query: {
        locationId: locationId,
      },
    },
  })
  if (error) {
    console.error(error)
    return c.html(<Result message={error.message ?? 'Unknown error'} />)
  }
  return c.json(data)
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

/**
 * Port must match what we used in the callback url in the app settings
 */
const PORT = process.env.PORT ? Number.parseInt(process.env.PORT) : 3000

export default {
  fetch: app.fetch,
  port: PORT,
} satisfies Serve
