const mysql = require('mysql');

let pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '111111',
  database: 'express'
});

// let pool = mysql.createPool({
//   host: 'localhost',
//   user: 'root',
//   password: '123456',
//   database: 'kuaidi'
// });


// 连接数据库
pool.on('connection', (connection) => {

})

pool.on('enqueue', (connection) => {

})

module.exports.Pool = pool

module.exports.getConnection = (cb) => {
  if (typeof cb == "function") {
    pool.getConnection(function (err, connection) {
      cb(err, connection)
    })
  } else {
    return new Promise((resolve, reject) => {
      pool.getConnection((err, connection) => {
        if (err) {
          reject(err)
        } else {
          resolve(connection)
        }
      })
    })
  }
}

module.exports.query = (sql, values, cb) => {
  if (typeof cb == "function") {
    pool.getConnection((err, connection) => {
      if (err) {
        connection.release()
        cb(err)
      } else {
        connection.query(sql, values, (error, rows) => {
          connection.release()
          cb(error, rows)
        })
      }
    })
  } else {
    return new Promise((resolve, reject) => {
      pool.getConnection((err, connection) => {
        if (err) {
          connection.release()
          reject(err)
        } else {
          connection.query(sql, values, (error, rows) => {
            if (error) {
              reject(error)
            } else {
              resolve(rows)
            }

          })
        }
      })
    })
  }
}