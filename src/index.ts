import Koa from 'koa'
import type { Context } from 'koa'

const PORT = 5377

const app = new Koa()

app.use(async(ctx: Context) => {
  ctx.body = 'Hello World'
})

app.listen(PORT, () => {
  console.warn(`服务启动成功: running http://127.0.0.1:${PORT}`)
})
