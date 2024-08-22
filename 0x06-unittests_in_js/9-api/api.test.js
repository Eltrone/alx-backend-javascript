//api.test.js
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);

describe('API server', () => {
  it('should respond with status code 200 for GET /cart/12 (valid ID)', (done) => {
    chai.request('http://localhost:7865')
      .get('/cart/12')
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.text).to.contain('Payment methods for cart 12');
        done();
      });
  });

  it('should respond with status code 404 for GET /cart/hello (invalid ID)', (done) => {
    chai.request('http://localhost:7865')
      .get('/cart/hello')
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(404);
        expect(res.text).to.equal('Invalid cart ID');
        done();
      });
  });
});
