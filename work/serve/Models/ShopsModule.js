let SqlBase = require('./SqlBase');
class ShopsModule extends SqlBase {
    constructor() {
        super();
    }
    inser(name,price,count,callback) {
        //编写sql语句
              //1,编写sql语句
 var sql = "INSERT INTO shops(name,price,count) VALUES('" + name + "','" + price + "'," + count + ")";

        //查询数据
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log(err.message);
                return;
            }
            // console.log(result)
            callback(result);
        });
    }

    update(count,id,callback) {
        //编写sql语句
              //1,编写sql语句
 var sql=`update shops set count=${count} where id=${id} `

        //查询数据
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log(err.message);
                return;
            }
            // console.log(result)
            callback(result);
        });
    }

}
module.exports = ShopsModule;