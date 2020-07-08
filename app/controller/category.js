const category = require("../service/category")

module.exports = {
    getCategoryList: async ctx => {
        let res = await category.getCategoryList()
        ctx.send(res)
    },

    getCategoryPage: async ctx => {
        let req = ctx.request.query
        if (!req.page) {
            ctx.err(400, "缺少参数：page")
            return
        }
        if (!req.pageSize) {
            ctx.err(400, "缺少参数：pageSize")
            return
        }
        let res = await category.getCategoryPage(req)
        ctx.send(res)
    },

    getCategory: async ctx => {
        let req = ctx.request.query
        if (!req.id) {
            ctx.err(400, "缺少参数：id")
            return
        }
        let res = await category.getCategory(req.id)
        ctx.send(res)
    },

    addCategory: async ctx => {
        let req = ctx.request.body
        if (!req.name) {
            ctx.err(400, "缺少参数：name")
            return
        }
        await category.addCategory(req)
        ctx.send(null)
    },

    editCategory: async ctx => {
        let req = ctx.request.body
        if (!req.id) {
            ctx.err(400, "缺少参数：id")
            return
        }
        if (!req.name) {
            ctx.err(400, "缺少参数：name")
            return
        }
        await category.editCategory(req)
        ctx.send(null)
    },

    delCategory: async ctx => {
        let req = ctx.request.query
        if (!req.ids) {
            ctx.err(400, "缺少参数：ids")
            return
        }
        await category.delCategory(req.ids.split(","))
        ctx.send(null)
    }
}