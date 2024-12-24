import { raw } from 'hono/html'
import type { FC } from 'hono/jsx'

import {} from '@gnosticdev/highlevel-sdk'

const cssFilePath = new URL('./style.css', import.meta.url)

const Layout: FC = async (props) => {
  const cssText = await Bun.file(cssFilePath).text()
  return (
    <html lang='en'>
      <head>
        <title>Get Your Authorization Code</title>
        <link
          href='https://cdn.jsdelivr.net/npm/water.css@2/out/dark.css'
          rel='stylesheet'
        />
        {/* biome-ignore lint/security/noDangerouslySetInnerHtml: */}
        <style dangerouslySetInnerHTML={{ __html: cssText }} />
      </head>
      <body>{props.children}</body>
    </html>
  )
}
export const Home: FC<{ buttonLink?: string; notice?: string }> = (props: {
  buttonLink?: string
  notice?: string
}) => {
  return (
    <Layout>
      <main>
        <h1>Get Your Authorization Code</h1>
        <pre>{props.notice ? <code>{props.notice}</code> : null}</pre>
        <div class='container'>
          <a
            class='btn'
            href={props.buttonLink}
          >
            Get Auth Code
          </a>
        </div>
      </main>
    </Layout>
  )
}

export const Result: FC<{
  message: string
  accessToken?: string
  routes?: string[]
}> = (props: {
  message: string
  accessToken?: string
  routes?: string[]
}) => {
  return (
    <Layout>
      {props.accessToken ? (
        <main>
          <h1>Authorization Successfull!</h1>
          <p class='success'>You are authorized!</p>
          <details>
            <summary>Access Token</summary>
            <div class='copy container'>
              <div
                class='copy-text'
                id='copy-text'
              >
                {props.accessToken}
              </div>
              <button
                class='btn'
                id='copy-btn'
                type='button'
              >
                Copy
              </button>
            </div>
          </details>

          {props.routes && <Links routes={props.routes} />}

          <script type='module'>
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
      ) : (
        <main>
          <h1>Authorization Failed</h1>
          <p class='failed'>{props.message}</p>
        </main>
      )}
    </Layout>
  )
}

export const Links: FC<{ routes: string[] }> = (props) => {
  return (
    <Layout>
      <main>
        <h1>Routes</h1>
        <ul class='route-links'>
          {props.routes.map((route) => (
            <a href={route}>
              <li>{route}</li>
            </a>
          ))}
        </ul>
      </main>
    </Layout>
  )
}
