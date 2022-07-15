const { createUser, getUsers, getUserByID, login } = require("./user.controller");
const router = require("express").Router();
// const { checkToken } = require("../../auth/token_validation");

router.post('/', createUser);
router.get('/', getUsers);
router.get('/:id', getUserByID);
router.post('/login', login);

module.exports = router;