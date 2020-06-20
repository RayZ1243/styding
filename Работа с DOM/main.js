let box = document.getElementById('box'),
    btn = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('circle'),
    heart = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart'),
    wrapper = document.querySelectorAll('.wrapper');

box.style.backgroundColor = 'blue';
btn[1].style.borderRadius = '50%';

circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'green';

// for (let i = 0; i < heart.length; i++) {
//     heart[i].style.backgroundColor = 'blue';
// }

// heart.forEach(function (item, i, hearts) {
//     item.style.backgroundColor = 'blue';
// });

let div = document.createElement('div'),
    text = document.createTextNode('Привет');

div.classList.add('black'); // Добавление класса элементу
// document.body.appendChild(div);

// div.innerHTML = '<h1>Hello World</h1>';
div.textContent = 'hello world';


console.log(div);


// wrapper.appendChild(div); // Добавление элемента в конец родителя
// wrapper.removeChild(heart[1]);
document.body.insertBefore(div, circle[0]); // Добавление элемента ( * , ...) перед элементом (... , * )
document.body.removeChild(circle[1]); // Удаление элемента из родителя 
document.body.replaceChild(btn[1], circle[1]); // Замена элемента (... , * ) на ( * , ...)