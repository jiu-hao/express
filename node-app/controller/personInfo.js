const db = require('../db')

// 获取个人信息
exports.getPersonInfo = (req, res, next) => {
  try {
    let { id } = req.params

    const sql = 'SELECT * FROM users WHERE id = ?'
    db.query(sql, [id], async function (err, result) {
      if (err) {
        console.log('sql语句执行异常;', err)
        res.json({ success: false, message: '获取个人信息失败' })
      } else {
        res.json({ success: true, data: result })
      }
    });
  } catch (error) {
    next(error)
  }
}

// 编辑个人信息
exports.editPersonInfo = (req, res, next) => {
  try {
    let { id, username, password, name, photo, tel, type } = req.body
    console.log(req.body)
    const sql = 'UPDATE users SET username = ?, password = ?, name = ?, photo = ?, tel = ?, type = ? WHERE id = ?'
    db.query(sql, [username, password, name, photo, tel, type, id], async function (err, result) {
      if (err) {
        res.json({ success: false, message: '编辑失败' })
      } else {
        res.json({ success: true, message: '编辑成功' })
      }
    });
  } catch (error) {
    next(error)
  }
}