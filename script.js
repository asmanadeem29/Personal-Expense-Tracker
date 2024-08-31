// Data types example

// Array to store expenses
let expenses = [];

// Function to add an expense
function addExpense(name, amount) {
    // Object to store expense details
    let expense = {
        name: name,
        amount: parseFloat(amount) // Convert to number
    };
    expenses.push(expense);

    // Update the UI
    updateExpenseList();
    updateTotalAmount();
}

// Function to update the expense list
function updateExpenseList() {
    let expenseList = document.getElementById("expenses");
    expenseList.innerHTML = ''; // Clear existing list

    expenses.forEach(expense => {
        let li = document.createElement("li");
        li.innerText = `${expense.name}: $${expense.amount.toFixed(2)}`;
        expenseList.appendChild(li);
    });
}

// Function to update the total amount
function updateTotalAmount() {
    let total = expenses.reduce((acc, expense) => acc + expense.amount, 0);
    document.getElementById("totalAmount").innerText = `Total Amount: $${total.toFixed(2)}`;
}

// Event listener for the "Add Expense" button
document.getElementById("addExpenseButton").addEventListener("click", () => {
    let name = document.getElementById("expenseName").value;
    let amount = document.getElementById("expenseAmount").value;

    if (name && amount) {
        addExpense(name, amount);
        // Clear input fields
        document.getElementById("expenseName").value = '';
        document.getElementById("expenseAmount").value = '';
    } else {
        alert("Please enter both expense name and amount.");
    }
});

// Initial UI setup
updateExpenseList();
updateTotalAmount();
