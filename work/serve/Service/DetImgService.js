let DetImgModule = require('../Models/DetImgModule');

class DetImgService {
    constructor() {
        //创建对象
        this.detImgModule = new DetImgModule();
    }
    getDetImg(callback){
    this.detImgModule.select(function(result){
        callback(result);
    }) 
}

}

module.exports = DetImgService;