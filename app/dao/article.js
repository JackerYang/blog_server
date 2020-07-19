const { query } = require("../../database/db")

module.exports = {
    // 获取总数
    getArticleCount: async ({ title }) => {
        let sql = `SELECT COUNT(*) count FROM article`
        if (title) {
            sql += ` WHERE title LIKE "%${title}%"`
        }
        return await query(sql)
    },

    // 获取分页
    getArticlePage: async ({ page, pageSize, title }) => {
        let sql = `
            SELECT
            a.id, a.title, a.comment_count, a.view_count, a.like_count, a.update_time, a.create_time, u.name author
            FROM article a
            JOIN user u ON a.user_id = u.id
        `
        if (title) {
            sql += ` WHERE a.title LIKE "%${title}%"`
        }
        sql += ` LIMIT ${pageSize * (page - 1)},${pageSize}`
        return await query(sql)
    },

    // 获取一篇文章
    getArticle: async id => {
        let sql = `
            SELECT
            id, banner_img, title, \`desc\`, content
            FROM article
            WHERE id = ${id}
        `
        return await query(sql)
    },

    // 添加一篇文章
    addArticle: async ({ banner_img, title, desc, content }) => {
        let sql = `
            INSERT INTO
            article(banner_img, title, \`desc\`, content, user_id)
            VALUES("${banner_img}", "${title}", "${desc}", "${content}", 1)
        `
        let data = await query(sql)
        return data.insertId
    },

    // 修改一篇文章
    editArticle: async ({ id, banner_img, title, desc, content }) => {
        let sql = `
            UPDATE article SET
            banner_img = "${banner_img}", title = "${title}", \`desc\` = "${desc}", content = "${content}"
            WHERE id = ${id}
        `
        return await query(sql)
    },

    // 批量删除文章
    delArticle: async ids => {
        let sql = `
            DELETE FROM article
            WHERE id IN (${ids})
        `
        return await query(sql)
    },

    // 根据文章id批量删除文章和分类对应关系
    delArticleCategory: async ids => {
        let sql = `
            DELETE FROM article_category
            WHERE article_id IN (${ids})
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
    }
}