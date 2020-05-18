const cors = require("./cors");
const errorHandler = require("./errorHandler");
const logger = require("./logger");

module.exports = app => {
    app.use(cors)
    app.use(errorHandler);
    app.use(logger);
};
