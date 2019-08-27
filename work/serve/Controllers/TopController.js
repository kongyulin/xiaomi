let TopService = require('../Service/TopService');

module.exports.Top = function (req, res) {
    //创建对象 
    let topService= new TopService();
    //获得top的数据
    topService.getTop(function (result) {
        // console.log(result);
        res.json(result);
    });

}
