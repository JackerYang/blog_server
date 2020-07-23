const sysDao = require("../dao/sysDao")
const userDao = require("../dao/userDao")
const { mdPwd } = require("../../libs/md5")
const { generateToken, parseToken } = require("../../libs/token")

module.exports = {
    login: async model => {
        model.password = mdPwd(model.password)
        let res = await sysDao.login(model)
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

    updateUserPwd: async (model, token) => {
        let user = parseToken(token)
        let [dbUser] = await userDao.getUserPwdById(user.id)
        if (dbUser.password === mdPwd(model.oldPassword)) {
            await sysDao.updateUserPwd({ id: user.id, password: mdPwd(model.newPassword) })
        } else {
            return "oldPassword error"
        }
    },

    getUserInfo: async token => {
        let user = parseToken(token)
        let [dbUser] = await userDao.getUser(user.id)
        return dbUser
    }
}