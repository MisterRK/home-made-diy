"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
	class Step extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Step.belongsTo(models.Project, {
				foreignKey: "projectId",
				onDelete: "CASCADE",
			});
		}
	}
	Step.init(
		{
			title: DataTypes.STRING,
			content: DataTypes.TEXT,
			order: DataTypes.INTEGER,
			projectId: DataTypes.INTEGER,
			imageType: DataTypes.STRING,
			imageName: DataTypes.STRING,
			imageData: DataTypes.BLOB("long"),
		},
		{
			sequelize,
			modelName: "Step",
		}
	);
	return Step;
};
