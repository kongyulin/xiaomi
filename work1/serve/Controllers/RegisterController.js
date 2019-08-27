//引入用户模块
let UserService = require('../Services/UserService');

module.exports.addUser = function (req, res) {

    //解析提交数据
    let name = req.body.user;
    let passwd = req.body.pasword;
    //创建业务对象
    let userService = new UserService();
    //验证用户是否合法
    userService.addUser(name, passwd, function (ob) {
        //如果用户合法
        if (ob.code == 1) {
            req.session.login = true;
        }
        res.json(ob);
    });

}