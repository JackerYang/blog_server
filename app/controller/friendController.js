const friendService = require("../service/friendService")
const { paramsHasEmpty } = require("../../libs/utils")

module.exports = {
    getFriendList: async ctx => {
        let res = await friendService.getFriendList(ctx.origin)
        ctx.send(res)
    },

    getFriendPage: async ctx => {
        let req = ctx.request.query
        if (paramsHasEmpty(ctx, req, ["page", "pageSize"])) return
        let res = await friendService.getFriendPage(req, ctx.origin)
        ctx.send(res)
    },

    getFriend: async ctx => {
        let req = ctx.request.query
        if (paramsHasEmpty(ctx, req, ["id"])) return
        let res = await friendService.getFriend(req.id, ctx.origin)
        ctx.send(res)
    },

    addFriend: async ctx => {
        let req = ctx.request.body
        if (paramsHasEmpty(ctx, req, ["name", "introduction", "avatar", "url"])) return
        await friendService.addFriend(req, ctx.origin)
        ctx.send(null)
    },

    editFriend: async ctx => {
        let req = ctx.request.body
        if (paramsHasEmpty(ctx, req, ["id", "name", "introduction", "avatar", "url"])) return
        await friendService.editFriend(req, ctx.origin)
        ctx.send(null)
    },

    delFriend: async ctx => {
        let req = ctx.request.query
        if (paramsHasEmpty(ctx, req, ["ids"])) return
        await friendService.delFriend(req.ids.split(","))
        ctx.send(null)
    }
}