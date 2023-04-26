const express = require('express')
const expressCtrls = require('../controller/express')

let router = express.Router()

router.get('/getExpress', expressCtrls.getExpress)

// // 添加留言
router.post('/addExpress', expressCtrls.addExpress)

router.post('/editExpress', expressCtrls.editExpress)


router.post('/deleteExpress/:id', expressCtrls.deleteExpress)


module.exports = router