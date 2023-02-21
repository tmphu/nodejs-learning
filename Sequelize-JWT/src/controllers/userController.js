// error 200, 400, 500

// const User = require("../models/user");
const sequelize = require('../models/index');
const initModels = require('../models/init-models');
const model = initModels(sequelize);
const { successCode, failCode, errorCode } = require('../config/response');
const bcrypt = require('bcrypt');
const { createToken } = require('../utils/jwtoken');

// get all
const getUser = async (req, res) => {
  try {
    // SELECT * FROM user;
    let data = await model.user.findAll(); // --> list object [{}]

    successCode(res, data, 'Lấy danh sách user thành công!');
  } catch (err) {
    errorCode(res, 'Lỗi server!');
  }
};

// get id
const getUserId = async (req, res) => {
  try {
    let { id } = req.params;

    let dataOne = await model.user.findOne({
      where: {
        user_id: id,
      },
    }); // --> object {}

    if (dataOne) successCode(res, dataOne, 'Lấy user thành công!');
    else failCode(res, null, 'User không tồn tại!');
  } catch (err) {
    errorCode(res, 'Lỗi server!');
  }
};

const createUser = async (req, res) => {
  try {
    let { full_name, email, pass_word } = req.body;

    let payload = {
      full_name,
      email,
      pass_word,
    };

    let data = await model.user.create(payload);
    if (data) successCode(res, data, 'Tạo user thành công!');
  } catch (err) {
    errorCode(res, 'Lỗi server!');
  }
};

const updateUser = async (req, res) => {
  try {
    let { id } = req.params;

    let dataOne = await model.user.findOne({
      where: {
        user_id: id,
      },
    });

    if (dataOne) {
      let { full_name, email, pass_word } = req.body;

      let payload = {
        full_name,
        email,
        pass_word,
      };

      // UPDATE user SET ... WHERE user_id = id
      let data = await model.user.update(payload, {
        where: {
          user_id: id,
        },
      });

      successCode(res, data, 'Cập nhật user thành công!');
    } else failCode(res, null, 'User không tồn tại!');
  } catch (err) {
    errorCode(res, 'Lỗi server!');
  }
};

const deleteUser = async (req, res) => {
  try {
    let { id } = req.params;

    let dataOne = await model.user.findOne({
      where: {
        user_id: id,
      },
    });

    if (dataOne) {
      await model.user.destroy({
        where: {
          user_id: id,
        },
      });
      successCode(res, null, 'Xóa user thành công!');
    } else failCode(res, null, 'User không tồn tại!');
  } catch (err) {
    errorCode(res, 'Lỗi server!');
  }
};

const signUp = async (req, res) => {
  try {
    let { full_name, email, pass_word } = req.body;

    let payload = {
      full_name,
      email,
      pass_word: bcrypt.hashSync(pass_word, 10),
    };

    let data = await model.user.create(payload);
    if (data) successCode(res, data, 'Tạo user thành công!');
  } catch (err) {
    errorCode(res, 'Lỗi server!');
  }
};

const logIn = async (req, res) => {
  try {
    let { email, pass_word } = req.body;
    let checkUser = await model.user.findOne({
      where: {
        email,
      },
    });
    if (checkUser) {
      let checkPass = bcrypt.compareSync(pass_word, checkUser.pass_word);
      if (checkPass) {
        let token = createToken(checkUser.dataValues);
        successCode(res, token, 'Đăng nhập thành công!');
      } else {
        failCode(res, null, 'Mật khẩu không đúng!');
      }
    } else {
      failCode(res, null, 'User không tồn tại!');
    }
  } catch (err) {
    errorCode(res, 'Lỗi server!');
  }
};

module.exports = {
  getUser,
  getUserId,
  createUser,
  updateUser,
  deleteUser,
  logIn,
  signUp,
};
