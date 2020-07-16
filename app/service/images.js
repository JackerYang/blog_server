const images = require("../dao/images")
const { uploadHandler } = require("../../libs/utils")

module.exports = {
    uploadImg: async (img, localIP, type) => {
        let { name, path } = uploadHandler(img, `images/${type}`)
        await images.uploadImg({ name, url: path })
        return [{ name, url: localIP + path }]
    }
}