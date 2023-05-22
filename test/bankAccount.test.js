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
      expect(() => account.deposit(invalidDepositAmount)).toThrow('Invalid amount');
    });

    test('throws an error if deposit amount is not a number', () => {
      const account = new BankAccount();
      const invalidDepositAmount = 'String';
      expect(() => account.deposit(invalidDepositAmount)).toThrow('Invalid amount');
    });
  });

  describe('withdraw', () => {
    test('decreases the balance when a valid positive amount is withdrawn', () => {
      const account = new BankAccount();
      const depositAmount = 1000;
      account.deposit(depositAmount);
      const withdrawAmount = 500;
      account.withdraw(withdrawAmount);
      expect(account.balance).toEqual(depositAmount - withdrawAmount);
    });

    test('throws an error if a negative amount is withdrawn', () => {
      const account = new BankAccount();
      const depositAmount = 1000;
      account.deposit(depositAmount);
      const invalidWithdrawAmount = -500;
      expect(() => account.withdraw(invalidWithdrawAmount)).toThrow('Invalid amount');
    });

    test('throws an error if withdraw amount is not a number', () => {
      const account = new BankAccount();
      const depositAmount = 1000;
      account.deposit(depositAmount);
      const invalidWithdrawAmount = 'String';
      expect(() => account.withdraw(invalidWithdrawAmount)).toThrow('Invalid amount');
    });

    it('should throw an error if withdrawal amount is more than the balance', () => {
      const account = new BankAccount();
      const depositAmount = 1000;
      account.deposit(depositAmount);
      expect(() => account.withdraw(1500)).toThrow('Withdrawal amount exceeds the balance');
    });
  });

  describe('transactions', () => {
    test('should have an empty list of transactions when created', () => {
      const account = new BankAccount();
      expect(account.transactions).toEqual([]);
    });
  });
});
