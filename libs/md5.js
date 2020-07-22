const md = require("md5")
const { PWD_SALT } = require("../config")

module.exports = {
    // md5加密
    mdPwd: str => md(str + PWD_SALT)
}