const { connection } = require("../database/connection");
const { STRING, DATE } = require("sequelize");

const category = connection.define("category", {
  name: STRING,
  created_at: DATE,
  update_at: DATE,
});

module.exports = {
  category,
};
