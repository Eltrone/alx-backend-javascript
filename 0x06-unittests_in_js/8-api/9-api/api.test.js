const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const server = require('./api'); // Ensure this is properly set up to import your Express app

chai.use(chaiHttp);

describe('API Endpoint Testing', () => {
    after(() => {
      server.close(); // Properly close the server after tests
    });

    it('should successfully respond with HTTP status 200 when accessing GET /', (done) => {
        chai.request(server)
            .get('/')
            .end((error, response) => {
                expect(error).to.be.null;
                expect(response).to.have.status(200);
                done();
            });
    });

    it('should return the message "Welcome to the payment system" on GET /', (done) => {
        chai.request(server)
            .get('/')
            .end((error, response) => {
                expect(error).to.be.null;
                expect(response.text).to.equal('Welcome to the payment system');
                done();
            });
    });

    // Test suite for new cart endpoint
    describe('Cart Endpoint', () => {
        it('should return "Payment methods for cart 12" when id is a number', (done) => {
            chai.request(server)
                .get('/cart/12')
                .end((error, response) => {
                    expect(error).to.be.null;
                    expect(response.text).to.equal('Payment methods for cart 12');
                    expect(response).to.have.status(200);
                    done();
                });
        });

        it('should return a 404 status code when id is NOT a number', (done) => {
            chai.request(server)
                .get('/cart/hello')
                .end((error, response) => {
                    expect(response).to.have.status(404);
                    done();
                });
        });
    });
});
