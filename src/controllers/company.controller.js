const { Company } = require("../models/company");

class CompanyController {
  async createOneCompany(request, response) {
    try {
      const {
        id,
        cnpj,
        company_name,
        contact,
        cep,
        address,
        neighborhood,
        city,
        state,
        number,
        complement,
        rh_analyst_name,
        supervisor_name,
        created_at,
        updated_at,
      } = request.body;

      const data = await Company.create({
        id,
        cnpj,
        company_name,
        contact,
        cep,
        address,
        neighborhood,
        city,
        state,
        number,
        complement,
        rh_analyst_name,
        supervisor_name,
        created_at,
        updated_at,
      });

      return response.status(201).send(data);
    } catch (error) {
      console.error(error.message);
      return response.status(400).send({
        message: "Não foi possível criar um registro de empresa",
        cause: error.message,
      });
    }
  }

  async listCompany(request, response) {
    const data = await Company.findAll();

    return response.status(200).send(data);
  }

  async listOneCompany(request, response) {
    const { id } = request.params;
    const data = await Company.findByPk(id);

    return response.status(200).send(data);
  }
}

module.exports = new CompanyController();
