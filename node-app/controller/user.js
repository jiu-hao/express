const jwt = require('../utils/jwt')
const { jwtSecret } = require('../config/config.default')
const db = require('../db')


// 用户登录
exports.userLogin = async (req, res, next) => {

  //获取前端数据
  let { password, username } = req.body
  // console.log(req.body)
  try {
    // 根据用户名查询
    let parmas = [username]
    const sql = "SELECT * FROM users WHERE username=?;"
    db.query(sql, parmas, async function (err, result) {
      //result查询的结果
      if (err) {
        console.log('sql语句执行异常;')
      }
      console.log(result)
      if (!result[0]) {
        res.status(200).json({
          code: 404,
          error: 'Invalid username or password'
        });
        return;
      }
      if (result[0].password !== password) {
        res.status(200).json({
          code: 401,
          error: 'Invalid username or password'
        });
        return;
      }
      // 使用jwt生成用户token
      let token = await jwt.sign({ id: result[0].id }, jwtSecret, { expiresIn: 60 * 60 * 24 })
      // console.log(token)
      res.status(200).json({
        code: 200,
        data: {
          user: result[0],
          token
        }
      })
    })

  } catch (error) {
    next(error)
  }
}
