const sysService = require("../service/sysService")
const { paramsHasEmpty } = require("../../libs/utils")

module.exports = {
    login: async ctx => {
        let req = ctx.request.body
        if (paramsHasEmpty(ctx, req, ["name", "password"])) return
        let token = await sysService.login(req)
        if (token) {
            ctx.send({ token })
        } else {
            ctx.err(400, "用户名或密码不正确")
        }
    },

    updateUserPwd: async ctx => {
        let token = ctx.headers.authorization
        let req = ctx.request.body
        if (paramsHasEmpty(ctx, req, ["oldPassword", "newPassword"])) return
        let res = await sysService.updateUserPwd(req, token)
        if (res === "oldPassword error") {
            ctx.err(400, "旧密码错误")
        } else {
            ctx.send(null)
        }
    },

    getUserInfo: async ctx => {
        let token = ctx.headers.authorization
        if (paramsHasEmpty(ctx, ctx.headers, ["authorization"])) return
        let res = await sysService.getUserInfo(token)
        ctx.send(res)
    }
}