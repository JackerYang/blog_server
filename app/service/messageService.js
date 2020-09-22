const messageDao = require("../dao/messageDao")

module.exports = {
    getMessagePage: async params => {
        let record = await messageDao.getMessagePage(params)
        let total = await messageDao.getMessageCount(params)
        return {
            record,
            total: total[0]["count"]
        }
    },

    getMessage: async id => {
        let record = await messageDao.getMessage(id)
        return record[0]
    },

    addMessage: async model => {
        await messageDao.addMessage(model)

    },

    editMessage: async model => {
        await messageDao.editMessage(model)
    },

    delMessage: async ids => {
        await messageDao.delMessage(ids)
    }
}