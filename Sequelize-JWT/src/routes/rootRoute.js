const express = require("express");
const rootRoute = express.Router();

const userRoute = require("./userRoute");
const foodRoute = require("./foodRoute");
const restaurantRoute = require("./restaurantRoute");
const orderRoute = require("./orderRoute");

// su dung middleware cua express
rootRoute.use("/user", userRoute);
rootRoute.use("/food", foodRoute);
rootRoute.use("/restaurant", restaurantRoute);
rootRoute.use("/order", orderRoute);

// product
// rootRoute.use("/product", productRoute);

module.exports = rootRoute;
