/** @jsx jsx */
/** @jsxImportSource hono/jsx */
import type { FC } from 'hono/jsx'
import {
    generateAccessToken,
    type BaseConfig,
    type HighLevelConfig
} from '../client/base'
import { Hono } from 'hono'
import { ScopesBuilder } from '../client/scopes'
import { cors } from 'hono/cors'
import { coolConsole } from '@gnosticdev/cool-console'
import { logger } from 'hono/logger'
import type { Serve } from 'bun'
import { raw } from 'hono/html'

const cssFilePath = import.meta.resolveSync('./style.css')

type HLVariables = HighLevelConfig<'Sub-Account'> & {
    loggedIn: boolean
    accessToken: string
}

const app = new Hono<{ Variables: HLVariables }>()

const Layout: FC = async (props) => {
    const cssFile = Bun.pathToFileURL(cssFilePath)
    const cssText = await Bun.file(cssFile).text()
    return (
        <html>
            <head>
                <title>Get Your Authorization Code</title>
                <link
                    rel='stylesheet'
                    href='https://cdn.jsdelivr.net/npm/water.css@2/out/dark.css'
                />
                <style dangerouslySetInnerHTML={{ __html: cssText }}></style>
            </head>
            <body class='grid-center'>{props.children}</body>
        </html>
    )
}

const Home: FC<{ href?: string; copyCode?: string }> = (props: {
    href?: string
}) => {
    return (
        <Layout>
            <main>
                <h1>Get Your Authorization Code</h1>
                <div class='container'>
                    <a class='btn' href={props.href}>
                        Get Auth Code
                    </a>
                </div>
                <script type='module'>
                    {raw`
                    const copyBtn = document.querySelector('.copy-btn')
                    const copyText = document.querySelector('.copy-text')
                    copyBtn.addEventListener('click', () => {
                        navigator.clipboard.writeText(copyText.innerText)
                    })
                `}
                </script>
            </main>
        </Layout>
    )
}

const Result: FC<{ message: string; code?: string }> = (props: {
    message: string
    code?: string
}) => {
    return (
        <Layout>
            <main>
                <h1>Access Token</h1>
                <h3>{props.message}</h3>
                {props.code ? (
                    <div class='container copy'>
                        <div class='copy-text'>{props.code}</div>
                        <button class='btn copy-btn'>Copy</button>
                    </div>
                ) : null}
                <script type='module'>
                    {raw`
                    const copyBtn = document.querySelector('.copy-btn')
                    const copyText = document.querySelector('.copy-text')
                    copyBtn.addEventListener('click', () => {
                        navigator.clipboard.writeText(copyText.innerText)
                    })
                `}
                </script>
            </main>
        </Layout>
    )
}

const scopes = new ScopesBuilder({ accessType: 'Sub-Account' })
const config = {
    accessType: 'Sub-Account',
    clientId: process.env.CLIENT_ID!,
    clientSecret: process.env.CLIENT_SECRET!,
    scopes: scopes.all(),
    redirectUri: 'http://localhost:3000/auth/callback'
} satisfies BaseConfig<'Sub-Account'>

const client = generateAccessToken(config)

app.use('*', cors())
app.use('*', logger())
// start the login flow
app.get('/', async (c) => {
    // button to start the login flow
    if (c.req.path === '/') {
        return c.html(<Home href={client.authUrl} />)
    }
})
/**
 * OAuth callback Middleware
 * - intercept the auth code from the query string
 * - exchange it for an access token
 */
app.get('/auth/callback', async (c, next) => {
    coolConsole.magenta('auth/callback params:').obj(c.req.param())
    coolConsole.magenta('auth/callback queries:').obj(c.req.queries())

    const authCode = c.req.query('code')
    if (!authCode) {
        coolConsole.red('No auth code found!')
        return c.html(<Result message='Invalid auth code' />)
    }
    coolConsole.blue('authCode: ' + authCode)
    const token = await client.exchangeCodeForToken(authCode)
    coolConsole.blue('token: ' + token)
    if (!token) {
        coolConsole.red('No token found!')
        return c.html(<Result message='Couldnt get accessToken' />)
    }
    c.set('accessToken', token)
    return next()
})

app.get('/auth/callback', async (c) => {
    const accessToken = c.get('accessToken')
    return c.html(
        <Result
            message={
                accessToken
                    ? 'Successfully retrieved your accessToken'
                    : 'No token found!'
            }
            code={accessToken}
        />
    )
})

export default {
    fetch: app.fetch,
    port: 3000
} satisfies Serve
