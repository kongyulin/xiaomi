let SearchLeftModel = require('../Models/SearchLeftModel');

class SearchLeftService {
    constructor() {
        //创建对象
        this.searchLeftModel = new SearchLeftModel();
    }
    getSearchLeft(callback){
    this.searchLeftModel.select(function(result){
        callback(result);
    }) 
}

}

module.exports = SearchLeftService;