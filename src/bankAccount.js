class BankAccount {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  deposit(depositAmount) {
    this.#checkInvalidAmount(depositAmount);
    this.balance += depositAmount;
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
