const { query } = require("../../database/db")

module.exports = {
    // 获取总数
    getUserCount: async ({ name }) => {
        let sql = `SELECT COUNT(*) count FROM user`
        if (name) {
            sql += ` WHERE name LIKE "%${name}%"`
        }
        return await query(sql)
    },

    // 获取分页
    getUserPage: async ({ page, pageSize, name }) => {
        let sql = `
            SELECT
            id, name, avatar, update_time, create_time
            FROM user 
        `
        if (name) {
            sql += ` WHERE name LIKE "%${name}%"`
        }
        sql += ` LIMIT ${pageSize * (page - 1)},${pageSize}`
        return await query(sql)
    },

    // 获取一个用户
    getUser: async id => {
        let sql = `
            SELECT
            id, name, avatar
            FROM user WHERE id = ${id}
        `
        return await query(sql)
    },

    // 检查用户名是否已存在
    getUserByName: async (name, id) => {
        let sql = `
            SELECT
            id
            FROM user WHERE name = "${name}"
        `
        if (id) {
            sql += ` AND id <> ${id}`
        }
        return await query(sql)
    },

    // 添加一个用户
    addUser: async ({ avatar, name, password }) => {
        let sql = `
            INSERT INTO
            user(avatar, name, password)
            VALUES("${avatar}", "${name}", "${password}")
        `
        return await query(sql)
    },

    // 修改一个用户
    editUser: async ({ id, avatar, name }) => {
        let sql = `
            UPDATE user SET 
            avatar = "${avatar}", name = "${name}"
            WHERE id = ${id}
        `
        return await query(sql)
    },

    // 批量删除用户
    delUser: async ids => {
        let sql = `
            DELETE FROM user
            WHERE id IN (${ids})
        `
        return await query(sql)
    },

    // 根据用户名id查询密码
    getUserPwdById: async id => {
        let sql = `
            SELECT 
            password
            FROM user WHERE id = ${id}
        `
        return await query(sql)
    },

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