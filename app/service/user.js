const user = require("../dao/user");

module.exports = {
    getUserList: async () => await user.getUserList()
};
