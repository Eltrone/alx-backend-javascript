// 4-payment.test.js
const sinon = require('sinon');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi using stub', function() {
    it('should use a stub to return 10 from calculateNumber', function() {
        const stub = sinon.stub(Utils, 'calculateNumber').returns(10);
        const consoleSpy = sinon.spy(console, 'log');

        sendPaymentRequestToApi(100, 20);

        expect(stub.calledWith('SUM', 100, 20)).to.be.true;
        expect(stub.calledOnce).to.be.true;
        expect(consoleSpy.calledWith('The total is: 10')).to.be.true;

        // Restore the original functions
        stub.restore();
        consoleSpy.restore();
    });
});
