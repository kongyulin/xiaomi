let SqlBase=require('./SqlBase');
class ProductModel extends SqlBase{
    constructor(){
        super();
    }

    // 添加产品数据
    insertUser(name, introduce,key, callback) {
        //编写sql语句
        let sql = `insert into onlyimg(img_id,introduce,img) values('${name}','${introduce}','${key}')`;

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

module.exports=ProductModel;