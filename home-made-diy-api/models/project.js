"use strict";
const { Model, DataTypes } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Project extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
      // define association here
      Project.belongsTo(model.User, {
        foreignKey: 'userId',
        onDelete: "CASCADE"
      })
		}
	}
	Project.init(
		{
			title: DataTypes.STRING,
			imageUrl: DataTypes.STRING,
			description: DataTypes.TEXT,
			userId: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "Project",
		}
	);
	return Project;
};

