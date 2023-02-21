const jwt = require('jsonwebtoken');
// generate token
const createToken = (data) => {
  let token = jwt.sign(data, 'ut23', { expiresIn: '10m' });
  return token;
};

// check token
const checkToken = (token) => {
  let isMatched = jwt.verify(token, 'ut23');
  return isMatched;
};

const verifyToken = (req, res, next) => {
  try {
    let { tokencybersoft } = req.headers;
    let checkTokenResult = checkToken(tokencybersoft);
    if (checkTokenResult) {
      next();
    }
  } catch (error) {
    res.status(401).send(error.message);
  }
};

module.exports = { createToken, checkToken, verifyToken };
