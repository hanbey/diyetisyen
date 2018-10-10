/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('foto', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    musteri_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'kullanici',
        key: 'id'
      }
    },
    foto: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'foto'
  });
};
