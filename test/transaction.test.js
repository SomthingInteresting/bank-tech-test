const Transaction = require('../src/transaction');

describe('Transaction', () => {
  it('should create a new transaction with a datetime, amount, type, and balance', () => {
    const transaction = new Transaction(1000, 'credit', 1000);

    expect(typeof transaction.datetime).toEqual('string');
    expect(transaction.datetime.length).toBeGreaterThan(10);
    expect(transaction.amount).toEqual(1000);
    expect(transaction.type).toEqual('credit');
    expect(transaction.balance).toEqual(1000);
    console.log(transaction);
  });
});
