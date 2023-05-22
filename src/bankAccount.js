class BankAccount {
  constructor() {
    this.balance = 0;
  }

  deposit(amount) {
    this.#checkInvalidAmount(amount);
    this.balance += amount;
  }

  #checkInvalidAmount(amount) {
    if (amount < 0 || typeof amount !== 'number') {
      throw new Error('Invalid deposit amount');
    }
  }
}


module.exports = BankAccount;
