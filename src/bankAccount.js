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
      throw new Error('Invalid amount');
    }
  }

  withdraw(amount) {
    this.#checkInvalidAmount(amount);
    if (this.balance < amount) {
      throw new Error('Insufficient balance');
    }
    this.balance -= amount;
  }
}

module.exports = BankAccount;
