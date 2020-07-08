const cors = require("koa2-cors")
const errorHandler = require("./errorHandler")
const logger = require("./logger")
const sendHandle = require("./sendHandler")
const bodyParser = require("koa-bodyparser")

module.exports = app => {
    app.use(errorHandler)
    app.use(logger)
    app.use(cors())
    app.use(sendHandle)
    app.use(bodyParser())
}
