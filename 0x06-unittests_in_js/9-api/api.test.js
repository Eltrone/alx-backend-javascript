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

  // Suite de tests pour /cart/:id
  describe('GET /cart/:id', () => {
    it('should respond with HTTP status 200 for numeric id', (done) => {
      chai.request('http://localhost:7865')
        .get('/cart/123')
        .end((error, response) => {
          expect(error).to.be.null;
          expect(response).to.have.status(200);
          expect(response.text).to.equal('Payment methods for cart 123');
          done();
        });
    });

    it('should respond with HTTP status 404 for non-numeric id', (done) => {
      chai.request('http://localhost:7865')
        .get('/cart/abc')
        .end((error, response) => {
          expect(error).to.be.null;
          expect(response).to.have.status(404);
          done();
        });
    });
  });
});
