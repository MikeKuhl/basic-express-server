'use strict';

const server = require('../src/server.js');
const supertest = require('supertest');
const request = supertest(server.app);

describe('Testing Validator', () => {
  it('Should return 500 if no name in the query string', async () => {
    const response = await request.get('/person');

    expect(response.status).toEqual(500);
  });

  it('Should 200 if the name is in the query string', async () => {
    const response = await request.get('/person?name=Bob');

    expect(response.status).toEqual(200);
  });
});
