const HEADER = 'date || credit || debit || balance';

class Statement {
  constructor(transactions) {
    this.transactions = transactions;
  }

  format() {
    const formattedTransactions = this.transactions
      .slice()
      .sort((a, b) => new Date(b.datetime) - new Date(a.datetime))
      .map(transaction => this.formatTransactionLine(transaction))
      .join('\n');
      
    return formattedTransactions ? `${HEADER}\n${formattedTransactions}` : HEADER;
  }  

  formatTransactionLine({ datetime, amount, type, balance }) {
    const formattedDate = this.formatDate(datetime);
    const formattedAmount = this.formatAmount(amount);
    const formattedBalance = this.formatAmount(balance);

    return type === 'credit'
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
