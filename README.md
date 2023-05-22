# Bank tech test

## Specification

### Requirements

* You should be able to interact with your code via a REPL like IRB or Node.  (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

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

Questions (Sent to client on 22/05/23 at 12:34pm - no response yet):

1. Can the account balance go negative?
2. Can there be multiple deposits/withdrawals on the same day? How should these be ordered?
3. Is there a maximum number of transactions that can be shown on the statement?
4. What happens if the user tries to withdraw more money than they have in their account?
5. What happens if the user tries to withdraw or deposit 0 or a negative amount?
6. What happens if the user tries to deposit or withdraw a float? Should this be rounded to 2 decimal places only?
7. Should the code handle any specific errors or exceptions, such as invalid dates, strings or floats over or below 2 decimal places?
8. Should the credit and debit column have a + or - symbol to differentiate between the two?
9. The inputs are deposit and withdrawal but no date.  Should this be an input or defaulted to todays date?

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