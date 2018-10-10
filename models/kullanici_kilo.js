/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('kullanici_kilo', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    kilo: {
      type: "DOUBLE",
      allowNull: false
    },
    musteri_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'kullanici',
        key: 'id'
      }
    }
  }, {
    tableName: 'kullanici_kilo'
  });
};
