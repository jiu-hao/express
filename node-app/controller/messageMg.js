const db = require('../db')

exports.getMessage = (req, res, next) => {
  try {

    const sql = 'SELECT * FROM message'
    db.query(sql, async function (err, result) {
      if (err) {
        console.log('sql语句执行异常;', err)
        res.json({ success: false, message: '获取留言列表失败' })
      } else {
        res.json({ success: true, data: result })
      }
    });
  } catch (error) {
    next(error)
  }
}

// 添加留言
exports.addMessage = (req, res, next) => {
  try {
    let { message_person, message_content, message_time } = req.body
    const sql = 'INSERT INTO message (message_person, message_content, message_time) VALUES ( ?, ?, ?)'
    db.query(sql, [message_person, message_content, message_time], async function (err, result) {
      if (err) {
        console.log('sql语句执行异常;', err)
        res.json({ success: false, message: '添加失败' })
      } else {
        res.json({ success: true, message: '添加成功' })
      }

    });
  } catch (err) {
    next(err)

  }
}

// 修改留言
exports.editMessage = (req, res, next) => {
  try {
    let { message_id, message_person, message_content, message_time} = req.body
    const sql = 'UPDATE message SET message_person = ?, message_content = ?, message_time = ?  WHERE message_id = ?'
    db.query(sql, [message_person, message_content, message_time, message_id], async function (err, result) {
      if (err) {
        console.log(err)
        res.json({ success: false, message: '编辑失败' })
      } else {
        res.json({ success: true, message: '编辑成功' })
      }
    });
  } catch (error) {
    next(error)
  }
}