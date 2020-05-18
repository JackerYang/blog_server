const logger = require("koa-logger");
const Moment = require("moment");

module.exports = logger(str => {
    let dateTime = Moment().format("YYYY-MM-DD HH:mm:ss");
    let timeStamp = Moment().format("x").slice(-3);
    console.log(dateTime + "." + timeStamp + str);
});
