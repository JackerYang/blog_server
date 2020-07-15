const friend = require("../dao/friend")
const { delLocalIP, addLocalIP } = require("../../libs/utils")

module.exports = {
    getFriendList: async localIP => {
        let record = await friend.getFriendList()
        return record.map(r => addLocalIP(r, "avatar", localIP))
    },

    getFriendPage: async (params, localIP) => {
        let record = await friend.getFriendPage(params)
        let total = await friend.getFriendCount(params)
        return {
            record: record.map(r => addLocalIP(r, "avatar", localIP)),
            total: total[0]["count"]
        }
    },

    getFriend: async (id, localIP) => {
        let record = await friend.getFriend(id)
        return addLocalIP(record[0], "avatar", localIP)
    },

    addFriend: async (model, localIP) => await friend.addFriend(delLocalIP(model, "avatar", localIP)),

    editFriend: async (model, localIP) => await friend.editFriend(delLocalIP(model, "avatar", localIP)),

    delFriend: async ids => await friend.delFriend(ids)
}