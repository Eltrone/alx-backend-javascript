// api.test.js
// api.test.js updated to use ES Module syntax
import chai from 'chai';
import chaiHttp from 'chai-http';
const expect = chai.expect;

chai.use(chaiHttp);

describe('API server', () => {
  it('should respond with status code 200 (OK) for GET /', async () => {
    const res = await chai.request('http://localhost:7865').get('/');
    expect(res).to.have.status(200);
  });

  it('should respond with "Welcome to the payment system" for GET /', async () => {
    const res = await chai.request('http://localhost:7865').get('/');
    expect(res.text).to.equal('Welcome to the payment system');
  });
});
