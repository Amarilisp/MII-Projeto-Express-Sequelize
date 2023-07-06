async function loggin(request, response, next) {
  console.log(request);
  console.log("Log registrado no sistema");
  next();
}

module.exports = { loggin };
