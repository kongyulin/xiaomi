let LeftService = require('../Service/LeftService');

module.exports.Left = function (req, res) {
    //创建对象 
    let leftService= new LeftService();
    //获得top的数据
    leftService.getLeft(function (result) {
        // console.log(result);
        res.json(result);
    });

}
