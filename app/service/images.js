const images = require("../dao/images")
const { uploadImgHandler, addLocalIP } = require("../../libs/utils")

module.exports = {
    uploadImg: async (img, localIP, type) => {
        let { name, path } = uploadImgHandler(img, type)
        await images.uploadImg({ name, url: path })
        return [addLocalIP({ name, url: path }, "url", localIP)]
    }
}