'use strict';
module.exports = (sequelize, DataTypes) => {
  const Meal = sequelize.define('Meal', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Meal.associate = function(models) {
    Meal.belongsToMany(models.Food,{
      through: 'MealFoods',
      as: 'foods',
      foreignKey: 'meal_id'
    })
  };
  return Meal;
};
