/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('randevu', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    tarih: {
      type: DataTypes.DATE,
      allowNull: false
    },
    kullanici_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'kullanici',
        key: 'id'
      }
    },
    olusturma_tarihi: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    statu: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'statu',
        key: 'id'
      }
    },
    ucret: {
      type: "DOUBLE(255,0)",
      allowNull: false
    },
    is_paid: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    tableName: 'randevu'
  });
};
