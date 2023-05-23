const Statement = require('../src/statement');
const Transaction = require('../src/transaction');

jest.mock('../src/transaction', () => {
  let mockDate = '2023-01-10T00:00:00Z';

  return jest.fn().mockImplementation((amount, type, balance) => {
    const transaction = {
      datetime: new Date(mockDate),
      amount: amount,
      type: type,
      balance: balance,
    };

    mockDate = new Date(new Date(mockDate).getTime() + 1000 * 60 * 60).toISOString();
    return transaction;
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

    test('correctly formats a single transaction', () => {
      const mockTransactions = [new Transaction(1000, 'credit', 1000)];
      const statement = new Statement(mockTransactions);
      const expectedStatement = 
        'date || credit || debit || balance\n' +
        '10/01/2023 || 1000.00 || || 1000.00';
      expect(statement.format()).toEqual(expectedStatement);
    });

    it('correctly orders and formats multiple transactions on the same day', () => {
      const mockTransactions = [
        new Transaction(1000, 'credit', 1000),
        new Transaction(500, 'debit', 500),
        new Transaction(500, 'credit', 1000),
      ];
      const statement = new Statement(mockTransactions);
      const expectedStatement = 
        'date || credit || debit || balance\n' +
        '10/01/2023 || 500.00 || || 1000.00\n' +
        '10/01/2023 || || 500.00 || 500.00\n' +
        '10/01/2023 || 1000.00 || || 1000.00';
      expect(statement.format()).toEqual(expectedStatement);
    });    
  });
});
