const category = require("../dao/category")

module.exports = {
    getCategoryList: async () => await category.getCategoryList(),

    getCategoryPage: async params => {
        let record = await category.getCategoryPage(params)
        let total = await category.getCategoryCount()
        return { record, total: total[0]["COUNT(*)"] }
    },

    getCategory: async id => {
        let record = await category.getCategory(id)
        return record[0]
    },

    addCategory: async model => await category.addCategory(model),

    editCategory: async model => await category.editCategory(model),

    delCategory: async ids => await category.delCategory(ids)
}