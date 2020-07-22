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
    }
}