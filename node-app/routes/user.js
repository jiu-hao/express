const express = require('express')
const userCtrls = require('../controller/user')

let router = express.Router()
//用户登录
router.post('/user/login', userCtrls.userLogin)


module.exports = router