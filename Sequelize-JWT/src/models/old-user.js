const { Sequelize, DataTypes, Model } = require("sequelize");
// const { sequelize } = require("./index");

const sequelize = new Sequelize("db_food", "root", "1234", {
  host: "localhost",
  port: "3306",
  dialect: "mysql", // he CSDL dang su dung
});

class User extends Model {}

User.init(
  {
    // dinh nghia thuoc tinh
    user_id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      //field: "user_id",     // mapping column name in DB if property name is different
    },
    full_name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          msg: "Email không đúng định dạng!",
        },
      },
    },
    pass_word: {
      type: DataTypes.STRING,
    },

    // sequelize tu dong them 2 column create_date va update_date
  },
  {
    // dinh nghia chuoi ket noi o file index.js
    sequelize,
    modelName: "User", // --> Users
    tableName: "user",
    timestamps: false, // disable auto add column "create_date", "update_date"
  }
);

module.exports = User;

// try {
//   sequelize.authenticate();
//   console.log("connection ok");
// } catch (err) {
//   console.error("error", err);
// }
