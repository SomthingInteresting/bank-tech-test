class Statement {
  constructor(transactions) {
    this.transactions = transactions;
  }

  format() {
    let formattedStatement = 'date || credit || debit || balance\n';
    for (let transaction of this.transactions.reverse()) {
      formattedStatement += this.formatTransaction(transaction);
    }
    return formattedStatement;
  }

  formatTransaction(transaction) {
    let formattedDate = this.formatDate(transaction.datetime);
    let formattedAmount = this.formatAmount(transaction.amount);
    let formattedBalance = this.formatAmount(transaction.balance);

    return transaction.type === 'credit'
      ? `${formattedDate} || ${formattedAmount} || || ${formattedBalance}\n`
      : `${formattedDate} || || ${formattedAmount} || ${formattedBalance}\n`;
  }

  formatDate(datetime) {
    const date = new Date(datetime);
    let day = String(date.getDate()).padStart(2, '0');
    let month = String(date.getMonth() + 1).padStart(2, '0');
    let year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  formatAmount(amount) {
    return amount.toFixed(2);
  }
}

module.exports = Statement;
