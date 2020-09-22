const userDao = require("../dao/userDao")
const { mdPwd } = require("../../libs/md5")
const { generateToken } = require("../../libs/token")

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

    delUser: async ids => {
        await userDao.delUser(ids)
    },

    login: async model => {
        model.password = mdPwd(model.password)
        let res = await userDao.login(model)
        let user = res[0]
        if (user) {
            let payload = {
                id: user.id,
                name: user.name
            }
            return generateToken(payload)
        } else {
            return null
        }
    },

    updateUserPwd: async (model, user) => {
        let [dbUser] = await userDao.getUserPwdById(user.id)
        if (dbUser.password === mdPwd(model.oldPassword)) {
            await userDao.updateUserPwd({ id: user.id, password: mdPwd(model.newPassword) })
        } else {
            return "oldPassword error"
        }
    },

    getUserInfo: async user => {
        let [dbUser] = await userDao.getUser(user.id)
        return dbUser
    }
}