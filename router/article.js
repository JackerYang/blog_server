const articleRouter = require("koa-router")()
const article = require("../app/controller/article")

articleRouter.get("/page", article.getArticlePage)
articleRouter.get("/", article.getArticle)

module.exports = articleRouter.routes()