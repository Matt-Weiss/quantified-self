'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      queryInterface.bulkInsert('Food', [{
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
        food_id: 1,
        meal_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        food_id: 1,
        meal_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        food_id: 2,
        meal_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        food_id: 3,
        meal_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        food_id: 4,
        meal_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Food', null, {});
      return queryInterface.bulkDelete('Meals', null, {});
      return queryInterface.bulkDelete('FoodMeals', null, {});

  }
};
