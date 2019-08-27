let ProductService=require('../Services/ProductService');
module.exports.addProduct = function (req, res) {
    //解析数据
    let name = req.body.title;
    let introduce = req.body.price;
    let key = req.body.src;

    // console.log(name);
    // console.log(introduce);
    // console.log(key);

    let productService=new ProductService();
    //把数据传给业务逻辑进行数据插入
    productService.getpruductInfor(name,introduce,key,function(ob){
        res.json({
            msg: "上传成功！",
            code:1
        });
    });


}