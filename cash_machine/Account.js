var Account = function() {
	this.balance = 0;
}

Account.prototype.deposit = function(amount) {
	this.balance += amount;
//	console.log("account balance=" + this.balance);
}

Account.prototype.debit = function(amount) {
	if (this.balance > amount) {
		this.balance -= amount;
		return true;
	}
	else {
		return false;
	}
}


Account.prototype.getBalance = function() {
	return this.balance;
}

module.exports = Account;
