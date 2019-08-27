let SqlBase = require('./SqlBase');
class DeleteModule extends SqlBase {
    constructor() {
        super();
    }
    delete(id,callback) {
        //编写sql语句
        let sql = `delete from onlyimg where id=${id}`;

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
module.exports = DeleteModule;