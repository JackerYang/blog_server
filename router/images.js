const imagesRouter = require("koa-router")()
const imagesController = require("../app/controller/imagesController")

imagesRouter.post("/friend/avatar/upload", imagesController.uploadFriendAvatar)
imagesRouter.post("/article/banner/upload", imagesController.uploadArticleBanner)

module.exports = imagesRouter.routes()