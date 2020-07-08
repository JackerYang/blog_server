module.exports = async (ctx, next) => {
    try {
        await next()
    } catch (err) {
        console.log(err)
        ctx.err(400, "请求出错，请联系管理员！")
    }
}
