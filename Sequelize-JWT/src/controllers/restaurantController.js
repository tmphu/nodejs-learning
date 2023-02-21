const sequelize = require("../models/index");
const initModels = require("../models/init-models");
const model = initModels(sequelize);

const addLike = async (req, res) => {
  try {
    let { user_id, res_id } = req.body;
    let data = await model.like_res.create({
      user_id,
      res_id,
      date_like: Date.now(),
    });
    if (data) res.status(200).send("Success");
  } catch (error) {
    res.status(500).send(error);
  }
};

const removeLike = async (req, res) => {
  try {
    let { user_id, res_id } = req.body;
    let data = await model.like_res.destroy({
      where: {
        user_id,
        res_id,
      },
    });
    if (data) res.status(200).send("Success");
  } catch (error) {
    res.status(500).send(error);
  }
};

const getLikesByRestaurant = async (req, res) => {
  try {
    let { id } = req.params;
    let data = await model.restaurant.findOne({
      include: ["user_id_users"],
      where: {
        res_id: id,
      },
    });
    if (data) res.status(200).send(data);
    else res.status(404).send("Not found");
  } catch (error) {
    res.status(500).send(error);
  }
};

const getLikesByUser = async (req, res) => {
  try {
    let { id } = req.params;
    let data = await model.user.findOne({
      include: ["res_id_restaurants"],
      where: {
        user_id: id,
      },
    });
    if (data) res.status(200).send(data);
    else res.status(404).send("Not found");
  } catch (error) {
    res.status(500).send(error);
  }
};

const addRating = async (req, res) => {
  try {
    let { user_id, res_id, amount } = req.body;
    let data = await model.rate_res.create({
      user_id,
      res_id,
      amount,
      date_rate: Date.now(),
    });
    if (data) res.status(200).send("Success");
  } catch (error) {
    res.status(500).send(error);
  }
};

const removeRating = async (req, res) => {
  try {
    let { user_id, res_id } = req.body;
    let data = await model.rate_res.destroy({
      where: {
        user_id,
        res_id,
      },
    });
    if (data) res.status(200).send("Success");
  } catch (error) {
    res.status(500).send(error);
  }
};

const getRatingsByRestaurant = async (req, res) => {
  try {
    let { id } = req.params;
    let data = await model.restaurant.findOne({
      include: ["user_id_user_rate_res"],
      where: {
        res_id: id,
      },
    });
    if (data) res.status(200).send(data);
    else res.status(404).send("Not found");
  } catch (error) {
    res.status(500).send(error);
  }
};

const getRatingsByUser = async (req, res) => {
  try {
    let { id } = req.params;
    let data = await model.user.findOne({
      include: ["res_id_restaurant_rate_res"],
      where: {
        user_id: id,
      },
    });
    if (data) res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  addLike,
  removeLike,
  getLikesByRestaurant,
  getLikesByUser,
  addRating,
  removeRating,
  getRatingsByRestaurant,
  getRatingsByUser,
};
