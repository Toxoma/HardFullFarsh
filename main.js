"use strict";

let arr = [
   '122',
   '223',
   '224',
   '125',
   '426',
   '127',
   '428',
];

for (let i = 0; i < arr.length; i++) {
   if (arr[i].substr(0, 1) === "2" || arr[i].substr(0, 1) === "4") {
      console.log(arr[i]);
   }
}
//_________________________
function search(a) {
   for (let j = a - 1; j > 1; j--) {
      if (a % j === 0) {
         return;
      }
   }
   console.log(a + " : Делители этого числа: 1 и " + a);
}

for (let i = 1; i <= 100; i++) {
   search(i);
}

