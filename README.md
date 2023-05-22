# Bank tech test

## Specification

### Requirements

- You should be able to interact with your code via a REPL like IRB or Node. (You don't need to implement a command line interface that takes input from STDIN.)
- Deposits, withdrawal.
- Account statement (date, amount, balance) printing.
- Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2023  
**And** a deposit of 2000 on 13-01-2023  
**And** a withdrawal of 500 on 14-01-2023  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```

Observations:

- The statement is printed in reverse chronological order
- The date is formatted DD/MM/YYYY on the statement
- The date is formatted DD-MM-YYYY in the specification
- The amount is formatted to 2 decimal places on the statement
- The amount is formatted to no decimal places in the specification
- Each column is separated by 2 pipes (||)
- The first line is a header
- Shows a running balance
- credit and debit aren't differentiated by a symbol (no + or -)

Questions (Sent to client on 22/05/23 at 12:34pm - responses below):

1. Can the account balance go negative?

- Worth taking into consideration as a edge case. For now, assume no.

2. Can there be multiple deposits/withdrawals on the same day? How should these be ordered?

- Yes, same order as accepted criteria. (reverse chronological)

3. Is there a maximum number of transactions that can be shown on the statement?

- No

4. What happens if the user tries to withdraw more money than they have in their account?

- Edge case, assume no.

5. What happens if the user tries to withdraw or deposit 0 or a negative amount?

- Edge case, assume no.

6. What happens if the user tries to deposit or withdraw a float? Should this be rounded to 2 decimal places only?

- As per the acceptance criteria, assume no.

7. Should the code handle any specific errors or exceptions, such as invalid dates, strings or floats over or below 2 decimal places?

- Yes, handle these errors.

8. Should the credit and debit column have a + or - symbol to differentiate between the two?

- No as per acceptance criteria.

9. The inputs are deposit and withdrawal but no date. Should this be an input or defaulted to todays date?

- Whichever would reduce the risk of human error. (So default to todays date and time for the transaction.)

User Stories:

As a user, I want to deposit money into my account.
As a user, I want to withdraw money from my account.
As a user, I want to see my account balance.
As a user, I want to print my account statement to view my account history.
As a user, I want to see the date of each transaction in my account history.
As a user, I want to see the amount of each transaction in my account history.
As a user, I want to see the balance after each transaction in my account history.
As a user, I want to see my transactions in reverse chronological order in my account history.
As a user, I want to view my transactions in a readable format in my account history.

### Approach

The problem:
Create a simple banking application that allows deposits, withdrawals, and prints account statements. The transactions are stored in memory and can be displayed in reverse chronological order.

Deposits:
Should accept a valid deposit amount (integer or float up to 2 decimal places).
Should update the balance with the deposit amount.
Should reject invalid deposit amounts (negative, non-numeric).
Should store the transaction with a timestamp.

Withdrawals:
Should accept a valid withdrawal amount (integer or float up to 2 decimal places).
Should update the balance by deducting the withdrawal amount.
Should reject invalid withdrawal amounts (negative, non-numeric, larger than balance).
Should store the transaction with a timestamp.

Account statement:
Should print all transactions in reverse chronological order.
Each transaction should include: date, credit or debit, balance after transaction.
The formatting should match the provided criteria.

Diagram:

![Bank tech test diagram]()

TDD red, green, refactor, commit cycle rules:

- Create a feature test to test the user stories. (Normal)
- Use mocks to isolate unit tests. (Normal)
- 95% test coverage. (Normal)
- Test for behavior not state where possible. (Additional)
- Clear test descriptions. (Additional)
- Use appropriate testing framework methods to keep code clean (Additional)
- Create unit tests for each class and method.
- Use SRP to keep classes and methods small and testable.