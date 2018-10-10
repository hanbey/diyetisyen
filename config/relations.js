"use strict";

module.exports = (db, sequelize) => {
  // belongs relation defining
  db.kullanici.belongsTo(db.yetkilendirme, {
    foreignKey: "yetkilendirme_id"
  });

  db.yetkilendirme.hasMany(db.kullanici,{
    foreignKey : "yetkilendirme_id"
  });

  // hasmany relation defining
  db.kullanici.hasMany(db.randevu, {
    foreignKey: "kullanici_id"
  });


};
