

const personAccount = {
    firstName: "John",
    lastName: "Doe",
    incomes: [],
    expenses: [],

    // Method to calculate total income
    totalIncome() {
        return this.incomes.reduce((total, income) => total + income.amount, 0);
    },

    // Method to calculate total expenses
    totalExpense() {
        return this.expenses.reduce((total, expense) => total + expense.amount, 0);
    },

    // Method to get account information
    accountInfo() {
        return `Account Information\nName: ${this.firstName} ${this.lastName}\nTotal Income: $${this.totalIncome()}\nTotal Expenses: $${this.totalExpense()}`;
    },

    // Method to add income
    addIncome(description, amount) {
        this.incomes.push({ description, amount });
    },

    // Method to add expense
    addExpense(description, amount) {
        this.expenses.push({ description, amount });
    },

    // Method to calculate account balance
    accountBalance() {
        const balance = this.totalIncome() - this.totalExpense();
        return balance >= 0 ? `Account Balance: $${balance}` : `Account Balance: -$${Math.abs(balance)}`;
    }
};

// Adding some sample incomes and expenses
personAccount.addIncome("Salary", 3000);
personAccount.addIncome("Freelance Work", 500);
personAccount.addExpense("Rent", 1000);
personAccount.addExpense("Groceries", 200);
personAccount.addExpense("Utilities", 150);
    
// Displaying account information and balance
console.log(personAccount.accountInfo());
console.log(personAccount.accountBalance());
