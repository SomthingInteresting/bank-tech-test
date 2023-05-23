class Transaction {
  constructor(amount, type, balance) {
    this.datetime = this.getCurrentDateTime();
    this.amount = this.validateAmount(amount);
    this.type = type;
    this.balance = balance;
  }

  getCurrentDateTime() {
    return new Date().toISOString();
  }

  validateAmount(amount) {
    if (typeof amount !== 'number' || amount <= 0) {
      throw new Error('Amount must be a positive number.');
    }
    return amount;
  }
}

module.exports = Transaction;