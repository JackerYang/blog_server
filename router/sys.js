const sysRouter = require("koa-router")()
const sysController = require("../app/controller/sysController")

sysRouter.post("/login", sysController.login)

module.exports = sysRouter.routes()