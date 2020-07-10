const images = require("../dao/images")
const { uploadHandler } = require("../../libs/utils")

module.exports = {
    uploadAvatar: async (avatar, localIP) => {
        let { name, path } = uploadHandler(avatar, "images/avatar")
        await images.uploadAvatar({ name, url: path })
        return [{ name, url: localIP + path }]
    }
}