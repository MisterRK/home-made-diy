'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      firstName: "Robert",
      lastName: "Keller",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: "Test 1",
      lastName: "User 1",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: "Test 2",
      lastName: "User 2",
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelet('Users', null, {})
  }
};
