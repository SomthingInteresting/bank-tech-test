const BankAccount = require('../src/bankAccount');

describe('BankAccount', () => {
  it('should increase the balance when deposit is made', () => {
    const account = new BankAccount();

    expect(account.balance).toEqual(0);

    account.deposit(1000);

    expect(account.balance).toEqual(1000);
  });

  it('should throw an error if a negative amount is deposited', () => {
    const account = new BankAccount();

    expect(() => account.deposit(-1000)).toThrow('Invalid deposit amount');
  });

  it('should throw an error if deposit amount is not a number', () => {
    const account = new BankAccount();
    
    expect(() => account.deposit('String')).toThrow('Invalid deposit amount');
  });
});
