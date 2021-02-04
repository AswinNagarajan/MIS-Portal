'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
//const env = process.env.NODE_ENV || 'development';
//const config = require(__dirname + '/../config/config.json')[env];
const db = {};

//const environmentConfig = require('../config/config.js');

// let sequelize;
// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
//   sequelize = new Sequelize(config.database, config.username, config.password, config);
// }

//Sequelize connection
let sequelize = new Sequelize('store', 'root', 'Aswin@123', {
  host: '127.0.0.1',
  dialect: 'mysql'
  // To Skip Deprecation Warning For String Opertors -> Symbol Operators
});

fs.readdirSync(__dirname).filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  }).forEach(file => {
    const model = require(path.join(__dirname, file))
    db[model.name] = model;
  });

// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });


sequelize.sync({
	//force: true
}).then(function (success) {
	console.log("Service Running At PORT " + 3306);
	var lengthKey = parseInt(Object.keys(db).length) - parseInt(2);
	console.log("Tables Created " + lengthKey);
}, function (err) {
	console.log(err);
	console.log("error");
});




db.sequelize = sequelize;
db.Sequelize = Sequelize;




module.exports = db;
