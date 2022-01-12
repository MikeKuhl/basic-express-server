function serverError(err, response) {
  console.log(err);
  response.status(500).send(err);
}

module.exports = serverError;
