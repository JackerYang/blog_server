const images = require("../service/images")
const { paramsHasEmpty } = require("../../libs/utils")

module.exports = {
    uploadFriendAvatar: async ctx => {
        const req = ctx.request.files
        if (paramsHasEmpty(ctx, req, ["file"])) return
        let res = await images.uploadImg(req.file, ctx.origin, "friend/avatar")
        ctx.send(res)
    },

    uploadArticleBanner: async ctx => {
        const req = ctx.request.files
        if (paramsHasEmpty(ctx, req, ["file"])) return
        let res = await images.uploadImg(req.file, ctx.origin, "article/banner")
        ctx.send(res)
    }
}