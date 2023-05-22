const BankAccount = require('../src/bankAccount');

describe('BankAccount', () => {
  describe('deposit', () => {
    test('increases the balance when a valid positive amount is deposited', () => {
      const account = new BankAccount();
      const depositAmount = 1000;
      account.deposit(depositAmount);
      expect(account.balance).toEqual(depositAmount);
    });

    test('throws an error if a negative amount is deposited', () => {
      const account = new BankAccount();
      const invalidDepositAmount = -1000;
      expect(() => account.deposit(invalidDepositAmount)).toThrow('Invalid deposit amount');
    });

    test('throws an error if deposit amount is not a number', () => {
      const account = new BankAccount();
      const invalidDepositAmount = 'String';
      expect(() => account.deposit(invalidDepositAmount)).toThrow('Invalid deposit amount');
    });
  });
});
