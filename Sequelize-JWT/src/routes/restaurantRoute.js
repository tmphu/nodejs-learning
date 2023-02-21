const express = require("express");
const restaurantRoute = express.Router();
const {
  addLike,
  removeLike,
  getLikesByRestaurant,
  getLikesByUser,
  addRating,
  removeRating,
  getRatingsByRestaurant,
  getRatingsByUser,
} = require("../controllers/restaurantController");

restaurantRoute.post("/addlike", addLike);
restaurantRoute.post("/removelike", removeLike);
restaurantRoute.get("/getlikesbyrestaurant/:id", getLikesByRestaurant);
restaurantRoute.get("/getlikesbyuser/:id", getLikesByUser);
restaurantRoute.post("/addrating", addRating);
restaurantRoute.post("/removerating", removeRating);
restaurantRoute.get("/getratingsbyrestaurant/:id", getRatingsByRestaurant);
restaurantRoute.get("/getratingsbyuser/:id", getRatingsByUser);

module.exports = restaurantRoute;
