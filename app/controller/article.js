const article = require("../service/article")
const { paramsHasEmpty } = require("../../libs/utils")

module.exports = {
    getArticlePage: async ctx => {
        let req = ctx.request.query
        if (paramsHasEmpty(ctx, req, ["page", "pageSize"])) return
        let res = await article.getArticlePage(req)
        ctx.send(res)
    },

    getArticle: async ctx => {
        let req = ctx.request.query
        if (paramsHasEmpty(ctx, req, ["id"])) return
        let res = await article.getArticle(req.id)
        ctx.send(res)
    },
    //
    // addArticle: async ctx => {
    //     let req = ctx.request.body
    //     if (paramsHasEmpty(ctx, req, ["name"])) return
    //     await article.addArticle(req)
    //     ctx.send(null)
    // },
    //
    // editArticle: async ctx => {
    //     let req = ctx.request.body
    //     if (paramsHasEmpty(ctx, req, ["id", "name"])) return
    //     await article.editArticle(req)
    //     ctx.send(null)
    // },
    //
    // delArticle: async ctx => {
    //     let req = ctx.request.query
    //     if (paramsHasEmpty(ctx, req, ["ids"])) return
    //     await article.delArticle(req.ids.split(","))
    //     ctx.send(null)
    // }
}