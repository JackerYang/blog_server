const category = require("../service/category")
const { paramsHasEmpty } = require("../../libs/utils")

module.exports = {
    getCategoryList: async ctx => {
        let res = await category.getCategoryList()
        ctx.send(res)
    },

    getCategoryPage: async ctx => {
        let req = ctx.request.query
        if (paramsHasEmpty(ctx, req, ["page", "pageSize"])) return
        let res = await category.getCategoryPage(req)
        ctx.send(res)
    },

    getCategory: async ctx => {
        let req = ctx.request.query
        if (paramsHasEmpty(ctx, req, ["id"])) return
        let res = await category.getCategory(req.id)
        ctx.send(res)
    },

    addCategory: async ctx => {
        let req = ctx.request.body
        if (paramsHasEmpty(ctx, req, ["name"])) return
        await category.addCategory(req)
        ctx.send(null)
    },

    editCategory: async ctx => {
        let req = ctx.request.body
        if (paramsHasEmpty(ctx, req, ["id", "name"])) return
        await category.editCategory(req)
        ctx.send(null)
    },

    delCategory: async ctx => {
        let req = ctx.request.query
        if (paramsHasEmpty(ctx, req, ["ids"])) return
        await category.delCategory(req.ids.split(","))
        ctx.send(null)
    }
}