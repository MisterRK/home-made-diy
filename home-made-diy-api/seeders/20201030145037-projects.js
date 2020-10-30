'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Projects", [
      {
      title: "test project 1",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
      description: "This project was built using Vanilla JavaScript, HTML, and CSS",
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
      title: "test project 2",
      imageUrl: "https://www.stickpng.com/assets/images/584830f5cef1014c0b5e4aa1.png",
      description: "This project was built using React & a 3rd-party API.",
      userId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
      title: "test project 3",
      imageUrl: "https://expressjs.com/images/express-facebook-share.png",
      description: "This project was built using Express & React.",
      userId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
      title: "test project 4",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/16/Ruby_on_Rails-logo.png",
      description: "This project was built using Rails & React.",
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ])
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Projects', null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
