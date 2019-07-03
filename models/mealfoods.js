'use strict';
module.exports = (sequelize, DataTypes) => {
  const MealFoods = sequelize.define('MealFoods', {
    mealId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Meal',
        key: 'id'
      }
    },
    foodId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Food',
        key: 'id'
      }
    }
  }, {});
  MealFoods.associate = function(models) {
    // associations can be defined here
  };
  return MealFoods;
};
