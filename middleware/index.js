const cors = require("koa2-cors")
const errorHandler = require("./errorHandler")
const logger = require("./logger")
const sendHandle = require("./sendHandler")
const koaStatic = require("koa-static")
const koaBody = require("koa-body")
const path = require("path")

module.exports = app => {
    app.use(errorHandler)
    app.use(logger)
    app.use(cors())
    app.use(sendHandle)
    app.use(koaBody({
        multipart: true,
        formidable: {
            keepExtensions: true,
            multipart: false
        }
    }))
    app.use(koaStatic(path.join(__dirname, "../public")))
}
