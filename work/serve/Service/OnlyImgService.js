let OnlyImgModule = require('../Models/OnlyImgModule');

class OnlyImgService {
    constructor() {
        //创建对象
        this.onlyImgModule = new OnlyImgModule();
    }
    getonlyImg(id,callback){
    this.onlyImgModule.select(id,function(result){
        callback(result);
    }) 
}

}

module.exports =OnlyImgService;