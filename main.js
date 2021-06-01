"use strict";

let str = ' 123456789012345678901234567890abcd';
const first = function (a) {
   if (typeof (a) !== 'string') {
      return ('Это не строка!!!');
   }
   a = a.trim();
   if (a.length > 30) {
      return a.substring(0, 30) + '...';
   } else {
      return a;
   }
};
console.log(first(str));