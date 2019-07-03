'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Food', [{
        name: 'Apple',
        calories: 120,
        createdAt: new Date() ,
        updatedAt: new Date()
      },{
        name: 'Banana',
        calories: 140,
        createdAt: new Date() ,
        updatedAt: new Date()
      }], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Food', null, {});

  }
};
