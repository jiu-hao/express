const express = require('express')
const personInfoCtrls = require('../controller/personInfo')

let router = express.Router()
//获取用户信息
router.get('/getPersonInfo/:id', personInfoCtrls.getPersonInfo)

router.post('/editPersonInfo', personInfoCtrls.editPersonInfo)


module.exports = router