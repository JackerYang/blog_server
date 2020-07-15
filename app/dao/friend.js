const { query } = require("../../database/db")

module.exports = {
    // 获取总数
    getFriendCount: async ({ name }) => {
        let sql = `SELECT COUNT(*) count FROM friend`
        if (name) {
            sql += ` WHERE name LIKE "%${name}%"`
        }
        return await query(sql)
    },

    // 获取全部友邻
    getFriendList: async () => {
        let sql = `
            SELECT 
            id, name, introduction, avatar, url
            FROM friend
        `
        return await query(sql)
    },

    // 获取分页
    getFriendPage: async ({ page, pageSize, name }) => {
        let sql = `
            SELECT
            id, name, introduction, avatar, url, update_time, create_time 
            FROM friend 
        `
        if (name) {
            sql += ` WHERE name LIKE "%${name}%"`
        }
        sql += ` LIMIT ${pageSize * (page - 1)},${pageSize}`
        return await query(sql)
    },

    // 获取一个友邻
    getFriend: async id => {
        let sql = `
            SELECT
            id, name, introduction, avatar, url
            FROM friend WHERE id = ${id}
        `
        return await query(sql)
    },

    // 添加一个友邻
    addFriend: async ({ name, introduction, avatar, url }) => {
        let sql = `
            INSERT INTO
            friend(name, introduction, avatar, url)
            VALUES("${name}", "${introduction}", "${avatar}", "${url}")
        `
        return await query(sql)
    },

    // 修改一个友邻
    editFriend: async ({ id, name, introduction, avatar, url }) => {
        let sql = `
            UPDATE friend SET 
            name = "${name}", introduction = "${introduction}", avatar = "${avatar}", url = "${url}"
            WHERE id = ${id}
        `
        return await query(sql)
    },

    // 批量删除友邻
    delFriend: async ids => {
        let sql = `
            DELETE FROM friend
            WHERE id IN (${ids})
        `
        return await query(sql)
    }
}