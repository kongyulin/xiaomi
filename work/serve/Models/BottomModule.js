let SqlBase = require('./SqlBase');
class BottomModule extends SqlBase {
    constructor() {
        super();
    }
    select(callback) {
        //编写sql语句
        let sql = "select * from bottom";

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
module.exports = BottomModule;