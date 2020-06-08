var money = +prompt('Ваш бюджет за месяц?', '600');
var time = prompt('Введите дату в формате YYYY-MM-DD');

var appData = {
    budget: [money],
    timeData: [time],
    expenses: {},
    optionalExpenses: undefined,
    income: [],
    savings: false
};

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

appData.moneyPerDay = budget / 30;

if (appData.moneyPerDay < 50) {
    console.log('Минимальный уровень достатка');
} else if (appData.moneyPerDay >= 50 && appData.moneyPerDay <= 200) {
    console.log('Средний уровень достатка');
} else if (appData.moneyPerDay > 200 && appData.moneyPerDay) {
    console.log('Высокий уровень достатка');
} else {
    console.log('Произошла ошибка при расчётах, проверите правильность введённых данных');
}