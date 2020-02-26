'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cake = sequelize.define('Cake', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    image: DataTypes.STRING,
    category: DataTypes.STRING
  }, {});
  Cake.associate = function(models) {
    // associations can be defined here
  };
  return Cake;
};