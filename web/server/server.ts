import { Application, Router, ServerRequest, Status } from 'oak'

import handleWebSocket from '~/api/ws/handleWebSocket.ts'
// import getMoves from '~/api/getMoves.ts'

const port = +(Deno.env.get('PORT') ?? 8080)

const router = new Router()

router
  .get('/', (context) => {
    context.response.body = "Hello world!"
  })
  .get('/api/ws', async (context) => {
    handleWebSocket(context.request.originalRequest as ServerRequest)
  })
  .get('/api/getMoves', async (context) => {
    // handle
    context.response.body = "asdfasdfasdf"
  })

const app = new Application()

app.use(router.routes())
app.use(router.allowedMethods())

// 404
app.use(async (context) => {
  context.response.status = Status.NotFound
  context.response.body = `"${context.request.url}" not found`
})

console.log(`Listening on port ${port}...`)

await app.listen({ port })
