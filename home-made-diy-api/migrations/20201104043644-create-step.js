"use strict";
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("Steps", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			title: {
				type: Sequelize.STRING,
			},
			content: {
				type: Sequelize.TEXT,
			},
			order: {
				type: Sequelize.INTEGER,
			},
			projectId: {
				type: Sequelize.INTEGER,
				onDelete: "CASCADE",
				references: {
					model: "Projects",
					key: "id",
					as: "projectId",
				},
			},
			imageType: {
				type: Sequelize.STRING,
			},
			imageName: {
				type: Sequelize.STRING,
			},
			imageData: {
				type: Sequelize.BLOB,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("steps");
	},
};
