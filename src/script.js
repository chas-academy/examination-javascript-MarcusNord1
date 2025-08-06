const incomes = [];
const expenses = [];

document.getElementById("incomeBtn").addEventListener("click", function () {
  handleAdd("income");
});

document.getElementById("expenseBtn").addEventListener("click", function () {
  handleAdd("expense");
});

function handleAdd(type) {
  const description = document.getElementById("desc").value;
  const amount = Number(document.getElementById("amount").value);

  if (description === "" || isNaN(amount) || amount <= 0) {
    return;
  }

  const transaction = { description: description, amount: amount, type: type };
  const label = (type === "income") ? "Inkomst" : "Utgift";

  if (type === "income") {
    incomes.push(transaction);
  } else {
    expenses.push(transaction);
  }

  const listId = (type === "income") ? "incomeList" : "expenseList";
  const li = document.createElement("li");
  li.textContent = description + " - " + amount + " kr (" + label + ")";
  document.getElementById(listId).appendChild(li);

  updateBalance();
  clearInputs();
}

function updateBalance() {
  let incomeTotal = 0;
  for (let i = 0; i < incomes.length; i++) {
    incomeTotal += incomes[i].amount;
  }

  let expenseTotal = 0;
  for (let i = 0; i < expenses.length; i++) {
    expenseTotal += expenses[i].amount;
  }

  const saldo = incomeTotal - expenseTotal;
  document.getElementById("balance").textContent = String(saldo);
}

function clearInputs() {
  document.getElementById("desc").value = "";
  document.getElementById("amount").value = "";
}