const Statement = require('../src/statement');
const Transaction = require('../src/transaction');

jest.mock('../src/transaction', () => {
  return jest.fn().mockImplementation((amount, type, balance) => {
    return {
      datetime: new Date('2023-01-10').toISOString(),
      amount: amount,
      type: type,
      balance: balance,
    };
  });
});

describe('Statement', () => {
  describe('format', () => {
    test('formats the transactions for the statement', () => {
      const mockTransactions = [
        new Transaction(1000, 'credit', 1000),
        new Transaction(500, 'debit', 500)
      ];

      const statement = new Statement(mockTransactions);
      const expectedStatement = 
        'date || credit || debit || balance\n' +
        '10/01/2023 || || 500.00 || 500.00\n' +
        '10/01/2023 || 1000.00 || || 1000.00';
        
      expect(statement.format()).toEqual(expectedStatement);
    });

    test('returns a statement with only the header for no transactions', () => {
      const mockTransactions = [];
      const statement = new Statement(mockTransactions);
      const expectedStatement = 'date || credit || debit || balance';
      expect(statement.format()).toEqual(expectedStatement);
    });
  });
});
