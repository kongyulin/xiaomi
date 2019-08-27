let LeftChildService = require('../Service/LeftChildService');

module.exports.LeftChild = function (req, res) {
    //创建对象 
   
    // console.log(req.query.id)
    let id=req.query.id;
    let leftChildService= new LeftChildService();
    //获得top的数据
    leftChildService.getLeftChild(id,function (result) {
        // console.log(result);
        res.json(result);
    });

}
