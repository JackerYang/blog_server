module.exports = async (ctx, next) => {
    let { body, method, url } = ctx.request
    let reqUrl = url.split("?")[0].replace("/api", "")
    const pre = `${ctx.origin}/images`

    // 拿到数据后将图片的前缀去掉
    const delPre = [
        {
            path: "/article",
            method: "POST",
            key: "banner_img"
        },
        {
            path: "/article",
            method: "PUT",
            key: "banner_img"
        },
        {
            path: "/friend",
            method: "POST",
            key: "avatar"
        },
        {
            path: "/friend",
            method: "PUT",
            key: "avatar"
        }
    ]
    let delPreItem = delPre.find(i => i.method === method && i.path === reqUrl)
    if (delPreItem) {
        body[delPreItem.key] = body[delPreItem.key].replace(pre, "")
    }

    await next()

    // 返回数据前将图片的前缀加上
    const addPre = [
        {
            path: "/article",
            method: "GET",
            model: "object",
            key: "banner_img"
        },
        {
            path: "/article/banner/upload",
            method: "POST",
            model: "array",
            key: "url"
        },
        {
            path: "/friend/list",
            method: "GET",
            model: "array",
            key: "avatar"
        },
        {
            path: "/friend/page",
            method: "GET",
            model: "object-array",
            key: "avatar"
        },
        {
            path: "/friend",
            method: "GET",
            model: "object",
            key: "avatar"
        },
        {
            path: "/friend/avatar/upload",
            method: "POST",
            model: "array",
            key: "url"
        }
    ]
    let addPreItem = addPre.find(i => i.method === method && i.path === reqUrl)
    if (addPreItem) {
        if (addPreItem.model === "object") {
            body[addPreItem.key] = pre + body[addPreItem.key]
        } else if (addPreItem.model === "array") {
            body.forEach(item => {
                item[addPreItem.key] = pre + item[addPreItem.key]
            })
        } else if (addPreItem.model === "object-array") {
            body.record.forEach(item => {
                item[addPreItem.key] = pre + item[addPreItem.key]
            })
        }
    }
}