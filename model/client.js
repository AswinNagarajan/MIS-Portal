const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('store', 'root', 'Aswin@123', {
  host: 'localhost',
  dialect: 'mysql'
});


const Client = sequelize.define('client', {
  // Model attributes are defined here
  clientId: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  country: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  address: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  paymentTerms: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  currencyId: {
    type: DataTypes.INTEGER
    // allowNull defaults to true
  },
  contactId: {
      type: DataTypes.INTEGER
      // allowNull defaults to true
    },
  billingCycleId: {
      type: DataTypes.INTEGER
      // allowNull defaults to true
    },
  paymentTypeId: {
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
},
{
  freezeTableName: true
});


// `sequelize.define` also returns the model
console.log(Client === sequelize.models.client); // true



module.exports = Client





// clientId varchar(50) PK
// name varchar(255)
// country varchar(255)
// address varchar(255)
// paymentTerms varchar(255)
// createdAt datetime
// updatedAt datetime
// currencyId int
// contactId int
// billingCycleId int
// paymentTypeId int
