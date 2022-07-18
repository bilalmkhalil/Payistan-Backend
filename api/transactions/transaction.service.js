const pool = require("../../config/database");


module.exports = {
    transaction: (data, callback) => {
        pool.query(
            `INSERT INTO transactions(tracid, userid, recvid, amount, type, date) VALUES(?, ?, ?, ?, ?, ?)`,
            [
                data.tracid,
                data.userid,
                data.recvid,
                data.amount,
                data.type,
                data.date
            ],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                callback(null, results);
            }
        )
    },
    getUserIDByNumber: (number, callback) => {
        pool.query(
            `SELECT userid FROM transactions WHERE phone = ?`,
            [number],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results[0]);
            }
        );
    },
    getTransactionByUserId: (id, callBack) => {
        pool.query(
            `SELECT tracid, userid, recvid, amount, type, date FROM transactions WHERE userid = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    updateBalance: (id, callback) => {
        pool.query(
            `UPDATE balance SET balance "?"`,
            [id, balance],
            (error, results, fields) => {
                if(error) {
                    callback(error);
                }
                return callback(null, results);
            }
        );
    }
};