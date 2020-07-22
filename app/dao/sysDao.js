const { query } = require("../../database/db")

module.exports = {
    // 用户登录
    login: async ({ name, password }) => {
        let sql = `
            SELECT
            id, name, avatar
            FROM user WHERE name = "${name}" AND password = "${password}"
        `
        return await query(sql)
    },

    // 修改密码
    updateUserPwd: async ({ id, password }) => {
        let sql = `
            UPDATE user SET 
            password = "${password}"
            WHERE id = ${id}
        `
        return await query(sql)
    }
}