const article = require("../dao/article")
const category = require("../dao/category")
const { delLocalIP } = require("../../libs/utils")

module.exports = {
    getArticlePage: async params => {
        let record = await article.getArticlePage(params)
        let total = await article.getArticleCount(params)
        return { record, total: total[0]["count"] }
    },

    getArticle: async id => {
        let record = await article.getArticle(id)
        let categories = await category.getCategoryByArticleId(id)
        return { ...record[0], categories: categories.map(c => c.category_id) }
    },

    addArticle: async (model, localIP) => {
        let article_id = await article.addArticle(delLocalIP(model, "thumbnail", localIP))
        await category.addCategoryByArticleId(article_id, model)
    },
    //
    // editArticle: async model => await article.editArticle(model),
    //
    // delArticle: async ids => await article.delArticle(ids)
}