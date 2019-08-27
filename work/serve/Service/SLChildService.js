let SLChildModel = require('../Models/SLChildModel');

class SLChildService{
    constructor() {
        //创建对象
        this.sLChildModel = new SLChildModel();
    }
    getSLChild(id,callback){
    this.sLChildModel.select(id,function(result){
        callback(result);
    }) 
}

}

module.exports = SLChildService;