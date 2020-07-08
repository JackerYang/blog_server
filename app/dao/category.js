const { query } = require("../../database/db")

module.exports = {
    // 获取总数
    getCategoryCount: async () => {
        let sql = `SELECT COUNT(*) FROM article_category`
        return await query(sql)
    },

    // 获取全部分类
    getCategoryList: async () => {
        let sql = `
            SELECT 
            id, name, remark, update_time, create_time 
            FROM article_category
        `
        return await query(sql)
    },

    // 获取分页
    getCategoryPage: async ({ page, pageSize }) => {
        let sql = `
            SELECT
            id, name, remark, update_time, create_time
            FROM article_category LIMIT ${pageSize * (page - 1)},${pageSize}
        `
        return await query(sql)
    },

    // 获取一个分类
    getCategory: async id => {
        let sql = `
            SELECT
            id, name, remark
            FROM article_category WHERE id = ${id}
        `
        return await query(sql)
    },

    // 添加一个分类
    addCategory: async ({ name, remark }) => {
        let sql = `
            INSERT INTO
            article_category(name, remark)
            VALUES("${name}", "${remark}")
        `
        return await query(sql)
    },

    // 修改一个分类
    editCategory: async ({ id, name, remark }) => {
        let sql = `
            UPDATE article_category SET 
            name = "${name}", remark = "${remark}"
            WHERE id = ${id}
        `
        return await query(sql)
    },

    // 批量删除分类
    delCategory: async ids => {
        let sql = `
            DELETE FROM article_category
            WHERE id IN (${ids})
        `
        return await query(sql)
    }
}