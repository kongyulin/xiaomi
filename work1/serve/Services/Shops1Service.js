let Shops1Model = require('../Models/Shops1Model');
class Shops1Service {
    constructor() {
        this.shops1Model = new Shops1Model();
    }
    shops1(callback){
        this.shops1Model.search(function(result){
            callback(result);
        }) 
    }
    
}

module.exports = Shops1Service;