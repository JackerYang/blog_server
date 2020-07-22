const koaJwt = require("koa-jwt")
const { TOKEN_SALT } = require("../config")

module.exports = koaJwt({
    secret: TOKEN_SALT
}).unless({
    path: [/\/login/]
})