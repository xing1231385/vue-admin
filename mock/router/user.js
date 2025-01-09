const express = require('express');
const router = express.Router();
const userHandler = require('../router-handler/user.js');

router.post('/login',userHandler.login)
router.post('/reigister',userHandler.reigister)

module.exports = router;