let SqlBase = require('./SqlBase');
class OnlyImgModule extends SqlBase {
    constructor() {
        super();
    }
    select(id,callback) {
        //编写sql语句
        let sql = `select * from onlyimg where img_id=${id}`;

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
module.exports = OnlyImgModule;