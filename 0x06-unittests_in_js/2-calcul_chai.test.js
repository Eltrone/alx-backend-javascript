// 2-calcul_chai.test.js
const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber using Chai', function() {
    describe('SUM operation', function() {
        it('should add two rounded integers', function() {
            expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
        });
    });

    describe('SUBTRACT operation', function() {
        it('should subtract the second rounded integer from the first', function() {
            expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
        });
    });

    describe('DIVIDE operation', function() {
        it('should divide the first rounded integer by the second rounded integer', function() {
            expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.be.closeTo(0.2, 0.1);
        });

        it('should return "Error" when attempting to divide by zero', function() {
            expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
        });
    });

    describe('Error handling', function() {
        it('should return "Invalid operation" for unknown operations', function() {
            expect(calculateNumber('MULTIPLY', 1.4, 4.5)).to.equal('Invalid operation');
        });
    });
});
