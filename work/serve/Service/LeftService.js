let LeftModule = require('../Models/LeftModule');

class LeftService {
    constructor() {
        //创建对象
        this.leftModule = new LeftModule();
    }
    getLeft(callback){
    this.leftModule.select(function(result){
        callback(result);
    }) 
}

}

module.exports = LeftService;