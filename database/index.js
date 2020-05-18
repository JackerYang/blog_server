const db = require("./database");

module.exports = app => {
    app.context.db = db;
};
