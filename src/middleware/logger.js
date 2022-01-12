'use strict';

function logger(request,next) {
  console.log(request.method, request.path);
  next();
}

module.exports = logger;