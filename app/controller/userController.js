const userService = require("../service/userService")
const { paramsHasEmpty } = require("../../libs/utils")

module.exports = {
    getUserPage: async ctx => {
        let req = ctx.request.query
        if (paramsHasEmpty(ctx, req, ["page", "pageSize"])) return
        let res = await userService.getUserPage(req)
        ctx.send(res)
    },

    getUser: async ctx => {
        let req = ctx.request.query
        if (paramsHasEmpty(ctx, req, ["id"])) return
        let res = await userService.getUser(req.id)
        ctx.send(res)
    },

    addUser: async ctx => {
        let req = ctx.request.body
        if (paramsHasEmpty(ctx, req, ["name", "password"])) return
        await userService.addUser(req)
        ctx.send(null)
    },

    editUser: async ctx => {
        let req = ctx.request.body
        if (paramsHasEmpty(ctx, req, ["id", "name"])) return
        await userService.editUser(req)
        ctx.send(null)
    },

    delUser: async ctx => {
        let req = ctx.request.query
        if (paramsHasEmpty(ctx, req, ["ids"])) return
        await userService.delUser(req.ids.split(","))
        ctx.send(null)
    }
}