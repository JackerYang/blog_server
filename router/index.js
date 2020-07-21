const router = require("koa-router")()
const imagesRoutes = require("./images")
const articleRoutes = require("./article")
const categoryRoutes = require("./category")
const friendRoutes = require("./friend")
const userRoutes = require("./user")

// 前缀
router.prefix("/api")

// 图片
router.use("/images", imagesRoutes)

// 文章
router.use("/article", articleRoutes)
// 分类
router.use("/category", categoryRoutes)
// 用户
router.use("/user", userRoutes)
// 友邻
router.use("/friend", friendRoutes)

module.exports = app => app.use(router.routes())
