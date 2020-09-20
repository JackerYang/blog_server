const jwt = require("jsonwebtoken")
const { TOKEN_SALT } = require("../config")

module.exports = {
    // 生成 token
    generateToken: (payload, option = {}) => {
        return jwt.sign(payload, TOKEN_SALT, {
            expiresIn: "4h",
            ...option
        })
    }
}