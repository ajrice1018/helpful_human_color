'use strict';
module.exports = (sequelize, DataTypes) => {
  const Colors = sequelize.define('Colors', {
    color: DataTypes.STRING,
    hex: DataTypes.STRING
  }, {});
  Colors.associate = function(models) {
    // associations can be defined here
  };
  return Colors;
};