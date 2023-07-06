const { auth } = require("../middleware/auth");
const { verify } = require("jsonwebtoken");

async function auth(request, response, next) {
  try {
    const { authorization } = request.headers;
    verify(authorization, process.env.SECRET_JWT);
    next();
  } catch (error) {
    return response.status(401).send({
      message: "Autenticação falhou",
      cause: error.message,
    });
  }
}
module.exports = { auth };
