const express = require("express"); //Framework da aplicação
const cors = require("cors"); // Biblioteca utilizada para inserir headers http
// const app = express(); // Instância da aplicação para usarmos as devidas funções
// const PORT = 3333; // Valor da porta do servidor
// app.use(cors()); // Utilização da função cors dentro do servidor
// app.use(express.json()); // Habilitar entrada de dados como json no servidor
// app.listen(PORT, () => console.log(`Servidor executando na porta ${PORT}`)); // Execução do servidor

const { connection } = require("./database/connection"); // Configuração de acesso ao banco de dados

class Server {
  constructor(server = express()) {
    this.middlewares(server);
    this.database();
    this.initializeServer(server);
  }
  async middlewares(app) {
    app.use(cors()); // Utilização da função cors dentro do servidor
    app.use(express.json()); // Habilitar entrada de dados como json no servidor
  }
  async database() {
    try {
      await connection.authenticate();
      console.log("Conexão bem sucedida!");
    } catch (error) {
      console.error("Não foi possível conectar no banco de dados.", error);
    }
  }
  async initializeServer(app) {
    const PORT = 3333; // Valor da porta do servidor
    app.listen(PORT, () => console.log(`Servidor executando na porta ${PORT}`)); // Execução do servidor
  }
}
module.exports = { Server };
