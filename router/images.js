const imagesRouter = require("koa-router")()
const images = require("../app/controller/images")

imagesRouter.post("/avatar", images.uploadAvatar)

module.exports = imagesRouter.routes()