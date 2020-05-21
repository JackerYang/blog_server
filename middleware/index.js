const cors = require("./cors");
const errorHandler = require("./errorHandler");
const logger = require("./logger");
const sendHandle = require("./sendHandler");

module.exports = app => {
    app.use(errorHandler);
    app.use(logger);
    app.use(cors);
    app.use(sendHandle);
};
