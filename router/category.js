const categoryRouter = require("koa-router")()
const category = require("../app/controller/category")

categoryRouter.get("/list", category.getCategoryList)
categoryRouter.get("/page", category.getCategoryPage)
categoryRouter.get("/", category.getCategory)
categoryRouter.post("/", category.addCategory)
categoryRouter.put("/", category.editCategory)
categoryRouter.delete("/", category.delCategory)

module.exports = categoryRouter.routes()