do var money = prompt('Ваш бюджет за месяц?', '45000')
while (money);

var time = prompt('Введите дату в формате YYYY-MM-DD');

var question1 = prompt('Введите обязательную статью расходов в этом месяце');
var question2 = prompt('Во сколько обойдётся?');

var appData = {
    budget: [money],
    timeData: [time],
    expenses: {
        [question1]: [question2]
    },
    optionalExpenses: undefined,
    income: [],
    savings: false
};

alert(`Ваш бюджет на один день составляет: ${(appData.budget / 30).toFixed(2)}`);