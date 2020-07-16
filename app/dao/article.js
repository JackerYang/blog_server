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
            id, thumbnail, title, \`desc\`, content
            FROM article
            WHERE id = ${id}
        `
        return await query(sql)
    },

    // 添加一篇文章
    addArticle: async ({ thumbnail, title, desc, content }) => {
        let sql = `
            INSERT INTO
            article(thumbnail, title, \`desc\`, content, user_id)
            VALUES("${thumbnail}", "${title}", "${desc}", "${content}", 1)
        `
        let data = await query(sql)
        return data.insertId
    },
    //
    // // 修改一篇文章
    // editArticle: async ({ id, title, remark }) => {
    //     let sql = `
    //         UPDATE article SET
    //         title = "${title}", remark = "${remark}"
    //         WHERE id = ${id}
    //     `
    //     return await query(sql)
    // },
    //
    // // 批量删除文章
    // delArticle: async ids => {
    //     let sql = `
    //         DELETE FROM article
    //         WHERE id IN (${ids})
    //     `
    //     return await query(sql)
    // }
}