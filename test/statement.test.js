const Statement = require('../src/statement');
const Transaction = require('../src/transaction');

jest.mock('../src/transaction');

describe('Statement', () => {
  describe('format', () => {
    test('formats a single transaction into a string', () => {
      const transaction = {
        datetime: new Date('2023-01-10T00:00:00Z'),
        amount: 1000,
        type: 'credit',
        balance: 1000
      };

      Transaction.mockImplementation(() => transaction);
      
      const statement = new Statement([new Transaction()]);

      const result = statement.format();

      expect(result).toEqual(
        'date || credit || debit || balance\n' +
        '10/01/2023 || 1000.00 || || 1000.00\n'
      );
      console.log(result);
    });
  });
});
