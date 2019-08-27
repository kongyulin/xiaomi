let ProductModule = require('../Models/ProductModule');

class ProductService {
    constructor() {
        //创建对象
        this.productModule = new ProductModule();
    }
    getProduct(id,callback){
    this.productModule.select(id,function(result){
        callback(result);
    }) 
}

}

module.exports = ProductService;