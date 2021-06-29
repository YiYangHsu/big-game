'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number';

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    $(".message")[0].textContent = message;
};

// btn (".check")[0] document.querySelector('.check').addEventListener('click', function () {
$(".check")[0].addEventListener('click', function () {
    const guess = Number($(".guess")[0].value);
    console.log(typeof guess);

    if (!guess) {
        //document.querySelector('.message').textContent = 'No Number!';

        displayMessage('No Number!');
    } else if (guess === secretNumber) {
        //document.querySelector('.message').textContent = 'Correct Number';
        displayMessage('Correct Number');
        $('.number')[0].textContent = secretNumber;
        $('body')[0].style.backgroundColor = '#60b347';
        $('.number')[0].style.width = '30rem';
        if (score > highscore) {
            highscore = score;
            $('.highscore')[0].textContent = highscore;
        }
    } else if (guess !== secretNumber) {
        if (score > 1) {
            //document.querySelector('.message').textContent = guess > secretNumber ? 'Too High' : 'Too low';
            displayMessage(guess > secretNumber ? 'Too High' : 'Too low');
            score--;
            $('.score')[0].textContent = score;
        } else {
            displayMessage('You lost the game');
            $('.score')[0].textContent = 0;
        }
    }

});

$('.again')[0].addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    $('.score')[0].textContent = score;
    $('.message')[0].textContent = 'Start guessing...';
    $('body')[0].style.backgroundColor = '#222';
    $('.number')[0].style.width = '15rem';
    $('.number')[0].textContent = "?";
    $('.guess')[0].value = '';
})