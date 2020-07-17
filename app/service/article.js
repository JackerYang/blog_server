const article = require("../dao/article")
const { addLocalIP, delLocalIP } = require("../../libs/utils")

module.exports = {
    getArticlePage: async params => {
        let record = await article.getArticlePage(params)
        let total = await article.getArticleCount(params)
        return { record, total: total[0]["count"] }
    },

    getArticle: async (id, localIP) => {
        let record = await article.getArticle(id)
        let categories = await article.getCategoryByArticleId(id)
        return { ...addLocalIP(record[0], "thumbnail", localIP), categories: categories.map(c => c.category_id) }
    },

    addArticle: async (model, localIP) => {
        let article_id = await article.addArticle(delLocalIP(model, "thumbnail", localIP))
        await article.addCategoryByArticleId(article_id, model)
    },

    editArticle: async model => {
        await article.editArticle(model)
        await article.delArticleCategory([model.id])
        await article.addCategoryByArticleId(model.id, model)
    },

    delArticle: async ids => {
        await article.delArticle(ids)
        await article.delArticleCategory(ids)
    }
}