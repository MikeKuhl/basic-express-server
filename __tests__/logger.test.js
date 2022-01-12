'use strict';

const server = require('../src/server.js');
const supertest = require('supertest');
const request = supertest(server.app);

describe('Test logging', () => {
  it('given an name in the query string, the output object is correct', async () => {
    const response = await request.get('/person?name=Bob');

    expect(response.text).toEqual('Bob');
  });
});
