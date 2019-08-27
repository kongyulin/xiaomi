let express=require('express');
let app=express();
// 解决跨域问题
app.all('*',function (req, res, next) {
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

// //引入top控制器
let topcontroller = require('./Controllers/TopController');
app.get('/top', topcontroller.Top);

// searchleft // 搜索框左侧导航栏
let searchleftcontroller = require('./Controllers/SearchLeftController');
app.get('/searchleft', searchleftcontroller.SearchLeft);

// searchleftchild // 搜索框左侧导航栏扩展
let slchildcontroller = require('./Controllers/SLChildController');
  app.get('/slchild', slchildcontroller.SLChild);
  
// 左侧导航栏
let leftcontroller = require('./Controllers/LeftController');
app.get('/leftlist', leftcontroller.Left);
// 左侧导航栏扩展
let leftchildcontroller = require('./Controllers/LeftChildController');
app.get('/leftchild', leftchildcontroller.LeftChild);

// F码通道
let ftcontroller = require('./Controllers/FtController');
app.get('/ft', ftcontroller.Ft);

// 轮播图和广告图
let onlyImgcontroller = require('./Controllers/OnlyImgController');
app.get('/onlyimg', onlyImgcontroller.OnlyImg);

// 产品
let productcontroller = require('./Controllers/ProductController');
app.get('/product', productcontroller.Product);

// 底部
let bottomcontroller = require('./Controllers/BottomController');
app.get('/bottom', bottomcontroller.Bottom);

// 产品细节
let detImgcontroller = require('./Controllers/DetImgController');
app.get('/detimg', detImgcontroller.DetImg);

let detTextcontroller = require('./Controllers/DetTextController');
app.get('/dettext', detTextcontroller.DetText);

// 删除数据库
let deletecontroller = require('./Controllers/DeleteController');
app.get('/delete', deletecontroller.Delete);
// 加入购物车
let shopscontroller = require('./Controllers/ShopsController');
app.get('/shops', shopscontroller.Shops);

//数据库更新
let updateShopsController = require('./Controllers/ShopsController');
app.get('/updateshops',updateShopsController.updateShops);

// 删除购物车产品
let delShopsController = require('./Controllers/DelShopsController');
app.get('/delshops',delShopsController.DelShops);



var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))


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

// 登录
let loginController = require('./Controllers/LoginController');
app.post('/checkUser',loginController.checkUser);

// 注册
let registerController = require('./Controllers/RegisterController');
app.post('/addUser', registerController.addUser);

// 购物车产品信息
let shops1Controller = require('./Controllers/Shops1Controller');
app.post('/shops1',shops1Controller.shops1);





app.listen(9090,function(){
      console.log("开启了9090端口")
  })
