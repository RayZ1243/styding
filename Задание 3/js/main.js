var start = document.getElementById('start');

var budgetValue = document.getElementsByClassName('budget-value'),
    dayBudgetValue = document.getElementsByClassName('daybudget-value'),
    levelValue = document.getElementsByClassName('level-value'),
    expensesValue = document.getElementsByClassName('expenses-value'),
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value'),
    incomeValue = document.getElementsByClassName('income-value'),
    monthSavingsValue = document.getElementsByClassName('monthsavings-value'),
    yearSavingsValue = document.getElementsByClassName('yearsavings-value');
    
var expensesItems = document.getElementsByClassName('expenses-item');
var btns = document.getElementsByTagName('button');

var firstAcceptBtn = btns[0];
var secondAcceptBtn = btns[1];
var countBtn = btns[2];

var optionalExpensesItems = document.querySelectorAll('.optionalexpenses-item');

var chooseIncome = document.querySelector('#income'),
    savings = document.querySelector('#savings'),
    savingsSum = document.querySelector('#sum'),
    savingsPercent = document.querySelector('#percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

