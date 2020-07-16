const { query } = require("../../database/db")

module.exports = {
    // 获取总数
    getCategoryCount: async ({ name }) => {
        let sql = `SELECT COUNT(*) count FROM category`
        if (name) {
            sql += ` WHERE name LIKE "%${name}%"`
        }
        return await query(sql)
    },

    // 获取全部分类
    getCategoryList: async () => {
        let sql = `
            SELECT 
            id, name
            FROM category
        `
        return await query(sql)
    },

    // 获取分页
    getCategoryPage: async ({ page, pageSize, name }) => {
        let sql = `
            SELECT
            id, name, remark, update_time, create_time
            FROM category 
        `
        if (name) {
            sql += ` WHERE name LIKE "%${name}%"`
        }
        sql += ` LIMIT ${pageSize * (page - 1)},${pageSize}`
        return await query(sql)
    },

    // 获取一个分类
    getCategory: async id => {
        let sql = `
            SELECT
            id, name, remark
            FROM category WHERE id = ${id}
        `
        return await query(sql)
    },

    // 添加一个分类
    addCategory: async ({ name, remark }) => {
        let sql = `
            INSERT INTO
            category(name, remark)
            VALUES("${name}", "${remark}")
        `
        return await query(sql)
    },

    // 修改一个分类
    editCategory: async ({ id, name, remark }) => {
        let sql = `
            UPDATE category SET 
            name = "${name}", remark = "${remark}"
            WHERE id = ${id}
        `
        return await query(sql)
    },

    // 批量删除分类
    delCategory: async ids => {
        let sql = `
            DELETE FROM category
            WHERE id IN (${ids})
        `
        return await query(sql)
    },

    // 根据文章id获取分类数据
    getCategoryByArticleId: async article_id => {
        let sql = `
            SELECT 
            category_id
            FROM article_category
            WHERE article_id = ${article_id}
        `
        return await query(sql)
    },
    // 根据文章id添加分类数据
    addCategoryByArticleId: async (article_id, { categories }) => {
        let sql = `
            INSERT INTO
            article_category(article_id, category_id)
            VALUES
        `
        categories.forEach((category_id, index) => {
            sql += `("${article_id}", "${category_id}")`
            if (categories.length - 1 !== index) {
                sql += `,`
            }
        })
        return await query(sql)
    }
}