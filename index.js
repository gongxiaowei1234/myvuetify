// const MongoClient=require('mongodb').MongoClient;
// const url="mongodb:://localhost:27017";
// const db_name="test";
//mongoose链接
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://127.0.0.1:27017/data');    //数据库地址,这里的data就是前面创建的那个data文件夹
//测试数据库是否链接成功
db.then(() => console.log("MongonDB链接成功！"))
  .catch(err => console.log(err));
