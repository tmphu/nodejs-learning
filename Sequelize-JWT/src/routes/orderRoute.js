const express = require("express");
const orderRoute = express.Router();

const { addOrder } = require("../controllers/orderController");

orderRoute.post("/addorder", addOrder);

module.exports = orderRoute;
