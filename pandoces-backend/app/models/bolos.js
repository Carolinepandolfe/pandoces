'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bolos = sequelize.define('Bolos', {
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING,
    img_url: DataTypes.STRING,
    categoria: DataTypes.STRING
  }, {});
  Bolos.associate = function(models) {
    // associations can be defined here
  };
  return Bolos;
};