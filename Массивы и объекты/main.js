let obj = {
    width: 1024,
    height: 1024,
    name: "John"
};

options.bool = false;
options.colors = {
    border: "black",
    bg: "red"
};

delete options.bool; // удалить свойство объекта

console.log(options);

for (let key in options) { // перебор свойств объекта
    console.log(`Свойство ${key} имеет значение ${options.key}`);
}

console.log(Object.keys(options).length);







let array = [1, 2, 3, 'four', 5];

array.pop(); // убрать последний элемент массива
array.push(5); // добавить элемент (*) в конец масива
array.shift(); // убрать первый элемент массива
array.unshift('one'); // добавить элемент (*) в начало массива

// for (let i = 0; i < array.length; i++) { // перебор массива
//     console.log(array[i]);
// }

array.forEach(function (item, i, arr) /* (элемент массива, номер расположения в масиве, массив) */ {
    console.log(i + ': ' + item + ' (массив: ' + arr + ')');
});

for (let key in array) {
    console.log(key); // 0, 1, 2, 3, 4 
}

for (let key of array) {
    console.log(key); // 'one', 2, 3, 'four', 5
}

let ans = prompt('', ''),
    arr = [];

arr = ans.split(','); // Добавление данных в массив из одной строки, с разделителем (*)

string = arr.join(', '); // Добавление данных массива в одну строку с разделителем между (*)

let anotherArray = ['Misha', 'Alexander', 'Julia', 'Ivan'];
let anotherNumArray = [1, 15, 4, 5];

function compareNumber(a, b) {
    return a - b;
}
sortedArray = anotherArray.sort(); // Сортировака массива по алфавиту
sortedNumArray = anotherNumArray.sort(compareNumber); // Сортировака массива с числами
console.log(sortedArray);
console.log(sortedNumArray);