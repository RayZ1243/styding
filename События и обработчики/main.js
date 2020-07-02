let btn = document.getElementsByTagName('button'),
    wrap = document.querySelector('.wrapper'),
    link = document.querySelector('a');

// !ТАК НЕ ПРАВИЛЬНО!

// btn[0].onclick = function() {
//     alert('Вы нажали первую кнопку'); // Эта функция перезапишется.
// };

// btn[0].onclick = function() {
//     alert('Вы ещё раз нажали первую кнопку'); // При onclick может существовать только одна функция!
// };

// !ТАК ПРАВИЛЬНО!

// btn[0].addEventListener('click', function() {
//     alert('Вы нажали первую кнопку');
// });

// btn[0].addEventListener('click', function() {
//     alert('Вы опять нажали первую кнопку');
// });

// !EVENTS

btn[0].addEventListener('click', function(event) {
    console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target);
});

wrap.addEventListener('click', function(event) {
    console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target);
});

link.addEventListener('click', function(event) {
    event.preventDefault();
    console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target);
});