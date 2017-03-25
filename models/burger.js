module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger",
  {
    burger_name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        len: [1,200]
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }

  });
  return Burger;
}
