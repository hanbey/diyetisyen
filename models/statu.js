/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('statu', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    tamamlandi: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    iptal: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    erteleme: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'statu'
  });
};
