const user = require("../service/user");

module.exports = {
    getUserList: async ctx => {
        let res = await user.getUserList();
        ctx.send(res);
    }
};
