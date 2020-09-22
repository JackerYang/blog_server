const messageService = require("../service/messageService")
const { paramsHasEmpty } = require("../../libs/utils")

module.exports = {
    getMessagePage: async ctx => {
        let req = ctx.request.query
        if (paramsHasEmpty(ctx, req, ["page", "pageSize"])) return
        let res = await messageService.getMessagePage(req)
        ctx.send(res)
    },

    getMessage: async ctx => {
        let req = ctx.request.query
        if (paramsHasEmpty(ctx, req, ["id"])) return
        let res = await messageService.getMessage(req.id)
        ctx.send(res)
    },

    addMessage: async ctx => {
        let req = ctx.request.body
        if (paramsHasEmpty(ctx, req, ["user_id", "content"])) return
        await messageService.addMessage(req)
        ctx.send(null)
    },

    editMessage: async ctx => {
        let req = ctx.request.body
        if (paramsHasEmpty(ctx, req, ["id", "content"])) return
        await messageService.editMessage(req)
        ctx.send(null)
    },

    delMessage: async ctx => {
        let req = ctx.request.query
        if (paramsHasEmpty(ctx, req, ["ids"])) return
        await messageService.delMessage(req.ids.split(","))
        ctx.send(null)
    }
}