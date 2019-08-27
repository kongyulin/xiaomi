let LeftChildModule = require('../Models/LeftChildModule');

class LeftChildService {
    constructor() {
        //创建对象
        this.leftChildModule = new LeftChildModule();
    }
    getLeftChild(id,callback){
    this.leftChildModule.select(id,function(result){
        callback(result);
    }) 
}

}

module.exports =LeftChildService;