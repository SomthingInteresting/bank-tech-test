class BankAccount {
  constructor() {
    this.balance = 0;
  }

  deposit(amount) {
    if (amount < 0 || typeof amount !== 'number') {
      throw new Error('Invalid deposit amount');
    }
    this.balance += amount;
  }
}

module.exports = BankAccount;
