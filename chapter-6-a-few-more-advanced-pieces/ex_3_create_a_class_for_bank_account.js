class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }

    deposit(amount) {
        if (amount <= 0) {
           throw new Error("Deposit amount must be positive");
        }
        this.balance += amount;
    }

    withdraw(amount) {
        if (amount <= 0) {
            throw new Error("Withdrawal amount must be positive");
        }
        if (amount > this.balance) {
            throw new Error("Insufficient funds");
        }
        this.balance -= amount;
    }

    getBalance() {
        return this.balance;
    }
}

const account = new BankAccount("Alice", 1000);

console.log(account.getBalance());
account.deposit(500);
console.log(account.getBalance());
account.withdraw(200);
console.log(account.getBalance());
try {
    account.withdraw(2000);
} catch (error) {
    console.error(error);
}
console.log(account.getBalance());
try {
    account.deposit(-1);
} catch (error) {
    console.error(error);
}
console.log(account.getBalance());
try {
    account.withdraw(-1);
} catch (error) {
    console.error(error);
}
console.log(account.getBalance());