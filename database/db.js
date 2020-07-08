const mysql = require("mysql");
const co = require("co-mysql");
const { DATABASE } = require("../config");

let connect = mysql.createPool(DATABASE);

module.exports = co(connect);
