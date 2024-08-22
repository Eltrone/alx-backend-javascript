// 3-payment.test.js
const sinon = require('sinon');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function() {
    it('should call calculateNumber with "SUM", 100, and 20', function() {
        const spy = sinon.spy(Utils, 'calculateNumber');
        sendPaymentRequestToApi(100, 20);

        expect(spy.calledWith('SUM', 100, 20)).to.be.true;
        expect(spy.calledOnce).to.be.true;

        // Output the console log to verify it's printing correctly
        console.log(spy.returnValues[0]);

        // Restore the original function to avoid side effects
        spy.restore();
    });
});
