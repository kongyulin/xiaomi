let FtModule = require('../Models/FtModule');

class FtService {
    constructor() {
        //创建对象
        this.ftModule = new FtModule();
    }
    getFt(callback){
    this.ftModule.select(function(result){
        callback(result);
    }) 
}

}

module.exports = FtService;