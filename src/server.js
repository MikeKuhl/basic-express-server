'use strict';

const express = require('express');
const app = express();
const logger = require('./middleware/logger.js');
const validator = require('./middleware/validator.js');
const serverError = require('./error-handlers/500.js');
const notFound = require('./error-handlers/404.js');
// const createName = require('./middleware/creator.js');

app.use(logger);

app.get('/person', validator, (request, response) => {
  response.status(200).send(request.name);
});

app.use(serverError);
app.use(notFound);

module.exports = {
  start: (port) => {
    app.listen(port, () => {
      console.log('Server is listening on port: ' + port);
    });
  },
  app,
};
