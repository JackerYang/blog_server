const friendRouter = require("koa-router")()
const friendController = require("../app/controller/friendController")

friendRouter.get("/list", friendController.getFriendList)
friendRouter.get("/page", friendController.getFriendPage)
friendRouter.get("/", friendController.getFriend)
friendRouter.post("/", friendController.addFriend)
friendRouter.put("/", friendController.editFriend)
friendRouter.delete("/", friendController.delFriend)

module.exports = friendRouter.routes()