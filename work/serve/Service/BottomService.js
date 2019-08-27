let BottomModule = require('../Models/BottomModule');

class BottomService {
    constructor() {
        //创建对象
        this.bottomModule = new BottomModule();
    }
    getBottom(callback){
    this.bottomModule.select(function(result){
        callback(result);
    }) 
}

}

module.exports = BottomService;