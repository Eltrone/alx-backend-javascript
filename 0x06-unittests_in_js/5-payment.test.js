// 5-payment.test.js
const sinon = require('sinon');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi with hooks', function() {
    let consoleSpy;

    beforeEach(function() {
        // Set up the spy before each test
        consoleSpy = sinon.spy(console, 'log');
    });

    afterEach(function() {
        // Restore the original function after each test
        consoleSpy.restore();
    });

    it('should log "The total is: 120" when called with 100 and 20', function() {
        sendPaymentRequestToApi(100, 20);
        expect(consoleSpy.calledWith('The total is: 120')).to.be.true;
        expect(consoleSpy.calledOnce).to.be.true;
    });

    it('should log "The total is: 20" when called with 10 and 10', function() {
        sendPaymentRequestToApi(10, 10);
        expect(consoleSpy.calledWith('The total is: 20')).to.be.true;
        expect(consoleSpy.calledOnce).to.be.true;
    });
});
