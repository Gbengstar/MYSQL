exports.dbConfig = {
  HOST: 'localhost',
  USER: 'root',
  PASSWORD: 'love6080',
  DATABASE: 'bakery',
  DIALECT: 'mysql',
  pool: {
    min: 0,
    max: 5,
    acquire: 30000,
    idle: 10000,
  },
};
