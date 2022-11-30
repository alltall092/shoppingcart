const { Sequelize } = require("sequelize");
require("dotenv").config();

const db = new Sequelize({
  database: process.env.DB_NAME || "carrito",
  username: process.env.DB_USER || "julio",
  host: process.env.DB_HOST || "localhost",
  password: process.env.DB_PASSWORD || 120786,
  dialect: "postgres",
  logging: false,
});

module.exports = db;
