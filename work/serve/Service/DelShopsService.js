let DelShopsModule = require('../Models/DelShopsModule');

class DelShopsService {
    constructor() {
        //创建对象
        this.delShopsModule = new DelShopsModule();
    }
    getDelShops(id,callback){
    this.delShopsModule.delShops(id,function(result){
        callback(result);
    }) 
}

}

module.exports =DelShopsService;