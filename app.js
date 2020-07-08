const Koa = require("koa")
const middleware = require("./middleware")
const database = require("./database")
const router = require("./router")
const { SERVER_PORT } = require("./config")

const app = new Koa()

// 中间件
middleware(app)

// 数据库
database(app)

// 路由
router(app)

app.listen(SERVER_PORT, () => {
    console.log(`server run at localhost:${SERVER_PORT}`)
})
