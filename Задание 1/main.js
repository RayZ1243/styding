var money, time;

let start = function () {
    time = prompt('Введите дату в формате YYYY-MM-DD');

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt('Ваш бюджет за месяц?', '600').trim();
    }
}();

var appData = {
    budget: [money],
    timeData: [time],
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let chooseExpenses = function () {
    for (var i = 0; i < 2; i++) {

        var question = prompt('Введите обязательную статью расходов в этом месяце', ''),
            answer = prompt('Во сколько обойдётся?', '');

        if ((question, answer) != null && (question, answer).trim() != '') {
            console.log('done');
            appData.expenses[question] = answer;
        } else {
            alert("Обязательно ответьте на вопросы!");
            i--;
        }
    }
}();


function chooseOptExpenses() {
    let i = 0;
    chooseValue = confirm('Имеются ли у вас необязательные расходы?');
    if (chooseValue != null) {
        let answer = 'something';
        while (answer != null) {
            i++;
            answer = prompt('Введите название расхода или нажмите Отмена.');
            if (answer != null) appData.optionalExpenses[i] = answer;
        }
    }
}
chooseOptExpenses();


let detectDayBudget = function () {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert(`Ваш бюджет на один день: ${appData.moneyPerDay}`);

    function detectLevel() {
        if (appData.moneyPerDay < 50) {
            console.log('Минимальный уровень достатка');
        } else if (appData.moneyPerDay >= 50 && appData.moneyPerDay <= 200) {
            console.log('Средний уровень достатка');
        } else if (appData.moneyPerDay > 200 && appData.moneyPerDay) {
            console.log('Высокий уровень достатка');
        } else {
            console.log('Произошла ошибка при расчётах, проверите правильность введённых данных');
        }
    }
    detectLevel();
}();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

        appData.monthIncome = save / 100 / 12 * percent;
        alert(`Доход в месяц с вашего депозита: ${appData.monthIncome}`);
    }
}
checkSavings();

// var i = 0;
// while (i < 2) {
//     i++
//     var question = prompt('Введите обязательную статью расходов в этом месяце', ''),
//         answer = prompt('Во сколько обойдётся?', '');

//     if ((question, answer) != null && (question, answer).trim() != '') {
//         console.log('done');
//         appData.expenses[question] = answer;
//     } else {
//         alert("Обязательно ответьте на вопросы!");
//         i--;
//     }
// }

// do {
//     i++;
//     var question = prompt('Введите обязательную статью расходов в этом месяце', ''),
//         answer = prompt('Во сколько обойдётся?', '');

//     if ((question, answer) != null && (question, answer).trim() != '') {
//         console.log('done');
//         appData.expenses[question] = answer;
//     } else {
//         alert("Обязательно ответьте на вопросы!");
//         i--;
//     }
// } while (i < 2);