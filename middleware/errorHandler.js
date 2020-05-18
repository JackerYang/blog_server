module.exports = async (ctx, next) => {
    try {
        await next();
    } catch (err) {
        console.log("捕获到错误");
        return ctx.body = err.msg;
    }
};
