const BankAccount = require('../src/bankAccount');

describe('BankAccount', () => {
  it('should increase the balance when deposit is made', () => {
    const account = new BankAccount();

    expect(account.balance).toEqual(0);

    account.deposit(1000);

    expect(account.balance).toEqual(1000);
  });
});
