class Statement {
  constructor(transactions) {
    this.transactions = transactions;
  }

  format() {
    const header = 'date || credit || debit || balance';
    const formattedTransactions = this.transactions
      .slice()
      .reverse()
      .map(transaction => this.formatTransaction(transaction))
      .join('\n');
      
    return formattedTransactions ? `${header}\n${formattedTransactions}` : header;
  }  

  formatTransaction(transaction) {
    const formattedDate = this.formatDate(transaction.datetime);
    const formattedAmount = this.formatAmount(transaction.amount);
    const formattedBalance = this.formatAmount(transaction.balance);

    return transaction.type === 'credit'
      ? `${formattedDate} || ${formattedAmount} || || ${formattedBalance}`
      : `${formattedDate} || || ${formattedAmount} || ${formattedBalance}`;
  }

  formatDate(datetime) {
    const date = new Date(datetime);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  formatAmount(amount) {
    return amount.toFixed(2);
  }
}

module.exports = Statement;
