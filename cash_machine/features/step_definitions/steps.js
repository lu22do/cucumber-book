var assert = require('assert');
var Account = require(process.cwd() + '/Account');
var Teller = require(process.cwd() + '/Teller');
var CashSlot = require(process.cwd() + '/CashSlot');

var CustomWorld = function() {
	this.account = new Account();
	this.cashSlot = new CashSlot();
	this.teller = new Teller(this.cashSlot);
};

module.exports = function() {
	this.World = CustomWorld;

	this.Given(/^I have deposited \$(\d+) in my account$/, function (arg1, callback) {
		var val = parseInt(arg1);
		this.account.deposit(val);
		assert.equal(this.account.getBalance(), val, 'New account should contain what was deposited');
		callback();
	});

	this.When(/^I withdraw \$(\d+)$/, function (arg1, callback) {
		var val = parseInt(arg1);
		this.teller.withdrawFrom(this.account, val);
		callback();
	});

	this.Then(/^\$(\d+) should be dispensed$/, function (arg1, callback) {
		var val = parseInt(arg1);
		assert.equal(this.cashSlot.getContent(), val, 'Cash slot should contain $' + val)
		callback();
	});

	this.Then(/^the balance of my account should be \$(\d+)$/, function (arg1, callback) {
		var val = parseInt(arg1);
		var balance = this.account.getBalance();
		assert.equal(balance, val, 'The account should contain $' + val + ' but it actually contains $' + balance);
		callback();
	});
};
