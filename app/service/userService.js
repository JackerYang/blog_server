const userDao = require("../dao/userDao")
const { mdPwd } = require("../../libs/md5")

const nameHasExist = async (name, id) => {
    let data = await userDao.getUserByName(name, id)
    return data.length !== 0
}

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
        let res = await nameHasExist(model.name)
        if (res) {
            return "nameHasExist"
        } else {
            model.password = mdPwd(model.password)
            await userDao.addUser(model)
        }
    },

    editUser: async model => {
        let res = await nameHasExist(model.name, model.id)
        if (res) {
            return "nameHasExist"
        } else {
            await userDao.editUser(model)
        }
    },

    delUser: async ids => await userDao.delUser(ids)
}