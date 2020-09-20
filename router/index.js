const router = require("koa-router")()
const imagesRoutes = require("./images")
const articleRoutes = require("./article")
const categoryRoutes = require("./category")
const friendRoutes = require("./friend")
const userRoutes = require("./user")

// 前缀
router.prefix("/api")

/**
 * ========================== 后台接口开始 ==========================
 */
// 图片
router.use("/images", imagesRoutes)
// 文章
router.use("/article", articleRoutes)
// 分类
router.use("/category", categoryRoutes)
// 友邻
router.use("/friend", friendRoutes)
// 用户
router.use("/user", userRoutes)
/**
 * ========================== 后台接口结束 ==========================
 */

module.exports = app => app.use(router.routes())
