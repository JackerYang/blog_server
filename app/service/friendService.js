const friendDao = require("../dao/friendDao")

module.exports = {
    getFriendList: async () => await friendDao.getFriendList(),

    getFriendPage: async params => {
        let record = await friendDao.getFriendPage(params)
        let total = await friendDao.getFriendCount(params)
        return {
            record,
            total: total[0]["count"]
        }
    },

    getFriend: async id => {
        let record = await friendDao.getFriend(id)
        return record[0]
    },

    addFriend: async model => await friendDao.addFriend(model),

    editFriend: async model => await friendDao.editFriend(model),

    delFriend: async ids => await friendDao.delFriend(ids)
}