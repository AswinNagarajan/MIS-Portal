const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('store', 'root', 'Aswin@123', {
  host: 'localhost',
  dialect: 'mysql'
});


const Book = sequelize.define('book', {
  // Model attributes are defined here
  clientId: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  bookId: {
    type: DataTypes.INTEGER
    // allowNull defaults to true
  },
  formatId: {
    type: DataTypes.INTEGER
    // allowNull defaults to true
  },
  receivedDate: {
    type: DataTypes.DATE
    // allowNull defaults to true
  },
  estimatedDelivery: {
    type: DataTypes.DATE
    // allowNull defaults to true
  },
  pricePerPage: {
    type: DataTypes.INTEGER
    // allowNull defaults to true
  },
  totalPrice: {
      type: DataTypes.INTEGER
      // allowNull defaults to true
    },
    invoiced: {
      type: DataTypes.STRING
      // allowNull defaults to true
    },
    invoiceNo: {
      type: DataTypes.INTEGER
      // allowNull defaults to true
    },
    bookStatus:{
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
  }
},
{
  freezeTableName: true
});

Book.associate = (models) => {
Book.belongsTo(models.client);
};



// `sequelize.define` also returns the model
console.log(Book === sequelize.models.book); // true

module.exports = Book
