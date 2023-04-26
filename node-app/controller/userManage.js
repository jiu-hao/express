const db = require('../db')

// 获取所有用户
exports.getPersonInfoAll = (req, res, next) => {
  try {

    const sql = 'SELECT * FROM users'
    db.query(sql, async function (err, result) {
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

// 添加用户
exports.addPerson = (req, res, next) => {
  try {
    let { username, password, name, photo, tel, type } = req.body
    const sql = 'INSERT INTO users (username, password, name, photo, tel,type) VALUES ( ?, ?, ?, ?, ?, ?)'
    db.query(sql, [username, password, name, photo, tel, type], async function (err, result) {
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

// 删除用户
exports.deletePerson = (req, res, next) => {
  try {
    let idStr = req.body.join()

    const sql = `delete from users where id in(${idStr});`
    db.query(sql, async function (err, result) {
      if (err) {
        console.log('sql语句执行异常;', err)
        res.json({ success: false, message: '删除失败' })
      } else {
        res.json({ success: true, data: '删除成功' })
      }
    });
  } catch (error) {
    next(error)
  }
}