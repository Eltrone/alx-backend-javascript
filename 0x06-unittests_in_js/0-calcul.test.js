const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
    it('should return 4 when input is 1 and 3', function() {
        assert.strictEqual(calculateNumber(1, 3), 4);
    });
    it('should return 5 when input is 1 and 3.7', function() {
        assert.strictEqual(calculateNumber(1, 3.7), 5);
    });
    it('should return 0 when input is 0.1 and 0.2', function() {
        assert.strictEqual(calculateNumber(0.1, 0.2), 0);
    });
    it('should return -5 when input is -2.5 and -2.5', function() {
        assert.strictEqual(calculateNumber(-2.5, -2.5), -5);
    });
    it('should handle large numbers correctly', function() {
        assert.strictEqual(calculateNumber(1000.4, 2000.5), 3001);
    });
});

