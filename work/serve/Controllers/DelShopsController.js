let DelShopsService = require('../Service/DelShopsService');

module.exports.DelShops = function (req, res) {
    //创建对象 
    console.log(req.query.id)
    
    let id=req.query.id;
    console.log(id)
    
    let delShopsService= new DelShopsService();
    //获得数据
    delShopsService. getDelShops(id,function (result) {
        // console.log(result);
        res.json(result);
    });

}
