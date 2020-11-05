// Variables
const balance = document.getElementById('balance');
const money_plus = document.getElementById('money-plus');
const money_minus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');



const dummyTransactions = [
  { id: 1, text: 'Flower', amount: -20 },
  { id: 2, text: 'Salary', amount: 300 },
  { id: 3, text: 'Book', amount: -10 },
  { id: 4, text: 'Camera', amount: 150 }
];


let transactions = dummyTransactions;

// Functions

// add transactions to DOM list
function addTransactionDom(transaction) {
    // get sign
    const sign = transaction.amount < 0 ? '-' : '+';

    const item = document.createElement('li');

    // add class based on value
    item.classList.add(transaction.amount < 0 ? 'minus' : 'plus');

    item.innerHTML = `
        ${transaction.text} <span>${sign}${Math.abs(transaction.amount)}
        </span> <button class='delete-btn'>x</button>
    `

    list.appendChild(item);
}




// update the balance, income and expense

function updateValues() {
    //get amounts
    const amounts = transactions.map(transaction => 
        transaction.amount);
        
        // console.log(amounts)
    //get total
    const total = amounts.reduce((acc, item) => (acc += item), 0)
    .toFixed(2)
    // console.log(total)

    //get income
    const income = amounts
                    .filter(item => item > 0)
                    .reduce((acc, item) => (acc += item), 0)
                    .toFixed(2);
        // console.log(income)
    
    //get expense
    const expense = (amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1).toFixed(2) 
    // console.log(expense)

    balance.innerText = `$${total}`;
    money_plus.innerText = `$${income}`;
    money_minus.innerText = `$${expense}`

}


// Init app
function init(){
    list.innerHTML = '';

    transactions.forEach(addTransactionDom);
    updateValues()
}

//invoked functions
init()