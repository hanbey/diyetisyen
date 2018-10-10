"use strict";

module.exports = (db, sequelize) => {

  db.kullanici = require("../models/kullanici")(db, sequelize);
  db.foto = require("../models/foto")(db, sequelize);
  db.kullanici_kilo = require("../models/kullanici_kilo")(db, sequelize);
  db.randevu = require("../models/randevu")(db, sequelize);
  db.statu = require("../models/statu")(db, sequelize);
  db.yetkilendirme = require("../models/yetkilendirme")(db, sequelize);
};
