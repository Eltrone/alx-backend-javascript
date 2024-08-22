// 6-payment_token.test.js
const expect = require('chai').expect;
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function() {
    it('should return a resolved promise with a successful response when called with true', function(done) {
        getPaymentTokenFromAPI(true)
            .then(response => {
                expect(response).to.deep.equal({ data: 'Successful response from the API' });
                done();
            })
            .catch(err => {
                done(err);
            });
    });

    it('should not resolve or reject the promise when called with false', function(done) {
        this.timeout(5000); // Extend timeout for this test
        let wasCalled = false;
        
        getPaymentTokenFromAPI(false)
            .then(response => {
                wasCalled = true;
            })
            .catch(err => {
                wasCalled = true;
            });

        // Wait a set amount of time to check if the promise resolves or rejects
        setTimeout(() => {
            expect(wasCalled).to.be.false;
            done();
        }, 3000);
    });
});
