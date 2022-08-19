const { database } = require('../configuration/connectDB');
const { DataTypes, sequelize } = database;

const BioDataModel = sequelize.define('BioData', {
  name: { type: DataTypes.STRING, allowNull: false },
  age: { type: DataTypes.INTEGER },
  cgpa: { type: DataTypes.FLOAT },
});

exports.biodataModel = BioDataModel;
