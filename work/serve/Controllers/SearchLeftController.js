let SearchLeftService = require('../Service/SearchLeftService');

module.exports.SearchLeft = function (req, res) {
    //创建对象 
    let searchLeftService= new SearchLeftService();
    //获得top的数据
    searchLeftService.getSearchLeft(function (result) {
        // console.log(result);
        res.json(result);
    });

}
