const imagesRouter = require("koa-router")()
const images = require("../app/controller/images")

imagesRouter.post("/avatar", images.uploadAvatar)
imagesRouter.post("/article", images.uploadArticleImg)

module.exports = imagesRouter.routes()