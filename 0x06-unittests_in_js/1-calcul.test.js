// 1-calcul.test.js
const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
    describe('SUM operation', function() {
        it('should add two rounded integers', function() {
            assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
        });
    });

    describe('SUBTRACT operation', function() {
        it('should subtract the second rounded integer from the first', function() {
            assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
        });
    });

    describe('DIVIDE operation', function() {
        it('should divide the first rounded integer by the second rounded integer', function() {
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
        });

        it('should return "Error" when attempting to divide by zero', function() {
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
        });
    });

    describe('Error handling', function() {
        it('should return "Invalid operation" for unknown operations', function() {
            assert.strictEqual(calculateNumber('MULTIPLY', 1.4, 4.5), 'Invalid operation');
        });
    });
});
