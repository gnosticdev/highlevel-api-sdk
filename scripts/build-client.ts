import fs from 'fs'

if (fs.existsSync('dist')) {
    fs.rmSync('dist', { recursive: true })
}

const entrypoints = fs.readdirSync('src/client')
await Bun.build({
    entrypoints,
    outdir: 'dist',
    root: 'src/client',
    sourcemap: 'inline'
})
