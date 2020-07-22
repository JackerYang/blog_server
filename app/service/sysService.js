const userDao = require("../dao/sysDao")
const { mdPwd } = require("../../libs/md5")
const { generateToken } = require("../../libs/token")

module.exports = {
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
    }
}