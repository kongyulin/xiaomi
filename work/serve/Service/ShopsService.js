let ShopsModule = require('../Models/ShopsModule');

class ShopsService {
    constructor() {
        //创建对象
        this.shopsModule = new ShopsModule();
    }
    getShops(name,price,count,callback){
    this.shopsModule.inser(name,price,count,function(result){
        callback(result);
    }) 
}
getupdateShops(count,id,callback){
    this.shopsModule.update(count,id,function(result){
        callback(result);
    }) 
}

}

module.exports = ShopsService;