//login
const express = require('express')
const userCtrls = require('../controller/user')
const router = express.Router();

const db = require('../../db')

router.post('/login', userCtrls.userLogin)

module.exports = router;