let BottomService = require('../Service/BottomService');

module.exports.Bottom = function (req, res) {
    //创建对象 
    let bottomService= new BottomService();
    //获得top的数据
    bottomService.getBottom(function (result) {
        // console.log(result);
        res.json(result);
    });

}
