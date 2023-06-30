const { STRING, DATE, INTEGER } = require("sequelize");
const { connection } = require("../database/connection");
const { Trainee } = require("../models/trainee");
const { Company } = require("../models/company");
const { Category } = require("./category");

const Contracts = connection.define(
  "contracts",
  {
    traineeId: {
      type: INTEGER,
      references: {
        model: Trainee,
        key: "id",
      },
    },
    CategoryId: {
      type: INTEGER,
      references: {
        model: Category,
        key: "id",
      },
    },
    companyId: {
      type: INTEGER,
      references: {
        model: Company,
        key: "id",
      },
    },
  },
  { underscored: true, paranoid: true }
);
Contracts.belongsTo(Trainee);
Contracts.belongsTo(Category);
Contracts.belongsTo(Company);
module.exports = {
  Contracts,
};
