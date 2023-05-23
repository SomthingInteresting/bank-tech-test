const Transaction = require('./transaction');

class BankAccount {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  deposit(amount) {
    this.performTransaction(amount, 'credit');
  }

  withdraw(amount) {
    if (amount > this.balance) {
      throw new Error('Withdrawal amount exceeds the balance');
    }
    this.performTransaction(amount, 'debit');
  }

  createTransaction(amount, type) {
    const transaction = new Transaction(amount, type, this.balance);
    this.transactions.push(transaction);
  }

  updateBalance(amount, type) {
    this.balance += (type === 'credit') ? amount : -amount;
  }  

  performTransaction(amount, type) {
    this.#checkInvalidAmount(amount);
    this.updateBalance(amount, type);
    this.createTransaction(amount, type);
  }

  #checkInvalidAmount(amount) {
    if (amount <= 0 || typeof amount !== 'number') {
      throw new Error('Invalid amount');
    }
  }
}

module.exports = BankAccount;
