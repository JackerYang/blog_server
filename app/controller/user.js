const user = require("../service/user");
const { r } = require("../../libs/utils");

module.exports = {
    getUserList: async ctx => {
        let res = await user.getUserList();
        ctx.body = r(200, "查询成功！", res);
    }
};
