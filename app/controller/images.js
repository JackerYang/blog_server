const images = require("../service/images")
const { paramsHasEmpty } = require("../../libs/utils")

module.exports = {
    uploadAvatar: async ctx => {
        const req = ctx.request.files
        if (paramsHasEmpty(ctx, req, ["file"])) return
        let res = await images.uploadAvatar(req.file, ctx.origin)
        ctx.send(res)
    }
}