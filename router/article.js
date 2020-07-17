const articleRouter = require("koa-router")()
const article = require("../app/controller/article")

articleRouter.get("/page", article.getArticlePage)
articleRouter.get("/", article.getArticle)
articleRouter.post("/", article.addArticle)
articleRouter.put("/", article.editArticle)
articleRouter.delete("/", article.delArticle)

module.exports = articleRouter.routes()