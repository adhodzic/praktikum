var assert = require('assert');
const fizzBuzz = require("../fizzBuzz");
describe('fizz buz problem', function () {
    it('fizzBuzz should be a function', function () {
        fizzBuzz();
    });
    it('if devideable with number 3 output fizz', function () {
        let result = fizzBuzz(3);
        assert.equal(result, 'fizz')
    });
    it('if devideable with number 5 output buzz', function () {
        let result = fizzBuzz(5);
        assert.equal(result, 'buzz')
    });
});

//R-G-R