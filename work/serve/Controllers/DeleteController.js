let DeleteService = require('../Service/DeleteService');

module.exports.Delete = function (req, res) {
    //创建对象 
    console.log(req.query.id)
    
    let id=req.query.id;
    
    let deleteService= new DeleteService();
    //获得数据
    deleteService. getdelete(id,function (result) {
        // console.log(result);
        res.json(result);
    });

}
