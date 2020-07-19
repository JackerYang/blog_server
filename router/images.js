const imagesRouter = require("koa-router")()
const images = require("../app/controller/images")

imagesRouter.post("/friend/avatar/upload", images.uploadFriendAvatar)
imagesRouter.post("/article/banner/upload", images.uploadArticleBanner)

module.exports = imagesRouter.routes()