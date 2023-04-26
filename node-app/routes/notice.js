const express = require('express')
const noticeCtrls = require('../controller/notice')

let router = express.Router()

//获取公告列表
router.get('/notice/getNotices', noticeCtrls.getNotices)

//添加公告
router.post('/notice/add', noticeCtrls.add)

//更新公告
router.post('/notice/update', noticeCtrls.update)

// 编辑公告
router.post('/notice/edit', noticeCtrls.edit)

// 批量删除
router.post('/notice/deleteBatch', noticeCtrls.deleteBatch)

// 删除
router.post('/notice/del', noticeCtrls.delete)


module.exports = router