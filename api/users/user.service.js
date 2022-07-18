const pool = require("../../config/database");


module.exports = {
    create: (data, callback) => {
        pool.query(
            `INSERT INTO users(userid, name, email, password) VALUES(?, ?, ?, ?)`,
            [
                data.userid,
                data.name,
                data.email,
                data.password
            ],
            (error, results, fields) => {
                console.log(typeof callback);
                if (error) {
                    return callback(error);
                }
                callback(null, results);
            }
        );
    },
    getUserByUserEmail: (email, callBack) => {
        pool.query(
            `SELECT * FROM users WHERE email = ?`,
            [email],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },

    getUserByID: (id, callBack) => {
        pool.query(
            `SELECT * FROM users WHERE userID = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    getUsers: callBack => {
        pool.query(
            `SELECT * FROM users`,
            [],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getLastUserID: callBack => {
        pool.query(
            `SELECT userID FROM users ORDER BY userID DESC LIMIT 1`,
            [],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    }
}
