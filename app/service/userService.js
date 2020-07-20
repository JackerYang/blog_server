const userDao = require("../dao/userDao")
const { mdPwd } = require("../../libs/utils")

module.exports = {
    getUserPage: async params => {
        let record = await userDao.getUserPage(params)
        let total = await userDao.getUserCount(params)
        return {
            record,
            total: total[0]["count"]
        }
    },

    getUser: async id => {
        let record = await userDao.getUser(id)
        return record[0]
    },

    addUser: async model => {
        model.password = mdPwd(model.password)
        await userDao.addUser(model)
    },

    editUser: async model => await userDao.editUser(model),

    delUser: async ids => await userDao.delUser(ids)
}