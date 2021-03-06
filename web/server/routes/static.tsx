import { contentType } from 'media-types'
import { Router } from 'oak'

async function createClientBundle() {
  const {files} = await Deno.emit('client/client.tsx', {
    bundle: 'module',
    importMapPath: 'import_map.json',
    compilerOptions: {
      lib: ["dom", "dom.iterable", "esnext"],
      allowJs: true,
      jsx: "react",
      strictPropertyInitialization: false,
    },
  })
  return files
}

const bundle = await createClientBundle()
const styles = Deno.readTextFileSync('client/styles.css')

function getFile(path: string) {
  if (path === 'styles.css') return styles
  return bundle[`deno:///${path}`]
}

const html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Psy(chic) Chess</title>
    <meta name="description" content="Wacky chess variant" />
    <link href="styles.css" rel="stylesheet" type="text/css">
    <style>
      body {
        margin: 0;
        padding: 0;
      }
      body, #root {
        height: 100vh;
        width: 100vw;
      }
    </style>
  </head>
  <body>
    <div id="root">
    </div>
    <script src="/bundle.js"></script>
  </body>
</html>
`

const staticRouter = new Router()

// handle static routes by proxying to web resources
// https://deno.com/deploy/docs/serve-static-assets
staticRouter
  .get('/', (ctx) => {
    const headers = new Headers(ctx.response.headers)
    headers.set(
      'Content-Security-Policy',
      `default-src 'self' https://raw.githubusercontent.com; script-src 'self'; connect-src ws: wss:`,
    )
    ctx.response.body = html
  })
  .get('/wasm_chess.wasm', async (ctx) => {
    const headers = new Headers(ctx.response.headers)
    headers.set('Content-Type', 'application/wasm')
    ctx.response.headers = headers
    const body = await Deno.readFile('common/wasm/wasm_chess_bg.wasm')
    ctx.response.body = body
  })
  .get('/:pathname', async (ctx, next) => {
    const pathname = ctx.params.pathname

    if (!pathname || !(getFile(pathname))) {
      return await next()
    }

    // get just the last bit so we can determine the correct filetype
    // contentType from media-types@v2.10.0 checks path.includes('/')
    const filePathParts = pathname.split('/')
    const contentTypeValue = contentType(filePathParts[filePathParts.length - 1])
    const headers = new Headers(ctx.response.headers)
    if (contentTypeValue) {
      headers.set('Content-Type', contentTypeValue)
    }
    ctx.response.headers = headers
    if (pathname.endsWith('.js')) {
      ctx.response.type = 'application/javascript'
    }
    ctx.response.body = getFile(pathname)
  })

export default staticRouter
