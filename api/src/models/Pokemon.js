const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id:{
      type: DataTypes.UUID,
      defaulValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    HP: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    STRENGTH:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    SPEED:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    HEIGHT:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    WEIGHT:{
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },{timestamps: false});
};
