let SqlBase=require('./SqlBase');
class Shops1Model extends SqlBase{
    constructor(){
        super();
    }


    search(callback) {
        //编写sql语句
        let sql = `SELECT * FROM shops`;

        // console.log(sql);

        //查询数据
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log(err.message);
                return;
            }

            callback(result);
        });
    }
}

module.exports=Shops1Model;