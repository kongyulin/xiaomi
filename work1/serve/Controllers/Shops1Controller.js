let Shops1Service = require('../Services/Shops1Service');
module.exports.shops1 = function (req, res) {
    let shops1Service=new Shops1Service();
    shops1Service.shops1(function(ob){
        res.json(ob);
    })
}