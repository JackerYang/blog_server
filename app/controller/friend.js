const friend = require("../service/friend")
const { paramsHasEmpty } = require("../../libs/utils")

module.exports = {
    getFriendList: async ctx => {
        let res = await friend.getFriendList(ctx.origin)
        ctx.send(res)
    },

    getFriendPage: async ctx => {
        let req = ctx.request.query
        if (paramsHasEmpty(ctx, req, ["page", "pageSize"])) return
        let res = await friend.getFriendPage(req, ctx.origin)
        ctx.send(res)
    },

    getFriend: async ctx => {
        let req = ctx.request.query
        if (paramsHasEmpty(ctx, req, ["id"])) return
        let res = await friend.getFriend(req.id, ctx.origin)
        ctx.send(res)
    },

    addFriend: async ctx => {
        let req = ctx.request.body
        if (paramsHasEmpty(ctx, req, ["name", "introduction", "avatar", "url"])) return
        await friend.addFriend(req, ctx.origin)
        ctx.send(null)
    },

    editFriend: async ctx => {
        let req = ctx.request.body
        if (paramsHasEmpty(ctx, req, ["id", "name", "introduction", "avatar", "url"])) return
        await friend.editFriend(req, ctx.origin)
        ctx.send(null)
    },

    delFriend: async ctx => {
        let req = ctx.request.query
        if (paramsHasEmpty(ctx, req, ["ids"])) return
        await friend.delFriend(req.ids.split(","))
        ctx.send(null)
    }
}