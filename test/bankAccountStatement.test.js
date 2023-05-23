const Statement = require('../src/statement')
const BankAccount = require('../src/bankAccount')

describe('BankAccount and Statement', () => {
  let account

  beforeEach(() => {
    account = new BankAccount()
  })

  test('Deposit adds a transaction and updates balance', () => {
    account.deposit(1000)
    expect(account.balance).toBe(1000)
    expect(account.transactions.length).toBe(1)
  })

  test('Withdrawal adds a transaction and updates balance', () => {
    account.deposit(1000)
    account.withdraw(500)
    expect(account.balance).toBe(500)
    expect(account.transactions.length).toBe(2)
  })

  test('Statement correctly formats transactions', () => {
    account.deposit(1000)
    account.withdraw(500)

    const statement = new Statement(account.transactions)
    const statementOutput = statement.format()
    expect(statementOutput).toEqual(expect.stringContaining(' || || 500.00 || 500.00'))
    expect(statementOutput).toEqual(expect.stringContaining(' || 1000.00 || || 1000.00'))
  })

  test('User cannot withdraw more than account balance', () => {
    account.deposit(1000)
    expect(() => {
      account.withdraw(2000)
    }).toThrow('Withdrawal amount exceeds the balance')
  })

  test('User cannot deposit or withdraw an invalid amount', () => {
    expect(() => {
      account.deposit(-1000)
    }).toThrow('Invalid amount')

    account.deposit(1000)

    expect(() => {
      account.withdraw(-500)
    }).toThrow('Invalid amount')
  })
})
