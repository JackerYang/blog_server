const fs = require("fs")
const path = require("path")

module.exports = {
    // 判断参数是否为空
    paramsHasEmpty: (ctx, data, keys) => {
        let hasEmpty = false
        let len = keys.length
        for (let i = 0; i < len; i++) {
            if (!data[keys[i]] && data[keys[i]] !== 0) {
                ctx.err(400, `缺少参数：${keys[i]}`)
                hasEmpty = true
                break
            }
        }
        return hasEmpty
    },

    // 处理上传
    uploadHandler: (file, dir) => {
        const reader = fs.createReadStream(file.path)
        const fileName = file.path.split("upload_")[1]
        const filePath = `/${dir}/${fileName}`
        const _filePath = path.join(__dirname, `../public/${dir}`) + `/${fileName}`
        const upStream = fs.createWriteStream(_filePath)
        reader.pipe(upStream)
        return { name: fileName, path: filePath }
    },

    // 加上ip
    addLocalIP: (data, key, localIP) => {
        let res = { ...data }
        res[key] = localIP + data[key]
        return res
    },

    // 删除ip
    delLocalIP: (data, key, localIP) => {
        let res = { ...data }
        res[key] = data[key].replace(localIP, "")
        return res
    }
}