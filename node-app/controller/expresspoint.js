const db = require('../db')

//获取快递点列表
exports.expsta = async (req, res, next) => {
    try {
        const sql = 'SELECT * FROM expresssta'
        db.query(sql, async function (err, result) {
            // console.log(result)
            if (err) {
                console.log('sql语句执行异常;')
                res.json({ success: false, message: '获取快递点列表失败' })
            } else {
                console.log(result)
                res.json({ success: true, data: result })
            }
        });
    } catch (err) {
        console.error(err)
    }
}

//添加快递点
exports.expstaadd = async (req, res, next) => {
    try {
        let { number, tel, address, name, person } = req.body
        console.log(req.body)
        const sql = 'INSERT INTO expresssta (number, tel, address, name, person) VALUES ( ?, ?, ?, ?, ?)'
        // const sql = 'SELECT * FROM expresssta'
        db.query(sql, [number, tel, address, name, person], async function (err, result) {
            if (err) {
                console.log(err)
                console.log('sql语句执行异常;')
                res.json({ success: false, message: '添加快递点失败' })
            } else {
                console.log(result)
                res.json({ success: true, message: '添加快递点成功' })
            }

        });



    } catch (err) {
        console.error(err)

    }
}
// 编辑快递点
exports.expre = async (req, res, next) => {
    try {
        const { tel, address, name, person } = req.body
        const sql = 'UPDATE expresssta SET  tel = ?, address = ?, name = ?, person = ? WHERE number = ?'
        db.query(sql, [number, tel, address, name, person], async function (err, result) {
            if (err) {
                console.log('sql语句执行异常;')
                res.json({ success: false, message: '编辑快递点失败' })
            } else {
                console.log(result)
                res.json({ success: true, message: '编辑快递点成功' })
            }
        });
    } catch (err) {
        console.error(err)
    }
}

//更新快递点
exports.expreupdate = async (req, res, next) => {
    try {
        const { id } = req.params; // 从 URL 中获取公告 ID
        const { title, content } = req.body; // 从请求正文中获取新的公告标题和内容

        // 执行 SQL 更新语句
        const sql = 'UPDATE notices SET title = ?, content = ? WHERE id = ?';
        db.query(sql, [title, content, id], async function (err, result) {
            if (err) {
                console.log(result)
                console.log('SQL 语句执行异常:', err);
                res.json({ success: false, message: '更新公告失败' });
            } else {
                console.log(result);
                res.json({ success: true, message: '更新公告成功' });
            }
        });
    } catch (err) {
        console.error(err);
    }
}

// 批量删除
exports.deleteBatch = async (req, res, next) => {
    try {
        const { ids } = req.body; // 从请求正文中获取公告 ID 列表
        const sql = 'DELETE FROM notices WHERE id IN (?)'; // 使用 IN 子句批量删除公告

        db.query(sql, [ids], async function (err, result) {
            if (err) {
                console.log('SQL 语句执行异常:', err);
                res.json({ success: false, message: '批量删除公告失败' });
            } else {
                console.log(result);
                res.json({ success: true, message: '批量删除公告成功' });
            }
        });
    } catch (err) {
        console.error(err);
    }
}

// 删除公告
exports.delete = async (req, res, next) => {
    try {
        console.log(req);
        const { id } = req.body
        console.log('sgabncgy')
        const sql = 'DELETE FROM notices WHERE id = ?'
        console.log(id);
        db.query(sql, [id], async function (err, result) {
            if (err) {
                console.log(err);
                console.log('sql语句执行异常;')
                res.json({ success: false, message: '删除公告失败' })
            } else {
                console.log('gd');
                console.log(result)
                res.json({ success: true, message: '删除公告成功' })
            }
        });
    } catch (err) {
        console.error(err)
    }
}
