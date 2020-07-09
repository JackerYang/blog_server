module.exports = {
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
    }
}