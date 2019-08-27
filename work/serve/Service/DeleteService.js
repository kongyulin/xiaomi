let DeleteModule = require('../Models/DeleteModule');

class DeleteService {
    constructor() {
        //创建对象
        this.deleteModule = new DeleteModule();
    }
    getdelete(id,callback){
    this.deleteModule.delete(id,function(result){
        callback(result);
    }) 
}

}

module.exports =DeleteService;