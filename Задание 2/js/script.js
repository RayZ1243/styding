let menuItem = document.querySelectorAll('.menu-item'),
    menu = document.querySelectorAll('.menu'),
    advert = document.getElementsByClassName('adv');

let a = menuItem[1].textContent, b = menuItem[2].textContent;

menuItem[1].textContent = b;
menuItem[2].textContent = a;
let el = document.createElement('li');
el.classList = 'menu-item';
el.innerHTML = 'Пятый пункт';

menu[0].appendChild(el);



advert[0].parentNode.removeChild(advert[0]);
document.getElementById("title").innerHTML = "Мы продаём только подлинную технику Apple";
document.body.style.backgroundImage = "url('../img/apple_true.jpg')";

let answer = prompt('Как вы относитесь к технике Apple?');

document.getElementById('prompt').innerHTML = answer;






