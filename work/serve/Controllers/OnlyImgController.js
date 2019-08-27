let OnlyImgService = require('../Service/OnlyImgService');

module.exports.OnlyImg = function (req, res) {
    //创建对象 
    // console.log(req.query.id)
    
    let id=req.query.id;
    let onlyImgService= new OnlyImgService();
    //获得数据
    onlyImgService. getonlyImg(id,function (result) {
        // console.log(result);
        res.json(result);
    });

}
