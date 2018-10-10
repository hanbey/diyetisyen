/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('kullanici', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement : true
    },
    isim: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    dogum_tarihi: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    tel_no: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    cinsiyet: {
      type: DataTypes.STRING(6),
      allowNull: false
    },
    olusturma_tarihi: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    hedef: {
      type: "DOUBLE(255,0)",
      allowNull: true
    },
    kullanici_adi: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    sifre: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    yetkilendirme_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'yetkilendirme',
        key: 'id'
      }
    }
  }, {
    tableName: 'kullanici'
  });
};
