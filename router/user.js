const userRouter = require("koa-router")();
const user = require("../app/controller/user");

userRouter.get("/list", user.getUserList);

module.exports = userRouter.routes();
