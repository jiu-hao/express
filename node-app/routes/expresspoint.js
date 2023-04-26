const express = require('express')
const expresspointCtrls = require('../controller/expresspoint')

let router = express.Router()

//获取快递点列表
router.get('/expresspoint/expsta', expresspointCtrls.expsta)

// 添加快递点
router.post('/expresspoint/expstaadd', expresspointCtrls.expstaadd)

// //更新快递点
router.post('/expresspoint/expreupdate', expresspointCtrls.expreupdate)

// // 编辑公告
// router.post('/notice/edit', noticeCtrls.edit)

// // 批量删除
// router.post('/notice/deleteBatch', noticeCtrls.deleteBatch)

// // 删除
// router.post('/notice/del', noticeCtrls.delete)


module.exports = router