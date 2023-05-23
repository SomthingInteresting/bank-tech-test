class Transaction {
  constructor(amount, type, balance) {
    this.datetime = this.getCurrentDateTime();
    this.amount = this.validateAmount(amount);
    this.type = this.validateType(type);
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

  validateType(type) {
    if (typeof type !== 'string' || !['credit', 'debit'].includes(type)) {
      throw new Error('Type must be either "credit" or "debit".');
    }
    return type;
  }
}

module.exports = Transaction;