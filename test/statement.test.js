const Statement = require('../src/statement')
const Transaction = require('../src/transaction')

const SAME_DAY_DATE = '2023-01-10T00:00:00Z'
const NEXT_DAY_DATE = '2023-01-11T00:00:00Z'
const DAY_AFTER_NEXT_DATE = '2023-01-12T00:00:00Z'

jest.mock('../src/transaction', () => {
  let mockDate = SAME_DAY_DATE

  return jest.fn().mockImplementation((amount, type, balance, date) => {
    const transactionDate = date || mockDate
    const transaction = {
      datetime: new Date(transactionDate),
      amount,
      type,
      balance
    }

    if (!date) {
      mockDate = new Date(new Date(mockDate).getTime() + 1000 * 60 * 60).toISOString()
    }

    return transaction
  })
})

describe('Statement', () => {
  describe('format', () => {
    test('formats the transactions for the statement', () => {
      const transaction1 = new Transaction(1000, 'credit', 1000)
      const transaction2 = new Transaction(500, 'debit', 500)
      const sameDayTransactions = [transaction1, transaction2]

      const statement = new Statement(sameDayTransactions)
      const expectedStatement =
        'date || credit || debit || balance\n' +
        '10/01/2023 || || 500.00 || 500.00\n' +
        '10/01/2023 || 1000.00 || || 1000.00'

      expect(statement.format()).toEqual(expectedStatement)
    })

    test('returns a statement with only the header for no transactions', () => {
      const noTransactions = []
      const statement = new Statement(noTransactions)
      const expectedStatement = 'date || credit || debit || balance'
      expect(statement.format()).toEqual(expectedStatement)
    })

    test('correctly formats a single transaction', () => {
      const singleTransaction = [new Transaction(1000, 'credit', 1000)]
      const statement = new Statement(singleTransaction)
      const expectedStatement =
        'date || credit || debit || balance\n' +
        '10/01/2023 || 1000.00 || || 1000.00'
      expect(statement.format()).toEqual(expectedStatement)
    })

    test('correctly orders and formats multiple transactions on the same day', () => {
      const transaction1 = new Transaction(1000, 'credit', 1000)
      const transaction2 = new Transaction(500, 'debit', 500)
      const transaction3 = new Transaction(500, 'credit', 1000)
      const sameDayTransactions = [transaction1, transaction2, transaction3]

      const statement = new Statement(sameDayTransactions)
      const expectedStatement =
        'date || credit || debit || balance\n' +
        '10/01/2023 || 500.00 || || 1000.00\n' +
        '10/01/2023 || || 500.00 || 500.00\n' +
        '10/01/2023 || 1000.00 || || 1000.00'
      expect(statement.format()).toEqual(expectedStatement)
    })

    test('correctly orders and formats transactions on different days', () => {
      const transactionDay1 = new Transaction(500, 'debit', 500)
      const transactionDay2 = new Transaction(1000, 'credit', 1000, NEXT_DAY_DATE)
      const transactionDay3 = new Transaction(500, 'credit', 1000, DAY_AFTER_NEXT_DATE)
      const differentDayTransactions = [transactionDay1, transactionDay2, transactionDay3]

      const statement = new Statement(differentDayTransactions)
      const expectedStatement =
        'date || credit || debit || balance\n' +
        '12/01/2023 || 500.00 || || 1000.00\n' +
        '11/01/2023 || 1000.00 || || 1000.00\n' +
        '10/01/2023 || || 500.00 || 500.00'
      expect(statement.format()).toEqual(expectedStatement)
    })
  })
})
