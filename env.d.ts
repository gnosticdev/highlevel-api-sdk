///<reference types="bun-types" />

declare module 'bun' {
	interface Env {
		CLIENT_ID: string
		CLIENT_SECRET: string
		API_BASE_URL: string
		REDIRECT_URL: string
		SSO_KEY: string
		DOCS_USERNAME: string
		DOCS_PASSWORD: string
	}
}

declare module '*.css' {
	const content: string
	export default content
}
