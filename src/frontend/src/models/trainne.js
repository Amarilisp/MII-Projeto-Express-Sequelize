// continuação da atividade 04
const { connection } = require("../database/connection");
const { STRING, DATE, BOOLEAN } = require("sequilize");
const Trainne = connection.define("trainne", {
  name: STRING,
  email: STRING,
  rg: {
    type: STRING,
    unique: true,
  },
  cpf: {
    type: STRING,
    unique: true,
  },
  primary_phone_contact: STRING,
  secundary_phone_contact: STRING,
  date_birth: DATE,
  father_name: STRING,
  mother_nome: STRING,
  have_special_needs: BOOLEAN,
  created_at: DATE,
  updated_at: DATE,
});

module.exports = { Trainne };
