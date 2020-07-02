// touchstart 
// touchmove 
// touchend
// touchenter
// toucleave
// touchcancel

window.addEventListener("DOMContentLoaded", function() {
    let box = document.querySelector('.box');
    
    // box.addEventListener('touchstart', function(e) {
    //     e.preventDefault();
    //     console.log('Box: touchstart');
    //     console.log(e.target);    
    //     console.log(e.touches);
    //     console.log(e.changedTouches);
    //     console.log(e.targetTouches);

    // });

    // box.addEventListener('touchmove', function(e) {
    //     e.preventDefault();
    //     console.log('Box: touchmove');
    // });

    // box.addEventListener('touchend', function(e) {
    //     e.preventDefault();
    //     console.log('Box: touchend');
    // });

    // new RegExp('pattern', 'flags');
    // /pattern/

    // let ans = prompt('Введите ваше имя');

    // let reg = /n/ig;

    // console.log(ans.match(reg));
    
    // let pass = prompt('Password: ');

    // console.log(pass.replace(/./ig, "*"));
    // alert('12-34-56-78'.replace(/-/g, ":"));

    let str = 'My name is R2D2';

    console.log(str.match(/\w\d\w\d/ig));
});