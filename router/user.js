const router = require("koa-router")();
const user = require("../app/controller/user");

router.get("/list", user.getUserList);

module.exports = router.routes();
