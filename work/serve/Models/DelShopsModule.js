let SqlBase = require('./SqlBase');
class DelShopsModule extends SqlBase {
    constructor() {
        super();
    }
    delShops(id,callback) {
        //编写sql语句
        let sql = `delete from shops where id=${id}`;

        //查询数据
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log(err.message);
                return;
            }
            console.log(result)
            callback(result);
        });
    }

}
module.exports = DelShopsModule;