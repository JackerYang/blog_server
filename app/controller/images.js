const images = require("../service/images")
const { paramsHasEmpty } = require("../../libs/utils")

module.exports = {
    uploadAvatar: async ctx => {
        const req = ctx.request.files
        if (paramsHasEmpty(ctx, req, ["file"])) return
        let res = await images.uploadImg(req.file, ctx.origin, "avatar")
        ctx.send(res)
    },

    uploadArticleImg: async ctx => {
        const req = ctx.request.files
        if (paramsHasEmpty(ctx, req, ["file"])) return
        let res = await images.uploadImg(req.file, ctx.origin, "article")
        ctx.send(res)
    }
}