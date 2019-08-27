let DetTextService = require('../Service/DetTextService');

module.exports.DetText = function (req, res) {
    //创建对象 
    let detTextService= new DetTextService();
    //获得top的数据
    detTextService.getDetText(function (result) {
        // console.log(result);
        res.json(result);
    });

}
