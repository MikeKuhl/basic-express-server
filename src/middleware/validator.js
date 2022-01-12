'use strict';

function validator(request, next) {
  const { name } = request.query;

  if (name) {
    request.name = name;
    next();
  } else {
    next('bad request');
  }
}

module.exports = validator;
