const userRouter = require("koa-router")()
const userController = require("../app/controller/userController")

userRouter.get("/page", userController.getUserPage)

module.exports = userRouter.routes()