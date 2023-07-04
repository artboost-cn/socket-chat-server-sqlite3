// sequelize连接数据库
const DB = require('sequelize')
/*
const sequelize = new DB.Sequelize('socket_chat', 'root', 'mysqlpassword', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    charset: 'utf8mb4'
  }
});
*/

//const sequelize = new DB.Sequelize('sqlite::memory:') // Example for sqlite


const sequelize = new DB.Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite'
});

module.exports = {
  sequelize
}
