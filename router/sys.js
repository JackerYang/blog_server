const sysRouter = require("koa-router")()
const sysController = require("../app/controller/sysController")

sysRouter.post("/login", sysController.login)
sysRouter.put("/update/password", sysController.updateUserPwd)
sysRouter.get("/user/info", sysController.getUserInfo)

module.exports = sysRouter.routes()