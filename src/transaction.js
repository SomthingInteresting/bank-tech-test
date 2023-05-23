class Transaction {
  constructor(amount, type, balance) {
    this.datetime = new Date().toISOString();
    this.amount = amount;
    this.type = type;
    this.balance = balance;
  }
}

module.exports = Transaction;