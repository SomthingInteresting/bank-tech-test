const Statement = require('../src/statement');
const BankAccount = require('../src/bankAccount');

describe('BankAccount and Statement', () => {
  let account;

  beforeEach(() => {
    account = new BankAccount();
  });

  test('Deposit adds a transaction and updates balance', () => {
    account.deposit(1000);
    expect(account.balance).toBe(1000);
    expect(account.transactions.length).toBe(1);
  });
});