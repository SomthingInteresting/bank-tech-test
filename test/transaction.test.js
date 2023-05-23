const Transaction = require('../src/transaction')

describe('Transaction', () => {
  test('should create a new transaction with a datetime, amount, type, and balance', () => {
    const transaction = new Transaction(1000, 'credit', 1000)

    expect(typeof transaction.datetime).toEqual('string')
    expect(transaction.datetime.length).toBeGreaterThan(10)
    expect(transaction.amount).toEqual(1000)
    expect(transaction.type).toEqual('credit')
    expect(transaction.balance).toEqual(1000)
  })

  test('should throw an error if amount is not a positive number', () => {
    expect(() => new Transaction(-1000, 'credit', 1000)).toThrow('Amount must be a positive number.')
    expect(() => new Transaction('1000', 'credit', 1000)).toThrow('Amount must be a positive number.')
    expect(() => new Transaction(0, 'credit', 1000)).toThrow('Amount must be a positive number.')
  })

  test('should throw an error if type is not "credit" or "debit"', () => {
    expect(() => new Transaction(1000, '', 1000)).toThrow('Type must be either "credit" or "debit".')
    expect(() => new Transaction(1000, '123', 1000)).toThrow('Type must be either "credit" or "debit".')
    expect(() => new Transaction(1000, 'invalid', 1000)).toThrow('Type must be either "credit" or "debit".')
    expect(() => new Transaction(1000, 'credit', 1000)).not.toThrow()
    expect(() => new Transaction(1000, 'debit', 1000)).not.toThrow()
  })

  test('should throw an error if balance is not a number', () => {
    expect(() => new Transaction(1000, 'credit', '1000')).toThrow('Balance must be a number.')
    expect(() => new Transaction(1000, 'credit', null)).toThrow('Balance must be a number.')
    expect(() => new Transaction(1000, 'credit', 1000)).not.toThrow()
  })
})
