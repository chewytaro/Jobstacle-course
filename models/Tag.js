const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Tag model
class Tag extends Model {}

// create fields/columns for Tag model
Tag.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'tag'
    }
  );

  module.exports = Tag;