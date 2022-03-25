'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Directory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Directory.init({
    ownerid: DataTypes.INTEGER,
    personid: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Directory',
  });
  return Directory;
};