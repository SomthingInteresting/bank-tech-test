const Transaction = require('../src/transaction');

describe('Transaction', () => {
  it('should create a new transaction with a date, amount, type and balance', () => {
    const transaction = new Transaction('23-05-2023', 1000, 'credit', 1000);

    expect(transaction.date).toEqual('23-05-2023');
    expect(transaction.amount).toEqual(1000);
    expect(transaction.type).toEqual('credit');
    expect(transaction.balance).toEqual(1000);
  });
});
