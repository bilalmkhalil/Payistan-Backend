const { makeTransaction, getTransactionByUserId, getUserIDByNumber } = require('./transaction.controller');
const router = require('express').Router();

router.post('/', makeTransaction);
// router.get('/:number', getUserIDByNumber);
router.get('/:id', getTransactionByUserId);

module.exports = router;

