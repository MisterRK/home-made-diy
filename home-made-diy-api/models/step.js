'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class step extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      step.belongsTo(models.Project, {
        foreignKey: "projectId",
				onDelete: "CASCADE"
      })
    }
  };
  step.init({
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    order: DataTypes.INTEGER,
    projectId: DataTypes.INTEGER,
    imageType: DataTypes.STRING,
    imageName: DataTypes.STRING,
    imageData: DataTypes.BLOB('long')
  }, {
    sequelize,
    modelName: 'step',
  });
  return step;
};