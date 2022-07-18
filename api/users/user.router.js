const { createUser, getUsers, getUserByID, login, getLastUserID } = require("./user.controller");
const router = require("express").Router();
// const { checkToken } = require("../../auth/token_validation");

router.post('/', createUser);
// router.get('/', getUsers);
router.get('/getuser/:id', getUserByID);
router.get('/getlastuser', getLastUserID);
router.post('/login', login);

module.exports = router;