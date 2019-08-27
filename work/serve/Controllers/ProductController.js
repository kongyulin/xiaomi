let ProductService = require('../Service/ProductService');

module.exports.Product = function (req, res) {
    //创建对象 
   
    // console.log(req.query.id)
    let id=req.query.id;
    let productService= new ProductService();
    //获得top的数据
    productService.getProduct(id,function (result) {
        // console.log(result);
        res.json(result);
    });

}
