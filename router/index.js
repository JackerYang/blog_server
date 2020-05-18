const router = require("koa-router")();
const userRoutes = require("./user");

// 前缀
router.prefix("/api");

// 用户路由
router.use("/user", userRoutes);

module.exports = app => app.use(router.routes());
