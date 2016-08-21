var CashSlot = function() {
	this.cash = 0;
}

CashSlot.prototype.getContent = function() {
	return this.cash;
}

CashSlot.prototype.dispense = function(amount) {
	this.cash = amount;
}

module.exports = CashSlot;