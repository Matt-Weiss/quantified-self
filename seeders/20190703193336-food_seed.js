'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      queryInterface.bulkInsert('Foods', [{
        name: 'Apple',
        calories: 120,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'Banana',
        calories: 140,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'Tuna Sandwich',
        calories: 500,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'Qdoba',
        calories: 1500,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});

      queryInterface.bulkInsert('Meals', [{
        name: 'Breakfast',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'Lunch',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});

      return queryInterface.bulkInsert('MealFoods', [{
        foodId: 1,
        mealId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        foodId: 1,
        mealId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        foodId: 2,
        mealId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        foodId: 3,
        mealId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        foodId: 4,
        mealId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Foods', null, {});
      return queryInterface.bulkDelete('Meals', null, {});
      return queryInterface.bulkDelete('FoodMeals', null, {});

  }
};
