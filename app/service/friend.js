const friend = require("../dao/friend")

module.exports = {
    getFriendList: async () => await friend.getFriendList(),

    getFriendPage: async params => {
        let record = await friend.getFriendPage(params)
        let total = await friend.getFriendCount(params)
        return { record, total: total[0]["COUNT(*)"] }
    },

    getFriend: async id => {
        let record = await friend.getFriend(id)
        return record[0]
    },

    addFriend: async model => await friend.addFriend(model),

    editFriend: async model => await friend.editFriend(model),

    delFriend: async ids => await friend.delFriend(ids)
}