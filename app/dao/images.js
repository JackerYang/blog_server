const { query } = require("../../database/db")

module.exports = {
    // 上传头像
    uploadAvatar: async ({ name, url }) => {
        let sql = `
            INSERT INTO
            images(name, url)
            VALUES("${name}", "${url}")
        `
        return await query(sql)
    }
}