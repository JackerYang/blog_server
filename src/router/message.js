const messageRouter = require("koa-router")()
const messageController = require("../controller/messageController")

messageRouter.get("/page", messageController.getMessagePage)
messageRouter.get("/", messageController.getMessage)
messageRouter.post("/", messageController.addMessage)
messageRouter.put("/", messageController.editMessage)
messageRouter.delete("/", messageController.delMessage)

module.exports = messageRouter.routes()
