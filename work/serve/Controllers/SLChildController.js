let SLChildService = require('../Service/SLChildService');

module.exports.SLChild = function (req, res) {
    //创建对象 
    // console.log(req.query.id)
    let id=req.query.id;
    let sLChildService= new SLChildService();
    //获得top的数据
   
    sLChildService.getSLChild(id,function (result) {
        // console.log(result);
        res.json(result);
    });

}
