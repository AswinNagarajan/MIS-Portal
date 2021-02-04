const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('store', 'root', 'Aswin@123', {
  host: 'localhost',
  dialect: 'mysql'
});


const Users = sequelize.define('users', {
  // Model attributes are defined here
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  password: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  name: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  position: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  accessId: {
    type: DataTypes.INTEGER
    // allowNull defaults to true
  },
  createdAt: {
    type: DataTypes.DATE
    // allowNull defaults to true
  },
  updatedAt: {
    type: DataTypes.DATE
    // allowNull defaults to true
  }
});


// `sequelize.define` also returns the model
console.log(Users === sequelize.models.users); // true

module.exports = Users
