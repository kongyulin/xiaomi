let DetTextModule = require('../Models/DetTextModule');

class DetTextService {
    constructor() {
        //创建对象
        this.detTextModule = new DetTextModule();
    }
    getDetText(callback){
    this.detTextModule.select(function(result){
        callback(result);
    }) 
}

}

module.exports = DetTextService;