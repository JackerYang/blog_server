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
        let res = await userService.addUser(req)
        if (res === "nameHasExist") {
            ctx.err(400, "用户名已存在")
        } else {
            ctx.send(null)
        }
    },

    editUser: async ctx => {
        let req = ctx.request.body
        if (paramsHasEmpty(ctx, req, ["id", "name"])) return
        let res = await userService.editUser(req)
        if (res === "nameHasExist") {
            ctx.err(400, "用户名已存在")
        } else {
            ctx.send(null)
        }
    },

    delUser: async ctx => {
        let req = ctx.request.query
        if (paramsHasEmpty(ctx, req, ["ids"])) return
        await userService.delUser(req.ids.split(","))
        ctx.send(null)
    },

    login: async ctx => {
        let req = ctx.request.body
        if (paramsHasEmpty(ctx, req, ["name", "password"])) return
        let token = await userService.login(req)
        if (token) {
            ctx.send({ token })
        } else {
            ctx.err(400, "用户名或密码不正确")
        }
    },

    updateUserPwd: async ctx => {
        let req = ctx.request.body
        if (paramsHasEmpty(ctx, req, ["oldPassword", "newPassword"])) return
        let res = await userService.updateUserPwd(req, ctx.state.user)
        if (res === "oldPassword error") {
            ctx.err(400, "旧密码错误")
        } else {
            ctx.send(null)
        }
    },

    getUserInfo: async ctx => {
        let res = await userService.getUserInfo(ctx.state.user)
        ctx.send(res)
    }
}