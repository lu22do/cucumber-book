Feature: Cash Withdrawal
	Scenario: Successful withdrawal from an account in credit
		Given I have deposited $100 in my account
		When I withdraw $20
		Then $20 should be dispensed
		And the balance of my account should be $80

	Scenario: Failing withdrawal from an account with not enough credit
		Given I have deposited $100 in my account
		When I withdraw $120
		Then $0 should be dispensed
		And the balance of my account should be $100
