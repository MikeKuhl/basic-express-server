'use strict';
function notFound(req, res, next) {
  console.error('Error! 404d');
  res.status(404).send('Not Found');
}
module.exports = notFound;
