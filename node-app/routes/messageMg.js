const express = require('express')
const messageMgCtrls = require('../controller/messageMg')

let router = express.Router()

// 获取留言
router.get('/getMessage', messageMgCtrls.getMessage)

// 添加留言
router.post('/addMessage', messageMgCtrls.addMessage)

router.post('/editMessage', messageMgCtrls.editMessage)


module.exports = router