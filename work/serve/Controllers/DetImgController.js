let DetImgService = require('../Service/DetImgService');

module.exports.DetImg = function (req, res) {
    //创建对象 
    let detImgService= new DetImgService();
    //获得top的数据
    detImgService.getDetImg(function (result) {
        // console.log(result);
        res.json(result);
    });

}
