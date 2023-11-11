declare module 'bun' {
    interface Env {
        CLIENT_ID: string
        CLIENT_SECRET: string
        API_BASE_URL: string
        REDIRECT_URL: string
        SSO_KEY: string
    }
}
