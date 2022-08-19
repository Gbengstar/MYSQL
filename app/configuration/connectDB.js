const { Sequelize, DataTypes } = require('sequelize');
const { dbConfig: db } = require('./config');

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize(db.DATABASE, db.USER, db.PASSWORD, {
  host: db.HOST,
  dialect: db.DIALECT /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
  pool: {
    min: db.pool.min,
    max: db.pool.max,
    acquire: db.pool.acquire,
    idle: db.pool.idle,
  },
});
sequelize.sync({ force: false });
// sequelize
//   .authenticate()
//   .then(() => console.log('...............database connected!..............'))
//   .catch((e) => {
//     console.log(e);
//     console.log('........error occured while connecting to database.........');
//   });

exports.database = { sequelize, Sequelize, DataTypes };
