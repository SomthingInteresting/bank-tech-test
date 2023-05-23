class Transaction {
  constructor(amount, type, balance) {
    this.datetime = this.getCurrentDateTime();
    this.amount = amount;
    this.type = type;
    this.balance = balance;
  }

  getCurrentDateTime() {
    return new Date().toISOString();
  }
}

module.exports = Transaction;