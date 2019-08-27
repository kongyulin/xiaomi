let ShopsService = require('../Service/ShopsService');

module.exports.Shops= function (req, res) {
    console.log(req.query)
    let count=req.query.count;
    let price=req.query.price;
    let name=req.query.name;
    //创建对象 
    let shopsService= new ShopsService();
    //获得shopsService的数据
    shopsService.getShops(name,price,count,function (result) {
        // console.log(result);
        res.json(result);
    });

}


module.exports.updateShops= function (req, res) {
    console.log(req.query)
    let count=req.query.count;
    let id=req.query.id;
    //创建对象 
    let shopsService= new ShopsService();
    //获得shopsService的数据
    shopsService.getupdateShops(count,id,function (result) {
        // console.log(result);
        res.json(result);
    });

}
