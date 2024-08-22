// api.test.js
const chai = require('chai');
const request = require('request');
const expect = chai.expect;
const server = require('./api'); // Import server for testing

describe('Index page', function() {
    // Ensure that server is closed after tests are finished
    after(function() {
        server.close();
    });

    it('should return status code 200 for GET /', function(done) {
        request.get('http://localhost:7865', function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });

    it('should return correct message for GET /', function(done) {
        request.get('http://localhost:7865', function(error, response, body) {
            expect(body).to.equal('Welcome to the payment system');
            done();
        });
    });
});
