require("../controllers/category.controller");
const { Router } = require("express");

class ContractRouter {
  routesFromContract() {
    const contractRoutes = Router();
    contractRoutes.post("/createOneContract", createOneContract);
    contractRoutes.get("/listContract/:offset/:limit", listContracts);
    contractRoutes.get("/listOneContract/:id", listOneContract);

    return contractRoutes;
  }
}

module.exports = new ContractRouter();
