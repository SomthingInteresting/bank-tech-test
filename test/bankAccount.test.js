const BankAccount = require('../src/bankAccount');
const Transaction = require('../src/transaction');

jest.mock('../src/transaction');

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

    test('should add a new transaction to transactions array', () => {
      const bankAccount = new BankAccount();
      const mockTransaction = new Transaction();
      Transaction.mockReturnValue(mockTransaction); 
      bankAccount.deposit(500);

      expect(bankAccount.transactions.length).toEqual(1);
      expect(bankAccount.transactions[0]).toBe(mockTransaction);
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
