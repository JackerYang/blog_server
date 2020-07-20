const errorHandler = require("./errorHandler")
const logger = require("./logger")
const cors = require("./cors")
const sendHandle = require("./sendHandler")
const koaBody = require("./koaBody")
const koaStatic = require("./koaStatic")
const imgPre = require("./imgPre")

module.exports = app => {
    app.use(errorHandler)
    app.use(logger)
    app.use(cors)
    app.use(sendHandle)
    app.use(koaBody)
    app.use(koaStatic)
    app.use(imgPre)
}
