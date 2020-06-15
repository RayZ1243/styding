var money, time;

let start = function () {
    time = prompt('Введите дату в формате YYYY-MM-DD');

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt('Ваш бюджет за месяц?', '600');
    }
}();

var appData = {
    budget: [money],
    timeData: [time],
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,

    chooseExpenses: function () {
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
    },

    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert(`Ваш бюджет на один день: ${appData.moneyPerDay}`);
    },

    detectLevel: function () {
        if (appData.moneyPerDay < 50) {
            console.log('Минимальный уровень достатка');
        } else if (appData.moneyPerDay >= 50 && appData.moneyPerDay <= 200) {
            console.log('Средний уровень достатка');
        } else if (appData.moneyPerDay > 200 && appData.moneyPerDay) {
            console.log('Высокий уровень достатка');
        } else {
            console.log('Произошла ошибка при расчётах, проверите правильность введённых данных');
        }
    },

    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");

            appData.monthIncome = save / 100 / 12 * percent;
            alert(`Доход в месяц с вашего депозита: ${appData.monthIncome}`);
        }
    },

    chooseOptExpenses: function () {
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
    },

    chooseIncome: function () {
        let items;
        do {
            items = prompt('Что принесёт дополнительный доход? (Перечисли через запятую)', '');
            console.log(isNaN(+items));

            if (items == '') alert('Строку нельзя оставить пустой')
            else if (!isNaN(+items)) alert('Введите строку')
            else if (items == null) alert('Пожалуйста, ответьте на вопрос!')
        }
        while (items == '' || !isNaN(+items) || items == null);

        appData.income = items.split(', ');
        appData.income.sort();

        appData.income.forEach(function (item, i) {
            alert('Способы доп. заработка: \n' + ++i + ': ' + item);
        });

    }
};

for (const key in appData) {
    console.log('Наша программа включает в себя данные: ' + key);

}

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