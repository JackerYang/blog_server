const router = require("koa-router")()
const imagesRoutes = require("./images")
const categoryRoutes = require("./category")
const friendRoutes = require("./friend")

// 前缀
router.prefix("/api")

// 图片
router.use("/images", imagesRoutes)

// 分类
router.use("/category", categoryRoutes)
// 友邻
router.use("/friend", friendRoutes)

module.exports = app => app.use(router.routes())
