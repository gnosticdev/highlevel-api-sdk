/** @jsx jsx */
/** @jsxImportSource hono/jsx */

import { coolConsole } from "@gnosticdev/cool-console"
import type { Serve } from "bun"
import { Hono } from "hono"
import { cors } from "hono/cors"
import { raw } from "hono/html"
import type { FC } from "hono/jsx"
import { logger } from "hono/logger"
import { LocationsClient, OauthClient } from "../client"
import { ScopesBuilder } from "../client/scopes"
import { HighLevelClient, type HighLevelConfig } from "../client/sdk"

const cssFilePath = import.meta.resolveSync("./style.css")

type HLVariables = HighLevelConfig<"Sub-Account"> & {
	loggedIn: boolean
	accessToken: string
}

const app = new Hono<{ Variables: HLVariables }>()

const Layout: FC = async (props) => {
	const cssFile = Bun.pathToFileURL(cssFilePath)
	const cssText = await Bun.file(cssFile).text()
	return (
		<html lang="en">
			<head>
				<title>Get Your Authorization Code</title>
				<link
					rel="stylesheet"
					href="https://cdn.jsdelivr.net/npm/water.css@2/out/dark.css"
				/>
				{/* biome-ignore lint/security/noDangerouslySetInnerHtml: */}
				<style dangerouslySetInnerHTML={{ __html: cssText }} />
			</head>
			<body>{props.children}</body>
		</html>
	)
}

const Home: FC<{ buttonLink?: string; copyCode?: string }> = (props: {
	buttonLink?: string
}) => {
	return (
		<Layout>
			<main>
				<h1>Get Your Authorization Code</h1>
				<div class="container">
					<a class="btn" href={props.buttonLink}>
						Get Auth Code
					</a>
				</div>
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
					<div class="container copy">
						<div id="copy-text" class="copy-text">
							{props.code}
						</div>
						<button type="button" id="copy-btn" class="btn">
							Copy
						</button>
					</div>
				) : null}
				<script type="module">
					{raw`
                    const copyBtn = document.getElementById('copy-btn')
                    const copyText = document.getElementById('copy-text')
                    copyBtn.addEventListener('click', (e) => {
                        navigator.clipboard.writeText(copyText.innerText)
                        copyBtn.classList.add('copied')
                        copyBtn.innerText = 'Copied!'
                        setTimeout(() => {
                            copyBtn.classList.remove('copied')
                            copyBtn.innerText = 'Copy'
                        }, 1500)
                    })
                `}
				</script>
			</main>
		</Layout>
	)
}

const scopes = new ScopesBuilder({ accessType: "Sub-Account" })
const auth = new OauthClient({
	accessType: "Sub-Account",
	clientId: process.env.CLIENT_ID!,
	clientSecret: process.env.CLIENT_SECRET!,
	scopes: scopes.all(),
	redirectUri: "http://localhost:3000/auth/callback",
})
const client = new HighLevelClient(auth)
app.use("*", cors())
app.use("*", logger())
// start the login flow
app.get("/", async (c) => {
	// button to start the login flow
	if (c.req.path === "/") {
		return c.html(<Home buttonLink={client.oauth.authUrl} />)
	}
})
/**
 * OAuth callback Middleware
 * - intercept the auth code from the query string
 * - exchange it for an access token
 */
app.get("/auth/callback", async (c, next) => {
	const authCode = c.req.query("code")
	if (!authCode) {
		coolConsole.red("No auth code found!")
		return c.html(<Result message="Invalid auth code" />)
	}

	const token = await client.oauth.getAccessToken(authCode)

	if (!token) {
		coolConsole.red("No token found!")
		return c.html(<Result message="Couldnt get accessToken" />)
	}

	c.set("accessToken", token)
	return next()
})

app.get("/auth/callback", async (c) => {
	const accessToken = c.get("accessToken")
	return c.html(
		<Result
			message={
				accessToken
					? "Successfully retrieved your accessToken"
					: "No token found!"
			}
			code={accessToken}
		/>,
	)
})

app.get("/locations/installed", async (c) => {})

export default ({
	fetch: app.fetch,
	port: 3000,
} satisfies Serve)
