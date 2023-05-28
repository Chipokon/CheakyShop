const { Router } = require('express');
const users = require('../../modules/Users/routes/users')
const router = new Router();

router.post('/registration', users.createNewUser)

module.exports = router;
