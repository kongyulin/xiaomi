const express = require('express');
const multer  = require('multer')
const app = express();

var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

// 跨域
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    if (req.method == 'OPTIONS') {
        res.send(200);
    }
    else {
        next();
    }
});
//引入cookie
var cookieParser = require('cookie-parser');
app.use(cookieParser());
//引入session
var session = require('express-session');
app.use(session({
    secret: '12345',
    name: '06session', 
    cookie: {
        maxAge: 24 * 60 * 60 * 1000
    }, 
}));

//引入index控制器
let controller = require('./Controllers/IndexController');
app.get('/index', controller.index);

// 登录
let loginController = require('./Controllers/LoginController');
app.post('/checkUser',loginController.checkUser);

// 注册
let registerController = require('./Controllers/RegisterController');
app.post('/addUser', registerController.addUser);

//产品模块
let productController = require('./Controllers/ProductController');
app.post('/addProduct',productController.addProduct);

//图片上传
let fileController = require('./Controllers/FileController');
app.post("/upload", multer({
    dest: __dirname + '/public/upload/imgs/'
}).array('file'), fileController.upload);

// 购物车产品信息
let shops1Controller = require('./Controllers/Shops1Controller');
app.post('/shops1',shops1Controller.shops1);


app.listen(8888, function () {
    console.log('开启端口');
});

