const router = require("koa-router")()
const categoryRoutes = require("./category")

// 前缀
router.prefix("/api")

// 分类路由
router.use("/category", categoryRoutes)

module.exports = app => app.use(router.routes())
