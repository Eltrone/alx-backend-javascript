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

  // Tests pour /available_payments
  describe('GET /available_payments', () => {
    it('should return correct payment method object', (done) => {
      chai.request('http://localhost:7865')
        .get('/available_payments')
        .end((error, response) => {
          expect(error).to.be.null;
          expect(response).to.have.status(200);
          expect(response.body).to.deep.equal({
            payment_methods: {
              credit_cards: true,
              paypal: false
            }
          });
          done();
        });
    });
  });

  // Tests pour POST /login
  describe('POST /login', () => {
    it('should welcome the user by name', (done) => {
      chai.request('http://localhost:7865')
        .post('/login')
        .send({ userName: "Betty" })
        .set('content-type', 'application/json')
        .end((error, response) => {
          expect(error).to.be.null;
          expect(response).to.have.status(200);
          expect(response.text).to.equal('Welcome Betty');
          done();
        });
    });
  });
});
