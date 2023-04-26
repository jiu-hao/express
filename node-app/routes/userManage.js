const express = require('express')
const userManageCtrls = require('../controller/userManage')

let router = express.Router()
//获取用户信息
router.get('/getPersonInfoAll', userManageCtrls.getPersonInfoAll)

// 添加用户
router.post('/addPerson', userManageCtrls.addPerson)

// 删除用户
router.post('/deletePerson', userManageCtrls.deletePerson)


module.exports = router