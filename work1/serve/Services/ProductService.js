let ProductModel=require('../Models/ProductModel');
class ProductService{
    constructor(){
        this.productModel=new ProductModel();
    }

    getpruductInfor(name,introduce,key,callback){
    
           
            this.productModel.insertUser(name,introduce,key,function(ob){
                callback(ob);
            });
    
    }
        
    
}

module.exports=ProductService;