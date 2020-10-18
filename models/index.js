'use strict';

const fs        = require('fs');
const path      = require('path');
const Sequelize = require('sequelize');
const basename  = path.basename(module.filename);

const config = require("../config/config");
const db        = {};

// recomend to consolw.log config 
console.log(config);

const sequelize = new Sequelize(config.db.database, config.db.username, config.db.password, {
  dialect:"mysql",
  host:config.db.host
});


fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(function(file) {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});



db.sequelize = sequelize;
db.Sequelize = Sequelize;

// database connection error 
// sequelize 
// .authenticate()
// .then(() => {
//   console.log("Connection has been established successfully.");
// }) 
// .catch(err => {
//   console.error("Unable to connect to the database:", err);
// });

module.exports = db;
