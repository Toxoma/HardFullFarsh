"use strict";

// const arr = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
// const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let lang = prompt("'ru' или 'en'", 'ru');

// 1ый
if (lang === "ru") {
   console.log('"понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"');
} else {
   console.log('"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"');
}

// 2ой
switch (lang) {
   case "ru":
      console.log('"понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"');
      break;
   case "en":
      console.log('"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"');
}

// 3ий
const mas = {
   ru: '"понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"',
   en: '"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"'
};
console.log(mas[lang]);
//_____________________________________________
let namePerson = prompt('Введите имя!');
console.log(namePerson === 'Артем' ? 'директор' : namePerson === 'Максим' ? 'преподаватель' : 'студент');