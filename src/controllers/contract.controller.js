const { Contract } = require("../models/contracts");

class ContractController {
  async createOneContract(request, response) {
    try {
      const { traineeid, categoryId, companyId, startValidity, endValidity } =
        request.body;

      const data = await Contract.create({
        traineeid,
        categoryId,
        companyId,
        startValidity,
        endValidity,
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

  async listContract(request, response) {
    const data = await Company.findAll();

    return response.status(200).send(data);
  }

  async listOneContract(request, response) {
    const { id } = request.params;
    const data = await Contract.findByPk(id);

    return response.status(200).send(data);
  }
}

module.exports = new ContractController();
