const sequelize = require("../models/index");
const initModels = require("../models/init-models");
const model = initModels(sequelize);

const getFood = async (req, res) => {
  // let data = await model.food.findAll({
  //   include: ["type"],
  // });

  // let data = await model.food_type.findAll({
  //   include: ["foods"],
  // });

  // let data = await model.like_res.findAll({
  //   include: ["re", "user"],
  // });

  // let data = await model.user.findAll({
  //   include: ["res_id_restaurants"],
  // });

  let data = await model.restaurant.findAll({
    include: ["user_id_users"],
  });

  res.send(data);
};

module.exports = {
  getFood,
};
