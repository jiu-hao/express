const db = require('../db')
exports.getExpress = (req, res, next) => {
  try {

    const sql = 'SELECT * FROM express'
    db.query(sql, async function (err, result) {
      if (err) {
        console.log('sql语句执行异常;', err)
        res.json({ success: false, message: '获取快递列表失败' })
      } else {
        res.json({ success: true, data: result })
      }
    });
  } catch (error) {
    next(error)
  }
}

exports.addExpress = (req, res, next) => {
  try {
    let { sender_name, express_weight, sending_time, receiver_name, receiver_adress, receiver_tell, state, sender_address, user_order } = req.body
    // console.log(order)
    const sql = 'INSERT INTO express (sender_name, express_weight, sending_time, receiver_name, receiver_adress, user_order, receiver_tell, state, sender_address) VALUES (?,?, ?, ?, ?, ?, ?,?, ?)'
    db.query(sql, [sender_name, express_weight, sending_time, receiver_name, receiver_adress, user_order, receiver_tell, state, sender_address,], function (err, result) {
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

exports.editExpress = (req, res, next) => {
  try {

    let { sender_address, sender_name, receiver_tell, receiver_adress, receiver_name, state, user_order, express_type, express_prices, express_weight, sending_time, id } = req.body
    const sql = 'UPDATE express SET sender_address = ?, sender_name = ?, receiver_tell = ?, receiver_adress = ?, receiver_name = ?, state = ?, user_order = ?, sending_time = ?  WHERE id = ?'
    db.query(sql, [sender_address, sender_name, receiver_tell, id, receiver_adress, receiver_name, state, user_order, sending_time], async function (err, result) {
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

exports.deleteExpress = (req, res, next) => {
  try {
    let { id } = req.params
    const sql = `delete from express where id in(${id});`
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


// 导入依赖模块
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

// 创建Express应用
const app = express();

// 配置body-parser中间件
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// 创建MySQL连接池
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'express_delivery'
});

// // 定义快递员选择API
// app.post('/api/select-courier', (req, res) => {
//   // 获取请求参数
//   const { address } = req.body;

//   // 执行MySQL查询
//   pool.query(`SELECT * FROM couriers WHERE status='空闲' AND station='A' AND ST_CONTAINS(range, ST_GEOMFROMTEXT('POINT(114.06 22.55)')) ORDER BY workload ASC`, (error, results) => {
//     if (error) {
//       console.error(error);
//       res.json({ success: false, message: '快递员选择失败' });
//       return;
//     }

//     // 返回最优的快递员
//     res.json({ success: true, data: results[0] });
//   });
// });

// // 启动Express应用
// app.listen(3000, () => {
//   console.log('Express app is listening on port 3000');
// });