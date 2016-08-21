var Teller = function(cashSlot) {
	this.cashSlot = cashSlot;
}

Teller.prototype.withdrawFrom = function(account, amount) {
	if (account.debit(amount)) {
		this.cashSlot.dispense(amount);
	}
}

module.exports = Teller;
