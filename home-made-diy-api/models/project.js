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
			Project.belongsTo(models.User, {
				foreignKey: "userId",
				onDelete: "CASCADE",
				as: "createdBy"
			});
		}
	}
	Project.init(
		{
			title: DataTypes.STRING,
			description: DataTypes.TEXT,
			userId: DataTypes.INTEGER,
			imageType: DataTypes.STRING,
			imageName: DataTypes.STRING,
			imageData: DataTypes.BLOB('long')
		},
		{
			sequelize,
			modelName: "Project",
		}
	);
	return Project;
};
