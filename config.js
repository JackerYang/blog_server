module.exports = {
    // 服务端口
    SERVER_PORT: 8000,

    // 数据库
    DATABASE: {
        host: "localhost",
        user: "root",
        password: "123456",
        database: "blog",
        timezone: "08:00"
    },

    // 用户密码前缀
    PWD_SALT: "GnHj4d8a_gsh?sD:L$OvPqU@fs",

    // token加密
    TOKEN_SALT: "ysw_token_secret"
}