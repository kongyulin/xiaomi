let TopModule = require('../Models/TopModule');

class TopService {
    constructor() {
        //创建对象
        this.topModule = new TopModule();
    }
    getTop(callback){
    this.topModule.select(function(result){
        callback(result);
    }) 
}

}

module.exports = TopService;