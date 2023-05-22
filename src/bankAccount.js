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

  withdraw(withdrawalAmount) {
    this.#checkInvalidAmount(withdrawalAmount);

    if (withdrawalAmount > this.balance) {
      throw new Error('Withdrawal amount exceeds the balance');
    }

    this.balance -= withdrawalAmount;
  }
}

module.exports = BankAccount;
