"use strict";

let isNumber = function (n) {
   const a = !isNaN(parseFloat(n)) && isFinite(n) && +n >= 1 && +n <= 100;
   if (!a) {
      alert('Введи число!');
   }
   return a;
};

function getRandomArbitrary(min = 1, max = 100) {
   return Math.random() * (max - min) + min;
}

function start() {

   function endProg(a) {
      if (a === true) {
         start();
      }
   }

   let y = getRandomArbitrary();
   y = Math.floor(y);
   console.log(y);

   let n = 3;

   function chislo() {
      let x;
      let a = false;
      do {
         x = prompt('Угадай число от 1 до 100');
         if (x === null) {
            return alert('Игра окончена');
         }
         if (n === 1) {
            a = confirm('Попытки закончились, хотите сыграть еще?')
            endProg(a);
            return;
         }
      } while (!isNumber(x));

      if (+x > y) {
         n--;
         alert("Загаданное число меньше, осталось попыток " + n);
         chislo();
      }
      if (+x < y) {
         n--;
         alert("Загаданное число больше, осталось попыток " + n);
         chislo();
      }
      if (+x === y) {
         a = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');
         endProg(a);
      }
   }
   chislo();
}

start();