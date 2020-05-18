const { query } = require("../../database/database");

module.exports = {
    getUserList: async () => {
        let sql = `SELECT id, username, DATE_FORMAT(create_time,'%Y-%m-%d %h:%i:%s') create_time FROM user`;
        return await query(sql);
    }
};
