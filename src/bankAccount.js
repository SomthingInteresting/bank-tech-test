const Transaction = require('./transaction');

class BankAccount {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  deposit(depositAmount) {
    this.#checkInvalidAmount(depositAmount);
    this.balance += depositAmount;

    const transaction = new Transaction(depositAmount, 'credit', this.balance);
    this.transactions.push(transaction);
  }

  #checkInvalidAmount(amount) {
    if (amount < 0 || typeof amount !== 'number') {
      throw new Error('Invalid amount');
    }
  }

  withdraw(withdrawalAmount) {
    this.#checkInvalidAmount(withdrawalAmount);

    if (withdrawalAmount > this.balance) {
      throw new Error('Withdrawal amount exceeds the balance');
    }

    this.balance -= withdrawalAmount;
  }
}

module.exports = BankAccount;
