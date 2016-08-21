var assert = require('assert');
var Calc = require(process.cwd() + '/calculator.js');

module.exports = function () {
  this.Given(/^the input "([^"]*)"$/, function (arg1, callback) {
    Calc.set(arg1);
    callback();
   });

   this.When(/^the calculator is run$/, function (callback) {
    callback();
   });

   this.Then(/^the output should be "([^"]*)"$/, function (arg1, callback) {
    assert.equal(Calc.getResult(), 4, 'Should be 4');
    callback();
   });
};
