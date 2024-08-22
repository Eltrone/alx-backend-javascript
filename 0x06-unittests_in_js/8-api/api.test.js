// api.test.js
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);

describe('API Endpoint Testing', () => {
  it('should successfully respond with HTTP status 200 when accessing GET /', (done) => {
    chai.request('http://localhost:7865')
      .get('/')
      .end((error, response) => {
        expect(error).to.be.null;
        expect(response).to.have.status(200);
        done();
      });
  });

  it('should return the message "Welcome to the payment system" on GET /', (done) => {
    chai.request('http://localhost:7865')
      .get('/')
      .end((error, response) => {
        expect(error).to.be.null;
        expect(response.text).to.equal('Welcome to the payment system');
        done();
      });
  });
});
