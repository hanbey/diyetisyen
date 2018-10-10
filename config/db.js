"use strict";

const { dbName, sequelize } = require("./sequelize");

require("./tables")(dbName, sequelize);
require("./relations")(dbName, sequelize);

module.exports.db = dbName;
module.exports.sequelize = sequelize;
