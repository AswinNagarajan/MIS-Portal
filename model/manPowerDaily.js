const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('store', 'root', 'Aswin@123', {
  host: 'localhost',
  dialect: 'mysql'
});


const ManPowerDaily = sequelize.define('manpowerdaily', {
  // Model attributes are defined here
  usertId: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true
  },
  members: {
    type: DataTypes.INTEGER
    // allowNull defaults to true
  },
  pages: {
    type: DataTypes.INTEGER
    // allowNull defaults to true
  },
  remarks: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  createdAt: {
    type: DataTypes.DATE
    // allowNull defaults to true
  },
  updatedAt: {
    type: DataTypes.DATE
    // allowNull defaults to true
  },
  day: {
    type: DataTypes.DATE
    // allowNull defaults to true
  },
  clientId: {
    type: DataTypes.STRING,
  }
},
{
  freezeTableName: true
});

/*
members int
pages int
remarks varchar(20)
createdAt datetime
updatedAt datetime
day date
userId int AI PK
clientId varchar(50)
*/

// `sequelize.define` also returns the model
console.log(ManPowerDaily === sequelize.models.manpowerdaily); // true

module.exports = ManPowerDaily
