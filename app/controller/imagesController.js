const imagesService = require("../service/imagesService")
const { paramsHasEmpty } = require("../../libs/utils")

module.exports = {
    uploadArticleBanner: async ctx => {
        const req = ctx.request.files
        if (paramsHasEmpty(ctx, req, ["file"])) return
        let res = await imagesService.uploadImg(req.file, ctx.origin, "article/banner")
        ctx.send(res)
    },

    uploadFriendAvatar: async ctx => {
        const req = ctx.request.files
        if (paramsHasEmpty(ctx, req, ["file"])) return
        let res = await imagesService.uploadImg(req.file, ctx.origin, "friend/avatar")
        ctx.send(res)
    },

    uploadUserAvatar: async ctx => {
        const req = ctx.request.files
        if (paramsHasEmpty(ctx, req, ["file"])) return
        let res = await imagesService.uploadImg(req.file, ctx.origin, "user/avatar")
        ctx.send(res)
    }
}