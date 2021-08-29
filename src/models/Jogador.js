const DataTypes = require('sequelize');
const db = require('../db');

const Jogador = db.define('jogador', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  nome: DataTypes.STRING,
  idade: DataTypes.SMALLINT,
  clube: DataTypes.STRING,
  posicao: DataTypes.STRING,
});
module.exports = Jogador;
