const { Sequelize, DataTypes } = require("sequelize");

//Establishing the database conection...
const db = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "juan2020",
  port: 5432,
  database: "blogs",
  logging: false,
});

//exporting const db...
module.exports = { db, DataTypes };
