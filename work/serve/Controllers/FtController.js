let FtService = require('../Service/FtService');

module.exports.Ft = function (req, res) {
    //创建对象 
    let ftService= new FtService();
    //获得top的数据
    ftService.getFt(function (result) {
        // console.log(result);
        res.json(result);
    });

}
