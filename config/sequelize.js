"use strict";

const Sequelize = require("sequelize");

const dbName = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USERNAME,
  process.env.DATABASE_PASSWORD,
  {
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    dialect: process.env.DATABASE_DIALECT,
    timezone: "+03:00",
    define: {
      underscored: true,
      timestamps: false
    },
    pool: {
      max: 100,
      min: 0,
      idle: 10000,
      acquire: 10000
    },
    logging: false
  }
);

module.exports.dbName = dbName;
module.exports.sequelize = Sequelize;
