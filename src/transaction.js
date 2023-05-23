class Transaction {
  constructor(date, amount, type, balance) {
    this.date = date;
    this.amount = amount;
    this.type = type;
    this.balance = balance;
  }
}

module.exports = Transaction;