/*
 * @Author: Cxy
 * @Date: 2021-03-05 10:43:58
 * @LastEditors: Cxy
 * @LastEditTime: 2022-06-02 14:35:07
 * @FilePath: \ehomes-admind:\blog\blogServe\mongo\connectDB.js
 */

const { console } = require('../log')
const mongoose = require('mongoose')
const options_DB = {
  db_host: "localhost",
  db_port: 27017,
  db_name: "blog"
}
/* 链接数据库地址及创建库名 */
var dbURL = "mongodb://" + options_DB.db_host + ":" + options_DB.db_port + "/" + options_DB.db_name
/* 链接数据库 */
// 去除useFindAndModify弹出的警告
mongoose.set('useFindAndModify', false)
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.on('connected', () => {
  console('🌈🌈🌈  数据库连接成功')
})
mongoose.connection.on('disconnected', () => {
  console('❌❌❌  数据库断开')
})
mongoose.connection.on('error', () => {
  console('❌❌❌  数据库连接异常')
})
module.exports = mongoose