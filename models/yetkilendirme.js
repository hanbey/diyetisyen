/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('yetkilendirme', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    isim: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    yetki: {
      type: DataTypes.INTEGER(255),
      allowNull: false
    }
  }, {
    tableName: 'yetkilendirme'
  });
};
