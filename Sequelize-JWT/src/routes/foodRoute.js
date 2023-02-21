const express = require('express');
const foodRoute = express.Router();
const { getFood } = require('../controllers/foodController');
const { verifyToken } = require('../utils/jwtoken');

foodRoute.get('/getFood', verifyToken, getFood);

module.exports = foodRoute;
