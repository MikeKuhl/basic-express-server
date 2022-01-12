'use strict';

class Person {
  constructor(name) {
    this.name = name;
  }
}

function createName(request, response) {
  let { name } = request.body;

  let person = new Person(name);

  response.send(person);
}

module.exports = createName;
