const userDao = require("../dao/userDao")
const { mdPwd } = require("../../libs/md5")

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
        let res = await this.nameHasExist(model.name)
        if (res) {
            return "nameHasExist"
        } else {
            model.password = mdPwd(model.password)
            await userDao.addUser(model)
        }
    },

    editUser: async model => {
        let res = await this.nameHasExist(model.name)
        if (res) {
            return "nameHasExist"
        } else {
            await userDao.editUser(model)
        }
    },

    delUser: async ids => await userDao.delUser(ids),

    nameHasExist: async name => {
        let data = await userDao.getUserByName(name)
        return data.length !== 0
    }
}