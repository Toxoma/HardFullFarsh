"use strict";

const months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];

setInterval(() => {

   let day = new Intl.DateTimeFormat('ru-RU', { weekday: 'long' }).format(new Date());

   day = day[0].toUpperCase() + day.substr(1);

   let nowTime = new Date();

   let first = document.querySelector('#first');

   function changer(hour) {
      switch (hour) {
         case 1, 21:
            return 'час';

         case 2, 3, 4, 22, 23, 24:
            return 'часа';

         default:
            return 'часов';
      }
   }

   let text = `a) 'Сегодня ${day}, ${nowTime.getDay()} ${months[nowTime.getMonth()]} ${nowTime.getFullYear()} года, ${nowTime.getHours()} ${changer(nowTime.getHours())} ${nowTime.getMinutes()} минут ${nowTime.getSeconds()} секунды'`;

   first.innerHTML = text;


   let second = document.querySelector('#second');

   function addNull(item) {
      item = item.split('.');

      for (let i in item) {
         if (item[i].length < 2) {
            item[i] = '0' + item[i];
         }
      }
      item = item.join(':');

      return item.replace(':', '.').replace(':', '.').replace(':', ' - ');
   }

   text = `б) '${addNull(nowTime.toLocaleString().replace(', ', '.').replaceAll(':', '.'))}'`;

   second.innerHTML = text;
}, 1000);