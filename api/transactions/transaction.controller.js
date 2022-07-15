const { transaction, getTransactionByUserId, getUserIDByNumber } = require('./transaction.service');

module.exports = {
    makeTransaction: (req, res) => {
        let body = req.body;
        transaction(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: 'Database connection error'
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    },

    getUserIDByNumber: (req, res) => {
        const number = req.params.number;
        getUserIDByNumber(number, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: 'User not found'
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    },

    getTransactionByUserId: (req, res) => {
        const id = req.params.id;
        getTransactionByUserId(id, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: 'User not found'
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    }
}