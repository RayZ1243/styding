var startBtn = document.getElementById('start');

var budgetValue = document.querySelector('.budget-value'),
    dayBudgetValue = document.querySelector('.daybudget-value'),
    levelValue = document.querySelector('.level-value'),
    expensesValue = document.querySelector('.expenses-value'),
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value'),
    incomeValue = document.querySelector('.income-value'),
    monthSavingsValue = document.querySelector('.monthsavings-value'),
    yearSavingsValue = document.querySelector('.yearsavings-value');
    
var expensesItems = document.getElementsByClassName('expenses-item');
var btns = document.getElementsByTagName('button');

var expensesBtn = btns[0];
var optionalExpensesBtn = btns[1];
var countBudgetBtn = btns[2];

var optionalExpensesItems = document.querySelectorAll('.optionalexpenses-item');

var chooseIncome = document.querySelector('#income'),
    checkSavings = document.querySelector('#savings'),
    savingsSum = document.querySelector('#sum'),
    savingsPercent = document.querySelector('#percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

    var money, time;

    startBtn.addEventListener('click', function()
    {    
        var appData = {
            budget: [money],
            timeData: [time],
            expenses: {},
            expensesSum: 0,
            optionalExpenses: {},
            income: [],
            savings: false,
        };

        while (isNaN(money) || money == "" || money == null) {
            money = +prompt('Ваш бюджет за месяц?', '600');
        }
        appData.budget = money;
        appData.timeData = time;
        budgetValue.textContent = money.toFixed();

        expensesBtn.addEventListener('click', function()
        {
    
            for (var i = 0; i < expensesItems.length; i++) 
            {
        
                var question = expensesItems[i].value,
                    answer = expensesItems[++i].value;
    
                if ((question, answer) != null && (question, answer).trim() != '') 
                {
                    console.log('done');
                    appData.expenses[question] = answer;
                    appData.expensesSum += +answer;
                } 
                else 
                {
                    alert("Обязательно ответьте на вопросы!");
                    i--;
                }
            }
            expensesValue.textContent = appData.expensesSum;
        });
    
        optionalExpensesBtn.addEventListener('click', function() 
        {
            for (let i = 0; i < optionalExpensesItems.length; i++) 
            {
                let opt = optionalExpensesItems[i].value;
                appData.optionalExpenses[i] = opt;
                optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
            }
        });
    
        countBudgetBtn.addEventListener('click', function() 
        {
            if (appData.budget != undefined) 
            {
                appData.moneyPerDay = ((appData.budget - appData.expensesSum) / 30).toFixed();
                dayBudgetValue.textContent = appData.moneyPerDay;
        
                if (appData.moneyPerDay < 50) {
                    levelValue.textContent = 'Минимальный уровень достатка';
                } else if (appData.moneyPerDay >= 50 && appData.moneyPerDay <= 200) {
                    levelValue.textContent = 'Средний уровень достатка';
                } else if (appData.moneyPerDay > 200 && appData.moneyPerDay) {
                    levelValue.textContent = 'Высокий уровень достатка';
                } else {
                    levelValue.textContent = 'Произошла ошибка при расчётах, проверите правильность введённых данных';
                }
            }
            else {
                dayBudgetValue.textContent = 'Произошла ошибка, нажмите "Начть расчёт"';
            }
        });
        
        chooseIncome.addEventListener('input', function() 
        {
            let items = chooseIncome.value;
            appData.income = items.split(', ');
            incomeValue.textContent = appData.income;
        });
    
        checkSavings.addEventListener('click', function() 
        {
            if (appData.savings == true) {
                appData.savings = false;
            } 
            else 
            {
                appData.savings = true;
            }
        });
    
        savingsSum.addEventListener('input', function() {
            if (appData.savings == true) {
                let sum = +savingsSum.value,
                percent = + savingsPercent.value;
    
                appData.monthIncome = sum /100/12*percent;
                appData.yearIncome = sum /100*percent;
    
                monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
                yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
            }
        });
        
        savingsPercent.addEventListener('input', function() {
            if (appData.savings == true) {
                let sum = +savingsSum.value,
                percent = + savingsPercent.value;
    
                appData.monthIncome = sum /100/12*percent;
                appData.yearIncome = sum /100*percent;
    
                monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
                yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
            }
        });
    
    });

    function detectCurrentDate() 
    {
        currentDate = new Date();
        yearValue.value = currentDate.getFullYear();
        monthValue.value = String(currentDate.getMonth() + 1).padStart(2, '0');
        dayValue.value = String(currentDate.getDate()).padStart(2, '0');
    }
    detectCurrentDate();

