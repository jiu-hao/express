const express = require('express')
const db = require('./db')
const cors = require('cors')
const app = express();
const bodyParser = require('body-parser')

//引入user.js
const user = require('./routes/user');
const notice = require('./routes/notice')
const expresspoint = require('./routes/expresspoint')
const errorHandler = require('./middleware/error-handler')
const personInfo = require('./routes/personInfo')
const userManage = require('./routes/userManage')
const messageMg = require('./routes/messageMg')
const exprees = require('./routes/express')


// 允许跨域
app.use(cors())

//使用body-parser中间件
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//使用routes
app.use('/api', user)
app.use('/api', notice)
app.use('/api', expresspoint)
app.use('/api', personInfo)
app.use('/api', userManage)
app.use('/api', messageMg)
app.use('/api', exprees)

//挂载统一处理服务端错误中间件
app.use(errorHandler())

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})