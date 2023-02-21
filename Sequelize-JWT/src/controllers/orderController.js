const sequelize = require("../models/index");
const initModels = require("../models/init-models");
const model = initModels(sequelize);

const addOrder = async (req, res) => {
  try {
    let { user_id, food_id, amount } = req.body;
    let data = await model.order.create({
      user_id,
      food_id,
      amount,
      code: null,
      arr_sub_id: null,
    });
    if (data) res.status(200).send("Success");
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  addOrder,
};
