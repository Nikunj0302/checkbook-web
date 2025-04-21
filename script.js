let balance = 0;
const balanceDisplay = document.getElementById('balance');
const transactionsList = document.getElementById('transactions');

function addTransaction() {
  const amount = parseFloat(document.getElementById('amount').value);
  const description = document.getElementById('description').value;
  const type = document.getElementById('type').value;

  if (isNaN(amount) || !description) {
    alert("Please enter valid amount and description.");
    return;
  }

  const value = type === 'withdraw' ? -amount : amount;
  balance += value;

  const li = document.createElement('li');
  li.textContent = `${type.toUpperCase()}: ${description} - $${value.toFixed(2)} (Balance: $${balance.toFixed(2)})`;
  transactionsList.appendChild(li);

  balanceDisplay.textContent = balance.toFixed(2);

  document.getElementById('amount').value = '';
  document.getElementById('description').value = '';
}
