const server = require('../src/server.js');
const supertest = require('supertest');
const request = supertest(server.app);

describe('Testing Server', () => {
  it('Should 404 for bad routes', async () => {
    const response = await request.get('/');

    expect(response.status).toEqual(404);
  });

  it('Should 404 on a bad method', async () => {
    const response = await request.get('/hello');

    expect(response.status).toEqual(404);
  });
});
