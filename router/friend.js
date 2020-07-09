const friendRouter = require("koa-router")()
const friend = require("../app/controller/friend")

friendRouter.get("/list", friend.getFriendList)
friendRouter.get("/page", friend.getFriendPage)
friendRouter.get("/", friend.getFriend)
friendRouter.post("/", friend.addFriend)
friendRouter.put("/", friend.editFriend)
friendRouter.delete("/", friend.delFriend)

module.exports = friendRouter.routes()